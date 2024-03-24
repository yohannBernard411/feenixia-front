import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MediumComponent } from './medium.component';
import { HeaderComponent } from '../header/header.component';
import { MatIcon } from '@angular/material/icon';
import { NgToastModule } from 'ng-angular-popup';

describe('MediumComponent', () => {
  let component: MediumComponent;
  let fixture: ComponentFixture<MediumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumComponent, HeaderComponent, MatIcon ],
      imports: [NgToastModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct data', () => {
    const compiled = fixture.nativeElement;
    // Vérifiez si les éléments HTML sont présents
    expect(compiled.querySelector('.subtitle').textContent).toContain('Les mediums');
    expect(compiled.querySelectorAll('.medium').length).toBe(3); // Vérifiez le nombre de mediums
    // Vérifiez les descriptions des mediums
    expect(compiled.querySelectorAll('.description p').length).toBe(5); // Vérifiez le nombre de paragraphes de description
    // Vérifiez les prix des mediums
    expect(compiled.querySelectorAll('.description span').length).toBe(3); // Vérifiez le nombre de prix affichés
    // Vérifiez la présence des boutons "Ajouter au panier"
    expect(compiled.querySelectorAll('.cta').length).toBe(3); // Vérifiez le nombre de boutons "Ajouter au panier"
    // Ajoutez d'autres assertions au besoin
  });

});
