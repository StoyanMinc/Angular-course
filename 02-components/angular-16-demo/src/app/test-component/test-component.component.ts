import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent {
  
  @Input() color: string = 'red';
  @Output() dataTaken = new EventEmitter<string>();

  takeData(childInputValue: string) {
    console.log(childInputValue);
    this.dataTaken.emit(childInputValue);
  }
}
