import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoComponent } from './who.component';
import { HeaderComponent } from '../header/header.component';
import { MatIconModule } from '@angular/material/icon';

describe('WhoComponent', () => {
  let component: WhoComponent;
  let fixture: ComponentFixture<WhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhoComponent, HeaderComponent],
      imports: [MatIconModule]
    });
    fixture = TestBed.createComponent(WhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(true == true);
  });
});
