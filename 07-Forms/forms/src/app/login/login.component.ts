import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
@ViewChild('loginForm') loginForm: NgForm | undefined;

  onSubmit(loginForm: NgForm) {

    if(!loginForm.valid) {
      console.log('Form is not valid');
      return;
    }
    // tp have values must have ngModel on input fields
    const {email, password} = loginForm.value;
    console.log(email, password);
    //two ways toreset form
    loginForm.reset();
    loginForm.setValue({email: '', password: ''});
  }

}
