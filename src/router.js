
var Router = Marionette.AppRouter.extend({

  initialize: function(Controller) {

    this.controller = Controller
  },

  appRoutes: {
    '':'home',
    'board':'board',
  },

});


module.exports = Router;
