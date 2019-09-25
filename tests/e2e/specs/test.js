// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'startup': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.containsText('.md-app .md-app-container .md-toolbar h1', 'Groenzoeker')
      .assert.elementPresent('.md-app .md-content .vl-map')
      .end()
  }
}
