import { Injectable } from '@angular/core';
import { RegisterPostData } from '../iterfaces/auth';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl = "http://localhost:3000"

  constructor(private readonly http: HttpClient ) { }

  registerUser(postData: RegisterPostData) {
    return this.http.post(`${this.baseUrl}/users`, postData)
  }
}
