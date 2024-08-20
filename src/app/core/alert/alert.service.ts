import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Alert {
  type: 'success' | 'error' | 'warning';
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alertSubject = new Subject<Alert>();
  messages$ = this.alertSubject.asObservable();

  addSuccessMessage(text: string) {
    this.alertSubject.next({ type: 'success', text: text });
  }

  addErrorMessage(text: string) {
    this.alertSubject.next({ type: 'error', text: text });
  }

  clearAlert() {
    this.alertSubject.next({ type: 'success', text: '' });
  }
}
