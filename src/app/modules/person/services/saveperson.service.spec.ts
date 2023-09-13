import { TestBed } from '@angular/core/testing';

import { SavepersonService } from './saveperson.service';

describe('SavepersonService', () => {
  let service: SavepersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavepersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
