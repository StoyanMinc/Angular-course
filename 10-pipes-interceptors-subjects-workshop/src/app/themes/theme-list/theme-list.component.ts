import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../api.service';
import { Theme } from 'src/types/theme';
import { UserService } from 'src/app/user/user.service';
import { map } from 'rxjs';

@Component({
    selector: 'app-theme-list',
    templateUrl: './theme-list.component.html',
    styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit {

    themes: Theme[] = [];
    isLoading: boolean = true;
    constructor(private apiService: ApiService, public userService: UserService) { }


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
        return this.userService.user$.pipe(
            map((user) => theme.subscribers.includes(user?._id || ''))
        );
    }
}
