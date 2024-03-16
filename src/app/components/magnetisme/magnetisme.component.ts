import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgToastService } from 'ng-angular-popup';
import { Magnetisme } from 'src/app/interfaces/magnetisme';
import { DataService } from 'src/app/services/data.service';
import { MagnetismeService } from 'src/app/services/magnetisme.service';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-magnetisme',
  templateUrl: './magnetisme.component.html',
  styleUrls: ['./magnetisme.component.scss']
})
export class MagnetismeComponent {
  constructor(private dataService: DataService, private magnetismeService: MagnetismeService, private toast: NgToastService, private sanitizer: DomSanitizer, private shoppingService: ShoppingService){}

  showSuccess(title: string) {
    this.toast.success({detail:"SUCCESS",summary:'Merci, l\'article ['+title+'] à bien été ajouté a votre panier.',duration:5000});
  }
  showError(title: string) {
    this.toast.error({detail:"ERROR",summary:'Oups, l\'article '+title+' n\'a pas pu être ajouté a votre panier',sticky:true, duration:5000});
  }

  allMagnetismes: Magnetisme[] = []; // Initialisation de la propriété

  ngOnInit(): void {
    this.magnetismeService.getAllMagnetisme().subscribe(
      (magnetismes: Magnetisme[]) => {
        console.log("magnetismes dans magnetisme.ts: ", magnetismes);
        this.allMagnetismes = magnetismes;
      },
      error => {
        console.log('Error:', error);
      }
    );
  }

  

  // allMagnetismes: Magnetisme[] = this.magnetismeService.getAllMagnetisme();
  nbArticles: number = this.shoppingService.nbArticles();

  formatagePrix(prix: number): string { //accept 12350 and return 123,50€ 
    const taille = prix.toString().length;
    return prix.toString().substring(0, taille-2)+","+prix.toString().substring(taille-2, taille)+"€";
  }
  

  shopping_add(id: number, title: string){
    this.shoppingService.addArticle(id);
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