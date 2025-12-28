import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduxSyncSimulationComponent } from './redux-sync-simulation.component';

describe('ReduxSyncSimulationComponent', () => {
  let component: ReduxSyncSimulationComponent;
  let fixture: ComponentFixture<ReduxSyncSimulationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReduxSyncSimulationComponent]
    });
    fixture = TestBed.createComponent(ReduxSyncSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
