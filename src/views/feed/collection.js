//var item = require('./item');
var getType = require('./config');

var collection = Marionette.CollectionView.extend({

  collection: null,

  initialize: function (params) {

    this.collection = params.collection;
  },

  //childView: item,

  render: function() {

    var that = this;

    return q.fcall(function() {

      var promises = [];

      that.collection.forEach(function(model) {

        return q.fcall(function() {
          return getType(model.get('tag'))
        })
        .then(function(type){

          var view = require('./post/'+type);
          view = new view({model: model});
          view.render();
          return promises.push(view.el);
        })
      });

      return promises;
    })
    .all()
    .then(function(el) {

      that.$el.html(el);
      that.trigger('rendered');
      return that;
    });

  },


});

module.exports = collection;
