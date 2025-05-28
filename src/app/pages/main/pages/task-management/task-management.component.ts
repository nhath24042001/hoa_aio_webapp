import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounce } from 'lodash-es';
import { DatePickerModule } from 'primeng/datepicker';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { TabsModule } from 'primeng/tabs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';

import { ITab } from '~/@types';
import { ITaskPayload } from '~/@types/task';
import { TASK_STATUS } from '~/constants';
import { TASK_ACTIONS, TASK_DATA, TASK_HEADER } from '~/data/task';
import { ButtonDirective } from '~/directives/button.directive';
import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component';
import { MainHeader } from '~/pages/main/components/shared/main-header/main-header.component';
import { Table } from '~/pages/main/components/shared/table/table.component';
import { ToastService } from '~/services/toast.service';

import { TaskClaimDialog } from '../../components/modules/task-management/task-claim-dialog/task-claim-dialog.component';
import { TaskActionDialogComponent } from './../../components/modules/task-management/task-action-dialog/task-action-dialog.component';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task-management',
  imports: [
    TabsModule,
    MultiSelectModule,
    FormsModule,
    DatePickerModule,
    EmptyContentComponent,
    ButtonDirective,
    MainHeader,
    Table,
    ReactiveFormsModule
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
  task_status = TASK_STATUS;

  tabs: ITab<ITaskPayload>[] = [
    {
      name: 'All Tasks',
      img: 'assets/images/common/rows-01.svg',
      activeImg: 'assets/images/common/rows-01.svg',
      status: 2,
      data: [],
      loading: false
    },
    {
      name: 'Claims',
      img: 'assets/images/common/violation-alert.svg',
      activeImg: 'assets/images/common/violation-alert.svg',
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

  loadTabData(status: number, index: number) {
    const start = Date.now();
    this.tabs[index].loading = true;

    const filters = this.filterForm?.value || {};

    this.taskService
      .getTasks({
        status,
        search: this.search,
        ...filters
      })
      .subscribe({
        next: (data) => {
          this.tabs[index].data = data.tasks.tasks;
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

  handleTableAction(event: { actionKey: string; rowData: ITaskPayload }) {
    switch (event.actionKey) {
      case 'edit':
        this.onOpenTaskDetail();
        break;
      case 'delete':
        this.onOpenDeleteDialog();
        break;
      default:
        break;
    }
  }

  initFilterForm(): void {
    this.filterForm = this.fb.group({
      date_from: [null],
      date_to: [null],
      assigned_to: [null],
      priority: [null]
    });
  }

  clearFilter(): void {
    this.filterForm.reset();
  }

  onOpenTask(type: 'claim' | 'action_item'): void {
    const component = type === 'claim' ? TaskClaimDialog : TaskActionDialogComponent;

    this.ref = this.dialogService.open(component, {
      modal: true,
      width: '1000px',
      data: { type: 'create' }
    });
  }

  onOpenTaskDetail(): void {}

  async onOpenDeleteDialog(): Promise<void> {
    // const confirmed = await this.toastService.showConfirm({
    //   icon: 'assets/images/common/red-trash-md.svg',
    //   title: 'Delete task',
    //   description:
    //     'Are you sure? Proceeding will delete the item from the system, and can not be undone.',
    //   type: 'error',
    //   buttonText: 'Delete task'
    // });
    // if (confirmed) {
    // }
  }
}
