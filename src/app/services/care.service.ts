import { Injectable } from '@angular/core';
import { Care } from '../interfaces/care';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CareService {

  constructor(private http: HttpClient) { }

  // constructor(private http: HttpClient) { }
  // getAllCares(): Observable<Care[]> {
  //   return this.http.get<Care[]>('https://feenixia.api.com/cares');
  // }

  createNewCare(id: number, title: string, content: string, img: string, cta: string): Care {
    return {
      id: id,
      title: title,
      content: content,
      img: img,
      cta: cta
    };
  }

  cares: Care[] = [];

  getAllCares(): Observable<Care[]> {
    return this.http.get<Care[]>("http://localhost:8080/api/care/all");
  }
}

  // getAllCares(): Care[]{
  //   const care1 = {id: 1, title: "Les guidances", content: "Les guidances sont des tirages qui ont pour but de vous donner une vue d’ensemble de votre situation. J’utilise pour cela différents jeux de cartes qui me servent de support afin de recevoir les message qu’ensuite je peux vous transmettre. Les guidances diffèrent de la voyance car elles permettent de vous guider et de vous donner les moyens de changer certaines situations. Vous restez maître du chemin que vous souhaitez emprunter.", img: "https://i.ibb.co/stTkBZf/cartesIN.webp", cta: "/guidance"};
  //   const care2 = {id: 2, title: "Le magnétisme", content: "Le magnétisme énergétique permet de rééquilibrer les énergies de votre corps et donner un coup de boost. Le soin s’effectue à distance sur photo. Si vous vous sentez fatigué et videz de votre énergie actuellement alors cette prestation est pour vous. Le magnétisme énergétique permet de rééquilibrer les énergies de votre corps et donner un coup de boost. Le soin s’effectue à distance sur photo.", img: "https://i.ibb.co/yNR2JbQ/magnetisme-IN.webp", cta: "/magnetisme"};
  //   const care3 = {id: 3, title: "Le bien-être", content: "Identifier les blessures du passés et se libérer des blocages que ces blessures nous imposent peut vous permettre de prendre un nouveau départ et de vous sentir plus fort pour affronter l’avenir. Par le biais d’une méditation guidée que l’on peut comparer à une hypnose consciente, en visio, je vous guide afin de trouver et analyser d’où viennent l", img: "https://i.ibb.co/bv7TPPR/bien-etre-IN.webp", cta: "/wellbeing"};
  //   return [care1, care2, care3];
  // }

  
