import { TestBed } from '@angular/core/testing';

import { ClientSeviceService } from './client-sevice.service';

describe('ClientSeviceService', () => {
  let service: ClientSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
