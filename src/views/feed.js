var App = window.App;
var getFeeds = require('../libs/premades').getFeeds;
var FeedCollection = require('./feed/collection');
var style = require('!style/useable!css!sass!../sass/feed.scss');
style.use();

module.exports = Marionette.View.extend({

  currentUser: App.getCurrentUser(),
  events: { },

  pagination: 1,
  feedView: null,
  feeds: null,

  initialize: function() {

    var that = this;
    this.feeds = new Backbone.Collection;
    this.feedView = new FeedCollection({
      collection: that.feeds
    });

    this.feedView.on("rendered", this.renderFeeds.bind(this));
  },

  fetch: function() {

    var token = this.currentUser.token;
    var page = this.pagination;

    return getFeeds(token,page);
  },

  renderFeeds: function() {

    this.$el.append(this.feedView.el);
  },

  render: function() {

    var that = this;

    return q.fcall(that.fetch.bind(that))
    .then(function(res) {

      that.feeds.push(res.feeds);
      that.feedView.render();
      that.pagination = res.pagination.currentPage + 1;
      return that;
    })
    .catch(function(err) {

      console.log(err);
    });
  }
});
