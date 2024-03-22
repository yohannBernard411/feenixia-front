import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new BehaviorSubject<number>(0); // Définissez le type de données que vous souhaitez transmettre
  public data$: Observable<number> = this.dataSubject.asObservable();

  constructor() {}

  initializeData(nb: number) {
    this.updateData(nb);
  }

  updateData(data: number) {
    this.dataSubject.next(data);
  }
}
