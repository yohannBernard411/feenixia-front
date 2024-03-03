import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion.component';

describe('ConnexionComponent', () => {
  let component: ConnexionComponent;
  let fixture: ComponentFixture<ConnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmitOld method when form is submitted', () => {
    spyOn(component, 'onSubmitOld');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(component.onSubmitOld).toHaveBeenCalled();
  });

  it('should validate form controls', () => {
    const form = component.formOld;
    form.controls['email'].setValue('');
    form.controls['mdp'].setValue('');
    expect(form.valid).toBeFalsy();
    expect(form.controls['email'].valid).toBeFalsy();
    expect(form.controls['mdp'].valid).toBeFalsy();
  });

  it('should contain necessary HTML elements', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.connexion-form')).toBeTruthy();
    expect(compiled.querySelector('.connexion-form form')).toBeTruthy();
    expect(compiled.querySelector('.name-zone label')).toBeTruthy();
    expect(compiled.querySelector('.email-zone label')).toBeTruthy();
    expect(compiled.querySelector('.message-zone label')).toBeTruthy();
    expect(compiled.querySelector('button[type="submit"]')).toBeTruthy();
    expect(compiled.querySelector('a[routerLink="/inscription"]')).toBeTruthy();
  });
});
