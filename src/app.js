var utils = require('./libs/utility');
var Router = require('./router');
var Layout = require('./layout');
var Dexie = require('dexie');

// Main.css
require('!style!css!sass!./sass/main.scss');

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

var app = Marionette.Application.extend({

  currentUser: null,

  router: null,
  layout: null,
  db: null,

  initialize: function() {

    var that = this;

    this.router = new Router();
    this.layout = new Layout();

    this.router.on('view:load', this.layout.load.bind(this.layout))
    this.setBackground('./img/background.jpg');

    this.db = new Dexie("Fluze");
    this.db.version(1).stores({
      user: "++id, id, firstname, lastname, imgCover, imgProfil, mail, token",
    });

    this.db.open();
  },

  onStart: function() {

    var that = this;

    this.db.user.toArray()
    .then(function(res) {

      if (!res[0]) return that.redirect('auth');

      that.currentUser = res[0];
      return that.redirect('home');
    });
    return this;
  },

  setCurrentUser: function(user) {

    this.db.user.clear();
    this.db.user.put({
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      imgCover: user.imgCover,
      imgProfil: user.imgProfil,
      mail: user.mail,
      token: user.token,
    });

    this.currentUser = user;

    return this;
  },

  getCurrentUser: function() {

    return this.currentUser;
  },

  setBackground: function(url) {

    $('#background').background(url);
    return this;
  },

  redirect: function(path, params) {

    return this.router.redirect(path, params);
  },

  logout: function() {

    this.db.user.clear();
    this.currentUser = null;
    location.reload();
  },

  include: function(view) {

    $('#dynamic-content').empty();
    var module = require('./views/'+view);
    module.initialize();
  },

});

module.exports = app;
