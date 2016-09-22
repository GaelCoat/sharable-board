var tpl = require('../templates/auth.pug');
var style = require('!style/useable!css!sass!../sass/auth.scss');
style.use(); // = style.ref();
var login = require('../libs/premades').login;
var App = window.App;

module.exports = Marionette.View.extend({

  className: 'subview',

  events: {
    'click .connect': 'connect',
  },

  connected: false,

  initialize: function() { },

  //----------------------------------------
  // TODO
  //-----------------------------
  connect: function() {

    if (this.connected) return false;

    var that = this;
    var mail = this.$el.find('#mail').val();
    var password = this.$el.find('#password').val();

    return q.fcall(function() {

      that.$el.find('.e1').addClass('loading');
      return login(mail, password);
    })
    .delay(500)
    .then(function(user){

      App.setCurrentUser(user);
      that.connected = true;
      that.$el.find('.avatar').background(user.imgProfil, 300, that.animation.bind(that));
      that.$el.find('h3').text('Sup '+user.firstname.capitalize()+' ?');
      return that;
    });
  },

  animation: function() {

    var that = this;

    return q.fcall(function() {

      that.$el.attr('class', 'subview check');
      return that;
    })
    .delay(450)
    .then(function(){


      that.$el.find('.e1').hide(0);
      that.$el.find('.e2').css('display', 'inline-block').delay(200).queue(function(next) {
        $(this).addClass('start');
        next();
      });

      return that;
    })
    .delay(1300)
    .then(that.close.bind(that));
  },

  close: function() {

    var that = this;

    return q.fcall(function(){

      that.$el.addClass('closing');
      return that;
    })
    .delay(400)
    .then(function(){

      style.unuse();
      return App.redirect('home');
    });
  },

  render: function() {

    var that = this;

    return q.fcall(function(){

      that.$el.html(tpl);
      return that;
    })
    .delay(200)
    .then(function(){

      that.$el.addClass('initialized');
    })
  }
});
