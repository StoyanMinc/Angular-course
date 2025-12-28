import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { User, UserAuth } from 'src/types/user';

@Injectable({
    providedIn: 'root'
})
export class UserService implements OnDestroy {

    private user$$ = new BehaviorSubject<User | undefined>(undefined);
    private user$ = this.user$$.asObservable();
    user: User | undefined = undefined;
    userSubscription: Subscription | undefined;
    get isLoggedIn(): boolean {
        return !!this.user?._id;
    }

    constructor(private http: HttpClient) {
        this.userSubscription = this.user$.subscribe((user) => {
            this.user = user;
        });
    }

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

    ngOnDestroy(): void {
        this.userSubscription?.unsubscribe();
        // this.userSubscription = undefined;
    }
}