import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct title, content, and cta', () => {
    component.title = 'Test Title';
    component.content = 'Test Content';
    component.cta = '/test';
    component.img = 'test.jpg';
    fixture.detectChanges();

    const cardTitle = fixture.nativeElement.querySelector('.card-title');
    const cardContent = fixture.nativeElement.querySelector('.content-card');
    const cardCta = fixture.nativeElement.querySelector('.cta');

    expect(cardTitle.textContent).toContain('Test Title');
    expect(cardContent.textContent).toContain('Test Content');
    expect(cardCta.getAttribute('routerLink')).toBe('/test');
  });
});
