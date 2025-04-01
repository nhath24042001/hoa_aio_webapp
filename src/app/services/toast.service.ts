import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'

import { IConfirmDialog } from '../@types'

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private confirmState = new Subject<IConfirmDialog>()
  confirmState$: Observable<IConfirmDialog> = this.confirmState.asObservable()

  showConfirm(config: Omit<IConfirmDialog, 'callback'>): Promise<boolean> {
    return new Promise((resolve) => {
      this.confirmState.next({
        ...config,
        callback: (confirmed) => resolve(confirmed)
      })
    })
  }
}
