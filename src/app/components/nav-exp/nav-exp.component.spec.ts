import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavExpComponent } from './nav-exp.component';

describe('NavExpComponent', () => {
  let component: NavExpComponent;
  let fixture: ComponentFixture<NavExpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavExpComponent]
    });
    fixture = TestBed.createComponent(NavExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
