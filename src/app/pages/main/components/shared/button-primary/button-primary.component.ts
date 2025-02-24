import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-primary',
  imports: [CommonModule],
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.scss'
})
export class ButtonPrimaryComponent {
  @Input() label: string = '';
  @Input() iconPos: string = 'left';
  @Input() icon: string = '';
  @Input() loading: boolean = false;
  @Input() isPrimaryActive: boolean = false;
}
