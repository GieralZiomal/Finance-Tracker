import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  private token: string = '';
  userId: number | null = null;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const data = { username, password };
    return this.http.post(`${this.apiUrl}/login/`, data);
  }

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  isLoggedIn(): boolean {
    return !!this.token;
  }

  setUserId(userId: number) {
    this.userId = userId;
    localStorage.setItem('user_id', userId.toString());
  }

  logout() {
    this.token = '';
    this.userId = null;
    localStorage.removeItem('auth_token');
  }

}
