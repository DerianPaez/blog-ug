import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'https://localhost:7242/api/Auth/login';
  private registerUrl = 'https://localhost:7242/api/Auth/register';

  constructor(private http: HttpClient) {}

  loginUser(userData: { email: string; password: string }) {
    return this.http.post<any>(this.loginUrl, userData);
  }

  registerUser(userData: { name: string; email: string; password: string }) {
    return this.http.post<any>(this.registerUrl, userData);
  }
}
