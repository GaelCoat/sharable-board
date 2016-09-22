var http = require('http');

module.exports = function(options) {

  var defer = q.defer();

  var conf = {
    hostname: 'dev-api.rementis.com',
    port: 80,
    path: options.path,
    method: options.method,
    headers: {
      'user-agent': 'RMT site',
      'x-access-token': options.token || '',
      'x-universe-token': '56eddce1-9dr5-4d6a-91aa-49663ed28ff1',
    }
  };

  if (options.data) {

    if (typeof options.data === 'object') options.data = JSON.stringify(options.data);
    conf.headers['Content-Type'] = 'application/json';
  }

  var req = http.request(conf, function(res) {

    var body = '';
    var that = this;

    res.setEncoding('utf8');

    res.on('data', function (part) {
      body += part;
    });

    res.on('end', function () {

      try { body = JSON.parse(body); }
      catch(err) {

        console.log(body);
        defer.reject(err);
      }

      if(body.error) defer.reject(body);
      else defer.resolve(body);
    });
  });

  if (options.data) {

    req.write(options.data);
  }

  req.on('error', function(err) {

    console.log('REQ ERROR', err);
    defer.reject(err);
  });

  req.end();

  return defer.promise;
};
