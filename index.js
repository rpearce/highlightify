'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Highlightify;
var error = 'Highlightify requires `text` and `filter` arguments';

function Highlightify(_ref) {
  var text = _ref.text;
  var filter = _ref.filter;
  var _ref$className = _ref.className;
  var className = _ref$className === undefined ? 'highlightify-is-match' : _ref$className;
  var _ref$tagName = _ref.tagName;
  var tagName = _ref$tagName === undefined ? 'mark' : _ref$tagName;

  if (!text || !filter) throw new Error(error);

  return text.replace(RegExp(filter, 'ig'), function (match) {
    return '<' + tagName + ' class="' + className + '">' + match + '</' + tagName + '>';
  });
}

module.exports = exports['default'];
