import { Injectable } from '@angular/core';
import { Shopping } from '../interfaces/shopping';
import { CareService } from './care.service';
import { GuidanceService } from './guidance.service';
import { DataService } from './data.service';
import { MagnetismeService } from './magnetisme.service';
import { WellbeingService } from './wellbeing.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private guidanceService: GuidanceService,
              private dataService: DataService,
              private magnetismeService: MagnetismeService,
              private wellbeingService: WellbeingService
              ){}


  shop1 : Shopping = {"id": 1, "name": "Guidance compléte","img": "https://i.ibb.co/3TbMNg0/cartesSM.webp","quantity": 1,"price": 5000};
  shop2 : Shopping = {"id": 2, "name": "Guidance sur un sujet précis","img": "https://i.ibb.co/TL2L05C/bien-etre-SM.webp","quantity": 1,"price": 3000 };
  shop3 : Shopping = {"id": 3, "name": "Guidance bien-être","img": "https://i.ibb.co/3TbMNg0/cartesSM.webp","quantity": 1,"price": 4000};
  shop4 : Shopping = {"id": 4, "name": "Magnetisme energétique","img": "https://i.ibb.co/TL2L05C/bien-etre-SM.webp","quantity": 1,"price": 3000 };

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
    //return this.getAllShoppings().length;
    const allShops = this.getAllShoppings();
    let count = 0;
    allShops.forEach(element => {
      count += element.quantity;
    })
    return count;

  }

  createArticle(id: number){
    let care = this.guidanceService.findById(id);
    if (!care){
      care = this.magnetismeService.findById(id);
    }
    if (!care){
      care = this.wellbeingService.findById(id);
    }
    const allShopping = this.getAllShoppings();
    const findElement = allShopping.find(element => element.name == care.title);
    if (findElement){
      this.addArticle(findElement.id);
    }else{
      const nb = this.nbArticles();
      const newShoppingItem = this.createNew(nb+1, care.title, care.img, 1, care.price);
      this.allItems.push(newShoppingItem);
    }
  }

  addArticle(id: number){
    const allShops: Shopping[] = this.getAllShoppings();
    const findShop: Shopping = allShops.find(element => element.id==id)!;
    findShop.quantity += 1;
    this.dataService.updateData(this.nbArticles());
    console.log("addarticle: "+this.nbArticles());
  }

  removeArticle(id: number){
    const allShops: Shopping[] = this.getAllShoppings();
    const findShop: Shopping = allShops.find(element => element.id==id)!;
    findShop.quantity -= 1;
    this.dataService.updateData(this.nbArticles());
    console.log("removearticle: "+this.nbArticles());
  }
}
