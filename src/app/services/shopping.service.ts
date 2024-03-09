import { Injectable } from '@angular/core';
import { Shopping } from '../interfaces/shopping';
import { CareService } from './care.service';
import { GuidanceService } from './guidance.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private guidanceService: GuidanceService){}

  shop1 : Shopping = {"id": 1, "name": "les guidances","img": "https://i.ibb.co/3TbMNg0/cartesSM.webp","quantity": 2,"price": 6532};
  shop2 : Shopping = {"id": 2, "name": "Le bien etre","img": "https://i.ibb.co/TL2L05C/bien-etre-SM.webp","quantity": 3,"price": 7078 };
  shop3 : Shopping = {"id": 3, "name": "les guidances","img": "https://i.ibb.co/3TbMNg0/cartesSM.webp","quantity": 1,"price": 6532};
  shop4 : Shopping = {"id": 4, "name": "Le bien etre","img": "https://i.ibb.co/TL2L05C/bien-etre-SM.webp","quantity": 2,"price": 7078 };

  allItems: Shopping[] = [this.shop1, this.shop2, this.shop3, this.shop4];

  createNew(id: number, name: string, img: string, quantity: number, price: number): Shopping {
    return {
        id: id,
        name: name,
        img: img,
        quantity: quantity,
        price: price
    };
  }

  
  getAllShoppings(): Shopping[]{
    return this.allItems;
  }

  nbArticles(): number{
    return this.getAllShoppings().length;
  }

  addArticle(id: number){
    const guidance = this.guidanceService.findById(id);
    const nb = this.nbArticles();
    const newShoppingItem = this.createNew(nb+1, guidance.title, guidance.img, 1, guidance.price_cents);
    this.allItems.push(newShoppingItem);
    console.log("apres ajout: "+this.nbArticles());
  }
}
