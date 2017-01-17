[![Build Status](https://secure.travis-ci.org/fegemo/bespoke-theme-beachday.png?branch=master)](https://travis-ci.org/fegemo/bespoke-theme-beachday)

# bespoke-theme-beachday

A cheerful theme for [Bespoke.js](http://markdalgleish.com/projects/bespoke.js)
inspired by a Google Presentations theme &mdash; 
[View demo](http://fegemo.github.io/bespoke-theme-beachday)

## Download

Download the [production version][min] or the [development version][max],
or use a [package manager](#package-managers).

[min]: https://raw.github.com/fegemo/bespoke-theme-beachday/master/dist/bespoke-theme-beachday.min.js
[max]: https://raw.github.com/fegemo/bespoke-theme-beachday/master/dist/bespoke-theme-beachday.js

## Usage

This theme is shipped in a [UMD format](https://github.com/umdjs/umd), 
meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  beachday = require('bespoke-theme-beachday');

bespoke.from('#presentation', [
  beachday()
]);
```

When using browser globals:

```js
bespoke.from('#presentation', [
  bespoke.themes.beachday()
]);
```

## Package managers

### npm

```bash
$ npm install bespoke-theme-beachday
```

### Bower

```bash
$ bower install bespoke-theme-beachday
```

## Credits

This theme was built with 
[generator-bespoketheme](https://github.com/markdalgleish/generator-bespoketheme).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
