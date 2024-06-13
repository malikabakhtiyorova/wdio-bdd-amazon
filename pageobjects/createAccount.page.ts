import { $ } from '@wdio/globals';
import Page from './page';

export class CreateAccountPage extends Page {
  LOCATOR = (fileName: string) => `//)[${fileName}]`;
  public get input() {
    return $('');
  }

  public get nameInput() {
    return $('#ap_customer_name');
  }

  public get emailInput() {
    return $('#ap_email');
  }

  public get passwordInput() {
    return $('#ap_password');
  }

  public get PasswordCheckInput() {
    return $('#ap_password_check');
  }

  public get accountAndList() {
    return $('#nav-link-accountList');
  }

  public get startHereAccAndList() {
    return $('#nav-flyout-ya-newCust a');
  }

  public get startHereFooter() {
    return $('a.sign-in-tooltip-link');
  }

  public get createAccountBtn() {
    return $('#createAccountSubmit');
  }

  public get continueBtn() {
    return $('#continue');
  }

  public get EntOTPInput() {
    return $('input#cvf-input-code');
  }

  public get verifyOTPBtn() {
    return $('span[id="cvf-submit-otp-button"] input');
  }

  public get missingFieldError() {
    return $('#auth-email-missing-alert .a-alert-content');
  }

  public get existingEmailError() {
    return $('#register-mase-inlineerror .a-alert-content');
  }

  public open() {
    return super.open();
  }
}

export default new CreateAccountPage();
