import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIcon } from '@angular/material/icon';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent, MatIcon ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain specific HTML elements', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#header')).toBeTruthy();
    expect(compiled.querySelector('#logo')).toBeTruthy();
    expect(compiled.querySelector('#menu')).toBeTruthy();
    expect(compiled.querySelector('#icon')).toBeTruthy();
    expect(compiled.querySelectorAll('.menu-link').length).toEqual(8);
  });

  it('should have correct router links', () => {
    const menuLinks = fixture.nativeElement.querySelectorAll('.menu-link');
    expect(menuLinks[0].getAttribute('routerLink')).toEqual('/welcome');
    expect(menuLinks[1].getAttribute('routerLink')).toEqual('/who');
    expect(menuLinks[2].getAttribute('routerLink')).toEqual('/cares');
    expect(menuLinks[3].getAttribute('routerLink')).toEqual('/opinions');
    expect(menuLinks[4].getAttribute('routerLink')).toEqual('/contact');
  });

  it('should have correct material icons with titles', () => {
    const iconLinks = fixture.nativeElement.querySelectorAll('#icon .menu-link');
    expect(iconLinks[0].querySelector('mat-icon').getAttribute('title')).toEqual('Se connecter');
    expect(iconLinks[1].querySelector('mat-icon').getAttribute('title')).toEqual('Mon panier');
    expect(iconLinks[2].querySelector('mat-icon').getAttribute('title')).toEqual('Rechercher');
  });

});
