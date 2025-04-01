import { Component } from '@angular/core'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { TabsModule } from 'primeng/tabs'

import { projectHeaders, projectsData } from '~/data/project'
import { CreateProject } from '~/pages/main/components/modules/project/create-project/create-project.component'
import { ProjectDetail } from '~/pages/main/components/modules/project/project-detail/project-detail.component'
import { ButtonPrimary } from '~/pages/main/components/shared/button-primary/button-primary.component'
import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component'
import { MainHeader } from '~/pages/main/components/shared/main-header/main-header.component'
import { Table } from '~/pages/main/components/shared/table/table.component'
import { ToastService } from '~/services/toast.service'

@Component({
  selector: 'app-project',
  imports: [TabsModule, MainHeader, EmptyContentComponent, ButtonPrimary, Table],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  ref: DynamicDialogRef | undefined
  isActive: boolean = true
  projects = projectsData
  headers = projectHeaders

  actions = [
    {
      label: 'Edit',
      icon: 'edit',
      actionKey: 'edit',
      className: '--pointer mb-2'
    },
    {
      label: 'Delete',
      icon: 'trash',
      actionKey: 'delete',
      className: '--delete-action --pointer'
    }
  ]

  constructor(
    public dialogService: DialogService,
    private toastService: ToastService
  ) {}

  onSearch() {}

  onOpenCreateProject(): void {
    this.ref = this.dialogService.open(CreateProject, {
      modal: true,
      width: '1000px'
    })
    this.ref.onClose.subscribe((task: any) => {})
  }

  onOpenProjectDetail(project: any): void {
    this.ref = this.dialogService.open(ProjectDetail, {
      modal: true,
      width: '1000px',
      data: {}
    })
    this.ref.onClose.subscribe((task: any) => {})
  }

  handleTableAction(event: { actionKey: string; rowData: any }) {
    switch (event.actionKey) {
      case 'edit':
        this.onOpenProjectDetail(event.rowData)
        break
      case 'delete':
        this.onOpenDeleteDialog()
        break
      default:
        console.warn('Unknown action:', event.actionKey)
    }
  }

  async onOpenDeleteDialog(): Promise<void> {
    const confirmed = await this.toastService.showConfirm({
      icon: 'assets/images/common/calendar-x-lg.svg',
      title: 'Delete Task',
      description: 'Are you sure? Proceeding will delete the event from the system, and can not be undone.',
      type: 'error',
      buttonText: 'Delete task'
    })

    if (confirmed) {
      console.log('run 1')
    }
  }
}
