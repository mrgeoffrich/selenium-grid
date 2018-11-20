var webdriver = require("selenium-webdriver"),
SeleniumServer = require("selenium-webdriver/remote").SeleniumServer;

let driver = new webdriver.Builder()
    .forBrowser('firefox')
    .usingServer('http://localhost:4444/wd/hub')
    .build();

try {
    driver.get('https://www.google.com')
    var element = driver.findElement(webdriver.By.name('q'));
    element.sendKeys('cross browser testing');
    element.submit();
    driver.getTitle().then(function(title) {
        if (title !== ('cross browser testing - Google Search')) {
            throw Error('Unexpected title: ' + title);
        }
    });
}
finally {
    driver.quit();
}