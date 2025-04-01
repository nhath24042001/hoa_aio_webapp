import { Component, computed, signal } from '@angular/core'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { TabsModule } from 'primeng/tabs'

import { documentTabHeader } from '~/constants/tab'
import { documentActions, documentHeader, documentList, letterActions, letterHeader, letterList } from '~/data/document'
import { ComposeLetter } from '~/pages/main/components/modules/document/compose-letter/compose-letter.component'
import { UploadDocument } from '~/pages/main/components/modules/document/upload-document/upload-document.component'
import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component'
import { MainHeader } from '~/pages/main/components/shared/main-header/main-header.component'
import { Table } from '~/pages/main/components/shared/table/table.component'

@Component({
  selector: 'app-document',
  imports: [TabsModule, MainHeader, EmptyContentComponent, Table],
  templateUrl: './document.component.html',
  styleUrl: './document.component.scss'
})
export class DocumentComponent {
  ref: DynamicDialogRef | undefined
  activeTab = signal('0')
  tabs = documentTabHeader
  documentHeaders = documentHeader
  documents = documentList
  documentActions = documentActions
  letterHeaders = letterHeader
  letters = letterList
  letterActions = letterActions

  labelButton = computed(() => {
    return this.activeTab() === '0' ? 'New Document' : 'New Letter'
  })

  constructor(public dialogService: DialogService) {}

  onTabChange(tabIndex: number | string) {
    this.activeTab.set(tabIndex.toString())
  }

  onAddSection() {
    if (this.activeTab() === '0') {
      this.ref = this.dialogService.open(UploadDocument, {
        modal: true,
        width: '800px'
      })
    } else {
      this.ref = this.dialogService.open(ComposeLetter, {
        modal: true,
        width: '1000px'
      })
    }
  }
}
