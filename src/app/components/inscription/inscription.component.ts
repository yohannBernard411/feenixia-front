import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {

  constructor(private toast: NgToastService, private router: Router, private authService: AuthService){}

  username: string = '';
  useremail: string = '';
  nameUnknown: unknown;
  emailUnknown: unknown;

  showSuccessNew(name: string, email: string) {
    this.toast.success({detail:"SUCCESS",summary:'Bonjour '+name+', nous vous avons envoyer un mail de validation à l\'adresse:'+email ,duration:5000});
  }
  
  showErrorNew(name: string, error: string) {
    this.toast.error({detail:"ERROR",summary:'Oups '+name+' il semblerait qu\'il y ait un problème!'+error ,sticky:true});
  }

  formNew: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.minLength(6), Validators.maxLength(22), Validators.required]),
    email: new FormControl('', [Validators.minLength(6), Validators.maxLength(100), Validators.required, Validators.email]),
    password: new FormControl('', [Validators.minLength(6), Validators.maxLength(22), Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])  
});

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  onSubmitNew(e: Event) {
    const formData2 = this.formNew.value;
    this.formNew.get('username')!.setValidators([Validators.minLength(6), Validators.maxLength(22), Validators.required]);
    this.formNew.get('email')!.setValidators([Validators.minLength(6), Validators.maxLength(100), Validators.required, Validators.email]);
    this.formNew.get('password')!.setValidators([Validators.minLength(6), Validators.maxLength(22), Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]);
    const currentUser = this.formNew.get('username')!.value;
    console.log("data envoyés en post signin: "+JSON.stringify(this.formNew.value));
    this.authService.signUp(this.formNew.value)
    .subscribe(
      response => {
        // Traitez la réponse en fonction de vos besoins
        console.log('Enregistrement is successfully:', response);
      },
      error => {
        // Gérez les erreurs
        console.error('SignUp failed:', error);
      }
    );
    this.showSuccessNew(this.formNew.get('username')?.value, this.formNew.get('email')?.value);
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
