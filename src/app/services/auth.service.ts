import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import { UserInfoResponse } from '../interfaces/user-info-response'; // Assurez-vous d'importer le modèle UserInfoResponse ou de le créer

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth'; // L'URL de votre API Spring Boot
  private loggedIn: boolean = false;
  cookie_name: string = "tototte";

  constructor(private http: HttpClient, private cookieService:CookieService) { }

  // Méthode pour vérifier si l'utilisateur est connecté
  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  signIn(loginRequest: any): Observable<any> { //connexion
    return this.http.post<any>(`${this.apiUrl}/signin`, loginRequest).pipe(
      tap(response => {
        this.cookie_name=this.cookieService.get('tototte');
        console.log("tototte: "+this.cookie_name);
        // Stocker le jeton JWT dans le localStorage après une connexion réussie
        localStorage.setItem('jwtToken', response.accessToken);
        console.log("localStorage: "+JSON.stringify(response));
        this.loggedIn = true;
      })
    );
    // this.http.post('http://localhost:8080/api/auth/signin', loginRequest, { observe: 'response'}).subscribe(
    //   (response) => {
    //     console.log(response.headers.get("Authorization"));
    //     return response;
    //   });
      
  }

  signUp(signUpRequest: any): Observable<any> { //enregistremeent
    return this.http.post<any>(`${this.apiUrl}/signup`, signUpRequest);
  }

  signOut(): Observable<any> { //deconnexiion
    // Supprimer le jeton JWT du localStorage lors de la déconnexion
    localStorage.removeItem('jwtToken');
    this.loggedIn = false;
    return this.http.post<any>(`${this.apiUrl}/signout`, null);
  }
}

