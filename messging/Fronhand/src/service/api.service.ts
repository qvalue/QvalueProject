import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // messagesList = [{}];
  // httpHeaders = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'Cache-Control': 'no-cache',
  // });
  // options = {
  //   headers: this.httpHeaders,
  // };

  path = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getMessage(userId) {
    return this.http.get<any>(this.path + '/post/' + userId);
  }
  getUser() {
    return this.http.get<any>(this.path + '/users');
  }

  getUserById(userId) {
    return this.http.get<any>(this.path + '/profile/' + userId);
  }
  userPostNewPost(messge) {
    return this.http.post(this.path + '/post', messge);
  }
}
