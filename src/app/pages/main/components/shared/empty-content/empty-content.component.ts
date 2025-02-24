import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-content',
  imports: [],
  templateUrl: './empty-content.component.html',
  styleUrl: './empty-content.component.scss'
})
export class EmptyContentComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() createText: string = '';
}
