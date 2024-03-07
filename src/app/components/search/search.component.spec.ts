import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { HeaderComponent } from '../header/header.component';
import { MatIcon } from '@angular/material/icon';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent, HeaderComponent, MatIcon ],
      imports: [ReactiveFormsModule] // Import du module ReactiveFormsModule pour utiliser les formulaires réactifs
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
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
    expect(compiled.querySelector('input')).toBeTruthy();
    expect(compiled.querySelector('button')).toBeTruthy();
    expect(compiled.querySelector('.response')).toBeFalsy(); // Vérifie qu'au départ, la section des résultats de recherche n'est pas affichée
  });

  it('should call onSubmit() method on form submission', () => {
    spyOn(component, 'onSubmit'); // Espionne la méthode onSubmit du composant
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit')); // Simule la soumission du formulaire
    fixture.detectChanges();
    expect(component.onSubmit).toHaveBeenCalled(); // Vérifie si la méthode onSubmit a été appelée
  });

});
