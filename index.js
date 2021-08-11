const AxeBuilder = require('@axe-core/webdriverjs');
const WebDriver = require('selenium-webdriver');

const driver = new WebDriver.Builder().forBrowser('chrome').build();

driver.get('https://610d40294aeefe000830cb76--kind-panini-e02e6e.netlify.app/').then(() => {
  new AxeBuilder(driver).withTags(['wcag2a', 'section508']).analyze((err, results) => {
    if (err) {
      // Handle error somehow
    }
    console.log(results.violations);
    driver.close();
  });
});