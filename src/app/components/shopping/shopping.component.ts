import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent {

  currentShoppingByUser: { name: string, img: string, quantite: number, prix: number }[] = [
    {"name": "les guidances","img": "https://i.ibb.co/3TbMNg0/cartesSM.webp","quantite": 2,"prix": 6532},
    {"name": "Le bien etre","img": "https://i.ibb.co/TL2L05C/bien-etre-SM.webp","quantite": 3,"prix": 7078 }];

    total: number = 100; 

    calculateTotal(): number {
      this.total = this.currentShoppingByUser.reduce((acc, article) => {
        return acc + (article.quantite * article.prix);
      }, 0);
      return this.total;
    }

    formatagePrix(prix: number): string {
      const taille = prix.toString().length;
      return prix.toString().substring(0, taille-2)+","+prix.toString().substring(taille-2, taille)+"€";
    }
   

}
