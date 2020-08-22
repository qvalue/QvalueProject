import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tokenName } from '@angular/compiler';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  });
  options = {
    headers: this.httpHeaders,
  };

  path = 'http://localhost:3000/auth';

  TOKEN_KEY = 'token';

  constructor(private http: HttpClient) {}

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  sendUserRegistration(userData) {
    return this.http
      .post<any>(this.path + '/register', userData, this.options)
      .subscribe((res) => {
        localStorage.setItem(this.TOKEN_KEY, res.token);
      });
  }

  loginUser(logindata) {
    var rers = this.http
      .post<any>(this.path + '/login', logindata, this.options)
      .subscribe((res) => {
        localStorage.setItem(this.TOKEN_KEY, res.token);
      });
  }
}
