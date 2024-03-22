import { Injectable, OnInit } from '@angular/core';
import { Shopping } from '../interfaces/shopping';
import { GuidanceService } from './guidance.service';
import { DataService } from './data.service';
import { MagnetismeService } from './magnetisme.service';
import { WellbeingService } from './wellbeing.service';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService{

  private apiUrl = 'http://localhost:8080/api/shopping';
  private shoppingsSubject: BehaviorSubject<Shopping[]> = new BehaviorSubject<Shopping[]>([]);
  shoppings$: Observable<Shopping[]> = this.shoppingsSubject.asObservable();

  constructor(private guidanceService: GuidanceService,
    private dataService: DataService,
    private magnetismeService: MagnetismeService,
    private wellbeingService: WellbeingService,
    private http: HttpClient) {
    this.getAllShopping();
    setTimeout(() =>this.nbArticles(), 1000);
  }

  shoppings: Shopping[] = [];
  nbShops: number = 0;

  private getAllShopping(): void {
    this.http.get<Shopping[]>(this.apiUrl+'/all')
      .pipe(
        tap(shops => {
          this.shoppingsSubject.next(shops);
          this.shoppings = shops;
        })
      )
      .subscribe();
  }

  nbArticles(): void{
      let count = 0;
      this.shoppings$.subscribe(shoppings => {
        this.shoppings = shoppings;
      });
      this.shoppings.forEach(element => {
          count += element.quantity;
      });
      this.nbShops = count;
      this.dataService.updateData(count);
  }

  createNew(id: number, name: string, img: string, quantity: number, category: string, price: number): Shopping {
    return {
        id: id,
        name: name,
        img: img,
        quantity: quantity,
        category: category,
        price: price
    };
  }

  createArticle(id: number){
    let care = this.guidanceService.findById(id);
    if (!care){
      care = this.magnetismeService.findById(id);
    }
    if (!care){
      care = this.wellbeingService.findById(id);
    }
    const findElement = this.shoppings.find(element => element.name == care.title);
    if (findElement){
      this.addArticle(findElement.id, findElement.category);
    }else{
      const nb: number = this.nbShops;
      const newShoppingItem = this.createNew(nb+1, care.title, care.img, 1, care.category, care.price);
      this.shoppings.push(newShoppingItem);
    }
  }

  addArticle(id: number, category: string){
    let findShop: Shopping;
    this.shoppings.forEach(element => {
      if (element.category==category && element.id==id){
        findShop = element;
      }
    });
    let rank = 0;
    for (let i=0; i<this.shoppings.length; i++){
      if (this.shoppings[i].id==id && this.shoppings[i].category==category){
        rank = i;
      }
    }
    this.shoppings[rank].quantity += 1;
    this.nbArticles();
    this.dataService.updateData(this.nbShops);
  }

  removeArticle(id: number){
    const findShop: Shopping = this.shoppings.find(element => element.id==id)!;
    findShop.quantity -= 1;
    this.dataService.updateData(this.nbShops);
  }
}
