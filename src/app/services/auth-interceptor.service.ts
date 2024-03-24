import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Récupérer le jeton JWT depuis le stockage local (ou tout autre endroit où vous le stockez)
    const authToken = localStorage.getItem('jwtToken');

    // Si un jeton JWT est présent, l'ajouter à l'en-tête Authorization de la requête
    if ("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTcxMTIyODg3NSwiZXhwIjoxNzExMjI5NDc1fQ.I1sCeiM-XKZYF-34Z2SFtLNroxw6arVz3mCQAqFBLCs") {
      console.log("authorization"+JSON.stringify(authToken));
      const authRequest = request.clone({
        headers: request.headers.set('Authorization', `tototte ${authToken}`)
        //headers: request.headers.set('Authorization', 'tototte eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTcxMTIxNDM0OCwiZXhwIjoxNzExMjE0OTQ4fQ.S8pwKEqRSHrZ_9apBVBZ1PdSybehRF7VuK20iy-hKyg')
      });
      return next.handle(authRequest);
    }

    // Si aucun jeton JWT n'est présent, poursuivre la requête sans le modifier
    return next.handle(request);
  }
}
