// Generated by CoffeeScript 2.5.1
var _LineAppendor;

module.exports = _LineAppendor = class _LineAppendor {
  constructor(_config) {
    this._config = _config;
    this._lineNo = 0;
  }

  render(inherited, options) {
    this._lineNo++;
    return '<none>' + this._render(inherited, options) + '</none>';
  }

};