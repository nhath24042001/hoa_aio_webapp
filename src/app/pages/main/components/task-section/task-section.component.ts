import { Component } from '@angular/core';
import { EmptyContentComponent } from '../empty-content/empty-content.component';
import { ButtonPrimaryComponent } from '../shared/button-primary/button-primary.component';

@Component({
  selector: 'app-task-section',
  imports: [EmptyContentComponent, ButtonPrimaryComponent],
  templateUrl: './task-section.component.html',
  styleUrl: './task-section.component.scss'
})
export class TaskSectionComponent {
  tasks = [];
}
