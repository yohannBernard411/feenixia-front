import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { HeaderComponent } from '../header/header.component';
import { UserInfoResponse } from 'src/app/interfaces/user-info-response';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {

  constructor(private toast: NgToastService, private router: Router, private authService: AuthService){}

  showSuccessOld(name: string) {
    this.toast.success({detail:"SUCCESS",summary:'Bonjour '+name+', nous sommes heureux de vous revoir! Vous allez être redirigé vers l\'accueil' ,duration:5000});
  }
  
  showErrorOld(name: string, error: string) {
    this.toast.error({detail:"ERROR",summary:'Oups '+name+' il semblerait qu\'il y ait un problème!'+error ,sticky:true});
  }

  formOld: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.minLength(6), Validators.maxLength(100), Validators.required]),
    password: new FormControl('', [Validators.minLength(6), Validators.maxLength(22), Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
  });

  isLoggedIn(){
    console.log("is logged in: "+this.authService.isLoggedIn());
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.signOut();
  }

  onSubmitOld(e: Event) {
    const formData2 = this.formOld.value;
    this.formOld.get('username')!.setValidators([Validators.minLength(6), Validators.maxLength(100), Validators.required]);
    this.formOld.get('password')!.setValidators([Validators.minLength(6), Validators.maxLength(22), Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]);
    const currentUser = this.formOld.get('username')!.value;
    console.log("data envoyés en post: "+JSON.stringify(this.formOld.value));
    this.authService.signIn(this.formOld.value)
    .subscribe(
      response => {
        // Traitez la réponse en fonction de vos besoins
        console.log('Logged in successfully:', response);
      },
      error => {
        // Gérez les erreurs
        console.error('Login failed:', error);
      }
    );
    // const currentUser: UserInfoResponse = this.authService.signIn(this.formOld.value); 
    this.showSuccessOld(currentUser);
    setTimeout(() => {
      this.router.navigate(['/welcome']);
   }, 5000);
   
  }

   


}
