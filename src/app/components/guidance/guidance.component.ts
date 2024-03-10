import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { GuidanceService } from 'src/app/services/guidance.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ShoppingService } from 'src/app/services/shopping.service';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-guidance',
  templateUrl: './guidance.component.html',
  styleUrls: ['./guidance.component.scss']
})
export class GuidanceComponent {

  constructor(private dataService: DataService, private guidanceService: GuidanceService, private toast: NgToastService, private sanitizer: DomSanitizer, private shoppingService: ShoppingService){}

  showSuccess(title: string) {
    this.toast.success({detail:"SUCCESS",summary:'Merci, l\'article ['+title+'] à bien été ajouté a votre panier.',duration:5000});
  }
  showError(title: string) {
    this.toast.error({detail:"ERROR",summary:'Oups, l\'article '+title+' n\'a pas pu être ajouté a votre panier',sticky:true, duration:5000});
  }

  allGuidances = this.guidanceService.getAllGuidances();
  nbArticles: number = this.shoppingService.nbArticles();
  

  formatagePrix(prix: number): string { //accept 12350 and return 123,50€ 
    const taille = prix.toString().length;
    return prix.toString().substring(0, taille-2)+","+prix.toString().substring(taille-2, taille)+"€";
  }

  shopping_add(id: number, title: string){
    this.shoppingService.addArticle(id);
    // this.dataService.updateData(this.shoppingService.nbArticles());
    this.showSuccess(title);
  }

  processString(input: string, rank: number): string {
    if (!input.includes("<ul>")){
        return input;
    } else {
        const part1 = input.substring(0, input.indexOf("<ul>"));
        const part2 = input.substring(input.indexOf("<ul>") + 4, input.indexOf("</ul>"));
        const part3 = input.substring(input.indexOf("</ul>") + 5, input.length);
        
        const ulElement = document.createElement('ul');
        const liElements = part2.split(";;");

        liElements.forEach(element => {
            const liElement = document.createElement('li');
            liElement.textContent = element;
            ulElement.appendChild(liElement);
        });

        ulElement.style.listStyleImage = 'url("../../../assets/puce.png")';
        ulElement.style.listStylePosition = 'inside';

                // list-style-image: url('../../../assets/puce.png');
        // list-style-position: inside;

        const output1 = document.createElement('p');
        output1.textContent = part1;
        
        const output2 = ulElement;
        
        const output3 = document.createElement('p');
        output3.textContent = part3;
        
        // Supprime le contenu actuel de l'élément avec l'ID "rank"
        const element = document.getElementById(rank.toString());
        if (element) {
            element.innerHTML = ''; // vide le contenu de l'élément
            // Ajoute les nouveaux éléments créés
            element.appendChild(output1);
            element.appendChild(output2);
            element.appendChild(output3);
        }
        
        return output1.outerHTML + output2.outerHTML + output3.outerHTML;
    }
}


}
