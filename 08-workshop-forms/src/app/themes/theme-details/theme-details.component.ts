import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/user/user.service';
import { Theme } from 'src/types/theme';

@Component({
    selector: 'app-theme-details',
    templateUrl: './theme-details.component.html',
    styleUrls: ['./theme-details.component.css']
})
export class ThemeDetailsComponent {

    constructor(private apiService: ApiService, private route: ActivatedRoute, private userService: UserService) { }

    theme = {} as Theme;
    isLoading: boolean = true;

    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        this.apiService.getTheme(id).subscribe({
            next: (theme) => {
                this.theme = theme;
                this.isLoading = false;
            },
            error: (error) => {
                console.error(error);
                this.isLoading = false;
            }
        });
    }

    checkIsSubscribed() {
        return this.theme.subscribers.includes(this.userService.user._id);
    }
}
