// Generated by CoffeeScript 2.5.1
var DefaultBlockAppendor, tools;

tools = require('../../../tools');

module.exports = DefaultBlockAppendor = class DefaultBlockAppendor extends require('./_BlockAppendor') {
  _render(options) {
    return tools.repeatString("\n", this._config.amount);
  }

};