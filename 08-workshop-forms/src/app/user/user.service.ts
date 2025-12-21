import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/types/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    user = {} as User;
    isLoggedIn: boolean = false;
    
    constructor() { }
    private apiUrl = environment.apiUrl;

    login() {
        this.user = {
            themes: [],
            posts: [],
            _id: "5fa64ca72183ce1728ff3726",
            tel: '+359888888888',
            email:'stoyan@gmail.com',
            username:'Stoyan',
            password:'',
            created_at:'',
            updatedAt:'',
            __v: 0
        }
        this.isLoggedIn = true
    }
}
