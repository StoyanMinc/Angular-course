import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MyRoutingLickDeractiveDirective } from './my-routing-lick-deractive.directive';
import { MyStructureDirectiveDirective } from './my-structure-directive.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaxCountValidatorDirective } from './max-count-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    MyRoutingLickDeractiveDirective,
    MyStructureDirectiveDirective,
    MaxCountValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule, // for template driven forms
    ReactiveFormsModule // for reactive forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
