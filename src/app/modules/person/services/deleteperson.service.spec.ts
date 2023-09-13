import { TestBed } from '@angular/core/testing';

import { DeletepersonService } from './deleteperson.service';

describe('DeletepersonService', () => {
  let service: DeletepersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletepersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
