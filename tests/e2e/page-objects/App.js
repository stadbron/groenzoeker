module.exports = {
  sections: {
    toolbar: {
      selector: '.md-app-toolbar',
      elements: {
        title: 'h1',
        showMenu: '.show-menu',
      },
    },
    mainMenu: {
      selector: '.main-menu',
      elements: {
        hideMenu: '.hide-menu',
        showAboutDialog: '.show-about-dialog'
      },
    },
    aboutDialog: {
      selector: '.about-dialog',
      elements: {
        container: '.md-dialog-container',
        title: '.md-dialog-title',
        content: '.md-dialog-content',
        closeButton: '.md-dialog-actions .md-button',
      },
    },
  },
};
