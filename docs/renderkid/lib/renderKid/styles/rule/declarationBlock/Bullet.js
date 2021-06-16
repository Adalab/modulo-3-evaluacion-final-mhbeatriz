// Generated by CoffeeScript 2.5.1
var Bullet, _Declaration;

_Declaration = require('./_Declaration');

module.exports = Bullet = (function() {
  var self;

  class Bullet extends _Declaration {
    _set(val) {
      var alignment, bg, char, color, enabled, m, original;
      val = String(val);
      original = val;
      char = null;
      enabled = false;
      color = 'none';
      bg = 'none';
      if (m = val.match(/\"([^"]+)\"/) || (m = val.match(/\'([^']+)\'/))) {
        char = m[1];
        val = val.replace(m[0], '');
        enabled = true;
      }
      if (m = val.match(/(none|left|right|center)/)) {
        alignment = m[1];
        val = val.replace(m[0], '');
      } else {
        alignment = 'left';
      }
      if (alignment === 'none') {
        enabled = false;
      }
      if (m = val.match(/color\:([\w\-]+)/)) {
        color = m[1];
        val = val.replace(m[0], '');
      }
      if (m = val.match(/bg\:([\w\-]+)/)) {
        bg = m[1];
        val = val.replace(m[0], '');
      }
      if (val.trim() !== '') {
        throw Error(`Unrecognizable value \`${original}\` for \`${this.prop}\``);
      }
      return this.val = {
        enabled: enabled,
        char: char,
        alignment: alignment,
        background: bg,
        color: color
      };
    }

  };

  self = Bullet;

  return Bullet;

}).call(this);
