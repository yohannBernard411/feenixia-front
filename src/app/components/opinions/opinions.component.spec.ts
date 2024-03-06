import { TestBed, ComponentFixture } from '@angular/core/testing';
import { OpinionsComponent } from './opinions.component';
import { HeadbandComponent } from '../headband/headband.component';
import { HeaderComponent } from '../header/header.component';

describe('OpinionsComponent', () => {
  let component: OpinionsComponent;
  let fixture: ComponentFixture<OpinionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpinionsComponent, HeadbandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionsComponent);
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
    expect(compiled.querySelector('.all-cards')).toBeTruthy();
  });

  it('should display opinions correctly', () => {
    component.allOpinions = [
      { id: 1, title: 'Opinion 1', content: 'Content 1', care: 'Care 1', count: 5, user: { id: 1, name: 'User 1', img: 'path/to/image1.jpg' }},
      { id: 2, title: 'Opinion 2', content: 'Content 2', care: 'Care 2', count: 3, user: { id: 2, name: 'User 2', img: 'path/to/image2.jpg' }},
    ];
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const headbandComponents = compiled.querySelectorAll('app-headband');
    expect(headbandComponents.length).toBe(component.allOpinions.length);
  });
});
