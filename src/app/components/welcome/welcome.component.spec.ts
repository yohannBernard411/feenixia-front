import { TestBed, ComponentFixture } from '@angular/core/testing';
import { WelcomeComponent } from './welcome.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MatIcon } from '@angular/material/icon';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeComponent, HeaderComponent, FooterComponent, MatIcon ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
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
    expect(compiled.querySelector('h1')).toBeTruthy();
    expect(compiled.querySelector('app-footer')).toBeTruthy();
    // Ajoutez d'autres assertions pour les éléments HTML supplémentaires si nécessaire
  });

  it('should have correct title text', () => {
    const compiled = fixture.nativeElement;
    const titleElement = compiled.querySelector('h1');
    expect(titleElement.textContent).toContain('FEENIXIA-VOYANCE-ENERGIE');
  });

  // Ajoutez d'autres tests pour tester le contenu supplémentaire si nécessaire
});
