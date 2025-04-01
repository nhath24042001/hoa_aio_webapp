import { Component, Input } from '@angular/core'

import { BaseComponent } from '~/components/common/base/base.component'
import { ThemeService } from '~/services/theme.service'

@Component({
  selector: 'app-empty-content',
  imports: [],
  templateUrl: './empty-content.component.html',
  styleUrl: './empty-content.component.scss'
})
export class EmptyContentComponent extends BaseComponent {
  @Input() icon: string = ''
  @Input() iconDark: string = ''
  @Input() title: string = ''
  @Input() createText: string = ''
  @Input() isShowBtn: boolean = true
  @Input() showUpload: boolean = false
  @Input() moduleName = ''

  constructor(themeService: ThemeService) {
    super(themeService)
  }
}
