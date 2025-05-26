import { Component, OnInit, signal } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TabsModule } from 'primeng/tabs';
import { forkJoin } from 'rxjs';

import { PROJECT_TABS } from '~/constants/tab';
import { PROJECT_ACTIONS, PROJECT_HEADER } from '~/data/project';
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
  isActive: boolean = true;
  headers = PROJECT_HEADER;
  tabs = PROJECT_TABS;

  all_projects: any[] = [];
  on_hold_projects: any[] = [];
  completed_projects: any[] = [];
  canceled_projects: any[] = [];

  actions = PROJECT_ACTIONS;

  constructor(
    public dialogService: DialogService,
    private toastService: ToastService,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.getAllProjects();
    this.getProjectList();
  }

  getAllProjects() {
    this.projectService.getProjects({}).subscribe({
      next: (res) => {
        this.all_projects = res.projects;
      }
    });
  }

  getProjectList() {
    forkJoin({
      open_tasks: this.projectService.getProjects({ status: 0 }),
      on_hold_tasks: this.projectService.getProjects({ status: 3 }),
      completed_tasks: this.projectService.getProjects({ status: 4 }),
      canceled_tasks: this.projectService.getProjects({ status: 5 })
    }).subscribe({
      next: ({ open_tasks, on_hold_tasks, completed_tasks, canceled_tasks }) => {
        this.all_projects = open_tasks.projects;
        this.on_hold_projects = on_hold_tasks.projects;
        this.completed_projects = completed_tasks.projects;
        this.canceled_projects = canceled_tasks.projects;
      }
    });
  }

  onSearch() {}

  onTabChange(tabIndex: number | string) {
    this.activeTab.set(tabIndex.toString());
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

  onOpenProjectDetail(): void {
    // this.ref = this.dialogService.open(ProjectDialog, {
    //   modal: true,
    //   width: '1000px',
    //   data: {
    //     type: 'detail',
    //     data: {
    //       title: 'Fix main entrance watering system',
    //       created_date: '2/2/2021',
    //       update_date: '2/2/2022',
    //       status: 'new',
    //       formData: {
    //         project_type: 'maintenance',
    //         priority: 'urgent',
    //         eta_time: '2023-10-01',
    //         vendor_name: 'AB Services Co., HardHatters, Monkey Biz & Co.',
    //         action_items:
    //           'Sign contract with plumbing vendor, Sign contract for watering system project',
    //         project_manager: [
    //           {
    //             id: '1',
    //             name: 'John Doe',
    //             image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
    //           }
    //         ],
    //         cost: '$2,500-$3,000',
    //         resident_name: '',
    //         bid: 'Palm Springs Main Entrance Bid',
    //         detail:
    //           'Negotiate terms and finalize the service agreement with the selected plumbing vendor for the office renovation project. Ensure all requirements are clearly outlined to avoid any service disruptions.',
    //         attachments: [
    //           {
    //             file_name: 'Video Capture 1.MP4',
    //             file_type: 'video/mp4',
    //             file_size: '2.5 MB'
    //           },
    //           {
    //             file_name: 'Video Capture 1.MP4',
    //             file_type: 'video/mp4',
    //             file_size: '2.5 MB'
    //           }
    //         ]
    //       }
    //     }
    //   }
    // });
    // this.ref.onClose.subscribe(() => {});
  }

  handleTableAction(event: { actionKey: string; rowData: any }) {
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

  async onOpenDeleteDialog(): Promise<void> {
    const confirmed = await this.toastService.showConfirm({
      icon: 'assets/images/common/red-trash-md.svg',
      title: 'Delete Item',
      description:
        'Are you sure? Proceeding will delete the item from the system, and can not be undone.',
      type: 'error',
      buttonText: 'Delete'
    });

    if (confirmed) {
      console.log('run 1');
    }
  }
}
