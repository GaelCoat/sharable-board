var utils = require('./libs/utility');
var Router = require('./router');
var Layout = require('./layout');

// Main.css
require('!style!css!sass!./sass/main.scss');

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

var app = Marionette.Application.extend({

  router: null,
  layout: null,

  initialize: function() {

    var that = this;

    this.layout = new Layout();
    this.router = new Router(this.layout);

  },

});

module.exports = app;
