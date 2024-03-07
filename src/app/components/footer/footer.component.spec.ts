import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { MatIcon } from '@angular/material/icon';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent, MatIcon ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct copyright text', () => {
    const compiled = fixture.nativeElement;
    const copyrightText = compiled.querySelector('.copyright').textContent;
    expect(copyrightText).toContain('© FEENIXIA 2024');
  });

  it('should contain legal notice link', () => {
    const compiled = fixture.nativeElement;
    const legalNoticeLink = compiled.querySelector('.legal-notice');
    expect(legalNoticeLink.getAttribute('routerLink')).toBe('/legalnotice');
  });

  it('should contain social media icons', () => {
    const compiled = fixture.nativeElement;
    const socialIcons = compiled.querySelectorAll('.social-link mat-icon');
    expect(socialIcons.length).toBe(3); // Assuming there are 3 social media icons
  });

});
