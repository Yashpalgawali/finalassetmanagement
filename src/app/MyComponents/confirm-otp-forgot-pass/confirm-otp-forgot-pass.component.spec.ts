import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmOtpForgotPassComponent } from './confirm-otp-forgot-pass.component';

describe('ConfirmOtpForgotPassComponent', () => {
  let component: ConfirmOtpForgotPassComponent;
  let fixture: ComponentFixture<ConfirmOtpForgotPassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmOtpForgotPassComponent]
    });
    fixture = TestBed.createComponent(ConfirmOtpForgotPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
