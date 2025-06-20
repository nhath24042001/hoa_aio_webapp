import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCalendarComponent } from './general-calendar.component';

describe('GeneralCalendarComponent', () => {
  let component: GeneralCalendarComponent;
  let fixture: ComponentFixture<GeneralCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralCalendarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
