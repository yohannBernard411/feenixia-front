import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { GuidanceService } from 'src/app/services/guidance.service';

@Component({
  selector: 'app-guidance',
  templateUrl: './guidance.component.html',
  styleUrls: ['./guidance.component.scss']
})
export class GuidanceComponent {

  constructor(private guidanceService: GuidanceService, private toast: NgToastService){}

  showSuccess(title: string) {
    this.toast.success({detail:"SUCCESS",summary:'Merci, l\'article ['+title+'] à bien été ajouté a votre panier.',duration:5000});
  }
  
  showError(title: string) {
    this.toast.error({detail:"ERROR",summary:'Oups, l\'article '+title+' n\'a pas pu être ajouté a votre panier',sticky:true, duration:5000});
  }

  allGuidances = this.guidanceService.getAllGuidances();

  formatagePrix(prix: number): string { //accept 12350 and return 123,50€ 
    const taille = prix.toString().length;
    return prix.toString().substring(0, taille-2)+","+prix.toString().substring(taille-2, taille)+"€";
  }

  shopping_add(id: number, title: string){
    // methode à appeler pour mettre l'article dans le panier.
    // emettre un popup pour indiquer que l'article est dans le panier.
    console.log("values: "+id+" et :"+title);
    this.showSuccess(title);
  }

}
