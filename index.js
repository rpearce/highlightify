'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Highlightify = function Highlightify(_ref) {
  var text = _ref.text;
  var filter = _ref.filter;
  var _ref$className = _ref.className;
  var className = _ref$className === undefined ? 'highlightify-is-match' : _ref$className;

  if (!text || !filter) {
    throw 'Highlightify requires `text` and `filter` options';
  }
  return text.replace(RegExp(filter, 'ig'), function (match) {
    return '<span class="' + className + '">' + match + '</span>';
  });
};

exports['default'] = Highlightify;
module.exports = exports['default'];
