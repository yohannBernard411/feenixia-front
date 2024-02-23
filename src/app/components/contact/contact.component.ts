import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private toast: NgToastService){}

  showSuccess(name: string, email: string) {
    this.toast.success({detail:"SUCCESS",summary:'Merci '+name+', nous vous repondrons le plus rapidement possible à l\'adresse: '+email ,duration:5000});
  }
  
  showError(name: string, error: string) {
    this.toast.error({detail:"ERROR",summary:'Oups '+name+' il semblerait qu\'il y ait un problème!'+error ,sticky:true});
  }

  // showInfo() {
  //   this.toast.info({detail:"INFO",summary:'Your Info Message',sticky:true});
  // }

  // showWarn() {
  //   this.toast.warning({detail:"WARN",summary:'Your Warn Message',duration:5000});
  // }

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });

  onSubmit(e: Event) {
    const formData = this.form.value;
    //   e.preventDefault();
    //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target as HTMLFormElement, 'YOUR_PUBLIC_KEY')
    //     .then((result: EmailJSResponseStatus) => {
    //       this.showSuccess(this.form.get('name')!.value, this.form.get('email')!.value);
    //     }, (error) => {
    //       this.showError(this.form.get('name')!.value, error.text)
    //     });
  }

}
