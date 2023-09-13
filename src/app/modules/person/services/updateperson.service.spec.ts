import { TestBed } from '@angular/core/testing';

import { UpdatepersonService } from './updateperson.service';

describe('UpdatepersonService', () => {
  let service: UpdatepersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatepersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
