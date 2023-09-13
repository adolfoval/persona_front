import { TestBed } from '@angular/core/testing';

import { TablepersonService } from './tableperson.service';

describe('TablepersonService', () => {
  let service: TablepersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablepersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
