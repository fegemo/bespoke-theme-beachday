const classes = require('bespoke-classes');

module.exports = function({ insertFonts = true }) {
  if (insertFonts) {
    require("../dist/theme/fonts.css");
  }
  require("../dist/theme/theme.css");

  return function(deck) {
    classes()(deck);
  };
};
