import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSlot } from './main-slot.component';

describe('MainSlot', () => {
  let component: MainSlot;
  let fixture: ComponentFixture<MainSlot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSlot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSlot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
