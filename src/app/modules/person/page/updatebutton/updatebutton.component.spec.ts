import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebuttonComponent } from './updatebutton.component';

describe('UpdatebuttonComponent', () => {
  let component: UpdatebuttonComponent;
  let fixture: ComponentFixture<UpdatebuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatebuttonComponent]
    });
    fixture = TestBed.createComponent(UpdatebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
