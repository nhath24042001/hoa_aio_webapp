import { Component, Input } from '@angular/core';

import { IHeaderTable } from '~/@types/task';
import { ButtonDirective } from '~/directives/button.directive';
import { Action } from '~/enums';
import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component';
import { Table } from '~/pages/main/components/shared/table/table.component';

@Component({
  selector: 'task-section',
  imports: [EmptyContentComponent, ButtonDirective, Table],
  templateUrl: './task-section.component.html',
  styleUrl: './task-section.component.scss'
})
export class TaskSectionComponent<T> {
  @Input() tasks: T[] = [];
  ACTIONS = Action;

  headers: IHeaderTable[] = [
    {
      field: 'type_icon',
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

  actions = [
    {
      label: this.ACTIONS.EDIT,
      icon: 'edit',
      actionKey: 'edit',
      className: '--edit-action --pointer mb-2'
    },
    {
      label: this.ACTIONS.DELETE,
      icon: 'trash',
      actionKey: 'delete',
      className: '--delete-action --pointer'
    }
  ];
}
