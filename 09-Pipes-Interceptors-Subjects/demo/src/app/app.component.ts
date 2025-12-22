import { Component, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'demo';
  user: any = {
    name: 'John',
    age: 30,
    city: 'New York',
    list: [1, 2, 3, 4, 10],
  };

  users$ = this.userService.usersObs$;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.userService.getUsers();
  }

  loadUsers() {
    this.userService.loadUsers();
  }

  sum = (acc: number, curr: number) => acc + curr;

  p = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Resloved promise');
    }, 3000);
  });

  time$ = interval(1000).pipe(map(() => new Date()));

  addProp() {
    this.user = { ...this.user, prop: 'test' };
  }
}
