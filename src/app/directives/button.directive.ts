import {
  Directive,
  ElementRef,
  Renderer2,
  AfterViewInit,
  input,
  computed
} from '@angular/core';
import { ButtonType } from '~/@types';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective implements AfterViewInit {
  appButton = input.required<ButtonType>();
  icon = input<string>('');
  iconPos = input<'left' | 'right'>('left');
  currentMode = input('')

  iconUrl = computed(() => {
    return `assets/images/${this.currentMode()}/${this.icon()}.svg`
  })

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngAfterViewInit() {
    const button = this.el.nativeElement as HTMLElement;
    this.applyStyles(button);
  }

  private applyStyles(button: HTMLElement) {
    this.renderer.addClass(button, `--btn-${this.appButton()}`);

    if (this.icon()) {
      let iconElement: HTMLImageElement;
      iconElement = this.renderer.createElement('img');
      this.renderer.setAttribute(iconElement, 'src', this.iconUrl());
      this.renderer.setAttribute(iconElement, 'alt', 'button_icon');
      this.renderer.addClass(iconElement, 'me-2');

      if (this.iconPos() === 'left') {
        this.renderer.insertBefore(button, iconElement, button.firstChild);
      } else {
        this.renderer.appendChild(button, iconElement);
      }
    }
  }
}
