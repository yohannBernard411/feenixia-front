import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { GuidanceService } from 'src/app/services/guidance.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ShoppingService } from 'src/app/services/shopping.service';
import { DataService } from 'src/app/services/data.service';
import { Guidance } from 'src/app/interfaces/guidance';
import { Subscription } from 'rxjs';
import { Shopping } from 'src/app/interfaces/shopping';


@Component({
  selector: 'app-guidance',
  templateUrl: './guidance.component.html',
  styleUrls: ['./guidance.component.scss']
})
export class GuidanceComponent implements OnInit {

  constructor(private dataService: DataService, private guidanceService: GuidanceService, private toast: NgToastService, private sanitizer: DomSanitizer, private shoppingService: ShoppingService){}

  showSuccess(title: string) {
    this.toast.success({detail:"SUCCESS",summary:'Merci, l\'article ['+title+'] à bien été ajouté a votre panier.',duration:5000});
  }
  showError(title: string) {
    this.toast.error({detail:"ERROR",summary:'Oups, l\'article '+title+' n\'a pas pu être ajouté a votre panier',sticky:true, duration:5000});
  }

  allGuidances: Guidance[] = []; // Initialisation de la propriété
  allShoppings: Shopping[] = [];
  nbShops: number = 0;

  ngOnInit(): void {
    this.getAllGuidances();
  }

  getAllGuidances(): void{
    this.allGuidances = this.guidanceService.guidances;
    // this.guidanceService.getAllGuidance().subscribe(
    //   (guidances: Guidance[]) => {
    //     console.log("guidances dans guidance.ts: ", guidances);
    //     this.allGuidances = guidances;
    //   },
    //   error => {
    //     console.log('Error:', error);
    //   }
    // );
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

  

  // allGuidances: Guidance[] = this.guidanceService.getAllGuidance();
  //nbArticles: number = this.shoppingService.nbArticles();

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
