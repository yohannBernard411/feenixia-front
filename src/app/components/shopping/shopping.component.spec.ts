import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ShoppingComponent } from './shopping.component';
import { HeaderComponent } from '../header/header.component';
import { MatIcon } from '@angular/material/icon';

describe('ShoppingComponent', () => {
  let component: ShoppingComponent;
  let fixture: ComponentFixture<ShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingComponent, HeaderComponent, MatIcon ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingComponent);
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
    expect(compiled.querySelector('table')).toBeTruthy();
    expect(compiled.querySelector('caption')).toBeTruthy();
    expect(compiled.querySelector('thead')).toBeTruthy();
    expect(compiled.querySelector('tbody')).toBeTruthy();
    expect(compiled.querySelector('tfoot')).toBeTruthy();
    expect(compiled.querySelector('button')).toBeTruthy();
  });

  it('should display article details correctly', () => {
    component.currentShoppingByUser = [
      { id: 1, img: 'path/to/image.jpg', name: 'Article 1', quantity: 2, price: 1000 },
      { id: 2, img: 'path/to/image.jpg', name: 'Article 2', quantity: 1, price: 2000 }
    ];
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const rows = compiled.querySelectorAll('tbody tr');
    expect(rows.length).toBe(component.currentShoppingByUser.length);
    expect(rows[0].textContent).toContain('Article 1');
    expect(rows[1].textContent).toContain('Article 2');
  });

  it('should calculate total correctly', () => {
    component.currentShoppingByUser = [
      { id: 1, img: 'path/to/image.jpg', name: 'Article 1', quantity: 2, price: 1000 },
      { id: 2, img: 'path/to/image.jpg', name: 'Article 2', quantity: 1, price: 2000 }
    ];
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const totalCell = compiled.querySelector('tfoot td:last-child');
    expect(totalCell.textContent.trim()).toBe('40,00€'); // Expected total is 40 (2 * 10 + 1 * 20)
  });

});
