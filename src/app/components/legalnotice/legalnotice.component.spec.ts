import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LegalnoticeComponent } from './legalnotice.component';

describe('LegalnoticeComponent', () => {
  let component: LegalnoticeComponent;
  let fixture: ComponentFixture<LegalnoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalnoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain specific HTML elements', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.fullpage')).toBeTruthy();
    //expect(compiled.querySelector('app-header')).toBeTruthy();
    expect(compiled.querySelector('h2')).toBeTruthy();
    expect(compiled.querySelector('.legalnotice')).toBeTruthy();
  });

  it('should display legal notice correctly', () => {
    const compiled = fixture.nativeElement;
  });

});
