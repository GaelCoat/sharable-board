var Polymer = require('./directives/polymer');

module.exports = Marionette.LayoutView.extend({

  el: 'body',

  regions: {
    header: '#header',
    content: '#layout-view'
  },

  events: {
    'click .redirect': 'redirect',
    'mousedown [polymer]': 'polymer'
  },

  polymer: function(e) { return Polymer(e) },

  redirect: function(e) {

    var path = this.$el.find(e.currentTarget).data('view');
    var params = this.$el.find(e.currentTarget).data('params');
    return App.redirect(path, params);
  },

  onBeforeShow: function() {

    this.getRegion('header').show(new HeaderView());
    return this;
  },

  load: function(path, params) {

    var that = this;
    var subview = require(path);
    var view = new subview(params);

    this.getRegion('content').empty();
    this.getRegion('content').show(view);

    return this;
  }
});
