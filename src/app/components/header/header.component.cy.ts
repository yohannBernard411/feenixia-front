import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { Router, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { WelcomeComponent } from '../welcome/welcome.component';
import { WhoComponent } from 'src/app/components/who/who.component';

describe('HeaderComponent', () => {
    const routes = [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'who', component: WhoComponent},
      { path: '**', redirectTo: 'welcome' }
    ] as Routes;
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule, MatIconModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the header component', () => {

  });

  it('should display menu links', () => {
    const compiled = fixture.nativeElement;
    const menuLinks = compiled.querySelectorAll('.menu-link');

  });

// it('should navigate to correct page when menu link is clicked', () => {
//   const navigateSpy = spyOn(router, 'navigateByUrl');
//   const compiled = fixture.nativeElement;
//   const menuLink = compiled.querySelector('.menu-link');
//   menuLink.click();
//   expect(navigateSpy).toHaveBeenCalledOnceWith('/welcome');
// });

  it('devrait renvoyer welcome pour le clic sur welcome', fakeAsync(() => {
    const compiled = fixture.nativeElement;
    const menuLink = compiled.querySelectorAll('.menu-link');
    menuLink[0].nativeElement.click();
    tick();

  }));

  it('devrait renvoyer who pour le clic sur who', fakeAsync(() => {
    const compiled = fixture.nativeElement;
    const menuLink = compiled.querySelectorAll('.menu-link');
    menuLink[1].nativeElement.click();
    tick();

  }));
});

