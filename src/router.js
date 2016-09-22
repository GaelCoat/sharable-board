var Router = Marionette.Object.extend({

  routes: {
    'auth':'auth',
    'home':'home',
  },

  redirect: function(path, params){

    var fn = this.routes[path];
    this[fn](params);
  },

  home: function() { return this.loadView('./views/home'); },
  auth: function() { return this.loadView('./views/auth'); },

  loadView: function(path, params) {

    this.triggerMethod('view:load', path, params);
    return this;
  }
});

module.exports = Router;
