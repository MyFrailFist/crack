import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NEAComponent } from './nea.component';

describe('NEAComponent', () => {
  let component: NEAComponent;
  let fixture: ComponentFixture<NEAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NEAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NEAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
