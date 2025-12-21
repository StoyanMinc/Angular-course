import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';

import { LoaderComponent } from './loader/loader.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { RouterModule } from '@angular/router';
import { EmailDirective } from './directives/email.directive';



@NgModule({
    declarations: [LoaderComponent, WelcomeMessageComponent, EmailDirective],
    imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
    exports: [LoaderComponent, WelcomeMessageComponent, EmailDirective]
})
export class SharedModule {
}
