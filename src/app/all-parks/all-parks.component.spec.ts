import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllParksComponent } from './all-parks.component';

describe('AllParksComponent', () => {
  let component: AllParksComponent;
  let fixture: ComponentFixture<AllParksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllParksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllParksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
