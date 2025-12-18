import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/types/user';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

    user = {} as User;
    constructor(public userService: UserService) { }

    ngOnInit() {
        this.user = this.userService.user;
    }
}
