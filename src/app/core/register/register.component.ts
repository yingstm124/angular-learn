import { Component, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  data = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
  });

  count = signal(0);

  onCount() {
    this.count.set(this.count() + 1);
  }

  onReset() {
    this.count.set(0);
  }
}
