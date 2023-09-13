import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfirmdialogComponent } from './comfirmdialog.component';

describe('ComfirmdialogComponent', () => {
  let component: ComfirmdialogComponent;
  let fixture: ComponentFixture<ComfirmdialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComfirmdialogComponent]
    });
    fixture = TestBed.createComponent(ComfirmdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
