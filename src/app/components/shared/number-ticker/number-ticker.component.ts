import { Component, ElementRef, input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { CountUp } from 'countup.js';
@Component({
  selector: 'app-number-ticker',
  imports: [],
  templateUrl: './number-ticker.component.html'
})
export class NumberTicker implements OnInit {
  end = input<number>(0);
  prefix = input<string>('');
  suffix = input<string>('');
  duration = input<number>(2);
  decimal = input<number>(0);

  @ViewChild('counterEl', { static: true }) counterEl!: ElementRef;

  private countUp?: CountUp;

  ngOnInit(): void {
    this.startCount();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['end'] && !changes['end'].firstChange) {
      this.startCount();
    }
  }

  private startCount() {
    this.countUp = new CountUp(this.counterEl.nativeElement, this.end(), {
      duration: this.duration(),
      prefix: this.prefix(),
      suffix: this.suffix(),
      decimalPlaces: this.decimal(),
      separator: ','
    });

    if (!this.countUp.error) {
      this.countUp.start();
    }
  }
}
