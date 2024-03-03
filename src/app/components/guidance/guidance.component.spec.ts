import { TestBed, ComponentFixture } from '@angular/core/testing';
import { GuidanceComponent } from './guidance.component';

describe('GuidanceComponent', () => {
  let component: GuidanceComponent;
  let fixture: ComponentFixture<GuidanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct data', () => {
    const compiled = fixture.nativeElement;
    // Vérifiez si les éléments HTML sont présents
    expect(compiled.querySelector('.subtitle').textContent).toContain('Les guidances');
    expect(compiled.querySelectorAll('.guidance').length).toBe(3); // Vérifiez le nombre de guidances
    // Vérifiez les descriptions des guidances
    expect(compiled.querySelectorAll('.description p').length).toBe(3); // Vérifiez le nombre de paragraphes de description
    // Vérifiez les prix des guidances
    expect(compiled.querySelectorAll('.description span').length).toBe(3); // Vérifiez le nombre de prix affichés
    // Vérifiez la présence des boutons "Ajouter au panier"
    expect(compiled.querySelectorAll('.cta').length).toBe(3); // Vérifiez le nombre de boutons "Ajouter au panier"
    // Ajoutez d'autres assertions au besoin
  });

});
