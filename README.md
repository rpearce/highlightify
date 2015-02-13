# Highlightify
Highlight portions of text given text, a filter and an optional className.

## Installation
```shell
$ npm install highlightify --save
```

## Usage

```js
var Highlightify = require('highlightify');
Highlightify.highlightMatches({
  text: 'some text to match against',
  filter: 'ext',
  className: 'is-highlighted' // optional. default: 'is-match'
});
// => 'some t<span class="is-highlighted">ext</span> to match against'
```
