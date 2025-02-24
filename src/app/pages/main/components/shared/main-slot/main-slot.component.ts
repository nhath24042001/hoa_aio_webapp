import { Component, Input } from '@angular/core';
import { TabsModule } from 'primeng/tabs';

import { ButtonPrimaryComponent } from '~/pages/main/components/shared/button-primary/button-primary.component';

@Component({
  selector: 'main-slot',
  imports: [TabsModule, ButtonPrimaryComponent],
  templateUrl: './main-slot.component.html',
  styleUrl: './main-slot.component.scss'
})
export class MainSlot {
  @Input() filterList: any;
}
