import { Component } from '@angular/core';
import { CareService } from 'src/app/services/care.service';

@Component({
  selector: 'app-cares',
  templateUrl: './cares.component.html',
  styleUrls: ['./cares.component.scss']
})

export class CaresComponent {

  constructor(private careService: CareService) { }

        allCares = this.careService.getAllCares();

}
