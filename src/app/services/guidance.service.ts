import { Injectable } from '@angular/core';
import { Guidance } from '../interfaces/guidance';

@Injectable({
  providedIn: 'root'
})
export class GuidanceService {

  constructor() { }

  
  createNewGuidance(id: number, title: string, content: string, img: string, cta: string, category: string, price_cents: number): Guidance {
    return {
      id: id,
      title: title,
      content: content,
      img: img,
      cta: cta,
      category: category,
      price_cents: price_cents
    };
  }

  
  getAllGuidances(): Guidance[]{
    const guidance1 = {id: 1, title: "Guidance compléte", content: "Les guidances sont des tirages qui ont pour but de vous donner une vue d’ensemble de votre situation. J’utilise pour cela différents jeux de cartes qui me servent de support afin de recevoir les messages qu’ensuite je peux vous transmettre. Les guidances diffèrent de la voyance car elles permettent de vous guider et de vous donner les moyens de changer certaines situations. Vous restez maître du chemin que vous souhaitez emprunter.", img: "https://i.ibb.co/stTkBZf/cartesIN.webp", cta: "", category: "Guidance", price_cents: 5000};
    const guidance2 = {id: 2, title: "Guidance sur un sujet précis", content: "Cette Guidance permet d’explorer l’ensemble de votre présent et de votre avenir proche. Parfois, suivant les messages, elle permet aussi de plonger dans votre passé en plus de votre présent et de votre avenir. Les domaines traités sont : <ul>Votre situation actuelle,;;Professionnelle,;;Sentimental,;;Questions variées, idées, projet...</ul>. Comme l’intitulé l’exprime, cette Guidance ne traite que sur un sujet précis de la liste précédente..", img: "https://i.ibb.co/stTkBZf/cartesIN.webp", cta: "", category: "Guidance", price_cents: 3000};
    const guidance3 = {id: 3, title: "Guidance bien-être", content: "Votre corps s’exprime, les maux sont des mots que le corps vous exprime. Dans cette Guidance les cartes m’aident à vous expliquer ce que votre corps essaie de vous faire comprendre. De cette manière vous prenez conscience du problème afin de pouvoir y remédier par vous-même si vous en avez la capacité. Il est également possible de rentrer plus en détail là-dessus pour vous accompagner dans cette démarche par le biais d’une autre prestation qui est « le bien être par le déblocage des blessures passées ». Attention, je ne traite pas en guidance les questions sur la mort ou la santé. Chaque guidance est faite à distance et vous sera transmise par message vocal ou vidéo, je reste ensuite disponible par message sur une durée maximum de 15 minutes si vous avez besoin de complément ou d’explications. Aucun autre sujet que celui demandé au préalable ne sera traité durant ce moment d’échange.", img: "https://i.ibb.co/stTkBZf/cartesIN.webp", cta: "", category: "Guidance", price_cents: 4000};
 
    return [guidance1, guidance2, guidance3];
  }
  
}
