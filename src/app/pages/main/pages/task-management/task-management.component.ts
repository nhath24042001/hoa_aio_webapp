import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounce, uniqBy } from 'lodash-es';
import { DatePickerModule } from 'primeng/datepicker';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SelectModule } from 'primeng/select';
import { TabsModule } from 'primeng/tabs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';

import { ISelect, ITab } from '~/@types';
import { ITask } from '~/@types/task';
import { TASK_CUSTOM_STATUS, TASK_STATUS } from '~/constants';
import { PRIORITY_OPTION, TYPE_OPTION } from '~/constants/select';
import { EXTRA_DATA, TASK_ACTIONS, TASK_DATA, TASK_HEADER } from '~/data/task';
import { ButtonDirective } from '~/directives/button.directive';
import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component';
import { MainHeader } from '~/pages/main/components/shared/main-header/main-header.component';
import { Table } from '~/pages/main/components/shared/table/table.component';
import { ToastService } from '~/services/toast.service';

import { TaskActionDialog } from '../../components/modules/task-management/task-action-dialog/task-action-dialog.component';
import { TaskClaimDialog } from '../../components/modules/task-management/task-claim-dialog/task-claim-dialog.component';
import { TaskDetailDialog } from '../../components/modules/task-management/task-detail-dialog/task-detail-dialog.component';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task-management',
  imports: [
    TabsModule,
    FormsModule,
    DatePickerModule,
    EmptyContentComponent,
    ButtonDirective,
    MainHeader,
    Table,
    ReactiveFormsModule,
    SelectModule
  ],
  templateUrl: './task-management.component.html',
  styleUrl: './task-management.component.scss'
})
export class TaskManagementComponent implements OnInit {
  ref: DynamicDialogRef | undefined;
  activeTab = signal('0');
  headers = TASK_HEADER;
  sampleData = TASK_DATA;
  actions = TASK_ACTIONS;
  task_custom_status = TASK_CUSTOM_STATUS;
  typeOptions = TYPE_OPTION;
  priorityOptions = PRIORITY_OPTION;
  extra_task = EXTRA_DATA;
  task_status = TASK_STATUS;
  assignList: ISelect[] = [];

  tabs: ITab<ITask>[] = [
    {
      name: 'All Tasks',
      img: 'assets/images/common/rows-01.svg',
      activeImg: 'assets/images/common/rows-active-01.svg',
      status: 2,
      data: [],
      loading: false
    },
    {
      name: 'Claims',
      img: 'assets/images/common/violation-alert.svg',
      activeImg: 'assets/images/common/violation-alert-active.svg',
      status: 0,
      data: [],
      loading: false
    },
    {
      name: 'Action Items',
      img: 'assets/images/common/clipboard-check.svg',
      activeImg: 'assets/images/light/clipboard-check-sm.svg',
      status: 1,
      data: [],
      loading: false
    }
  ];

  filterForm!: FormGroup;
  search: string = '';

  constructor(
    public dialogService: DialogService,
    private toastService: ToastService,
    private taskService: TaskService,
    private fb: FormBuilder
  ) {
    this.initFilterForm();
  }

  ngOnInit(): void {
    this.getDefaultTab();
    const tabIdx = parseInt(this.activeTab(), 10);

    this.onGetListAssignedTo();

    this.filterForm.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => this.loadTabData(this.tabs[tabIdx].status, tabIdx))
      )
      .subscribe();
  }

  onSearchChange = debounce((text: string) => {
    this.search = text;
    const tabIdx = parseInt(this.activeTab(), 10);
    this.loadTabData(this.tabs[tabIdx].status, tabIdx);
  }, 500);

  onTabChange(tabIndex: number | string) {
    this.activeTab.set(tabIndex.toString());
    const tabIdx = parseInt(tabIndex.toString(), 10);
    this.loadTabData(this.tabs[tabIdx].status, tabIdx);
  }

  onGetListAssignedTo() {
    this.assignList = uniqBy(
      this.extra_task.map((task) => ({
        name: task.assigned_to_name,
        code: task.assigned_to
      })),
      'code'
    );
  }

  loadTabData(status: number, index: number) {
    const start = Date.now();
    this.tabs[index].loading = true;

    const filters = this.filterForm?.value || {};

    this.taskService
      .getTasks({
        status,
        search: this.search.toLowerCase(),
        ...filters
      })
      .subscribe({
        next: () => {
          this.tabs[index].data = this.extra_task.map((task) => ({
            ...task,
            video: task.video === null ? '' : task.video,
            type: this.typeOptions.find((option) => option.code === task.type)?.name || 'Other',
            priority:
              this.priorityOptions.find((option) => option.code === task.priority)?.name.toLocaleLowerCase() || '',
            status: this.task_status.find((option) => option.code === task.status)?.name.toLocaleLowerCase() || ''
          }));
        },
        error: () => {
          this.tabs[index].data = [];
        },
        complete: () => {
          const duration = Date.now() - start;
          const remaining = 1500 - duration;
          setTimeout(
            () => {
              this.tabs[index].loading = false;
            },
            remaining > 0 ? remaining : 0
          );
        }
      });
  }

  getDefaultTab() {
    const tabIdx = parseInt(this.activeTab(), 10);
    this.loadTabData(this.tabs[tabIdx].status, tabIdx);
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

  initFilterForm(): void {
    this.filterForm = this.fb.group({
      status: [null],
      date_from: [null],
      date_to: [null],
      assigned_to: [null],
      priority: [null]
    });
  }

  clearFilter(): void {
    this.filterForm.reset();
  }

  clearFilterForm(formControlName: string): void {
    this.filterForm.get(formControlName)?.reset();
  }

  clearDateFilter(): void {
    this.filterForm.get('date_from')?.reset();
    this.filterForm.get('date_to')?.reset();
  }

  onOpenTask(): void {
    if (this.activeTab() === '2') {
      this.ref = this.dialogService.open(TaskActionDialog, {
        modal: true,
        width: '1000px',
        data: { type: 'create' }
      });
    } else {
      this.ref = this.dialogService.open(TaskClaimDialog, {
        modal: true,
        width: '1000px',
        data: { type: 'create' }
      });
    }
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
}
