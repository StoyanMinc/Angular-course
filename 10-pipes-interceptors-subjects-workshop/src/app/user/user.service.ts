import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, take, tap } from 'rxjs';
import { User } from 'src/types/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private user$$ = new BehaviorSubject<User | undefined>(undefined);
    user$ = this.user$$.asObservable() as Observable<User | undefined>;

    readonly isLoggedIn$ = this.user$.pipe(
        filter(user => user !== undefined),
        take(1),
        map(user => !!user?._id)
    );

    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        return this.http.post<User>('/api/login', { email, password })
            .pipe(tap((user) =>
                this.user$$.next(user)
            ))
    }

    register(username: string, email: string, tel: string, password: string, rePassword: string) {
        return this.http.post<User>('/api/register', { username, email, tel, password, rePassword })
            .pipe(tap((user) =>
                this.user$$.next(user)
            ));
    }

    logout() {
        return this.http.post('/api/logout', {})
            .pipe(tap(() =>
                this.user$$.next(undefined)
            ));
    }

    getProfile() {
        return this.http.get<User>('/api/users/profile').pipe(tap((user) =>
            this.user$$.next(user)
        ));
    }

    updateProfile(username: string, email: string, tel: string) {
        return this.http.put<User>('/api/users/profile', { username, email, tel })
            .pipe(tap((user) =>
                this.user$$.next(user)
            ));
    }
}