import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';
import { Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent{

  nbArticles: any = "";

  constructor(private dataService: DataService, private shoppingService: ShoppingService){
    this.initializeCounter();
  }

  initializeCounter(){
    this.dataService.data$.subscribe(data => {
      this.nbArticles = data;
    });
  }


}