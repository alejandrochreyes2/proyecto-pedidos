import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private role: string | null = null;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      this.role = 'admin';
      localStorage.setItem('role', 'admin');
      return true;
    } else if (username && password) {
      this.role = 'user';
      localStorage.setItem('role', 'user');
      return true;
    }
    return false;
  }

  logout() {
    this.role = null;
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

  getRole(): string | null {
    if (!this.role) {
      this.role = localStorage.getItem('role');
    }
    return this.role;
  }

  isAuthenticated(): boolean {
    return this.getRole() !== null;
  }
}