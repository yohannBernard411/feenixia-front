import { Injectable } from '@angular/core';
import { Wellbeing } from '../interfaces/wellbeing';

@Injectable({
  providedIn: 'root'
})
export class WellbeingService {

  createNewWellbeing(id: number, title: string, content: string, img: string, cta: string, category: string, price_cents: number): Wellbeing {
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

  
  getAllWellbeings(): Wellbeing[]{
    const guidance1 = {id: 1, title: "Bien-être", content: "Identifier les blessures du passé et se libérer des blocages que ces blessures nous imposent peut vous permettre de prendre un nouveau départ et de vous sentir plus fort pour affronter l’avenir. Par le biais d’une méditation guidée que l’on peut comparer à une hypnose consciente, en visio, je vous guide afin de trouver et analyser d’où viennent les blessures qui vous bloquent dans votre vie actuelle. Ensuite à l’aide de petits exercices que nous définissons ensemble vous effectuez le travail nécessaire afin de vous en défaire. Un minimum de 3 séances est conseillé afin de vraiment faire le tour complet de ses blessures car il n’est pas possible énergétiquement et émotionnellement parlant, pour vous comme pour moi, de faire le travail en une seule séance d’1h30.", img: "https://i.ibb.co/stTkBZf/cartesIN.webp", cta: "", category: "Wellbeing", price_cents: 7000};
   
    return [guidance1];
  }

  findById(id: number): Wellbeing{
    return {id: 2, title: "Guidance sur un sujet précis", content: "Cette Guidance permet d’explorer l’ensemble de votre présent et de votre avenir proche. Parfois, suivant les messages, elle permet aussi de plonger dans votre passé en plus de votre présent et de votre avenir. Les domaines traités sont : <ul>Votre situation actuelle,;;Professionnelle,;;Sentimental,;;Questions variées, idées, projet...</ul>. Comme l’intitulé l’exprime, cette Guidance ne traite que sur un sujet précis de la liste précédente..", img: "https://i.ibb.co/stTkBZf/cartesIN.webp", cta: "", category: "Guidance", price_cents: 3000};
    
  }
  
}
