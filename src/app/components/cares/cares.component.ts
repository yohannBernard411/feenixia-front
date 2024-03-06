import { Component } from '@angular/core';
import { CaresService } from 'src/app/services/cares.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-cares',
  templateUrl: './cares.component.html',
  styleUrls: ['./cares.component.scss']
})

export class CaresComponent {

  constructor(private caresService: CaresService) { }

        allCares = this.caresService.getAllCares();

}
