import { Component, Inject, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent {
  message = signal('');
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {
    this.message.set(data.message);
  }
}
