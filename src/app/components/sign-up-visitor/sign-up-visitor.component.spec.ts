import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpVisitorComponent } from './sign-up-visitor.component';

describe('SignUpVisitorComponent', () => {
  let component: SignUpVisitorComponent;
  let fixture: ComponentFixture<SignUpVisitorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpVisitorComponent]
    });
    fixture = TestBed.createComponent(SignUpVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
