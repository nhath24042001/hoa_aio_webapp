import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { MainHeader } from '~/pages/main/components/shared/main-header/main-header.component';
import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component';
import { ButtonPrimary } from '~/pages/main/components/shared/button-primary/button-primary.component';
import { projectHeaders, projectsData } from '~/data/project';
import { Table } from '~/pages/main/components/shared/table/table.component';

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

  onOpenCreateTask(): void {
    // this.ref = this.dialogService.open(CreateTask, {
    //   modal: true,
    //   width: '1000px'
    // });
    // this.ref.onClose.subscribe((task: any) => {});
  }

  onOpenTaskDetail(): void {
    // this.ref = this.dialogService.open(TaskDetail, {
    //   modal: true,
    //   width: '1000px'
    // });
  }
}
