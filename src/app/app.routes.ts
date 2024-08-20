import { Routes } from '@angular/router';
import { TodoComponent } from './todo-feature/todo/todo.component';
import { LoginComponent } from './core/login/login.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './core/register/register.component';

export const routes: Routes = [
  { path: '', component: TodoComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
