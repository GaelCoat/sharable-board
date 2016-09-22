var tpl = require('../templates/home.pug');
var style = require('!style/useable!css!sass!../sass/home.scss');
style.use();
var Nav = require('./nav');
var Feed = require('./feed');
var App = window.App;

module.exports = Marionette.View.extend({

  className: 'subview',

  events: { },

  nav: null,
  feed: null,

  initialize: function() {

  },

  render: function() {

    var that = this;

    return q.fcall(function(){

      that.$el.html(tpl);
      that.nav = new Nav({
        el: that.$el.find('#nav')
      });

      return that.nav.render();
    })
    .then(function() {

      that.feed = new Feed({
        el: that.$el.find('#feed')
      });

      that.$el.addClass('initialized');
      return that.feed.render();
    })
    .then(function() {

      that.$el.addClass('initialized');
      return that;
    });

  }
});
