var app = require('./app');
var App = new app();
window.App = App;

App.on('start', function() {
  Backbone.history.start();
});

App.start();

module.exports = App;
