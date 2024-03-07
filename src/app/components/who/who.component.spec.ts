import { TestBed, ComponentFixture } from '@angular/core/testing';
import { WhoComponent } from './who.component';
import { HeaderComponent } from '../header/header.component';
import { MatIcon } from '@angular/material/icon';

describe('WhoComponent', () => {
  let component: WhoComponent;
  let fixture: ComponentFixture<WhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoComponent, HeaderComponent, MatIcon ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the who component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain specific HTML elements', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.fullpage')).toBeTruthy();
    //expect(compiled.querySelector('app-header')).toBeTruthy();
    expect(compiled.querySelector('.subtitle.title-font')).toBeTruthy();
  });
});
