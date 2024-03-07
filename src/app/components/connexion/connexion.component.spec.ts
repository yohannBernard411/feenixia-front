import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion.component';
import { HeaderComponent } from '../header/header.component';
import { NgToastModule } from 'ng-angular-popup';
import { MatIcon } from '@angular/material/icon';

describe('ConnexionComponent', () => {
  let component: ConnexionComponent;
  let fixture: ComponentFixture<ConnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionComponent, HeaderComponent, MatIcon ],
      imports: [ReactiveFormsModule, NgToastModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmitOld method when form is submitted', () => {
    spyOn(component, 'onSubmitOld');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(component.onSubmitOld).toHaveBeenCalled();
  });

  it('should validate form controls', () => {
    const form = component.formOld;
    form.controls['email'].setValue('');
    form.controls['mdp'].setValue('');
    expect(form.valid).toBeFalsy();
    expect(form.controls['email'].valid).toBeFalsy();
    expect(form.controls['mdp'].valid).toBeFalsy();
  });

  it('should contain necessary HTML elements', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.connexion-form')).toBeTruthy();
    expect(compiled.querySelector('.connexion-form form')).toBeTruthy();
    // expect(compiled.querySelector('.formulaire label')[0]).toBeTruthy();
    // expect(compiled.querySelector('.formulaire label')[1]).toBeTruthy();
    // expect(compiled.querySelector('.formulaire label')[2]).toBeTruthy();
    expect(compiled.querySelector('button[type="submit"]')).toBeTruthy();
    expect(compiled.querySelector('a[routerLink="/inscription"]')).toBeTruthy();
  });
});
