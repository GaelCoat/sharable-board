
var item = Marionette.ItemView.extend({

  className: 'feed',
  template: '#tpl-feed-mood',

  render: function() {

    var that = this;

    var mood = this.model.get('data').mood;



    var template = _.template($(this.template).html());

    that.$el.html(template({
      title: mood.title
    }));

    that.$el.background(mood.picture.url, 400);
    that.$el.find('.avatar').background(mood.user.imgProfil, 100);

    return that;
  }

});

module.exports = item;
