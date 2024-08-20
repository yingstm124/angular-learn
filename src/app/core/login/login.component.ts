import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../authService/auth.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert/alert.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../alert/alert/alert.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loginForm = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  private subscription: Subscription | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService,
    private dialog: MatDialog
  ) {}

  hide = signal(true);

  ngOnInit(): void {
    console.log('init login');
    this.subscription = this.alertService.messages$.subscribe((i) => {
      this.dialog.open(AlertComponent, {
        data: {
          message: i.text,
        },
      });
    });
  }

  ngOnDestroy(): void {
    if (!this.subscription) return;
    this.subscription.unsubscribe();
  }

  onVisible(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  onLogin() {
    const { user, password } = this.loginForm.value;
    if (!user || !password) return;
    if (this.authService.login(user, password)) {
      this.alertService.addSuccessMessage('Login success!');
      this.router.navigate(['/']);
    } else this.alertService.addErrorMessage('Login error!');
  }

  onClickRegisterLink() {
    this.router.navigate(['/register']);
  }
}
