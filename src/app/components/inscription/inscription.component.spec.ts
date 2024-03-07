import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { InscriptionComponent } from './inscription.component';
import { HeaderComponent } from '../header/header.component';
import { NgToastModule } from 'ng-angular-popup';
import { MatIcon } from '@angular/material/icon';

describe('InscriptionComponent', () => {
  let component: InscriptionComponent;
  let fixture: ComponentFixture<InscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionComponent, HeaderComponent, MatIcon ],
      imports: [ReactiveFormsModule, RouterTestingModule, NgToastModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain specific HTML elements', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.fullpage')).toBeTruthy();
    expect(compiled.querySelector('app-header')).toBeTruthy();
    expect(compiled.querySelector('h2')).toBeTruthy();
    expect(compiled.querySelector('form')).toBeTruthy();
    expect(compiled.querySelector('input[type="string"][formControlName="name"]')).toBeTruthy();
  });

});
