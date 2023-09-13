import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalbodyComponent } from './modalbody.component';

describe('ModalbodyComponent', () => {
  let component: ModalbodyComponent;
  let fixture: ComponentFixture<ModalbodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalbodyComponent]
    });
    fixture = TestBed.createComponent(ModalbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
