(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _highlightify = require('./highlightify');

var _highlightify2 = _interopRequireDefault(_highlightify);

global.Highlightify = _highlightify2['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./highlightify":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
