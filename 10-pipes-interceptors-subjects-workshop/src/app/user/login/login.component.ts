import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    emailDomains = EMAIL_DOMAINS;

    constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

    get isLoggedIn() {
        return this.userService.isLoggedIn;
    }

    login(form: NgForm) {
        if (form.invalid) {
            return;
        }
        this.userService.login(form.value.email, form.value.password).subscribe({
            next: () => {
                const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
                if (returnUrl) {
                    this.router.navigateByUrl(returnUrl);
                } else {
                    this.router.navigate(['/themes']);
                }
            },
            error: (err) => {
                console.error(err);
            }
        });
    }
}
