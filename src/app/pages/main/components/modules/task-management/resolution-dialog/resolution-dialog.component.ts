import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TextareaModule } from 'primeng/textarea';

import { BaseComponent } from '~/components/common/base/base.component';
import { ButtonDirective } from '~/directives/button.directive';
import { ThemeService } from '~/services/theme.service';

@Component({
  selector: 'app-resolution-dialog',
  imports: [DividerModule, TextareaModule, ButtonDirective, FormsModule],
  templateUrl: './resolution-dialog.component.html',
  styleUrl: './resolution-dialog.component.scss'
})
export class ResolutionDialog extends BaseComponent {
  type = signal<string>('');
  task_id = signal<number>(0);
  resolutionText = '';

  icon = computed(() => {
    return `assets/images/common/resolution-${this.type()}.svg`;
  });

  title = computed(() => {
    return this.type() === 'resolve' ? 'Mark as Resolved' : 'Mark as Rejected';
  });

  text = computed(() => {
    return this.type() === 'resolve'
      ? 'Please add an explanation about the resolution. If relevant add photos and/or a video.'
      : 'Please add an explanation about the rejection. If relevant add photos and/or a video.';
  });

  placeholder = computed(() => {
    return this.type() === 'resolve' ? 'Enter resolution text.' : 'Enter rejection text.';
  });

  color = computed(() => {
    return this.type() === 'resolve' ? '#4E9700' : '#FF515F';
  });

  backgroundColor = computed(() => {
    return this.type() === 'resolve' ? '#F3FFE6' : '#FFEDEF';
  });

  buttonText = computed(() => {
    return this.type() === 'resolve' ? 'Resolve Task' : 'Reject Task';
  });

  buttonIcon = computed(() => {
    return this.type() === 'resolve' ? `check-resolve` : `slash-reject`;
  });

  buttonType = computed(() => {
    return this.type() === 'resolve' ? 'resolve' : 'reject';
  });

  attachmentText = computed(() => {
    return this.type() === 'resolve' ? 'resolved' : 'rejected';
  });

  attachmentIcon = computed(() => {
    return this.type() === 'resolve' ? 'attachment-resolve' : 'attachment-reject';
  });

  videoIcon = computed(() => {
    return this.type() === 'resolve' ? 'video-recorder-resolve' : 'video-recorder-reject';
  });

  constructor(
    themeService: ThemeService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    super(themeService);

    this.type.set(config.data.type);
    this.task_id.set(config.data.task_id);
  }

  getBorderColor() {
    return `--${this.type()}`;
  }

  handleConfirm() {
    this.ref.close({
      confirmed: true,
      data: {
        ...this.config.data,
        text: this.resolutionText
      }
    });
  }

  closeDialog() {
    this.ref.close();
  }
}
