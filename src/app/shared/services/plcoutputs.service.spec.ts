import { TestBed, inject } from '@angular/core/testing';

import { PLCOutputsService } from './plcoutputs.service';

describe('PLCOutputsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PLCOutputsService]
    });
  });

  it('should be created', inject([PLCOutputsService], (service: PLCOutputsService) => {
    expect(service).toBeTruthy();
  }));
});
