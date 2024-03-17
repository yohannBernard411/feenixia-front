import { Injectable } from '@angular/core';
import { Wellbeing } from '../interfaces/wellbeing';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WellbeingService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/api/wellbeing';

  
  createNewWellbeing(id: number, title: string, content: string, img: string, category: string, price: number): Wellbeing {
    return {
      id: id,
      title: title,
      content: content,
      img: img,
      category: category,
      price: price
    };
  }

  getAllWellbeing(): Observable<Wellbeing[]> {
    return this.http.get<Wellbeing[]>(`${this.apiUrl}/all`);
  }

  getWellbeingById(wellbeingId: number): Observable<Wellbeing> {
    return this.http.get<Wellbeing>(`${this.apiUrl}/${wellbeingId}`);
  }

  findById(id: number): Wellbeing{
    return {id: 2, title: "Wellbeing sur un sujet précis", content: "Cette Wellbeing permet d’explorer l’ensemble de votre présent et de votre avenir proche. Parfois, suivant les messages, elle permet aussi de plonger dans votre passé en plus de votre présent et de votre avenir. Les domaines traités sont : <ul>Votre situation actuelle,;;Professionnelle,;;Sentimental,;;Questions variées, idées, projet...</ul>. Comme l’intitulé l’exprime, cette Guidance ne traite que sur un sujet précis de la liste précédente..", img: "https://i.ibb.co/stTkBZf/cartesIN.webp", category: "Wellbeing", price: 3000};
    
  }

}