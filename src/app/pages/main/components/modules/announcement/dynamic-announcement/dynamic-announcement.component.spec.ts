import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicAnnouncement } from './dynamic-announcement.component';

describe('DynamicAnnouncementComponent', () => {
  let component: DynamicAnnouncement;
  let fixture: ComponentFixture<DynamicAnnouncement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicAnnouncement]
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicAnnouncement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
