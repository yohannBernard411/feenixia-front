import { Injectable, OnInit } from '@angular/core';
import { Shopping } from '../interfaces/shopping';
import { MediumService } from './medium.service';
import { DataService } from './data.service';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Medium } from '../interfaces/medium';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService{

  private apiUrl = 'http://localhost:8080/api/shopping';
  private shoppingsSubject: BehaviorSubject<Shopping[]> = new BehaviorSubject<Shopping[]>([]);
  shoppings$: Observable<Shopping[]> = this.shoppingsSubject.asObservable();

  constructor(private mediumService: MediumService,
    private dataService: DataService,
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

  // createArticle(id: number){
  //   let care = this.mediumService.findById(id);
  //   const findElement = this.shoppings.find(element => element.name == care.title);
  //   if (findElement){
  //     this.addArticle(findElement.id, findElement.category);
  //   }else{
  //     const nb: number = this.nbShops;
  //     const newShoppingItem = this.createNew(nb+1, care.title, care.img, 1, care.category, care.price);
  //     this.shoppings.push(newShoppingItem);
  //   }
  // }

  addArticle(id: number){
    let findShop: Shopping;
    let rank = -1;
    this.shoppings.forEach((element, index) => {
      if (element.id==id){
        rank = index;
        findShop = element;
      }
    });
    if (rank  != -1){
      this.shoppings[rank].quantity += 1;
    this.nbArticles();
    this.dataService.updateData(this.nbShops);
    }else{


    this.mediumService.getMediumById(id).subscribe((medium: Medium) => {
      const title: string = medium.title;
      const img: string = medium.img;
      const category: string = medium.category;
      const price: number = medium.price;
    const newShop = this.createNew(this.shoppings.length, title, img, 1, category, price);
    this.shoppings.push(newShop);
    this.nbArticles();
    });
  }
    
  }

  removeArticle(id: number){
    const findShop: Shopping = this.shoppings.find(element => element.id==id)!;
    findShop.quantity -= 1;
    this.dataService.updateData(this.nbShops);
  }
}
