import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidDialogComponent } from './bid-dialog.component';

describe('BidDialogComponent', () => {
  let component: BidDialogComponent;
  let fixture: ComponentFixture<BidDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidDialogComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BidDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
