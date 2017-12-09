import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateMaintenanceComponent } from './estate-maintenance.component';

describe('MaintenanceComponent', () => {
  let component: EstateMaintenanceComponent;
  let fixture: ComponentFixture<EstateMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstateMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstateMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
