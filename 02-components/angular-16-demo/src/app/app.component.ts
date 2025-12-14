import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataTaken: string = '';
  title = 'angular-16-demo';
  color: string = 'red';

  changeColor(color: string) {
    this.color = color;
  }

  onDataTaken(data: string) {
    this.dataTaken = data;
    console.log('from app component: ', this.dataTaken);
  }
}
