import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { User, UserResponse } from '../types/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {

  @Input() users: UserResponse[] = [];

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    // setInterval(() => {
    //   this.changeDetectorRef.detectChanges();
    // }, 4000);

  }

  refresh() {
    this.changeDetectorRef.detectChanges();
  }
}
