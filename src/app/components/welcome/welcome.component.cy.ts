import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import { HeaderComponent } from '../header/header.component';
import { MatIconModule } from '@angular/material/icon';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeComponent, HeaderComponent],
      imports: [MatIconModule]
    });
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it(`should have as title 'FEENIXIA-VOYANCE-ENERGIE'`, () => {
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toEqual('FEENIXIA-VOYANCE-ENERGIE');
  // });

});
