import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeadbandComponent } from './headband.component';
import { MatIconModule } from '@angular/material/icon';

describe('HeadbandComponent', () => {
  let component: HeadbandComponent;
  let fixture: ComponentFixture<HeadbandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadbandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadbandComponent);
    component = fixture.componentInstance;
    component.title = 'Titre de l\'article';
    component.content = 'Contenu de l\'article';
    component.username = 'Nom de l\'utilisateur';
    component.userimg = 'url_de_l_image_utilisateur';
    component.care = 'Soin associé à l\'article';
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct data', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.headband-title').textContent).toContain('Titre de l\'article');
    expect(compiled.querySelector('.content').textContent).toContain('Contenu de l\'article');
    expect(compiled.querySelector('.headband-subtitle').textContent).toContain('Soin associé à l\'article');
    expect(compiled.querySelector('.signature').textContent).toContain('Nom de l\'utilisateur');
  });

});
