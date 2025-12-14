import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { UserResponse } from './types/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ServiceRxjs';


  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
  }

  addUser(name: HTMLInputElement, email: HTMLInputElement) {
    this.userService.addUser(name, email);
  }
}
