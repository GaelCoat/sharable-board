var tpl = require('../templates/nav.pug');
var style = require('!style/useable!css!sass!../sass/nav.scss');
style.use();
var App = window.App;

module.exports = Marionette.View.extend({

  currentUser: App.getCurrentUser(),
  events: {
    'click ul.navigation li': 'navigation'
  },

  initialize: function() { },

  navigation: function(e) {

    this.$el.find('li.active').removeClass('active');
    this.$el.find(e.currentTarget).addClass('active');
    return this;
  },

  render: function() {

    var that = this;

    this.$el.html(tpl);
    this.$el.find('.avatar').background(this.currentUser.imgProfil, 250);
    return this;
  }

});
