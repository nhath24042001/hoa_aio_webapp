import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';

import { reportActions, reportHeader, reportList } from '~/data/report';
import { ButtonPrimary } from '~/pages/main/components/shared/button-primary/button-primary.component';
import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component';
import { Table } from '~/pages/main/components/shared/table/table.component';

import { GenerateReport } from '../../components/modules/report/generate-report/generate-report.component';

@Component({
  selector: 'app-report',
  imports: [EmptyContentComponent, ButtonPrimary, Table],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent {
  headers = reportHeader;
  reports = reportList;
  actions = reportActions;

  constructor(public dialogService: DialogService) {}

  onOpenGenerateReport() {
    this.dialogService.open(GenerateReport, {
      modal: true,
      width: '800px'
    });
  }
}
