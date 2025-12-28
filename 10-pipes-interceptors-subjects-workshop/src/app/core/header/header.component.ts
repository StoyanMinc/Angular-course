import { Component } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor(public userService: UserService, private router: Router) { }
    get isLoggedIn() {
        return this.userService.isLoggedIn;
    }
    get user() {
        return this.userService.user;
    }

    logout() {
        this.userService.logout().subscribe({
            next: () => {
                this.router.navigate(['/auth/login']);
            },
            error: (err) => {
                console.error(err);
            }
        });
    }
}
