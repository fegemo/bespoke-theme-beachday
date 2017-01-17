var fs = require('fs');
var classes = require('bespoke-classes');
var insertCss = require('insert-css');

module.exports = function(options) {
  options = options || { insertFonts: true };
  var theme = fs.readFileSync(__dirname + '/tmp/theme.css', 'utf8'),
    fonts;
  if (!!options.insertFonts) {
    fonts = fs.readFileSync(__dirname + '/tmp/fonts.css', 'utf8');
    insertCss(fonts, { prepend: true });
  }
  insertCss(theme, { prepend: true });

  return function(deck) {
    classes()(deck);
  };
};
