module.exports = function(tag) {

  var type;

  switch (tag) {
    case (tag.match(/^(memory)/) || {}).input:
      type = 'memory';
      break;
    case (tag.match(/^(status)/) || {}).input:
      type = 'status';
      break;
    case (tag.match(/^(event)/) || {}).input:
      type = 'event';
      break;
    case (tag.match(/^(group)/) || {}).input:
      type = 'group';
      break;
    case (tag.match(/^(profil)/) || {}).input:
      type = 'picture';
      break;
    case (tag.match(/^(cover)/) || {}).input:
      type = 'picture';
      break;
    case (tag.match(/^(mood)/) || {}).input:
      type = 'mood';
      break;
    default:
      type = 'ignore';
      break;
  }

  return type;
}
