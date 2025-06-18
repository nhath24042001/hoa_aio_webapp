import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IHeaderTable } from '~/@types/index.d';
import { ButtonDirective } from '~/directives/button.directive';
import { Action } from '~/enums';
import { ROUTE_PATH } from '~/enums/route';
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
  ROUTE_PATH = ROUTE_PATH;

  headers: IHeaderTable[] = [
    {
      field: 'type_icon',
      name: '',
      width: 20
    },
    {
      field: 'task_name',
      name: 'Task Name',
      width: 200
    },
    {
      field: 'task_type',
      name: 'Type',
      width: 100
    },
    {
      field: 'priority',
      name: 'Priority',
      width: 100
    },
    {
      field: 'created',
      name: 'Created',
      width: 150
    },
    {
      field: 'assigned_to',
      name: 'Assigned To',
      width: 150
    },
    {
      field: 'status',
      name: 'Status',
      width: 100
    },
    {
      field: 'action',
      name: '',
      width: 20
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

  constructor(private router: Router) {}

  redirectToTask(): void {
    this.router.navigate([ROUTE_PATH.TASK_MANAGEMENT]);
  }
}
