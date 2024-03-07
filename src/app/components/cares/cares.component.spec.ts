import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CaresComponent } from './cares.component';
import { CardComponent } from '../card/card.component';
import { HeaderComponent } from '../header/header.component';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('CaresComponent', () => {
  let component: CaresComponent;
  let fixture: ComponentFixture<CaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaresComponent, CardComponent, HeaderComponent, MatIcon ],
      imports: [ RouterLink, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display cards with correct data', () => {
    component.allCares = [
      { id: 1, title: 'Prestation 1', content: 'Contenu de la prestation 1', img: 'image1.jpg', cta: 'En savoir plus' },
      { id: 2, title: 'Prestation 2', content: 'Contenu de la prestation 2', img: 'image2.jpg', cta: 'En savoir plus' }
    ];
    fixture.detectChanges();
    const cardElements = fixture.nativeElement.querySelectorAll('app-card');
    expect(cardElements.length).toBe(2);

    // Vérifiez les données de chaque carte
    expect(cardElements[0].querySelector('.card-title').textContent).toContain('Prestation 1');
    // expect(cardElements[0].querySelector('.card-content').textContent).toContain('Contenu de la prestation 1');
    // expect(cardElements[0].querySelector('.card-cta').textContent).toContain('En savoir plus');
    // Faites de même pour la deuxième carte
    // ...

    // Vous pouvez également vérifier si les bonnes données sont passées aux composants enfants
    const cardComponentInstances = fixture.componentInstance.allCares;
    expect(cardComponentInstances[0].title).toEqual('Prestation 1');
    expect(cardComponentInstances[0].content).toEqual('Contenu de la prestation 1');
    expect(cardComponentInstances[0].img).toEqual('image1.jpg');
    expect(cardComponentInstances[0].cta).toEqual('En savoir plus');
    // Faites de même pour la deuxième carte
    // ...
  });
});
