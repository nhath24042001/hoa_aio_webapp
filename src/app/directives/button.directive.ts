import { AfterViewInit, computed, Directive, ElementRef, input, Renderer2 } from '@angular/core';

import { ButtonType } from '~/@types';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective implements AfterViewInit {
  appButton = input.required<ButtonType>();
  icon = input<string>('');
  iconPos = input<'left' | 'right' | 'center'>('left');
  currentMode = input('');

  iconUrl = computed(() => {
    if (this.currentMode()) {
      return `assets/images/${this.currentMode()}/${this.icon()}.svg`;
    } else {
      return `assets/images/common/${this.icon()}.svg`;
    }
  });

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    const button = this.el.nativeElement as HTMLElement;
    this.applyStyles(button);
  }

  private applyStyles(button: HTMLElement) {
    this.renderer.addClass(button, '--btn');
    this.renderer.addClass(button, `--btn-${this.appButton()}`);

    if (this.icon()) {
      const iconElement: HTMLImageElement = this.renderer.createElement('img');
      this.renderer.setAttribute(iconElement, 'src', this.iconUrl());
      this.renderer.setAttribute(iconElement, 'alt', 'button_icon');

      if (this.iconPos() === 'left') {
        this.renderer.insertBefore(button, iconElement, button.firstChild);
        this.renderer.addClass(iconElement, 'me-2');
      } else if (this.iconPos() === 'right') {
        this.renderer.appendChild(button, iconElement);
        this.renderer.addClass(iconElement, 'ms-2');
      } else {
        this.renderer.appendChild(button, iconElement);
      }
    }
  }
}
