import { Injectable } from '@angular/core';
import { Medium } from '../interfaces/medium';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MediumService {

  constructor(private http: HttpClient) { 
    this.getAllMedium();
  }

  private apiUrl = 'http://localhost:8080/api/medium';
  mediums: Medium[] = [];
  medium: Medium = this.createNewMedium(66, "title", "content", "img", "category", 12);

  private mediumSubject: BehaviorSubject<Medium | null> = new BehaviorSubject<Medium | null>(null);
  
  private mediumsSubject: BehaviorSubject<Medium[]> = new BehaviorSubject<Medium[]>([]);
  shoppings$: Observable<Medium[]> = this.mediumsSubject.asObservable();

  // medium: Medium;
  // private mediumSubject: BehaviorSubject<Medium> = new BehaviorSubject<Medium>({});
  // shopping$: Observable<Medium> = this.mediumSubject.asObservable();

  
  createNewMedium(id: number, title: string, content: string, img: string, category: string, price: number): Medium {
    return {
      id: id,
      title: title,
      content: content,
      img: img,
      category: category,
      price: price
    };
  }

  // getAllMedium(): Observable<Medium[]> {
  //   return this.http.get<Medium[]>(`${this.apiUrl}/all`);
  // }
  getAllMedium(): void{
    this.http.get<Medium[]>(this.apiUrl+'/all')
      .pipe(
        tap(mediums => {
          this.mediumsSubject.next(mediums);
          this.mediums = mediums;
        })
      )
      .subscribe();
  }

  

  getMediumById(mediumId: number): Observable<Medium> {
    return this.http.get<Medium>(`${this.apiUrl}/${mediumId}`).pipe(
      tap(medium => {
        this.mediumSubject.next(medium);
        this.medium = medium;
      })
    );
  }

  
  // getAllMediums(): Medium[]{
  //   const medium1 = {id: 1, title: "Medium compléte", content: "Les mediums sont des tirages qui ont pour but de vous donner une vue d’ensemble de votre situation. J’utilise pour cela différents jeux de cartes qui me servent de support afin de recevoir les messages qu’ensuite je peux vous transmettre. Les mediums diffèrent de la voyance car elles permettent de vous guider et de vous donner les moyens de changer certaines situations. Vous restez maître du chemin que vous souhaitez emprunter.", img: "https://i.ibb.co/stTkBZf/cartesIN.webp", category: "Medium", price_cents: 5000};
  //   const medium2 = {id: 2, title: "Medium sur un sujet précis", content: "Cette Medium permet d’explorer l’ensemble de votre présent et de votre avenir proche. Parfois, suivant les messages, elle permet aussi de plonger dans votre passé en plus de votre présent et de votre avenir. Les domaines traités sont : <ul>Votre situation actuelle,;;Professionnelle,;;Sentimental,;;Questions variées, idées, projet...</ul>. Comme l’intitulé l’exprime, cette Medium ne traite que sur un sujet précis de la liste précédente..", img: "https://i.ibb.co/stTkBZf/cartesIN.webp", category: "Medium", price_cents: 3000};
  //   const medium3 = {id: 3, title: "Medium bien-être", content: "Votre corps s’exprime, les maux sont des mots que le corps vous exprime. Dans cette Medium les cartes m’aident à vous expliquer ce que votre corps essaie de vous faire comprendre. De cette manière vous prenez conscience du problème afin de pouvoir y remédier par vous-même si vous en avez la capacité. Il est également possible de rentrer plus en détail là-dessus pour vous accompagner dans cette démarche par le biais d’une autre prestation qui est « le bien être par le déblocage des blessures passées ». Attention, je ne traite pas en medium les questions sur la mort ou la santé. Chaque medium est faite à distance et vous sera transmise par message vocal ou vidéo, je reste ensuite disponible par message sur une durée maximum de 15 minutes si vous avez besoin de complément ou d’explications. Aucun autre sujet que celui demandé au préalable ne sera traité durant ce moment d’échange.", img: "https://i.ibb.co/stTkBZf/cartesIN.webp", category: "Medium", price_cents: 4000};
 
  //   return [medium1, medium2, medium3];
  // }

  findById(id: number): Medium{
    return {id: 2, title: "Medium sur un sujet précis", content: "Cette Medium permet d’explorer l’ensemble de votre présent et de votre avenir proche. Parfois, suivant les messages, elle permet aussi de plonger dans votre passé en plus de votre présent et de votre avenir. Les domaines traités sont : <ul>Votre situation actuelle,;;Professionnelle,;;Sentimental,;;Questions variées, idées, projet...</ul>. Comme l’intitulé l’exprime, cette Medium ne traite que sur un sujet précis de la liste précédente..", img: "https://i.ibb.co/stTkBZf/cartesIN.webp", category: "Medium", price: 3000};
    
  }
  
}
