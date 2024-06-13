import { SigninPage } from '../../pageobjects/signin.page';
export class SigninTask extends SigninPage {
  clickSigninHeader() {
    this.signinHeader.click();
  }

  clickSigninFooter() {
    this.signinFooter.click();
  }

  public async amazonSignIn(email: string, password: string) {
    await this.emailInput.setValue(email);
    await this.continueBtn.click();
    await this.passwordInput.setValue(password);
    await this.submitSigninBtn.click();
  }

  scrollToFooter() {
    this.preFooterContainer.scrollIntoView();
  }
}
