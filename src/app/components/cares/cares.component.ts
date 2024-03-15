import { Component } from '@angular/core';
import { Care } from 'src/app/interfaces/care';
import { CareService } from 'src/app/services/care.service';

@Component({
  selector: 'app-cares',
  templateUrl: './cares.component.html',
  styleUrls: ['./cares.component.scss']
})

export class CaresComponent {

  constructor(private careService: CareService) { }

  allCares: Care[] = [];

  ngOnInit(): void {
    this.getAllCares();
  }
  
  getAllCares(): void {
    this.careService.getAllCares().subscribe(
      cares => {
        this.allCares = cares; // Assignez les données reçues à la variable allCares
      },
      error => {
        console.log('Error:', error);
      }
    );
  }

       // allCares: Care[]= this.careService.getAllCares();

}
