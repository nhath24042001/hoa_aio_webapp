import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberTicker } from './number-ticker.component';

describe('NumberTickerComponent', () => {
  let component: NumberTicker;
  let fixture: ComponentFixture<NumberTicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberTicker]
    }).compileComponents();

    fixture = TestBed.createComponent(NumberTicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
