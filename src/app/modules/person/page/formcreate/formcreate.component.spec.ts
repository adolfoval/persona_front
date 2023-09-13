import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcreateComponent } from './formcreate.component';

describe('FormcreateComponent', () => {
  let component: FormcreateComponent;
  let fixture: ComponentFixture<FormcreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormcreateComponent]
    });
    fixture = TestBed.createComponent(FormcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
