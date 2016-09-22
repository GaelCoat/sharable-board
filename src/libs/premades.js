var request = require('./request.js');

module.exports = {

  login: function(username, password) {

    var that = this;
    var user = null;

    username = encodeURI(username);
    password = encodeURI(password);

    return q.fcall(function() {

      return request({
        method: 'get',
        path: '/users/auth?username='+username+'&password='+password,
      });
    })
    .then(function(resp) {

      // On simplifie l'objet
      user = resp.user;
      user.token = resp.token;
      user.expires = resp.expires;

      // Si un token de persistence est présent, on le sauvegarde
      if (resp.persist) user.persist = resp.persist;
      return user;
    })
  },

  getFeeds: function(token, page) {

    page = page || 1;

    return request({
      method: 'get',
      path: '/feeds?page='+page,
      token: token
    });
  },

}
