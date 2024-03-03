import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit method when form is submitted', () => {
    spyOn(component, 'onSubmit');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('should validate form controls', () => {
    const form = component.form;
    form.controls['name'].setValue('');
    form.controls['email'].setValue('invalid-email');
    form.controls['message'].setValue('');
    expect(form.valid).toBeFalsy();
    expect(form.controls['name'].valid).toBeFalsy();
    expect(form.controls['email'].valid).toBeFalsy();
    expect(form.controls['message'].valid).toBeFalsy();
  });

  it('should contain necessary HTML elements', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.contact-form')).toBeTruthy();
    expect(compiled.querySelector('.contact-form form')).toBeTruthy();
    expect(compiled.querySelector('.name-zone label')).toBeTruthy();
    expect(compiled.querySelector('.email-zone label')).toBeTruthy();
    expect(compiled.querySelector('.message-zone label')).toBeTruthy();
    expect(compiled.querySelector('button[type="submit"]')).toBeTruthy();
  });
});
