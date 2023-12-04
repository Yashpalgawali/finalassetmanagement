import { TestBed } from '@angular/core/testing';

import { ConfirmOtpService } from './confirm-otp.service';

describe('ConfirmOtpService', () => {
  let service: ConfirmOtpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmOtpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
