import { TestBed, ComponentFixture } from '@angular/core/testing';
import { WellbeingComponent } from './wellbeing.component';

describe('WellbeingComponent', () => {
  let component: WellbeingComponent;
  let fixture: ComponentFixture<WellbeingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellbeingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellbeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the wellbeing component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain specific HTML elements', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.fullpage')).toBeTruthy();
    expect(compiled.querySelector('app-header')).toBeTruthy();
    expect(compiled.querySelector('.subtitle.title-font')).toBeTruthy();
    expect(compiled.querySelector('.all-wellbeing')).toBeTruthy();
    expect(compiled.querySelector('.wellbeing.white-background')).toBeTruthy();
    expect(compiled.querySelector('img')).toBeTruthy();
    expect(compiled.querySelector('p')).toBeTruthy();
    expect(compiled.querySelector('span')).toBeTruthy();
    expect(compiled.querySelector('button')).toBeTruthy();
  });

  it('should have correct text content', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Identifier les blessures du passé');
    expect(compiled.querySelector('span').textContent).toContain('Le bien être par le déblocage des blessures passées');
  });

  it('should have correct image source', () => {
    const compiled = fixture.nativeElement;
    const imgElement = compiled.querySelector('img');
    expect(imgElement.src).toContain('https://i.ibb.co/bv7TPPR/bien-etre-IN.webp');
  });
});
