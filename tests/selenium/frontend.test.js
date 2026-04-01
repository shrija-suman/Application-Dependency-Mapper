// Selenium test for frontend
const { Builder, By, until } = require('selenium-webdriver');

describe('Frontend Tests', function() {
    let driver;

    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    afterEach(async function() {
        await driver.quit();
    });

    it('should load the page', async function() {
        await driver.get('file://' + __dirname + '/../../src/main/frontend/index.html');
        const title = await driver.getTitle();
        assert.equal(title, 'Dependency Mapper');
    });
});