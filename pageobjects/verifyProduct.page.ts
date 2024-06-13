import { $, browser } from '@wdio/globals';

export class VerifyProductPage {
  LOCATOR = (fileName: string) => `//)[${fileName}]`;
  public get input() {
    return $('');
  }

  public get aboutThisProduct() {
    return $('#feature-bullets');
  }

  public get descriptionBullets() {
    return $('#feature-bullets > ul');
  }

  public get productSpecs() {
    return $('#productOverview_feature_div');
  }

  public get ramSize() {
    return $(
      '#productOverview_feature_div tr.a-spacing-small.po-graphics_ram\\.size > td:nth-child(2) span'
    );
  }

  public get amazonBadgeSection() {
    return $('#ac-badge-wrapper');
  }

  public get amazonsChoice() {
    return $('#acBadge_feature_div');
  }

  public get brand() {
    return $(
      '#productOverview_feature_div tr.a-spacing-small.po-brand > td:nth-child(2) span'
    );
  }

  public get rightColumn() {
    return $('#rightCol');
  }

  public get priceWhole() {
    return $('#corePrice_feature_div span.a-price-whole');
  }

  public get priceDecimal() {
    return $('#corePrice_feature_div span.a-price-fraction');
  }

  public get importFees() {
    return $(
      '#apex_offerDisplay_single_desktop #amazonGlobal_feature_div > span.a-color-secondary'
    );
  }

  public get detailsButton() {
    return $('#rightCol #amazonGlobal_feature_div a span.a-size-base');
  }

  public get detailsPop() {
    return $('#a-popover-3');
  }

  public get finalPrice() {
    return $(
      '#a-popover-content-2  tr:nth-child(5) > td.a-span2.a-text-right > span'
    );
  }

  public open() {
    browser.url(
      'https://www.amazon.com/GeForce-Control-192-bit-Tarjeta-gr%C3%A1fica/dp/B0CB35FVSS/ref=sr_1_1_sspa?crid=2KDLVCPE8AJAX&keywords=gtx4090ti&qid=1695861567&sprefix=gtx4090%2Caps%2C183&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1'
    );
    browser.maximizeWindow();
  }
}

export default new VerifyProductPage();
