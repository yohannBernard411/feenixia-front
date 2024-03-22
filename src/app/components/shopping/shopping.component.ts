import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Shopping } from 'src/app/interfaces/shopping';
import { DataService } from 'src/app/services/data.service';
import { ShoppingService } from 'src/app/services/shopping.service';

const PLUS_ICON =
  `<svg width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
  <title>plus</title>
  <desc>Created with Sketch Beta.</desc>
  <defs>
</defs>
  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
      <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-360.000000, -1035.000000)" fill="#000000">
          <path d="M388,1053 L378,1053 L378,1063 C378,1064.1 377.104,1065 376,1065 C374.896,1065 374,1064.1 374,1063 L374,1053 L364,1053 C362.896,1053 362,1052.1 362,1051 C362,1049.9 362.896,1049 364,1049 L374,1049 L374,1039 C374,1037.9 374.896,1037 376,1037 C377.104,1037 378,1037.9 378,1039 L378,1049 L388,1049 C389.104,1049 390,1049.9 390,1051 C390,1052.1 389.104,1053 388,1053 L388,1053 Z M388,1047 L380,1047 L380,1039 C380,1036.79 378.209,1035 376,1035 C373.791,1035 372,1036.79 372,1039 L372,1047 L364,1047 C361.791,1047 360,1048.79 360,1051 C360,1053.21 361.791,1055 364,1055 L372,1055 L372,1063 C372,1065.21 373.791,1067 376,1067 C378.209,1067 380,1065.21 380,1063 L380,1055 L388,1055 C390.209,1055 392,1053.21 392,1051 C392,1048.79 390.209,1047 388,1047 L388,1047 Z" id="plus" sketch:type="MSShapeGroup">

</path>
</g>
</g>
</svg>`;

const MOINS_ICON = `<svg width="800px" height="800px" viewBox="0 -12 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
<title>minus</title>
<desc>Created with Sketch Beta.</desc>
<defs>
</defs>
<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
    <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-412.000000, -1047.000000)" fill="#000000">
        <path d="M440,1053 L416,1053 C414.896,1053 414,1052.1 414,1051 C414,1049.9 414.896,1049 416,1049 L440,1049 C441.104,1049 442,1049.9 442,1051 C442,1052.1 441.104,1053 440,1053 L440,1053 Z M440,1047 L416,1047 C413.791,1047 412,1048.79 412,1051 C412,1053.21 413.791,1055 416,1055 L440,1055 C442.209,1055 444,1053.21 444,1051 C444,1048.79 442.209,1047 440,1047 L440,1047 Z" id="minus" sketch:type="MSShapeGroup">
</path>
</g>
</g>
</svg>`

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  constructor(private shoppingService: ShoppingService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private dataService: DataService) { 
    iconRegistry.addSvgIconLiteral('plus', sanitizer.bypassSecurityTrustHtml(PLUS_ICON));
    iconRegistry.addSvgIconLiteral('moins', sanitizer.bypassSecurityTrustHtml(MOINS_ICON));
  }

  allShoppings: Shopping[] = [];
  nbShops: number = 0;
  total: number = 0; 

  ngOnInit(): void {
    this.getAllShoppings();
    this.nbArticles();
    this.calculateTotal();
  }
  
  getAllShoppings(): void {
    this.allShoppings = this.shoppingService.shoppings;
  };

  nbArticles(): void{
    let count = 0;
    this.allShoppings.forEach(element => {
        count += element.quantity;
    });
    this.nbShops = count;
  }


  calculateTotal(): void {
    this.total = 0;
    this.allShoppings.forEach(element => {
    this.total += (element.quantity * element.price)
    });
  }

  formatagePrix(prix: number): string { //accept 12350 and return 123,50€ 
    const taille = prix.toString().length;
    return prix.toString().substring(0, taille-2)+","+prix.toString().substring(taille-2, taille)+"€";
  }

  quantity_remove(id: number, category: string){
    let rank = 0;
    for (let i=0; i<this.allShoppings.length; i++){
      if (this.allShoppings[i].id==id && this.allShoppings[i].category==category){
        rank = i;
      }
    }
    this.allShoppings[rank].quantity -= 1;
    this.nbArticles();
    this.calculateTotal();
    this.dataService.updateData(this.nbShops);
  }

  quantity_add(id: number, category: string){
    let rank = 0;
    for (let i=0; i<this.allShoppings.length; i++){
      if (this.allShoppings[i].id==id && this.allShoppings[i].category==category){
        rank = i;
      }
    }
    this.allShoppings[rank].quantity += 1;
    this.nbArticles();
    this.calculateTotal();
    this.dataService.updateData(this.nbShops);
  }

}
