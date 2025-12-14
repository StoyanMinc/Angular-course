import { Injectable } from '@angular/core';
import { User, UserResponse } from './types/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL = 'https://jsonplaceholder.typicode.com/users'
  users: UserResponse[] = []
  isLoading: boolean = true;
  constructor(private http: HttpClient) { }

  getUsers() {
    this.isLoading = true;
    // return fetch(this.URL)
    //   .then(response => response.json())
    //   .then(users => this.users = users);

    setTimeout(() => {this.http.get<UserResponse[]>(this.URL).subscribe({
      next: (users: UserResponse[]) => {
        this.users = users;
      },
      error: (error: any) => {
        console.error(error);
      },
      complete: () => {
        this.isLoading = false;
      }
    });}, 1000);
  }

  addUser(inputName: HTMLInputElement, unputEmail: HTMLInputElement) {
    const user = {
      name: inputName.value,
      email: unputEmail.value
    } as UserResponse;
    this.users.push(user);
    inputName.value = '';
    unputEmail.value = '';
  }
}
