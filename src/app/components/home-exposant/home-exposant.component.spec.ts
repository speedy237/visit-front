import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExposantComponent } from './home-exposant.component';

describe('HomeExposantComponent', () => {
  let component: HomeExposantComponent;
  let fixture: ComponentFixture<HomeExposantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeExposantComponent]
    });
    fixture = TestBed.createComponent(HomeExposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
