import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementDetail } from './announcement-detail.component';

describe('AnnouncementDetailComponent', () => {
  let component: AnnouncementDetail;
  let fixture: ComponentFixture<AnnouncementDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnouncementDetail]
    }).compileComponents();

    fixture = TestBed.createComponent(AnnouncementDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
