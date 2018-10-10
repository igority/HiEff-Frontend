import { TestBed, inject } from '@angular/core/testing';

import { PLCInputsService } from './plcinputs.service';

describe('PLCInputsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PLCInputsService]
    });
  });

  it('should be created', inject([PLCInputsService], (service: PLCInputsService) => {
    expect(service).toBeTruthy();
  }));
});
