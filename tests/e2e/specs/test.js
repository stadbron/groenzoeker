// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'startup interface': browser => {
    const app = browser.page.App();
    const toolbarSection = app.section.toolbar;
    const mainMenuSection = app.section.mainMenu;

    app.navigate(process.env.VUE_DEV_SERVER_URL);
    toolbarSection.waitForElementVisible('@title', browser.globals.waitForConditionTimeout);

    app.expect.section('@mainMenu').to.not.be.visible;
    toolbarSection.expect.element('@showMenu').to.be.visible;
    toolbarSection.expect.element('@title').text.to.equal('Groenzoeker');
  },
  'open and close the main menu': browser => {
    const app = browser.page.App();
    const toolbarSection = app.section.toolbar;
    const mainMenuSection = app.section.mainMenu;

    app.navigate(process.env.VUE_DEV_SERVER_URL);
    toolbarSection.waitForElementVisible('@showMenu', browser.globals.waitForConditionTimeout);

    // Show the main menu
    toolbarSection.click('@showMenu', function (result) {
      this.assert.strictEqual(result.status, 0, 'Clicked @showMenu');
    });
    mainMenuSection.waitForElementVisible('@hideMenu', browser.globals.waitForConditionTimeout);
    app.expect.section('@mainMenu').to.be.visible;
    toolbarSection.expect.element('@showMenu').to.not.be.present;
    mainMenuSection.expect.element('@hideMenu').to.be.visible;

    // Hide the main menu
    mainMenuSection.waitForElementVisible('@hideMenu', browser.globals.waitForConditionTimeout);
    mainMenuSection.click('@hideMenu', function (result) {
      this.assert.strictEqual(result.status, 0, 'Clicked @hideMenu');
    });
    toolbarSection.waitForElementVisible('@showMenu', browser.globals.waitForConditionTimeout);
    mainMenuSection.waitForElementNotVisible('@hideMenu', browser.globals.waitForConditionTimeout);
    app.expect.section('@mainMenu').to.not.be.visible;
    toolbarSection.expect.element('@showMenu').to.be.visible;
  },
  'open and close the about dialog window': browser => {
    const app = browser.page.App();
    const toolbarSection = app.section.toolbar;
    const mainMenuSection = app.section.mainMenu;
    const aboutDialogSection = app.section.aboutDialog;

    app.navigate(process.env.VUE_DEV_SERVER_URL);
    toolbarSection.waitForElementVisible('@showMenu', browser.globals.waitForConditionTimeout);

    // Show the main menu
    toolbarSection.click('@showMenu', function (result) {
      this.assert.strictEqual(result.status, 0, 'Clicked @showMenu');
    });

    // Show the "About" dialog window
    mainMenuSection
      .waitForElementVisible('@showAboutDialog', browser.globals.waitForConditionTimeout)
      .expect.element('@showAboutDialog').text.to.equal('Over Groenzoeker');
    mainMenuSection.click('@showAboutDialog', function (result) {
        this.assert.strictEqual(result.status, 0, 'Clicked @showAboutDialog');
    });
    aboutDialogSection.waitForElementVisible('@container', browser.globals.waitForConditionTimeout);
    aboutDialogSection.expect.element('@title').text.to.equal('Over Groenzoeker');
    aboutDialogSection.expect.element('@content').text.to.equal('Groenzoeker is een tool die open data gebruikt om je de fijnste groene plekken van Amsterdam te laten zien');
    aboutDialogSection.expect.element('@closeButton').text.to.equal('SLUITEN');

    // Close the "About" dialog window
    aboutDialogSection.click('@closeButton', function (result) {
      this.assert.strictEqual(result.status, 0, 'Clicked @closeButton');
    });
    aboutDialogSection.expect.element('@container').to.not.be.present;
  },
};
