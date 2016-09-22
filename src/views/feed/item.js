var model = require('models/feed');
var getType = require('./config');

var item = Marionette.ItemView.extend({

  className: 'feed',
  template: null,

  render: function() {

    var that = this;

    return q.fcall(function(){

      return getType(that.model.get('tag'))
    })
    .then(function(type) {

      that.template = _.template($('#tpl-feed-'+type).html());

      that.$el.html(that.template({

      }));
      return that;
    });
  }

});

module.exports = item;
