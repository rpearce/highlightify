# Highlightify
Highlight portions of text given text, a filter and an optional className.

## Installation
```shell
$ npm install highlightify --save
```

## Usage

### Node/Browserify/CommonJS
First, install it via NPM and save it to your project:

```sh
$ npm install highlightify --save
```

Import it where you need it:

```js
import Highlightify from 'highlightify';
```

or if you are using < ES2015,

```js
var Highlightify= require('highlightify');
```

and then call it with `text`, `filter`, and/or a `className` option:

```js
Highlightify({
  text: 'some text to match against', // required
  filter: 'ext', // required
  className: 'is-highlighted' // optional. default: 'highlightify-is-match'
});
// => 'some t<span class="is-highlighted">ext</span> to match against'
```

### Global Variable
Simply include the `dist` script on the page to gain access to it. There are development & production builds in the `dist` folder.

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <script src="path/to/highlightify.js"></script>
  </body>
</html>
```

## Contribute

1. Check out the [issues](https://github.com/rpearce/highlightify/issues)
1. Fork this repository
1. Clone your fork
1. Check out a feature branch (`$ git checkout -b my-feature`)
1. Make your changes and push your branch to your GitHub repo
1. Create a pull request from your branch to this repo's master
1. When all is merged, pull down the upstream changes to your master
