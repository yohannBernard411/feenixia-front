import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfoResponse } from '../interfaces/user-info-response'; // Assurez-vous d'importer le modèle UserInfoResponse ou de le créer

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth'; // L'URL de votre API Spring Boot
  private loggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  // Méthode pour vérifier si l'utilisateur est connecté
  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  signIn(loginRequest: any): Observable<any> {
    this.loggedIn = true;
    return this.http.post<any>(`${this.apiUrl}/signin`, loginRequest);
  }

  signUp(signUpRequest: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, signUpRequest);
  }

  signOut(): Observable<any> {
    this.loggedIn = false;
    return this.http.post<any>(`${this.apiUrl}/signout`, null);
  }
}

