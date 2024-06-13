import { $ } from '@wdio/globals';
import Page from './page';

export class SigninPage extends Page {
  public get signinHeader() {
    return $('#nav-link-accountList');
  }

  public get signinFooter() {
    return $('[class="rhf-sign-in-button"] a[class="action-button"]');
  }

  public get emailInput() {
    return $('#ap_email_login');
  }

  public get continueBtn() {
    return $('input#continue');
  }

  public get passwordInput() {
    return $('#ap_password');
  }

  public get submitSigninBtn() {
    return $('#signInSubmit');
  }

  public get signoutLink() {
    return $('#nav-item-signout');
  }

  public get errorMsgContainer() {
    return $('#auth-error-message-box');
  }

  public get captchaSection() {
    return $('#image-captcha-section');
  }

  public get preFooterContainer() {
    return $('#rhf');
  }

  public get deliverToTitle() {
    return $('#glow-ingress-line1');
  }

  public get helloUserTitle() {
    return $('#nav-link-accountList-nav-line-1');
  }

  public open() {
    return super.open();
  }
}

export default new SigninPage();
