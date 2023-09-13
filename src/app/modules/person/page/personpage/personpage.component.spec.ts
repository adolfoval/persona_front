import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonpageComponent } from './personpage.component';

describe('PersonpageComponent', () => {
  let component: PersonpageComponent;
  let fixture: ComponentFixture<PersonpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonpageComponent]
    });
    fixture = TestBed.createComponent(PersonpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
