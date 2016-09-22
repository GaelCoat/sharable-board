$.easing.easeOutQuart = function (x, t, b, c, d) {
  return -c * ((t=t/d-1)*t*t*t - 1) + b;
};

$.fn.background = function(pictureUrl, width, callback) {

  var that = this;

  if (!pictureUrl) return this.css('background', 'none');
  if (width) pictureUrl = pictureUrl+'?w='+width;

  var img = new Image();
  img.src = pictureUrl;
  img.onload = function() {

    that.css({
      'background': 'url('+pictureUrl+') center',
      '-moz-background-size': 'cover',
      '-o-background-size': 'cover',
      '-webkit-background-size': 'cover',
      'background-size': 'cover'
    }).addClass('loaded');

    if (callback) callback(img);

  }

  return this;
}

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}
