import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkAccordianComponent } from './park-accordian.component';

describe('ParkAccordianComponent', () => {
  let component: ParkAccordianComponent;
  let fixture: ComponentFixture<ParkAccordianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkAccordianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
