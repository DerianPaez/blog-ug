import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'https://localhost:7242/api/Auth/login';
  private registerUrl = 'https://localhost:7242/api/Auth/register';
  private forgotPasswordUrl = 'https://localhost:7242/api/Auth/forgot-password';
  private resetPasswordUrl = 'https://localhost:7242/api/Auth/complete-reset';

  constructor(private http: HttpClient, private router: Router) {}

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  loginUser(userData: { email: string; password: string }) {
    return this.http.post<any>(this.loginUrl, userData);
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  registerUser(userData: { name: string; email: string; password: string }) {
    return this.http.post<any>(this.registerUrl, userData);
  }

  passwordRecovery(email: string) {
    return this.http.post<any>(this.forgotPasswordUrl, {
      email,
    });
  }

  passwordReset(email: string, code: string, newPassword: string) {
    return this.http.post<any>(this.resetPasswordUrl, {
      email,
      code,
      newPassword,
    });
  }
}
