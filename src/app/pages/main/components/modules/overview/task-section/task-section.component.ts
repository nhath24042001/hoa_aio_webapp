import { Component } from '@angular/core';
import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component';
import { ButtonPrimary } from '~/pages/main/components/shared/button-primary/button-primary.component';

@Component({
  selector: 'app-task-section',
  imports: [EmptyContentComponent, ButtonPrimary],
  templateUrl: './task-section.component.html',
  styleUrl: './task-section.component.scss'
})
export class TaskSectionComponent {
  tasks = [];
}
