import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { MagnetismeService } from 'src/app/services/magnetisme.service';

@Component({
  selector: 'app-magnetisme',
  templateUrl: './magnetisme.component.html',
  styleUrls: ['./magnetisme.component.scss']
})
export class MagnetismeComponent {

  
  constructor(private magnetismeService: MagnetismeService, private toast: NgToastService){}

  showSuccess(title: string) {
    this.toast.success({detail:"SUCCESS",summary:'Merci, l\'article ['+title+'] à bien été ajouté a votre panier.',duration:5000});
  }
  
  showError(title: string) {
    this.toast.error({detail:"ERROR",summary:'Oups, l\'article '+title+' n\'a pas pu être ajouté a votre panier',sticky:true, duration:5000});
  }

  allMagnetismes = this.magnetismeService.getAllMagnetismes();

  processString(input: string): string {
    // Vérifier si la chaîne contient "<ul>" et "</ul>"
    const ulStartIndex = input.indexOf("<ul>");
    const ulEndIndex = input.indexOf("</ul>");

    if (ulStartIndex === -1 || ulEndIndex === -1) {
        // Si "<ul>" ou "</ul>" est manquant, retourner la chaîne d'origine
        return input;
    }
    // Extraire le contenu entre "<ul>" et "</ul>"
    const ulContent = input.substring(ulStartIndex + 4, ulEndIndex);
    // Diviser le contenu en éléments à chaque ";"
    const elements = ulContent.split(";");
    // Créer une chaîne contenant les éléments enveloppés dans des balises "<li>"
    const liElements = elements.map(element => `<li>${element.trim()}</li>`).join("");
    // Remplacer le contenu entre "<ul>" et "</ul>" par les balises "<li>"
    const processedString = input.substring(0, ulStartIndex) + "<ul>" + liElements + "</ul>" + input.substring(ulEndIndex + 5);
    return processedString;
}

// // Exemple d'utilisation
// const inputString = "<p>Contenu avant<ul>élément1;element2;element3</ul>Contenu après</p>";
// const processedString = processString(inputString);
// console.log(processedString);


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
