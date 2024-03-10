import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ShoppingService } from './shopping.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new BehaviorSubject<number>(0); // Définissez le type de données que vous souhaitez transmettre
  public data$: Observable<number> = this.dataSubject.asObservable();

  constructor() { 
    this.initializeData();
  }

  initializeData() {
    const initialData = 4;
    this.updateData(initialData);
  }

  updateData(data: number) {
    this.dataSubject.next(data);
  }
}
