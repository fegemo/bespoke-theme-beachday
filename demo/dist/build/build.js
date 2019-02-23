(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const bespoke = require('bespoke'),
  beachday = require('../../lib/bespoke-theme-beachday.js'),
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
    deck.parent.style.visibility = 'visible';
  }
]);

},{"../../lib/bespoke-theme-beachday.js":2,"bespoke":12,"bespoke-bullets":3,"bespoke-hash":5,"bespoke-keys":6,"bespoke-progress":7,"bespoke-scale":8,"bespoke-simple-overview":9,"bespoke-state":10,"bespoke-touch":11}],2:[function(require,module,exports){

var classes = require('bespoke-classes');
var insertCss = require('insert-css');

module.exports = function(options) {
  options = options || { insertFonts: true };
  var theme = "/*! normalize.css v3.0.0 | MIT License | git.io/normalize */\n@-webkit-keyframes floating{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-25%);transform:translateY(-25%)}}@keyframes floating{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-25%);transform:translateY(-25%)}}@-webkit-keyframes floated-element-shadow{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform:scaleX(.5);transform:scaleX(.5)}}@keyframes floated-element-shadow{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform:scaleX(.5);transform:scaleX(.5)}}@-webkit-keyframes bouncing-left{to{-webkit-transform:translateX(5%) scaleX(.96);transform:translateX(5%) scaleX(.96)}}@keyframes bouncing-left{to{-webkit-transform:translateX(5%) scaleX(.96);transform:translateX(5%) scaleX(.96)}}@-webkit-keyframes circling{0%{-webkit-transform:rotate(0turn) translate(180px) rotate(0turn);transform:rotate(0turn) translate(180px) rotate(0turn)}to{-webkit-transform:rotate(1turn) translate(180px) rotate(-1turn);transform:rotate(1turn) translate(180px) rotate(-1turn)}}@keyframes circling{0%{-webkit-transform:rotate(0turn) translate(180px) rotate(0turn);transform:rotate(0turn) translate(180px) rotate(0turn)}to{-webkit-transform:rotate(1turn) translate(180px) rotate(-1turn);transform:rotate(1turn) translate(180px) rotate(-1turn)}}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body,figure.embedded-caption p{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0;color:#db4437;text-decoration:none}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b{font-weight:700}dfn{font-style:italic}h1,mark{color:#000}h1{font-family:'Amatica SC',cursive;font-size:3.5em}mark{background:#ff0}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,pre,samp{font-family:monospace,monospace}pre,samp{font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup,strong{font-weight:700}table{border-collapse:collapse;border-spacing:0;border:2px solid gray}td,th{padding:.3em .5em;border:1px solid gray}*{-webkit-box-sizing:border-box;box-sizing:border-box}@media screen{.bespoke-parent{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;background-color:#fff;color:#252525;font-size:24px}.bespoke-parent:not(.emphatic){-webkit-transition:background-color 400ms ease;transition:background-color 400ms ease}.bespoke-slide{position:absolute;width:1066.6666666666665px;height:600px;top:50%;left:50%;margin-left:-533.3333333333333px;margin-top:-300px;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.bespoke-inactive{opacity:0;pointer-events:none}.bespoke-inactive .bespoke-bullet-inactive{-webkit-transition:opacity .4s ease;transition:opacity .4s ease}.bespoke-inactive:not(.bespoke-after-1):not(.bespoke-before-1):not(.bespoke-after-2):not(.bespoke-before-2){display:none}.emphatic{background-color:#7c7ce0}.emphatic,.emphatic h1,.emphatic h2,.emphatic h3,.emphatic h4,.emphatic h5,.emphatic h6{color:#fff}.emphatic strong{color:#38088e}}h2,h3,h4,h5,h6{font-size:1.5em;font-family:'Source Code Pro',monospace;color:#000}h3,h4,h5,h6{font-size:1.25em}h4,h5,h6{font-size:1em}h1,h2,h3,h4,h5,h6{font-weight:400;margin:0 0 .25em}li,p{font-size:24px;line-height:1.5em}strong{color:#00b18c}article{font-family:'Source Code Pro',monospace}a:hover{text-decoration:underline}code{font-size:.75em;background-color:#ddd;color:inherit;border-radius:3px}pre>code{font-size:.83333em;color:inherit}pre>code code{color:#000}pre{color:#fff;background:#333;border-radius:.15em;max-width:1026.6666666666665px}pre code span{word-wrap:break-word;word-break:break-all}h1>code,h2>code,h3>code,h4>code,h5>code,h6>code,pre>code{background-color:inherit;border-radius:inherit}dd,dt{margin-bottom:.5em}dt{float:left;clear:left;width:10em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:right;font-weight:700;padding-right:1em;position:relative}dd{margin-left:10.5em}dl.width-40>dt{width:40%}dl.width-40>dd{margin-left:42%}dl.width-50>dt{width:50%}dl.width-50>dd{margin-left:52%}del{color:gray}tr{background-color:rgba(255,255,255,.7)}tr:nth-of-type(even){background-color:rgba(191,213,200,.7)}th{color:#fff;background-color:#333}blockquote{margin:.25em 0;padding:.25em 40px;background:#f5f5f5;-webkit-box-shadow:4px 4px 4px silver;box-shadow:4px 4px 4px silver;line-height:1.45;font-size:18px;font-family:Georgia,serif;font-style:italic;color:#383838;border:1px solid silver}blockquote.centered{margin-left:auto;margin-right:auto}blockquote>p{margin:.5em auto}blockquote::before{content:\"\\201C\";display:block;position:absolute;left:-.25em;top:-.25em;font-size:80px;color:#7a7a7a}blockquote cite{display:block;margin-top:5px;font-size:75%;color:#999}blockquote cite::before{content:\"\\2014 \\2009\"}kbd{padding:.1em .6em;font-size:.8em;border:1px solid #ccc;font-family:Consolas,Menlo,Monaco,monospace;background-color:#f7f7f7;color:#333;-webkit-box-shadow:0 4px 0 rgba(0,0,0,.2),0 0 0 2px #fff inset;box-shadow:0 4px 0 rgba(0,0,0,.2),0 0 0 2px #fff inset;border-radius:3px;display:inline-block;margin:0 .1em;text-shadow:0 1px 0 #fff;line-height:1.3;white-space:nowrap;top:0;-webkit-transition:top 40ms ease-out,-webkit-box-shadow 40ms ease-out;transition:top 40ms ease-out,box-shadow 40ms ease-out;transition:top 40ms ease-out,box-shadow 40ms ease-out,-webkit-box-shadow 40ms ease-out}kbd:hover{top:4px;-webkit-box-shadow:0 0 0 rgba(0,0,0,.2),0 0 0 2px #fff inset;box-shadow:0 0 0 rgba(0,0,0,.2),0 0 0 2px #fff inset}figcaption{background-color:#f5f5f5;padding:5px;margin-bottom:3px}blockquote,figure.embedded-caption,kbd{position:relative}figure.embedded-caption figcaption{position:absolute;background-color:rgba(0,0,0,.25)}figure.embedded-caption figcaption.caption-bottom{bottom:1em}figure.embedded-caption figcaption.caption-top{top:1em;left:0;right:0}figure.embedded-caption figcaption.caption-bottom{left:0;right:0}img[alt$=right]{float:right}img[alt$=left]{float:left}.push-right{float:right;margin-left:20px}.push-left{float:left;margin-right:20px}.figure-slides{position:relative}.figure-step:not(:first-child){position:absolute;top:0;left:0}a.bookmarklet{border-radius:5px;border:2px solid silver;padding:4px 7px;background-color:rgba(255,255,255,.1);-webkit-transition:all 200ms ease-out;transition:all 200ms ease-out}a.bookmarklet:hover{text-decoration:none;background-color:#b66c7e;color:#ddd;border-color:#333;cursor:move}input.switch:empty{display:block;margin-left:-999px}input.switch:empty~label{position:relative;float:left;line-height:1.6em;text-indent:4em;margin:.2em 0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}input.switch:empty~label:after,input.switch:empty~label:before{position:absolute;display:block;top:0;bottom:0;left:0;content:' ';width:3.6em;background-color:#c33;border-radius:.3em;-webkit-box-shadow:inset 0 .2em 0 rgba(0,0,0,.3);box-shadow:inset 0 .2em 0 rgba(0,0,0,.3);-webkit-transition:all 100ms ease-in;transition:all 100ms ease-in}input.switch:empty~label:after{width:1.4em;top:.1em;bottom:.1em;margin-left:.1em;background-color:#fff;border-radius:.15em;-webkit-box-shadow:inset 0 -.2em 0 rgba(0,0,0,.2);box-shadow:inset 0 -.2em 0 rgba(0,0,0,.2)}input.switch:checked~label:before{background-color:#393}input.switch:checked~label:after{margin-left:2.1em}img.full-width{width:100%}img.large-width{width:80%}img.medium-width{width:60%}img.small-width{width:40%}img.full-height{height:100%}img.huge-height{height:80%}img.large-height{height:60%}img.medium-height{height:40%}img.small-height{height:20%}img.block{display:block}.floating-portrait-container *,.portrait,.portrait img{display:inline-block;width:150px;height:150px;border-radius:50%}.floating-portrait-container * figcaption,.portrait figcaption,.portrait img figcaption{background-color:transparent}.floating-portrait-container{position:relative}.floating-portrait-container *{margin:0;-webkit-animation:floating 2s ease-in-out 0s infinite alternate;animation:floating 2s ease-in-out 0s infinite alternate}.floating-portrait-container::after{content:\" \";position:absolute;width:100%;height:20%;left:0;right:0;bottom:-20%;background:radial-gradient(ellipse closest-side,rgba(21,21,21,.25) 0%,rgba(255,255,255,0) 100%);z-index:-1;-webkit-animation:floated-element-shadow 2s ease-in-out 0s infinite alternate;animation:floated-element-shadow 2s ease-in-out 0s infinite alternate}.flips{-webkit-transition:-webkit-transform 600ms ease-out;transition:transform 600ms ease-out;transition:transform 600ms ease-out,-webkit-transform 600ms ease-out}.flips *{margin:0}.flips:hover{-webkit-transform:rotateY(720deg);transform:rotateY(720deg)}.portrait{shape-outside:circle(50%)}.contain{max-width:100%;max-height:100%}.half-width{width:50%}.three-quarter-width{width:75%}img.centered{display:block;margin-left:auto;margin-right:auto}.center-aligned{text-align:center}.emoji{height:1em;width:1em;vertical-align:middle}.on-line{height:1em;line-height:1em}.no-margin{margin:0}.horizontal-list{list-style:none}.horizontal-list>li{display:inline-block;width:25%;margin:0 4.5% 0 0;vertical-align:middle}.horizontal-list>li:last-of-type{margin:0}.multi-column-list-2,.multi-column-list-3{padding-left:0;-webkit-column-count:2;column-count:2;list-style-position:inside}.multi-column-list-3{-webkit-column-count:3;column-count:3}.multi-column-list-4,.multi-column-list-5{padding-left:0;-webkit-column-count:4;column-count:4;list-style-position:inside}.multi-column-list-5{-webkit-column-count:5;column-count:5}.layout-split-2,.layout-split-3,.layout-split-4,.layout-split-5{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:100%;width:100%}.layout-split-2>section{width:50%;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;text-align:center}.layout-split-3>section,.layout-split-4>section,.layout-split-5>section{width:33.33333333333333%;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;text-align:center}.layout-split-4>section,.layout-split-5>section{width:25%}.layout-split-5>section{width:20%}.bouncing-left{-webkit-animation:bouncing-left .8s cubic-bezier(.22,.61,.36,1) 0s infinite alternate;animation:bouncing-left .8s cubic-bezier(.22,.61,.36,1) 0s infinite alternate}.delay-1{-webkit-animation-delay:.2s;animation-delay:.2s;-webkit-transition-delay:.2s;transition-delay:.2s}.delay-2{-webkit-animation-delay:.4s;animation-delay:.4s;-webkit-transition-delay:.4s;transition-delay:.4s}.delay-3{-webkit-animation-delay:.6s;animation-delay:.6s;-webkit-transition-delay:.6s;transition-delay:.6s}.delay-4{-webkit-animation-delay:.8s;animation-delay:.8s;-webkit-transition-delay:.8s;transition-delay:.8s}.delay-5{-webkit-animation-delay:1s;animation-delay:1s;-webkit-transition-delay:1s;transition-delay:1s}.delay-6{-webkit-animation-delay:1.2s;animation-delay:1.2s;-webkit-transition-delay:1.2s;transition-delay:1.2s}@media screen{.transition-sliding,.transition-subtle{overflow:hidden}.transition-sliding .bespoke-slide{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:opacity .4s ease,-webkit-transform 400ms ease;transition:transform 400ms ease,opacity .4s ease;transition:transform 400ms ease,opacity .4s ease,-webkit-transform 400ms ease}.transition-sliding .bespoke-before{-webkit-transform:translate3d(-101%,0,0);transform:translate3d(-101%,0,0)}.transition-sliding .bespoke-after{-webkit-transform:translate3d(101%,0,0);transform:translate3d(101%,0,0)}.bespoke-slide,.transition-giant-wheel .bespoke-slide{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:opacity 400ms ease,-webkit-transform 400ms ease;transition:transform 400ms ease,opacity 400ms ease;transition:transform 400ms ease,opacity 400ms ease,-webkit-transform 400ms ease}.bespoke-before{-webkit-transform:translate3d(-10%,0,0);transform:translate3d(-10%,0,0)}.bespoke-after{-webkit-transform:translate3d(10%,0,0);transform:translate3d(10%,0,0)}.transition-giant-wheel{overflow:hidden}.transition-giant-wheel .bespoke-slide{-webkit-transition:-webkit-transform 400ms ease;transition:transform 400ms ease;transition:transform 400ms ease,-webkit-transform 400ms ease;-webkit-transform-origin:50% -250%;transform-origin:50% -250%}.transition-giant-wheel .bespoke-before{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}.transition-giant-wheel .bespoke-after{-webkit-transform:rotateZ(-90deg);transform:rotateZ(-90deg)}}.layout-title.bespoke-slide{text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around}.layout-title.bespoke-slide h1{color:#6e8ae4}.layout-title.bespoke-slide h2{background-color:#00fdc8;display:block;width:100%;padding:2em 0;margin:1em 0 0}.layout-title.bespoke-slide h2 strong{color:#007f64}.layout-section-header.bespoke-slide{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap}.layout-section-header.bespoke-slide::after,.layout-section-header.bespoke-slide::before{content:\" \";position:absolute;top:0;display:block;width:50%;height:100%;z-index:-1}.layout-section-header.bespoke-slide::before{left:0;background-color:#fff}.layout-section-header.bespoke-slide::after{right:0;background-color:#00fdc8}.layout-section-header.bespoke-slide .content{display:block;-webkit-box-sizing:border-box;box-sizing:border-box}.layout-section-header.bespoke-slide .content dd,.layout-section-header.bespoke-slide .content dt,.layout-section-header.bespoke-slide .content li,.layout-section-header.bespoke-slide .content p{background-color:#fff}.layout-section-header.bespoke-slide .content li,.layout-section-header.bespoke-slide .content p{display:inline}.layout-section-header.bespoke-slide .content p::after{content:\" \";display:block;margin-bottom:.5em}.layout-section-header.bespoke-slide .content::after{content:\" \";display:block;width:3em;height:1px;border-bottom:3px solid #fff}.layout-section-header.bespoke-slide .content li::before{content:\" \";display:list-item;float:left}.layout-section-header.bespoke-slide .content li::after{content:\" \";display:block}.layout-section-header.bespoke-slide>*{width:50%;padding:0 1em}.layout-section-header.bespoke-slide>ol,.layout-section-header.bespoke-slide>ul{padding-left:2em}.layout-section-header.bespoke-slide h1,.layout-section-header.bespoke-slide h2{margin:0;padding:0;text-align:center}.layout-section-header.bespoke-slide h1{height:70%;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:2em}.layout-section-header.bespoke-slide h2{height:30%}.layout-2-column-content.bespoke-slide,.layout-regular.bespoke-slide{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:2em}.layout-regular.bespoke-slide h1,.layout-regular.bespoke-slide h2,.layout-regular.bespoke-slide h3,.layout-regular.bespoke-slide h4,.layout-regular.bespoke-slide h5,.layout-regular.bespoke-slide h6{margin:0;padding:0 0 .5em}.layout-2-column-content.bespoke-slide{-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.layout-2-column-content.bespoke-slide h1,.layout-2-column-content.bespoke-slide h2,.layout-2-column-content.bespoke-slide h3,.layout-2-column-content.bespoke-slide h4,.layout-2-column-content.bespoke-slide h5,.layout-2-column-content.bespoke-slide h6,.layout-2-column-highlight-and-list h1,.layout-2-column-highlight-and-list h2,.layout-2-column-highlight-and-list h3,.layout-2-column-highlight-and-list h4,.layout-2-column-highlight-and-list h5,.layout-2-column-highlight-and-list h6{-ms-flex-preferred-size:100%;flex-basis:100%}.layout-2-column-content.bespoke-slide>*+*{width:49%;margin-left:1%;margin-right:0}.layout-2-column-content.bespoke-slide>*+::last-child,.layout-2-column-highlight-and-list>*+::last-child{margin-left:0}.layout-2-column-highlight-and-list,.layout-centered.bespoke-slide{display:-webkit-box;display:-ms-flexbox;display:flex}.layout-main-point.bespoke-parent,.layout-main-point.bespoke-slide{background-color:#7c7ce0}.layout-main-point.bespoke-slide h1,.layout-main-point.bespoke-slide h2,.layout-main-point.bespoke-slide h3,.layout-main-point.bespoke-slide h4,.layout-main-point.bespoke-slide h5,.layout-main-point.bespoke-slide h6{color:#fff}.layout-2-column-highlight-and-list{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:2em;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-perspective:900px;perspective:900px}.layout-2-column-highlight-and-list>:nth-child(2){width:30%;-webkit-box-shadow:20px 20px 20px rgba(0,0,0,.2);box-shadow:20px 20px 20px rgba(0,0,0,.2);-webkit-transition:all 500ms ease 400ms;transition:all 500ms ease 400ms;opacity:.5;-webkit-transform:scale(.75);transform:scale(.75);-webkit-transform-origin:right;transform-origin:right;margin-top:1em}.layout-2-column-highlight-and-list>:nth-child(2)>img,.layout-tall-figure-left>:nth-child(2)>img,.layout-tall-figure-right>:nth-child(2)>img{max-width:100%;max-height:100%}.layout-2-column-highlight-and-list.bespoke-active>:nth-child(2){-webkit-transform:rotateY(30deg) scale(1);transform:rotateY(30deg) scale(1);opacity:1}.layout-2-column-highlight-and-list>*+*{width:60%;margin-left:1%;margin-right:0}.layout-3-column-element-with-titles-expansible{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.layout-3-column-element-with-titles-expansible>*{width:calc(33% - 1rem)}.layout-3-column-element-with-titles-expansible h1,.layout-3-column-element-with-titles-expansible h2,.layout-3-column-element-with-titles-expansible h3,.layout-3-column-element-with-titles-expansible h4,.layout-3-column-element-with-titles-expansible h5,.layout-3-column-element-with-titles-expansible h6{margin:auto 0}.layout-3-column-element-with-titles-expansible h1:not(:last-of-type),.layout-3-column-element-with-titles-expansible h2:not(:last-of-type),.layout-3-column-element-with-titles-expansible h3:not(:last-of-type),.layout-3-column-element-with-titles-expansible h4:not(:last-of-type),.layout-3-column-element-with-titles-expansible h5:not(:last-of-type),.layout-3-column-element-with-titles-expansible h6:not(:last-of-type){margin-right:1rem}.layout-3-column-element-with-titles-expansible>:nth-child(2n){height:calc(100% - 2.5em);margin:0;-webkit-transition:all 100ms ease;transition:all 100ms ease;position:relative}.layout-3-column-element-with-titles-expansible>:nth-child(2n):not(:last-of-type){margin-right:1rem}.layout-3-column-element-with-titles-expansible>:nth-child(2n):hover{left:0;width:100%;z-index:1}.layout-3-column-element-with-titles-expansible>:nth-child(2n):nth-of-type(2){-webkit-transition-duration:50ms;transition-duration:50ms}.layout-3-column-element-with-titles-expansible>:nth-child(2n):nth-of-type(2):hover{left:-33%}.layout-3-column-element-with-titles-expansible>:nth-child(2n):nth-of-type(3){-webkit-transition:none;transition:none}.layout-3-column-element-with-titles-expansible>:nth-child(2n):nth-of-type(3):hover{left:-67%}.layout-circling-balloons h1,.layout-circling-balloons h2,.layout-circling-balloons h3,.layout-circling-balloons h4,.layout-circling-balloons h5,.layout-circling-balloons h6{z-index:1}.layout-circling-balloons>ul{position:absolute;left:0;top:0;width:100%;height:100%;margin:0}.layout-circling-balloons>ul>li{position:absolute;width:200px;height:200px;left:calc(50% - 100px);top:calc(50% - 100px);padding:0;margin:0;border-radius:50%;background:gold;overflow:hidden;list-style-type:none;-webkit-transition:all 250ms ease;transition:all 250ms ease;-webkit-animation:circling 36s linear 0s infinite;animation:circling 36s linear 0s infinite}.layout-circling-balloons>ul>li:nth-of-type(1){-webkit-animation-delay:0s;animation-delay:0s}.layout-circling-balloons>ul>li:nth-of-type(2){-webkit-animation-delay:-12s;animation-delay:-12s}.layout-circling-balloons>ul>li:nth-of-type(3){-webkit-animation-delay:-24s;animation-delay:-24s}.layout-circling-balloons>ul>li>:first-child{position:absolute;top:0;right:0;bottom:0;left:0;margin:0;-webkit-transition:all 250ms ease;transition:all 250ms ease}.layout-circling-balloons>ul>li>:first-child img{display:block;width:125px;height:125px;margin:37.5px auto}.layout-circling-balloons>ul>li>:nth-child(2){margin-top:200px;padding:1em}.layout-circling-balloons>ul>li:hover{width:26em;height:10em;top:calc(50% - 5em);left:calc(50% - 13em);border-radius:2em;overflow:visible;z-index:2}.layout-circling-balloons>ul>li:hover>:first-child{-webkit-transform:translateY(-50%);transform:translateY(-50%)}.layout-circling-balloons>ul>li:hover>:nth-child(2){margin-top:1em}.layout-circling-balloons>ul:hover>li{-webkit-animation-play-state:paused;animation-play-state:paused}.layout-tall-figure-left,.layout-tall-figure-right{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:2em;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.layout-tall-figure-left h1,.layout-tall-figure-left h2,.layout-tall-figure-left h3,.layout-tall-figure-left h4,.layout-tall-figure-left h5,.layout-tall-figure-left h6,.layout-tall-figure-right h1,.layout-tall-figure-right h2,.layout-tall-figure-right h3,.layout-tall-figure-right h4,.layout-tall-figure-right h5,.layout-tall-figure-right h6{-ms-flex-preferred-size:100%;flex-basis:100%}.layout-tall-figure-left>:nth-child(2),.layout-tall-figure-right>:nth-child(2){-ms-flex-preferred-size:30%;flex-basis:30%}.layout-tall-figure-left>:nth-child(3),.layout-tall-figure-right>:nth-child(3){-ms-flex-preferred-size:70%;flex-basis:70%}.layout-tall-figure-right>:nth-child(2){-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.layout-tall-figure-left>:nth-child(2),.layout-tall-figure-right>:nth-child(3){-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.layout-tall-figure-left>:nth-child(3){-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}@media screen{.bespoke-scale-parent{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}.bespoke-bullet{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:all .4s ease;transition:all .4s ease}.bespoke-bullet-inactive{opacity:0;pointer-events:none;-webkit-transform:translate3d(40px,0,0);transform:translate3d(40px,0,0);-webkit-transition:all .2s ease;transition:all .2s ease}.bespoke-bullet-off .bespoke-bullet-inactive{display:list-item;opacity:initial;-webkit-transform:initial;transform:initial}.bullet-old{color:gray}.bullet-no-anim{-webkit-transition-property:opacity;transition-property:opacity}.bullet-no-anim.bespoke-bullet-inactive{-webkit-transform:none;transform:none}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:3px;z-index:2}.bespoke-progress-bar{position:absolute;height:100%;-webkit-transition:width .3s ease;transition:width .3s ease}.bespoke-progress-bar:before{content:\" \";position:absolute;display:block;width:100%;height:100%;background:#a6a6a6}.bespoke-parent,.bespoke-scale-parent{-webkit-perspective:900px;perspective:900px}.bespoke-simple-overview .bespoke-slide{position:absolute;opacity:1;outline:4px solid silver}.bespoke-simple-overview .bespoke-slide:hover{outline-color:#4682b4}.bespoke-simple-overview .bespoke-slide.bespoke-active{-webkit-transform:translate3d(0,0,-2000px);transform:translate3d(0,0,-2000px);outline-color:#4682b4;z-index:100}.bespoke-simple-overview .bespoke-slide.bespoke-after:not(.bespoke-after-1):not(.bespoke-after-2):not(.bespoke-after-3):not(.bespoke-after-4):not(.bespoke-after-5):not(.bespoke-after-6){-webkit-transform:translate3d(7634.667338669354px,0,-2000px);transform:translate3d(7634.667338669354px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before:not(.bespoke-before-1):not(.bespoke-before-2):not(.bespoke-before-3):not(.bespoke-before-4):not(.bespoke-before-5):not(.bespoke-before-6){-webkit-transform:translate3d(-7634.667338669354px,0,-2000px);transform:translate3d(-7634.667338669354px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-1,.bespoke-simple-overview .bespoke-slide.bespoke-before-1{display:-webkit-box;display:-ms-flexbox;display:flex;will-change:transform;-webkit-transform:translate3d(1090.6667626670505px,0,-2000px);transform:translate3d(1090.6667626670505px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-1{-webkit-transform:translate3d(-1090.6667626670505px,0,-2000px);transform:translate3d(-1090.6667626670505px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-2,.bespoke-simple-overview .bespoke-slide.bespoke-before-2{display:-webkit-box;display:-ms-flexbox;display:flex;will-change:transform;-webkit-transform:translate3d(2181.333525334101px,0,-2000px);transform:translate3d(2181.333525334101px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-2{-webkit-transform:translate3d(-2181.333525334101px,0,-2000px);transform:translate3d(-2181.333525334101px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-3,.bespoke-simple-overview .bespoke-slide.bespoke-before-3{display:-webkit-box;display:-ms-flexbox;display:flex;will-change:transform;-webkit-transform:translate3d(3272.0002880011516px,0,-2000px);transform:translate3d(3272.0002880011516px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-3{-webkit-transform:translate3d(-3272.0002880011516px,0,-2000px);transform:translate3d(-3272.0002880011516px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-4,.bespoke-simple-overview .bespoke-slide.bespoke-before-4{display:-webkit-box;display:-ms-flexbox;display:flex;will-change:transform;-webkit-transform:translate3d(4362.667050668202px,0,-2000px);transform:translate3d(4362.667050668202px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-4{-webkit-transform:translate3d(-4362.667050668202px,0,-2000px);transform:translate3d(-4362.667050668202px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-5,.bespoke-simple-overview .bespoke-slide.bespoke-before-5{display:-webkit-box;display:-ms-flexbox;display:flex;will-change:transform;-webkit-transform:translate3d(5453.333813335253px,0,-2000px);transform:translate3d(5453.333813335253px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-5{-webkit-transform:translate3d(-5453.333813335253px,0,-2000px);transform:translate3d(-5453.333813335253px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-6,.bespoke-simple-overview .bespoke-slide.bespoke-before-6{display:-webkit-box;display:-ms-flexbox;display:flex;will-change:transform;-webkit-transform:translate3d(6544.000576002303px,0,-2000px);transform:translate3d(6544.000576002303px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-6{-webkit-transform:translate3d(-6544.000576002303px,0,-2000px);transform:translate3d(-6544.000576002303px,0,-2000px)}.bespoke-simple-overview .bespoke-bullet-inactive{display:list-item;opacity:initial;-webkit-transform:initial;transform:initial}#bespoke-search{position:absolute;width:100%;height:100%;pointer-events:none;z-index:1;opacity:0;background-color:rgba(128,128,128,.3);-webkit-transition:opacity 100ms ease-out;transition:opacity 100ms ease-out}#bespoke-search.bespoke-search-searching{opacity:1}#bespoke-search.bespoke-search-searching>#bespoke-search-input{bottom:5%}#bespoke-search-input{position:absolute;left:50%;bottom:0;pointer-events:all;width:200px;margin-left:-100px;padding:8px;border-radius:10px;border:1px solid silver;outline:0;color:gray;font-size:x-large;background-color:rgba(255,255,255,.9);-webkit-transition:bottom 140ms ease-out;transition:bottom 140ms ease-out}.bespoke-search-result{background-color:#ff0}.bespoke-search-result-focused{background-color:orange}#bespoke-search.bespoke-search-no-result>#bespoke-search-input{border:1px solid #8b0000;color:#8b0000}#bespoke-search-results-count{position:absolute;bottom:1%;left:50%;margin-left:-30px;width:60px;text-align:center;font-size:smaller;color:#8a2be2;font-weight:700}}@media print{*{background:0 0!important}body,html{overflow:visible!important}body{margin:0!important;padding:.1in!important;height:auto!important}body,code{line-height:1em!important}code,ol,pre,ul{text-align:left!important}pre code{border:1px solid #696969!important;padding:5px!important;border-radius:4px!important}@page{margin:.79in!important}.bespoke-slide{-webkit-box-sizing:border-box!important;box-sizing:border-box!important;display:block!important;float:left!important;border:2px solid #000!important;text-align:center!important;margin-top:0!important;margin-left:0!important;page-break-inside:avoid!important}.bespoke-slide>*{zoom:.65!important}.bespoke-slide>* *{zoom:.85!important}.bespoke-slide>h1:only-child,.bespoke-slide>h2:only-child,.bespoke-slide>h3:only-child,.bespoke-slide>h4:only-child,.bespoke-slide>h5:only-child,.bespoke-slide>h6:only-child{margin-top:4em!important}.bespoke-slide .bespoke-bullet-inactive{opacity:1!important;-webkit-transform:none!important;transform:none!important;-webkit-transition:none!important;transition:none!important}.bespoke-slide:nth-child(6n),.bespoke-slide:nth-of-type(6n){page-break-after:always!important;-webkit-column-break-after:page!important;break-after:page!important}}@media print and (orientation:portrait){.bespoke-slide{width:2.919472443000001in!important;height:2.189604332250001in!important;margin-right:.324385827in!important;margin-bottom:.324385827in!important}.bespoke-slide:nth-child(2n){margin-right:0!important}.bespoke-parent{width:6.487716540000001in!important}img{max-width:5.248012976470589in!important}}@media print and (orientation:landscape){.bespoke-slide{width:2.97387402in!important;height:2.230405515in!important;margin-right:.297387402in!important;margin-bottom:.297387402in!important}.bespoke-slide:nth-child(3n){margin-right:0!important}.bespoke-parent{width:9.9129134in!important}img{max-width:3.498675317647059in!important}}\n/*# sourceMappingURL=theme.css.map */\n/*# sourceMappingURL=theme.css.map */\n";
  var fonts = fonts = "@import url(https://fonts.googleapis.com/css?family=Amatica+SC:400,700|Source+Code+Pro:400,700);\n/*# sourceMappingURL=fonts.css.map */\n/*# sourceMappingURL=fonts.css.map */\n";

  if (!!options.insertFonts) {
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
    var activateSlide = function(index) {
      var indexToActivate = -1 < index && index < deck.slides.length ? index : 0;
      if (indexToActivate !== deck.slide()) {
        deck.slide(indexToActivate);
      }
    };

    var parseHash = function() {
      var hash = window.location.hash.slice(1),
        slideNumberOrName = parseInt(hash, 10);

      if (hash) {
        if (slideNumberOrName) {
          activateSlide(slideNumberOrName - 1);
        } else {
          deck.slides.forEach(function(slide, i) {
            if (slide.getAttribute('data-bespoke-hash') === hash || slide.id === hash) {
              activateSlide(i);
            }
          });
        }
      }
    };

    setTimeout(function() {
      parseHash();

      deck.on('activate', function(e) {
        var slideName = e.slide.getAttribute('data-bespoke-hash') || e.slide.id;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZW1vL3NyYy9tYWluLmpzIiwiL2hvbWUvZmVnZW1vL1Byb2pldG9zL2Jlc3Bva2UtdGhlbWUtYmVhY2hkYXkvbGliL2Jlc3Bva2UtdGhlbWUtYmVhY2hkYXkuanMiLCJub2RlX21vZHVsZXMvYmVzcG9rZS1idWxsZXRzL2xpYi9iZXNwb2tlLWJ1bGxldHMuanMiLCJub2RlX21vZHVsZXMvYmVzcG9rZS1jbGFzc2VzL2xpYi9iZXNwb2tlLWNsYXNzZXMuanMiLCJub2RlX21vZHVsZXMvYmVzcG9rZS1oYXNoL2xpYi9iZXNwb2tlLWhhc2guanMiLCJub2RlX21vZHVsZXMvYmVzcG9rZS1rZXlzL2xpYi9iZXNwb2tlLWtleXMuanMiLCJub2RlX21vZHVsZXMvYmVzcG9rZS1wcm9ncmVzcy9saWIvYmVzcG9rZS1wcm9ncmVzcy5qcyIsIm5vZGVfbW9kdWxlcy9iZXNwb2tlLXNjYWxlL2xpYi9iZXNwb2tlLXNjYWxlLmpzIiwibm9kZV9tb2R1bGVzL2Jlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3L2Rpc3QvYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcubWluLmpzIiwibm9kZV9tb2R1bGVzL2Jlc3Bva2Utc3RhdGUvbGliL2Jlc3Bva2Utc3RhdGUuanMiLCJub2RlX21vZHVsZXMvYmVzcG9rZS10b3VjaC9saWIvYmVzcG9rZS10b3VjaC5qcyIsIm5vZGVfbW9kdWxlcy9iZXNwb2tlL2xpYi9iZXNwb2tlLmpzIiwibm9kZV9tb2R1bGVzL2luc2VydC1jc3MvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ3VCO0FBQ3ZCLElBQUksVUFBVSxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN6QyxJQUFJLFlBQVksT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDOztBQUV0QyxNQUFNLFFBQVEsR0FBRyxrQkFBa0I7RUFDakMsVUFBVSxPQUFPLElBQUksRUFBRSxhQUFhLElBQUksRUFBRSxDQUFDO0VBQzNDLElBQUksUUFBUSxvMS9CQUFxRCxDQUFDO0VBQ2xFLElBQUksUUFBUSxRQUFRLGtMQUFxRCxDQUFDOztFQUUxRSxJQUFJLENBQUMsQ0FBQyxPQUFPLFlBQVksRUFBRTtJQUN6QixTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0dBQ3JDO0VBQ0QsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQzs7RUFFcEMsT0FBTyxlQUFlO0lBQ3BCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0dBQ2pCLENBQUM7Q0FDSCxDQUFDOzs7O0FDakJGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMvQ0E7QUFDQTs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgYmVzcG9rZSA9IHJlcXVpcmUoJ2Jlc3Bva2UnKSxcbiAgYmVhY2hkYXkgPSByZXF1aXJlKCcuLi8uLi9saWIvYmVzcG9rZS10aGVtZS1iZWFjaGRheS5qcycpLFxuICBrZXlzID0gcmVxdWlyZSgnYmVzcG9rZS1rZXlzJyksXG4gIHRvdWNoID0gcmVxdWlyZSgnYmVzcG9rZS10b3VjaCcpLFxuICBidWxsZXRzID0gcmVxdWlyZSgnYmVzcG9rZS1idWxsZXRzJyksXG4gIHNjYWxlID0gcmVxdWlyZSgnYmVzcG9rZS1zY2FsZScpLFxuICBwcm9ncmVzcyA9IHJlcXVpcmUoJ2Jlc3Bva2UtcHJvZ3Jlc3MnKSxcbiAgb3ZlcnZpZXcgPSByZXF1aXJlKCdiZXNwb2tlLXNpbXBsZS1vdmVydmlldycpLFxuICAvLyBzZWFyY2ggPSByZXF1aXJlKCdiZXNwb2tlLXNlYXJjaCcpLFxuICBoYXNoID0gcmVxdWlyZSgnYmVzcG9rZS1oYXNoJyksXG4gIHN0YXRlID0gcmVxdWlyZSgnYmVzcG9rZS1zdGF0ZScpO1xuXG5iZXNwb2tlLmZyb20oJ2FydGljbGUnLCBbXG4gIGJlYWNoZGF5KHsgaW5zZXJ0Rm9udHM6IGZhbHNlIH0pLFxuICBrZXlzKCksXG4gIHRvdWNoKCksXG4gIHN0YXRlKCksXG4gIC8vIHNjYWxlKCd0cmFuc2Zvcm0nKSxcbiAgcHJvZ3Jlc3MoKSxcbiAgaGFzaCgpLFxuICBvdmVydmlldyh7IGluc2VydFN0eWxlczogZmFsc2UgfSksXG4gIGJ1bGxldHMoJy5idWxsZXQnKSxcbiAgLy8gc2VhcmNoKCksXG4gIGRlY2sgPT4ge1xuICAgIC8vIGFzIHdlJ3JlIHVzaW5nIGJlc3Bva2Utc2NhbGUgd2l0aCAndHJhbnNmb3JtJywgaXQgY3JlYXRlcyBhXG4gICAgLy8gLmJlc3Bva2UtcGFyZW50IGFuZCB3cmFwcyBldmVyeXRoaW5nIGluc2lkZSBpdCwgaW5jbHVkaW5nIHRoZVxuICAgIC8vIGJlc3Bva2UtcHJvZ3Jlc3MgYmFyXG4gICAgLy8gdG8gcHJldmVudCBpdCBmcm9tIGJlaW5nIHNjYWxlZCB1cC9kb3duLCB3ZSBuZWVkIHRvIHVud3JhcCBpdFxuICAgIC8vIHZhciBiYXIgPSBkZWNrLnF1ZXJ5U2VsZWN0b3IoJ2Jlc3Bva2UtcHJvZ3Jlc3MtcGFyZW50Jyk7XG4gICAgLy8gZGVjay5wYXJlbnQuYXBwZW5kQ2hpbGQoYmFyKTtcbiAgfSxcbiAgZGVjayA9PiB7XG4gICAgLy8gbWFrZXMgdGhlIGNvbnRlbnQgdmlzaWJsZSB0byBhdm9pZCBGb1VDXG4gICAgZGVjay5wYXJlbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgfVxuXSk7XG4iLCJ2YXIgZnMgPSByZXF1aXJlKCdmcycpO1xudmFyIGNsYXNzZXMgPSByZXF1aXJlKCdiZXNwb2tlLWNsYXNzZXMnKTtcbnZhciBpbnNlcnRDc3MgPSByZXF1aXJlKCdpbnNlcnQtY3NzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7IGluc2VydEZvbnRzOiB0cnVlIH07XG4gIHZhciB0aGVtZSA9IGZzLnJlYWRGaWxlU3luYyhfX2Rpcm5hbWUgKyAnL3RtcC90aGVtZS5jc3MnLCAndXRmOCcpO1xuICB2YXIgZm9udHMgPSBmb250cyA9IGZzLnJlYWRGaWxlU3luYyhfX2Rpcm5hbWUgKyAnL3RtcC9mb250cy5jc3MnLCAndXRmOCcpO1xuXG4gIGlmICghIW9wdGlvbnMuaW5zZXJ0Rm9udHMpIHtcbiAgICBpbnNlcnRDc3MoZm9udHMsIHsgcHJlcGVuZDogdHJ1ZSB9KTtcbiAgfVxuICBpbnNlcnRDc3ModGhlbWUsIHsgcHJlcGVuZDogdHJ1ZSB9KTtcblxuICByZXR1cm4gZnVuY3Rpb24oZGVjaykge1xuICAgIGNsYXNzZXMoKShkZWNrKTtcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRlY2spIHtcbiAgICB2YXIgYWN0aXZlU2xpZGVJbmRleCxcbiAgICAgIGFjdGl2ZUJ1bGxldEluZGV4LFxuXG4gICAgICBidWxsZXRzID0gZGVjay5zbGlkZXMubWFwKGZ1bmN0aW9uKHNsaWRlKSB7XG4gICAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKHNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJyA/IG9wdGlvbnMgOiAnW2RhdGEtYmVzcG9rZS1idWxsZXRdJykpLCAwKTtcbiAgICAgIH0pLFxuXG4gICAgICBuZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBuZXh0U2xpZGVJbmRleCA9IGFjdGl2ZVNsaWRlSW5kZXggKyAxO1xuXG4gICAgICAgIGlmIChhY3RpdmVTbGlkZUhhc0J1bGxldEJ5T2Zmc2V0KDEpKSB7XG4gICAgICAgICAgYWN0aXZhdGVCdWxsZXQoYWN0aXZlU2xpZGVJbmRleCwgYWN0aXZlQnVsbGV0SW5kZXggKyAxKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoYnVsbGV0c1tuZXh0U2xpZGVJbmRleF0pIHtcbiAgICAgICAgICBhY3RpdmF0ZUJ1bGxldChuZXh0U2xpZGVJbmRleCwgMCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIHByZXYgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHByZXZTbGlkZUluZGV4ID0gYWN0aXZlU2xpZGVJbmRleCAtIDE7XG5cbiAgICAgICAgaWYgKGFjdGl2ZVNsaWRlSGFzQnVsbGV0QnlPZmZzZXQoLTEpKSB7XG4gICAgICAgICAgYWN0aXZhdGVCdWxsZXQoYWN0aXZlU2xpZGVJbmRleCwgYWN0aXZlQnVsbGV0SW5kZXggLSAxKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoYnVsbGV0c1twcmV2U2xpZGVJbmRleF0pIHtcbiAgICAgICAgICBhY3RpdmF0ZUJ1bGxldChwcmV2U2xpZGVJbmRleCwgYnVsbGV0c1twcmV2U2xpZGVJbmRleF0ubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGFjdGl2YXRlQnVsbGV0ID0gZnVuY3Rpb24oc2xpZGVJbmRleCwgYnVsbGV0SW5kZXgpIHtcbiAgICAgICAgYWN0aXZlU2xpZGVJbmRleCA9IHNsaWRlSW5kZXg7XG4gICAgICAgIGFjdGl2ZUJ1bGxldEluZGV4ID0gYnVsbGV0SW5kZXg7XG5cbiAgICAgICAgYnVsbGV0cy5mb3JFYWNoKGZ1bmN0aW9uKHNsaWRlLCBzKSB7XG4gICAgICAgICAgc2xpZGUuZm9yRWFjaChmdW5jdGlvbihidWxsZXQsIGIpIHtcbiAgICAgICAgICAgIGJ1bGxldC5jbGFzc0xpc3QuYWRkKCdiZXNwb2tlLWJ1bGxldCcpO1xuXG4gICAgICAgICAgICBpZiAocyA8IHNsaWRlSW5kZXggfHwgcyA9PT0gc2xpZGVJbmRleCAmJiBiIDw9IGJ1bGxldEluZGV4KSB7XG4gICAgICAgICAgICAgIGJ1bGxldC5jbGFzc0xpc3QuYWRkKCdiZXNwb2tlLWJ1bGxldC1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgYnVsbGV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Jlc3Bva2UtYnVsbGV0LWluYWN0aXZlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBidWxsZXQuY2xhc3NMaXN0LmFkZCgnYmVzcG9rZS1idWxsZXQtaW5hY3RpdmUnKTtcbiAgICAgICAgICAgICAgYnVsbGV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Jlc3Bva2UtYnVsbGV0LWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocyA9PT0gc2xpZGVJbmRleCAmJiBiID09PSBidWxsZXRJbmRleCkge1xuICAgICAgICAgICAgICBidWxsZXQuY2xhc3NMaXN0LmFkZCgnYmVzcG9rZS1idWxsZXQtY3VycmVudCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYnVsbGV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Jlc3Bva2UtYnVsbGV0LWN1cnJlbnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBhY3RpdmVTbGlkZUhhc0J1bGxldEJ5T2Zmc2V0ID0gZnVuY3Rpb24ob2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBidWxsZXRzW2FjdGl2ZVNsaWRlSW5kZXhdW2FjdGl2ZUJ1bGxldEluZGV4ICsgb2Zmc2V0XSAhPT0gdW5kZWZpbmVkO1xuICAgICAgfTtcblxuICAgIGRlY2sub24oJ25leHQnLCBuZXh0KTtcbiAgICBkZWNrLm9uKCdwcmV2JywgcHJldik7XG5cbiAgICBkZWNrLm9uKCdzbGlkZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGFjdGl2YXRlQnVsbGV0KGUuaW5kZXgsIDApO1xuICAgIH0pO1xuXG4gICAgYWN0aXZhdGVCdWxsZXQoMCwgMCk7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRlY2spIHtcbiAgICB2YXIgYWRkQ2xhc3MgPSBmdW5jdGlvbihlbCwgY2xzKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2Jlc3Bva2UtJyArIGNscyk7XG4gICAgICB9LFxuXG4gICAgICByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKGVsLCBjbHMpIHtcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lXG4gICAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cCgnYmVzcG9rZS0nICsgY2xzICsnKFxcXFxzfCQpJywgJ2cnKSwgJyAnKVxuICAgICAgICAgIC50cmltKCk7XG4gICAgICB9LFxuXG4gICAgICBkZWFjdGl2YXRlID0gZnVuY3Rpb24oZWwsIGluZGV4KSB7XG4gICAgICAgIHZhciBhY3RpdmVTbGlkZSA9IGRlY2suc2xpZGVzW2RlY2suc2xpZGUoKV0sXG4gICAgICAgICAgb2Zmc2V0ID0gaW5kZXggLSBkZWNrLnNsaWRlKCksXG4gICAgICAgICAgb2Zmc2V0Q2xhc3MgPSBvZmZzZXQgPiAwID8gJ2FmdGVyJyA6ICdiZWZvcmUnO1xuXG4gICAgICAgIFsnYmVmb3JlKC1cXFxcZCspPycsICdhZnRlcigtXFxcXGQrKT8nLCAnYWN0aXZlJywgJ2luYWN0aXZlJ10ubWFwKHJlbW92ZUNsYXNzLmJpbmQobnVsbCwgZWwpKTtcblxuICAgICAgICBpZiAoZWwgIT09IGFjdGl2ZVNsaWRlKSB7XG4gICAgICAgICAgWydpbmFjdGl2ZScsIG9mZnNldENsYXNzLCBvZmZzZXRDbGFzcyArICctJyArIE1hdGguYWJzKG9mZnNldCldLm1hcChhZGRDbGFzcy5iaW5kKG51bGwsIGVsKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICBhZGRDbGFzcyhkZWNrLnBhcmVudCwgJ3BhcmVudCcpO1xuICAgIGRlY2suc2xpZGVzLm1hcChmdW5jdGlvbihlbCkgeyBhZGRDbGFzcyhlbCwgJ3NsaWRlJyk7IH0pO1xuXG4gICAgZGVjay5vbignYWN0aXZhdGUnLCBmdW5jdGlvbihlKSB7XG4gICAgICBkZWNrLnNsaWRlcy5tYXAoZGVhY3RpdmF0ZSk7XG4gICAgICBhZGRDbGFzcyhlLnNsaWRlLCAnYWN0aXZlJyk7XG4gICAgICByZW1vdmVDbGFzcyhlLnNsaWRlLCAnaW5hY3RpdmUnKTtcbiAgICB9KTtcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZnVuY3Rpb24oZGVjaykge1xuICAgIHZhciBhY3RpdmF0ZVNsaWRlID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIHZhciBpbmRleFRvQWN0aXZhdGUgPSAtMSA8IGluZGV4ICYmIGluZGV4IDwgZGVjay5zbGlkZXMubGVuZ3RoID8gaW5kZXggOiAwO1xuICAgICAgaWYgKGluZGV4VG9BY3RpdmF0ZSAhPT0gZGVjay5zbGlkZSgpKSB7XG4gICAgICAgIGRlY2suc2xpZGUoaW5kZXhUb0FjdGl2YXRlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHBhcnNlSGFzaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKSxcbiAgICAgICAgc2xpZGVOdW1iZXJPck5hbWUgPSBwYXJzZUludChoYXNoLCAxMCk7XG5cbiAgICAgIGlmIChoYXNoKSB7XG4gICAgICAgIGlmIChzbGlkZU51bWJlck9yTmFtZSkge1xuICAgICAgICAgIGFjdGl2YXRlU2xpZGUoc2xpZGVOdW1iZXJPck5hbWUgLSAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWNrLnNsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uKHNsaWRlLCBpKSB7XG4gICAgICAgICAgICBpZiAoc2xpZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWJlc3Bva2UtaGFzaCcpID09PSBoYXNoIHx8IHNsaWRlLmlkID09PSBoYXNoKSB7XG4gICAgICAgICAgICAgIGFjdGl2YXRlU2xpZGUoaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHBhcnNlSGFzaCgpO1xuXG4gICAgICBkZWNrLm9uKCdhY3RpdmF0ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIHNsaWRlTmFtZSA9IGUuc2xpZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWJlc3Bva2UtaGFzaCcpIHx8IGUuc2xpZGUuaWQ7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gc2xpZGVOYW1lIHx8IGUuaW5kZXggKyAxO1xuICAgICAgfSk7XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgcGFyc2VIYXNoKTtcbiAgICB9LCAwKTtcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRlY2spIHtcbiAgICB2YXIgaXNIb3Jpem9udGFsID0gb3B0aW9ucyAhPT0gJ3ZlcnRpY2FsJztcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoZS53aGljaCA9PSAzNCB8fCAvLyBQQUdFIERPV05cbiAgICAgICAgKGUud2hpY2ggPT0gMzIgJiYgIWUuc2hpZnRLZXkpIHx8IC8vIFNQQUNFIFdJVEhPVVQgU0hJRlRcbiAgICAgICAgKGlzSG9yaXpvbnRhbCAmJiBlLndoaWNoID09IDM5KSB8fCAvLyBSSUdIVFxuICAgICAgICAoIWlzSG9yaXpvbnRhbCAmJiBlLndoaWNoID09IDQwKSAvLyBET1dOXG4gICAgICApIHsgZGVjay5uZXh0KCk7IH1cblxuICAgICAgaWYgKGUud2hpY2ggPT0gMzMgfHwgLy8gUEFHRSBVUFxuICAgICAgICAoZS53aGljaCA9PSAzMiAmJiBlLnNoaWZ0S2V5KSB8fCAvLyBTUEFDRSArIFNISUZUXG4gICAgICAgIChpc0hvcml6b250YWwgJiYgZS53aGljaCA9PSAzNykgfHwgLy8gTEVGVFxuICAgICAgICAoIWlzSG9yaXpvbnRhbCAmJiBlLndoaWNoID09IDM4KSAvLyBVUFxuICAgICAgKSB7IGRlY2sucHJldigpOyB9XG4gICAgfSk7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGVjaykge1xuICAgIHZhciBwcm9ncmVzc1BhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgIHByb3AgPSBvcHRpb25zID09PSAndmVydGljYWwnID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgcHJvZ3Jlc3NQYXJlbnQuY2xhc3NOYW1lID0gJ2Jlc3Bva2UtcHJvZ3Jlc3MtcGFyZW50JztcbiAgICBwcm9ncmVzc0Jhci5jbGFzc05hbWUgPSAnYmVzcG9rZS1wcm9ncmVzcy1iYXInO1xuICAgIHByb2dyZXNzUGFyZW50LmFwcGVuZENoaWxkKHByb2dyZXNzQmFyKTtcbiAgICBkZWNrLnBhcmVudC5hcHBlbmRDaGlsZChwcm9ncmVzc1BhcmVudCk7XG5cbiAgICBkZWNrLm9uKCdhY3RpdmF0ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHByb2dyZXNzQmFyLnN0eWxlW3Byb3BdID0gKGUuaW5kZXggKiAxMDAgLyAoZGVjay5zbGlkZXMubGVuZ3RoIC0gMSkpICsgJyUnO1xuICAgIH0pO1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICByZXR1cm4gZnVuY3Rpb24oZGVjaykge1xuICAgIHZhciBwYXJlbnQgPSBkZWNrLnBhcmVudCxcbiAgICAgIGN1cnJlbnRTbGlkZSA9IGRlY2suc2xpZGVzW2RlY2suc2xpZGUoKV0sXG4gICAgICBzbGlkZUhlaWdodCA9IGN1cnJlbnRTbGlkZS5vZmZzZXRIZWlnaHQsXG4gICAgICBzbGlkZVdpZHRoID0gY3VycmVudFNsaWRlLm9mZnNldFdpZHRoLFxuICAgICAgdXNlWm9vbSA9IG9wdGlvbnMgPT09ICd6b29tJyB8fCAoJ3pvb20nIGluIHBhcmVudC5zdHlsZSAmJiBvcHRpb25zICE9PSAndHJhbnNmb3JtJyksXG5cbiAgICAgIGlubmVyV3JhcCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGlubmVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbm5lcldyYXBwZXIuY2xhc3NOYW1lID0gJ2Jlc3Bva2Utc2NhbGUtcGFyZW50JztcbiAgICAgICAgd2hpbGUgKGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlubmVyV3JhcHBlci5hcHBlbmRDaGlsZChlbGVtZW50LmNoaWxkcmVuWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGlubmVyV3JhcHBlcik7XG4gICAgICAgIHJldHVybiBpbm5lcldyYXBwZXI7XG4gICAgICB9LFxuXG4gICAgICBlbGVtZW50ID0gdXNlWm9vbSA/IHBhcmVudCA6IGlubmVyV3JhcChwYXJlbnQpLFxuXG4gICAgICB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IChmdW5jdGlvbihwcm9wZXJ0eSkge1xuICAgICAgICB2YXIgcHJlZml4ZXMgPSAnTW96IFdlYmtpdCBPIG1zJy5zcGxpdCgnICcpO1xuICAgICAgICByZXR1cm4gcHJlZml4ZXMucmVkdWNlKGZ1bmN0aW9uKGN1cnJlbnRQcm9wZXJ0eSwgcHJlZml4KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4ICsgcHJvcGVydHkgaW4gcGFyZW50LnN0eWxlID8gcHJlZml4ICsgcHJvcGVydHkgOiBjdXJyZW50UHJvcGVydHk7XG4gICAgICAgICAgfSwgcHJvcGVydHkudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9KCdUcmFuc2Zvcm0nKSksXG5cbiAgICAgIHNjYWxlID0gdXNlWm9vbSA/XG4gICAgICAgIGZ1bmN0aW9uKHJhdGlvLCBlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS56b29tID0gcmF0aW87XG4gICAgICAgIH0gOlxuICAgICAgICBmdW5jdGlvbihyYXRpbywgZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gJ3NjYWxlKCcgKyByYXRpbyArICcpJztcbiAgICAgICAgfSxcblxuICAgICAgc2NhbGVBbGwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHhTY2FsZSA9IHBhcmVudC5vZmZzZXRXaWR0aCAvIHNsaWRlV2lkdGgsXG4gICAgICAgICAgeVNjYWxlID0gKHBhcmVudC5vZmZzZXRIZWlnaHQgLyBzbGlkZUhlaWdodCkgfHwgMDtcblxuICAgICAgICBzY2FsZShNYXRoLm1pbih4U2NhbGUsIHlTY2FsZSksIGVsZW1lbnQpO1xuICAgICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzY2FsZUFsbCk7XG4gICAgc2NhbGVBbGwoKTtcbiAgfTtcblxufTtcbiIsIi8qISBiZXNwb2tlLXNpbXBsZS1vdmVydmlldyB2MS4wLjAgwqkgMjAxNiBGbMOhdmlvIENvdXRpbmhvLCBNSVQgTGljZW5zZSAqL1xuIWZ1bmN0aW9uKGUpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPWUoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sZSk7ZWxzZXt2YXIgcztzPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6dGhpcyxzPXMuYmVzcG9rZXx8KHMuYmVzcG9rZT17fSkscz1zLnBsdWdpbnN8fChzLnBsdWdpbnM9e30pLHMuc2ltcGxlT3ZlcnZpZXc9ZSgpfX0oZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24gZShzLG8sdCl7ZnVuY3Rpb24gcihuLHApe2lmKCFvW25dKXtpZighc1tuXSl7dmFyIGE9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighcCYmYSlyZXR1cm4gYShuLCEwKTtpZihpKXJldHVybiBpKG4sITApO3ZhciBsPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbitcIidcIik7dGhyb3cgbC5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGx9dmFyIGI9b1tuXT17ZXhwb3J0czp7fX07c1tuXVswXS5jYWxsKGIuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbz1zW25dWzFdW2VdO3JldHVybiByKG8/bzplKX0sYixiLmV4cG9ydHMsZSxzLG8sdCl9cmV0dXJuIG9bbl0uZXhwb3J0c31mb3IodmFyIGk9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxuPTA7bjx0Lmxlbmd0aDtuKyspcih0W25dKTtyZXR1cm4gcn0oezE6W2Z1bmN0aW9uKGUscyxvKXt2YXIgdD1lKFwiaW5zZXJ0LWNzc1wiKSxyPWZ1bmN0aW9uKGUscyl7cmV0dXJuIHM9XCJvYmplY3RcIj09dHlwZW9mIHM/czp7fSxPYmplY3Qua2V5cyhlKS5mb3JFYWNoKGZ1bmN0aW9uKG8pe3Nbb109c1tvXXx8ZVtvXX0pLHN9LGk9ZnVuY3Rpb24oZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGU/ZS50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCk6ZX07cy5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBlPXIoe2FjdGl2YXRpb25LZXk6MjcsaW5zZXJ0U3R5bGVzOiEwfSxlKSxlLmFjdGl2YXRpb25LZXk9aShlLmFjdGl2YXRpb25LZXkpLGZ1bmN0aW9uKHMpe3ZhciBvLHIsaSxuLHAsYTtvPWZ1bmN0aW9uKCl7cy5vbihcImFjdGl2YXRlXCIsbykoKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixyLCExKTt2YXIgaT1cIi5iZXNwb2tlLXBhcmVudHstd2Via2l0LXBlcnNwZWN0aXZlOjkwMHB4O3BlcnNwZWN0aXZlOjkwMHB4fS5iZXNwb2tlLXBhcmVudCAuYmVzcG9rZS1zbGlkZXt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSxvcGFjaXR5O3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLG9wYWNpdHksLXdlYmtpdC10cmFuc2Zvcm19LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwtMjAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLC0yMDAwcHgpO291dGxpbmU6NHB4IHNvbGlkIHNpbHZlcjtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjIpO29wYWNpdHk6aW5pdGlhbH0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hY3RpdmUsLmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlOmhvdmVye291dGxpbmUtY29sb3I6IzQ2ODJiNH0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmV7ZGlzcGxheTpub25lOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC02MzAlLDAsLTIwMDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC02MzAlLDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWZ0ZXJ7ZGlzcGxheTpub25lOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDYzMCUsMCwtMjAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoNjMwJSwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTEsLmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWZ0ZXItMiwuYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlci0zLC5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTQsLmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWZ0ZXItNSwuYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtMSwuYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtMiwuYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtMywuYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtNCwuYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtNXtkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtMXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTA1JSwwLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTA1JSwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWJlZm9yZS0yey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yMTAlLDAsLTIwMDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yMTAlLDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTN7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTMxNSUsMCwtMjAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTMxNSUsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtNHstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNDIwJSwwLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNDIwJSwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWJlZm9yZS01ey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC01MjUlLDAsLTIwMDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC01MjUlLDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWZ0ZXItMXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDUlLDAsLTIwMDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwNSUsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlci0yey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIxMCUsMCwtMjAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjEwJSwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTN7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMzE1JSwwLC0yMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgzMTUlLDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWZ0ZXItNHstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCg0MjAlLDAsLTIwMDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDQyMCUsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlci01ey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDUyNSUsMCwtMjAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoNTI1JSwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1idWxsZXQtaW5hY3RpdmV7ZGlzcGxheTpsaXN0LWl0ZW07b3BhY2l0eTppbml0aWFsOy13ZWJraXQtdHJhbnNmb3JtOmluaXRpYWw7dHJhbnNmb3JtOmluaXRpYWx9XCI7ZS5pbnNlcnRTdHlsZXMmJnQoaSksYT1zLnBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJiZXNwb2tlLXNpbXBsZS1vdmVydmlld1wiKSxhJiZTaW1wbGVPdmVydmlldygpfSxpPWZ1bmN0aW9uKCl7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsciwhMSl9LG49ZnVuY3Rpb24oZSl7dmFyIG87cmV0dXJuIGE/KG89cy5zbGlkZSgpK2Usbz49MCYmbzxzLnNsaWRlcy5sZW5ndGgmJnMuc2xpZGUobyksITEpOnZvaWQgMH0scj1mdW5jdGlvbihzKXtzd2l0Y2gocy53aGljaCl7Y2FzZSBlLmFjdGl2YXRpb25LZXk6cCgpfX0scD1mdW5jdGlvbihlKXthPVwiYm9vbGVhblwiPT10eXBlb2YgZT9lOiFhLHMucGFyZW50LmNsYXNzTGlzdC50b2dnbGUoXCJiZXNwb2tlLXNpbXBsZS1vdmVydmlld1wiLGEpfSxzLm9uKFwiYWN0aXZhdGVcIixvKSxzLm9uKFwiZGVzdHJveVwiLGkpLHMub24oXCJzaW1wbGUtb3ZlcnZpZXcuZW5hYmxlXCIscC5iaW5kKG51bGwsITApKSxzLm9uKFwic2ltcGxlLW92ZXJ2aWV3LmRpc2FibGVcIixwLmJpbmQobnVsbCwhMSkpLHMub24oXCJzaW1wbGUtb3ZlcnZpZXcudG9nZ2xlXCIscC5iaW5kKG51bGwpKSxzLm9uKFwicHJldlwiLG4uYmluZChudWxsLC0xKSkscy5vbihcIm5leHRcIixuLmJpbmQobnVsbCwxKSl9fX0se1wiaW5zZXJ0LWNzc1wiOjJ9XSwyOltmdW5jdGlvbihlLHMsbyl7dmFyIHQ9e307cy5leHBvcnRzPWZ1bmN0aW9uKGUscyl7aWYoIXRbZV0pe3RbZV09ITA7dmFyIG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO28uc2V0QXR0cmlidXRlKFwidHlwZVwiLFwidGV4dC9jc3NcIiksXCJ0ZXh0Q29udGVudFwiaW4gbz9vLnRleHRDb250ZW50PWU6by5zdHlsZVNoZWV0LmNzc1RleHQ9ZTt2YXIgcj1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07cyYmcy5wcmVwZW5kP3IuaW5zZXJ0QmVmb3JlKG8sci5jaGlsZE5vZGVzWzBdKTpyLmFwcGVuZENoaWxkKG8pfX19LHt9XX0se30sWzFdKSgxKX0pOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBmdW5jdGlvbihkZWNrKSB7XG4gICAgdmFyIG1vZGlmeVN0YXRlID0gZnVuY3Rpb24obWV0aG9kLCBldmVudCkge1xuICAgICAgdmFyIGF0dHIgPSBldmVudC5zbGlkZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmVzcG9rZS1zdGF0ZScpO1xuXG4gICAgICBpZiAoYXR0cikge1xuICAgICAgICBhdHRyLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgIGRlY2sucGFyZW50LmNsYXNzTGlzdFttZXRob2RdKHN0YXRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRlY2sub24oJ2FjdGl2YXRlJywgbW9kaWZ5U3RhdGUuYmluZChudWxsLCAnYWRkJykpO1xuICAgIGRlY2sub24oJ2RlYWN0aXZhdGUnLCBtb2RpZnlTdGF0ZS5iaW5kKG51bGwsICdyZW1vdmUnKSk7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHJldHVybiBmdW5jdGlvbihkZWNrKSB7XG4gICAgdmFyIGF4aXMgPSBvcHRpb25zID09ICd2ZXJ0aWNhbCcgPyAnWScgOiAnWCcsXG4gICAgICBzdGFydFBvc2l0aW9uLFxuICAgICAgZGVsdGE7XG5cbiAgICBkZWNrLnBhcmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPT0gMSkge1xuICAgICAgICBzdGFydFBvc2l0aW9uID0gZS50b3VjaGVzWzBdWydwYWdlJyArIGF4aXNdO1xuICAgICAgICBkZWx0YSA9IDA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkZWNrLnBhcmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoZS50b3VjaGVzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGVsdGEgPSBlLnRvdWNoZXNbMF1bJ3BhZ2UnICsgYXhpc10gLSBzdGFydFBvc2l0aW9uO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGVjay5wYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChNYXRoLmFicyhkZWx0YSkgPiA1MCkge1xuICAgICAgICBkZWNrW2RlbHRhID4gMCA/ICdwcmV2JyA6ICduZXh0J10oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn07XG4iLCJ2YXIgZnJvbSA9IGZ1bmN0aW9uKG9wdHMsIHBsdWdpbnMpIHtcbiAgdmFyIHBhcmVudCA9IChvcHRzLnBhcmVudCB8fCBvcHRzKS5ub2RlVHlwZSA9PT0gMSA/IChvcHRzLnBhcmVudCB8fCBvcHRzKSA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0cy5wYXJlbnQgfHwgb3B0cyksXG4gICAgc2xpZGVzID0gW10uZmlsdGVyLmNhbGwodHlwZW9mIG9wdHMuc2xpZGVzID09PSAnc3RyaW5nJyA/IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKG9wdHMuc2xpZGVzKSA6IChvcHRzLnNsaWRlcyB8fCBwYXJlbnQuY2hpbGRyZW4pLCBmdW5jdGlvbihlbCkgeyByZXR1cm4gZWwubm9kZU5hbWUgIT09ICdTQ1JJUFQnOyB9KSxcbiAgICBhY3RpdmVTbGlkZSA9IHNsaWRlc1swXSxcbiAgICBsaXN0ZW5lcnMgPSB7fSxcblxuICAgIGFjdGl2YXRlID0gZnVuY3Rpb24oaW5kZXgsIGN1c3RvbURhdGEpIHtcbiAgICAgIGlmICghc2xpZGVzW2luZGV4XSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGZpcmUoJ2RlYWN0aXZhdGUnLCBjcmVhdGVFdmVudERhdGEoYWN0aXZlU2xpZGUsIGN1c3RvbURhdGEpKTtcbiAgICAgIGFjdGl2ZVNsaWRlID0gc2xpZGVzW2luZGV4XTtcbiAgICAgIGZpcmUoJ2FjdGl2YXRlJywgY3JlYXRlRXZlbnREYXRhKGFjdGl2ZVNsaWRlLCBjdXN0b21EYXRhKSk7XG4gICAgfSxcblxuICAgIHNsaWRlID0gZnVuY3Rpb24oaW5kZXgsIGN1c3RvbURhdGEpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIGZpcmUoJ3NsaWRlJywgY3JlYXRlRXZlbnREYXRhKHNsaWRlc1tpbmRleF0sIGN1c3RvbURhdGEpKSAmJiBhY3RpdmF0ZShpbmRleCwgY3VzdG9tRGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc2xpZGVzLmluZGV4T2YoYWN0aXZlU2xpZGUpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdGVwID0gZnVuY3Rpb24ob2Zmc2V0LCBjdXN0b21EYXRhKSB7XG4gICAgICB2YXIgc2xpZGVJbmRleCA9IHNsaWRlcy5pbmRleE9mKGFjdGl2ZVNsaWRlKSArIG9mZnNldDtcblxuICAgICAgZmlyZShvZmZzZXQgPiAwID8gJ25leHQnIDogJ3ByZXYnLCBjcmVhdGVFdmVudERhdGEoYWN0aXZlU2xpZGUsIGN1c3RvbURhdGEpKSAmJiBhY3RpdmF0ZShzbGlkZUluZGV4LCBjdXN0b21EYXRhKTtcbiAgICB9LFxuXG4gICAgb24gPSBmdW5jdGlvbihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAobGlzdGVuZXJzW2V2ZW50TmFtZV0gfHwgKGxpc3RlbmVyc1tldmVudE5hbWVdID0gW10pKS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgIHJldHVybiBvZmYuYmluZChudWxsLCBldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9LFxuXG4gICAgb2ZmID0gZnVuY3Rpb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgbGlzdGVuZXJzW2V2ZW50TmFtZV0gPSAobGlzdGVuZXJzW2V2ZW50TmFtZV0gfHwgW10pLmZpbHRlcihmdW5jdGlvbihsaXN0ZW5lcikgeyByZXR1cm4gbGlzdGVuZXIgIT09IGNhbGxiYWNrOyB9KTtcbiAgICB9LFxuXG4gICAgZmlyZSA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgZXZlbnREYXRhKSB7XG4gICAgICByZXR1cm4gKGxpc3RlbmVyc1tldmVudE5hbWVdIHx8IFtdKVxuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uKG5vdENhbmNlbGxlZCwgY2FsbGJhY2spIHtcbiAgICAgICAgICByZXR1cm4gbm90Q2FuY2VsbGVkICYmIGNhbGxiYWNrKGV2ZW50RGF0YSkgIT09IGZhbHNlO1xuICAgICAgICB9LCB0cnVlKTtcbiAgICB9LFxuXG4gICAgY3JlYXRlRXZlbnREYXRhID0gZnVuY3Rpb24oZWwsIGV2ZW50RGF0YSkge1xuICAgICAgZXZlbnREYXRhID0gZXZlbnREYXRhIHx8IHt9O1xuICAgICAgZXZlbnREYXRhLmluZGV4ID0gc2xpZGVzLmluZGV4T2YoZWwpO1xuICAgICAgZXZlbnREYXRhLnNsaWRlID0gZWw7XG4gICAgICByZXR1cm4gZXZlbnREYXRhO1xuICAgIH0sXG5cbiAgICBkZWNrID0ge1xuICAgICAgb246IG9uLFxuICAgICAgb2ZmOiBvZmYsXG4gICAgICBmaXJlOiBmaXJlLFxuICAgICAgc2xpZGU6IHNsaWRlLFxuICAgICAgbmV4dDogc3RlcC5iaW5kKG51bGwsIDEpLFxuICAgICAgcHJldjogc3RlcC5iaW5kKG51bGwsIC0xKSxcbiAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgc2xpZGVzOiBzbGlkZXNcbiAgICB9O1xuXG4gIChwbHVnaW5zIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uKHBsdWdpbikge1xuICAgIHBsdWdpbihkZWNrKTtcbiAgfSk7XG5cbiAgYWN0aXZhdGUoMCk7XG5cbiAgcmV0dXJuIGRlY2s7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZnJvbTogZnJvbVxufTtcbiIsInZhciBjb250YWluZXJzID0gW107IC8vIHdpbGwgc3RvcmUgY29udGFpbmVyIEhUTUxFbGVtZW50IHJlZmVyZW5jZXNcbnZhciBzdHlsZUVsZW1lbnRzID0gW107IC8vIHdpbGwgc3RvcmUge3ByZXBlbmQ6IEhUTUxFbGVtZW50LCBhcHBlbmQ6IEhUTUxFbGVtZW50fVxuXG52YXIgdXNhZ2UgPSAnaW5zZXJ0LWNzczogWW91IG5lZWQgdG8gcHJvdmlkZSBhIENTUyBzdHJpbmcuIFVzYWdlOiBpbnNlcnRDc3MoY3NzU3RyaW5nWywgb3B0aW9uc10pLic7XG5cbmZ1bmN0aW9uIGluc2VydENzcyhjc3MsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIGlmIChjc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXNhZ2UpO1xuICAgIH1cblxuICAgIHZhciBwb3NpdGlvbiA9IG9wdGlvbnMucHJlcGVuZCA9PT0gdHJ1ZSA/ICdwcmVwZW5kJyA6ICdhcHBlbmQnO1xuICAgIHZhciBjb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lciAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jb250YWluZXIgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG4gICAgdmFyIGNvbnRhaW5lcklkID0gY29udGFpbmVycy5pbmRleE9mKGNvbnRhaW5lcik7XG5cbiAgICAvLyBmaXJzdCB0aW1lIHdlIHNlZSB0aGlzIGNvbnRhaW5lciwgY3JlYXRlIHRoZSBuZWNlc3NhcnkgZW50cmllc1xuICAgIGlmIChjb250YWluZXJJZCA9PT0gLTEpIHtcbiAgICAgICAgY29udGFpbmVySWQgPSBjb250YWluZXJzLnB1c2goY29udGFpbmVyKSAtIDE7XG4gICAgICAgIHN0eWxlRWxlbWVudHNbY29udGFpbmVySWRdID0ge307XG4gICAgfVxuXG4gICAgLy8gdHJ5IHRvIGdldCB0aGUgY29ycmVwb25kaW5nIGNvbnRhaW5lciArIHBvc2l0aW9uIHN0eWxlRWxlbWVudCwgY3JlYXRlIGl0IG90aGVyd2lzZVxuICAgIHZhciBzdHlsZUVsZW1lbnQ7XG5cbiAgICBpZiAoc3R5bGVFbGVtZW50c1tjb250YWluZXJJZF0gIT09IHVuZGVmaW5lZCAmJiBzdHlsZUVsZW1lbnRzW2NvbnRhaW5lcklkXVtwb3NpdGlvbl0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzdHlsZUVsZW1lbnQgPSBzdHlsZUVsZW1lbnRzW2NvbnRhaW5lcklkXVtwb3NpdGlvbl07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGVFbGVtZW50ID0gc3R5bGVFbGVtZW50c1tjb250YWluZXJJZF1bcG9zaXRpb25dID0gY3JlYXRlU3R5bGVFbGVtZW50KCk7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAncHJlcGVuZCcpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBjb250YWluZXIuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHN0cmlwIHBvdGVudGlhbCBVVEYtOCBCT00gaWYgY3NzIHdhcyByZWFkIGZyb20gYSBmaWxlXG4gICAgaWYgKGNzcy5jaGFyQ29kZUF0KDApID09PSAweEZFRkYpIHsgY3NzID0gY3NzLnN1YnN0cigxLCBjc3MubGVuZ3RoKTsgfVxuXG4gICAgLy8gYWN0dWFsbHkgYWRkIHRoZSBzdHlsZXNoZWV0XG4gICAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgKz0gY3NzXG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGVFbGVtZW50LnRleHRDb250ZW50ICs9IGNzcztcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVFbGVtZW50O1xufTtcblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KCkge1xuICAgIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICByZXR1cm4gc3R5bGVFbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydENzcztcbm1vZHVsZS5leHBvcnRzLmluc2VydENzcyA9IGluc2VydENzcztcbiJdfQ==
