import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../api.service';
import { Theme } from 'src/types/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
    selector: 'app-theme-list',
    templateUrl: './theme-list.component.html',
    styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit {

    themes: Theme[] = [];
    isLoading: boolean = true;
    constructor(private apiService: ApiService, private userService: UserService) { }

    get isLoggedIn() {
        return this.userService.isLoggedIn;
    }

    ngOnInit() {
        this.apiService.getThemes().subscribe({
            next: (themes) => {
                this.themes = themes;
                this.isLoading = false;
            },
            error: (error) => {
                console.error(error);
                this.isLoading = false;
            }
        });
    }

    checkIsSubscribed(theme: Theme) {
        return theme.subscribers.includes(this.userService.user._id);
    }
}
