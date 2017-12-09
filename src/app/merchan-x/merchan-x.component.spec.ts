import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchanXComponent } from './merchan-x.component';

describe('MerchanXComponent', () => {
  let component: MerchanXComponent;
  let fixture: ComponentFixture<MerchanXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchanXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchanXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
