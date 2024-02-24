import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

 returnSearch: { title: string, img: string, type: string, link: string }[] = [];

  form: FormGroup = new FormGroup({
    recherche: new FormControl(''),
  });

  

  onSubmit() {
    const formData = this.form.value;
    console.log("recherche: "+JSON.stringify(this.form.get('recherche')!.value));
    this.returnSearch= [
      {"title": "les guidances","img": "https://i.ibb.co/3TbMNg0/cartesSM.webp","type": "care","link": "/guidances"},
      {"title": "Mon commentaire","img": "https://i.ibb.co/TL2L05C/bien-etre-SM.webp","type": "comment","link": "/comment/3" }];
  
  }

  

  


}
