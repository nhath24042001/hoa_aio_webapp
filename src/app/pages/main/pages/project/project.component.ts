import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { MainHeader } from '~/pages/main/components/shared/main-header/main-header.component';
import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component';
import { ButtonPrimary } from '~/pages/main/components/shared/button-primary/button-primary.component';
import { projectHeaders, projectsData } from '~/data/project';
import { Table } from '~/pages/main/components/shared/table/table.component';
import { CreateProject } from '~/pages/main/components/modules/project/create-project/create-project.component';
import { ProjectDetail } from '~/pages/main/components/modules/project/project-detail/project-detail.component';

@Component({
  selector: 'app-project',
  imports: [TabsModule, MainHeader, EmptyContentComponent, ButtonPrimary, Table],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  ref: DynamicDialogRef | undefined;
  isActive: boolean = true;
  projects = projectsData;
  headers = projectHeaders;

  constructor(public dialogService: DialogService) {}

  onSearch() {}

  onOpenCreateProject(): void {
    this.ref = this.dialogService.open(CreateProject, {
      modal: true,
      width: '1000px'
    });
    this.ref.onClose.subscribe((task: any) => {});
  }

  onOpenProjectDetail(project: any): void {
    this.ref = this.dialogService.open(ProjectDetail, {
      modal: true,
      width: '1000px',
      data: {}
    });
    this.ref.onClose.subscribe((task: any) => {});
  }
}
