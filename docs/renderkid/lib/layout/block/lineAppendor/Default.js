// Generated by CoffeeScript 2.5.1
var DefaultLineAppendor, tools;

tools = require('../../../tools');

module.exports = DefaultLineAppendor = class DefaultLineAppendor extends require('./_LineAppendor') {
  _render(inherited, options) {
    return inherited + tools.repeatString(" ", this._config.amount);
  }

};
