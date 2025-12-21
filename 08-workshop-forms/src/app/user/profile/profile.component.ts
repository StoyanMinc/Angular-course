import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/types/user';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/directives/utils/email-validator';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

    user = {} as User;
    isEditMode = false;
    emailDomains = EMAIL_DOMAINS;

    form = this.fb.group({
        username: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required, emailValidator(this.emailDomains)]],
        tel: ['']
    });
    constructor(public userService: UserService, private fb: FormBuilder    ) { }

    ngOnInit() {
        this.user = this.userService.user;
    }

    toggleEditMode() {
        this.isEditMode = !this.isEditMode;
    }

    saveChanges() {
        if (this.form.invalid) {
            return;
        }
        console.log(this.form.value);
        this.user = { ...this.form.value } as User;
        this.userService.user = { ...this.form.value } as User;
        console.log(this.form.value);
        this.toggleEditMode();
    }

    cancelChanges(e: Event) {
        e.preventDefault();
        this.toggleEditMode();
    }
}
