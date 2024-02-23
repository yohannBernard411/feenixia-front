import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {

  formNew: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    mdp: new FormControl('')
  });

  formOld: FormGroup = new FormGroup({
    email: new FormControl(''),
    mdp: new FormControl('')
  });

  onSubmitNew(e: Event) {
    const formData = this.formNew.value;
    console.log("Ceci est un nouvel utilisateur: ");
    console.log("name: "+formData.get('name')!.value+"email: "+formData.get('email')!.value+"name: "+formData.get('mdp')!.value);
  }

  onSubmitOld(e: Event) {
    const formData2 = this.formOld.value;
    console.log("Ceci est un ancien utilisateur: ");
    console.log("email: "+formData2.get('email')!.value+"name: "+formData2.get('mdp')!.value);
  }

}
