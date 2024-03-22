import { Injectable } from '@angular/core';
import { Magnetisme } from '../interfaces/magnetisme';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MagnetismeService {

  constructor(private http: HttpClient) {
    this.getAllMagnetisme();
  }

  private apiUrl = 'http://localhost:8080/api/magnetisme';
  private magnetismesSubject: BehaviorSubject<Magnetisme[]> = new BehaviorSubject<Magnetisme[]>([]);
  magnetismes$: Observable<Magnetisme[]> = this.magnetismesSubject.asObservable();
  magnetismes: Magnetisme[] = [];

  
  createNewMagnetisme(id: number, title: string, content: string, img: string, category: string, price: number): Magnetisme {
    return {
      id: id,
      title: title,
      content: content,
      img: img,
      category: category,
      price: price
    };
  }

  private getAllMagnetisme(): void {
    this.http.get<Magnetisme[]>(this.apiUrl+'/all')
      .pipe(
        tap(magnetismes => {
          this.magnetismesSubject.next(magnetismes);
          this.magnetismes = magnetismes;
        })
      )
      .subscribe();
  }

  getMagnetismeById(magnetismeId: number): Observable<Magnetisme> {
    return this.http.get<Magnetisme>(`${this.apiUrl}/${magnetismeId}`);
  }



  
  /* getAllMagnetismes(): Magnetisme[]{
    const guidance1 = {id: 1, title: "Magnetisme energétique", content: "Le magnétisme énergétique permet de rééquilibrer les énergies de votre corps et donner un coup de boost. Le soin s’effectue à distance sur photo. Si vous vous sentez fatigué et videz de votre énergie actuellement alors cette prestation est pour vous..", img: "https://i.ibb.co/stTkBZf/cartesIN.webp", category: "Magnetisme", price: 3000};
    const guidance2 = {id: 2, title: "Magnetisme animal", content: "Ce magnétisme, à distance sur photo, est un soin que je prodigue à vos compagnons poilus afin de les aider dans leurs petites douleurs et dans leurs énergies corporelles générales.", img: "https://i.ibb.co/stTkBZf/cartesIN.webp", category: "Magnetisme", price: 3000};
    const guidance3 = {id: 3, title: "Néttoyage energetique des lieux", content: "De par le magnétisme, mais aussi avec l’aide du pendule et de certaines plantes, il est possible de nettoyer les énergies négatives cumulés, ou faire partir les résidus des âmes de nos défunts qui à la longue ou non nous dérangent et perturbent nos propres énergies. Le Nettoyage permet de retrouver une ambiance sereine et chaleureuse au sein du foyer. Le travail se fait à distance avec simplement un plan réel ou à main levée de votre domicile plus quelques informations supplémentaires..", img: "https://i.ibb.co/stTkBZf/cartesIN.webp", category: "Magnetisme", price: 5000};
 
    return [guidance1, guidance2, guidance3];
  }
  */

  findById(id: number): Magnetisme{
    return {id: 2, title: "Guidance sur un sujet précis", content: "Cette Guidance permet d’explorer l’ensemble de votre présent et de votre avenir proche. Parfois, suivant les messages, elle permet aussi de plonger dans votre passé en plus de votre présent et de votre avenir. Les domaines traités sont : <ul>Votre situation actuelle,;;Professionnelle,;;Sentimental,;;Questions variées, idées, projet...</ul>. Comme l’intitulé l’exprime, cette Guidance ne traite que sur un sujet précis de la liste précédente..", img: "https://i.ibb.co/stTkBZf/cartesIN.webp", category: "Magnetisme", price: 3000};
    
  }

}