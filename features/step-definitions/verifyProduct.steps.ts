import { Given, When, Then } from '@wdio/cucumber-framework';
import { VerifyProductPage } from '../../pageobjects/verifyProduct.page';
import { VerifyProductTask } from '../tasks/verifyProducts.task';

const verifyProductPage = new VerifyProductPage();
const verifyProductTask = new VerifyProductTask();

Given(/^The user enters Product page$/, async () => {
  await verifyProductPage.open();
});

When(/^The user looks for "About this item" section$/, async () => {
  await expect(verifyProductPage.aboutThisProduct).toExist();
});

Then(/^5 bullets are present for product description$/, async () => {
  const liElements = await verifyProductTask.getDescBullets();

  await expect(liElements).toHaveLength(5);
});

When(/^The user looks for product specs$/, async () => {
  await expect(verifyProductPage.productSpecs).toExist();
});

Then(/^graphic ram size is 12 GB$/, async () => {
  const ramSizeText = await verifyProductTask.getRamSizeText();
  await expect(ramSizeText).toEqual('12.00');
});

When(/^The user looks for Amazon's choice section$/, async () => {
  await expect(verifyProductPage.amazonBadgeSection).toExist();
});

Then(/^"Amazon's Choice" icon is present$/, async () => {
  await expect(verifyProductPage.amazonsChoice).toExist();
});

Then(/^brand name is "Samsung"$/, async () => {
  const brandNameText = await verifyProductTask.getbrandNameText();
  await expect(brandNameText).not.toEqual('Samsung');
});

When(/^The user looks for right column$/, async () => {
  await expect(verifyProductPage.rightColumn).toExist();
});

Then(/^sum of price and import fees is equals to total price$/, async () => {
  // Price
  const numFullPrice = await verifyProductTask.getFullPrice();

  console.log('Float Full Price', numFullPrice);

  // Import Fees
  const numImportFees = await verifyProductTask.getImportFees();
  const totalPrice = numFullPrice + numImportFees;

  console.log('Total Price:', totalPrice);

  // Full price to float

  const finalPrice = await verifyProductTask.getDetailsFinalPrice();

  await expect(totalPrice).toEqual(finalPrice);
});
