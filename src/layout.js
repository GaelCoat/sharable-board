var Polymer = require('./directives/polymer');

module.exports = Marionette.View.extend({

  el: 'body',

  regions: {
    //header: '#header',
    content: '#layout'
  },

  events: {
    'click .redirect': 'redirect',
    'mousedown [polymer]': 'polymer'
  },

  polymer: function(e) { return Polymer(e) },
  home: function() { return this.loadView('./views/home'); },
  board: function() { return this.loadView('./views/board'); },

  loadView: function(path, params) {

    var subview = require(path);
    var view = new subview(params);
    this.showChildView('content', view);

    return this;
  }
});
