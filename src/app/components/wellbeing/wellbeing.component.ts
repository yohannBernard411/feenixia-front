import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgToastService } from 'ng-angular-popup';
import { Shopping } from 'src/app/interfaces/shopping';
import { Wellbeing } from 'src/app/interfaces/wellbeing';
import { DataService } from 'src/app/services/data.service';
import { ShoppingService } from 'src/app/services/shopping.service';
import { WellbeingService } from 'src/app/services/wellbeing.service';

@Component({
  selector: 'app-wellbeing',
  templateUrl: './wellbeing.component.html',
  styleUrls: ['./wellbeing.component.scss']
})
export class WellbeingComponent {
  constructor(private dataService: DataService, private wellbeingService: WellbeingService, private toast: NgToastService, private sanitizer: DomSanitizer, private shoppingService: ShoppingService){}

  showSuccess(title: string) {
    this.toast.success({detail:"SUCCESS",summary:'Merci, l\'article ['+title+'] à bien été ajouté a votre panier.',duration:5000});
  }
  showError(title: string) {
    this.toast.error({detail:"ERROR",summary:'Oups, l\'article '+title+' n\'a pas pu être ajouté a votre panier',sticky:true, duration:5000});
  }
  allWellbeings: Wellbeing[] = []; // Initialisation de la propriété
  allShoppings: Shopping[] = [];
  nbShops: number = 0;

  ngOnInit(): void {
    this.getAllWellbeings();
  }

 
  getAllWellbeings(): void {
    this.allWellbeings = this.wellbeingService.wellbeings;
  }

  getAllShoppings(): void {
    this.allShoppings = this.shoppingService.shoppings;
  };

  nbArticles(): void{
    let count = 0;
    this.allShoppings.forEach(element => {
        count += element.quantity;
        console.log("count shop quantity += "+count);
    });
    this.nbShops = count;
  }

  formatagePrix(prix: number): string { //accept 12350 and return 123,50€ 
    const taille = prix.toString().length;
    return prix.toString().substring(0, taille-2)+","+prix.toString().substring(taille-2, taille)+"€";
  }
  

  shopping_add(id: number, title: string, category: string){
    this.shoppingService.addArticle(id, category);
    this.showSuccess(title);
  }

  processString(input: string, rank: number): string {
    if (!input.includes("<ul>")) {
        return input;
    } else {
        const [part1, ulContent, part3] = input.split(/<ul>|<\/ul>/);
        const liElements = ulContent.split(";;").map(element => `<li>${element}</li>`).join("");
        const ulElement = `<ul>${liElements}</ul>`;
        const output = `<p>${part1}</p>${ulElement}<p>${part3}</p>`;
        // Met à jour le contenu de l'élément avec l'ID "rank" et applique les styles
        const element = document.getElementById(rank.toString());
        if (element) {
            element.innerHTML = output;
            const ul = element.querySelector('ul');
            if (ul) {
                ul.style.listStyleImage = 'url("../../../assets/puce.png")';
                ul.style.listStylePosition = 'inside';
            }
        }

        return output;
    }
}


}