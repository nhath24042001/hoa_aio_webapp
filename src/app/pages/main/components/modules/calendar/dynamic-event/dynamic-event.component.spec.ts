import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicEvent } from './dynamic-event.component';

describe('DynamicEvent', () => {
  let component: DynamicEvent;
  let fixture: ComponentFixture<DynamicEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicEvent]
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicEvent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
