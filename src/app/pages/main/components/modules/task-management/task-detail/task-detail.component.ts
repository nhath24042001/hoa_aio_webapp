import { Component } from '@angular/core'
import { AvatarModule } from 'primeng/avatar'
import { AvatarGroupModule } from 'primeng/avatargroup'
import { DividerModule } from 'primeng/divider'
import { DynamicDialogRef } from 'primeng/dynamicdialog'
import { SelectModule } from 'primeng/select'

import { BaseComponent } from '~/components/common/base/base.component'
import { LIST_TASK_STATUS } from '~/constants'
import { ButtonPrimary } from '~/pages/main/components/shared/button-primary/button-primary.component'
import { ThemeService } from '~/services/theme.service'

@Component({
  selector: 'task-detail',
  imports: [DividerModule, SelectModule, AvatarModule, AvatarGroupModule, ButtonPrimary],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})
export class TaskDetail extends BaseComponent {
  status_list = LIST_TASK_STATUS

  comments = [
    {
      image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
      name: 'Amy Elsner',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis ut libero posuere ultricies. Nullam nec sapien nec libero ultricies ultricies. Nullam nec sapien nec libero ultricies ultricies.'
    }
  ]

  attachments = [
    {
      file_nme: 'Office Front 1.jpg',
      file_size: '2 MB'
    },
    {
      file_nme: 'Home Front 2.jpg',
      file_size: '2 MB'
    }
  ]

  constructor(
    public ref: DynamicDialogRef,
    themeService: ThemeService
  ) {
    super(themeService)
  }

  closeDialog() {
    this.ref.close()
  }
}
