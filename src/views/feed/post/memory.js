
var item = Marionette.ItemView.extend({

  className: 'feed',
  template: '#tpl-feed-memory',

  render: function() {

    var that = this;

    var template = _.template($(this.template).html());

    that.$el.html(template());

    return that;
  }

});

module.exports = item;
