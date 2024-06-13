import { browser } from '@wdio/globals';

export default class Page {
  public open() {
    // browser.url(`https://www.amazon.com/`)
    // browser.url('https://www.amazon.com/ref=nav_logo?language=en_US')
    browser.url(
      'https://www.amazon.com'
    );
    browser.maximizeWindow();
  }
}
