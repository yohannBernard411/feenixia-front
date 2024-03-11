import { Injectable } from '@angular/core';
import { Magnetisme } from '../interfaces/magnetisme';

@Injectable({
  providedIn: 'root'
})
export class MagnetismeService {

  createNewMagnetisme(id: number, title: string, content: string, img: string, cta: string, category: string, price_cents: number): Magnetisme {
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

  
  getAllMagnetismes(): Magnetisme[]{
    const guidance1 = {id: 1, title: "Magnetisme energétique", content: "Le magnétisme énergétique permet de rééquilibrer les énergies de votre corps et donner un coup de boost. Le soin s’effectue à distance sur photo. Si vous vous sentez fatigué et videz de votre énergie actuellement alors cette prestation est pour vous..", img: "https://i.ibb.co/stTkBZf/cartesIN.webp", cta: "", category: "Magnetisme", price_cents: 3000};
    const guidance2 = {id: 2, title: "Magnetisme animal", content: "Ce magnétisme, à distance sur photo, est un soin que je prodigue à vos compagnons poilus afin de les aider dans leurs petites douleurs et dans leurs énergies corporelles générales.", img: "https://i.ibb.co/stTkBZf/cartesIN.webp", cta: "", category: "Magnetisme", price_cents: 3000};
    const guidance3 = {id: 3, title: "Néttoyage energetique des lieux", content: "De par le magnétisme, mais aussi avec l’aide du pendule et de certaines plantes, il est possible de nettoyer les énergies négatives cumulés, ou faire partir les résidus des âmes de nos défunts qui à la longue ou non nous dérangent et perturbent nos propres énergies. Le Nettoyage permet de retrouver une ambiance sereine et chaleureuse au sein du foyer. Le travail se fait à distance avec simplement un plan réel ou à main levée de votre domicile plus quelques informations supplémentaires..", img: "https://i.ibb.co/stTkBZf/cartesIN.webp", cta: "", category: "Magnetisme", price_cents: 5000};
 
    return [guidance1, guidance2, guidance3];
  }

  findById(id: number): Magnetisme{
    return {id: 2, title: "Guidance sur un sujet précis", content: "Cette Guidance permet d’explorer l’ensemble de votre présent et de votre avenir proche. Parfois, suivant les messages, elle permet aussi de plonger dans votre passé en plus de votre présent et de votre avenir. Les domaines traités sont : <ul>Votre situation actuelle,;;Professionnelle,;;Sentimental,;;Questions variées, idées, projet...</ul>. Comme l’intitulé l’exprime, cette Guidance ne traite que sur un sujet précis de la liste précédente..", img: "https://i.ibb.co/stTkBZf/cartesIN.webp", cta: "", category: "Magnetisme", price_cents: 3000};
    
  }

}