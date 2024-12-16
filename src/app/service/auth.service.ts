import { Injectable } from '@angular/core';
import { RegisterPostData, User } from '../iterfaces/auth';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl = "http://localhost:3000"

  constructor(private readonly http: HttpClient ) { }

  registerUser(postData: RegisterPostData) {
    return this.http.post(`${this.baseUrl}/users`, postData)
  }

  getUserDetails (email: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}&password=${password}`
    );
  }
}
