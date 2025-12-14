import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgzoneTestComponent } from './ngzone-test.component';

describe('NgzoneTestComponent', () => {
  let component: NgzoneTestComponent;
  let fixture: ComponentFixture<NgzoneTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgzoneTestComponent]
    });
    fixture = TestBed.createComponent(NgzoneTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
