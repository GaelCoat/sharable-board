//var style = require('!style/useable!css!sass!../sass/home.scss');
//style.use();

module.exports = Marionette.View.extend({

  className: 'subview',

  events: { },

  initialize: function() {

    console.log('elo ?');

  },

  render: function() {

    var that = this;

    this.$el.html('<h1>board</h1>');
    return this;
  }

});
