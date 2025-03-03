import { Component, Input } from '@angular/core';
import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component';
import { ButtonPrimary } from '~/pages/main/components/shared/button-primary/button-primary.component';
import { Table } from '~/pages/main/components/shared/table/table.component';
import { IHeaderTable } from '~/@types/task';

@Component({
  selector: 'task-section',
  imports: [EmptyContentComponent, ButtonPrimary, Table],
  templateUrl: './task-section.component.html',
  styleUrl: './task-section.component.scss'
})
export class TaskSectionComponent<T> {
  @Input() tasks: T[] = [];

  headers: IHeaderTable[] = [
    {
      field: 'type',
      name: '',
      width: '20px'
    },
    {
      field: 'task_name',
      name: 'Task Name'
    },
    {
      field: 'task_type',
      name: 'Type'
    },
    {
      field: 'priority',
      name: 'Priority'
    },
    {
      field: 'created',
      name: 'Created'
    },
    {
      field: 'assigned_to',
      name: 'Assigned To'
    },
    {
      field: 'status',
      name: 'Status'
    },
    {
      field: 'action',
      name: '',
      width: '20px'
    }
  ];
}
