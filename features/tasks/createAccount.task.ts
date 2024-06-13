import { CreateAccountPage } from '../../pageobjects/createAccount.page';
export class CreateAccountTask extends CreateAccountPage {
  public async clickCreateAccountHeader() {
    await this.accountAndList.click();
  }

  public async clickCreateAccStartHereHeader() {
    await this.accountAndList.moveTo();
    await this.startHereAccAndList.click();
  }

  public async amazonCreateAccount(
    name: string,
    email: string,
    password: string
  ) {
    await this.nameInput.setValue(name);
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    await this.PasswordCheckInput.setValue(password);
  }

  public async clickCreateAccountFooter() {
    await this.startHereFooter.click();
  }

  public async clickContinueButton() {
    await this.continueBtn.click();
  }
}
