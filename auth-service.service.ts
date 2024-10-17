import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  signup(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, user);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, {});
  }
}
