(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var bespoke = require('bespoke'),
  beachday = require('../../../lib/bespoke-theme-beachday.js'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  scale = require('bespoke-scale'),
  progress = require('bespoke-progress'),
  overview = require('bespoke-simple-overview'),
  // search = require('bespoke-search'),
  hash = require('bespoke-hash'),
  state = require('bespoke-state');

bespoke.from('article', [
  beachday({ insertFonts: false }),
  keys(),
  touch(),
  state(),
  // scale('transform'),
  progress(),
  hash(),
  overview({ insertStyles: false }),
  bullets('.bullet'),
  // search(),
  function(deck) {
    // as we're using bespoke-scale with 'transform', it creates a
    // .bespoke-parent and wraps everything inside it, including the
    // bespoke-progress bar
    // to prevent it from being scaled up/down, we need to unwrap it
    // var bar = deck.querySelector('bespoke-progress-parent');
    // deck.parent.appendChild(bar);
  },
  function(deck) {
    // makes the content visible to avoid FoUC
    deck.parent.style.visibility = 'visible';
  }
]);

},{"../../../lib/bespoke-theme-beachday.js":2,"bespoke":12,"bespoke-bullets":3,"bespoke-hash":5,"bespoke-keys":6,"bespoke-progress":7,"bespoke-scale":8,"bespoke-simple-overview":9,"bespoke-state":10,"bespoke-touch":11}],2:[function(require,module,exports){

var classes = require('bespoke-classes');
var insertCss = require('insert-css');

module.exports = function(options) {
  options = options || { insertFonts: true };
  var theme = "/*! normalize.css v3.0.0 | MIT License | git.io/normalize */\nhtml{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0;color:#db4437;text-decoration:none}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b{font-weight:700}dfn{font-style:italic}h1,mark{color:#000}h1{font-family:'Amatica SC',cursive;font-size:3.5em}mark{background:#ff0}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,pre,samp{font-family:monospace,monospace}pre,samp{font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup,strong{font-weight:700}table{border-collapse:collapse;border-spacing:0;border:2px solid gray}td,th{padding:.3em .5em;border:1px solid gray}*{box-sizing:border-box}@media screen{.bespoke-parent{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;background-color:#fff;color:#252525;font-size:24px}.bespoke-slide{position:absolute;width:1066.6666666666665px;height:600px;top:50%;left:50%;margin-left:-533.3333333333333px;margin-top:-300px;overflow:hidden;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.bespoke-inactive{opacity:0;pointer-events:none}.bespoke-inactive .bespoke-bullet-inactive{transition:opacity .4s ease}.bespoke-inactive:not(.bespoke-after-1):not(.bespoke-before-1):not(.bespoke-after-2):not(.bespoke-before-2){display:none}.emphatic{background-color:#7c7ce0}.emphatic,.emphatic h1,.emphatic h2,.emphatic h3,.emphatic h4,.emphatic h5,.emphatic h6{color:#fff}}h2,h3,h4,h5,h6{font-size:1.5em;font-family:'Source Code Pro',monospace;color:#000}h3,h4,h5,h6{font-size:1.25em}h4,h5,h6{font-size:1em}h1,h2,h3,h4,h5,h6{font-weight:400;margin:0 0 .25em}li,p{font-size:24px;line-height:1.5em}strong{color:#00b18c}article{font-family:'Source Code Pro',monospace}a:hover{text-decoration:underline}code{font-size:.75em;background-color:#ddd;border-radius:3px}pre>code{font-size:.83333em}pre{max-width:1026.6666666666665px}pre code span{word-wrap:break-word;word-break:break-all}h1>code,h2>code,h3>code,h4>code,h5>code,h6>code,pre>code{background-color:inherit;border-radius:inherit}dd,dt{margin-bottom:.5em}dt{float:left;clear:left;width:10em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:right;font-weight:700;padding-right:1em;position:relative}dd{margin-left:10.5em}del{color:gray}tr{background-color:rgba(255,255,255,.7)}tr:nth-of-type(even){background-color:rgba(191,213,200,.7)}th{color:#fff;background-color:#333}blockquote,kbd{position:relative}blockquote{background:#f5f5f5;box-shadow:4px 4px 4px silver;font-style:italic;margin:.25em 0;padding:.25em 40px;line-height:1.45;font-size:18px;font-family:Georgia,serif;color:#383838}blockquote::before{content:\"\\201C\";display:block;position:absolute;left:-.25em;top:-.25em;font-size:80px;color:#7a7a7a}blockquote cite{display:block;margin-top:5px;font-size:75%;color:#999}blockquote cite::before{content:\"\\2014 \\2009\"}kbd{padding:.1em .6em;font-size:.8em;border:1px solid #ccc;font-family:Consolas,Menlo,Monaco,monospace;background-color:#f7f7f7;color:#333;box-shadow:0 4px 0 rgba(0,0,0,.2),0 0 0 2px #fff inset;border-radius:3px;display:inline-block;margin:0 .1em;text-shadow:0 1px 0 #fff;line-height:1.3;white-space:nowrap;top:0;transition:top 40ms ease-out,box-shadow 40ms ease-out}kbd:hover{top:4px;box-shadow:0 0 0 rgba(0,0,0,.2),0 0 0 2px #fff inset}figcaption{background-color:#f5f5f5;padding:5px;margin-bottom:3px}img[alt$=right]{float:right}img[alt$=left]{float:left}.push-right{float:right;margin-left:20px}.push-left{float:left;margin-right:20px}.figure-slides{position:relative;width:100%;height:500px}.figure-step{position:absolute;top:0;left:0}a.bookmarklet{border-radius:5px;border:2px solid silver;padding:4px 7px;background-color:rgba(255,255,255,.1);transition:all 200ms ease-out}a.bookmarklet:hover{text-decoration:none;background-color:#b66c7e;color:#ddd;border-color:#333;cursor:move}input.switch:empty{display:block;margin-left:-999px}input.switch:empty~label{position:relative;float:left;line-height:1.6em;text-indent:4em;margin:.2em 0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}input.switch:empty~label:after,input.switch:empty~label:before{position:absolute;display:block;top:0;bottom:0;left:0;content:' ';width:3.6em;background-color:#c33;border-radius:.3em;box-shadow:inset 0 .2em 0 rgba(0,0,0,.3);transition:all 100ms ease-in}input.switch:empty~label:after{width:1.4em;top:.1em;bottom:.1em;margin-left:.1em;background-color:#fff;border-radius:.15em;box-shadow:inset 0 -.2em 0 rgba(0,0,0,.2)}input.switch:checked~label:before{background-color:#393}input.switch:checked~label:after{margin-left:2.1em}img.full-width{width:100%}img.large-width{width:80%}img.medium-width{width:60%}img.small-width{width:40%}img.full-height{height:100%}img.huge-height{height:80%}img.large-height{height:60%}img.medium-height{height:40%}img.small-height{height:20%}img.block{display:block}.floating-portrait-container *,.portrait,.portrait img{display:inline-block;width:150px;height:150px;border-radius:50%}.floating-portrait-container * figcaption,.portrait figcaption,.portrait img figcaption{background-color:transparent}.floating-portrait-container{position:relative}.floating-portrait-container *{margin:0;animation:floating 2s ease-in-out 0s infinite alternate}.floating-portrait-container::after{content:\" \";position:absolute;width:100%;height:20%;left:0;right:0;bottom:-20%;background:radial-gradient(ellipse closest-side,rgba(21,21,21,.25) 0%,rgba(255,255,255,0) 100%);z-index:-1;animation:floated-element-shadow 2s ease-in-out 0s infinite alternate}.flips{transition:transform 600ms ease-out}.flips *{margin:0}.flips:hover{transform:rotateY(720deg)}.center-aligned{text-align:center}.bullet-old{color:gray}.horizontal-list{list-style:none}.horizontal-list>li{display:inline-block;width:25%;margin:0 4.5% 0 0;vertical-align:middle}.horizontal-list>li:last-of-type{margin:0}.multi-column-list-2,.multi-column-list-3{padding-left:0;-moz-column-count:2;column-count:2;list-style-position:inside}.multi-column-list-3{-moz-column-count:3;column-count:3}.multi-column-list-4,.multi-column-list-5{padding-left:0;-moz-column-count:4;column-count:4;list-style-position:inside}.multi-column-list-5{-moz-column-count:5;column-count:5}.layout-split-2,.layout-split-3,.layout-split-4,.layout-split-5{-ms-flex-direction:row;flex-direction:row;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:stretch;align-items:stretch;height:100%;width:100%}.layout-split-2>section{width:50%;-ms-flex-positive:1;flex-grow:1;text-align:center}.layout-split-3>section,.layout-split-4>section,.layout-split-5>section{width:33.33333333333333%;-ms-flex-positive:1;flex-grow:1;text-align:center}.layout-split-4>section,.layout-split-5>section{width:25%}.layout-split-5>section{width:20%}@keyframes floating{0%{transform:translateY(0)}to{transform:translateY(-25%)}}@keyframes floated-element-shadow{0%{transform:scaleX(1)}to{transform:scaleX(.5)}}@media screen{.transition-sliding,.transition-subtle{overflow:hidden}.bespoke-slide,.transition-sliding .bespoke-slide{transform:translate3d(0,0,0);transition:transform .4s ease,opacity .4s ease}.transition-sliding .bespoke-before{transform:translate3d(-101%,0,0)}.transition-sliding .bespoke-after{transform:translate3d(101%,0,0)}.bespoke-before{transform:translate3d(-10%,0,0)}.bespoke-after{transform:translate3d(10%,0,0)}.transition-giant-wheel{overflow:hidden}.transition-giant-wheel .bespoke-slide{transform:translate3d(0,0,0);transition:transform .4s ease;transform-origin:50% -250%}.transition-giant-wheel .bespoke-before{transform:rotateZ(90deg)}.transition-giant-wheel .bespoke-after{transform:rotateZ(-90deg)}}.layout-title.bespoke-slide{text-align:center;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around}.layout-title.bespoke-slide h1{color:#6e8ae4}.layout-title.bespoke-slide h2{background-color:#00fdc8;display:block;width:100%;padding:2em 0;margin:1em 0 0}.layout-title.bespoke-slide h2 strong{color:#007f64}.layout-section-header.bespoke-slide{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap}.layout-section-header.bespoke-slide::after,.layout-section-header.bespoke-slide::before{content:\" \";position:absolute;top:0;display:block;width:50%;height:100%;z-index:-1}.layout-section-header.bespoke-slide::before{left:0;background-color:#fff}.layout-section-header.bespoke-slide::after{right:0;background-color:#00fdc8}.layout-section-header.bespoke-slide .content{display:block;box-sizing:border-box}.layout-section-header.bespoke-slide .content dd,.layout-section-header.bespoke-slide .content dt,.layout-section-header.bespoke-slide .content li,.layout-section-header.bespoke-slide .content p{background-color:#fff}.layout-section-header.bespoke-slide .content li,.layout-section-header.bespoke-slide .content p{display:inline}.layout-section-header.bespoke-slide .content p::after{content:\" \";display:block;margin-bottom:.5em}.layout-section-header.bespoke-slide .content::after{content:\" \";display:block;width:3em;height:1px;border-bottom:3px solid #fff}.layout-section-header.bespoke-slide .content li::before{content:\" \";display:list-item;float:left}.layout-section-header.bespoke-slide .content li::after{content:\" \";display:block}.layout-section-header.bespoke-slide>*{width:50%;padding:0 1em}.layout-section-header.bespoke-slide>ol,.layout-section-header.bespoke-slide>ul{padding-left:2em}.layout-section-header.bespoke-slide h1,.layout-section-header.bespoke-slide h2{margin:0;padding:0;text-align:center}.layout-section-header.bespoke-slide h1{height:70%;box-sizing:border-box;padding-top:2em}.layout-section-header.bespoke-slide h2{height:30%}.layout-2-column-content.bespoke-slide,.layout-regular.bespoke-slide{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:start;align-items:flex-start;padding:2em}.layout-regular.bespoke-slide h1,.layout-regular.bespoke-slide h2,.layout-regular.bespoke-slide h3,.layout-regular.bespoke-slide h4,.layout-regular.bespoke-slide h5,.layout-regular.bespoke-slide h6{margin:0;padding:0 0 .5em}.layout-2-column-content.bespoke-slide{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-direction:row;flex-direction:row}.layout-2-column-content.bespoke-slide h1,.layout-2-column-content.bespoke-slide h2,.layout-2-column-content.bespoke-slide h3,.layout-2-column-content.bespoke-slide h4,.layout-2-column-content.bespoke-slide h5,.layout-2-column-content.bespoke-slide h6{-ms-flex-preferred-size:100%;flex-basis:100%}.layout-2-column-content.bespoke-slide>*+*{width:49%;margin-left:1%;margin-right:0}.layout-2-column-content.bespoke-slide>*+::last-child{margin-left:0}.layout-centered.bespoke-slide{display:-ms-flexbox;display:flex}.layout-main-point.bespoke-parent,.layout-main-point.bespoke-slide{background-color:#7c7ce0}.layout-main-point.bespoke-slide h1,.layout-main-point.bespoke-slide h2,.layout-main-point.bespoke-slide h3,.layout-main-point.bespoke-slide h4,.layout-main-point.bespoke-slide h5,.layout-main-point.bespoke-slide h6{color:#fff}@media screen{.bespoke-scale-parent{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}.bespoke-bullet{opacity:1;transform:translate3d(0,0,0);transition:all .4s ease}.bespoke-bullet-inactive{opacity:0;pointer-events:none;transform:translate3d(40px,0,0);transition:all .2s ease}.bespoke-bullet-off .bespoke-bullet-inactive{display:list-item;opacity:initial;transform:initial}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:3px;z-index:2}.bespoke-progress-bar{position:absolute;height:100%;transition:width .3s ease}.bespoke-progress-bar:before{content:\" \";position:absolute;display:block;width:100%;height:100%;background:#a6a6a6}.bespoke-parent,.bespoke-scale-parent{perspective:900px}.bespoke-simple-overview .bespoke-slide{position:absolute;opacity:1;outline:4px solid silver}.bespoke-simple-overview .bespoke-slide:hover{outline-color:#4682b4}.bespoke-simple-overview .bespoke-slide.bespoke-active{transform:translate3d(0,0,-2000px);outline-color:#4682b4;z-index:100}.bespoke-simple-overview .bespoke-slide.bespoke-after:not(.bespoke-after-1):not(.bespoke-after-2):not(.bespoke-after-3):not(.bespoke-after-4):not(.bespoke-after-5):not(.bespoke-after-6){transform:translate3d(7634.667338669354px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before:not(.bespoke-before-1):not(.bespoke-before-2):not(.bespoke-before-3):not(.bespoke-before-4):not(.bespoke-before-5):not(.bespoke-before-6){transform:translate3d(-7634.667338669354px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-1{display:-ms-flexbox;display:flex;will-change:transform;transform:translate3d(1090.6667626670505px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-1{display:-ms-flexbox;display:flex;will-change:transform;transform:translate3d(-1090.6667626670505px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-2{display:-ms-flexbox;display:flex;will-change:transform;transform:translate3d(2181.333525334101px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-2{display:-ms-flexbox;display:flex;will-change:transform;transform:translate3d(-2181.333525334101px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-3{display:-ms-flexbox;display:flex;will-change:transform;transform:translate3d(3272.0002880011516px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-3{display:-ms-flexbox;display:flex;will-change:transform;transform:translate3d(-3272.0002880011516px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-4{display:-ms-flexbox;display:flex;will-change:transform;transform:translate3d(4362.667050668202px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-4{display:-ms-flexbox;display:flex;will-change:transform;transform:translate3d(-4362.667050668202px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-5{display:-ms-flexbox;display:flex;will-change:transform;transform:translate3d(5453.333813335253px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-5{display:-ms-flexbox;display:flex;will-change:transform;transform:translate3d(-5453.333813335253px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-6{display:-ms-flexbox;display:flex;will-change:transform;transform:translate3d(6544.000576002303px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-6{display:-ms-flexbox;display:flex;will-change:transform;transform:translate3d(-6544.000576002303px,0,-2000px)}.bespoke-simple-overview .bespoke-bullet-inactive{display:list-item;opacity:initial;transform:initial}#bespoke-search{position:absolute;width:100%;height:100%;pointer-events:none;z-index:1;opacity:0;background-color:rgba(128,128,128,.3);transition:opacity 100ms ease-out}#bespoke-search.bespoke-search-searching{opacity:1}#bespoke-search.bespoke-search-searching>#bespoke-search-input{bottom:5%}#bespoke-search-input{position:absolute;left:50%;bottom:0;pointer-events:all;width:200px;margin-left:-100px;padding:8px;border-radius:10px;border:1px solid silver;outline:none;color:gray;font-size:x-large;background-color:rgba(255,255,255,.9);transition:bottom 140ms ease-out}.bespoke-search-result{background-color:#ff0}.bespoke-search-result-focused{background-color:orange}#bespoke-search.bespoke-search-no-result>#bespoke-search-input{border:1px solid #8b0000;color:#8b0000}#bespoke-search-results-count{position:absolute;bottom:1%;left:50%;margin-left:-30px;width:60px;text-align:center;font-size:smaller;color:#8a2be2;font-weight:700}}@media print{*{background:0 0!important}body,html{overflow:visible!important}body{margin:0!important;padding:.1in!important;height:auto!important}body,code{line-height:1em!important}code,ol,pre,ul{text-align:left!important}pre code{border:1px solid #696969!important;padding:5px!important;border-radius:4px!important}@page{margin:.79in!important}.bespoke-slide{box-sizing:border-box!important;display:block!important;float:left!important;border:2px solid #000!important;text-align:center!important;margin-top:0!important;margin-left:0!important;page-break-inside:avoid!important}.bespoke-slide>*{zoom:.65!important}.bespoke-slide>* *{zoom:.85!important}.bespoke-slide>h1:only-child,.bespoke-slide>h2:only-child,.bespoke-slide>h3:only-child,.bespoke-slide>h4:only-child,.bespoke-slide>h5:only-child,.bespoke-slide>h6:only-child{margin-top:4em!important}.bespoke-slide .bespoke-bullet-inactive{opacity:1!important;transform:none!important;transition:none!important}.bespoke-slide:nth-child(6n),.bespoke-slide:nth-of-type(6n){page-break-after:always!important;break-after:page!important}}@media print and (orientation:portrait){.bespoke-slide{width:2.919472443000001in!important;height:2.189604332250001in!important;margin-right:.324385827in!important;margin-bottom:.324385827in!important}.bespoke-slide:nth-child(2n){margin-right:0!important}.bespoke-parent{width:6.487716540000001in!important}img{max-width:5.248012976470589in!important}}@media print and (orientation:landscape){.bespoke-slide{width:2.97387402in!important;height:2.230405515in!important;margin-right:.297387402in!important;margin-bottom:.297387402in!important}.bespoke-slide:nth-child(3n){margin-right:0!important}.bespoke-parent{width:9.9129134in!important}img{max-width:3.498675317647059in!important}}\n/*# sourceMappingURL=theme.css.map */\n",
    fonts;
  if (!!options.insertFonts) {
    fonts = "@import url(https://fonts.googleapis.com/css?family=Amatica+SC:400,700|Source+Code+Pro:400,700);\n/*# sourceMappingURL=fonts.css.map */\n";
    insertCss(fonts, { prepend: true });
  }
  insertCss(theme, { prepend: true });

  return function(deck) {
    classes()(deck);
  };
};

},{"bespoke-classes":4,"insert-css":13}],3:[function(require,module,exports){
module.exports = function(options) {
  return function(deck) {
    var activeSlideIndex,
      activeBulletIndex,

      bullets = deck.slides.map(function(slide) {
        return [].slice.call(slide.querySelectorAll((typeof options === 'string' ? options : '[data-bespoke-bullet]')), 0);
      }),

      next = function() {
        var nextSlideIndex = activeSlideIndex + 1;

        if (activeSlideHasBulletByOffset(1)) {
          activateBullet(activeSlideIndex, activeBulletIndex + 1);
          return false;
        } else if (bullets[nextSlideIndex]) {
          activateBullet(nextSlideIndex, 0);
        }
      },

      prev = function() {
        var prevSlideIndex = activeSlideIndex - 1;

        if (activeSlideHasBulletByOffset(-1)) {
          activateBullet(activeSlideIndex, activeBulletIndex - 1);
          return false;
        } else if (bullets[prevSlideIndex]) {
          activateBullet(prevSlideIndex, bullets[prevSlideIndex].length - 1);
        }
      },

      activateBullet = function(slideIndex, bulletIndex) {
        activeSlideIndex = slideIndex;
        activeBulletIndex = bulletIndex;

        bullets.forEach(function(slide, s) {
          slide.forEach(function(bullet, b) {
            bullet.classList.add('bespoke-bullet');

            if (s < slideIndex || s === slideIndex && b <= bulletIndex) {
              bullet.classList.add('bespoke-bullet-active');
              bullet.classList.remove('bespoke-bullet-inactive');
            } else {
              bullet.classList.add('bespoke-bullet-inactive');
              bullet.classList.remove('bespoke-bullet-active');
            }

            if (s === slideIndex && b === bulletIndex) {
              bullet.classList.add('bespoke-bullet-current');
            } else {
              bullet.classList.remove('bespoke-bullet-current');
            }
          });
        });
      },

      activeSlideHasBulletByOffset = function(offset) {
        return bullets[activeSlideIndex][activeBulletIndex + offset] !== undefined;
      };

    deck.on('next', next);
    deck.on('prev', prev);

    deck.on('slide', function(e) {
      activateBullet(e.index, 0);
    });

    activateBullet(0, 0);
  };
};

},{}],4:[function(require,module,exports){
module.exports = function() {
  return function(deck) {
    var addClass = function(el, cls) {
        el.classList.add('bespoke-' + cls);
      },

      removeClass = function(el, cls) {
        el.className = el.className
          .replace(new RegExp('bespoke-' + cls +'(\\s|$)', 'g'), ' ')
          .trim();
      },

      deactivate = function(el, index) {
        var activeSlide = deck.slides[deck.slide()],
          offset = index - deck.slide(),
          offsetClass = offset > 0 ? 'after' : 'before';

        ['before(-\\d+)?', 'after(-\\d+)?', 'active', 'inactive'].map(removeClass.bind(null, el));

        if (el !== activeSlide) {
          ['inactive', offsetClass, offsetClass + '-' + Math.abs(offset)].map(addClass.bind(null, el));
        }
      };

    addClass(deck.parent, 'parent');
    deck.slides.map(function(el) { addClass(el, 'slide'); });

    deck.on('activate', function(e) {
      deck.slides.map(deactivate);
      addClass(e.slide, 'active');
      removeClass(e.slide, 'inactive');
    });
  };
};

},{}],5:[function(require,module,exports){
module.exports = function() {
  return function(deck) {
    var parseHash = function() {
      var hash = window.location.hash.slice(1),
        slideNumberOrName = parseInt(hash, 10);

      if (hash) {
        if (slideNumberOrName) {
          activateSlide(slideNumberOrName - 1);
        } else {
          deck.slides.forEach(function(slide, i) {
            if (slide.getAttribute('data-bespoke-hash') === hash) {
              activateSlide(i);
            }
          });
        }
      }
    };

    var activateSlide = function(index) {
      var indexToActivate = -1 < index && index < deck.slides.length ? index : 0;
      if (indexToActivate !== deck.slide()) {
        deck.slide(indexToActivate);
      }
    };

    setTimeout(function() {
      parseHash();

      deck.on('activate', function(e) {
        var slideName = e.slide.getAttribute('data-bespoke-hash');
        window.location.hash = slideName || e.index + 1;
      });

      window.addEventListener('hashchange', parseHash);
    }, 0);
  };
};

},{}],6:[function(require,module,exports){
module.exports = function(options) {
  return function(deck) {
    var isHorizontal = options !== 'vertical';

    document.addEventListener('keydown', function(e) {
      if (e.which == 34 || // PAGE DOWN
        (e.which == 32 && !e.shiftKey) || // SPACE WITHOUT SHIFT
        (isHorizontal && e.which == 39) || // RIGHT
        (!isHorizontal && e.which == 40) // DOWN
      ) { deck.next(); }

      if (e.which == 33 || // PAGE UP
        (e.which == 32 && e.shiftKey) || // SPACE + SHIFT
        (isHorizontal && e.which == 37) || // LEFT
        (!isHorizontal && e.which == 38) // UP
      ) { deck.prev(); }
    });
  };
};

},{}],7:[function(require,module,exports){
module.exports = function(options) {
  return function (deck) {
    var progressParent = document.createElement('div'),
      progressBar = document.createElement('div'),
      prop = options === 'vertical' ? 'height' : 'width';

    progressParent.className = 'bespoke-progress-parent';
    progressBar.className = 'bespoke-progress-bar';
    progressParent.appendChild(progressBar);
    deck.parent.appendChild(progressParent);

    deck.on('activate', function(e) {
      progressBar.style[prop] = (e.index * 100 / (deck.slides.length - 1)) + '%';
    });
  };
};

},{}],8:[function(require,module,exports){
module.exports = function(options) {
  return function(deck) {
    var parent = deck.parent,
      currentSlide = deck.slides[deck.slide()],
      slideHeight = currentSlide.offsetHeight,
      slideWidth = currentSlide.offsetWidth,
      useZoom = options === 'zoom' || ('zoom' in parent.style && options !== 'transform'),

      innerWrap = function(element) {
        var innerWrapper = document.createElement('div');
        innerWrapper.className = 'bespoke-scale-parent';
        while (element.children.length > 0) {
          innerWrapper.appendChild(element.children[0]);
        }
        element.appendChild(innerWrapper);
        return innerWrapper;
      },

      element = useZoom ? parent : innerWrap(parent),

      transformProperty = (function(property) {
        var prefixes = 'Moz Webkit O ms'.split(' ');
        return prefixes.reduce(function(currentProperty, prefix) {
            return prefix + property in parent.style ? prefix + property : currentProperty;
          }, property.toLowerCase());
      }('Transform')),

      scale = useZoom ?
        function(ratio, element) {
          element.style.zoom = ratio;
        } :
        function(ratio, element) {
          element.style[transformProperty] = 'scale(' + ratio + ')';
        },

      scaleAll = function() {
        var xScale = parent.offsetWidth / slideWidth,
          yScale = (parent.offsetHeight / slideHeight) || 0;

        scale(Math.min(xScale, yScale), element);
      };

    window.addEventListener('resize', scaleAll);
    scaleAll();
  };

};

},{}],9:[function(require,module,exports){
(function (global){
/*! bespoke-simple-overview v1.0.0 © 2016 Flávio Coutinho, MIT License */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var s;s="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,s=s.bespoke||(s.bespoke={}),s=s.plugins||(s.plugins={}),s.simpleOverview=e()}}(function(){return function e(s,o,t){function r(n,p){if(!o[n]){if(!s[n]){var a="function"==typeof require&&require;if(!p&&a)return a(n,!0);if(i)return i(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}var b=o[n]={exports:{}};s[n][0].call(b.exports,function(e){var o=s[n][1][e];return r(o?o:e)},b,b.exports,e,s,o,t)}return o[n].exports}for(var i="function"==typeof require&&require,n=0;n<t.length;n++)r(t[n]);return r}({1:[function(e,s,o){var t=e("insert-css"),r=function(e,s){return s="object"==typeof s?s:{},Object.keys(e).forEach(function(o){s[o]=s[o]||e[o]}),s},i=function(e){return"string"==typeof e?e.toUpperCase().charCodeAt(0):e};s.exports=function(e){return e=r({activationKey:27,insertStyles:!0},e),e.activationKey=i(e.activationKey),function(s){var o,r,i,n,p,a;o=function(){s.on("activate",o)(),window.addEventListener("keydown",r,!1);var i=".bespoke-parent{-webkit-perspective:900px;perspective:900px}.bespoke-parent .bespoke-slide{transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.bespoke-simple-overview .bespoke-slide{-webkit-transform:translate3d(0,0,-2000px);transform:translate3d(0,0,-2000px);outline:4px solid silver;background-color:rgba(255,255,255,.2);opacity:initial}.bespoke-simple-overview .bespoke-slide.bespoke-active,.bespoke-simple-overview .bespoke-slide:hover{outline-color:#4682b4}.bespoke-simple-overview .bespoke-slide.bespoke-before{display:none;-webkit-transform:translate3d(-630%,0,-2000px);transform:translate3d(-630%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after{display:none;-webkit-transform:translate3d(630%,0,-2000px);transform:translate3d(630%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-1,.bespoke-simple-overview .bespoke-slide.bespoke-after-2,.bespoke-simple-overview .bespoke-slide.bespoke-after-3,.bespoke-simple-overview .bespoke-slide.bespoke-after-4,.bespoke-simple-overview .bespoke-slide.bespoke-after-5,.bespoke-simple-overview .bespoke-slide.bespoke-before-1,.bespoke-simple-overview .bespoke-slide.bespoke-before-2,.bespoke-simple-overview .bespoke-slide.bespoke-before-3,.bespoke-simple-overview .bespoke-slide.bespoke-before-4,.bespoke-simple-overview .bespoke-slide.bespoke-before-5{display:-webkit-flex;display:-ms-flexbox;display:flex}.bespoke-simple-overview .bespoke-slide.bespoke-before-1{-webkit-transform:translate3d(-105%,0,-2000px);transform:translate3d(-105%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-2{-webkit-transform:translate3d(-210%,0,-2000px);transform:translate3d(-210%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-3{-webkit-transform:translate3d(-315%,0,-2000px);transform:translate3d(-315%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-4{-webkit-transform:translate3d(-420%,0,-2000px);transform:translate3d(-420%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-5{-webkit-transform:translate3d(-525%,0,-2000px);transform:translate3d(-525%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-1{-webkit-transform:translate3d(105%,0,-2000px);transform:translate3d(105%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-2{-webkit-transform:translate3d(210%,0,-2000px);transform:translate3d(210%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-3{-webkit-transform:translate3d(315%,0,-2000px);transform:translate3d(315%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-4{-webkit-transform:translate3d(420%,0,-2000px);transform:translate3d(420%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-5{-webkit-transform:translate3d(525%,0,-2000px);transform:translate3d(525%,0,-2000px)}.bespoke-simple-overview .bespoke-bullet-inactive{display:list-item;opacity:initial;-webkit-transform:initial;transform:initial}";e.insertStyles&&t(i),a=s.parent.classList.contains("bespoke-simple-overview"),a&&SimpleOverview()},i=function(){window.removeEventListener("keydown",r,!1)},n=function(e){var o;return a?(o=s.slide()+e,o>=0&&o<s.slides.length&&s.slide(o),!1):void 0},r=function(s){switch(s.which){case e.activationKey:p()}},p=function(e){a="boolean"==typeof e?e:!a,s.parent.classList.toggle("bespoke-simple-overview",a)},s.on("activate",o),s.on("destroy",i),s.on("simple-overview.enable",p.bind(null,!0)),s.on("simple-overview.disable",p.bind(null,!1)),s.on("simple-overview.toggle",p.bind(null)),s.on("prev",n.bind(null,-1)),s.on("next",n.bind(null,1))}}},{"insert-css":2}],2:[function(e,s,o){var t={};s.exports=function(e,s){if(!t[e]){t[e]=!0;var o=document.createElement("style");o.setAttribute("type","text/css"),"textContent"in o?o.textContent=e:o.styleSheet.cssText=e;var r=document.getElementsByTagName("head")[0];s&&s.prepend?r.insertBefore(o,r.childNodes[0]):r.appendChild(o)}}},{}]},{},[1])(1)});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],10:[function(require,module,exports){
module.exports = function() {
  return function(deck) {
    var modifyState = function(method, event) {
      var attr = event.slide.getAttribute('data-bespoke-state');

      if (attr) {
        attr.split(' ').forEach(function(state) {
          deck.parent.classList[method](state);
        });
      }
    };

    deck.on('activate', modifyState.bind(null, 'add'));
    deck.on('deactivate', modifyState.bind(null, 'remove'));
  };
};

},{}],11:[function(require,module,exports){
module.exports = function(options) {
  return function(deck) {
    var axis = options == 'vertical' ? 'Y' : 'X',
      startPosition,
      delta;

    deck.parent.addEventListener('touchstart', function(e) {
      if (e.touches.length == 1) {
        startPosition = e.touches[0]['page' + axis];
        delta = 0;
      }
    });

    deck.parent.addEventListener('touchmove', function(e) {
      if (e.touches.length == 1) {
        e.preventDefault();
        delta = e.touches[0]['page' + axis] - startPosition;
      }
    });

    deck.parent.addEventListener('touchend', function() {
      if (Math.abs(delta) > 50) {
        deck[delta > 0 ? 'prev' : 'next']();
      }
    });
  };
};

},{}],12:[function(require,module,exports){
var from = function(opts, plugins) {
  var parent = (opts.parent || opts).nodeType === 1 ? (opts.parent || opts) : document.querySelector(opts.parent || opts),
    slides = [].filter.call(typeof opts.slides === 'string' ? parent.querySelectorAll(opts.slides) : (opts.slides || parent.children), function(el) { return el.nodeName !== 'SCRIPT'; }),
    activeSlide = slides[0],
    listeners = {},

    activate = function(index, customData) {
      if (!slides[index]) {
        return;
      }

      fire('deactivate', createEventData(activeSlide, customData));
      activeSlide = slides[index];
      fire('activate', createEventData(activeSlide, customData));
    },

    slide = function(index, customData) {
      if (arguments.length) {
        fire('slide', createEventData(slides[index], customData)) && activate(index, customData);
      } else {
        return slides.indexOf(activeSlide);
      }
    },

    step = function(offset, customData) {
      var slideIndex = slides.indexOf(activeSlide) + offset;

      fire(offset > 0 ? 'next' : 'prev', createEventData(activeSlide, customData)) && activate(slideIndex, customData);
    },

    on = function(eventName, callback) {
      (listeners[eventName] || (listeners[eventName] = [])).push(callback);
      return off.bind(null, eventName, callback);
    },

    off = function(eventName, callback) {
      listeners[eventName] = (listeners[eventName] || []).filter(function(listener) { return listener !== callback; });
    },

    fire = function(eventName, eventData) {
      return (listeners[eventName] || [])
        .reduce(function(notCancelled, callback) {
          return notCancelled && callback(eventData) !== false;
        }, true);
    },

    createEventData = function(el, eventData) {
      eventData = eventData || {};
      eventData.index = slides.indexOf(el);
      eventData.slide = el;
      return eventData;
    },

    deck = {
      on: on,
      off: off,
      fire: fire,
      slide: slide,
      next: step.bind(null, 1),
      prev: step.bind(null, -1),
      parent: parent,
      slides: slides
    };

  (plugins || []).forEach(function(plugin) {
    plugin(deck);
  });

  activate(0);

  return deck;
};

module.exports = {
  from: from
};

},{}],13:[function(require,module,exports){
var containers = []; // will store container HTMLElement references
var styleElements = []; // will store {prepend: HTMLElement, append: HTMLElement}

var usage = 'insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).';

function insertCss(css, options) {
    options = options || {};

    if (css === undefined) {
        throw new Error(usage);
    }

    var position = options.prepend === true ? 'prepend' : 'append';
    var container = options.container !== undefined ? options.container : document.querySelector('head');
    var containerId = containers.indexOf(container);

    // first time we see this container, create the necessary entries
    if (containerId === -1) {
        containerId = containers.push(container) - 1;
        styleElements[containerId] = {};
    }

    // try to get the correponding container + position styleElement, create it otherwise
    var styleElement;

    if (styleElements[containerId] !== undefined && styleElements[containerId][position] !== undefined) {
        styleElement = styleElements[containerId][position];
    } else {
        styleElement = styleElements[containerId][position] = createStyleElement();

        if (position === 'prepend') {
            container.insertBefore(styleElement, container.childNodes[0]);
        } else {
            container.appendChild(styleElement);
        }
    }

    // strip potential UTF-8 BOM if css was read from a file
    if (css.charCodeAt(0) === 0xFEFF) { css = css.substr(1, css.length); }

    // actually add the stylesheet
    if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText += css
    } else {
        styleElement.textContent += css;
    }

    return styleElement;
};

function createStyleElement() {
    var styleElement = document.createElement('style');
    styleElement.setAttribute('type', 'text/css');
    return styleElement;
}

module.exports = insertCss;
module.exports.insertCss = insertCss;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZW1vL3NyYy9zY3JpcHRzL21haW4uanMiLCJsaWIvYmVzcG9rZS10aGVtZS1iZWFjaGRheS5qcyIsIm5vZGVfbW9kdWxlcy9iZXNwb2tlLWJ1bGxldHMvbGliL2Jlc3Bva2UtYnVsbGV0cy5qcyIsIm5vZGVfbW9kdWxlcy9iZXNwb2tlLWNsYXNzZXMvbGliL2Jlc3Bva2UtY2xhc3Nlcy5qcyIsIm5vZGVfbW9kdWxlcy9iZXNwb2tlLWhhc2gvbGliL2Jlc3Bva2UtaGFzaC5qcyIsIm5vZGVfbW9kdWxlcy9iZXNwb2tlLWtleXMvbGliL2Jlc3Bva2Uta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9iZXNwb2tlLXByb2dyZXNzL2xpYi9iZXNwb2tlLXByb2dyZXNzLmpzIiwibm9kZV9tb2R1bGVzL2Jlc3Bva2Utc2NhbGUvbGliL2Jlc3Bva2Utc2NhbGUuanMiLCJub2RlX21vZHVsZXMvYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcvZGlzdC9iZXNwb2tlLXNpbXBsZS1vdmVydmlldy5taW4uanMiLCJub2RlX21vZHVsZXMvYmVzcG9rZS1zdGF0ZS9saWIvYmVzcG9rZS1zdGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9iZXNwb2tlLXRvdWNoL2xpYi9iZXNwb2tlLXRvdWNoLmpzIiwibm9kZV9tb2R1bGVzL2Jlc3Bva2UvbGliL2Jlc3Bva2UuanMiLCJub2RlX21vZHVsZXMvaW5zZXJ0LWNzcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQy9DQTtBQUNBOzs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGJlc3Bva2UgPSByZXF1aXJlKCdiZXNwb2tlJyksXG4gIGJlYWNoZGF5ID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliL2Jlc3Bva2UtdGhlbWUtYmVhY2hkYXkuanMnKSxcbiAga2V5cyA9IHJlcXVpcmUoJ2Jlc3Bva2Uta2V5cycpLFxuICB0b3VjaCA9IHJlcXVpcmUoJ2Jlc3Bva2UtdG91Y2gnKSxcbiAgYnVsbGV0cyA9IHJlcXVpcmUoJ2Jlc3Bva2UtYnVsbGV0cycpLFxuICBzY2FsZSA9IHJlcXVpcmUoJ2Jlc3Bva2Utc2NhbGUnKSxcbiAgcHJvZ3Jlc3MgPSByZXF1aXJlKCdiZXNwb2tlLXByb2dyZXNzJyksXG4gIG92ZXJ2aWV3ID0gcmVxdWlyZSgnYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcnKSxcbiAgLy8gc2VhcmNoID0gcmVxdWlyZSgnYmVzcG9rZS1zZWFyY2gnKSxcbiAgaGFzaCA9IHJlcXVpcmUoJ2Jlc3Bva2UtaGFzaCcpLFxuICBzdGF0ZSA9IHJlcXVpcmUoJ2Jlc3Bva2Utc3RhdGUnKTtcblxuYmVzcG9rZS5mcm9tKCdhcnRpY2xlJywgW1xuICBiZWFjaGRheSh7IGluc2VydEZvbnRzOiBmYWxzZSB9KSxcbiAga2V5cygpLFxuICB0b3VjaCgpLFxuICBzdGF0ZSgpLFxuICAvLyBzY2FsZSgndHJhbnNmb3JtJyksXG4gIHByb2dyZXNzKCksXG4gIGhhc2goKSxcbiAgb3ZlcnZpZXcoeyBpbnNlcnRTdHlsZXM6IGZhbHNlIH0pLFxuICBidWxsZXRzKCcuYnVsbGV0JyksXG4gIC8vIHNlYXJjaCgpLFxuICBmdW5jdGlvbihkZWNrKSB7XG4gICAgLy8gYXMgd2UncmUgdXNpbmcgYmVzcG9rZS1zY2FsZSB3aXRoICd0cmFuc2Zvcm0nLCBpdCBjcmVhdGVzIGFcbiAgICAvLyAuYmVzcG9rZS1wYXJlbnQgYW5kIHdyYXBzIGV2ZXJ5dGhpbmcgaW5zaWRlIGl0LCBpbmNsdWRpbmcgdGhlXG4gICAgLy8gYmVzcG9rZS1wcm9ncmVzcyBiYXJcbiAgICAvLyB0byBwcmV2ZW50IGl0IGZyb20gYmVpbmcgc2NhbGVkIHVwL2Rvd24sIHdlIG5lZWQgdG8gdW53cmFwIGl0XG4gICAgLy8gdmFyIGJhciA9IGRlY2sucXVlcnlTZWxlY3RvcignYmVzcG9rZS1wcm9ncmVzcy1wYXJlbnQnKTtcbiAgICAvLyBkZWNrLnBhcmVudC5hcHBlbmRDaGlsZChiYXIpO1xuICB9LFxuICBmdW5jdGlvbihkZWNrKSB7XG4gICAgLy8gbWFrZXMgdGhlIGNvbnRlbnQgdmlzaWJsZSB0byBhdm9pZCBGb1VDXG4gICAgZGVjay5wYXJlbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgfVxuXSk7XG4iLCJcbnZhciBjbGFzc2VzID0gcmVxdWlyZSgnYmVzcG9rZS1jbGFzc2VzJyk7XG52YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZSgnaW5zZXJ0LWNzcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwgeyBpbnNlcnRGb250czogdHJ1ZSB9O1xuICB2YXIgdGhlbWUgPSBcIi8qISBub3JtYWxpemUuY3NzIHYzLjAuMCB8IE1JVCBMaWNlbnNlIHwgZ2l0LmlvL25vcm1hbGl6ZSAqL1xcbmh0bWx7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjstbXMtdGV4dC1zaXplLWFkanVzdDoxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDoxMDAlfWJvZHl7bWFyZ2luOjB9YXJ0aWNsZSxhc2lkZSxkZXRhaWxzLGZpZ2NhcHRpb24sZmlndXJlLGZvb3RlcixoZWFkZXIsaGdyb3VwLG1haW4sbmF2LHNlY3Rpb24sc3VtbWFyeXtkaXNwbGF5OmJsb2NrfWF1ZGlvLGNhbnZhcyxwcm9ncmVzcyx2aWRlb3tkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1hdWRpbzpub3QoW2NvbnRyb2xzXSl7ZGlzcGxheTpub25lO2hlaWdodDowfVtoaWRkZW5dLHRlbXBsYXRle2Rpc3BsYXk6bm9uZX1he2JhY2tncm91bmQ6MCAwO2NvbG9yOiNkYjQ0Mzc7dGV4dC1kZWNvcmF0aW9uOm5vbmV9YTphY3RpdmUsYTpob3ZlcntvdXRsaW5lOjB9YWJiclt0aXRsZV17Ym9yZGVyLWJvdHRvbToxcHggZG90dGVkfWJ7Zm9udC13ZWlnaHQ6NzAwfWRmbntmb250LXN0eWxlOml0YWxpY31oMSxtYXJre2NvbG9yOiMwMDB9aDF7Zm9udC1mYW1pbHk6J0FtYXRpY2EgU0MnLGN1cnNpdmU7Zm9udC1zaXplOjMuNWVtfW1hcmt7YmFja2dyb3VuZDojZmYwfXNtYWxse2ZvbnQtc2l6ZTo4MCV9c3ViLHN1cHtmb250LXNpemU6NzUlO2xpbmUtaGVpZ2h0OjA7cG9zaXRpb246cmVsYXRpdmU7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9c3Vwe3RvcDotLjVlbX1zdWJ7Ym90dG9tOi0uMjVlbX1pbWd7Ym9yZGVyOjB9c3ZnOm5vdCg6cm9vdCl7b3ZlcmZsb3c6aGlkZGVufWZpZ3VyZXttYXJnaW46MWVtIDQwcHh9aHJ7Ym94LXNpemluZzpjb250ZW50LWJveDtoZWlnaHQ6MH1wcmV7b3ZlcmZsb3c6YXV0b31jb2RlLHByZSxzYW1we2ZvbnQtZmFtaWx5Om1vbm9zcGFjZSxtb25vc3BhY2V9cHJlLHNhbXB7Zm9udC1zaXplOjFlbX1idXR0b24saW5wdXQsb3B0Z3JvdXAsc2VsZWN0LHRleHRhcmVhe2NvbG9yOmluaGVyaXQ7Zm9udDppbmhlcml0O21hcmdpbjowfWJ1dHRvbntvdmVyZmxvdzp2aXNpYmxlfWJ1dHRvbixzZWxlY3R7dGV4dC10cmFuc2Zvcm06bm9uZX1idXR0b24saHRtbCBpbnB1dFt0eXBlPWJ1dHRvbl0saW5wdXRbdHlwZT1yZXNldF0saW5wdXRbdHlwZT1zdWJtaXRdey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b247Y3Vyc29yOnBvaW50ZXJ9YnV0dG9uW2Rpc2FibGVkXSxodG1sIGlucHV0W2Rpc2FibGVkXXtjdXJzb3I6ZGVmYXVsdH1idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjA7cGFkZGluZzowfWlucHV0e2xpbmUtaGVpZ2h0Om5vcm1hbH1pbnB1dFt0eXBlPWNoZWNrYm94XSxpbnB1dFt0eXBlPXJhZGlvXXtib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzowfWlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257aGVpZ2h0OmF1dG99aW5wdXRbdHlwZT1zZWFyY2hdey13ZWJraXQtYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7Ym94LXNpemluZzpjb250ZW50LWJveH1pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24saW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lfWZpZWxkc2V0e2JvcmRlcjoxcHggc29saWQgc2lsdmVyO21hcmdpbjowIDJweDtwYWRkaW5nOi4zNWVtIC42MjVlbSAuNzVlbX1sZWdlbmR7Ym9yZGVyOjA7cGFkZGluZzowfXRleHRhcmVhe292ZXJmbG93OmF1dG99b3B0Z3JvdXAsc3Ryb25ne2ZvbnQtd2VpZ2h0OjcwMH10YWJsZXtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Ym9yZGVyLXNwYWNpbmc6MDtib3JkZXI6MnB4IHNvbGlkIGdyYXl9dGQsdGh7cGFkZGluZzouM2VtIC41ZW07Ym9yZGVyOjFweCBzb2xpZCBncmF5fSp7Ym94LXNpemluZzpib3JkZXItYm94fUBtZWRpYSBzY3JlZW57LmJlc3Bva2UtcGFyZW50e3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO3otaW5kZXg6MTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzI1MjUyNTtmb250LXNpemU6MjRweH0uYmVzcG9rZS1zbGlkZXtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDY2LjY2NjY2NjY2NjY2NjVweDtoZWlnaHQ6NjAwcHg7dG9wOjUwJTtsZWZ0OjUwJTttYXJnaW4tbGVmdDotNTMzLjMzMzMzMzMzMzMzMzNweDttYXJnaW4tdG9wOi0zMDBweDtvdmVyZmxvdzpoaWRkZW47ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfS5iZXNwb2tlLWluYWN0aXZle29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lfS5iZXNwb2tlLWluYWN0aXZlIC5iZXNwb2tlLWJ1bGxldC1pbmFjdGl2ZXt0cmFuc2l0aW9uOm9wYWNpdHkgLjRzIGVhc2V9LmJlc3Bva2UtaW5hY3RpdmU6bm90KC5iZXNwb2tlLWFmdGVyLTEpOm5vdCguYmVzcG9rZS1iZWZvcmUtMSk6bm90KC5iZXNwb2tlLWFmdGVyLTIpOm5vdCguYmVzcG9rZS1iZWZvcmUtMil7ZGlzcGxheTpub25lfS5lbXBoYXRpY3tiYWNrZ3JvdW5kLWNvbG9yOiM3YzdjZTB9LmVtcGhhdGljLC5lbXBoYXRpYyBoMSwuZW1waGF0aWMgaDIsLmVtcGhhdGljIGgzLC5lbXBoYXRpYyBoNCwuZW1waGF0aWMgaDUsLmVtcGhhdGljIGg2e2NvbG9yOiNmZmZ9fWgyLGgzLGg0LGg1LGg2e2ZvbnQtc2l6ZToxLjVlbTtmb250LWZhbWlseTonU291cmNlIENvZGUgUHJvJyxtb25vc3BhY2U7Y29sb3I6IzAwMH1oMyxoNCxoNSxoNntmb250LXNpemU6MS4yNWVtfWg0LGg1LGg2e2ZvbnQtc2l6ZToxZW19aDEsaDIsaDMsaDQsaDUsaDZ7Zm9udC13ZWlnaHQ6NDAwO21hcmdpbjowIDAgLjI1ZW19bGkscHtmb250LXNpemU6MjRweDtsaW5lLWhlaWdodDoxLjVlbX1zdHJvbmd7Y29sb3I6IzAwYjE4Y31hcnRpY2xle2ZvbnQtZmFtaWx5OidTb3VyY2UgQ29kZSBQcm8nLG1vbm9zcGFjZX1hOmhvdmVye3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9Y29kZXtmb250LXNpemU6Ljc1ZW07YmFja2dyb3VuZC1jb2xvcjojZGRkO2JvcmRlci1yYWRpdXM6M3B4fXByZT5jb2Rle2ZvbnQtc2l6ZTouODMzMzNlbX1wcmV7bWF4LXdpZHRoOjEwMjYuNjY2NjY2NjY2NjY2NXB4fXByZSBjb2RlIHNwYW57d29yZC13cmFwOmJyZWFrLXdvcmQ7d29yZC1icmVhazpicmVhay1hbGx9aDE+Y29kZSxoMj5jb2RlLGgzPmNvZGUsaDQ+Y29kZSxoNT5jb2RlLGg2PmNvZGUscHJlPmNvZGV7YmFja2dyb3VuZC1jb2xvcjppbmhlcml0O2JvcmRlci1yYWRpdXM6aW5oZXJpdH1kZCxkdHttYXJnaW4tYm90dG9tOi41ZW19ZHR7ZmxvYXQ6bGVmdDtjbGVhcjpsZWZ0O3dpZHRoOjEwZW07b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwO3RleHQtYWxpZ246cmlnaHQ7Zm9udC13ZWlnaHQ6NzAwO3BhZGRpbmctcmlnaHQ6MWVtO3Bvc2l0aW9uOnJlbGF0aXZlfWRke21hcmdpbi1sZWZ0OjEwLjVlbX1kZWx7Y29sb3I6Z3JheX10cntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjcpfXRyOm50aC1vZi10eXBlKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6cmdiYSgxOTEsMjEzLDIwMCwuNyl9dGh7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMzMzN9YmxvY2txdW90ZSxrYmR7cG9zaXRpb246cmVsYXRpdmV9YmxvY2txdW90ZXtiYWNrZ3JvdW5kOiNmNWY1ZjU7Ym94LXNoYWRvdzo0cHggNHB4IDRweCBzaWx2ZXI7Zm9udC1zdHlsZTppdGFsaWM7bWFyZ2luOi4yNWVtIDA7cGFkZGluZzouMjVlbSA0MHB4O2xpbmUtaGVpZ2h0OjEuNDU7Zm9udC1zaXplOjE4cHg7Zm9udC1mYW1pbHk6R2VvcmdpYSxzZXJpZjtjb2xvcjojMzgzODM4fWJsb2NrcXVvdGU6OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcMjAxQ1xcXCI7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0uMjVlbTt0b3A6LS4yNWVtO2ZvbnQtc2l6ZTo4MHB4O2NvbG9yOiM3YTdhN2F9YmxvY2txdW90ZSBjaXRle2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDo1cHg7Zm9udC1zaXplOjc1JTtjb2xvcjojOTk5fWJsb2NrcXVvdGUgY2l0ZTo6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFwyMDE0IFxcXFwyMDA5XFxcIn1rYmR7cGFkZGluZzouMWVtIC42ZW07Zm9udC1zaXplOi44ZW07Ym9yZGVyOjFweCBzb2xpZCAjY2NjO2ZvbnQtZmFtaWx5OkNvbnNvbGFzLE1lbmxvLE1vbmFjbyxtb25vc3BhY2U7YmFja2dyb3VuZC1jb2xvcjojZjdmN2Y3O2NvbG9yOiMzMzM7Ym94LXNoYWRvdzowIDRweCAwIHJnYmEoMCwwLDAsLjIpLDAgMCAwIDJweCAjZmZmIGluc2V0O2JvcmRlci1yYWRpdXM6M3B4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbjowIC4xZW07dGV4dC1zaGFkb3c6MCAxcHggMCAjZmZmO2xpbmUtaGVpZ2h0OjEuMzt3aGl0ZS1zcGFjZTpub3dyYXA7dG9wOjA7dHJhbnNpdGlvbjp0b3AgNDBtcyBlYXNlLW91dCxib3gtc2hhZG93IDQwbXMgZWFzZS1vdXR9a2JkOmhvdmVye3RvcDo0cHg7Ym94LXNoYWRvdzowIDAgMCByZ2JhKDAsMCwwLC4yKSwwIDAgMCAycHggI2ZmZiBpbnNldH1maWdjYXB0aW9ue2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtwYWRkaW5nOjVweDttYXJnaW4tYm90dG9tOjNweH1pbWdbYWx0JD1yaWdodF17ZmxvYXQ6cmlnaHR9aW1nW2FsdCQ9bGVmdF17ZmxvYXQ6bGVmdH0ucHVzaC1yaWdodHtmbG9hdDpyaWdodDttYXJnaW4tbGVmdDoyMHB4fS5wdXNoLWxlZnR7ZmxvYXQ6bGVmdDttYXJnaW4tcmlnaHQ6MjBweH0uZmlndXJlLXNsaWRlc3twb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO2hlaWdodDo1MDBweH0uZmlndXJlLXN0ZXB7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowfWEuYm9va21hcmtsZXR7Ym9yZGVyLXJhZGl1czo1cHg7Ym9yZGVyOjJweCBzb2xpZCBzaWx2ZXI7cGFkZGluZzo0cHggN3B4O2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSk7dHJhbnNpdGlvbjphbGwgMjAwbXMgZWFzZS1vdXR9YS5ib29rbWFya2xldDpob3Zlcnt0ZXh0LWRlY29yYXRpb246bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOiNiNjZjN2U7Y29sb3I6I2RkZDtib3JkZXItY29sb3I6IzMzMztjdXJzb3I6bW92ZX1pbnB1dC5zd2l0Y2g6ZW1wdHl7ZGlzcGxheTpibG9jazttYXJnaW4tbGVmdDotOTk5cHh9aW5wdXQuc3dpdGNoOmVtcHR5fmxhYmVse3Bvc2l0aW9uOnJlbGF0aXZlO2Zsb2F0OmxlZnQ7bGluZS1oZWlnaHQ6MS42ZW07dGV4dC1pbmRlbnQ6NGVtO21hcmdpbjouMmVtIDA7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfWlucHV0LnN3aXRjaDplbXB0eX5sYWJlbDphZnRlcixpbnB1dC5zd2l0Y2g6ZW1wdHl+bGFiZWw6YmVmb3Jle3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6YmxvY2s7dG9wOjA7Ym90dG9tOjA7bGVmdDowO2NvbnRlbnQ6JyAnO3dpZHRoOjMuNmVtO2JhY2tncm91bmQtY29sb3I6I2MzMztib3JkZXItcmFkaXVzOi4zZW07Ym94LXNoYWRvdzppbnNldCAwIC4yZW0gMCByZ2JhKDAsMCwwLC4zKTt0cmFuc2l0aW9uOmFsbCAxMDBtcyBlYXNlLWlufWlucHV0LnN3aXRjaDplbXB0eX5sYWJlbDphZnRlcnt3aWR0aDoxLjRlbTt0b3A6LjFlbTtib3R0b206LjFlbTttYXJnaW4tbGVmdDouMWVtO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOi4xNWVtO2JveC1zaGFkb3c6aW5zZXQgMCAtLjJlbSAwIHJnYmEoMCwwLDAsLjIpfWlucHV0LnN3aXRjaDpjaGVja2VkfmxhYmVsOmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOiMzOTN9aW5wdXQuc3dpdGNoOmNoZWNrZWR+bGFiZWw6YWZ0ZXJ7bWFyZ2luLWxlZnQ6Mi4xZW19aW1nLmZ1bGwtd2lkdGh7d2lkdGg6MTAwJX1pbWcubGFyZ2Utd2lkdGh7d2lkdGg6ODAlfWltZy5tZWRpdW0td2lkdGh7d2lkdGg6NjAlfWltZy5zbWFsbC13aWR0aHt3aWR0aDo0MCV9aW1nLmZ1bGwtaGVpZ2h0e2hlaWdodDoxMDAlfWltZy5odWdlLWhlaWdodHtoZWlnaHQ6ODAlfWltZy5sYXJnZS1oZWlnaHR7aGVpZ2h0OjYwJX1pbWcubWVkaXVtLWhlaWdodHtoZWlnaHQ6NDAlfWltZy5zbWFsbC1oZWlnaHR7aGVpZ2h0OjIwJX1pbWcuYmxvY2t7ZGlzcGxheTpibG9ja30uZmxvYXRpbmctcG9ydHJhaXQtY29udGFpbmVyICosLnBvcnRyYWl0LC5wb3J0cmFpdCBpbWd7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTUwcHg7aGVpZ2h0OjE1MHB4O2JvcmRlci1yYWRpdXM6NTAlfS5mbG9hdGluZy1wb3J0cmFpdC1jb250YWluZXIgKiBmaWdjYXB0aW9uLC5wb3J0cmFpdCBmaWdjYXB0aW9uLC5wb3J0cmFpdCBpbWcgZmlnY2FwdGlvbntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5mbG9hdGluZy1wb3J0cmFpdC1jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmV9LmZsb2F0aW5nLXBvcnRyYWl0LWNvbnRhaW5lciAqe21hcmdpbjowO2FuaW1hdGlvbjpmbG9hdGluZyAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBhbHRlcm5hdGV9LmZsb2F0aW5nLXBvcnRyYWl0LWNvbnRhaW5lcjo6YWZ0ZXJ7Y29udGVudDpcXFwiIFxcXCI7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MjAlO2xlZnQ6MDtyaWdodDowO2JvdHRvbTotMjAlO2JhY2tncm91bmQ6cmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgY2xvc2VzdC1zaWRlLHJnYmEoMjEsMjEsMjEsLjI1KSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpO3otaW5kZXg6LTE7YW5pbWF0aW9uOmZsb2F0ZWQtZWxlbWVudC1zaGFkb3cgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYWx0ZXJuYXRlfS5mbGlwc3t0cmFuc2l0aW9uOnRyYW5zZm9ybSA2MDBtcyBlYXNlLW91dH0uZmxpcHMgKnttYXJnaW46MH0uZmxpcHM6aG92ZXJ7dHJhbnNmb3JtOnJvdGF0ZVkoNzIwZGVnKX0uY2VudGVyLWFsaWduZWR7dGV4dC1hbGlnbjpjZW50ZXJ9LmJ1bGxldC1vbGR7Y29sb3I6Z3JheX0uaG9yaXpvbnRhbC1saXN0e2xpc3Qtc3R5bGU6bm9uZX0uaG9yaXpvbnRhbC1saXN0Pmxpe2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjI1JTttYXJnaW46MCA0LjUlIDAgMDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9Lmhvcml6b250YWwtbGlzdD5saTpsYXN0LW9mLXR5cGV7bWFyZ2luOjB9Lm11bHRpLWNvbHVtbi1saXN0LTIsLm11bHRpLWNvbHVtbi1saXN0LTN7cGFkZGluZy1sZWZ0OjA7LW1vei1jb2x1bW4tY291bnQ6Mjtjb2x1bW4tY291bnQ6MjtsaXN0LXN0eWxlLXBvc2l0aW9uOmluc2lkZX0ubXVsdGktY29sdW1uLWxpc3QtM3stbW96LWNvbHVtbi1jb3VudDozO2NvbHVtbi1jb3VudDozfS5tdWx0aS1jb2x1bW4tbGlzdC00LC5tdWx0aS1jb2x1bW4tbGlzdC01e3BhZGRpbmctbGVmdDowOy1tb3otY29sdW1uLWNvdW50OjQ7Y29sdW1uLWNvdW50OjQ7bGlzdC1zdHlsZS1wb3NpdGlvbjppbnNpZGV9Lm11bHRpLWNvbHVtbi1saXN0LTV7LW1vei1jb2x1bW4tY291bnQ6NTtjb2x1bW4tY291bnQ6NX0ubGF5b3V0LXNwbGl0LTIsLmxheW91dC1zcGxpdC0zLC5sYXlvdXQtc3BsaXQtNCwubGF5b3V0LXNwbGl0LTV7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3c7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjstbXMtZmxleC1hbGlnbjpzdHJldGNoO2FsaWduLWl0ZW1zOnN0cmV0Y2g7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX0ubGF5b3V0LXNwbGl0LTI+c2VjdGlvbnt3aWR0aDo1MCU7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MTt0ZXh0LWFsaWduOmNlbnRlcn0ubGF5b3V0LXNwbGl0LTM+c2VjdGlvbiwubGF5b3V0LXNwbGl0LTQ+c2VjdGlvbiwubGF5b3V0LXNwbGl0LTU+c2VjdGlvbnt3aWR0aDozMy4zMzMzMzMzMzMzMzMzMyU7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MTt0ZXh0LWFsaWduOmNlbnRlcn0ubGF5b3V0LXNwbGl0LTQ+c2VjdGlvbiwubGF5b3V0LXNwbGl0LTU+c2VjdGlvbnt3aWR0aDoyNSV9LmxheW91dC1zcGxpdC01PnNlY3Rpb257d2lkdGg6MjAlfUBrZXlmcmFtZXMgZmxvYXRpbmd7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCl9dG97dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTI1JSl9fUBrZXlmcmFtZXMgZmxvYXRlZC1lbGVtZW50LXNoYWRvd3swJXt0cmFuc2Zvcm06c2NhbGVYKDEpfXRve3RyYW5zZm9ybTpzY2FsZVgoLjUpfX1AbWVkaWEgc2NyZWVuey50cmFuc2l0aW9uLXNsaWRpbmcsLnRyYW5zaXRpb24tc3VidGxle292ZXJmbG93OmhpZGRlbn0uYmVzcG9rZS1zbGlkZSwudHJhbnNpdGlvbi1zbGlkaW5nIC5iZXNwb2tlLXNsaWRle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjRzIGVhc2Usb3BhY2l0eSAuNHMgZWFzZX0udHJhbnNpdGlvbi1zbGlkaW5nIC5iZXNwb2tlLWJlZm9yZXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMSUsMCwwKX0udHJhbnNpdGlvbi1zbGlkaW5nIC5iZXNwb2tlLWFmdGVye3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDElLDAsMCl9LmJlc3Bva2UtYmVmb3Jle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAlLDAsMCl9LmJlc3Bva2UtYWZ0ZXJ7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwJSwwLDApfS50cmFuc2l0aW9uLWdpYW50LXdoZWVse292ZXJmbG93OmhpZGRlbn0udHJhbnNpdGlvbi1naWFudC13aGVlbCAuYmVzcG9rZS1zbGlkZXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zaXRpb246dHJhbnNmb3JtIC40cyBlYXNlO3RyYW5zZm9ybS1vcmlnaW46NTAlIC0yNTAlfS50cmFuc2l0aW9uLWdpYW50LXdoZWVsIC5iZXNwb2tlLWJlZm9yZXt0cmFuc2Zvcm06cm90YXRlWig5MGRlZyl9LnRyYW5zaXRpb24tZ2lhbnQtd2hlZWwgLmJlc3Bva2UtYWZ0ZXJ7dHJhbnNmb3JtOnJvdGF0ZVooLTkwZGVnKX19LmxheW91dC10aXRsZS5iZXNwb2tlLXNsaWRle3RleHQtYWxpZ246Y2VudGVyO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LXBhY2s6ZGlzdHJpYnV0ZTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kfS5sYXlvdXQtdGl0bGUuYmVzcG9rZS1zbGlkZSBoMXtjb2xvcjojNmU4YWU0fS5sYXlvdXQtdGl0bGUuYmVzcG9rZS1zbGlkZSBoMntiYWNrZ3JvdW5kLWNvbG9yOiMwMGZkYzg7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO3BhZGRpbmc6MmVtIDA7bWFyZ2luOjFlbSAwIDB9LmxheW91dC10aXRsZS5iZXNwb2tlLXNsaWRlIGgyIHN0cm9uZ3tjb2xvcjojMDA3ZjY0fS5sYXlvdXQtc2VjdGlvbi1oZWFkZXIuYmVzcG9rZS1zbGlkZXtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXB9LmxheW91dC1zZWN0aW9uLWhlYWRlci5iZXNwb2tlLXNsaWRlOjphZnRlciwubGF5b3V0LXNlY3Rpb24taGVhZGVyLmJlc3Bva2Utc2xpZGU6OmJlZm9yZXtjb250ZW50OlxcXCIgXFxcIjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtkaXNwbGF5OmJsb2NrO3dpZHRoOjUwJTtoZWlnaHQ6MTAwJTt6LWluZGV4Oi0xfS5sYXlvdXQtc2VjdGlvbi1oZWFkZXIuYmVzcG9rZS1zbGlkZTo6YmVmb3Jle2xlZnQ6MDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LmxheW91dC1zZWN0aW9uLWhlYWRlci5iZXNwb2tlLXNsaWRlOjphZnRlcntyaWdodDowO2JhY2tncm91bmQtY29sb3I6IzAwZmRjOH0ubGF5b3V0LXNlY3Rpb24taGVhZGVyLmJlc3Bva2Utc2xpZGUgLmNvbnRlbnR7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxheW91dC1zZWN0aW9uLWhlYWRlci5iZXNwb2tlLXNsaWRlIC5jb250ZW50IGRkLC5sYXlvdXQtc2VjdGlvbi1oZWFkZXIuYmVzcG9rZS1zbGlkZSAuY29udGVudCBkdCwubGF5b3V0LXNlY3Rpb24taGVhZGVyLmJlc3Bva2Utc2xpZGUgLmNvbnRlbnQgbGksLmxheW91dC1zZWN0aW9uLWhlYWRlci5iZXNwb2tlLXNsaWRlIC5jb250ZW50IHB7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5sYXlvdXQtc2VjdGlvbi1oZWFkZXIuYmVzcG9rZS1zbGlkZSAuY29udGVudCBsaSwubGF5b3V0LXNlY3Rpb24taGVhZGVyLmJlc3Bva2Utc2xpZGUgLmNvbnRlbnQgcHtkaXNwbGF5OmlubGluZX0ubGF5b3V0LXNlY3Rpb24taGVhZGVyLmJlc3Bva2Utc2xpZGUgLmNvbnRlbnQgcDo6YWZ0ZXJ7Y29udGVudDpcXFwiIFxcXCI7ZGlzcGxheTpibG9jazttYXJnaW4tYm90dG9tOi41ZW19LmxheW91dC1zZWN0aW9uLWhlYWRlci5iZXNwb2tlLXNsaWRlIC5jb250ZW50OjphZnRlcntjb250ZW50OlxcXCIgXFxcIjtkaXNwbGF5OmJsb2NrO3dpZHRoOjNlbTtoZWlnaHQ6MXB4O2JvcmRlci1ib3R0b206M3B4IHNvbGlkICNmZmZ9LmxheW91dC1zZWN0aW9uLWhlYWRlci5iZXNwb2tlLXNsaWRlIC5jb250ZW50IGxpOjpiZWZvcmV7Y29udGVudDpcXFwiIFxcXCI7ZGlzcGxheTpsaXN0LWl0ZW07ZmxvYXQ6bGVmdH0ubGF5b3V0LXNlY3Rpb24taGVhZGVyLmJlc3Bva2Utc2xpZGUgLmNvbnRlbnQgbGk6OmFmdGVye2NvbnRlbnQ6XFxcIiBcXFwiO2Rpc3BsYXk6YmxvY2t9LmxheW91dC1zZWN0aW9uLWhlYWRlci5iZXNwb2tlLXNsaWRlPip7d2lkdGg6NTAlO3BhZGRpbmc6MCAxZW19LmxheW91dC1zZWN0aW9uLWhlYWRlci5iZXNwb2tlLXNsaWRlPm9sLC5sYXlvdXQtc2VjdGlvbi1oZWFkZXIuYmVzcG9rZS1zbGlkZT51bHtwYWRkaW5nLWxlZnQ6MmVtfS5sYXlvdXQtc2VjdGlvbi1oZWFkZXIuYmVzcG9rZS1zbGlkZSBoMSwubGF5b3V0LXNlY3Rpb24taGVhZGVyLmJlc3Bva2Utc2xpZGUgaDJ7bWFyZ2luOjA7cGFkZGluZzowO3RleHQtYWxpZ246Y2VudGVyfS5sYXlvdXQtc2VjdGlvbi1oZWFkZXIuYmVzcG9rZS1zbGlkZSBoMXtoZWlnaHQ6NzAlO2JveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nLXRvcDoyZW19LmxheW91dC1zZWN0aW9uLWhlYWRlci5iZXNwb2tlLXNsaWRlIGgye2hlaWdodDozMCV9LmxheW91dC0yLWNvbHVtbi1jb250ZW50LmJlc3Bva2Utc2xpZGUsLmxheW91dC1yZWd1bGFyLmJlc3Bva2Utc2xpZGV7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDstbXMtZmxleC1hbGlnbjpzdGFydDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O3BhZGRpbmc6MmVtfS5sYXlvdXQtcmVndWxhci5iZXNwb2tlLXNsaWRlIGgxLC5sYXlvdXQtcmVndWxhci5iZXNwb2tlLXNsaWRlIGgyLC5sYXlvdXQtcmVndWxhci5iZXNwb2tlLXNsaWRlIGgzLC5sYXlvdXQtcmVndWxhci5iZXNwb2tlLXNsaWRlIGg0LC5sYXlvdXQtcmVndWxhci5iZXNwb2tlLXNsaWRlIGg1LC5sYXlvdXQtcmVndWxhci5iZXNwb2tlLXNsaWRlIGg2e21hcmdpbjowO3BhZGRpbmc6MCAwIC41ZW19LmxheW91dC0yLWNvbHVtbi1jb250ZW50LmJlc3Bva2Utc2xpZGV7LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwOy1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93fS5sYXlvdXQtMi1jb2x1bW4tY29udGVudC5iZXNwb2tlLXNsaWRlIGgxLC5sYXlvdXQtMi1jb2x1bW4tY29udGVudC5iZXNwb2tlLXNsaWRlIGgyLC5sYXlvdXQtMi1jb2x1bW4tY29udGVudC5iZXNwb2tlLXNsaWRlIGgzLC5sYXlvdXQtMi1jb2x1bW4tY29udGVudC5iZXNwb2tlLXNsaWRlIGg0LC5sYXlvdXQtMi1jb2x1bW4tY29udGVudC5iZXNwb2tlLXNsaWRlIGg1LC5sYXlvdXQtMi1jb2x1bW4tY29udGVudC5iZXNwb2tlLXNsaWRlIGg2ey1tcy1mbGV4LXByZWZlcnJlZC1zaXplOjEwMCU7ZmxleC1iYXNpczoxMDAlfS5sYXlvdXQtMi1jb2x1bW4tY29udGVudC5iZXNwb2tlLXNsaWRlPiorKnt3aWR0aDo0OSU7bWFyZ2luLWxlZnQ6MSU7bWFyZ2luLXJpZ2h0OjB9LmxheW91dC0yLWNvbHVtbi1jb250ZW50LmJlc3Bva2Utc2xpZGU+Kis6Omxhc3QtY2hpbGR7bWFyZ2luLWxlZnQ6MH0ubGF5b3V0LWNlbnRlcmVkLmJlc3Bva2Utc2xpZGV7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9LmxheW91dC1tYWluLXBvaW50LmJlc3Bva2UtcGFyZW50LC5sYXlvdXQtbWFpbi1wb2ludC5iZXNwb2tlLXNsaWRle2JhY2tncm91bmQtY29sb3I6IzdjN2NlMH0ubGF5b3V0LW1haW4tcG9pbnQuYmVzcG9rZS1zbGlkZSBoMSwubGF5b3V0LW1haW4tcG9pbnQuYmVzcG9rZS1zbGlkZSBoMiwubGF5b3V0LW1haW4tcG9pbnQuYmVzcG9rZS1zbGlkZSBoMywubGF5b3V0LW1haW4tcG9pbnQuYmVzcG9rZS1zbGlkZSBoNCwubGF5b3V0LW1haW4tcG9pbnQuYmVzcG9rZS1zbGlkZSBoNSwubGF5b3V0LW1haW4tcG9pbnQuYmVzcG9rZS1zbGlkZSBoNntjb2xvcjojZmZmfUBtZWRpYSBzY3JlZW57LmJlc3Bva2Utc2NhbGUtcGFyZW50e3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO3otaW5kZXg6MTtwb2ludGVyLWV2ZW50czpub25lfS5iZXNwb2tlLXNjYWxlLXBhcmVudCAuYmVzcG9rZS1hY3RpdmV7cG9pbnRlci1ldmVudHM6YXV0b30uYmVzcG9rZS1idWxsZXR7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNpdGlvbjphbGwgLjRzIGVhc2V9LmJlc3Bva2UtYnVsbGV0LWluYWN0aXZle29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCg0MHB4LDAsMCk7dHJhbnNpdGlvbjphbGwgLjJzIGVhc2V9LmJlc3Bva2UtYnVsbGV0LW9mZiAuYmVzcG9rZS1idWxsZXQtaW5hY3RpdmV7ZGlzcGxheTpsaXN0LWl0ZW07b3BhY2l0eTppbml0aWFsO3RyYW5zZm9ybTppbml0aWFsfS5iZXNwb2tlLXByb2dyZXNzLXBhcmVudHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtoZWlnaHQ6M3B4O3otaW5kZXg6Mn0uYmVzcG9rZS1wcm9ncmVzcy1iYXJ7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCU7dHJhbnNpdGlvbjp3aWR0aCAuM3MgZWFzZX0uYmVzcG9rZS1wcm9ncmVzcy1iYXI6YmVmb3Jle2NvbnRlbnQ6XFxcIiBcXFwiO3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOiNhNmE2YTZ9LmJlc3Bva2UtcGFyZW50LC5iZXNwb2tlLXNjYWxlLXBhcmVudHtwZXJzcGVjdGl2ZTo5MDBweH0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGV7cG9zaXRpb246YWJzb2x1dGU7b3BhY2l0eToxO291dGxpbmU6NHB4IHNvbGlkIHNpbHZlcn0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGU6aG92ZXJ7b3V0bGluZS1jb2xvcjojNDY4MmI0fS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFjdGl2ZXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLC0yMDAwcHgpO291dGxpbmUtY29sb3I6IzQ2ODJiNDt6LWluZGV4OjEwMH0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlcjpub3QoLmJlc3Bva2UtYWZ0ZXItMSk6bm90KC5iZXNwb2tlLWFmdGVyLTIpOm5vdCguYmVzcG9rZS1hZnRlci0zKTpub3QoLmJlc3Bva2UtYWZ0ZXItNCk6bm90KC5iZXNwb2tlLWFmdGVyLTUpOm5vdCguYmVzcG9rZS1hZnRlci02KXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoNzYzNC42NjczMzg2NjkzNTRweCwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWJlZm9yZTpub3QoLmJlc3Bva2UtYmVmb3JlLTEpOm5vdCguYmVzcG9rZS1iZWZvcmUtMik6bm90KC5iZXNwb2tlLWJlZm9yZS0zKTpub3QoLmJlc3Bva2UtYmVmb3JlLTQpOm5vdCguYmVzcG9rZS1iZWZvcmUtNSk6bm90KC5iZXNwb2tlLWJlZm9yZS02KXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTc2MzQuNjY3MzM4NjY5MzU0cHgsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlci0xe2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3dpbGwtY2hhbmdlOnRyYW5zZm9ybTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTA5MC42NjY3NjI2NjcwNTA1cHgsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtMXtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDt3aWxsLWNoYW5nZTp0cmFuc2Zvcm07dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDkwLjY2Njc2MjY2NzA1MDVweCwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgyMTgxLjMzMzUyNTMzNDEwMXB4LDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjE4MS4zMzM1MjUzMzQxMDFweCwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTN7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgzMjcyLjAwMDI4ODAwMTE1MTZweCwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWJlZm9yZS0ze2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3dpbGwtY2hhbmdlOnRyYW5zZm9ybTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTMyNzIuMDAwMjg4MDAxMTUxNnB4LDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWZ0ZXItNHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDt3aWxsLWNoYW5nZTp0cmFuc2Zvcm07dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDQzNjIuNjY3MDUwNjY4MjAycHgsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtNHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDt3aWxsLWNoYW5nZTp0cmFuc2Zvcm07dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC00MzYyLjY2NzA1MDY2ODIwMnB4LDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWZ0ZXItNXtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDt3aWxsLWNoYW5nZTp0cmFuc2Zvcm07dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDU0NTMuMzMzODEzMzM1MjUzcHgsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtNXtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDt3aWxsLWNoYW5nZTp0cmFuc2Zvcm07dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC01NDUzLjMzMzgxMzMzNTI1M3B4LDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWZ0ZXItNntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDt3aWxsLWNoYW5nZTp0cmFuc2Zvcm07dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDY1NDQuMDAwNTc2MDAyMzAzcHgsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtNntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDt3aWxsLWNoYW5nZTp0cmFuc2Zvcm07dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC02NTQ0LjAwMDU3NjAwMjMwM3B4LDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLWJ1bGxldC1pbmFjdGl2ZXtkaXNwbGF5Omxpc3QtaXRlbTtvcGFjaXR5OmluaXRpYWw7dHJhbnNmb3JtOmluaXRpYWx9I2Jlc3Bva2Utc2VhcmNoe3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4OjE7b3BhY2l0eTowO2JhY2tncm91bmQtY29sb3I6cmdiYSgxMjgsMTI4LDEyOCwuMyk7dHJhbnNpdGlvbjpvcGFjaXR5IDEwMG1zIGVhc2Utb3V0fSNiZXNwb2tlLXNlYXJjaC5iZXNwb2tlLXNlYXJjaC1zZWFyY2hpbmd7b3BhY2l0eToxfSNiZXNwb2tlLXNlYXJjaC5iZXNwb2tlLXNlYXJjaC1zZWFyY2hpbmc+I2Jlc3Bva2Utc2VhcmNoLWlucHV0e2JvdHRvbTo1JX0jYmVzcG9rZS1zZWFyY2gtaW5wdXR7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1MCU7Ym90dG9tOjA7cG9pbnRlci1ldmVudHM6YWxsO3dpZHRoOjIwMHB4O21hcmdpbi1sZWZ0Oi0xMDBweDtwYWRkaW5nOjhweDtib3JkZXItcmFkaXVzOjEwcHg7Ym9yZGVyOjFweCBzb2xpZCBzaWx2ZXI7b3V0bGluZTpub25lO2NvbG9yOmdyYXk7Zm9udC1zaXplOngtbGFyZ2U7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC45KTt0cmFuc2l0aW9uOmJvdHRvbSAxNDBtcyBlYXNlLW91dH0uYmVzcG9rZS1zZWFyY2gtcmVzdWx0e2JhY2tncm91bmQtY29sb3I6I2ZmMH0uYmVzcG9rZS1zZWFyY2gtcmVzdWx0LWZvY3VzZWR7YmFja2dyb3VuZC1jb2xvcjpvcmFuZ2V9I2Jlc3Bva2Utc2VhcmNoLmJlc3Bva2Utc2VhcmNoLW5vLXJlc3VsdD4jYmVzcG9rZS1zZWFyY2gtaW5wdXR7Ym9yZGVyOjFweCBzb2xpZCAjOGIwMDAwO2NvbG9yOiM4YjAwMDB9I2Jlc3Bva2Utc2VhcmNoLXJlc3VsdHMtY291bnR7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjElO2xlZnQ6NTAlO21hcmdpbi1sZWZ0Oi0zMHB4O3dpZHRoOjYwcHg7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOnNtYWxsZXI7Y29sb3I6IzhhMmJlMjtmb250LXdlaWdodDo3MDB9fUBtZWRpYSBwcmludHsqe2JhY2tncm91bmQ6MCAwIWltcG9ydGFudH1ib2R5LGh0bWx7b3ZlcmZsb3c6dmlzaWJsZSFpbXBvcnRhbnR9Ym9keXttYXJnaW46MCFpbXBvcnRhbnQ7cGFkZGluZzouMWluIWltcG9ydGFudDtoZWlnaHQ6YXV0byFpbXBvcnRhbnR9Ym9keSxjb2Rle2xpbmUtaGVpZ2h0OjFlbSFpbXBvcnRhbnR9Y29kZSxvbCxwcmUsdWx7dGV4dC1hbGlnbjpsZWZ0IWltcG9ydGFudH1wcmUgY29kZXtib3JkZXI6MXB4IHNvbGlkICM2OTY5NjkhaW1wb3J0YW50O3BhZGRpbmc6NXB4IWltcG9ydGFudDtib3JkZXItcmFkaXVzOjRweCFpbXBvcnRhbnR9QHBhZ2V7bWFyZ2luOi43OWluIWltcG9ydGFudH0uYmVzcG9rZS1zbGlkZXtib3gtc2l6aW5nOmJvcmRlci1ib3ghaW1wb3J0YW50O2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50O2Zsb2F0OmxlZnQhaW1wb3J0YW50O2JvcmRlcjoycHggc29saWQgIzAwMCFpbXBvcnRhbnQ7dGV4dC1hbGlnbjpjZW50ZXIhaW1wb3J0YW50O21hcmdpbi10b3A6MCFpbXBvcnRhbnQ7bWFyZ2luLWxlZnQ6MCFpbXBvcnRhbnQ7cGFnZS1icmVhay1pbnNpZGU6YXZvaWQhaW1wb3J0YW50fS5iZXNwb2tlLXNsaWRlPip7em9vbTouNjUhaW1wb3J0YW50fS5iZXNwb2tlLXNsaWRlPiogKnt6b29tOi44NSFpbXBvcnRhbnR9LmJlc3Bva2Utc2xpZGU+aDE6b25seS1jaGlsZCwuYmVzcG9rZS1zbGlkZT5oMjpvbmx5LWNoaWxkLC5iZXNwb2tlLXNsaWRlPmgzOm9ubHktY2hpbGQsLmJlc3Bva2Utc2xpZGU+aDQ6b25seS1jaGlsZCwuYmVzcG9rZS1zbGlkZT5oNTpvbmx5LWNoaWxkLC5iZXNwb2tlLXNsaWRlPmg2Om9ubHktY2hpbGR7bWFyZ2luLXRvcDo0ZW0haW1wb3J0YW50fS5iZXNwb2tlLXNsaWRlIC5iZXNwb2tlLWJ1bGxldC1pbmFjdGl2ZXtvcGFjaXR5OjEhaW1wb3J0YW50O3RyYW5zZm9ybTpub25lIWltcG9ydGFudDt0cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50fS5iZXNwb2tlLXNsaWRlOm50aC1jaGlsZCg2biksLmJlc3Bva2Utc2xpZGU6bnRoLW9mLXR5cGUoNm4pe3BhZ2UtYnJlYWstYWZ0ZXI6YWx3YXlzIWltcG9ydGFudDticmVhay1hZnRlcjpwYWdlIWltcG9ydGFudH19QG1lZGlhIHByaW50IGFuZCAob3JpZW50YXRpb246cG9ydHJhaXQpey5iZXNwb2tlLXNsaWRle3dpZHRoOjIuOTE5NDcyNDQzMDAwMDAxaW4haW1wb3J0YW50O2hlaWdodDoyLjE4OTYwNDMzMjI1MDAwMWluIWltcG9ydGFudDttYXJnaW4tcmlnaHQ6LjMyNDM4NTgyN2luIWltcG9ydGFudDttYXJnaW4tYm90dG9tOi4zMjQzODU4MjdpbiFpbXBvcnRhbnR9LmJlc3Bva2Utc2xpZGU6bnRoLWNoaWxkKDJuKXttYXJnaW4tcmlnaHQ6MCFpbXBvcnRhbnR9LmJlc3Bva2UtcGFyZW50e3dpZHRoOjYuNDg3NzE2NTQwMDAwMDAxaW4haW1wb3J0YW50fWltZ3ttYXgtd2lkdGg6NS4yNDgwMTI5NzY0NzA1ODlpbiFpbXBvcnRhbnR9fUBtZWRpYSBwcmludCBhbmQgKG9yaWVudGF0aW9uOmxhbmRzY2FwZSl7LmJlc3Bva2Utc2xpZGV7d2lkdGg6Mi45NzM4NzQwMmluIWltcG9ydGFudDtoZWlnaHQ6Mi4yMzA0MDU1MTVpbiFpbXBvcnRhbnQ7bWFyZ2luLXJpZ2h0Oi4yOTczODc0MDJpbiFpbXBvcnRhbnQ7bWFyZ2luLWJvdHRvbTouMjk3Mzg3NDAyaW4haW1wb3J0YW50fS5iZXNwb2tlLXNsaWRlOm50aC1jaGlsZCgzbil7bWFyZ2luLXJpZ2h0OjAhaW1wb3J0YW50fS5iZXNwb2tlLXBhcmVudHt3aWR0aDo5LjkxMjkxMzRpbiFpbXBvcnRhbnR9aW1ne21heC13aWR0aDozLjQ5ODY3NTMxNzY0NzA1OWluIWltcG9ydGFudH19XFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9dGhlbWUuY3NzLm1hcCAqL1xcblwiLFxuICAgIGZvbnRzO1xuICBpZiAoISFvcHRpb25zLmluc2VydEZvbnRzKSB7XG4gICAgZm9udHMgPSBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbWF0aWNhK1NDOjQwMCw3MDB8U291cmNlK0NvZGUrUHJvOjQwMCw3MDApO1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWZvbnRzLmNzcy5tYXAgKi9cXG5cIjtcbiAgICBpbnNlcnRDc3MoZm9udHMsIHsgcHJlcGVuZDogdHJ1ZSB9KTtcbiAgfVxuICBpbnNlcnRDc3ModGhlbWUsIHsgcHJlcGVuZDogdHJ1ZSB9KTtcblxuICByZXR1cm4gZnVuY3Rpb24oZGVjaykge1xuICAgIGNsYXNzZXMoKShkZWNrKTtcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRlY2spIHtcbiAgICB2YXIgYWN0aXZlU2xpZGVJbmRleCxcbiAgICAgIGFjdGl2ZUJ1bGxldEluZGV4LFxuXG4gICAgICBidWxsZXRzID0gZGVjay5zbGlkZXMubWFwKGZ1bmN0aW9uKHNsaWRlKSB7XG4gICAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKHNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJyA/IG9wdGlvbnMgOiAnW2RhdGEtYmVzcG9rZS1idWxsZXRdJykpLCAwKTtcbiAgICAgIH0pLFxuXG4gICAgICBuZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBuZXh0U2xpZGVJbmRleCA9IGFjdGl2ZVNsaWRlSW5kZXggKyAxO1xuXG4gICAgICAgIGlmIChhY3RpdmVTbGlkZUhhc0J1bGxldEJ5T2Zmc2V0KDEpKSB7XG4gICAgICAgICAgYWN0aXZhdGVCdWxsZXQoYWN0aXZlU2xpZGVJbmRleCwgYWN0aXZlQnVsbGV0SW5kZXggKyAxKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoYnVsbGV0c1tuZXh0U2xpZGVJbmRleF0pIHtcbiAgICAgICAgICBhY3RpdmF0ZUJ1bGxldChuZXh0U2xpZGVJbmRleCwgMCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIHByZXYgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHByZXZTbGlkZUluZGV4ID0gYWN0aXZlU2xpZGVJbmRleCAtIDE7XG5cbiAgICAgICAgaWYgKGFjdGl2ZVNsaWRlSGFzQnVsbGV0QnlPZmZzZXQoLTEpKSB7XG4gICAgICAgICAgYWN0aXZhdGVCdWxsZXQoYWN0aXZlU2xpZGVJbmRleCwgYWN0aXZlQnVsbGV0SW5kZXggLSAxKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoYnVsbGV0c1twcmV2U2xpZGVJbmRleF0pIHtcbiAgICAgICAgICBhY3RpdmF0ZUJ1bGxldChwcmV2U2xpZGVJbmRleCwgYnVsbGV0c1twcmV2U2xpZGVJbmRleF0ubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGFjdGl2YXRlQnVsbGV0ID0gZnVuY3Rpb24oc2xpZGVJbmRleCwgYnVsbGV0SW5kZXgpIHtcbiAgICAgICAgYWN0aXZlU2xpZGVJbmRleCA9IHNsaWRlSW5kZXg7XG4gICAgICAgIGFjdGl2ZUJ1bGxldEluZGV4ID0gYnVsbGV0SW5kZXg7XG5cbiAgICAgICAgYnVsbGV0cy5mb3JFYWNoKGZ1bmN0aW9uKHNsaWRlLCBzKSB7XG4gICAgICAgICAgc2xpZGUuZm9yRWFjaChmdW5jdGlvbihidWxsZXQsIGIpIHtcbiAgICAgICAgICAgIGJ1bGxldC5jbGFzc0xpc3QuYWRkKCdiZXNwb2tlLWJ1bGxldCcpO1xuXG4gICAgICAgICAgICBpZiAocyA8IHNsaWRlSW5kZXggfHwgcyA9PT0gc2xpZGVJbmRleCAmJiBiIDw9IGJ1bGxldEluZGV4KSB7XG4gICAgICAgICAgICAgIGJ1bGxldC5jbGFzc0xpc3QuYWRkKCdiZXNwb2tlLWJ1bGxldC1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgYnVsbGV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Jlc3Bva2UtYnVsbGV0LWluYWN0aXZlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBidWxsZXQuY2xhc3NMaXN0LmFkZCgnYmVzcG9rZS1idWxsZXQtaW5hY3RpdmUnKTtcbiAgICAgICAgICAgICAgYnVsbGV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Jlc3Bva2UtYnVsbGV0LWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocyA9PT0gc2xpZGVJbmRleCAmJiBiID09PSBidWxsZXRJbmRleCkge1xuICAgICAgICAgICAgICBidWxsZXQuY2xhc3NMaXN0LmFkZCgnYmVzcG9rZS1idWxsZXQtY3VycmVudCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYnVsbGV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Jlc3Bva2UtYnVsbGV0LWN1cnJlbnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBhY3RpdmVTbGlkZUhhc0J1bGxldEJ5T2Zmc2V0ID0gZnVuY3Rpb24ob2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBidWxsZXRzW2FjdGl2ZVNsaWRlSW5kZXhdW2FjdGl2ZUJ1bGxldEluZGV4ICsgb2Zmc2V0XSAhPT0gdW5kZWZpbmVkO1xuICAgICAgfTtcblxuICAgIGRlY2sub24oJ25leHQnLCBuZXh0KTtcbiAgICBkZWNrLm9uKCdwcmV2JywgcHJldik7XG5cbiAgICBkZWNrLm9uKCdzbGlkZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGFjdGl2YXRlQnVsbGV0KGUuaW5kZXgsIDApO1xuICAgIH0pO1xuXG4gICAgYWN0aXZhdGVCdWxsZXQoMCwgMCk7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRlY2spIHtcbiAgICB2YXIgYWRkQ2xhc3MgPSBmdW5jdGlvbihlbCwgY2xzKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2Jlc3Bva2UtJyArIGNscyk7XG4gICAgICB9LFxuXG4gICAgICByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKGVsLCBjbHMpIHtcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lXG4gICAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cCgnYmVzcG9rZS0nICsgY2xzICsnKFxcXFxzfCQpJywgJ2cnKSwgJyAnKVxuICAgICAgICAgIC50cmltKCk7XG4gICAgICB9LFxuXG4gICAgICBkZWFjdGl2YXRlID0gZnVuY3Rpb24oZWwsIGluZGV4KSB7XG4gICAgICAgIHZhciBhY3RpdmVTbGlkZSA9IGRlY2suc2xpZGVzW2RlY2suc2xpZGUoKV0sXG4gICAgICAgICAgb2Zmc2V0ID0gaW5kZXggLSBkZWNrLnNsaWRlKCksXG4gICAgICAgICAgb2Zmc2V0Q2xhc3MgPSBvZmZzZXQgPiAwID8gJ2FmdGVyJyA6ICdiZWZvcmUnO1xuXG4gICAgICAgIFsnYmVmb3JlKC1cXFxcZCspPycsICdhZnRlcigtXFxcXGQrKT8nLCAnYWN0aXZlJywgJ2luYWN0aXZlJ10ubWFwKHJlbW92ZUNsYXNzLmJpbmQobnVsbCwgZWwpKTtcblxuICAgICAgICBpZiAoZWwgIT09IGFjdGl2ZVNsaWRlKSB7XG4gICAgICAgICAgWydpbmFjdGl2ZScsIG9mZnNldENsYXNzLCBvZmZzZXRDbGFzcyArICctJyArIE1hdGguYWJzKG9mZnNldCldLm1hcChhZGRDbGFzcy5iaW5kKG51bGwsIGVsKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICBhZGRDbGFzcyhkZWNrLnBhcmVudCwgJ3BhcmVudCcpO1xuICAgIGRlY2suc2xpZGVzLm1hcChmdW5jdGlvbihlbCkgeyBhZGRDbGFzcyhlbCwgJ3NsaWRlJyk7IH0pO1xuXG4gICAgZGVjay5vbignYWN0aXZhdGUnLCBmdW5jdGlvbihlKSB7XG4gICAgICBkZWNrLnNsaWRlcy5tYXAoZGVhY3RpdmF0ZSk7XG4gICAgICBhZGRDbGFzcyhlLnNsaWRlLCAnYWN0aXZlJyk7XG4gICAgICByZW1vdmVDbGFzcyhlLnNsaWRlLCAnaW5hY3RpdmUnKTtcbiAgICB9KTtcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZnVuY3Rpb24oZGVjaykge1xuICAgIHZhciBwYXJzZUhhc2ggPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSksXG4gICAgICAgIHNsaWRlTnVtYmVyT3JOYW1lID0gcGFyc2VJbnQoaGFzaCwgMTApO1xuXG4gICAgICBpZiAoaGFzaCkge1xuICAgICAgICBpZiAoc2xpZGVOdW1iZXJPck5hbWUpIHtcbiAgICAgICAgICBhY3RpdmF0ZVNsaWRlKHNsaWRlTnVtYmVyT3JOYW1lIC0gMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVjay5zbGlkZXMuZm9yRWFjaChmdW5jdGlvbihzbGlkZSwgaSkge1xuICAgICAgICAgICAgaWYgKHNsaWRlLmdldEF0dHJpYnV0ZSgnZGF0YS1iZXNwb2tlLWhhc2gnKSA9PT0gaGFzaCkge1xuICAgICAgICAgICAgICBhY3RpdmF0ZVNsaWRlKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBhY3RpdmF0ZVNsaWRlID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIHZhciBpbmRleFRvQWN0aXZhdGUgPSAtMSA8IGluZGV4ICYmIGluZGV4IDwgZGVjay5zbGlkZXMubGVuZ3RoID8gaW5kZXggOiAwO1xuICAgICAgaWYgKGluZGV4VG9BY3RpdmF0ZSAhPT0gZGVjay5zbGlkZSgpKSB7XG4gICAgICAgIGRlY2suc2xpZGUoaW5kZXhUb0FjdGl2YXRlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHBhcnNlSGFzaCgpO1xuXG4gICAgICBkZWNrLm9uKCdhY3RpdmF0ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIHNsaWRlTmFtZSA9IGUuc2xpZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWJlc3Bva2UtaGFzaCcpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHNsaWRlTmFtZSB8fCBlLmluZGV4ICsgMTtcbiAgICAgIH0pO1xuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHBhcnNlSGFzaCk7XG4gICAgfSwgMCk7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHJldHVybiBmdW5jdGlvbihkZWNrKSB7XG4gICAgdmFyIGlzSG9yaXpvbnRhbCA9IG9wdGlvbnMgIT09ICd2ZXJ0aWNhbCc7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGUud2hpY2ggPT0gMzQgfHwgLy8gUEFHRSBET1dOXG4gICAgICAgIChlLndoaWNoID09IDMyICYmICFlLnNoaWZ0S2V5KSB8fCAvLyBTUEFDRSBXSVRIT1VUIFNISUZUXG4gICAgICAgIChpc0hvcml6b250YWwgJiYgZS53aGljaCA9PSAzOSkgfHwgLy8gUklHSFRcbiAgICAgICAgKCFpc0hvcml6b250YWwgJiYgZS53aGljaCA9PSA0MCkgLy8gRE9XTlxuICAgICAgKSB7IGRlY2submV4dCgpOyB9XG5cbiAgICAgIGlmIChlLndoaWNoID09IDMzIHx8IC8vIFBBR0UgVVBcbiAgICAgICAgKGUud2hpY2ggPT0gMzIgJiYgZS5zaGlmdEtleSkgfHwgLy8gU1BBQ0UgKyBTSElGVFxuICAgICAgICAoaXNIb3Jpem9udGFsICYmIGUud2hpY2ggPT0gMzcpIHx8IC8vIExFRlRcbiAgICAgICAgKCFpc0hvcml6b250YWwgJiYgZS53aGljaCA9PSAzOCkgLy8gVVBcbiAgICAgICkgeyBkZWNrLnByZXYoKTsgfVxuICAgIH0pO1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRlY2spIHtcbiAgICB2YXIgcHJvZ3Jlc3NQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgIHByb2dyZXNzQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICBwcm9wID0gb3B0aW9ucyA9PT0gJ3ZlcnRpY2FsJyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHByb2dyZXNzUGFyZW50LmNsYXNzTmFtZSA9ICdiZXNwb2tlLXByb2dyZXNzLXBhcmVudCc7XG4gICAgcHJvZ3Jlc3NCYXIuY2xhc3NOYW1lID0gJ2Jlc3Bva2UtcHJvZ3Jlc3MtYmFyJztcbiAgICBwcm9ncmVzc1BhcmVudC5hcHBlbmRDaGlsZChwcm9ncmVzc0Jhcik7XG4gICAgZGVjay5wYXJlbnQuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NQYXJlbnQpO1xuXG4gICAgZGVjay5vbignYWN0aXZhdGUnLCBmdW5jdGlvbihlKSB7XG4gICAgICBwcm9ncmVzc0Jhci5zdHlsZVtwcm9wXSA9IChlLmluZGV4ICogMTAwIC8gKGRlY2suc2xpZGVzLmxlbmd0aCAtIDEpKSArICclJztcbiAgICB9KTtcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRlY2spIHtcbiAgICB2YXIgcGFyZW50ID0gZGVjay5wYXJlbnQsXG4gICAgICBjdXJyZW50U2xpZGUgPSBkZWNrLnNsaWRlc1tkZWNrLnNsaWRlKCldLFxuICAgICAgc2xpZGVIZWlnaHQgPSBjdXJyZW50U2xpZGUub2Zmc2V0SGVpZ2h0LFxuICAgICAgc2xpZGVXaWR0aCA9IGN1cnJlbnRTbGlkZS5vZmZzZXRXaWR0aCxcbiAgICAgIHVzZVpvb20gPSBvcHRpb25zID09PSAnem9vbScgfHwgKCd6b29tJyBpbiBwYXJlbnQuc3R5bGUgJiYgb3B0aW9ucyAhPT0gJ3RyYW5zZm9ybScpLFxuXG4gICAgICBpbm5lcldyYXAgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIHZhciBpbm5lcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW5uZXJXcmFwcGVyLmNsYXNzTmFtZSA9ICdiZXNwb2tlLXNjYWxlLXBhcmVudCc7XG4gICAgICAgIHdoaWxlIChlbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpbm5lcldyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5jaGlsZHJlblswXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChpbm5lcldyYXBwZXIpO1xuICAgICAgICByZXR1cm4gaW5uZXJXcmFwcGVyO1xuICAgICAgfSxcblxuICAgICAgZWxlbWVudCA9IHVzZVpvb20gPyBwYXJlbnQgOiBpbm5lcldyYXAocGFyZW50KSxcblxuICAgICAgdHJhbnNmb3JtUHJvcGVydHkgPSAoZnVuY3Rpb24ocHJvcGVydHkpIHtcbiAgICAgICAgdmFyIHByZWZpeGVzID0gJ01veiBXZWJraXQgTyBtcycuc3BsaXQoJyAnKTtcbiAgICAgICAgcmV0dXJuIHByZWZpeGVzLnJlZHVjZShmdW5jdGlvbihjdXJyZW50UHJvcGVydHksIHByZWZpeCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeCArIHByb3BlcnR5IGluIHBhcmVudC5zdHlsZSA/IHByZWZpeCArIHByb3BlcnR5IDogY3VycmVudFByb3BlcnR5O1xuICAgICAgICAgIH0sIHByb3BlcnR5LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfSgnVHJhbnNmb3JtJykpLFxuXG4gICAgICBzY2FsZSA9IHVzZVpvb20gP1xuICAgICAgICBmdW5jdGlvbihyYXRpbywgZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuem9vbSA9IHJhdGlvO1xuICAgICAgICB9IDpcbiAgICAgICAgZnVuY3Rpb24ocmF0aW8sIGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9ICdzY2FsZSgnICsgcmF0aW8gKyAnKSc7XG4gICAgICAgIH0sXG5cbiAgICAgIHNjYWxlQWxsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB4U2NhbGUgPSBwYXJlbnQub2Zmc2V0V2lkdGggLyBzbGlkZVdpZHRoLFxuICAgICAgICAgIHlTY2FsZSA9IChwYXJlbnQub2Zmc2V0SGVpZ2h0IC8gc2xpZGVIZWlnaHQpIHx8IDA7XG5cbiAgICAgICAgc2NhbGUoTWF0aC5taW4oeFNjYWxlLCB5U2NhbGUpLCBlbGVtZW50KTtcbiAgICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2NhbGVBbGwpO1xuICAgIHNjYWxlQWxsKCk7XG4gIH07XG5cbn07XG4iLCIvKiEgYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgdjEuMC4wIMKpIDIwMTYgRmzDoXZpbyBDb3V0aW5obywgTUlUIExpY2Vuc2UgKi9cbiFmdW5jdGlvbihlKXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz1lKCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGUpO2Vsc2V7dmFyIHM7cz1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMscz1zLmJlc3Bva2V8fChzLmJlc3Bva2U9e30pLHM9cy5wbHVnaW5zfHwocy5wbHVnaW5zPXt9KSxzLnNpbXBsZU92ZXJ2aWV3PWUoKX19KGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uIGUocyxvLHQpe2Z1bmN0aW9uIHIobixwKXtpZighb1tuXSl7aWYoIXNbbl0pe3ZhciBhPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIXAmJmEpcmV0dXJuIGEobiwhMCk7aWYoaSlyZXR1cm4gaShuLCEwKTt2YXIgbD1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK24rXCInXCIpO3Rocm93IGwuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixsfXZhciBiPW9bbl09e2V4cG9ydHM6e319O3Nbbl1bMF0uY2FsbChiLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG89c1tuXVsxXVtlXTtyZXR1cm4gcihvP286ZSl9LGIsYi5leHBvcnRzLGUscyxvLHQpfXJldHVybiBvW25dLmV4cG9ydHN9Zm9yKHZhciBpPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsbj0wO248dC5sZW5ndGg7bisrKXIodFtuXSk7cmV0dXJuIHJ9KHsxOltmdW5jdGlvbihlLHMsbyl7dmFyIHQ9ZShcImluc2VydC1jc3NcIikscj1mdW5jdGlvbihlLHMpe3JldHVybiBzPVwib2JqZWN0XCI9PXR5cGVvZiBzP3M6e30sT2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbihvKXtzW29dPXNbb118fGVbb119KSxzfSxpPWZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlP2UudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApOmV9O3MuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gZT1yKHthY3RpdmF0aW9uS2V5OjI3LGluc2VydFN0eWxlczohMH0sZSksZS5hY3RpdmF0aW9uS2V5PWkoZS5hY3RpdmF0aW9uS2V5KSxmdW5jdGlvbihzKXt2YXIgbyxyLGksbixwLGE7bz1mdW5jdGlvbigpe3Mub24oXCJhY3RpdmF0ZVwiLG8pKCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsciwhMSk7dmFyIGk9XCIuYmVzcG9rZS1wYXJlbnR7LXdlYmtpdC1wZXJzcGVjdGl2ZTo5MDBweDtwZXJzcGVjdGl2ZTo5MDBweH0uYmVzcG9rZS1wYXJlbnQgLmJlc3Bva2Utc2xpZGV7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0sb3BhY2l0eTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSxvcGFjaXR5LC13ZWJraXQtdHJhbnNmb3JtfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsLTIwMDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwtMjAwMHB4KTtvdXRsaW5lOjRweCBzb2xpZCBzaWx2ZXI7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4yKTtvcGFjaXR5OmluaXRpYWx9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWN0aXZlLC5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZTpob3ZlcntvdXRsaW5lLWNvbG9yOiM0NjgyYjR9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3Jle2Rpc3BsYXk6bm9uZTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNjMwJSwwLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNjMwJSwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVye2Rpc3BsYXk6bm9uZTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCg2MzAlLDAsLTIwMDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDYzMCUsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlci0xLC5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTIsLmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWZ0ZXItMywuYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlci00LC5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTUsLmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTEsLmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTIsLmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTMsLmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTQsLmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTV7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTF7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwNSUsMCwtMjAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwNSUsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtMnstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjEwJSwwLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjEwJSwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWJlZm9yZS0zey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0zMTUlLDAsLTIwMDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0zMTUlLDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTR7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTQyMCUsMCwtMjAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTQyMCUsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtNXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNTI1JSwwLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNTI1JSwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTF7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTA1JSwwLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDUlLDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWZ0ZXItMnstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgyMTAlLDAsLTIwMDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIxMCUsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlci0zey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDMxNSUsMCwtMjAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMzE1JSwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTR7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoNDIwJSwwLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCg0MjAlLDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWZ0ZXItNXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCg1MjUlLDAsLTIwMDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDUyNSUsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2UtYnVsbGV0LWluYWN0aXZle2Rpc3BsYXk6bGlzdC1pdGVtO29wYWNpdHk6aW5pdGlhbDstd2Via2l0LXRyYW5zZm9ybTppbml0aWFsO3RyYW5zZm9ybTppbml0aWFsfVwiO2UuaW5zZXJ0U3R5bGVzJiZ0KGkpLGE9cy5wYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXdcIiksYSYmU2ltcGxlT3ZlcnZpZXcoKX0saT1mdW5jdGlvbigpe3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLHIsITEpfSxuPWZ1bmN0aW9uKGUpe3ZhciBvO3JldHVybiBhPyhvPXMuc2xpZGUoKStlLG8+PTAmJm88cy5zbGlkZXMubGVuZ3RoJiZzLnNsaWRlKG8pLCExKTp2b2lkIDB9LHI9ZnVuY3Rpb24ocyl7c3dpdGNoKHMud2hpY2gpe2Nhc2UgZS5hY3RpdmF0aW9uS2V5OnAoKX19LHA9ZnVuY3Rpb24oZSl7YT1cImJvb2xlYW5cIj09dHlwZW9mIGU/ZTohYSxzLnBhcmVudC5jbGFzc0xpc3QudG9nZ2xlKFwiYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXdcIixhKX0scy5vbihcImFjdGl2YXRlXCIsbykscy5vbihcImRlc3Ryb3lcIixpKSxzLm9uKFwic2ltcGxlLW92ZXJ2aWV3LmVuYWJsZVwiLHAuYmluZChudWxsLCEwKSkscy5vbihcInNpbXBsZS1vdmVydmlldy5kaXNhYmxlXCIscC5iaW5kKG51bGwsITEpKSxzLm9uKFwic2ltcGxlLW92ZXJ2aWV3LnRvZ2dsZVwiLHAuYmluZChudWxsKSkscy5vbihcInByZXZcIixuLmJpbmQobnVsbCwtMSkpLHMub24oXCJuZXh0XCIsbi5iaW5kKG51bGwsMSkpfX19LHtcImluc2VydC1jc3NcIjoyfV0sMjpbZnVuY3Rpb24oZSxzLG8pe3ZhciB0PXt9O3MuZXhwb3J0cz1mdW5jdGlvbihlLHMpe2lmKCF0W2VdKXt0W2VdPSEwO3ZhciBvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtvLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInRleHQvY3NzXCIpLFwidGV4dENvbnRlbnRcImluIG8/by50ZXh0Q29udGVudD1lOm8uc3R5bGVTaGVldC5jc3NUZXh0PWU7dmFyIHI9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO3MmJnMucHJlcGVuZD9yLmluc2VydEJlZm9yZShvLHIuY2hpbGROb2Rlc1swXSk6ci5hcHBlbmRDaGlsZChvKX19fSx7fV19LHt9LFsxXSkoMSl9KTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZnVuY3Rpb24oZGVjaykge1xuICAgIHZhciBtb2RpZnlTdGF0ZSA9IGZ1bmN0aW9uKG1ldGhvZCwgZXZlbnQpIHtcbiAgICAgIHZhciBhdHRyID0gZXZlbnQuc2xpZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWJlc3Bva2Utc3RhdGUnKTtcblxuICAgICAgaWYgKGF0dHIpIHtcbiAgICAgICAgYXR0ci5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICBkZWNrLnBhcmVudC5jbGFzc0xpc3RbbWV0aG9kXShzdGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBkZWNrLm9uKCdhY3RpdmF0ZScsIG1vZGlmeVN0YXRlLmJpbmQobnVsbCwgJ2FkZCcpKTtcbiAgICBkZWNrLm9uKCdkZWFjdGl2YXRlJywgbW9kaWZ5U3RhdGUuYmluZChudWxsLCAncmVtb3ZlJykpO1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICByZXR1cm4gZnVuY3Rpb24oZGVjaykge1xuICAgIHZhciBheGlzID0gb3B0aW9ucyA9PSAndmVydGljYWwnID8gJ1knIDogJ1gnLFxuICAgICAgc3RhcnRQb3NpdGlvbixcbiAgICAgIGRlbHRhO1xuXG4gICAgZGVjay5wYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChlLnRvdWNoZXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgc3RhcnRQb3NpdGlvbiA9IGUudG91Y2hlc1swXVsncGFnZScgKyBheGlzXTtcbiAgICAgICAgZGVsdGEgPSAwO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGVjay5wYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPT0gMSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRlbHRhID0gZS50b3VjaGVzWzBdWydwYWdlJyArIGF4aXNdIC0gc3RhcnRQb3NpdGlvbjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRlY2sucGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoTWF0aC5hYnMoZGVsdGEpID4gNTApIHtcbiAgICAgICAgZGVja1tkZWx0YSA+IDAgPyAncHJldicgOiAnbmV4dCddKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59O1xuIiwidmFyIGZyb20gPSBmdW5jdGlvbihvcHRzLCBwbHVnaW5zKSB7XG4gIHZhciBwYXJlbnQgPSAob3B0cy5wYXJlbnQgfHwgb3B0cykubm9kZVR5cGUgPT09IDEgPyAob3B0cy5wYXJlbnQgfHwgb3B0cykgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdHMucGFyZW50IHx8IG9wdHMpLFxuICAgIHNsaWRlcyA9IFtdLmZpbHRlci5jYWxsKHR5cGVvZiBvcHRzLnNsaWRlcyA9PT0gJ3N0cmluZycgPyBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChvcHRzLnNsaWRlcykgOiAob3B0cy5zbGlkZXMgfHwgcGFyZW50LmNoaWxkcmVuKSwgZnVuY3Rpb24oZWwpIHsgcmV0dXJuIGVsLm5vZGVOYW1lICE9PSAnU0NSSVBUJzsgfSksXG4gICAgYWN0aXZlU2xpZGUgPSBzbGlkZXNbMF0sXG4gICAgbGlzdGVuZXJzID0ge30sXG5cbiAgICBhY3RpdmF0ZSA9IGZ1bmN0aW9uKGluZGV4LCBjdXN0b21EYXRhKSB7XG4gICAgICBpZiAoIXNsaWRlc1tpbmRleF0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmaXJlKCdkZWFjdGl2YXRlJywgY3JlYXRlRXZlbnREYXRhKGFjdGl2ZVNsaWRlLCBjdXN0b21EYXRhKSk7XG4gICAgICBhY3RpdmVTbGlkZSA9IHNsaWRlc1tpbmRleF07XG4gICAgICBmaXJlKCdhY3RpdmF0ZScsIGNyZWF0ZUV2ZW50RGF0YShhY3RpdmVTbGlkZSwgY3VzdG9tRGF0YSkpO1xuICAgIH0sXG5cbiAgICBzbGlkZSA9IGZ1bmN0aW9uKGluZGV4LCBjdXN0b21EYXRhKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBmaXJlKCdzbGlkZScsIGNyZWF0ZUV2ZW50RGF0YShzbGlkZXNbaW5kZXhdLCBjdXN0b21EYXRhKSkgJiYgYWN0aXZhdGUoaW5kZXgsIGN1c3RvbURhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNsaWRlcy5pbmRleE9mKGFjdGl2ZVNsaWRlKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RlcCA9IGZ1bmN0aW9uKG9mZnNldCwgY3VzdG9tRGF0YSkge1xuICAgICAgdmFyIHNsaWRlSW5kZXggPSBzbGlkZXMuaW5kZXhPZihhY3RpdmVTbGlkZSkgKyBvZmZzZXQ7XG5cbiAgICAgIGZpcmUob2Zmc2V0ID4gMCA/ICduZXh0JyA6ICdwcmV2JywgY3JlYXRlRXZlbnREYXRhKGFjdGl2ZVNsaWRlLCBjdXN0b21EYXRhKSkgJiYgYWN0aXZhdGUoc2xpZGVJbmRleCwgY3VzdG9tRGF0YSk7XG4gICAgfSxcblxuICAgIG9uID0gZnVuY3Rpb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgKGxpc3RlbmVyc1tldmVudE5hbWVdIHx8IChsaXN0ZW5lcnNbZXZlbnROYW1lXSA9IFtdKSkucHVzaChjYWxsYmFjayk7XG4gICAgICByZXR1cm4gb2ZmLmJpbmQobnVsbCwgZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgfSxcblxuICAgIG9mZiA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgIGxpc3RlbmVyc1tldmVudE5hbWVdID0gKGxpc3RlbmVyc1tldmVudE5hbWVdIHx8IFtdKS5maWx0ZXIoZnVuY3Rpb24obGlzdGVuZXIpIHsgcmV0dXJuIGxpc3RlbmVyICE9PSBjYWxsYmFjazsgfSk7XG4gICAgfSxcblxuICAgIGZpcmUgPSBmdW5jdGlvbihldmVudE5hbWUsIGV2ZW50RGF0YSkge1xuICAgICAgcmV0dXJuIChsaXN0ZW5lcnNbZXZlbnROYW1lXSB8fCBbXSlcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbihub3RDYW5jZWxsZWQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgcmV0dXJuIG5vdENhbmNlbGxlZCAmJiBjYWxsYmFjayhldmVudERhdGEpICE9PSBmYWxzZTtcbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgfSxcblxuICAgIGNyZWF0ZUV2ZW50RGF0YSA9IGZ1bmN0aW9uKGVsLCBldmVudERhdGEpIHtcbiAgICAgIGV2ZW50RGF0YSA9IGV2ZW50RGF0YSB8fCB7fTtcbiAgICAgIGV2ZW50RGF0YS5pbmRleCA9IHNsaWRlcy5pbmRleE9mKGVsKTtcbiAgICAgIGV2ZW50RGF0YS5zbGlkZSA9IGVsO1xuICAgICAgcmV0dXJuIGV2ZW50RGF0YTtcbiAgICB9LFxuXG4gICAgZGVjayA9IHtcbiAgICAgIG9uOiBvbixcbiAgICAgIG9mZjogb2ZmLFxuICAgICAgZmlyZTogZmlyZSxcbiAgICAgIHNsaWRlOiBzbGlkZSxcbiAgICAgIG5leHQ6IHN0ZXAuYmluZChudWxsLCAxKSxcbiAgICAgIHByZXY6IHN0ZXAuYmluZChudWxsLCAtMSksXG4gICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgIHNsaWRlczogc2xpZGVzXG4gICAgfTtcblxuICAocGx1Z2lucyB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbihwbHVnaW4pIHtcbiAgICBwbHVnaW4oZGVjayk7XG4gIH0pO1xuXG4gIGFjdGl2YXRlKDApO1xuXG4gIHJldHVybiBkZWNrO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZyb206IGZyb21cbn07XG4iLCJ2YXIgY29udGFpbmVycyA9IFtdOyAvLyB3aWxsIHN0b3JlIGNvbnRhaW5lciBIVE1MRWxlbWVudCByZWZlcmVuY2VzXG52YXIgc3R5bGVFbGVtZW50cyA9IFtdOyAvLyB3aWxsIHN0b3JlIHtwcmVwZW5kOiBIVE1MRWxlbWVudCwgYXBwZW5kOiBIVE1MRWxlbWVudH1cblxudmFyIHVzYWdlID0gJ2luc2VydC1jc3M6IFlvdSBuZWVkIHRvIHByb3ZpZGUgYSBDU1Mgc3RyaW5nLiBVc2FnZTogaW5zZXJ0Q3NzKGNzc1N0cmluZ1ssIG9wdGlvbnNdKS4nO1xuXG5mdW5jdGlvbiBpbnNlcnRDc3MoY3NzLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICBpZiAoY3NzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHVzYWdlKTtcbiAgICB9XG5cbiAgICB2YXIgcG9zaXRpb24gPSBvcHRpb25zLnByZXBlbmQgPT09IHRydWUgPyAncHJlcGVuZCcgOiAnYXBwZW5kJztcbiAgICB2YXIgY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXIgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY29udGFpbmVyIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xuICAgIHZhciBjb250YWluZXJJZCA9IGNvbnRhaW5lcnMuaW5kZXhPZihjb250YWluZXIpO1xuXG4gICAgLy8gZmlyc3QgdGltZSB3ZSBzZWUgdGhpcyBjb250YWluZXIsIGNyZWF0ZSB0aGUgbmVjZXNzYXJ5IGVudHJpZXNcbiAgICBpZiAoY29udGFpbmVySWQgPT09IC0xKSB7XG4gICAgICAgIGNvbnRhaW5lcklkID0gY29udGFpbmVycy5wdXNoKGNvbnRhaW5lcikgLSAxO1xuICAgICAgICBzdHlsZUVsZW1lbnRzW2NvbnRhaW5lcklkXSA9IHt9O1xuICAgIH1cblxuICAgIC8vIHRyeSB0byBnZXQgdGhlIGNvcnJlcG9uZGluZyBjb250YWluZXIgKyBwb3NpdGlvbiBzdHlsZUVsZW1lbnQsIGNyZWF0ZSBpdCBvdGhlcndpc2VcbiAgICB2YXIgc3R5bGVFbGVtZW50O1xuXG4gICAgaWYgKHN0eWxlRWxlbWVudHNbY29udGFpbmVySWRdICE9PSB1bmRlZmluZWQgJiYgc3R5bGVFbGVtZW50c1tjb250YWluZXJJZF1bcG9zaXRpb25dICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3R5bGVFbGVtZW50ID0gc3R5bGVFbGVtZW50c1tjb250YWluZXJJZF1bcG9zaXRpb25dO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlRWxlbWVudCA9IHN0eWxlRWxlbWVudHNbY29udGFpbmVySWRdW3Bvc2l0aW9uXSA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ3ByZXBlbmQnKSB7XG4gICAgICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgY29udGFpbmVyLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzdHJpcCBwb3RlbnRpYWwgVVRGLTggQk9NIGlmIGNzcyB3YXMgcmVhZCBmcm9tIGEgZmlsZVxuICAgIGlmIChjc3MuY2hhckNvZGVBdCgwKSA9PT0gMHhGRUZGKSB7IGNzcyA9IGNzcy5zdWJzdHIoMSwgY3NzLmxlbmd0aCk7IH1cblxuICAgIC8vIGFjdHVhbGx5IGFkZCB0aGUgc3R5bGVzaGVldFxuICAgIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ICs9IGNzc1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlRWxlbWVudC50ZXh0Q29udGVudCArPSBjc3M7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlRWxlbWVudDtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCgpIHtcbiAgICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gICAgcmV0dXJuIHN0eWxlRWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRDc3M7XG5tb2R1bGUuZXhwb3J0cy5pbnNlcnRDc3MgPSBpbnNlcnRDc3M7XG4iXX0=
