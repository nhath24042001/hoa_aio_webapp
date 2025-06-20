import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubDialogComponent } from './club-dialog.component';

describe('ClubDialogComponent', () => {
  let component: ClubDialogComponent;
  let fixture: ComponentFixture<ClubDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
