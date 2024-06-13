import { Given, When, Then } from '@wdio/cucumber-framework';
import { CreateAccountPage } from '../../pageobjects/createAccount.page';
import { CreateAccountTask } from '../tasks/createAccount.task';


const createAccountPage = new CreateAccountPage();
const createAccountTask = new CreateAccountTask();

Given(/^The user enters the Amazon page$/, async () => {
  await createAccountPage.open();
});

When(
  /^The user enters the correct name, email and password from header$/,
  async () => {
    await createAccountTask.clickCreateAccStartHereHeader();
    await browser.pause(6000)
    await createAccountTask.amazonCreateAccount(
      process.env.NAME || '',
      process.env.EMAIL || '',
      process.env.PASSWORD || ''
    );
    await createAccountTask.clickContinueButton();
  }
);

When(/^The user don't enter name, email or password from header$/, async () => {
  await createAccountTask.clickCreateAccStartHereHeader();
  await createAccountTask.amazonCreateAccount(
    'Elenis',
    '',
    'elenitasiempreviva'
  );
  await createAccountTask.clickContinueButton();
});

When(
  /^The user enters the name, existing email and password from header$/,
  async () => {
    await createAccountTask.clickCreateAccStartHereHeader();
    await createAccountTask.amazonCreateAccount(
      'Ele',
      'helloelenacorrea@gmail.com',
      'helloelena1234'
    );
    await createAccountTask.clickContinueButton();
  }
);

Then(/^OTP field is present$/, async () => {
  await expect(createAccountPage.EntOTPInput).toExist();
});

Then(/^The user receives an error message for missing field$/, async () => {
  await expect(createAccountPage.missingFieldError).toExist();
});

Then(/^The user receives an error message for existing email$/, async () => {
  await expect(createAccountPage.existingEmailError).toExist();
});
