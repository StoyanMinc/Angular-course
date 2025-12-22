import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersSubject$$ = new BehaviorSubject<any[] | null>(null);
  usersObs$ = this.usersSubject$$.asObservable();

  constructor(private http: HttpClient) {}

  loadUsers() {
    this.usersSubject$$.next(null);
    return this.http
      .get<any[]>('/api/users')
      .subscribe((users) => this.usersSubject$$.next(users));
  }
}
