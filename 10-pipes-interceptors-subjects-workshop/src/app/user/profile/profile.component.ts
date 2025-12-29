import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User, UserAuth } from 'src/types/user';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/directives/utils/email-validator';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

    user = {} as User | undefined;
    isEditMode = false;
    emailDomains = EMAIL_DOMAINS;

    form = this.fb.group({
        username: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required, emailValidator(this.emailDomains)]],
        tel: ['']
    });
    constructor(public userService: UserService, private fb: FormBuilder    ) { }

    toggleEditMode() {
        this.isEditMode = !this.isEditMode;
    }

    updateProfile() {
        if (this.form.invalid) {
            return;
        }
        this.userService.updateProfile(
            this.form.value.username!,
            this.form.value.email!,
            this.form.value.tel!
        ).subscribe({
            next: () => {
                this.toggleEditMode();
            }
        });
    }

    cancelChanges(e: Event) {
        e.preventDefault();
        this.toggleEditMode();
    }
}
