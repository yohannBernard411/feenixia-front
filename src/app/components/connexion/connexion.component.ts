import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {

  constructor(private toast: NgToastService, private router: Router){}

  showSuccessNew(name: string, email: string) {
    this.toast.success({detail:"SUCCESS",summary:'Félicitation '+name+', pour votre inscription, un message de validation vous a été envoyé à l\'adresse: '+email ,duration:10000});
  }
  
  showErrorNew(name: string, error: string) {
    this.toast.error({detail:"ERROR",summary:'Oups '+name+' il semblerait qu\'il y ait un problème!'+error ,sticky:true});
  }

  showSuccessOld(name: string) {
    this.toast.success({detail:"SUCCESS",summary:'Bonjour '+name+', nous sommes heureux de vous revoir! Vous allez être redirigé vers l\'accueil' ,duration:5000});
  }
  
  showErrorOld(name: string, error: string) {
    this.toast.error({detail:"ERROR",summary:'Oups '+name+' il semblerait qu\'il y ait un problème!'+error ,sticky:true});
  }

  formNew: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.minLength(6), Validators.maxLength(22), Validators.required] ),
    email: new FormControl('', [Validators.minLength(6), Validators.maxLength(100), Validators.required, Validators.email]),
    mdp: new FormControl('', [Validators.minLength(6), Validators.maxLength(22), Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
  });

  formOld: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.minLength(6), Validators.maxLength(100), Validators.required, Validators.email]),
    mdp: new FormControl('', [Validators.minLength(6), Validators.maxLength(22), Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
  });

  onSubmitNew(e: Event) {
    const formData = this.formNew.value;
    this.formNew.get('name')!.setValidators([Validators.minLength(6), Validators.maxLength(22), Validators.required]);
    this.formNew.get('email')!.setValidators([Validators.minLength(6), Validators.maxLength(100), Validators.required, Validators.email]);
    this.formNew.get('mdp')!.setValidators([Validators.minLength(6), Validators.maxLength(22), Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]);
    this.showSuccessNew(this.formNew.get('name')!.value, this.formNew.get('email')!.value);
    //   e.preventDefault();
  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target as HTMLFormElement, 'YOUR_PUBLIC_KEY')
  //     .then((result: EmailJSResponseStatus) => {
  //       this.showSuccess(this.form.get('name')!.value, this.form.get('email')!.value);
  //     }, (error) => {
  //       this.showError(this.form.get('name')!.value, error.text)
  //     });
    console.log("Ceci est un nouvel utilisateur: ");
    console.log("name: "+this.formNew.get('name')!.value+", email: "+this.formNew.get('email')!.value+", name: "+this.formNew.get('mdp')!.value);
  }

  onSubmitOld(e: Event) {
    const formData2 = this.formOld.value;
    this.formNew.get('email')!.setValidators([Validators.minLength(6), Validators.maxLength(100), Validators.required, Validators.email]);
    this.formNew.get('mdp')!.setValidators([Validators.minLength(6), Validators.maxLength(22), Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]);
    let username = 'Super Yoyo'; // a la place de this.formNew.get('name')!.value
    this.showSuccessOld(username);
    setTimeout(() => {
      this.router.navigate(['/welcome']);
   }, 5000);
    //   e.preventDefault();
  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target as HTMLFormElement, 'YOUR_PUBLIC_KEY')
  //     .then((result: EmailJSResponseStatus) => {
  //       this.showSuccess(this.form.get('name')!.value, this.form.get('email')!.value);
  //     }, (error) => {
  //       this.showError(this.form.get('name')!.value, error.text)
  //     });
  }

}
