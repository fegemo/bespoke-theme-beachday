const bespoke = require('bespoke'),
  beachday = require('../../lib/bespoke-theme-beachday.js'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  scale = require('bespoke-scale'),
  progress = require('bespoke-progress'),
  overview = require('bespoke-simple-overview'),
  search = require('bespoke-search'),
  hash = require('bespoke-hash'),
  state = require('bespoke-state');

bespoke.from('article', [
  beachday({ insertFonts: true }),
  keys(),
  touch(),
  state(),
  scale('transform'),
  progress(),
  hash(),
  overview({ insertStyles: false }),
  bullets('.bullet, .figure-step'),
  search({ insertStyles: false }),
  deck => {
    // as we're using bespoke-scale with 'transform', it creates a
    // .bespoke-parent and wraps everything inside it, including the
    // bespoke-progress bar
    // to prevent it from being scaled up/down, we need to unwrap it
    // var bar = deck.querySelector('bespoke-progress-parent');
    // deck.parent.appendChild(bar);
  },
  deck => {
    // makes the content visible to avoid FoUC
    setTimeout(() => {
      deck.parent.style.visibility = 'visible';
    }, 300)
  }
]);
