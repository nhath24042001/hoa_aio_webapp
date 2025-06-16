import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounce } from 'lodash-es';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TabsModule } from 'primeng/tabs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';

import { ITab } from '~/@types';
import { Project } from '~/@types/project';
import { PROJECT_PRIORITY, PROJECT_STATUS, PROJECT_TYPES } from '~/constants/select';
import { EXTRA_PROJECT, PROJECT_ACTIONS, PROJECT_DATA, PROJECT_HEADER } from '~/data/project';
import { ButtonDirective } from '~/directives/button.directive';
import { ProjectDialog } from '~/pages/main/components/modules/project/project-dialog/project-dialog.component';
import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component';
import { MainHeader } from '~/pages/main/components/shared/main-header/main-header.component';
import { Table } from '~/pages/main/components/shared/table/table.component';
import { ToastService } from '~/services/toast.service';

import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  imports: [TabsModule, MainHeader, EmptyContentComponent, ButtonDirective, Table],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {
  ref: DynamicDialogRef | undefined;
  activeTab = signal('0');
  headers = PROJECT_HEADER;
  sampleData = PROJECT_DATA;
  actions = PROJECT_ACTIONS;
  extra_project = EXTRA_PROJECT;
  typeOptions = PROJECT_TYPES;
  priorityOptions = PROJECT_PRIORITY;
  statusOptions = PROJECT_STATUS;

  tabs: ITab<Project>[] = [
    {
      name: 'Open Projects',
      img: 'assets/images/common/perspective-01.svg',
      activeImg: 'assets/images/common/perspective.svg',
      status: 0,
      data: [],
      loading: false
    },
    {
      name: 'On Hold',
      img: 'assets/images/common/hand.svg',
      activeImg: 'assets/images/common/hand-active.svg',
      status: 3,
      data: [],
      loading: false
    },
    {
      name: 'Completed',
      img: 'assets/images/common/check-circle-broken.svg',
      activeImg: 'assets/images/common/check-circle-broken-active.svg',
      status: 4,
      data: [],
      loading: false
    },
    {
      name: 'Canceled',
      img: 'assets/images/common/x-circle.svg',
      activeImg: 'assets/images/common/x-circle-active.svg',
      status: 5,
      data: [],
      loading: false
    }
  ];

  filterForm!: FormGroup;
  search: string = '';

  constructor(
    public dialogService: DialogService,
    private toastService: ToastService,
    private projectService: ProjectService,
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

  getDefaultTab() {
    const tabIdx = parseInt(this.activeTab(), 10);
    this.loadTabData(this.tabs[tabIdx].status, tabIdx);
  }

  onSearchChange = debounce((text: string) => {
    this.search = text;
    const tabIdx = parseInt(this.activeTab(), 10);
    this.loadTabData(this.tabs[tabIdx].status, tabIdx);
  }, 500);

  onTabChange(tabIndex: string | number): void {
    this.activeTab.set(tabIndex.toString());
    const tabIdx = parseInt(tabIndex.toString(), 10);
    this.loadTabData(this.tabs[tabIdx].status, tabIdx);
  }

  loadTabData(status: number, index: number) {
    const start = Date.now();
    this.tabs[index].loading = true;

    const filters = this.filterForm?.value || {};

    this.projectService
      .getProjects({
        status,
        search: this.search,
        ...filters
      })
      .subscribe({
        next: () => {
          // this.tabs[index].data = data.projects;
          this.tabs[index].data = this.extra_project.map((project) => ({
            ...project,
            type: this.typeOptions.find((option) => option.code === project.type)?.name || 'Other',
            priority:
              this.priorityOptions.find((option) => option.code === project.priority)?.name.toLocaleLowerCase() || '',
            status: this.statusOptions.find((option) => option.code === project.status)?.name.toLocaleLowerCase() || ''
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

  initFilterForm(): void {
    this.filterForm = this.fb.group({
      type: [''],
      date_from: [''],
      date_to: [null]
    });
  }

  handleTableAction(event: { actionKey: string; rowData: Project }): void {
    switch (event.actionKey) {
      case 'edit':
        this.onOpenProjectDetail();
        break;
      case 'delete':
        this.onOpenDeleteDialog();
        break;
      default:
        break;
    }
  }

  onOpenCreateProject(): void {
    this.ref = this.dialogService.open(ProjectDialog, {
      modal: true,
      width: '1000px',
      data: {
        type: 'create'
      }
    });
    this.ref.onClose.subscribe(() => {});
  }

  onOpenProjectDetail(): void {}

  async onOpenDeleteDialog(): Promise<void> {
    // const confirmed = await this.toastService.showConfirm({
    //   icon: 'assets/images/common/red-trash-md.svg',
    //   title: 'Delete Item',
    //   description:
    //     'Are you sure? Proceeding will delete the item from the system, and can not be undone.',
    //   type: 'error',
    //   buttonText: 'Delete'
    // });
    // if (confirmed) {
    //   console.log('run 1');
    // }
  }
}
