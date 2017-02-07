/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DigitransitService } from './digitransit.service';

describe('DigitransitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DigitransitService]
    });
  });

  it('should ...', inject([DigitransitService], (service: DigitransitService) => {
    expect(service).toBeTruthy();
  }));
});
