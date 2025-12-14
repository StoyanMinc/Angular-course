import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-ngzone-test',
  templateUrl: './ngzone-test.component.html',
  styleUrls: ['./ngzone-test.component.css']
})
export class NgzoneTestComponent {

  title = 'Some title'
  constructor(private changeDetectorRef: ChangeDetectorRef) {
    setTimeout(() => {
      this.title = 'Some other title';
      //* manualy trigger change detection if ngZone is 'noop'
      // this.changeDetectorRef.detectChanges();
    }, 2000);
  }

}
