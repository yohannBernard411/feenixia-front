import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ShoppingService } from './shopping.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new BehaviorSubject<number>(0); // Définissez le type de données que vous souhaitez transmettre
  public data$: Observable<number> = this.dataSubject.asObservable();

  constructor(private shoppingService: ShoppingService) { 
    this.initializeData(); // Appelez la méthode d'initialisation des données au moment de la création du service
  }
  initializeData() {
    const initialData = this.shoppingService.nbArticles();
    this.updateData(initialData);
  }

  updateData(data: number) {
    this.dataSubject.next(data);
  }
}
