import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { finalize, forkJoin, map } from 'rxjs';

import { ITask } from '~/@types/task';
import { TASK_STATUS } from '~/constants';
import { PRIORITY_OPTION, TYPE_OPTION } from '~/constants/select';
import { EXTRA_DATA, TASK_ACTIONS, TASK_DATA, TASK_HEADER } from '~/data/task';
import { ButtonDirective } from '~/directives/button.directive';
import { Action } from '~/enums';
import { ROUTE_PATH } from '~/enums/route';
import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component';
import { Table } from '~/pages/main/components/shared/table/table.component';
import { TaskService } from '~/pages/main/pages/task-management/task.service';
import { ToastService } from '~/services/toast.service';

import { TaskActionDialog } from '../../task-management/task-action-dialog/task-action-dialog.component';
import { TaskDetailDialog } from '../../task-management/task-detail-dialog/task-detail-dialog.component';

@Component({
  selector: 'task-section',
  imports: [EmptyContentComponent, ButtonDirective, Table],
  templateUrl: './task-section.component.html',
  styleUrl: './task-section.component.scss'
})
export class TaskSectionComponent implements OnInit {
  ref: DynamicDialogRef | undefined;
  ACTIONS = Action;
  ROUTE_PATH = ROUTE_PATH;
  headers = TASK_HEADER;
  actions = TASK_ACTIONS;
  extra_task = EXTRA_DATA;
  priorityOptions = PRIORITY_OPTION;
  typeOptions = TYPE_OPTION;
  task_status = TASK_STATUS;
  sampleData = TASK_DATA;
  tasks: ITask[] = [];
  isLoading = false;

  constructor(
    private router: Router,
    private taskService: TaskService,
    public dialogService: DialogService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;

    forkJoin([
      this.taskService.getTasks({ status: 1 }),
      this.taskService.getTasks({ status: 2 }),
      this.taskService.getTasks({ status: 3 })
    ])
      .pipe(
        map(([newTask, acceptedTask, assignedTask]) => {
          const combined = [
            ...newTask.tasks.tasks,
            ...acceptedTask.tasks.tasks,
            ...assignedTask.tasks.tasks,
            this.extra_task
          ];
          return combined;
        }),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe({
        next: (result) => {
          this.tasks = result
            .flat()
            .slice(0, 5)
            .map((task) => ({
              ...task,
              video: task.video === null ? '' : task.video,
              type: this.typeOptions.find((option) => option.code === task.type)?.name || 'Other',
              priority:
                this.priorityOptions.find((option) => option.code === task.priority)?.name.toLocaleLowerCase() || '',
              status: this.task_status.find((option) => option.code === task.status)?.name.toLocaleLowerCase() || ''
            }));
        }
      });
  }

  onOpenTask(): void {
    this.ref = this.dialogService.open(TaskActionDialog, {
      modal: true,
      width: '1000px',
      data: { type: 'create' }
    });
  }

  onOpenTaskDetail(task_id: number): void {
    this.taskService.getTaskById(task_id).subscribe((response) => {
      if (response.rc === 0) {
        this.ref = this.dialogService.open(TaskDetailDialog, {
          modal: true,
          width: '1000px',

          data: { type: 'detail', task: response.task }
        });
      }
    });
  }

  handleTableAction(event: { actionKey: string; rowData: ITask }) {
    switch (event.actionKey) {
      case 'edit':
        this.onOpenTaskDetail(event.rowData.task_id);
        break;
      case 'delete':
        this.onOpenDeleteDialog(event.rowData.task_id);
        break;
      default:
        break;
    }
  }

  async onOpenDeleteDialog(task_id: number): Promise<void> {
    const confirmed = await this.toastService.showConfirm({
      icon: 'assets/images/common/red-trash-md.svg',
      title: 'Delete task',
      description: 'Are you sure? Proceeding will delete the item from the system, and can not be undone.',
      type: 'error',
      buttonText: 'Delete task'
    });
    if (confirmed) {
      this.taskService.deleteTask(task_id).subscribe((response) => {
        if (response.rc === 0) {
          this.ref?.close();
        }
      });
    }
  }

  redirectToTask(): void {
    this.router.navigate([ROUTE_PATH.TASK_MANAGEMENT]);
  }
}
