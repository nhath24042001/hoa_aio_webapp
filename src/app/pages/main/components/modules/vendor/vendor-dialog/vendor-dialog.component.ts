import { Component } from '@angular/core';
import { DynamicDialog } from '~/pages/main/components/dialog/dynamic-dialog/dynamic-dialog.component';

@Component({
  selector: 'app-vendor-dialog',
  imports: [DynamicDialog],
  templateUrl: './vendor-dialog.component.html',
  styleUrl: './vendor-dialog.component.scss'
})
export class VendorDialog {

}
