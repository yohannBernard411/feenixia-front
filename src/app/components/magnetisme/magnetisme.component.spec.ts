import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MagnetismeComponent } from './magnetisme.component';
import { HeaderComponent } from '../header/header.component';
import { MatIcon } from '@angular/material/icon';

describe('MagnetismeComponent', () => {
  let component: MagnetismeComponent;
  let fixture: ComponentFixture<MagnetismeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagnetismeComponent, HeaderComponent, MatIcon ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagnetismeComponent);
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
    expect(compiled.querySelector('.all-magnetisme')).toBeTruthy();
  });

  it('should display magnetism services correctly', () => {
    const compiled = fixture.nativeElement;
    const magnetismeDivs = compiled.querySelectorAll('.magnetisme');
    expect(magnetismeDivs.length).toBe(3);
  });

});
