import { Component, Input } from '@angular/core';

interface Attachment {
  file_name: string;
  file_size: string;
}

@Component({
  selector: 'app-form-attachment',
  imports: [],
  templateUrl: './form-attachment.component.html',
  styleUrl: './form-attachment.component.scss'
})
export class FormAttachment {
  @Input() attachments: Attachment[] = [];
}
