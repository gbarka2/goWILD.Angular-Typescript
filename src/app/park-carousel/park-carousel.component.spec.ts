import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkCarouselComponent } from './park-carousel.component';

describe('ParkCarouselComponent', () => {
  let component: ParkCarouselComponent;
  let fixture: ComponentFixture<ParkCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
