import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfoResponse } from '../interfaces/user-info-response'; // Assurez-vous d'importer le modèle UserInfoResponse ou de le créer

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = '/api/auth'; // L'URL de votre API Spring Boot

  constructor(private http: HttpClient) { }

  signIn(loginRequest: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signin`, loginRequest);
  }

  signUp(signUpRequest: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, signUpRequest);
  }

  signOut(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signout`, null);
  }
}

