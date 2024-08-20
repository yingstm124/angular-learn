import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '123') {
      localStorage.setItem('user', JSON.stringify({ username }));
      return true;
    } else return false;
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  isAuthenticated() {
    return localStorage.getItem('user') !== null;
  }
}
