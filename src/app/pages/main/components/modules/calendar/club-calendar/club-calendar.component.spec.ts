import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubCalendarComponent } from './club-calendar.component';

describe('ClubCalendarComponent', () => {
  let component: ClubCalendarComponent;
  let fixture: ComponentFixture<ClubCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
