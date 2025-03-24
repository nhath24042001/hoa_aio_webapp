import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { FormsModule } from '@angular/forms';

import { BaseComponent } from '~/components/common/base/base.component';
import { ThemeService } from '~/services/theme.service';
import { ButtonPrimary } from '~/pages/main/components/shared/button-primary/button-primary.component';

@Component({
  selector: 'app-compose-letter',
  imports: [DividerModule, InputTextModule, EditorModule, FormsModule, ButtonPrimary],
  templateUrl: './compose-letter.component.html',
  styleUrl: './compose-letter.component.scss'
})
export class ComposeLetter extends BaseComponent {
  editorContent = '';

  constructor(
    themeService: ThemeService,
    public ref: DynamicDialogRef
  ) {
    super(themeService);
  }

  closeDialog() {
    this.ref.close();
  }
}
