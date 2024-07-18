(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"../../lib/bespoke-theme-beachday.js":4,"bespoke":15,"bespoke-bullets":5,"bespoke-hash":7,"bespoke-keys":8,"bespoke-progress":9,"bespoke-scale":10,"bespoke-search":11,"bespoke-simple-overview":12,"bespoke-state":13,"bespoke-touch":14}],2:[function(require,module,exports){
var css = "@import url(https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Source+Code+Pro&display=swap);"; (require("browserify-css").createStyle(css, { "href": "theme\\fonts.css" }, { "insertAt": "bottom" })); module.exports = css;
},{"browserify-css":16}],3:[function(require,module,exports){
var css = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */@keyframes floating{0%{transform:translateY(0)}to{transform:translateY(-25%)}}@keyframes floated-element-shadow{0%{transform:scaleX(1)}to{transform:scaleX(.5)}}@keyframes bouncing-left{to{transform:translateX(5%) scaleX(.96)}}@keyframes cool-rotation-x{0%{transform:rotateX(-10deg)}to{transform:rotateX(10deg)}}@keyframes circling{0%{transform:rotate(0turn) translate(180px) rotate(0turn)}to{transform:rotate(1turn) translate(180px) rotate(-1turn)}}@keyframes shaking{0%{transform:translate3d(4px,0,0)}10%{transform:translate3d(-7px,-5px,0)}20%{transform:translate3d(8px,5px,0)}30%{transform:translate3d(-7px,3px,0)}40%{transform:translate3d(9px,-3px,0)}50%{transform:translate3d(-4px,3px,0)}60%{transform:translate3d(4px,-4px,0)}70%{transform:translate3d(-5px,-4px,0)}80%{transform:translate3d(4px,2px,0)}90%{transform:translate3d(-3px,-1px,0)}to{transform:translate3d(0,0,0)}}html{line-height:1.15;-webkit-text-size-adjust:100%}body,figure,figure.embedded-caption p,figure>p{margin:0}details,main,ol,ul{display:block}h1{color:var(--regular-title-color);font-family:'Amatic SC',cursive;font-size:3.5em}hr{box-sizing:content-box;height:0;overflow:visible}code,pre,samp{font-family:monospace,monospace}pre,samp{font-size:1em}a{background-color:transparent}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted;border-bottom:initial}b{font-weight:bolder}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{color:inherit;display:table;max-width:100%;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio],legend{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}*{box-sizing:border-box}:root{--slide-width:1066.6666666666665px;--slide-height:600px;--presentation-color:#fff;--accent-color:#00fdc8;--alternate-color:#7b9c02;--emphatic-color:#7c7ce0;--link-color:#db4437;--text-color:#252525;--big-title-color:#6e8ae4;--regular-title-color:#000;--inline-code-bg-color:#ddd;--inline-emphatic-code-bg-color:#ddd;--block-code-bg-color:#fafafa;--block-code-text-color:#383a42;--shadow-color:rgba(0,0,0,0.2);--accent-more-color:#00604c;--circling-balloons-bg:#ffd700;--note-icon-bg:#fff;--note-info-bg-color-start:#ffffe0;--note-info-bg-color-end:#a9dbe0;--note-info-accent-color:$note-info-bg-accent-color;--note-warning-bg-color-start:#ffffe0;--note-warning-bg-color-end:#fff176;--note-warning-accent-color:#b8860b;--result-bg-color-start:#f6fbff;--result-bg-color-end:#e3ebf1;--result-accent-color:#3063a9;--did-you-know-accent-color:#800080;--table-border-color:#000;--table-head-bg:#333;--table-foot-bg:#ddd;--table-row-border-color:#ccc;--table-row-bg-even:rgba(234,234,234,0.702);--table-head-color:#fff;--table-foot-color:#000;--quote-bg:#f5f5f5;--quote-color:#383838;--quote-border-color:#c0c0c0;--quote-quotes-color:#7a7a7a;--quote-cite-color:#999;--figcaption-bg:#f5f5f5;--emphatic-accent-color:#38088e;--button-color:currentColor;--transition-duration:400ms;--transition-easing:ease;--definition-list-width:10em;--definition-list-spacing:0.5em;--show-2-slides-rotation:25deg;--show-2-slides-z-distance:-750px;--show-2-slides-x-distance:380px;--layout-column-gap:1em}@media screen and (prefers-color-scheme:dark){:root{--presentation-color:#2f2f2f;--accent-color:#006d56;--alternate-color:#c8ff00;--emphatic-color:#00004c;--link-color:#ff4d3e;--text-color:#fff;--big-title-color:#6283ec;--regular-title-color:#fff;--inline-code-bg-color:#444;--inline-emphatic-code-bg-color:#c1bfbf;--block-code-bg-color:#23241f;--block-code-text-color:#f8f8f2;--shadow-color:rgba(255,255,255,0.2);--accent-more-color:#9dffeb;--circling-balloons-bg:#d29e25;--note-icon-bg:#fff;--note-info-bg-color-start:#61bdca;--note-info-bg-color-end:#015861;--note-info-accent-color:#003135;--note-warning-bg-color-start:#cccc06;--note-warning-bg-color-end:#7b6e00;--note-warning-accent-color:#544a00;--result-bg-color-start:#243848;--result-bg-color-end:#0f121f;--result-accent-color:#f9ffee;--did-you-know-accent-color:#ff2cff;--table-border-color:#fff;--table-head-bg:#bfbfbf;--table-foot-bg:#2b2b2b;--table-row-border-color:#313131;--table-row-bg-even:rgba(41,41,41,0.702);--table-head-color:#000;--table-foot-color:#fff;--quote-bg:#232227;--quote-color:#d8d8d8;--quote-border-color:#918cb5;--quote-quotes-color:#4d46c7;--quote-cite-color:#6084ff;--figcaption-bg:#232323;--emphatic-accent-color:#6734c3;--button-color:#333}}@media screen{.bespoke-parent{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;perspective:900px;overflow:hidden;background-color:var(--presentation-color);color:var(--text-color);font-size:24px}.bespoke-parent:not(.emphatic){transition:background-color var(--transition-duration) var(--transition-easing)}.bespoke-slide{position:absolute;width:1066.6666666666665px;height:600px;top:50%;left:50%;margin-left:-533.3333333333333px;margin-top:-300px;overflow:hidden;contain:size layout style;content-visibility:auto}.bespoke-inactive{opacity:0;pointer-events:none}.bespoke-inactive .bespoke-bullet-inactive{transition:opacity .4s ease}.bespoke-inactive:not(.bespoke-after-1):not(.bespoke-before-1):not(.bespoke-after-2):not(.bespoke-before-2):not(.bespoke-after-3):not(.bespoke-before-3){display:none}}h2{font-size:1.5em}h3,ol.columns-3>li>h1,ol.columns-3>li>h2,ol.columns-3>li>h3,ol.columns-3>li>h4,ol.columns-3>li>h5,ol.columns-3>li>h6,ul.columns-3>li>h1,ul.columns-3>li>h2,ul.columns-3>li>h3,ul.columns-3>li>h4,ul.columns-3>li>h5,ul.columns-3>li>h6{font-size:1.25em}h4,h5,h6{font-size:1em}h2,h3,h4,h5,h6{font-family:'Source Code Pro',monospace;color:var(--regular-title-color)}h1,h2,h3,h4,h5,h6{font-weight:400;margin:0 0 .25em;line-height:1em}li,p{font-size:24px;line-height:1.5em}strong{font-weight:700;color:#00b18c}article{font-family:'Source Code Pro',monospace}a:link,a:visited{color:var(--link-color);text-decoration:none}a:hover{text-decoration:underline}code{font-size:.75em;background-color:var(--inline-code-bg-color);color:inherit;border-radius:3px}pre>code{font-size:.83333em;color:inherit}pre{color:var(--block-code-text-color);background:var(--block-code-bg-color);border-radius:.15em;padding:.5em;overflow-x:auto;outline:1px solid silver;box-shadow:3px 3px 10px var(--shadow-color);max-width:1026.6666666666665px}pre code span{word-wrap:break-word;word-break:break-all}p{text-align:justify}h1>code,h2>code,h3>code,h4>code,h5>code,h6>code,pre>code{background-color:inherit;border-radius:inherit}ol.no-list-icon,ul.no-list-icon{list-style-type:none}ol.columns-3,ul.columns-3{display:flex;flex-direction:row}ol.columns-3>li,ul.columns-3>li{flex:1}ol.columns-3>li:not(:last-of-type),ul.columns-3>li:not(:last-of-type){margin-right:1em}dd,dt{margin-bottom:.5em}dt{float:left;clear:left;width:var(--definition-list-width);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:right;font-weight:700;padding-right:1em;position:relative}dd{margin-left:calc(var(--definition-list-width) + var(--definition-list-spacing))}dl.width-10{--definition-list-width:10%}dl.width-20{--definition-list-width:20%}dl.width-30{--definition-list-width:30%}dl.width-40{--definition-list-width:40%}dl.width-50{--definition-list-width:50%}del{color:gray}button{color:var(--button-color)}table,thead{border-bottom:3px solid var(--table-border-color)}table{border-collapse:collapse;border-spacing:0;border-top:3px solid var(--table-border-color);border-left:none;border-right:none;box-shadow:10px 10px 10px var(--shadow-color)}thead{background:var(--table-head-bg)}thead code{background:var(--text-color);color:var(--presentation-color)}tfoot{background:var(--table-foot-bg);color:var(--table-foot-color)}tr{border-top:1px solid var(--table-row-border-color);background-color:initial}tr:nth-of-type(even){background-color:var(--table-row-bg-even)}th{color:var(--table-head-color);font-weight:400;text-align:inherit}td,th{padding:.3em .5em}table.aero-rows td{padding-top:.8em;padding-bottom:.8em}table.aero-columns td{padding-left:1em;padding-right:1em}blockquote{margin:.25em 0;padding:.25em 40px;background:var(--quote-bg);box-shadow:4px 4px 4px var(--shadow-color);line-height:1.45;font-size:18px;font-family:Georgia,serif;font-style:italic;color:var(--quote-color);border:1px solid var(--quote-border-color)}blockquote.centered{margin-left:auto;margin-right:auto}blockquote>p{margin:.5em auto}blockquote::before{content:\"\\201C\";display:block;position:absolute;left:-.25em;top:-.25em;font-size:80px;color:var(--quote-quotes-color)}blockquote cite{display:block;margin-top:5px;font-size:75%;color:var(--quote-cite-color)}blockquote cite::before{content:\"\\2014 \\2009\"}kbd{padding:.1em .6em;font-size:.8em;border:1px solid #ccc;font-family:Consolas,Menlo,Monaco,monospace;background-color:#f7f7f7;color:#333;box-shadow:0 4px 0 var(--shadow-color),0 0 0 2px #fff inset;border-radius:3px;display:inline-block;margin:0 .1em;text-shadow:0 1px 0 #fff;line-height:1.3;white-space:nowrap;top:0;transition:top 40ms ease-out,box-shadow 40ms ease-out}kbd:hover{top:4px;box-shadow:0 0 0 var(--shadow-color),0 0 0 2px #fff inset}figcaption{background-color:var(--figcaption-bg);padding:5px;margin-bottom:3px}blockquote,figure.embedded-caption,kbd{position:relative}figure.embedded-caption figcaption{position:absolute;background-color:rgba(0,0,0,.25)}figure.embedded-caption figcaption.caption-bottom{bottom:1em}figure.embedded-caption figcaption.caption-top{top:1em;left:0;right:0}figure.embedded-caption figcaption.caption-bottom{left:0;right:0}.push-right{float:right;margin-left:1.25em}.push-left{float:left;margin-right:1.25em}.push-code-right pre{float:right;clear:right}.push-code-left pre,.push-code-left>code{float:left;clear:left}.push-code-right-without-clearing pre{clear:none;float:right}.push-code-right-without-clearing>code{float:right}.flex-align-center{align-self:center}.flex-align-start{align-self:flex-start}.flex-align-end{align-self:flex-end}.alternate-color{color:var(--alternate-color)}.compact-code pre,.compact-code~pre,pre.compact-code{line-height:1em}.compact-code-mid pre,.compact-code-mid~pre,pre.compact-code-mid{line-height:1em;font-size:90%}.compact-code-more pre,.compact-code-more~pre,pre.compact-code-more{line-height:1em;font-size:75%}.figure-slides{position:relative}.figure-slides.clean .bespoke-bullet:not(.bespoke-bullet-current):not(:last-child){visibility:hidden;opacity:0}.figure-step:not(:first-child){position:absolute;top:0;left:0}a.bookmarklet{border-radius:5px;border:2px solid silver;padding:4px 7px;background-color:rgba(255,255,255,.1);transition:all .2s ease-out}a.bookmarklet:hover{text-decoration:none;background-color:#b66c7e;color:#ddd;border-color:#333;cursor:move}.badge{display:inline-block;background-color:var(--presentation-color);border-radius:4px;border:1px solid var(--text-color);color:#a9a9a9;font-size:75%;line-height:1em;padding:.1em .2em}.badge.type1{color:teal;border-color:teal}.badge.type2{color:#6495ed;border-color:#6495ed}input.switch{-webkit-appearance:none;appearance:none}input.switch~label{position:relative;cursor:pointer;-webkit-user-select:none;user-select:none}input.switch~label::after,input.switch~label::before{content:' ';display:inline-block;position:relative;top:calc((100% - .75em)/ 2 + .5em);margin-right:.25em;height:.75em;width:1.5em;background-color:#f77;border-radius:5px;box-shadow:inset 0 .1em 0 var(--shadow-color);transition:all .1s ease-in}input.switch~label::after{position:absolute;left:0;width:.75em;height:.55em;top:calc((100% - .75em)/ 2 + .1em);bottom:calc((100% - .75em)/ 2 + .1em);margin-left:.1em;background-color:#fff;border-radius:.15em;box-shadow:inset 0 -.2em 0 var(--shadow-color)}input.switch:checked~label::before{background-color:#2ae82a}input.switch:checked~label::after{margin-left:.65em}.bespoke-active .underline.upon-activation::after,.full-width{width:100%}.large-width{width:80%}.medium-width{width:60%}.small-width{width:40%}.full-height{height:100%}.huge-height{height:80%}.large-height{height:60%}.medium-height{height:40%}.small-height{height:20%}.block{display:block}.floating-portrait-container *,.portrait,.portrait img{display:inline-block;width:150px;height:150px;border-radius:50%}.floating-portrait-container * figcaption,.portrait figcaption,.portrait img figcaption{background-color:transparent}.floating-portrait-container{position:relative}.floating-portrait-container *{margin:0;animation:floating 2s ease-in-out 0s infinite alternate}.floating-portrait-container::after{content:\" \";position:absolute;width:100%;height:20%;left:0;right:0;bottom:-20%;background:radial-gradient(ellipse closest-side,rgba(21,21,21,.25) 0,rgba(255,255,255,0) 100%);z-index:-1;animation:floated-element-shadow 2s ease-in-out 0s infinite alternate}.flips{transition:transform .6s ease-out}.flips *{margin:0}.flips:hover{transform:rotateY(720deg)}.portrait{shape-outside:circle(50%)}.contain{max-width:100%;max-height:100%}.slide-contain{max-width:var(--slide-width);max-height:var(--slide-height)}.half-width{width:50%}.three-quarter-width{width:75%}.full-width-slides,.full-width-slides img{max-width:100%}.centered{margin-left:auto;margin-right:auto}.centered.img{display:block}.center-aligned{text-align:center}.emoji{height:1em;width:1em;vertical-align:middle}.on-line{height:1em;line-height:1em}.markdown-it-container>p,.no-margin,div.did-you-know>p,div.result>p{margin:0}.no-padding{padding:0}@media (prefers-color-scheme:dark){.invert-colors-dark-mode{filter:invert(1)}}.no-bullets,.no-list-icon{list-style-type:none}.horizontal-list{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:space-between}.multi-column-list-2,.multi-column-list-3{padding-left:0;column-count:2;list-style-position:inside}.multi-column-list-3{column-count:3}.multi-column-list-4,.multi-column-list-5{padding-left:0;column-count:4;list-style-position:inside}.multi-column-list-5{column-count:5}.note{border:1px solid transparent;list-style-type:none;border-radius:5px;box-shadow:3px 3px 3px var(--shadow-color);padding:.3em .5em}.note>p:first-of-type{margin-top:0}.note::before{margin-right:1rem;width:1.5em;height:1.5em;display:inline-block;float:left;shape-outside:circle(50%);text-align:center;line-height:1.5em;font-size:1em;box-sizing:border-box;background:var(--note-icon-bg);border-radius:50%;color:#000}.note.info{border-color:var(--note-info-accent-color);background:linear-gradient(to right bottom,var(--note-info-bg-color-start),var(--note-info-bg-color-end))}.note.info strong{color:var(--note-info-accent-color)}.note.info::before{content:\"ℹ️\"}.note,.note.warning{border-color:var(--note-warning-accent-color);background:linear-gradient(to right bottom,var(--note-warning-bg-color-start),var(--note-warning-bg-color-end))}.note strong,.note.warning strong{color:var(--note-warning-accent-color)}.note.warning::before,.note::before{content:\"⚠️\"}.markdown-it-container,div.did-you-know,div.result{position:relative}.markdown-it-container::before,div.did-you-know::before,div.result::before{content:attr(data-before)}div.result{margin-left:0;padding:.75em .5em .5em;background-image:linear-gradient(135deg,var(--result-bg-color-start),var(--result-bg-color-end));border:1px dashed var(--result-accent-color)}div.result::before{background-color:var(--result-accent-color);color:var(--presentation-color);display:inline-block;transform:rotate(-3deg);font-weight:700;position:absolute;top:-3px;left:-3px;font-size:.6em;line-height:1.5em;padding:0 .5em}div.did-you-know{background-image:url(https://fegemo.github.io/cefet-front-end/images/question-mark-bg.png);border-left:4px solid var(--did-you-know-accent-color);box-shadow:5px 5px 5px var(--shadow-color);padding-right:1em}div.did-you-know::before{display:block;margin:4px;background-color:#fff;font-family:Purisa,\"Comic Sans MS\",cursive;font-weight:700;color:var(--did-you-know-accent-color)}div.did-you-know,div.did-you-know>p{padding-left:.5em}.layout-split-2,.layout-split-3,.layout-split-4,.layout-split-5{flex-direction:row;display:flex;justify-content:center;align-items:stretch;height:100%;width:100%}.layout-split-2>section,.layout-split-3>section{width:50%;flex-grow:1;text-align:center}.layout-split-3>section{width:33.33333333333333%}.layout-split-4>section,.layout-split-5>section{width:25%;flex-grow:1;text-align:center}.layout-split-5>section{width:20%}.code-split-2,.code-split-3{display:flex;align-items:flex-start}.code-split-2>*,.code-split-3>*{flex:1}.code-split-2>:not(:first-child),.code-split-3>:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.code-split-2>:not(:last-child),.code-split-3>:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.code-split-2 pre.hljs,.code-split-3 pre.hljs{margin-top:0;margin-bottom:0}.code-split-2 pre.hljs:not(:last-of-type),.code-split-3 pre.hljs:not(:last-of-type){border-right:3px double #fff}.code-split-2 pre.hljs+pre.hljs,.code-split-3 pre.hljs+pre.hljs{margin-top:0}.four-column-code code,.four-column-code pre,.three-column-code code,.three-column-code pre,.two-column-code code,.two-column-code pre{column-rule:3px double var(--shadow-color);column-gap:2em}.two-column-code code,.two-column-code pre{column-count:2}.three-column-code code,.three-column-code pre{column-count:3}.four-column-code code,.four-column-code pre{column-count:4}.floating-right-code pre{float:right;width:auto;margin-left:1em}.card-list{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around;list-style-type:none;padding:0}.card-list li{flex:1;display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:flex-start;margin-right:.25em}.card-list li figcaption,.card-list li h1,.card-list li h2,.card-list li h3,.card-list li h4,.card-list li h5,.card-list li h6{font-size:1em;text-align:center;order:1;margin-top:.5em!important}.card-list li img{max-width:100%;margin:auto;object-fit:contain;object-position:center;order:0}.card-list.polaroid li{background:var(--presentation-color);box-shadow:0 8px 16px var(--shadow-color),0 4px 16px var(--shadow-color)}.card-list.polaroid li img{background-color:#f0f8ff;border:11px solid var(--presentation-color);image-rendering:pixelated}.card-list.cover li img{object-fit:cover}.card-list.contain li img{object-fit:contain}.card-list.title-top figcaption,.card-list.title-top h1,.card-list.title-top h2,.card-list.title-top h3,.card-list.title-top h4,.card-list.title-top h5,.card-list.title-top h6{order:0}.card-list.title-top img{order:1}.inverted-text-colors{background:var(--text-color);color:var(--presentation-color)}.smaller-text-90{font-size:90%}.smaller-text-80{font-size:80%}.smaller-text-70{font-size:70%}.smaller-text-60{font-size:60%}.bring-forward{position:relative;z-index:1}.item-code-with-image,.item-code-with-result{padding-left:0;list-style-type:none}.item-code-with-image li,.item-code-with-result li{clear:right;margin-bottom:1em}.item-code-with-image li>.result,.item-code-with-image li>img,.item-code-with-result li>.result,.item-code-with-result li>img{float:right;margin-left:1em}.bespoke-slide p,.bespoke-slide pre,.item-code-with-image li>.result,.item-code-with-result li>.result{margin-top:0}.bouncing-left{animation:bouncing-left .8s cubic-bezier(.22,.61,.36,1) 0s infinite alternate}.delay-1{animation-delay:.2s;transition-delay:.2s}.delay-2{animation-delay:.4s;transition-delay:.4s}.delay-3{animation-delay:.6s;transition-delay:.6s}.delay-4{animation-delay:.8s;transition-delay:.8s}.delay-5{animation-delay:1s;transition-delay:1s}.delay-6{animation-delay:1.2s;transition-delay:1.2s}.underline{position:relative}.underline::after{content:\" \";position:absolute;bottom:5%;left:0;width:100%;border:2px solid currentColor}.underline.upon-activation::after{transition:width .4s ease-out .4s;width:0}.jump.upon-activation{display:inline-block;transition:all .2s cubic-bezier(0,0,.27,1.58) .7s;opacity:0;transform:scale(.2) translateY(50%)}.bespoke-active .jump.upon-activation{opacity:1;transform:scale(.6) translateY(0)}.delay-200,.delay-200::after,.delay-200::before{animation-delay:.2s!important;transition-delay:.2s!important}.delay-400,.delay-400::after,.delay-400::before{animation-delay:.4s!important;transition-delay:.4s!important}.delay-600,.delay-600::after,.delay-600::before{animation-delay:.6s!important;transition-delay:.6s!important}.delay-800,.delay-800::after,.delay-800::before{animation-delay:.8s!important;transition-delay:.8s!important}.delay-1000,.delay-1000::after,.delay-1000::before{animation-delay:1s!important;transition-delay:1s!important}.delay-1200,.delay-1200::after,.delay-1200::before{animation-delay:1.2s!important;transition-delay:1.2s!important}.delay-1400,.delay-1400::after,.delay-1400::before{animation-delay:1.4s!important;transition-delay:1.4s!important}.delay-1600,.delay-1600::after,.delay-1600::before{animation-delay:1.6s!important;transition-delay:1.6s!important}.delay-1800,.delay-1800::after,.delay-1800::before{animation-delay:1.8s!important;transition-delay:1.8s!important}.delay-2000,.delay-2000::after,.delay-2000::before{animation-delay:2s!important;transition-delay:2s!important}.delay-2200,.delay-2200::after,.delay-2200::before{animation-delay:2.2s!important;transition-delay:2.2s!important}.delay-2400,.delay-2400::after,.delay-2400::before{animation-delay:2.4s!important;transition-delay:2.4s!important}.delay-2600,.delay-2600::after,.delay-2600::before{animation-delay:2.6s!important;transition-delay:2.6s!important}.delay-2800,.delay-2800::after,.delay-2800::before{animation-delay:2.8s!important;transition-delay:2.8s!important}.delay-3000,.delay-3000::after,.delay-3000::before{animation-delay:3s!important;transition-delay:3s!important}.shaking{animation:shaking .5s ease-out 0s 1}.shaking:nth-child(2n){animation-delay:.1s}.cool-rotation-x{animation:cool-rotation-x 1.2s ease-in-out 0s infinite alternate}@media screen{.transition-giant-wheel .bespoke-active,.transition-grow .bespoke-active,.transition-sliding .bespoke-active,.transition-subtle .bespoke-active{transform:none;opacity:1}.transition-sliding .bespoke-slide{transition-property:transform,opacity;transition-duration:var(--transition-duration);transition-timing-function:var(--transition-easing)}.transition-sliding .bespoke-before{transform:translate3d(-101%,0,0)}.transition-sliding .bespoke-after{transform:translate3d(101%,0,0)}.transition-subtle .bespoke-slide{transition-property:transform,opacity;transition-duration:calc(.75*var(--transition-duration));transition-timing-function:var(--transition-easing)}.transition-subtle .bespoke-before{transform:translateX(-1000px)}.transition-subtle .bespoke-after{transform:translateX(1000px)}.transition-subtle .bespoke-before-1{transform:translateX(-100px)}.transition-subtle .bespoke-after-1{transform:translateX(100px)}.transition-subtle .bespoke-before-2{transform:translateX(-300px)}.transition-subtle .bespoke-after-2{transform:translateX(300px)}.transition-giant-wheel .bespoke-slide{transition-property:transform,opacity;transition-duration:var(--transition-duration);transition-timing-function:var(--transition-easing);transform-origin:50% 100%}.transition-giant-wheel .bespoke-before{transform:rotateX(90deg) scale(.5)}.transition-giant-wheel .bespoke-after{transform:rotateX(-90deg) scale(.5)}.transition-grow .bespoke-slide{transition-property:transform,opacity;transition-duration:calc(.5*var(--transition-duration));transition-timing-function:var(--transition-easing)}.transition-grow .bespoke-before{transform:scale(1.1)}.transition-grow .bespoke-after{transform:scale(.9)}}@media screen and (prefers-reduced-motion){.transition-giant-wheel .bespoke-slide,.transition-grow .bespoke-slide,.transition-sliding .bespoke-slide,.transition-subtle .bespoke-slide{transition-property:none}}.bespoke-slide{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;padding:1.5rem}.bespoke-slide h1,.bespoke-slide h2,.bespoke-slide h3,.bespoke-slide h4,.bespoke-slide h5,.bespoke-slide h6{margin:0 0 .5em;padding:0}.layout-title{justify-content:space-around;align-items:center;text-align:center;padding:0}.layout-title h1{color:var(--big-title-color)}.layout-title h2{background-color:var(--accent-color);width:100%;padding:2em 0;margin:1em 0 0}.layout-title h2 strong{color:var(--accent-more-color)}.layout-section-header{flex-wrap:wrap;justify-content:center;padding:0}.layout-section-header::after{display:block;content:\" \";position:absolute;top:0;right:0;width:50%;height:100%;z-index:-1;background-color:var(--accent-color)}.layout-section-header .content{display:block;box-sizing:border-box}.layout-section-header .content dd,.layout-section-header .content dt,.layout-section-header .content li,.layout-section-header .content p{background-color:var(--presentation-color)}.layout-section-header .content li,.layout-section-header .content p{display:inline}.layout-section-header .content p::after{content:\" \";display:block;margin-bottom:.5em}.layout-section-header .content::after{content:\" \";display:block;width:3em;height:1px;border-bottom:3px solid var(--presentation-color)}.layout-section-header .content li::before{content:\" \";display:list-item;float:left}.layout-section-header .content li::after{content:\" \";display:block}.layout-section-header>*{width:50%;padding:0 1em}.layout-section-header>ol,.layout-section-header>ul{padding-left:2em}.layout-section-header h1{margin:0;text-align:center;height:70%;box-sizing:border-box;padding:2em .15em .5em}.layout-section-header h2{margin:0;padding:0;text-align:center;height:30%}.layout-centered,.layout-centered-vertical{justify-content:center}.layout-centered,.layout-centered-horizontal{align-items:center}.layout-2-column-content,.layout-3-column-content,.layout-4-column-content{display:grid;grid-template-rows:auto 1fr;column-gap:var(--layout-column-gap)}.layout-2-column-content{grid-template-columns:1fr 1fr}.layout-2-column-content .span-columns,.layout-2-column-content h1,.layout-2-column-content h2,.layout-2-column-content h3,.layout-2-column-content h4,.layout-2-column-content h5,.layout-2-column-content h6{grid-column:1/3}.layout-3-column-content{grid-template-columns:1fr 1fr 1fr}.layout-3-column-content .span-columns,.layout-3-column-content h1,.layout-3-column-content h2,.layout-3-column-content h3,.layout-3-column-content h4,.layout-3-column-content h5,.layout-3-column-content h6{grid-column:1/4}.layout-4-column-content{grid-template-columns:1fr 1fr 1fr 1fr}.layout-4-column-content .span-columns,.layout-4-column-content h1,.layout-4-column-content h2,.layout-4-column-content h3,.layout-4-column-content h4,.layout-4-column-content h5,.layout-4-column-content h6{grid-column:1/5}.layout-2-column-highlight-and-content{display:grid;grid-template-rows:auto 1fr;grid-template-columns:minmax(auto,1fr) 3fr;column-gap:1em;perspective:inherit}.layout-2-column-highlight-and-content h1,.layout-2-column-highlight-and-content h2,.layout-2-column-highlight-and-content h3,.layout-2-column-highlight-and-content h4,.layout-2-column-highlight-and-content h5,.layout-2-column-highlight-and-content h6{grid-column:1/3}.layout-2-column-highlight-and-content>:nth-child(2){width:90%;margin:0 0 0 auto;box-shadow:0 0 20px transparent;transition:all .5s ease .4s;opacity:.5;transform:scale(.75);transform-origin:right}.layout-2-column-highlight-and-content>:nth-child(2)>iframe,.layout-2-column-highlight-and-content>:nth-child(2)>img,.layout-tall-figure-left>:nth-child(2)>img,.layout-tall-figure-left>img:nth-child(2),.layout-tall-figure-right>:nth-child(2)>img,.layout-tall-figure-right>img:nth-child(2){max-width:100%;max-height:100%}.layout-2-column-highlight-and-content>:nth-child(2)>iframe{height:100%}.layout-2-column-highlight-and-content.bespoke-active>:nth-child(2){transform:rotateY(30deg) scale(.9);-moz-transform:rotateY(8deg) scale(.9);opacity:1;box-shadow:-20px 20px 20px var(--shadow-color)}.layout-2-column-highlight-and-content .span-columns{grid-column:1/3}.layout-3-column-element-with-titles-expansible{display:flex;flex-direction:column;flex-wrap:wrap;align-items:flex-start}.layout-3-column-element-with-titles-expansible>*{width:calc(33% - 1rem)}.layout-3-column-element-with-titles-expansible h1,.layout-3-column-element-with-titles-expansible h2,.layout-3-column-element-with-titles-expansible h3,.layout-3-column-element-with-titles-expansible h4,.layout-3-column-element-with-titles-expansible h5,.layout-3-column-element-with-titles-expansible h6{margin:auto 0}.layout-3-column-element-with-titles-expansible h1:not(:last-of-type),.layout-3-column-element-with-titles-expansible h2:not(:last-of-type),.layout-3-column-element-with-titles-expansible h3:not(:last-of-type),.layout-3-column-element-with-titles-expansible h4:not(:last-of-type),.layout-3-column-element-with-titles-expansible h5:not(:last-of-type),.layout-3-column-element-with-titles-expansible h6:not(:last-of-type){margin-right:1rem}.layout-3-column-element-with-titles-expansible>:nth-child(2n){height:calc(100% - 2.5em);margin:0;position:relative}.layout-3-column-element-with-titles-expansible>:nth-child(2n):not(:last-of-type){margin-right:1rem}.layout-3-column-element-with-titles-expansible>:nth-child(2n):hover{left:0;width:100%;z-index:1}.layout-3-column-element-with-titles-expansible>:nth-child(2n):nth-of-type(2){transition-duration:50ms}.layout-3-column-element-with-titles-expansible>:nth-child(2n):nth-of-type(2):hover{left:-33%}.layout-3-column-element-with-titles-expansible>:nth-child(2n):nth-of-type(3){transition:none}.layout-3-column-element-with-titles-expansible>:nth-child(2n):nth-of-type(3):hover{left:-67%}.layout-2-column-content-zigzag{flex-direction:row;flex-wrap:wrap;align-items:flex-start}.layout-2-column-content-zigzag h1,.layout-2-column-content-zigzag h2{width:100%}.layout-2-column-content-zigzag>:not(:first-child){width:48%}.layout-2-column-content-zigzag .span-columns{grid-column:1/3}.layout-circling-balloons h1,.layout-circling-balloons h2,.layout-circling-balloons h3,.layout-circling-balloons h4,.layout-circling-balloons h5,.layout-circling-balloons h6{z-index:1}.layout-circling-balloons>ul{position:absolute;left:0;top:0;width:100%;height:100%;margin:0}.layout-circling-balloons>ul>li{position:absolute;width:200px;height:200px;line-height:1em;left:calc(50% - 100px);top:calc(50% - 100px);padding:0;margin:0;border-radius:50%;background:var(--circling-balloons-bg);color:var(--text-color);overflow:hidden;list-style-type:none;transition:all 250ms ease;animation:circling 36s linear 0s infinite}.layout-circling-balloons>ul>li:nth-of-type(1){animation-delay:0s}.layout-circling-balloons>ul>li:nth-of-type(2){animation-delay:-12s}.layout-circling-balloons>ul>li:nth-of-type(3){animation-delay:-24s}.layout-circling-balloons>ul>li>:first-child{position:absolute;top:0;right:0;bottom:0;left:0;margin:0;padding-left:1.5em;padding-right:1.5em;transition:all 250ms ease}.layout-circling-balloons>ul>li>:first-child img{display:block;width:125px;height:125px;margin:37.5px auto}.layout-circling-balloons>ul>li>:nth-child(2){margin-top:200px;padding:1em}.layout-circling-balloons>ul>li:hover{width:26em;height:10em;top:calc(50% - 5em);left:calc(50% - 13em);border-radius:2em;overflow:visible;z-index:2}.layout-circling-balloons>ul>li:hover>:first-child{transform:translateY(-50%)}.layout-circling-balloons>ul>li:hover>:nth-child(2){margin-top:1em}.layout-circling-balloons>ul:hover>li{animation-play-state:paused}.layout-tall-figure-left,.layout-tall-figure-right{display:grid;grid-template-rows:auto 1fr}.layout-tall-figure-left{grid-template-columns:.5fr 1fr}.layout-tall-figure-left .span-columns,.layout-tall-figure-left h1,.layout-tall-figure-left h2,.layout-tall-figure-left h3,.layout-tall-figure-left h4,.layout-tall-figure-left h5,.layout-tall-figure-left h6,.layout-tall-figure-right .span-columns,.layout-tall-figure-right h1,.layout-tall-figure-right h2,.layout-tall-figure-right h3,.layout-tall-figure-right h4,.layout-tall-figure-right h5,.layout-tall-figure-right h6{grid-column:1/3}.layout-tall-figure-right{grid-template-columns:1fr .5fr}.layout-tall-figure-right>:nth-child(2){grid-column:2/3}.layout-tall-figure-right>:nth-child(3){grid-row:2/3}.layout-main-point,[data-bespoke-state=emphatic]{justify-content:center;align-items:center}.layout-main-point.bespoke-parent,.layout-main-point.bespoke-slide,[data-bespoke-state=emphatic].bespoke-parent,[data-bespoke-state=emphatic].bespoke-slide{background-color:var(--emphatic-color)}.emphatic h1,.emphatic h2,.emphatic h3,.emphatic h4,.emphatic h5,.emphatic h6,.layout-main-point.bespoke-slide h1,.layout-main-point.bespoke-slide h2,.layout-main-point.bespoke-slide h3,.layout-main-point.bespoke-slide h4,.layout-main-point.bespoke-slide h5,.layout-main-point.bespoke-slide h6,[data-bespoke-state=emphatic].bespoke-slide h1,[data-bespoke-state=emphatic].bespoke-slide h2,[data-bespoke-state=emphatic].bespoke-slide h3,[data-bespoke-state=emphatic].bespoke-slide h4,[data-bespoke-state=emphatic].bespoke-slide h5,[data-bespoke-state=emphatic].bespoke-slide h6{color:#fff}.full-page-video-caption{position:absolute;bottom:30px;font-size:.75em;left:50%;width:16em;text-align:center;margin-left:-8em;padding:0;background-color:rgba(255,255,8,.65);border-radius:.25em;box-shadow:3px 3px 3px var(--shadow-color)}@media screen{.bespoke-scale-parent{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;perspective:900px;pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}}.bespoke-backdrop{pointer-events:none}@media print{.bespoke-backdrop{display:none}}.emphatic{background-color:var(--emphatic-color);color:#fff}.emphatic code,.emphatic strong{color:var(--emphatic-accent-color)}.emphatic code{background-color:var(--inline-emphatic-code-bg-color)}.show-active-slide-and-previous .bespoke-before-1{transform:translate3d(calc(-1*var(--show-2-slides-x-distance)),0,var(--show-2-slides-z-distance)) rotateY(var(--show-2-slides-rotation));opacity:1}.show-active-slide-and-previous .bespoke-active{transform:translate3d(var(--show-2-slides-x-distance),0,var(--show-2-slides-z-distance)) rotateY(calc(-1*var(--show-2-slides-rotation)))}[data-bespoke-state=show-active-slide-and-previous].bespoke-before-1{transform:translate3d(calc(-1*var(--show-2-slides-x-distance)),0,var(--show-2-slides-z-distance)) rotateY(var(--show-2-slides-rotation));opacity:0}@media screen{.bespoke-slide .bespoke-bullet{opacity:1;transform:none;transition:all .4s ease}.bespoke-slide .bespoke-bullet-inactive{opacity:0;pointer-events:none;transform:translateX(40px);transition:all .2s ease}.bespoke-slide .bespoke-bullet-off .bespoke-bullet-inactive{display:list-item;opacity:initial;transform:initial}.bespoke-slide .bullet-old{color:gray}.bespoke-slide .bullet-no-anim{transition:none!important}.bespoke-slide .bullet-no-anim.bespoke-bullet-inactive{transform:none}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:3px;z-index:2}.bespoke-progress-bar{position:absolute;height:100%;transition:width .3s ease}.bespoke-progress-bar:before{content:\" \";position:absolute;display:block;width:100%;height:100%;background:#a6a6a6}.bespoke-progress-number{position:absolute;font-size:9px;min-width:2em;height:2em;right:1rem;top:1rem;box-sizing:content-box;background-color:rgba(204,204,204,.6);background-clip:content-box;color:$progress-bar-color;text-align:center;line-height:2em;padding:0;border:3px double rgba(204,204,204,.6)}.bespoke-simple-overview .bespoke-slide{position:absolute;opacity:1;outline:4px solid silver}.bespoke-simple-overview .bespoke-slide:hover{outline-color:#4682b4}.bespoke-simple-overview .bespoke-slide.bespoke-active{transform:translate3d(0,0,-2000px);outline-color:#4682b4;z-index:100}.bespoke-simple-overview .bespoke-slide.bespoke-after:not(.bespoke-after-1):not(.bespoke-after-2):not(.bespoke-after-3):not(.bespoke-after-4){transform:translate3d(7634.667338669354px,0,-2000px);display:none}.bespoke-simple-overview .bespoke-slide.bespoke-before:not(.bespoke-before-1):not(.bespoke-before-2):not(.bespoke-before-3):not(.bespoke-before-4){transform:translate3d(-7634.667338669354px,0,-2000px);display:none}.bespoke-simple-overview .bespoke-slide.bespoke-after-1{transform:translate3d(1090.6667626670505px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-1{transform:translate3d(-1090.6667626670505px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-2{transform:translate3d(2181.333525334101px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-2{transform:translate3d(-2181.333525334101px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-3{transform:translate3d(3272.0002880011516px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-3{transform:translate3d(-3272.0002880011516px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-4{transform:translate3d(4362.667050668202px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-4{transform:translate3d(-4362.667050668202px,0,-2000px)}.bespoke-simple-overview.bespoke-simple-overview-transitioning .bespoke-slide.bespoke-after-1,.bespoke-simple-overview.bespoke-simple-overview-transitioning .bespoke-slide.bespoke-before-1{transition-delay:.1s}.bespoke-simple-overview.bespoke-simple-overview-transitioning .bespoke-slide.bespoke-after-2,.bespoke-simple-overview.bespoke-simple-overview-transitioning .bespoke-slide.bespoke-before-2{transition-delay:.2s}.bespoke-simple-overview.bespoke-simple-overview-transitioning .bespoke-slide.bespoke-after-3,.bespoke-simple-overview.bespoke-simple-overview-transitioning .bespoke-slide.bespoke-before-3{transition-delay:.3s}.bespoke-simple-overview.bespoke-simple-overview-transitioning .bespoke-slide.bespoke-after-4,.bespoke-simple-overview.bespoke-simple-overview-transitioning .bespoke-slide.bespoke-before-4{transition-delay:.4s}.bespoke-simple-overview .bespoke-bullet-inactive{display:list-item;opacity:initial;transform:initial}}:root{--search-result-bg:#ff0;--search-result-focused-bg:#ffa500}#bespoke-search-parent{--search-parent-bg:rgba(0,0,0,0.4);--search-margin:0.5em;--search-bg:rgba(255,255,255,0.2);--search-input-length:12em;--search-input-position:flex-end;--search-input-color:#333;--search-info-color:#333;--search-info-kbd-color:#000;--search-info-kbd-bg:#ccc;--search-no-result-color:#8b0000;position:absolute;left:0;top:0;right:0;bottom:0;display:flex;flex-direction:column;justify-content:var(--search-input-position);align-items:center;pointer-events:none;opacity:0;transition:all .2s ease;background-color:var(--search-parent-bg);font-size:1.25rem;perspective:900px}#bespoke-search-parent.bespoke-search-searching{opacity:1;pointer-events:auto;z-index:1000}#bespoke-search{display:flex;flex-direction:row;justify-content:space-between;flex-wrap:wrap;align-items:baseline;margin:var(--search-margin);padding:1.25em;border-radius:10px;width:calc(var(--search-input-length) + 8em);background-color:var(--search-bg);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);transition:all .3s cubic-bezier(.06,.99,.46,1.16);transform:translateY(-60px) rotateX(90deg);opacity:0}#bespoke-search-results-count{font-size:.75em;font-family:monospace}.bespoke-search-no-result>#bespoke-search-input{outline:1px solid currentColor;border-color:transparent;color:var(--search-no-result-color)}.bespoke-search-result{background-color:var(--search-result-bg,#ff0)}.bespoke-search-result-focused{background-color:var(--search-result-focused-bg,orange)}#bespoke-search-input{width:var(--search-input-length);padding:.15em .25em;border:1px solid currentColor;border-radius:5px;color:var(--search-input-color);font-size:1em}.bespoke-search-searching #bespoke-search{transform:scale(1);opacity:1}#bespoke-search-info{width:100%;margin-top:1em;font-size:.9em;text-align:left;color:var(--search-info-color)}#bespoke-search-info kbd{margin:0 .1em;padding:.1em .6em;border-radius:3px;border:1px solid #ccc;color:var(--search-info-kbd-color);line-height:1.4;font-size:.7em;display:inline-block;box-shadow:0 1px 0 rgba(0,0,0,.6),inset 0 0 0 2px #ccc;background-color:var(--search-info-kbd-bg)}#bespoke-search-info kbd:last-of-type{margin-right:1em}#bespoke-search-info summary{display:list-item;counter-increment:list-item 0;list-style:inside disclosure-closed;cursor:pointer}.bespoke-search-info-pair{margin-right:1em;white-space:nowrap;display:inline-flex;align-items:center;margin-bottom:.25em}#bespoke-search-info[open]>summary:first-of-type{list-style-type:disclosure-open}.bespoke-bullets-off .bespoke-bullet.bespoke-bullet-inactive{opacity:1;transform:none}.bespoke-search-shaking{animation:shaking .5s ease-out 0s 1}@media (prefers-color-scheme:dark){#bespoke-search-parent{--search-parent-bg:rgba(255,255,255,0.4);--search-bg:rgba(0,0,0,0.2);--search-info-color:#eee}}@media print{:root{--slide-spacing:64px}.bespoke-parent,.bespoke-scale-parent{position:relative;display:grid;grid-template-columns:1fr 1fr;column-gap:var(--slide-spacing);row-gap:var(--slide-spacing);transform-origin:left top;width:2197.333333333333px;height:100vh;overflow:visible;transform:scale(.361210916796117)}.bespoke-slide{position:relative;width:1066.6666666666665px;height:600px;outline:2px solid #000!important;page-break-inside:avoid!important}.bespoke-slide .bespoke-bullet-inactive{opacity:1!important;transform:none!important;transition:none!important}@page{margin:75.84px!important}.bespoke-scale-parent{transform:none!important;zoom:1!important}}@media print and (orientation:landscape){.bespoke-parent,.bespoke-scale-parent{--slide-spacing:110px;row-gap:calc(var(--slide-spacing)*1.5);grid-template-columns:repeat(3,1fr);width:2197.333333333333px;transform:scale(.361210916796117)}}"; (require("browserify-css").createStyle(css, { "href": "theme\\theme.css" }, { "insertAt": "bottom" })); module.exports = css;
},{"browserify-css":16}],4:[function(require,module,exports){
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

},{"../dist/theme/fonts.css":2,"../dist/theme/theme.css":3,"bespoke-classes":6}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
module.exports = function(options) {
  return function (deck) {
    var progressParent = document.createElement('div'),
      progressBar = document.createElement('div'),
      slideNumber = document.createElement('aside'),
      prop = options === 'vertical' ? 'height' : 'width';

    progressParent.className = 'bespoke-progress-parent';
    progressParent.appendChild(progressBar);
    progressBar.className = 'bespoke-progress-bar';
    slideNumber.className = 'bespoke-progress-number';
    deck.parent.appendChild(progressParent);
    deck.parent.appendChild(slideNumber);

    deck.on('activate', function(e) {
      var percentage = e.index * 100 / (deck.slides.length - 1),
        number = (e.index + 1) + '';
      progressBar.style[prop] = percentage + '%';
      slideNumber.innerHTML = number.padStart(2, '0');
    });
  };
};

},{}],10:[function(require,module,exports){
module.exports = function(options) {
  return function(deck) {
    var parent = deck.parent,
      currentSlide = deck.slides[deck.slide()] || deck.slides[0],
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

},{}],11:[function(require,module,exports){
(function (global){(function (){
/*!
 * bespoke-search v1.0.0
 *
 * Copyright 2021, Flávio
 * This content is released under the MIT license
 */

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g=(g.bespoke||(g.bespoke = {}));g=(g.plugins||(g.plugins = {}));g.search = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
var css = ":root{--search-result-bg:yellow;--search-result-focused-bg:orange}#bespoke-search-parent{--search-parent-bg:#0006;--search-margin:0.5em;--search-bg:#fff3;--search-input-length:12em;--search-input-position:flex-end;--search-input-color:#333;--search-info-color:#333;--search-info-kbd-color:#000;--search-info-kbd-bg:#ccc;--search-no-result-color:#8b0000;position:absolute;left:0;top:0;right:0;bottom:0;display:flex;flex-direction:column;justify-content:var(--search-input-position);align-items:center;pointer-events:none;opacity:0;transition:all .2s ease;background-color:var(--search-parent-bg);font-size:1.25rem;perspective:900px}#bespoke-search-parent.bespoke-search-searching{opacity:1;pointer-events:auto;z-index:1000}#bespoke-search{display:flex;flex-direction:row;justify-content:space-between;flex-wrap:wrap;align-items:baseline;margin:var(--search-margin);padding:1em;border-radius:10px;box-sizing:content-box;width:calc(var(--search-input-length) + 5em);background-color:var(--search-bg);backdrop-filter:blur(6px);transition:all .3s cubic-bezier(.06,.99,.46,1.16);transform:translateY(-60px) rotateX(90deg);opacity:0}#bespoke-search-results-count{font-size:.75em;font-family:monospace}.bespoke-search-no-result>#bespoke-search-input{outline:1px solid currentColor;border-color:transparent;color:var(--search-no-result-color)}.bespoke-search-result{background-color:var(--search-result-bg,#ff0)}.bespoke-search-result-focused{background-color:var(--search-result-focused-bg,orange)}#bespoke-search-input{width:var(--search-input-length);padding:.25em .45em;border:1px solid currentColor;border-radius:5px;color:var(--search-input-color);font-size:1em}.bespoke-search-searching #bespoke-search{transform:scale(1);opacity:1}#bespoke-search-info{width:100%;margin-top:1em;font-size:.7em;text-align:left;color:var(--search-info-color)}.bespoke-search-info-pair{margin-right:1em;white-space:nowrap;display:inline-flex;align-items:center;margin-bottom:.25em}#bespoke-search-info kbd{margin:0 .1em;padding:.1em .6em;border-radius:3px;border:1px solid #ccc;color:var(--search-info-kbd-color);line-height:1.4;font-size:.7em;display:inline-block;box-shadow:0 1px 0 #0009,inset 0 0 0 2px #ccc;background-color:var(--search-info-kbd-bg)}#bespoke-search-info kbd:last-of-type{margin-right:1em}#bespoke-search-info summary{display:list-item;counter-increment:list-item 0;list-style:inside disclosure-closed;cursor:pointer}#bespoke-search-info[open]>summary:first-of-type{list-style-type:disclosure-open}.bespoke-bullets-off .bespoke-bullet.bespoke-bullet-inactive{opacity:1;transform:none}.bespoke-search-shaking{animation:shaking .5s ease-out 0s 1}@keyframes shaking{0%{transform:translate3d(4px,0,0)}10%{transform:translate3d(-7px,-5px,0)}20%{transform:translate3d(8px,5px,0)}30%{transform:translate3d(-7px,3px,0)}40%{transform:translate3d(9px,-3px,0)}50%{transform:translate3d(-4px,3px,0)}60%{transform:translate3d(4px,-4px,0)}70%{transform:translate3d(-5px,-4px,0)}80%{transform:translate3d(4px,2px,0)}90%{transform:translate3d(-3px,-1px,0)}100%{transform:translate3d(0,0,0)}}@media (prefers-color-scheme:dark){#bespoke-search-parent{--search-parent-bg:#fff6;--search-bg:#0003;--search-info-color:#eee}}"; (_dereq_("browserify-css").createStyle(css, { "href": "lib\\bespoke-search.css" }, { "insertAt": "bottom" })); module.exports = css;
},{"browserify-css":3}],2:[function(_dereq_,module,exports){
const keymage = _dereq_('keymage')
const makeArray = obj => Array.isArray(obj) ? obj : [obj]
const characterRemapper = {
  source: 'áàãâéèêíìóòõôúùç',
  target: 'aaaaeeeiioooouuc'
}

function toNeutralRegex(text) {
  let accented = []
  let currentNeutral = characterRemapper.target[0]
  for (let i = 0; i <= characterRemapper.source.length; i++) {
    if (characterRemapper.target[i] !== currentNeutral || i === characterRemapper.source.length) {
      const characterGroup = `[${accented.concat(currentNeutral).join('')}]`
      text = text.replaceAll(
        new RegExp(characterGroup, 'gi'),
        characterGroup
      )
      accented = []
      currentNeutral = characterRemapper.target[i]
    }
    accented.push(characterRemapper.source[i])
  }
  return text
}

module.exports = function({
  insertStyles = true,
  keys: {
    show: showKey = 'ctrl-f',
    dismiss: dismissKey = 'escape',
    trigger: triggerKey = 'enter',
    next: nextKey = 'tab',
    previous: previousKey = 'shift-tab'
  } = {},
  text: {
    searchHere: textSearchHere = 'Search here...',
    instructions: textInstructions = 'Instructions',
    openSearch: textOpenSearch = 'Open search',
    closeSearch: textCloseSearch = 'Close search',
    search: textSearch = 'Search',
    nextResult: textNextResult = 'Next result',
    previousResult: textPreviousResult = 'Previous result'
  } = {}
} = {}) { 
  
  showKey = makeArray(showKey)
  dismissKey = makeArray(dismissKey)
  triggerKey = makeArray(triggerKey)
  nextKey = makeArray(nextKey)
  previousKey = makeArray(previousKey)
  
  return function(deck) {
    const cachedSlidesText = deck.slides.map((slide, i) => ({i: i, text: slide.textContent}))
    let searchParentEl
    let searchEl
    let searchInputEl
    let searchResultsCountEl
    let searchInfoEl
    let currentResultIndex
    let activeSearchPattern = ''
    let results = []

    function clearResults() {
      let parentsOfResults = new Set()

      results.forEach(r => {
        let originalContent = document.createTextNode(r.el.textContent)
        parentsOfResults.add(r.el.parentNode)
        r.el.parentNode.replaceChild(originalContent, r.el)
      })
      parentsOfResults.forEach(p => p.normalize())
      searchResultsCountEl.innerHTML = ''
      activeSearchPattern = ''

      results = []
    }

    function show(e) {
      e.preventDefault()
      searchParentEl.classList.add('bespoke-search-searching')
      searchEl.classList.remove('bespoke-search-no-result')
      searchInputEl.focus()
      keymage.pushScope('searching')
      deck.parent.classList.add('bespoke-bullets-off')
    }

    function hide(e) {
      e.preventDefault()
      e.stopPropagation()
      e.stopImmediatePropagation()

      searchInputEl.value = ''
      searchParentEl.classList.remove('bespoke-search-searching')
      searchEl.classList.remove('bespoke-search-no-result')
      keymage.popScope()
      clearResults()
      deck.parent.classList.remove('bespoke-bullets-off')
      searchInputEl.blur()
      deck.parent.focus()
    }

    function reportResultStats() {
      const noResults = results.length === 0
      searchResultsCountEl.innerHTML = noResults ? '' :
        `${currentResultIndex + 1}/${results.length}`
      searchEl.classList.toggle('bespoke-search-no-result', noResults)
      searchEl.classList.toggle('bespoke-search-shaking', noResults)
      searchEl.onanimationend = () => {
        searchEl.classList.remove('bespoke-search-shaking')
        searchEl.onanimationend = null
      }
    }

    function focusAtResult(index) {
      let result = results[index] || {},
        prevResult = results[currentResultIndex] || {},
        slideIndexOfResult = (result).slideIndex
      deck.slide(slideIndexOfResult)

      if (prevResult && prevResult.el) {
        prevResult.el.classList.remove('bespoke-search-result-focused')
      }
      if (result && result.el) {
        result.el.classList.add('bespoke-search-result-focused')
      }

      currentResultIndex = index
      reportResultStats()
    }

    function navigateResult(direction) {
      let newIndex = (currentResultIndex + direction + results.length) % results.length
      focusAtResult(newIndex)
    }

    function search() {
      let searchPattern = toNeutralRegex(searchInputEl.value.trim())
      if (searchPattern === '') {
        clearResults()
        return
      }
      if (searchPattern === activeSearchPattern) {
        navigateResult(+1)
        return
      }
      clearResults()
      activeSearchPattern = searchPattern

      const searchRegex = new RegExp(searchPattern, 'i')
      const matchedSlides = cachedSlidesText.filter(slide => searchRegex.test(slide.text))


      function searchElement(el, visitFunction) {
        let partialResults = []

        switch (el.nodeType) {
        case Node.TEXT_NODE:
          if (searchRegex.test(el.data)) {
            partialResults = visitFunction(el)
          }
          break
        case Node.ELEMENT_NODE:
          for (let child of Array.from(el.childNodes)) {
            partialResults.push(...searchElement(child, visitFunction))
          }
          break
        }

        return partialResults
      }

      function markResult(textNode) {
        const parent = textNode.parentNode
        const fragment = (function(){
          const wrap = document.createElement('div')
          const frag = document.createDocumentFragment()
          wrap.innerHTML = textNode.data
            .replace(/</g, '&#60;')
            .replace(/>/g, '&#62;')
            .replace(new RegExp(`(${searchPattern})`, 'gi'), '<span class="bespoke-search-result">$1</span>')
          while (wrap.firstChild) {
            frag.appendChild(wrap.firstChild)
          }
          return frag
        })()

        const inserted = fragment.querySelectorAll('.bespoke-search-result')
        parent.insertBefore(fragment, textNode)
        parent.removeChild(textNode)

        // returns an array with the newly created elements
        return Array.from(inserted)
      }

      // find occurrences
      results = matchedSlides.reduce((previous, curr) => {
        const slideEl = deck.slides[curr.i]
        const occurrences = searchElement(slideEl, markResult).map(result => ({ slideIndex: curr.i, el: result }))

        return previous.concat(occurrences)
      }, [])

      // report the number of occurrences
      searchResultsCountEl.innerHTML = `1/${results.length}`

      // moves to the slide of the first occurrence
      focusAtResult(0)
    }

    function createSearchBox() {
      searchParentEl = document.createElement('div')
      searchEl = document.createElement('div')
      searchInputEl = document.createElement('input')
      searchResultsCountEl = document.createElement('span')
      searchInfoEl = document.createElement('details')

      searchParentEl.id = 'bespoke-search-parent'
      searchEl.id = 'bespoke-search'
      searchInputEl.id = 'bespoke-search-input'
      searchInputEl.type = 'search'
      searchInputEl.placeholder = textSearchHere
      searchResultsCountEl.id = 'bespoke-search-results-count'
      searchResultsCountEl.innerHTML = ''
      searchInfoEl.id = 'bespoke-search-info'
      searchInfoEl.innerHTML = `
          <summary>${textInstructions}</summary>
          <span class="bespoke-search-info-pair">${showKey.map(k => `<kbd>${k}</kbd>`).join('')} ${textOpenSearch}</span>
          <span class="bespoke-search-info-pair">${dismissKey.map(k => `<kbd>${k}</kbd>`).join('')} ${textCloseSearch}</span>
          <span class="bespoke-search-info-pair">${triggerKey.map(k => `<kbd>${k}</kbd>`).join('')} ${textSearch}</span>
          <span class="bespoke-search-info-pair">${nextKey.map(k => `<kbd>${k}</kbd>`).join('')} ${textNextResult}</span>
          <span class="bespoke-search-info-pair">${previousKey.map(k => `<kbd>${k}</kbd>`).join('')} ${textPreviousResult}</span>
        `
      searchEl.appendChild(searchInputEl)
      searchEl.appendChild(searchResultsCountEl)
      searchEl.appendChild(searchInfoEl)
      searchParentEl.appendChild(searchEl)

      deck.parent.appendChild(searchParentEl)
    }


    showKey.forEach(key => keymage(key, show))
    dismissKey.forEach(key => keymage('searching', key, hide))
    triggerKey.forEach(key => keymage('searching', key, search))
    nextKey.forEach(key => keymage('searching', key, navigateResult.bind(key, +1), {preventDefault: true}))
    previousKey.forEach(key => keymage('searching', key, navigateResult.bind(key, -1), {preventDefault: true}))

    createSearchBox()

    if (insertStyles) {
      _dereq_('../lib/bespoke-search.css')
    }
  }
}

},{"../lib/bespoke-search.css":1,"keymage":4}],3:[function(_dereq_,module,exports){
'use strict';
// For more information about browser field, check out the browser field at https://github.com/substack/browserify-handbook#browser-field.

var styleElementsInsertedAtTop = [];

var insertStyleElement = function(styleElement, options) {
    var head = document.head || document.getElementsByTagName('head')[0];
    var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];

    options = options || {};
    options.insertAt = options.insertAt || 'bottom';

    if (options.insertAt === 'top') {
        if (!lastStyleElementInsertedAtTop) {
            head.insertBefore(styleElement, head.firstChild);
        } else if (lastStyleElementInsertedAtTop.nextSibling) {
            head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
        } else {
            head.appendChild(styleElement);
        }
        styleElementsInsertedAtTop.push(styleElement);
    } else if (options.insertAt === 'bottom') {
        head.appendChild(styleElement);
    } else {
        throw new Error('Invalid value for parameter \'insertAt\'. Must be \'top\' or \'bottom\'.');
    }
};

module.exports = {
    // Create a <link> tag with optional data attributes
    createLink: function(href, attributes) {
        var head = document.head || document.getElementsByTagName('head')[0];
        var link = document.createElement('link');

        link.href = href;
        link.rel = 'stylesheet';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            link.setAttribute('data-' + key, value);
        }

        head.appendChild(link);
    },
    // Create a <style> tag with optional data attributes
    createStyle: function(cssText, attributes, extraOptions) {
        extraOptions = extraOptions || {};

        var style = document.createElement('style');
        style.type = 'text/css';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            style.setAttribute('data-' + key, value);
        }

        if (style.sheet) { // for jsdom and IE9+
            style.innerHTML = cssText;
            style.sheet.cssText = cssText;
            insertStyleElement(style, { insertAt: extraOptions.insertAt });
        } else if (style.styleSheet) { // for IE8 and below
            insertStyleElement(style, { insertAt: extraOptions.insertAt });
            style.styleSheet.cssText = cssText;
        } else { // for Chrome, Firefox, and Safari
            style.appendChild(document.createTextNode(cssText));
            insertStyleElement(style, { insertAt: extraOptions.insertAt });
        }
    }
};

},{}],4:[function(_dereq_,module,exports){
/// keymage.js - Javascript keyboard bindings handling
/// http://github.com/piranha/keymage
///
/// (c) 2012-2016 Alexander Solovyov under terms of ISC License

(function(define, undefined) {
define(function() {
    var VERSION = '1.1.3';
    var isOsx = typeof navigator !== 'undefined' &&
        ~navigator.userAgent.indexOf('Mac OS X');

    // Defining all keys
    var MODPROPS = ['shiftKey', 'ctrlKey', 'altKey', 'metaKey'];
    var MODS = {
        'shift': 'shift',
        'ctrl': 'ctrl', 'control': 'ctrl',
        'alt': 'alt', 'option': 'alt',
        'win': 'meta', 'cmd': 'meta', 'super': 'meta',
                          'meta': 'meta',
        // default modifier for os x is cmd and for others is ctrl
        'defmod':  isOsx ? 'meta' : 'ctrl'
        };
    var MODORDER = ['shift', 'ctrl', 'alt', 'meta'];
    var MODNUMS = [16, 17, 18, 91];

    var KEYS = {
        'backspace': 8,
        'tab': 9,
        'enter': 13, 'return': 13,
        'pause': 19,
        'caps': 20, 'capslock': 20,
        'escape': 27, 'esc': 27,
        'space': 32,
        'pgup': 33, 'pageup': 33,
        'pgdown': 34, 'pagedown': 34,
        'end': 35,
        'home': 36,
        'ins': 45, 'insert': 45,
        'del': 46, 'delete': 46,

        'left': 37,
        'up': 38,
        'right': 39,
        'down': 40,

        '*': 106,
        '+': 107, 'plus': 107,
        'minus': 109,
        ';': 186,
        '=': 187,
        ',': 188,
        '-': 189,
        '.': 190,
        '/': 191,
        '`': 192,
        '[': 219,
        '\\': 220,
        ']': 221,
        "'": 222
    };

    var i;
    // numpad
    for (i = 0; i < 10; i++) {
        KEYS['num-' + i] = i + 95;
    }
    // top row 0-9
    for (i = 0; i < 10; i++) {
        KEYS[i.toString()] = i + 48;
    }
    // f1-f24
    for (i = 1; i < 25; i++) {
        KEYS['f' + i] = i + 111;
    }
    // alphabet
    for (i = 65; i < 91; i++) {
        KEYS[String.fromCharCode(i).toLowerCase()] = i;
    }

    // Reverse key codes
    var KEYREV = {};
    for (var k in KEYS) {
        var val = KEYS[k];
        if (!KEYREV[val] || KEYREV[val].length < k.length) {
            KEYREV[val] = k;
        }
    }

    // -----------------------
    // Actual work is done here

    var currentScope = '';
    var allChains = {};

    function parseKeyString(keystring) {
        var bits = keystring.split(/-(?!$)/);
        var button = bits[bits.length - 1];
        var key = {code: KEYS[button]};

        if (!key.code) {
            throw 'Unknown key "' + button + '" in keystring "' +
                keystring + '"';
        }

        var mod;
        for (var i = 0; i < bits.length - 1; i++) {
            button = bits[i];
            mod = MODS[button];
            if (!mod) {
                    throw 'Unknown modifier "' + button + '" in keystring "' +
                        keystring + '"';
            }
            key[mod] = true;
        }

        return key;
    }

    function stringifyKey(key) {
        var s = '';
        for (var i = 0; i < MODORDER.length; i++) {
            if (key[MODORDER[i]]) {
                s += MODORDER[i] + '-';
            }
        }
        s += KEYREV[key.code];
        return s;
    }

    function normalizeKeyChain(keychainString) {
        var keychain = [];
        var keys = keychainString.split(' ');

        for (var i = 0; i < keys.length; i++) {
            var key = parseKeyString(keys[i]);
            key = stringifyKey(key);
            keychain.push(key);
        }

        keychain.original = keychainString;
        return keychain;
    }

    function eventKeyString(e) {
        var key = {code: e.keyCode};
        for (var i = 0; i < MODPROPS.length; i++) {
            var mod = MODPROPS[i];
            if (e[mod]) {
                key[mod.slice(0, mod.length - 3)] = true;
            }
        }
        return stringifyKey(key);
    }

    function getNestedChains(chains, scope) {
        for (var i = 0; i < scope.length; i++) {
            var bit = scope[i];

            if (bit) {
                chains = chains[bit];
            }

            if (!chains) {
                break;
            }
        }
        return chains;
    }

    var sequence = [];
    function dispatch(e) {
        // Skip all modifiers
        if (~MODNUMS.indexOf(e.keyCode)) {
            return;
        }

        var seq = sequence.slice();
        seq.push(eventKeyString(e));
        var scope = currentScope.split('.');
        var matched, chains, key;

        for (var i = scope.length; i >= 0; i--) {
            chains = getNestedChains(allChains, scope.slice(0, i));
            if (!chains) {
                continue;
            }
            matched = true;
            for (var j = 0; j < seq.length; j++) {
                key = seq[j];
                if (!chains[key]) {
                    matched = false;
                    break;
                }
                chains = chains[key];
            }

            if (matched) {
                break;
            }
        }

        var definitionScope = scope.slice(0, i).join('.');
        var preventDefault = chains.preventDefault;

        // partial match, save the sequence
        if (matched && !chains.handlers) {
            sequence = seq;
            if (preventDefault) {
                e.preventDefault();
            }
            return;
        }

        if (matched) {
            for (i = 0; i < chains.handlers.length; i++) {
                var handler = chains.handlers[i];
                var options = handler._keymage;

                var res = handler.call(options.context, e, {
                    shortcut: options.original,
                    scope: currentScope,
                    definitionScope: definitionScope
                });

                if (res === false || preventDefault) {
                    e.preventDefault();
                }
            }
        }

        // either matched or not, drop the sequence
        sequence = [];
    }

    function getHandlers(scope, keychain, fn) {
        var bits = scope.split('.');
        var chains = allChains;
        bits = bits.concat(keychain);

        for (var i = 0, l = bits.length; i < l; i++) {
            var bit = bits[i];
            if (!bit) continue;

            chains = chains[bit] || (chains[bit] = {});
            if (fn && fn._keymage.preventDefault) {
                chains.preventDefault = true;
            }

            if (i === l - 1) {
                var handlers = chains.handlers || (chains.handlers = []);
                return handlers;
            }
        }
    }

    function assignKey(scope, keychain, fn) {
        var handlers = getHandlers(scope, keychain, fn);
        handlers.push(fn);
    }

    function unassignKey(scope, keychain, fn) {
        var handlers = getHandlers(scope, keychain);
        var idx = handlers.indexOf(fn);
        if (~idx) {
            handlers.splice(idx, 1);
        }
    }

    function parsed(scope, keychain, fn, options) {
        if (keychain === undefined && fn === undefined) {
            return function(keychain, fn) {
                return keymage(scope, keychain, fn);
            };
        }

        if (typeof keychain === 'function') {
            options = fn;
            fn = keychain;
            keychain = scope;
            scope = '';
        }

        var normalized = normalizeKeyChain(keychain);

        return [scope, normalized, fn, options];
    }

    // optional arguments: scope, options.
    function keymage(scope, keychain, fn, options) {
        var args = parsed(scope, keychain, fn, options);
        fn = args[2];
        options = args[3];
        fn._keymage = options || {};
        fn._keymage.original = keychain;
        assignKey.apply(null, args);

        return function () {
            unassignKey.apply(null, args);
        };
    }

    keymage.unbind = function(scope, keychain, fn) {
        var args = parsed(scope, keychain, fn);
        unassignKey.apply(null, args);
    };

    keymage.parse = parseKeyString;
    keymage.stringify = stringifyKey;

    keymage.bindings = allChains;

    keymage.setScope = function(scope) {
        currentScope = scope ? scope : '';
    };

    keymage.getScope = function() { return currentScope; };

    keymage.pushScope = function(scope) {
        currentScope = (currentScope ? currentScope + '.' : '') + scope;
        return currentScope;
    };

    keymage.popScope = function(scope) {
        var i;

        if (!scope) {
            i = currentScope.lastIndexOf('.');
            scope = currentScope.slice(i + 1);
            currentScope = i == -1 ? '' : currentScope.slice(0, i);
            return scope;
        }

        currentScope = currentScope.replace(
            new RegExp('(^|\\.)' + scope + '(\\.|$).*'), '');
        return scope;
    };

    keymage.version = VERSION;

    window.addEventListener('keydown', dispatch, false);

    return keymage;
});
})(typeof define !== 'undefined' ? define : function(factory) {
    if (typeof module !== 'undefined') {
        module.exports = factory();
    } else {
        window.keymage = factory();
    }
});

},{}]},{},[2])(2)
});

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],12:[function(require,module,exports){
(function (global){(function (){
/*!
 * bespoke-simple-overview v1.1.0
 *
 * Copyright 2021, Flávio Coutinho
 * This content is released under the MIT license
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var s;(s=(s=(s="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).bespoke||(s.bespoke={})).plugins||(s.plugins={})).simpleOverview=e()}}((function(){return function e(s,o,t){function i(n,p){if(!o[n]){if(!s[n]){var l="function"==typeof require&&require;if(!p&&l)return l(n,!0);if(r)return r(n,!0);var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}var b=o[n]={exports:{}};s[n][0].call(b.exports,(function(e){return i(s[n][1][e]||e)}),b,b.exports,e,s,o,t)}return o[n].exports}for(var r="function"==typeof require&&require,n=0;n<t.length;n++)i(t[n]);return i}({1:[function(e,s,o){var t=".bespoke-parent{perspective:900px}.bespoke-parent .bespoke-slide{transition-property:transform,opacity}.bespoke-simple-overview .bespoke-slide{transform:translate3d(0,0,-2000px);outline:4px solid silver;background-color:rgba(255,255,255,.2);opacity:initial}.bespoke-simple-overview .bespoke-slide.bespoke-active,.bespoke-simple-overview .bespoke-slide:hover{outline-color:#4682b4}.bespoke-simple-overview .bespoke-slide.bespoke-before{display:none;transform:translate3d(-630%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after{display:none;transform:translate3d(630%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-1,.bespoke-simple-overview .bespoke-slide.bespoke-after-2,.bespoke-simple-overview .bespoke-slide.bespoke-after-3,.bespoke-simple-overview .bespoke-slide.bespoke-after-4,.bespoke-simple-overview .bespoke-slide.bespoke-after-5,.bespoke-simple-overview .bespoke-slide.bespoke-before-1,.bespoke-simple-overview .bespoke-slide.bespoke-before-2,.bespoke-simple-overview .bespoke-slide.bespoke-before-3,.bespoke-simple-overview .bespoke-slide.bespoke-before-4,.bespoke-simple-overview .bespoke-slide.bespoke-before-5{display:flex}.bespoke-simple-overview .bespoke-slide.bespoke-before-1{transform:translate3d(-105%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-2{transform:translate3d(-210%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-3{transform:translate3d(-315%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-4{transform:translate3d(-420%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-5{transform:translate3d(-525%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-1{transform:translate3d(105%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-2{transform:translate3d(210%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-3{transform:translate3d(315%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-4{transform:translate3d(420%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-5{transform:translate3d(525%,0,-2000px)}.bespoke-simple-overview .bespoke-bullet-inactive{display:list-item;opacity:initial;transform:initial}";e("browserify-css").createStyle(t,{href:"lib\\bespoke-simple-overview.css"},{insertAt:"bottom"}),s.exports=t},{"browserify-css":3}],2:[function(e,s,o){s.exports=function({activationKey:s=27,insertStyles:o=!0}={}){var t;return s="string"==typeof(t=s)?t.toUpperCase().charCodeAt(0):t,function(t){let i,r,n,p,l,a;i=function(){t.on("activate",i)(),window.addEventListener("keydown",r,!1),o&&e("../lib/bespoke-simple-overview.css"),a=t.parent.classList.contains("bespoke-simple-overview")},n=function(){window.removeEventListener("keydown",r,!1)},p=function(e){let s;if(a)return s=t.slide()+e,s>=0&&s<t.slides.length&&t.slide(s),!1},r=function(e){switch(e.which){case s:l()}},l=function(e){a="boolean"==typeof e?e:!a,t.parent.classList.toggle("bespoke-simple-overview",a)},t.on("activate",i),t.on("destroy",n),t.on("simple-overview.enable",l.bind(null,!0)),t.on("simple-overview.disable",l.bind(null,!1)),t.on("simple-overview.toggle",l.bind(null)),t.on("prev",p.bind(null,-1)),t.on("next",p.bind(null,1))}}},{"../lib/bespoke-simple-overview.css":1}],3:[function(e,s,o){"use strict";var t=[],i=function(e,s){var o=document.head||document.getElementsByTagName("head")[0],i=t[t.length-1];if((s=s||{}).insertAt=s.insertAt||"bottom","top"===s.insertAt)i?i.nextSibling?o.insertBefore(e,i.nextSibling):o.appendChild(e):o.insertBefore(e,o.firstChild),t.push(e);else{if("bottom"!==s.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");o.appendChild(e)}};s.exports={createLink:function(e,s){var o=document.head||document.getElementsByTagName("head")[0],t=document.createElement("link");for(var i in t.href=e,t.rel="stylesheet",s)if(s.hasOwnProperty(i)){var r=s[i];t.setAttribute("data-"+i,r)}o.appendChild(t)},createStyle:function(e,s,o){o=o||{};var t=document.createElement("style");for(var r in t.type="text/css",s)if(s.hasOwnProperty(r)){var n=s[r];t.setAttribute("data-"+r,n)}t.sheet?(t.innerHTML=e,t.sheet.cssText=e,i(t,{insertAt:o.insertAt})):t.styleSheet?(i(t,{insertAt:o.insertAt}),t.styleSheet.cssText=e):(t.appendChild(document.createTextNode(e)),i(t,{insertAt:o.insertAt}))}}},{}]},{},[2])(2)}));
}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
'use strict';
// For more information about browser field, check out the browser field at https://github.com/substack/browserify-handbook#browser-field.

var styleElementsInsertedAtTop = [];

var insertStyleElement = function(styleElement, options) {
    var head = document.head || document.getElementsByTagName('head')[0];
    var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];

    options = options || {};
    options.insertAt = options.insertAt || 'bottom';

    if (options.insertAt === 'top') {
        if (!lastStyleElementInsertedAtTop) {
            head.insertBefore(styleElement, head.firstChild);
        } else if (lastStyleElementInsertedAtTop.nextSibling) {
            head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
        } else {
            head.appendChild(styleElement);
        }
        styleElementsInsertedAtTop.push(styleElement);
    } else if (options.insertAt === 'bottom') {
        head.appendChild(styleElement);
    } else {
        throw new Error('Invalid value for parameter \'insertAt\'. Must be \'top\' or \'bottom\'.');
    }
};

module.exports = {
    // Create a <link> tag with optional data attributes
    createLink: function(href, attributes) {
        var head = document.head || document.getElementsByTagName('head')[0];
        var link = document.createElement('link');

        link.href = href;
        link.rel = 'stylesheet';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            link.setAttribute('data-' + key, value);
        }

        head.appendChild(link);
    },
    // Create a <style> tag with optional data attributes
    createStyle: function(cssText, attributes, extraOptions) {
        extraOptions = extraOptions || {};

        var style = document.createElement('style');
        style.type = 'text/css';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            style.setAttribute('data-' + key, value);
        }

        if (style.sheet) { // for jsdom and IE9+
            style.innerHTML = cssText;
            style.sheet.cssText = cssText;
            insertStyleElement(style, { insertAt: extraOptions.insertAt });
        } else if (style.styleSheet) { // for IE8 and below
            insertStyleElement(style, { insertAt: extraOptions.insertAt });
            style.styleSheet.cssText = cssText;
        } else { // for Chrome, Firefox, and Safari
            style.appendChild(document.createTextNode(cssText));
            insertStyleElement(style, { insertAt: extraOptions.insertAt });
        }
    }
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZW1vL3NyYy9tYWluLmpzIiwiZGlzdC90aGVtZS9mb250cy5jc3MiLCJkaXN0L3RoZW1lL3RoZW1lLmNzcyIsImxpYi9iZXNwb2tlLXRoZW1lLWJlYWNoZGF5LmpzIiwibm9kZV9tb2R1bGVzL2Jlc3Bva2UtYnVsbGV0cy9saWIvYmVzcG9rZS1idWxsZXRzLmpzIiwibm9kZV9tb2R1bGVzL2Jlc3Bva2UtY2xhc3Nlcy9saWIvYmVzcG9rZS1jbGFzc2VzLmpzIiwibm9kZV9tb2R1bGVzL2Jlc3Bva2UtaGFzaC9saWIvYmVzcG9rZS1oYXNoLmpzIiwibm9kZV9tb2R1bGVzL2Jlc3Bva2Uta2V5cy9saWIvYmVzcG9rZS1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2Jlc3Bva2UtcHJvZ3Jlc3MvbGliL2Jlc3Bva2UtcHJvZ3Jlc3MuanMiLCJub2RlX21vZHVsZXMvYmVzcG9rZS1zY2FsZS9saWIvYmVzcG9rZS1zY2FsZS5qcyIsIm5vZGVfbW9kdWxlcy9iZXNwb2tlLXNlYXJjaC9kaXN0L2Jlc3Bva2Utc2VhcmNoLmpzIiwibm9kZV9tb2R1bGVzL2Jlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3L2Rpc3QvYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcubWluLmpzIiwibm9kZV9tb2R1bGVzL2Jlc3Bva2Utc3RhdGUvbGliL2Jlc3Bva2Utc3RhdGUuanMiLCJub2RlX21vZHVsZXMvYmVzcG9rZS10b3VjaC9saWIvYmVzcG9rZS10b3VjaC5qcyIsIm5vZGVfbW9kdWxlcy9iZXNwb2tlL2xpYi9iZXNwb2tlLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnktY3NzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDeHJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGJlc3Bva2UgPSByZXF1aXJlKCdiZXNwb2tlJyksXHJcbiAgYmVhY2hkYXkgPSByZXF1aXJlKCcuLi8uLi9saWIvYmVzcG9rZS10aGVtZS1iZWFjaGRheS5qcycpLFxyXG4gIGtleXMgPSByZXF1aXJlKCdiZXNwb2tlLWtleXMnKSxcclxuICB0b3VjaCA9IHJlcXVpcmUoJ2Jlc3Bva2UtdG91Y2gnKSxcclxuICBidWxsZXRzID0gcmVxdWlyZSgnYmVzcG9rZS1idWxsZXRzJyksXHJcbiAgc2NhbGUgPSByZXF1aXJlKCdiZXNwb2tlLXNjYWxlJyksXHJcbiAgcHJvZ3Jlc3MgPSByZXF1aXJlKCdiZXNwb2tlLXByb2dyZXNzJyksXHJcbiAgb3ZlcnZpZXcgPSByZXF1aXJlKCdiZXNwb2tlLXNpbXBsZS1vdmVydmlldycpLFxyXG4gIHNlYXJjaCA9IHJlcXVpcmUoJ2Jlc3Bva2Utc2VhcmNoJyksXHJcbiAgaGFzaCA9IHJlcXVpcmUoJ2Jlc3Bva2UtaGFzaCcpLFxyXG4gIHN0YXRlID0gcmVxdWlyZSgnYmVzcG9rZS1zdGF0ZScpO1xyXG5cclxuYmVzcG9rZS5mcm9tKCdhcnRpY2xlJywgW1xyXG4gIGJlYWNoZGF5KHsgaW5zZXJ0Rm9udHM6IHRydWUgfSksXHJcbiAga2V5cygpLFxyXG4gIHRvdWNoKCksXHJcbiAgc3RhdGUoKSxcclxuICBzY2FsZSgndHJhbnNmb3JtJyksXHJcbiAgcHJvZ3Jlc3MoKSxcclxuICBoYXNoKCksXHJcbiAgb3ZlcnZpZXcoeyBpbnNlcnRTdHlsZXM6IGZhbHNlIH0pLFxyXG4gIGJ1bGxldHMoJy5idWxsZXQsIC5maWd1cmUtc3RlcCcpLFxyXG4gIHNlYXJjaCh7IGluc2VydFN0eWxlczogZmFsc2UgfSksXHJcbiAgZGVjayA9PiB7XHJcbiAgICAvLyBhcyB3ZSdyZSB1c2luZyBiZXNwb2tlLXNjYWxlIHdpdGggJ3RyYW5zZm9ybScsIGl0IGNyZWF0ZXMgYVxyXG4gICAgLy8gLmJlc3Bva2UtcGFyZW50IGFuZCB3cmFwcyBldmVyeXRoaW5nIGluc2lkZSBpdCwgaW5jbHVkaW5nIHRoZVxyXG4gICAgLy8gYmVzcG9rZS1wcm9ncmVzcyBiYXJcclxuICAgIC8vIHRvIHByZXZlbnQgaXQgZnJvbSBiZWluZyBzY2FsZWQgdXAvZG93biwgd2UgbmVlZCB0byB1bndyYXAgaXRcclxuICAgIC8vIHZhciBiYXIgPSBkZWNrLnF1ZXJ5U2VsZWN0b3IoJ2Jlc3Bva2UtcHJvZ3Jlc3MtcGFyZW50Jyk7XHJcbiAgICAvLyBkZWNrLnBhcmVudC5hcHBlbmRDaGlsZChiYXIpO1xyXG4gIH0sXHJcbiAgZGVjayA9PiB7XHJcbiAgICAvLyBtYWtlcyB0aGUgY29udGVudCB2aXNpYmxlIHRvIGF2b2lkIEZvVUNcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBkZWNrLnBhcmVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgfSwgMzAwKVxyXG4gIH1cclxuXSk7XHJcbiIsInZhciBjc3MgPSBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANzAwJmZhbWlseT1Tb3VyY2UrQ29kZStQcm8mZGlzcGxheT1zd2FwKTtcIjsgKHJlcXVpcmUoXCJicm93c2VyaWZ5LWNzc1wiKS5jcmVhdGVTdHlsZShjc3MsIHsgXCJocmVmXCI6IFwidGhlbWVcXFxcZm9udHMuY3NzXCIgfSwgeyBcImluc2VydEF0XCI6IFwiYm90dG9tXCIgfSkpOyBtb2R1bGUuZXhwb3J0cyA9IGNzczsiLCJ2YXIgY3NzID0gXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovQGtleWZyYW1lcyBmbG9hdGluZ3swJXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMjUlKX19QGtleWZyYW1lcyBmbG9hdGVkLWVsZW1lbnQtc2hhZG93ezAle3RyYW5zZm9ybTpzY2FsZVgoMSl9dG97dHJhbnNmb3JtOnNjYWxlWCguNSl9fUBrZXlmcmFtZXMgYm91bmNpbmctbGVmdHt0b3t0cmFuc2Zvcm06dHJhbnNsYXRlWCg1JSkgc2NhbGVYKC45Nil9fUBrZXlmcmFtZXMgY29vbC1yb3RhdGlvbi14ezAle3RyYW5zZm9ybTpyb3RhdGVYKC0xMGRlZyl9dG97dHJhbnNmb3JtOnJvdGF0ZVgoMTBkZWcpfX1Aa2V5ZnJhbWVzIGNpcmNsaW5nezAle3RyYW5zZm9ybTpyb3RhdGUoMHR1cm4pIHRyYW5zbGF0ZSgxODBweCkgcm90YXRlKDB0dXJuKX10b3t0cmFuc2Zvcm06cm90YXRlKDF0dXJuKSB0cmFuc2xhdGUoMTgwcHgpIHJvdGF0ZSgtMXR1cm4pfX1Aa2V5ZnJhbWVzIHNoYWtpbmd7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDRweCwwLDApfTEwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTdweCwtNXB4LDApfTIwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoOHB4LDVweCwwKX0zMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC03cHgsM3B4LDApfTQwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoOXB4LC0zcHgsMCl9NTAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNHB4LDNweCwwKX02MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDRweCwtNHB4LDApfTcwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTVweCwtNHB4LDApfTgwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoNHB4LDJweCwwKX05MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0zcHgsLTFweCwwKX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApfX1odG1se2xpbmUtaGVpZ2h0OjEuMTU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OjEwMCV9Ym9keSxmaWd1cmUsZmlndXJlLmVtYmVkZGVkLWNhcHRpb24gcCxmaWd1cmU+cHttYXJnaW46MH1kZXRhaWxzLG1haW4sb2wsdWx7ZGlzcGxheTpibG9ja31oMXtjb2xvcjp2YXIoLS1yZWd1bGFyLXRpdGxlLWNvbG9yKTtmb250LWZhbWlseTonQW1hdGljIFNDJyxjdXJzaXZlO2ZvbnQtc2l6ZTozLjVlbX1ocntib3gtc2l6aW5nOmNvbnRlbnQtYm94O2hlaWdodDowO292ZXJmbG93OnZpc2libGV9Y29kZSxwcmUsc2FtcHtmb250LWZhbWlseTptb25vc3BhY2UsbW9ub3NwYWNlfXByZSxzYW1we2ZvbnQtc2l6ZToxZW19YXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fWFiYnJbdGl0bGVdey13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZSBkb3R0ZWQ7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZSBkb3R0ZWQ7Ym9yZGVyLWJvdHRvbTppbml0aWFsfWJ7Zm9udC13ZWlnaHQ6Ym9sZGVyfXNtYWxse2ZvbnQtc2l6ZTo4MCV9c3ViLHN1cHtmb250LXNpemU6NzUlO2xpbmUtaGVpZ2h0OjA7cG9zaXRpb246cmVsYXRpdmU7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9c3Vie2JvdHRvbTotLjI1ZW19c3Vwe3RvcDotLjVlbX1pbWd7Ym9yZGVyLXN0eWxlOm5vbmV9YnV0dG9uLGlucHV0LG9wdGdyb3VwLHNlbGVjdCx0ZXh0YXJlYXtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxMDAlO2xpbmUtaGVpZ2h0OjEuMTU7bWFyZ2luOjB9YnV0dG9uLGlucHV0e292ZXJmbG93OnZpc2libGV9YnV0dG9uLHNlbGVjdHt0ZXh0LXRyYW5zZm9ybTpub25lfVt0eXBlPWJ1dHRvbl0sW3R5cGU9cmVzZXRdLFt0eXBlPXN1Ym1pdF0sYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b259W3R5cGU9YnV0dG9uXTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1yZXNldF06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9c3VibWl0XTo6LW1vei1mb2N1cy1pbm5lcixidXR0b246Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyLXN0eWxlOm5vbmU7cGFkZGluZzowfVt0eXBlPWJ1dHRvbl06LW1vei1mb2N1c3JpbmcsW3R5cGU9cmVzZXRdOi1tb3otZm9jdXNyaW5nLFt0eXBlPXN1Ym1pdF06LW1vei1mb2N1c3JpbmcsYnV0dG9uOi1tb3otZm9jdXNyaW5ne291dGxpbmU6MXB4IGRvdHRlZCBCdXR0b25UZXh0fWZpZWxkc2V0e3BhZGRpbmc6LjM1ZW0gLjc1ZW0gLjYyNWVtfWxlZ2VuZHtjb2xvcjppbmhlcml0O2Rpc3BsYXk6dGFibGU7bWF4LXdpZHRoOjEwMCU7d2hpdGUtc3BhY2U6bm9ybWFsfXByb2dyZXNze3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfXRleHRhcmVhe292ZXJmbG93OmF1dG99W3R5cGU9Y2hlY2tib3hdLFt0eXBlPXJhZGlvXSxsZWdlbmR7Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MH1bdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257aGVpZ2h0OmF1dG99W3R5cGU9c2VhcmNoXXstd2Via2l0LWFwcGVhcmFuY2U6dGV4dGZpZWxkO291dGxpbmUtb2Zmc2V0Oi0ycHh9W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX06Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b247Zm9udDppbmhlcml0fXN1bW1hcnl7ZGlzcGxheTpsaXN0LWl0ZW19W2hpZGRlbl0sdGVtcGxhdGV7ZGlzcGxheTpub25lfSp7Ym94LXNpemluZzpib3JkZXItYm94fTpyb290ey0tc2xpZGUtd2lkdGg6MTA2Ni42NjY2NjY2NjY2NjY1cHg7LS1zbGlkZS1oZWlnaHQ6NjAwcHg7LS1wcmVzZW50YXRpb24tY29sb3I6I2ZmZjstLWFjY2VudC1jb2xvcjojMDBmZGM4Oy0tYWx0ZXJuYXRlLWNvbG9yOiM3YjljMDI7LS1lbXBoYXRpYy1jb2xvcjojN2M3Y2UwOy0tbGluay1jb2xvcjojZGI0NDM3Oy0tdGV4dC1jb2xvcjojMjUyNTI1Oy0tYmlnLXRpdGxlLWNvbG9yOiM2ZThhZTQ7LS1yZWd1bGFyLXRpdGxlLWNvbG9yOiMwMDA7LS1pbmxpbmUtY29kZS1iZy1jb2xvcjojZGRkOy0taW5saW5lLWVtcGhhdGljLWNvZGUtYmctY29sb3I6I2RkZDstLWJsb2NrLWNvZGUtYmctY29sb3I6I2ZhZmFmYTstLWJsb2NrLWNvZGUtdGV4dC1jb2xvcjojMzgzYTQyOy0tc2hhZG93LWNvbG9yOnJnYmEoMCwwLDAsMC4yKTstLWFjY2VudC1tb3JlLWNvbG9yOiMwMDYwNGM7LS1jaXJjbGluZy1iYWxsb29ucy1iZzojZmZkNzAwOy0tbm90ZS1pY29uLWJnOiNmZmY7LS1ub3RlLWluZm8tYmctY29sb3Itc3RhcnQ6I2ZmZmZlMDstLW5vdGUtaW5mby1iZy1jb2xvci1lbmQ6I2E5ZGJlMDstLW5vdGUtaW5mby1hY2NlbnQtY29sb3I6JG5vdGUtaW5mby1iZy1hY2NlbnQtY29sb3I7LS1ub3RlLXdhcm5pbmctYmctY29sb3Itc3RhcnQ6I2ZmZmZlMDstLW5vdGUtd2FybmluZy1iZy1jb2xvci1lbmQ6I2ZmZjE3NjstLW5vdGUtd2FybmluZy1hY2NlbnQtY29sb3I6I2I4ODYwYjstLXJlc3VsdC1iZy1jb2xvci1zdGFydDojZjZmYmZmOy0tcmVzdWx0LWJnLWNvbG9yLWVuZDojZTNlYmYxOy0tcmVzdWx0LWFjY2VudC1jb2xvcjojMzA2M2E5Oy0tZGlkLXlvdS1rbm93LWFjY2VudC1jb2xvcjojODAwMDgwOy0tdGFibGUtYm9yZGVyLWNvbG9yOiMwMDA7LS10YWJsZS1oZWFkLWJnOiMzMzM7LS10YWJsZS1mb290LWJnOiNkZGQ7LS10YWJsZS1yb3ctYm9yZGVyLWNvbG9yOiNjY2M7LS10YWJsZS1yb3ctYmctZXZlbjpyZ2JhKDIzNCwyMzQsMjM0LDAuNzAyKTstLXRhYmxlLWhlYWQtY29sb3I6I2ZmZjstLXRhYmxlLWZvb3QtY29sb3I6IzAwMDstLXF1b3RlLWJnOiNmNWY1ZjU7LS1xdW90ZS1jb2xvcjojMzgzODM4Oy0tcXVvdGUtYm9yZGVyLWNvbG9yOiNjMGMwYzA7LS1xdW90ZS1xdW90ZXMtY29sb3I6IzdhN2E3YTstLXF1b3RlLWNpdGUtY29sb3I6Izk5OTstLWZpZ2NhcHRpb24tYmc6I2Y1ZjVmNTstLWVtcGhhdGljLWFjY2VudC1jb2xvcjojMzgwODhlOy0tYnV0dG9uLWNvbG9yOmN1cnJlbnRDb2xvcjstLXRyYW5zaXRpb24tZHVyYXRpb246NDAwbXM7LS10cmFuc2l0aW9uLWVhc2luZzplYXNlOy0tZGVmaW5pdGlvbi1saXN0LXdpZHRoOjEwZW07LS1kZWZpbml0aW9uLWxpc3Qtc3BhY2luZzowLjVlbTstLXNob3ctMi1zbGlkZXMtcm90YXRpb246MjVkZWc7LS1zaG93LTItc2xpZGVzLXotZGlzdGFuY2U6LTc1MHB4Oy0tc2hvdy0yLXNsaWRlcy14LWRpc3RhbmNlOjM4MHB4Oy0tbGF5b3V0LWNvbHVtbi1nYXA6MWVtfUBtZWRpYSBzY3JlZW4gYW5kIChwcmVmZXJzLWNvbG9yLXNjaGVtZTpkYXJrKXs6cm9vdHstLXByZXNlbnRhdGlvbi1jb2xvcjojMmYyZjJmOy0tYWNjZW50LWNvbG9yOiMwMDZkNTY7LS1hbHRlcm5hdGUtY29sb3I6I2M4ZmYwMDstLWVtcGhhdGljLWNvbG9yOiMwMDAwNGM7LS1saW5rLWNvbG9yOiNmZjRkM2U7LS10ZXh0LWNvbG9yOiNmZmY7LS1iaWctdGl0bGUtY29sb3I6IzYyODNlYzstLXJlZ3VsYXItdGl0bGUtY29sb3I6I2ZmZjstLWlubGluZS1jb2RlLWJnLWNvbG9yOiM0NDQ7LS1pbmxpbmUtZW1waGF0aWMtY29kZS1iZy1jb2xvcjojYzFiZmJmOy0tYmxvY2stY29kZS1iZy1jb2xvcjojMjMyNDFmOy0tYmxvY2stY29kZS10ZXh0LWNvbG9yOiNmOGY4ZjI7LS1zaGFkb3ctY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwwLjIpOy0tYWNjZW50LW1vcmUtY29sb3I6IzlkZmZlYjstLWNpcmNsaW5nLWJhbGxvb25zLWJnOiNkMjllMjU7LS1ub3RlLWljb24tYmc6I2ZmZjstLW5vdGUtaW5mby1iZy1jb2xvci1zdGFydDojNjFiZGNhOy0tbm90ZS1pbmZvLWJnLWNvbG9yLWVuZDojMDE1ODYxOy0tbm90ZS1pbmZvLWFjY2VudC1jb2xvcjojMDAzMTM1Oy0tbm90ZS13YXJuaW5nLWJnLWNvbG9yLXN0YXJ0OiNjY2NjMDY7LS1ub3RlLXdhcm5pbmctYmctY29sb3ItZW5kOiM3YjZlMDA7LS1ub3RlLXdhcm5pbmctYWNjZW50LWNvbG9yOiM1NDRhMDA7LS1yZXN1bHQtYmctY29sb3Itc3RhcnQ6IzI0Mzg0ODstLXJlc3VsdC1iZy1jb2xvci1lbmQ6IzBmMTIxZjstLXJlc3VsdC1hY2NlbnQtY29sb3I6I2Y5ZmZlZTstLWRpZC15b3Uta25vdy1hY2NlbnQtY29sb3I6I2ZmMmNmZjstLXRhYmxlLWJvcmRlci1jb2xvcjojZmZmOy0tdGFibGUtaGVhZC1iZzojYmZiZmJmOy0tdGFibGUtZm9vdC1iZzojMmIyYjJiOy0tdGFibGUtcm93LWJvcmRlci1jb2xvcjojMzEzMTMxOy0tdGFibGUtcm93LWJnLWV2ZW46cmdiYSg0MSw0MSw0MSwwLjcwMik7LS10YWJsZS1oZWFkLWNvbG9yOiMwMDA7LS10YWJsZS1mb290LWNvbG9yOiNmZmY7LS1xdW90ZS1iZzojMjMyMjI3Oy0tcXVvdGUtY29sb3I6I2Q4ZDhkODstLXF1b3RlLWJvcmRlci1jb2xvcjojOTE4Y2I1Oy0tcXVvdGUtcXVvdGVzLWNvbG9yOiM0ZDQ2Yzc7LS1xdW90ZS1jaXRlLWNvbG9yOiM2MDg0ZmY7LS1maWdjYXB0aW9uLWJnOiMyMzIzMjM7LS1lbXBoYXRpYy1hY2NlbnQtY29sb3I6IzY3MzRjMzstLWJ1dHRvbi1jb2xvcjojMzMzfX1AbWVkaWEgc2NyZWVuey5iZXNwb2tlLXBhcmVudHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt6LWluZGV4OjE7cGVyc3BlY3RpdmU6OTAwcHg7b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQtY29sb3I6dmFyKC0tcHJlc2VudGF0aW9uLWNvbG9yKTtjb2xvcjp2YXIoLS10ZXh0LWNvbG9yKTtmb250LXNpemU6MjRweH0uYmVzcG9rZS1wYXJlbnQ6bm90KC5lbXBoYXRpYyl7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIHZhcigtLXRyYW5zaXRpb24tZHVyYXRpb24pIHZhcigtLXRyYW5zaXRpb24tZWFzaW5nKX0uYmVzcG9rZS1zbGlkZXtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDY2LjY2NjY2NjY2NjY2NjVweDtoZWlnaHQ6NjAwcHg7dG9wOjUwJTtsZWZ0OjUwJTttYXJnaW4tbGVmdDotNTMzLjMzMzMzMzMzMzMzMzNweDttYXJnaW4tdG9wOi0zMDBweDtvdmVyZmxvdzpoaWRkZW47Y29udGFpbjpzaXplIGxheW91dCBzdHlsZTtjb250ZW50LXZpc2liaWxpdHk6YXV0b30uYmVzcG9rZS1pbmFjdGl2ZXtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZX0uYmVzcG9rZS1pbmFjdGl2ZSAuYmVzcG9rZS1idWxsZXQtaW5hY3RpdmV7dHJhbnNpdGlvbjpvcGFjaXR5IC40cyBlYXNlfS5iZXNwb2tlLWluYWN0aXZlOm5vdCguYmVzcG9rZS1hZnRlci0xKTpub3QoLmJlc3Bva2UtYmVmb3JlLTEpOm5vdCguYmVzcG9rZS1hZnRlci0yKTpub3QoLmJlc3Bva2UtYmVmb3JlLTIpOm5vdCguYmVzcG9rZS1hZnRlci0zKTpub3QoLmJlc3Bva2UtYmVmb3JlLTMpe2Rpc3BsYXk6bm9uZX19aDJ7Zm9udC1zaXplOjEuNWVtfWgzLG9sLmNvbHVtbnMtMz5saT5oMSxvbC5jb2x1bW5zLTM+bGk+aDIsb2wuY29sdW1ucy0zPmxpPmgzLG9sLmNvbHVtbnMtMz5saT5oNCxvbC5jb2x1bW5zLTM+bGk+aDUsb2wuY29sdW1ucy0zPmxpPmg2LHVsLmNvbHVtbnMtMz5saT5oMSx1bC5jb2x1bW5zLTM+bGk+aDIsdWwuY29sdW1ucy0zPmxpPmgzLHVsLmNvbHVtbnMtMz5saT5oNCx1bC5jb2x1bW5zLTM+bGk+aDUsdWwuY29sdW1ucy0zPmxpPmg2e2ZvbnQtc2l6ZToxLjI1ZW19aDQsaDUsaDZ7Zm9udC1zaXplOjFlbX1oMixoMyxoNCxoNSxoNntmb250LWZhbWlseTonU291cmNlIENvZGUgUHJvJyxtb25vc3BhY2U7Y29sb3I6dmFyKC0tcmVndWxhci10aXRsZS1jb2xvcil9aDEsaDIsaDMsaDQsaDUsaDZ7Zm9udC13ZWlnaHQ6NDAwO21hcmdpbjowIDAgLjI1ZW07bGluZS1oZWlnaHQ6MWVtfWxpLHB7Zm9udC1zaXplOjI0cHg7bGluZS1oZWlnaHQ6MS41ZW19c3Ryb25ne2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojMDBiMThjfWFydGljbGV7Zm9udC1mYW1pbHk6J1NvdXJjZSBDb2RlIFBybycsbW9ub3NwYWNlfWE6bGluayxhOnZpc2l0ZWR7Y29sb3I6dmFyKC0tbGluay1jb2xvcik7dGV4dC1kZWNvcmF0aW9uOm5vbmV9YTpob3Zlcnt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfWNvZGV7Zm9udC1zaXplOi43NWVtO2JhY2tncm91bmQtY29sb3I6dmFyKC0taW5saW5lLWNvZGUtYmctY29sb3IpO2NvbG9yOmluaGVyaXQ7Ym9yZGVyLXJhZGl1czozcHh9cHJlPmNvZGV7Zm9udC1zaXplOi44MzMzM2VtO2NvbG9yOmluaGVyaXR9cHJle2NvbG9yOnZhcigtLWJsb2NrLWNvZGUtdGV4dC1jb2xvcik7YmFja2dyb3VuZDp2YXIoLS1ibG9jay1jb2RlLWJnLWNvbG9yKTtib3JkZXItcmFkaXVzOi4xNWVtO3BhZGRpbmc6LjVlbTtvdmVyZmxvdy14OmF1dG87b3V0bGluZToxcHggc29saWQgc2lsdmVyO2JveC1zaGFkb3c6M3B4IDNweCAxMHB4IHZhcigtLXNoYWRvdy1jb2xvcik7bWF4LXdpZHRoOjEwMjYuNjY2NjY2NjY2NjY2NXB4fXByZSBjb2RlIHNwYW57d29yZC13cmFwOmJyZWFrLXdvcmQ7d29yZC1icmVhazpicmVhay1hbGx9cHt0ZXh0LWFsaWduOmp1c3RpZnl9aDE+Y29kZSxoMj5jb2RlLGgzPmNvZGUsaDQ+Y29kZSxoNT5jb2RlLGg2PmNvZGUscHJlPmNvZGV7YmFja2dyb3VuZC1jb2xvcjppbmhlcml0O2JvcmRlci1yYWRpdXM6aW5oZXJpdH1vbC5uby1saXN0LWljb24sdWwubm8tbGlzdC1pY29ue2xpc3Qtc3R5bGUtdHlwZTpub25lfW9sLmNvbHVtbnMtMyx1bC5jb2x1bW5zLTN7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvd31vbC5jb2x1bW5zLTM+bGksdWwuY29sdW1ucy0zPmxpe2ZsZXg6MX1vbC5jb2x1bW5zLTM+bGk6bm90KDpsYXN0LW9mLXR5cGUpLHVsLmNvbHVtbnMtMz5saTpub3QoOmxhc3Qtb2YtdHlwZSl7bWFyZ2luLXJpZ2h0OjFlbX1kZCxkdHttYXJnaW4tYm90dG9tOi41ZW19ZHR7ZmxvYXQ6bGVmdDtjbGVhcjpsZWZ0O3dpZHRoOnZhcigtLWRlZmluaXRpb24tbGlzdC13aWR0aCk7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwO3RleHQtYWxpZ246cmlnaHQ7Zm9udC13ZWlnaHQ6NzAwO3BhZGRpbmctcmlnaHQ6MWVtO3Bvc2l0aW9uOnJlbGF0aXZlfWRke21hcmdpbi1sZWZ0OmNhbGModmFyKC0tZGVmaW5pdGlvbi1saXN0LXdpZHRoKSArIHZhcigtLWRlZmluaXRpb24tbGlzdC1zcGFjaW5nKSl9ZGwud2lkdGgtMTB7LS1kZWZpbml0aW9uLWxpc3Qtd2lkdGg6MTAlfWRsLndpZHRoLTIwey0tZGVmaW5pdGlvbi1saXN0LXdpZHRoOjIwJX1kbC53aWR0aC0zMHstLWRlZmluaXRpb24tbGlzdC13aWR0aDozMCV9ZGwud2lkdGgtNDB7LS1kZWZpbml0aW9uLWxpc3Qtd2lkdGg6NDAlfWRsLndpZHRoLTUwey0tZGVmaW5pdGlvbi1saXN0LXdpZHRoOjUwJX1kZWx7Y29sb3I6Z3JheX1idXR0b257Y29sb3I6dmFyKC0tYnV0dG9uLWNvbG9yKX10YWJsZSx0aGVhZHtib3JkZXItYm90dG9tOjNweCBzb2xpZCB2YXIoLS10YWJsZS1ib3JkZXItY29sb3IpfXRhYmxle2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtib3JkZXItc3BhY2luZzowO2JvcmRlci10b3A6M3B4IHNvbGlkIHZhcigtLXRhYmxlLWJvcmRlci1jb2xvcik7Ym9yZGVyLWxlZnQ6bm9uZTtib3JkZXItcmlnaHQ6bm9uZTtib3gtc2hhZG93OjEwcHggMTBweCAxMHB4IHZhcigtLXNoYWRvdy1jb2xvcil9dGhlYWR7YmFja2dyb3VuZDp2YXIoLS10YWJsZS1oZWFkLWJnKX10aGVhZCBjb2Rle2JhY2tncm91bmQ6dmFyKC0tdGV4dC1jb2xvcik7Y29sb3I6dmFyKC0tcHJlc2VudGF0aW9uLWNvbG9yKX10Zm9vdHtiYWNrZ3JvdW5kOnZhcigtLXRhYmxlLWZvb3QtYmcpO2NvbG9yOnZhcigtLXRhYmxlLWZvb3QtY29sb3IpfXRye2JvcmRlci10b3A6MXB4IHNvbGlkIHZhcigtLXRhYmxlLXJvdy1ib3JkZXItY29sb3IpO2JhY2tncm91bmQtY29sb3I6aW5pdGlhbH10cjpudGgtb2YtdHlwZShldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXRhYmxlLXJvdy1iZy1ldmVuKX10aHtjb2xvcjp2YXIoLS10YWJsZS1oZWFkLWNvbG9yKTtmb250LXdlaWdodDo0MDA7dGV4dC1hbGlnbjppbmhlcml0fXRkLHRoe3BhZGRpbmc6LjNlbSAuNWVtfXRhYmxlLmFlcm8tcm93cyB0ZHtwYWRkaW5nLXRvcDouOGVtO3BhZGRpbmctYm90dG9tOi44ZW19dGFibGUuYWVyby1jb2x1bW5zIHRke3BhZGRpbmctbGVmdDoxZW07cGFkZGluZy1yaWdodDoxZW19YmxvY2txdW90ZXttYXJnaW46LjI1ZW0gMDtwYWRkaW5nOi4yNWVtIDQwcHg7YmFja2dyb3VuZDp2YXIoLS1xdW90ZS1iZyk7Ym94LXNoYWRvdzo0cHggNHB4IDRweCB2YXIoLS1zaGFkb3ctY29sb3IpO2xpbmUtaGVpZ2h0OjEuNDU7Zm9udC1zaXplOjE4cHg7Zm9udC1mYW1pbHk6R2VvcmdpYSxzZXJpZjtmb250LXN0eWxlOml0YWxpYztjb2xvcjp2YXIoLS1xdW90ZS1jb2xvcik7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1xdW90ZS1ib3JkZXItY29sb3IpfWJsb2NrcXVvdGUuY2VudGVyZWR7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0b31ibG9ja3F1b3RlPnB7bWFyZ2luOi41ZW0gYXV0b31ibG9ja3F1b3RlOjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXDIwMUNcXFwiO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotLjI1ZW07dG9wOi0uMjVlbTtmb250LXNpemU6ODBweDtjb2xvcjp2YXIoLS1xdW90ZS1xdW90ZXMtY29sb3IpfWJsb2NrcXVvdGUgY2l0ZXtkaXNwbGF5OmJsb2NrO21hcmdpbi10b3A6NXB4O2ZvbnQtc2l6ZTo3NSU7Y29sb3I6dmFyKC0tcXVvdGUtY2l0ZS1jb2xvcil9YmxvY2txdW90ZSBjaXRlOjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXDIwMTQgXFxcXDIwMDlcXFwifWtiZHtwYWRkaW5nOi4xZW0gLjZlbTtmb250LXNpemU6LjhlbTtib3JkZXI6MXB4IHNvbGlkICNjY2M7Zm9udC1mYW1pbHk6Q29uc29sYXMsTWVubG8sTW9uYWNvLG1vbm9zcGFjZTtiYWNrZ3JvdW5kLWNvbG9yOiNmN2Y3Zjc7Y29sb3I6IzMzMztib3gtc2hhZG93OjAgNHB4IDAgdmFyKC0tc2hhZG93LWNvbG9yKSwwIDAgMCAycHggI2ZmZiBpbnNldDtib3JkZXItcmFkaXVzOjNweDtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW46MCAuMWVtO3RleHQtc2hhZG93OjAgMXB4IDAgI2ZmZjtsaW5lLWhlaWdodDoxLjM7d2hpdGUtc3BhY2U6bm93cmFwO3RvcDowO3RyYW5zaXRpb246dG9wIDQwbXMgZWFzZS1vdXQsYm94LXNoYWRvdyA0MG1zIGVhc2Utb3V0fWtiZDpob3Zlcnt0b3A6NHB4O2JveC1zaGFkb3c6MCAwIDAgdmFyKC0tc2hhZG93LWNvbG9yKSwwIDAgMCAycHggI2ZmZiBpbnNldH1maWdjYXB0aW9ue2JhY2tncm91bmQtY29sb3I6dmFyKC0tZmlnY2FwdGlvbi1iZyk7cGFkZGluZzo1cHg7bWFyZ2luLWJvdHRvbTozcHh9YmxvY2txdW90ZSxmaWd1cmUuZW1iZWRkZWQtY2FwdGlvbixrYmR7cG9zaXRpb246cmVsYXRpdmV9ZmlndXJlLmVtYmVkZGVkLWNhcHRpb24gZmlnY2FwdGlvbntwb3NpdGlvbjphYnNvbHV0ZTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjI1KX1maWd1cmUuZW1iZWRkZWQtY2FwdGlvbiBmaWdjYXB0aW9uLmNhcHRpb24tYm90dG9te2JvdHRvbToxZW19ZmlndXJlLmVtYmVkZGVkLWNhcHRpb24gZmlnY2FwdGlvbi5jYXB0aW9uLXRvcHt0b3A6MWVtO2xlZnQ6MDtyaWdodDowfWZpZ3VyZS5lbWJlZGRlZC1jYXB0aW9uIGZpZ2NhcHRpb24uY2FwdGlvbi1ib3R0b217bGVmdDowO3JpZ2h0OjB9LnB1c2gtcmlnaHR7ZmxvYXQ6cmlnaHQ7bWFyZ2luLWxlZnQ6MS4yNWVtfS5wdXNoLWxlZnR7ZmxvYXQ6bGVmdDttYXJnaW4tcmlnaHQ6MS4yNWVtfS5wdXNoLWNvZGUtcmlnaHQgcHJle2Zsb2F0OnJpZ2h0O2NsZWFyOnJpZ2h0fS5wdXNoLWNvZGUtbGVmdCBwcmUsLnB1c2gtY29kZS1sZWZ0PmNvZGV7ZmxvYXQ6bGVmdDtjbGVhcjpsZWZ0fS5wdXNoLWNvZGUtcmlnaHQtd2l0aG91dC1jbGVhcmluZyBwcmV7Y2xlYXI6bm9uZTtmbG9hdDpyaWdodH0ucHVzaC1jb2RlLXJpZ2h0LXdpdGhvdXQtY2xlYXJpbmc+Y29kZXtmbG9hdDpyaWdodH0uZmxleC1hbGlnbi1jZW50ZXJ7YWxpZ24tc2VsZjpjZW50ZXJ9LmZsZXgtYWxpZ24tc3RhcnR7YWxpZ24tc2VsZjpmbGV4LXN0YXJ0fS5mbGV4LWFsaWduLWVuZHthbGlnbi1zZWxmOmZsZXgtZW5kfS5hbHRlcm5hdGUtY29sb3J7Y29sb3I6dmFyKC0tYWx0ZXJuYXRlLWNvbG9yKX0uY29tcGFjdC1jb2RlIHByZSwuY29tcGFjdC1jb2RlfnByZSxwcmUuY29tcGFjdC1jb2Rle2xpbmUtaGVpZ2h0OjFlbX0uY29tcGFjdC1jb2RlLW1pZCBwcmUsLmNvbXBhY3QtY29kZS1taWR+cHJlLHByZS5jb21wYWN0LWNvZGUtbWlke2xpbmUtaGVpZ2h0OjFlbTtmb250LXNpemU6OTAlfS5jb21wYWN0LWNvZGUtbW9yZSBwcmUsLmNvbXBhY3QtY29kZS1tb3JlfnByZSxwcmUuY29tcGFjdC1jb2RlLW1vcmV7bGluZS1oZWlnaHQ6MWVtO2ZvbnQtc2l6ZTo3NSV9LmZpZ3VyZS1zbGlkZXN7cG9zaXRpb246cmVsYXRpdmV9LmZpZ3VyZS1zbGlkZXMuY2xlYW4gLmJlc3Bva2UtYnVsbGV0Om5vdCguYmVzcG9rZS1idWxsZXQtY3VycmVudCk6bm90KDpsYXN0LWNoaWxkKXt2aXNpYmlsaXR5OmhpZGRlbjtvcGFjaXR5OjB9LmZpZ3VyZS1zdGVwOm5vdCg6Zmlyc3QtY2hpbGQpe3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MH1hLmJvb2ttYXJrbGV0e2JvcmRlci1yYWRpdXM6NXB4O2JvcmRlcjoycHggc29saWQgc2lsdmVyO3BhZGRpbmc6NHB4IDdweDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEpO3RyYW5zaXRpb246YWxsIC4ycyBlYXNlLW91dH1hLmJvb2ttYXJrbGV0OmhvdmVye3RleHQtZGVjb3JhdGlvbjpub25lO2JhY2tncm91bmQtY29sb3I6I2I2NmM3ZTtjb2xvcjojZGRkO2JvcmRlci1jb2xvcjojMzMzO2N1cnNvcjptb3ZlfS5iYWRnZXtkaXNwbGF5OmlubGluZS1ibG9jaztiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXByZXNlbnRhdGlvbi1jb2xvcik7Ym9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKTtjb2xvcjojYTlhOWE5O2ZvbnQtc2l6ZTo3NSU7bGluZS1oZWlnaHQ6MWVtO3BhZGRpbmc6LjFlbSAuMmVtfS5iYWRnZS50eXBlMXtjb2xvcjp0ZWFsO2JvcmRlci1jb2xvcjp0ZWFsfS5iYWRnZS50eXBlMntjb2xvcjojNjQ5NWVkO2JvcmRlci1jb2xvcjojNjQ5NWVkfWlucHV0LnN3aXRjaHstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9aW5wdXQuc3dpdGNofmxhYmVse3Bvc2l0aW9uOnJlbGF0aXZlO2N1cnNvcjpwb2ludGVyOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfWlucHV0LnN3aXRjaH5sYWJlbDo6YWZ0ZXIsaW5wdXQuc3dpdGNofmxhYmVsOjpiZWZvcmV7Y29udGVudDonICc7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7dG9wOmNhbGMoKDEwMCUgLSAuNzVlbSkvIDIgKyAuNWVtKTttYXJnaW4tcmlnaHQ6LjI1ZW07aGVpZ2h0Oi43NWVtO3dpZHRoOjEuNWVtO2JhY2tncm91bmQtY29sb3I6I2Y3Nztib3JkZXItcmFkaXVzOjVweDtib3gtc2hhZG93Omluc2V0IDAgLjFlbSAwIHZhcigtLXNoYWRvdy1jb2xvcik7dHJhbnNpdGlvbjphbGwgLjFzIGVhc2UtaW59aW5wdXQuc3dpdGNofmxhYmVsOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7d2lkdGg6Ljc1ZW07aGVpZ2h0Oi41NWVtO3RvcDpjYWxjKCgxMDAlIC0gLjc1ZW0pLyAyICsgLjFlbSk7Ym90dG9tOmNhbGMoKDEwMCUgLSAuNzVlbSkvIDIgKyAuMWVtKTttYXJnaW4tbGVmdDouMWVtO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOi4xNWVtO2JveC1zaGFkb3c6aW5zZXQgMCAtLjJlbSAwIHZhcigtLXNoYWRvdy1jb2xvcil9aW5wdXQuc3dpdGNoOmNoZWNrZWR+bGFiZWw6OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOiMyYWU4MmF9aW5wdXQuc3dpdGNoOmNoZWNrZWR+bGFiZWw6OmFmdGVye21hcmdpbi1sZWZ0Oi42NWVtfS5iZXNwb2tlLWFjdGl2ZSAudW5kZXJsaW5lLnVwb24tYWN0aXZhdGlvbjo6YWZ0ZXIsLmZ1bGwtd2lkdGh7d2lkdGg6MTAwJX0ubGFyZ2Utd2lkdGh7d2lkdGg6ODAlfS5tZWRpdW0td2lkdGh7d2lkdGg6NjAlfS5zbWFsbC13aWR0aHt3aWR0aDo0MCV9LmZ1bGwtaGVpZ2h0e2hlaWdodDoxMDAlfS5odWdlLWhlaWdodHtoZWlnaHQ6ODAlfS5sYXJnZS1oZWlnaHR7aGVpZ2h0OjYwJX0ubWVkaXVtLWhlaWdodHtoZWlnaHQ6NDAlfS5zbWFsbC1oZWlnaHR7aGVpZ2h0OjIwJX0uYmxvY2t7ZGlzcGxheTpibG9ja30uZmxvYXRpbmctcG9ydHJhaXQtY29udGFpbmVyICosLnBvcnRyYWl0LC5wb3J0cmFpdCBpbWd7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTUwcHg7aGVpZ2h0OjE1MHB4O2JvcmRlci1yYWRpdXM6NTAlfS5mbG9hdGluZy1wb3J0cmFpdC1jb250YWluZXIgKiBmaWdjYXB0aW9uLC5wb3J0cmFpdCBmaWdjYXB0aW9uLC5wb3J0cmFpdCBpbWcgZmlnY2FwdGlvbntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5mbG9hdGluZy1wb3J0cmFpdC1jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmV9LmZsb2F0aW5nLXBvcnRyYWl0LWNvbnRhaW5lciAqe21hcmdpbjowO2FuaW1hdGlvbjpmbG9hdGluZyAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBhbHRlcm5hdGV9LmZsb2F0aW5nLXBvcnRyYWl0LWNvbnRhaW5lcjo6YWZ0ZXJ7Y29udGVudDpcXFwiIFxcXCI7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MjAlO2xlZnQ6MDtyaWdodDowO2JvdHRvbTotMjAlO2JhY2tncm91bmQ6cmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgY2xvc2VzdC1zaWRlLHJnYmEoMjEsMjEsMjEsLjI1KSAwLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7ei1pbmRleDotMTthbmltYXRpb246ZmxvYXRlZC1lbGVtZW50LXNoYWRvdyAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBhbHRlcm5hdGV9LmZsaXBze3RyYW5zaXRpb246dHJhbnNmb3JtIC42cyBlYXNlLW91dH0uZmxpcHMgKnttYXJnaW46MH0uZmxpcHM6aG92ZXJ7dHJhbnNmb3JtOnJvdGF0ZVkoNzIwZGVnKX0ucG9ydHJhaXR7c2hhcGUtb3V0c2lkZTpjaXJjbGUoNTAlKX0uY29udGFpbnttYXgtd2lkdGg6MTAwJTttYXgtaGVpZ2h0OjEwMCV9LnNsaWRlLWNvbnRhaW57bWF4LXdpZHRoOnZhcigtLXNsaWRlLXdpZHRoKTttYXgtaGVpZ2h0OnZhcigtLXNsaWRlLWhlaWdodCl9LmhhbGYtd2lkdGh7d2lkdGg6NTAlfS50aHJlZS1xdWFydGVyLXdpZHRoe3dpZHRoOjc1JX0uZnVsbC13aWR0aC1zbGlkZXMsLmZ1bGwtd2lkdGgtc2xpZGVzIGltZ3ttYXgtd2lkdGg6MTAwJX0uY2VudGVyZWR7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0b30uY2VudGVyZWQuaW1ne2Rpc3BsYXk6YmxvY2t9LmNlbnRlci1hbGlnbmVke3RleHQtYWxpZ246Y2VudGVyfS5lbW9qaXtoZWlnaHQ6MWVtO3dpZHRoOjFlbTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9Lm9uLWxpbmV7aGVpZ2h0OjFlbTtsaW5lLWhlaWdodDoxZW19Lm1hcmtkb3duLWl0LWNvbnRhaW5lcj5wLC5uby1tYXJnaW4sZGl2LmRpZC15b3Uta25vdz5wLGRpdi5yZXN1bHQ+cHttYXJnaW46MH0ubm8tcGFkZGluZ3twYWRkaW5nOjB9QG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTpkYXJrKXsuaW52ZXJ0LWNvbG9ycy1kYXJrLW1vZGV7ZmlsdGVyOmludmVydCgxKX19Lm5vLWJ1bGxldHMsLm5vLWxpc3QtaWNvbntsaXN0LXN0eWxlLXR5cGU6bm9uZX0uaG9yaXpvbnRhbC1saXN0e2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Lm11bHRpLWNvbHVtbi1saXN0LTIsLm11bHRpLWNvbHVtbi1saXN0LTN7cGFkZGluZy1sZWZ0OjA7Y29sdW1uLWNvdW50OjI7bGlzdC1zdHlsZS1wb3NpdGlvbjppbnNpZGV9Lm11bHRpLWNvbHVtbi1saXN0LTN7Y29sdW1uLWNvdW50OjN9Lm11bHRpLWNvbHVtbi1saXN0LTQsLm11bHRpLWNvbHVtbi1saXN0LTV7cGFkZGluZy1sZWZ0OjA7Y29sdW1uLWNvdW50OjQ7bGlzdC1zdHlsZS1wb3NpdGlvbjppbnNpZGV9Lm11bHRpLWNvbHVtbi1saXN0LTV7Y29sdW1uLWNvdW50OjV9Lm5vdGV7Ym9yZGVyOjFweCBzb2xpZCB0cmFuc3BhcmVudDtsaXN0LXN0eWxlLXR5cGU6bm9uZTtib3JkZXItcmFkaXVzOjVweDtib3gtc2hhZG93OjNweCAzcHggM3B4IHZhcigtLXNoYWRvdy1jb2xvcik7cGFkZGluZzouM2VtIC41ZW19Lm5vdGU+cDpmaXJzdC1vZi10eXBle21hcmdpbi10b3A6MH0ubm90ZTo6YmVmb3Jle21hcmdpbi1yaWdodDoxcmVtO3dpZHRoOjEuNWVtO2hlaWdodDoxLjVlbTtkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpsZWZ0O3NoYXBlLW91dHNpZGU6Y2lyY2xlKDUwJSk7dGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6MS41ZW07Zm9udC1zaXplOjFlbTtib3gtc2l6aW5nOmJvcmRlci1ib3g7YmFja2dyb3VuZDp2YXIoLS1ub3RlLWljb24tYmcpO2JvcmRlci1yYWRpdXM6NTAlO2NvbG9yOiMwMDB9Lm5vdGUuaW5mb3tib3JkZXItY29sb3I6dmFyKC0tbm90ZS1pbmZvLWFjY2VudC1jb2xvcik7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLHZhcigtLW5vdGUtaW5mby1iZy1jb2xvci1zdGFydCksdmFyKC0tbm90ZS1pbmZvLWJnLWNvbG9yLWVuZCkpfS5ub3RlLmluZm8gc3Ryb25ne2NvbG9yOnZhcigtLW5vdGUtaW5mby1hY2NlbnQtY29sb3IpfS5ub3RlLmluZm86OmJlZm9yZXtjb250ZW50OlxcXCLihLnvuI9cXFwifS5ub3RlLC5ub3RlLndhcm5pbmd7Ym9yZGVyLWNvbG9yOnZhcigtLW5vdGUtd2FybmluZy1hY2NlbnQtY29sb3IpO2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSx2YXIoLS1ub3RlLXdhcm5pbmctYmctY29sb3Itc3RhcnQpLHZhcigtLW5vdGUtd2FybmluZy1iZy1jb2xvci1lbmQpKX0ubm90ZSBzdHJvbmcsLm5vdGUud2FybmluZyBzdHJvbmd7Y29sb3I6dmFyKC0tbm90ZS13YXJuaW5nLWFjY2VudC1jb2xvcil9Lm5vdGUud2FybmluZzo6YmVmb3JlLC5ub3RlOjpiZWZvcmV7Y29udGVudDpcXFwi4pqg77iPXFxcIn0ubWFya2Rvd24taXQtY29udGFpbmVyLGRpdi5kaWQteW91LWtub3csZGl2LnJlc3VsdHtwb3NpdGlvbjpyZWxhdGl2ZX0ubWFya2Rvd24taXQtY29udGFpbmVyOjpiZWZvcmUsZGl2LmRpZC15b3Uta25vdzo6YmVmb3JlLGRpdi5yZXN1bHQ6OmJlZm9yZXtjb250ZW50OmF0dHIoZGF0YS1iZWZvcmUpfWRpdi5yZXN1bHR7bWFyZ2luLWxlZnQ6MDtwYWRkaW5nOi43NWVtIC41ZW0gLjVlbTtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgxMzVkZWcsdmFyKC0tcmVzdWx0LWJnLWNvbG9yLXN0YXJ0KSx2YXIoLS1yZXN1bHQtYmctY29sb3ItZW5kKSk7Ym9yZGVyOjFweCBkYXNoZWQgdmFyKC0tcmVzdWx0LWFjY2VudC1jb2xvcil9ZGl2LnJlc3VsdDo6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6dmFyKC0tcmVzdWx0LWFjY2VudC1jb2xvcik7Y29sb3I6dmFyKC0tcHJlc2VudGF0aW9uLWNvbG9yKTtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06cm90YXRlKC0zZGVnKTtmb250LXdlaWdodDo3MDA7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0zcHg7bGVmdDotM3B4O2ZvbnQtc2l6ZTouNmVtO2xpbmUtaGVpZ2h0OjEuNWVtO3BhZGRpbmc6MCAuNWVtfWRpdi5kaWQteW91LWtub3d7YmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cHM6Ly9mZWdlbW8uZ2l0aHViLmlvL2NlZmV0LWZyb250LWVuZC9pbWFnZXMvcXVlc3Rpb24tbWFyay1iZy5wbmcpO2JvcmRlci1sZWZ0OjRweCBzb2xpZCB2YXIoLS1kaWQteW91LWtub3ctYWNjZW50LWNvbG9yKTtib3gtc2hhZG93OjVweCA1cHggNXB4IHZhcigtLXNoYWRvdy1jb2xvcik7cGFkZGluZy1yaWdodDoxZW19ZGl2LmRpZC15b3Uta25vdzo6YmVmb3Jle2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjRweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Zm9udC1mYW1pbHk6UHVyaXNhLFxcXCJDb21pYyBTYW5zIE1TXFxcIixjdXJzaXZlO2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjp2YXIoLS1kaWQteW91LWtub3ctYWNjZW50LWNvbG9yKX1kaXYuZGlkLXlvdS1rbm93LGRpdi5kaWQteW91LWtub3c+cHtwYWRkaW5nLWxlZnQ6LjVlbX0ubGF5b3V0LXNwbGl0LTIsLmxheW91dC1zcGxpdC0zLC5sYXlvdXQtc3BsaXQtNCwubGF5b3V0LXNwbGl0LTV7ZmxleC1kaXJlY3Rpb246cm93O2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOnN0cmV0Y2g7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX0ubGF5b3V0LXNwbGl0LTI+c2VjdGlvbiwubGF5b3V0LXNwbGl0LTM+c2VjdGlvbnt3aWR0aDo1MCU7ZmxleC1ncm93OjE7dGV4dC1hbGlnbjpjZW50ZXJ9LmxheW91dC1zcGxpdC0zPnNlY3Rpb257d2lkdGg6MzMuMzMzMzMzMzMzMzMzMzMlfS5sYXlvdXQtc3BsaXQtND5zZWN0aW9uLC5sYXlvdXQtc3BsaXQtNT5zZWN0aW9ue3dpZHRoOjI1JTtmbGV4LWdyb3c6MTt0ZXh0LWFsaWduOmNlbnRlcn0ubGF5b3V0LXNwbGl0LTU+c2VjdGlvbnt3aWR0aDoyMCV9LmNvZGUtc3BsaXQtMiwuY29kZS1zcGxpdC0ze2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0fS5jb2RlLXNwbGl0LTI+KiwuY29kZS1zcGxpdC0zPip7ZmxleDoxfS5jb2RlLXNwbGl0LTI+Om5vdCg6Zmlyc3QtY2hpbGQpLC5jb2RlLXNwbGl0LTM+Om5vdCg6Zmlyc3QtY2hpbGQpe2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjB9LmNvZGUtc3BsaXQtMj46bm90KDpsYXN0LWNoaWxkKSwuY29kZS1zcGxpdC0zPjpub3QoOmxhc3QtY2hpbGQpe2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MH0uY29kZS1zcGxpdC0yIHByZS5obGpzLC5jb2RlLXNwbGl0LTMgcHJlLmhsanN7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH0uY29kZS1zcGxpdC0yIHByZS5obGpzOm5vdCg6bGFzdC1vZi10eXBlKSwuY29kZS1zcGxpdC0zIHByZS5obGpzOm5vdCg6bGFzdC1vZi10eXBlKXtib3JkZXItcmlnaHQ6M3B4IGRvdWJsZSAjZmZmfS5jb2RlLXNwbGl0LTIgcHJlLmhsanMrcHJlLmhsanMsLmNvZGUtc3BsaXQtMyBwcmUuaGxqcytwcmUuaGxqc3ttYXJnaW4tdG9wOjB9LmZvdXItY29sdW1uLWNvZGUgY29kZSwuZm91ci1jb2x1bW4tY29kZSBwcmUsLnRocmVlLWNvbHVtbi1jb2RlIGNvZGUsLnRocmVlLWNvbHVtbi1jb2RlIHByZSwudHdvLWNvbHVtbi1jb2RlIGNvZGUsLnR3by1jb2x1bW4tY29kZSBwcmV7Y29sdW1uLXJ1bGU6M3B4IGRvdWJsZSB2YXIoLS1zaGFkb3ctY29sb3IpO2NvbHVtbi1nYXA6MmVtfS50d28tY29sdW1uLWNvZGUgY29kZSwudHdvLWNvbHVtbi1jb2RlIHByZXtjb2x1bW4tY291bnQ6Mn0udGhyZWUtY29sdW1uLWNvZGUgY29kZSwudGhyZWUtY29sdW1uLWNvZGUgcHJle2NvbHVtbi1jb3VudDozfS5mb3VyLWNvbHVtbi1jb2RlIGNvZGUsLmZvdXItY29sdW1uLWNvZGUgcHJle2NvbHVtbi1jb3VudDo0fS5mbG9hdGluZy1yaWdodC1jb2RlIHByZXtmbG9hdDpyaWdodDt3aWR0aDphdXRvO21hcmdpbi1sZWZ0OjFlbX0uY2FyZC1saXN0e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC13cmFwOndyYXA7anVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtsaXN0LXN0eWxlLXR5cGU6bm9uZTtwYWRkaW5nOjB9LmNhcmQtbGlzdCBsaXtmbGV4OjE7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LXdyYXA6bm93cmFwO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O21hcmdpbi1yaWdodDouMjVlbX0uY2FyZC1saXN0IGxpIGZpZ2NhcHRpb24sLmNhcmQtbGlzdCBsaSBoMSwuY2FyZC1saXN0IGxpIGgyLC5jYXJkLWxpc3QgbGkgaDMsLmNhcmQtbGlzdCBsaSBoNCwuY2FyZC1saXN0IGxpIGg1LC5jYXJkLWxpc3QgbGkgaDZ7Zm9udC1zaXplOjFlbTt0ZXh0LWFsaWduOmNlbnRlcjtvcmRlcjoxO21hcmdpbi10b3A6LjVlbSFpbXBvcnRhbnR9LmNhcmQtbGlzdCBsaSBpbWd7bWF4LXdpZHRoOjEwMCU7bWFyZ2luOmF1dG87b2JqZWN0LWZpdDpjb250YWluO29iamVjdC1wb3NpdGlvbjpjZW50ZXI7b3JkZXI6MH0uY2FyZC1saXN0LnBvbGFyb2lkIGxpe2JhY2tncm91bmQ6dmFyKC0tcHJlc2VudGF0aW9uLWNvbG9yKTtib3gtc2hhZG93OjAgOHB4IDE2cHggdmFyKC0tc2hhZG93LWNvbG9yKSwwIDRweCAxNnB4IHZhcigtLXNoYWRvdy1jb2xvcil9LmNhcmQtbGlzdC5wb2xhcm9pZCBsaSBpbWd7YmFja2dyb3VuZC1jb2xvcjojZjBmOGZmO2JvcmRlcjoxMXB4IHNvbGlkIHZhcigtLXByZXNlbnRhdGlvbi1jb2xvcik7aW1hZ2UtcmVuZGVyaW5nOnBpeGVsYXRlZH0uY2FyZC1saXN0LmNvdmVyIGxpIGltZ3tvYmplY3QtZml0OmNvdmVyfS5jYXJkLWxpc3QuY29udGFpbiBsaSBpbWd7b2JqZWN0LWZpdDpjb250YWlufS5jYXJkLWxpc3QudGl0bGUtdG9wIGZpZ2NhcHRpb24sLmNhcmQtbGlzdC50aXRsZS10b3AgaDEsLmNhcmQtbGlzdC50aXRsZS10b3AgaDIsLmNhcmQtbGlzdC50aXRsZS10b3AgaDMsLmNhcmQtbGlzdC50aXRsZS10b3AgaDQsLmNhcmQtbGlzdC50aXRsZS10b3AgaDUsLmNhcmQtbGlzdC50aXRsZS10b3AgaDZ7b3JkZXI6MH0uY2FyZC1saXN0LnRpdGxlLXRvcCBpbWd7b3JkZXI6MX0uaW52ZXJ0ZWQtdGV4dC1jb2xvcnN7YmFja2dyb3VuZDp2YXIoLS10ZXh0LWNvbG9yKTtjb2xvcjp2YXIoLS1wcmVzZW50YXRpb24tY29sb3IpfS5zbWFsbGVyLXRleHQtOTB7Zm9udC1zaXplOjkwJX0uc21hbGxlci10ZXh0LTgwe2ZvbnQtc2l6ZTo4MCV9LnNtYWxsZXItdGV4dC03MHtmb250LXNpemU6NzAlfS5zbWFsbGVyLXRleHQtNjB7Zm9udC1zaXplOjYwJX0uYnJpbmctZm9yd2FyZHtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjF9Lml0ZW0tY29kZS13aXRoLWltYWdlLC5pdGVtLWNvZGUtd2l0aC1yZXN1bHR7cGFkZGluZy1sZWZ0OjA7bGlzdC1zdHlsZS10eXBlOm5vbmV9Lml0ZW0tY29kZS13aXRoLWltYWdlIGxpLC5pdGVtLWNvZGUtd2l0aC1yZXN1bHQgbGl7Y2xlYXI6cmlnaHQ7bWFyZ2luLWJvdHRvbToxZW19Lml0ZW0tY29kZS13aXRoLWltYWdlIGxpPi5yZXN1bHQsLml0ZW0tY29kZS13aXRoLWltYWdlIGxpPmltZywuaXRlbS1jb2RlLXdpdGgtcmVzdWx0IGxpPi5yZXN1bHQsLml0ZW0tY29kZS13aXRoLXJlc3VsdCBsaT5pbWd7ZmxvYXQ6cmlnaHQ7bWFyZ2luLWxlZnQ6MWVtfS5iZXNwb2tlLXNsaWRlIHAsLmJlc3Bva2Utc2xpZGUgcHJlLC5pdGVtLWNvZGUtd2l0aC1pbWFnZSBsaT4ucmVzdWx0LC5pdGVtLWNvZGUtd2l0aC1yZXN1bHQgbGk+LnJlc3VsdHttYXJnaW4tdG9wOjB9LmJvdW5jaW5nLWxlZnR7YW5pbWF0aW9uOmJvdW5jaW5nLWxlZnQgLjhzIGN1YmljLWJlemllciguMjIsLjYxLC4zNiwxKSAwcyBpbmZpbml0ZSBhbHRlcm5hdGV9LmRlbGF5LTF7YW5pbWF0aW9uLWRlbGF5Oi4yczt0cmFuc2l0aW9uLWRlbGF5Oi4yc30uZGVsYXktMnthbmltYXRpb24tZGVsYXk6LjRzO3RyYW5zaXRpb24tZGVsYXk6LjRzfS5kZWxheS0ze2FuaW1hdGlvbi1kZWxheTouNnM7dHJhbnNpdGlvbi1kZWxheTouNnN9LmRlbGF5LTR7YW5pbWF0aW9uLWRlbGF5Oi44czt0cmFuc2l0aW9uLWRlbGF5Oi44c30uZGVsYXktNXthbmltYXRpb24tZGVsYXk6MXM7dHJhbnNpdGlvbi1kZWxheToxc30uZGVsYXktNnthbmltYXRpb24tZGVsYXk6MS4yczt0cmFuc2l0aW9uLWRlbGF5OjEuMnN9LnVuZGVybGluZXtwb3NpdGlvbjpyZWxhdGl2ZX0udW5kZXJsaW5lOjphZnRlcntjb250ZW50OlxcXCIgXFxcIjtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206NSU7bGVmdDowO3dpZHRoOjEwMCU7Ym9yZGVyOjJweCBzb2xpZCBjdXJyZW50Q29sb3J9LnVuZGVybGluZS51cG9uLWFjdGl2YXRpb246OmFmdGVye3RyYW5zaXRpb246d2lkdGggLjRzIGVhc2Utb3V0IC40czt3aWR0aDowfS5qdW1wLnVwb24tYWN0aXZhdGlvbntkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2l0aW9uOmFsbCAuMnMgY3ViaWMtYmV6aWVyKDAsMCwuMjcsMS41OCkgLjdzO29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUoLjIpIHRyYW5zbGF0ZVkoNTAlKX0uYmVzcG9rZS1hY3RpdmUgLmp1bXAudXBvbi1hY3RpdmF0aW9ue29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUoLjYpIHRyYW5zbGF0ZVkoMCl9LmRlbGF5LTIwMCwuZGVsYXktMjAwOjphZnRlciwuZGVsYXktMjAwOjpiZWZvcmV7YW5pbWF0aW9uLWRlbGF5Oi4ycyFpbXBvcnRhbnQ7dHJhbnNpdGlvbi1kZWxheTouMnMhaW1wb3J0YW50fS5kZWxheS00MDAsLmRlbGF5LTQwMDo6YWZ0ZXIsLmRlbGF5LTQwMDo6YmVmb3Jle2FuaW1hdGlvbi1kZWxheTouNHMhaW1wb3J0YW50O3RyYW5zaXRpb24tZGVsYXk6LjRzIWltcG9ydGFudH0uZGVsYXktNjAwLC5kZWxheS02MDA6OmFmdGVyLC5kZWxheS02MDA6OmJlZm9yZXthbmltYXRpb24tZGVsYXk6LjZzIWltcG9ydGFudDt0cmFuc2l0aW9uLWRlbGF5Oi42cyFpbXBvcnRhbnR9LmRlbGF5LTgwMCwuZGVsYXktODAwOjphZnRlciwuZGVsYXktODAwOjpiZWZvcmV7YW5pbWF0aW9uLWRlbGF5Oi44cyFpbXBvcnRhbnQ7dHJhbnNpdGlvbi1kZWxheTouOHMhaW1wb3J0YW50fS5kZWxheS0xMDAwLC5kZWxheS0xMDAwOjphZnRlciwuZGVsYXktMTAwMDo6YmVmb3Jle2FuaW1hdGlvbi1kZWxheToxcyFpbXBvcnRhbnQ7dHJhbnNpdGlvbi1kZWxheToxcyFpbXBvcnRhbnR9LmRlbGF5LTEyMDAsLmRlbGF5LTEyMDA6OmFmdGVyLC5kZWxheS0xMjAwOjpiZWZvcmV7YW5pbWF0aW9uLWRlbGF5OjEuMnMhaW1wb3J0YW50O3RyYW5zaXRpb24tZGVsYXk6MS4ycyFpbXBvcnRhbnR9LmRlbGF5LTE0MDAsLmRlbGF5LTE0MDA6OmFmdGVyLC5kZWxheS0xNDAwOjpiZWZvcmV7YW5pbWF0aW9uLWRlbGF5OjEuNHMhaW1wb3J0YW50O3RyYW5zaXRpb24tZGVsYXk6MS40cyFpbXBvcnRhbnR9LmRlbGF5LTE2MDAsLmRlbGF5LTE2MDA6OmFmdGVyLC5kZWxheS0xNjAwOjpiZWZvcmV7YW5pbWF0aW9uLWRlbGF5OjEuNnMhaW1wb3J0YW50O3RyYW5zaXRpb24tZGVsYXk6MS42cyFpbXBvcnRhbnR9LmRlbGF5LTE4MDAsLmRlbGF5LTE4MDA6OmFmdGVyLC5kZWxheS0xODAwOjpiZWZvcmV7YW5pbWF0aW9uLWRlbGF5OjEuOHMhaW1wb3J0YW50O3RyYW5zaXRpb24tZGVsYXk6MS44cyFpbXBvcnRhbnR9LmRlbGF5LTIwMDAsLmRlbGF5LTIwMDA6OmFmdGVyLC5kZWxheS0yMDAwOjpiZWZvcmV7YW5pbWF0aW9uLWRlbGF5OjJzIWltcG9ydGFudDt0cmFuc2l0aW9uLWRlbGF5OjJzIWltcG9ydGFudH0uZGVsYXktMjIwMCwuZGVsYXktMjIwMDo6YWZ0ZXIsLmRlbGF5LTIyMDA6OmJlZm9yZXthbmltYXRpb24tZGVsYXk6Mi4ycyFpbXBvcnRhbnQ7dHJhbnNpdGlvbi1kZWxheToyLjJzIWltcG9ydGFudH0uZGVsYXktMjQwMCwuZGVsYXktMjQwMDo6YWZ0ZXIsLmRlbGF5LTI0MDA6OmJlZm9yZXthbmltYXRpb24tZGVsYXk6Mi40cyFpbXBvcnRhbnQ7dHJhbnNpdGlvbi1kZWxheToyLjRzIWltcG9ydGFudH0uZGVsYXktMjYwMCwuZGVsYXktMjYwMDo6YWZ0ZXIsLmRlbGF5LTI2MDA6OmJlZm9yZXthbmltYXRpb24tZGVsYXk6Mi42cyFpbXBvcnRhbnQ7dHJhbnNpdGlvbi1kZWxheToyLjZzIWltcG9ydGFudH0uZGVsYXktMjgwMCwuZGVsYXktMjgwMDo6YWZ0ZXIsLmRlbGF5LTI4MDA6OmJlZm9yZXthbmltYXRpb24tZGVsYXk6Mi44cyFpbXBvcnRhbnQ7dHJhbnNpdGlvbi1kZWxheToyLjhzIWltcG9ydGFudH0uZGVsYXktMzAwMCwuZGVsYXktMzAwMDo6YWZ0ZXIsLmRlbGF5LTMwMDA6OmJlZm9yZXthbmltYXRpb24tZGVsYXk6M3MhaW1wb3J0YW50O3RyYW5zaXRpb24tZGVsYXk6M3MhaW1wb3J0YW50fS5zaGFraW5ne2FuaW1hdGlvbjpzaGFraW5nIC41cyBlYXNlLW91dCAwcyAxfS5zaGFraW5nOm50aC1jaGlsZCgybil7YW5pbWF0aW9uLWRlbGF5Oi4xc30uY29vbC1yb3RhdGlvbi14e2FuaW1hdGlvbjpjb29sLXJvdGF0aW9uLXggMS4ycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBhbHRlcm5hdGV9QG1lZGlhIHNjcmVlbnsudHJhbnNpdGlvbi1naWFudC13aGVlbCAuYmVzcG9rZS1hY3RpdmUsLnRyYW5zaXRpb24tZ3JvdyAuYmVzcG9rZS1hY3RpdmUsLnRyYW5zaXRpb24tc2xpZGluZyAuYmVzcG9rZS1hY3RpdmUsLnRyYW5zaXRpb24tc3VidGxlIC5iZXNwb2tlLWFjdGl2ZXt0cmFuc2Zvcm06bm9uZTtvcGFjaXR5OjF9LnRyYW5zaXRpb24tc2xpZGluZyAuYmVzcG9rZS1zbGlkZXt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSxvcGFjaXR5O3RyYW5zaXRpb24tZHVyYXRpb246dmFyKC0tdHJhbnNpdGlvbi1kdXJhdGlvbik7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246dmFyKC0tdHJhbnNpdGlvbi1lYXNpbmcpfS50cmFuc2l0aW9uLXNsaWRpbmcgLmJlc3Bva2UtYmVmb3Jle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAxJSwwLDApfS50cmFuc2l0aW9uLXNsaWRpbmcgLmJlc3Bva2UtYWZ0ZXJ7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMSUsMCwwKX0udHJhbnNpdGlvbi1zdWJ0bGUgLmJlc3Bva2Utc2xpZGV7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0sb3BhY2l0eTt0cmFuc2l0aW9uLWR1cmF0aW9uOmNhbGMoLjc1KnZhcigtLXRyYW5zaXRpb24tZHVyYXRpb24pKTt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjp2YXIoLS10cmFuc2l0aW9uLWVhc2luZyl9LnRyYW5zaXRpb24tc3VidGxlIC5iZXNwb2tlLWJlZm9yZXt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTAwMHB4KX0udHJhbnNpdGlvbi1zdWJ0bGUgLmJlc3Bva2UtYWZ0ZXJ7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTAwMHB4KX0udHJhbnNpdGlvbi1zdWJ0bGUgLmJlc3Bva2UtYmVmb3JlLTF7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwMHB4KX0udHJhbnNpdGlvbi1zdWJ0bGUgLmJlc3Bva2UtYWZ0ZXItMXt0cmFuc2Zvcm06dHJhbnNsYXRlWCgxMDBweCl9LnRyYW5zaXRpb24tc3VidGxlIC5iZXNwb2tlLWJlZm9yZS0ye3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0zMDBweCl9LnRyYW5zaXRpb24tc3VidGxlIC5iZXNwb2tlLWFmdGVyLTJ7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMzAwcHgpfS50cmFuc2l0aW9uLWdpYW50LXdoZWVsIC5iZXNwb2tlLXNsaWRle3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLG9wYWNpdHk7dHJhbnNpdGlvbi1kdXJhdGlvbjp2YXIoLS10cmFuc2l0aW9uLWR1cmF0aW9uKTt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjp2YXIoLS10cmFuc2l0aW9uLWVhc2luZyk7dHJhbnNmb3JtLW9yaWdpbjo1MCUgMTAwJX0udHJhbnNpdGlvbi1naWFudC13aGVlbCAuYmVzcG9rZS1iZWZvcmV7dHJhbnNmb3JtOnJvdGF0ZVgoOTBkZWcpIHNjYWxlKC41KX0udHJhbnNpdGlvbi1naWFudC13aGVlbCAuYmVzcG9rZS1hZnRlcnt0cmFuc2Zvcm06cm90YXRlWCgtOTBkZWcpIHNjYWxlKC41KX0udHJhbnNpdGlvbi1ncm93IC5iZXNwb2tlLXNsaWRle3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLG9wYWNpdHk7dHJhbnNpdGlvbi1kdXJhdGlvbjpjYWxjKC41KnZhcigtLXRyYW5zaXRpb24tZHVyYXRpb24pKTt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjp2YXIoLS10cmFuc2l0aW9uLWVhc2luZyl9LnRyYW5zaXRpb24tZ3JvdyAuYmVzcG9rZS1iZWZvcmV7dHJhbnNmb3JtOnNjYWxlKDEuMSl9LnRyYW5zaXRpb24tZ3JvdyAuYmVzcG9rZS1hZnRlcnt0cmFuc2Zvcm06c2NhbGUoLjkpfX1AbWVkaWEgc2NyZWVuIGFuZCAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbil7LnRyYW5zaXRpb24tZ2lhbnQtd2hlZWwgLmJlc3Bva2Utc2xpZGUsLnRyYW5zaXRpb24tZ3JvdyAuYmVzcG9rZS1zbGlkZSwudHJhbnNpdGlvbi1zbGlkaW5nIC5iZXNwb2tlLXNsaWRlLC50cmFuc2l0aW9uLXN1YnRsZSAuYmVzcG9rZS1zbGlkZXt0cmFuc2l0aW9uLXByb3BlcnR5Om5vbmV9fS5iZXNwb2tlLXNsaWRle2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7YWxpZ24taXRlbXM6ZmxleC1zdGFydDtwYWRkaW5nOjEuNXJlbX0uYmVzcG9rZS1zbGlkZSBoMSwuYmVzcG9rZS1zbGlkZSBoMiwuYmVzcG9rZS1zbGlkZSBoMywuYmVzcG9rZS1zbGlkZSBoNCwuYmVzcG9rZS1zbGlkZSBoNSwuYmVzcG9rZS1zbGlkZSBoNnttYXJnaW46MCAwIC41ZW07cGFkZGluZzowfS5sYXlvdXQtdGl0bGV7anVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDthbGlnbi1pdGVtczpjZW50ZXI7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzowfS5sYXlvdXQtdGl0bGUgaDF7Y29sb3I6dmFyKC0tYmlnLXRpdGxlLWNvbG9yKX0ubGF5b3V0LXRpdGxlIGgye2JhY2tncm91bmQtY29sb3I6dmFyKC0tYWNjZW50LWNvbG9yKTt3aWR0aDoxMDAlO3BhZGRpbmc6MmVtIDA7bWFyZ2luOjFlbSAwIDB9LmxheW91dC10aXRsZSBoMiBzdHJvbmd7Y29sb3I6dmFyKC0tYWNjZW50LW1vcmUtY29sb3IpfS5sYXlvdXQtc2VjdGlvbi1oZWFkZXJ7ZmxleC13cmFwOndyYXA7anVzdGlmeS1jb250ZW50OmNlbnRlcjtwYWRkaW5nOjB9LmxheW91dC1zZWN0aW9uLWhlYWRlcjo6YWZ0ZXJ7ZGlzcGxheTpibG9jaztjb250ZW50OlxcXCIgXFxcIjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO3dpZHRoOjUwJTtoZWlnaHQ6MTAwJTt6LWluZGV4Oi0xO2JhY2tncm91bmQtY29sb3I6dmFyKC0tYWNjZW50LWNvbG9yKX0ubGF5b3V0LXNlY3Rpb24taGVhZGVyIC5jb250ZW50e2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94fS5sYXlvdXQtc2VjdGlvbi1oZWFkZXIgLmNvbnRlbnQgZGQsLmxheW91dC1zZWN0aW9uLWhlYWRlciAuY29udGVudCBkdCwubGF5b3V0LXNlY3Rpb24taGVhZGVyIC5jb250ZW50IGxpLC5sYXlvdXQtc2VjdGlvbi1oZWFkZXIgLmNvbnRlbnQgcHtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXByZXNlbnRhdGlvbi1jb2xvcil9LmxheW91dC1zZWN0aW9uLWhlYWRlciAuY29udGVudCBsaSwubGF5b3V0LXNlY3Rpb24taGVhZGVyIC5jb250ZW50IHB7ZGlzcGxheTppbmxpbmV9LmxheW91dC1zZWN0aW9uLWhlYWRlciAuY29udGVudCBwOjphZnRlcntjb250ZW50OlxcXCIgXFxcIjtkaXNwbGF5OmJsb2NrO21hcmdpbi1ib3R0b206LjVlbX0ubGF5b3V0LXNlY3Rpb24taGVhZGVyIC5jb250ZW50OjphZnRlcntjb250ZW50OlxcXCIgXFxcIjtkaXNwbGF5OmJsb2NrO3dpZHRoOjNlbTtoZWlnaHQ6MXB4O2JvcmRlci1ib3R0b206M3B4IHNvbGlkIHZhcigtLXByZXNlbnRhdGlvbi1jb2xvcil9LmxheW91dC1zZWN0aW9uLWhlYWRlciAuY29udGVudCBsaTo6YmVmb3Jle2NvbnRlbnQ6XFxcIiBcXFwiO2Rpc3BsYXk6bGlzdC1pdGVtO2Zsb2F0OmxlZnR9LmxheW91dC1zZWN0aW9uLWhlYWRlciAuY29udGVudCBsaTo6YWZ0ZXJ7Y29udGVudDpcXFwiIFxcXCI7ZGlzcGxheTpibG9ja30ubGF5b3V0LXNlY3Rpb24taGVhZGVyPip7d2lkdGg6NTAlO3BhZGRpbmc6MCAxZW19LmxheW91dC1zZWN0aW9uLWhlYWRlcj5vbCwubGF5b3V0LXNlY3Rpb24taGVhZGVyPnVse3BhZGRpbmctbGVmdDoyZW19LmxheW91dC1zZWN0aW9uLWhlYWRlciBoMXttYXJnaW46MDt0ZXh0LWFsaWduOmNlbnRlcjtoZWlnaHQ6NzAlO2JveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nOjJlbSAuMTVlbSAuNWVtfS5sYXlvdXQtc2VjdGlvbi1oZWFkZXIgaDJ7bWFyZ2luOjA7cGFkZGluZzowO3RleHQtYWxpZ246Y2VudGVyO2hlaWdodDozMCV9LmxheW91dC1jZW50ZXJlZCwubGF5b3V0LWNlbnRlcmVkLXZlcnRpY2Fse2p1c3RpZnktY29udGVudDpjZW50ZXJ9LmxheW91dC1jZW50ZXJlZCwubGF5b3V0LWNlbnRlcmVkLWhvcml6b250YWx7YWxpZ24taXRlbXM6Y2VudGVyfS5sYXlvdXQtMi1jb2x1bW4tY29udGVudCwubGF5b3V0LTMtY29sdW1uLWNvbnRlbnQsLmxheW91dC00LWNvbHVtbi1jb250ZW50e2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLXJvd3M6YXV0byAxZnI7Y29sdW1uLWdhcDp2YXIoLS1sYXlvdXQtY29sdW1uLWdhcCl9LmxheW91dC0yLWNvbHVtbi1jb250ZW50e2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyfS5sYXlvdXQtMi1jb2x1bW4tY29udGVudCAuc3Bhbi1jb2x1bW5zLC5sYXlvdXQtMi1jb2x1bW4tY29udGVudCBoMSwubGF5b3V0LTItY29sdW1uLWNvbnRlbnQgaDIsLmxheW91dC0yLWNvbHVtbi1jb250ZW50IGgzLC5sYXlvdXQtMi1jb2x1bW4tY29udGVudCBoNCwubGF5b3V0LTItY29sdW1uLWNvbnRlbnQgaDUsLmxheW91dC0yLWNvbHVtbi1jb250ZW50IGg2e2dyaWQtY29sdW1uOjEvM30ubGF5b3V0LTMtY29sdW1uLWNvbnRlbnR7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnIgMWZyfS5sYXlvdXQtMy1jb2x1bW4tY29udGVudCAuc3Bhbi1jb2x1bW5zLC5sYXlvdXQtMy1jb2x1bW4tY29udGVudCBoMSwubGF5b3V0LTMtY29sdW1uLWNvbnRlbnQgaDIsLmxheW91dC0zLWNvbHVtbi1jb250ZW50IGgzLC5sYXlvdXQtMy1jb2x1bW4tY29udGVudCBoNCwubGF5b3V0LTMtY29sdW1uLWNvbnRlbnQgaDUsLmxheW91dC0zLWNvbHVtbi1jb250ZW50IGg2e2dyaWQtY29sdW1uOjEvNH0ubGF5b3V0LTQtY29sdW1uLWNvbnRlbnR7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnIgMWZyIDFmcn0ubGF5b3V0LTQtY29sdW1uLWNvbnRlbnQgLnNwYW4tY29sdW1ucywubGF5b3V0LTQtY29sdW1uLWNvbnRlbnQgaDEsLmxheW91dC00LWNvbHVtbi1jb250ZW50IGgyLC5sYXlvdXQtNC1jb2x1bW4tY29udGVudCBoMywubGF5b3V0LTQtY29sdW1uLWNvbnRlbnQgaDQsLmxheW91dC00LWNvbHVtbi1jb250ZW50IGg1LC5sYXlvdXQtNC1jb2x1bW4tY29udGVudCBoNntncmlkLWNvbHVtbjoxLzV9LmxheW91dC0yLWNvbHVtbi1oaWdobGlnaHQtYW5kLWNvbnRlbnR7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtcm93czphdXRvIDFmcjtncmlkLXRlbXBsYXRlLWNvbHVtbnM6bWlubWF4KGF1dG8sMWZyKSAzZnI7Y29sdW1uLWdhcDoxZW07cGVyc3BlY3RpdmU6aW5oZXJpdH0ubGF5b3V0LTItY29sdW1uLWhpZ2hsaWdodC1hbmQtY29udGVudCBoMSwubGF5b3V0LTItY29sdW1uLWhpZ2hsaWdodC1hbmQtY29udGVudCBoMiwubGF5b3V0LTItY29sdW1uLWhpZ2hsaWdodC1hbmQtY29udGVudCBoMywubGF5b3V0LTItY29sdW1uLWhpZ2hsaWdodC1hbmQtY29udGVudCBoNCwubGF5b3V0LTItY29sdW1uLWhpZ2hsaWdodC1hbmQtY29udGVudCBoNSwubGF5b3V0LTItY29sdW1uLWhpZ2hsaWdodC1hbmQtY29udGVudCBoNntncmlkLWNvbHVtbjoxLzN9LmxheW91dC0yLWNvbHVtbi1oaWdobGlnaHQtYW5kLWNvbnRlbnQ+Om50aC1jaGlsZCgyKXt3aWR0aDo5MCU7bWFyZ2luOjAgMCAwIGF1dG87Ym94LXNoYWRvdzowIDAgMjBweCB0cmFuc3BhcmVudDt0cmFuc2l0aW9uOmFsbCAuNXMgZWFzZSAuNHM7b3BhY2l0eTouNTt0cmFuc2Zvcm06c2NhbGUoLjc1KTt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0fS5sYXlvdXQtMi1jb2x1bW4taGlnaGxpZ2h0LWFuZC1jb250ZW50PjpudGgtY2hpbGQoMik+aWZyYW1lLC5sYXlvdXQtMi1jb2x1bW4taGlnaGxpZ2h0LWFuZC1jb250ZW50PjpudGgtY2hpbGQoMik+aW1nLC5sYXlvdXQtdGFsbC1maWd1cmUtbGVmdD46bnRoLWNoaWxkKDIpPmltZywubGF5b3V0LXRhbGwtZmlndXJlLWxlZnQ+aW1nOm50aC1jaGlsZCgyKSwubGF5b3V0LXRhbGwtZmlndXJlLXJpZ2h0PjpudGgtY2hpbGQoMik+aW1nLC5sYXlvdXQtdGFsbC1maWd1cmUtcmlnaHQ+aW1nOm50aC1jaGlsZCgyKXttYXgtd2lkdGg6MTAwJTttYXgtaGVpZ2h0OjEwMCV9LmxheW91dC0yLWNvbHVtbi1oaWdobGlnaHQtYW5kLWNvbnRlbnQ+Om50aC1jaGlsZCgyKT5pZnJhbWV7aGVpZ2h0OjEwMCV9LmxheW91dC0yLWNvbHVtbi1oaWdobGlnaHQtYW5kLWNvbnRlbnQuYmVzcG9rZS1hY3RpdmU+Om50aC1jaGlsZCgyKXt0cmFuc2Zvcm06cm90YXRlWSgzMGRlZykgc2NhbGUoLjkpOy1tb3otdHJhbnNmb3JtOnJvdGF0ZVkoOGRlZykgc2NhbGUoLjkpO29wYWNpdHk6MTtib3gtc2hhZG93Oi0yMHB4IDIwcHggMjBweCB2YXIoLS1zaGFkb3ctY29sb3IpfS5sYXlvdXQtMi1jb2x1bW4taGlnaGxpZ2h0LWFuZC1jb250ZW50IC5zcGFuLWNvbHVtbnN7Z3JpZC1jb2x1bW46MS8zfS5sYXlvdXQtMy1jb2x1bW4tZWxlbWVudC13aXRoLXRpdGxlcy1leHBhbnNpYmxle2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC13cmFwOndyYXA7YWxpZ24taXRlbXM6ZmxleC1zdGFydH0ubGF5b3V0LTMtY29sdW1uLWVsZW1lbnQtd2l0aC10aXRsZXMtZXhwYW5zaWJsZT4qe3dpZHRoOmNhbGMoMzMlIC0gMXJlbSl9LmxheW91dC0zLWNvbHVtbi1lbGVtZW50LXdpdGgtdGl0bGVzLWV4cGFuc2libGUgaDEsLmxheW91dC0zLWNvbHVtbi1lbGVtZW50LXdpdGgtdGl0bGVzLWV4cGFuc2libGUgaDIsLmxheW91dC0zLWNvbHVtbi1lbGVtZW50LXdpdGgtdGl0bGVzLWV4cGFuc2libGUgaDMsLmxheW91dC0zLWNvbHVtbi1lbGVtZW50LXdpdGgtdGl0bGVzLWV4cGFuc2libGUgaDQsLmxheW91dC0zLWNvbHVtbi1lbGVtZW50LXdpdGgtdGl0bGVzLWV4cGFuc2libGUgaDUsLmxheW91dC0zLWNvbHVtbi1lbGVtZW50LXdpdGgtdGl0bGVzLWV4cGFuc2libGUgaDZ7bWFyZ2luOmF1dG8gMH0ubGF5b3V0LTMtY29sdW1uLWVsZW1lbnQtd2l0aC10aXRsZXMtZXhwYW5zaWJsZSBoMTpub3QoOmxhc3Qtb2YtdHlwZSksLmxheW91dC0zLWNvbHVtbi1lbGVtZW50LXdpdGgtdGl0bGVzLWV4cGFuc2libGUgaDI6bm90KDpsYXN0LW9mLXR5cGUpLC5sYXlvdXQtMy1jb2x1bW4tZWxlbWVudC13aXRoLXRpdGxlcy1leHBhbnNpYmxlIGgzOm5vdCg6bGFzdC1vZi10eXBlKSwubGF5b3V0LTMtY29sdW1uLWVsZW1lbnQtd2l0aC10aXRsZXMtZXhwYW5zaWJsZSBoNDpub3QoOmxhc3Qtb2YtdHlwZSksLmxheW91dC0zLWNvbHVtbi1lbGVtZW50LXdpdGgtdGl0bGVzLWV4cGFuc2libGUgaDU6bm90KDpsYXN0LW9mLXR5cGUpLC5sYXlvdXQtMy1jb2x1bW4tZWxlbWVudC13aXRoLXRpdGxlcy1leHBhbnNpYmxlIGg2Om5vdCg6bGFzdC1vZi10eXBlKXttYXJnaW4tcmlnaHQ6MXJlbX0ubGF5b3V0LTMtY29sdW1uLWVsZW1lbnQtd2l0aC10aXRsZXMtZXhwYW5zaWJsZT46bnRoLWNoaWxkKDJuKXtoZWlnaHQ6Y2FsYygxMDAlIC0gMi41ZW0pO21hcmdpbjowO3Bvc2l0aW9uOnJlbGF0aXZlfS5sYXlvdXQtMy1jb2x1bW4tZWxlbWVudC13aXRoLXRpdGxlcy1leHBhbnNpYmxlPjpudGgtY2hpbGQoMm4pOm5vdCg6bGFzdC1vZi10eXBlKXttYXJnaW4tcmlnaHQ6MXJlbX0ubGF5b3V0LTMtY29sdW1uLWVsZW1lbnQtd2l0aC10aXRsZXMtZXhwYW5zaWJsZT46bnRoLWNoaWxkKDJuKTpob3ZlcntsZWZ0OjA7d2lkdGg6MTAwJTt6LWluZGV4OjF9LmxheW91dC0zLWNvbHVtbi1lbGVtZW50LXdpdGgtdGl0bGVzLWV4cGFuc2libGU+Om50aC1jaGlsZCgybik6bnRoLW9mLXR5cGUoMil7dHJhbnNpdGlvbi1kdXJhdGlvbjo1MG1zfS5sYXlvdXQtMy1jb2x1bW4tZWxlbWVudC13aXRoLXRpdGxlcy1leHBhbnNpYmxlPjpudGgtY2hpbGQoMm4pOm50aC1vZi10eXBlKDIpOmhvdmVye2xlZnQ6LTMzJX0ubGF5b3V0LTMtY29sdW1uLWVsZW1lbnQtd2l0aC10aXRsZXMtZXhwYW5zaWJsZT46bnRoLWNoaWxkKDJuKTpudGgtb2YtdHlwZSgzKXt0cmFuc2l0aW9uOm5vbmV9LmxheW91dC0zLWNvbHVtbi1lbGVtZW50LXdpdGgtdGl0bGVzLWV4cGFuc2libGU+Om50aC1jaGlsZCgybik6bnRoLW9mLXR5cGUoMyk6aG92ZXJ7bGVmdDotNjclfS5sYXlvdXQtMi1jb2x1bW4tY29udGVudC16aWd6YWd7ZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtd3JhcDp3cmFwO2FsaWduLWl0ZW1zOmZsZXgtc3RhcnR9LmxheW91dC0yLWNvbHVtbi1jb250ZW50LXppZ3phZyBoMSwubGF5b3V0LTItY29sdW1uLWNvbnRlbnQtemlnemFnIGgye3dpZHRoOjEwMCV9LmxheW91dC0yLWNvbHVtbi1jb250ZW50LXppZ3phZz46bm90KDpmaXJzdC1jaGlsZCl7d2lkdGg6NDglfS5sYXlvdXQtMi1jb2x1bW4tY29udGVudC16aWd6YWcgLnNwYW4tY29sdW1uc3tncmlkLWNvbHVtbjoxLzN9LmxheW91dC1jaXJjbGluZy1iYWxsb29ucyBoMSwubGF5b3V0LWNpcmNsaW5nLWJhbGxvb25zIGgyLC5sYXlvdXQtY2lyY2xpbmctYmFsbG9vbnMgaDMsLmxheW91dC1jaXJjbGluZy1iYWxsb29ucyBoNCwubGF5b3V0LWNpcmNsaW5nLWJhbGxvb25zIGg1LC5sYXlvdXQtY2lyY2xpbmctYmFsbG9vbnMgaDZ7ei1pbmRleDoxfS5sYXlvdXQtY2lyY2xpbmctYmFsbG9vbnM+dWx7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bWFyZ2luOjB9LmxheW91dC1jaXJjbGluZy1iYWxsb29ucz51bD5saXtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoyMDBweDtoZWlnaHQ6MjAwcHg7bGluZS1oZWlnaHQ6MWVtO2xlZnQ6Y2FsYyg1MCUgLSAxMDBweCk7dG9wOmNhbGMoNTAlIC0gMTAwcHgpO3BhZGRpbmc6MDttYXJnaW46MDtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kOnZhcigtLWNpcmNsaW5nLWJhbGxvb25zLWJnKTtjb2xvcjp2YXIoLS10ZXh0LWNvbG9yKTtvdmVyZmxvdzpoaWRkZW47bGlzdC1zdHlsZS10eXBlOm5vbmU7dHJhbnNpdGlvbjphbGwgMjUwbXMgZWFzZTthbmltYXRpb246Y2lyY2xpbmcgMzZzIGxpbmVhciAwcyBpbmZpbml0ZX0ubGF5b3V0LWNpcmNsaW5nLWJhbGxvb25zPnVsPmxpOm50aC1vZi10eXBlKDEpe2FuaW1hdGlvbi1kZWxheTowc30ubGF5b3V0LWNpcmNsaW5nLWJhbGxvb25zPnVsPmxpOm50aC1vZi10eXBlKDIpe2FuaW1hdGlvbi1kZWxheTotMTJzfS5sYXlvdXQtY2lyY2xpbmctYmFsbG9vbnM+dWw+bGk6bnRoLW9mLXR5cGUoMyl7YW5pbWF0aW9uLWRlbGF5Oi0yNHN9LmxheW91dC1jaXJjbGluZy1iYWxsb29ucz51bD5saT46Zmlyc3QtY2hpbGR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7bWFyZ2luOjA7cGFkZGluZy1sZWZ0OjEuNWVtO3BhZGRpbmctcmlnaHQ6MS41ZW07dHJhbnNpdGlvbjphbGwgMjUwbXMgZWFzZX0ubGF5b3V0LWNpcmNsaW5nLWJhbGxvb25zPnVsPmxpPjpmaXJzdC1jaGlsZCBpbWd7ZGlzcGxheTpibG9jazt3aWR0aDoxMjVweDtoZWlnaHQ6MTI1cHg7bWFyZ2luOjM3LjVweCBhdXRvfS5sYXlvdXQtY2lyY2xpbmctYmFsbG9vbnM+dWw+bGk+Om50aC1jaGlsZCgyKXttYXJnaW4tdG9wOjIwMHB4O3BhZGRpbmc6MWVtfS5sYXlvdXQtY2lyY2xpbmctYmFsbG9vbnM+dWw+bGk6aG92ZXJ7d2lkdGg6MjZlbTtoZWlnaHQ6MTBlbTt0b3A6Y2FsYyg1MCUgLSA1ZW0pO2xlZnQ6Y2FsYyg1MCUgLSAxM2VtKTtib3JkZXItcmFkaXVzOjJlbTtvdmVyZmxvdzp2aXNpYmxlO3otaW5kZXg6Mn0ubGF5b3V0LWNpcmNsaW5nLWJhbGxvb25zPnVsPmxpOmhvdmVyPjpmaXJzdC1jaGlsZHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKX0ubGF5b3V0LWNpcmNsaW5nLWJhbGxvb25zPnVsPmxpOmhvdmVyPjpudGgtY2hpbGQoMil7bWFyZ2luLXRvcDoxZW19LmxheW91dC1jaXJjbGluZy1iYWxsb29ucz51bDpob3Zlcj5saXthbmltYXRpb24tcGxheS1zdGF0ZTpwYXVzZWR9LmxheW91dC10YWxsLWZpZ3VyZS1sZWZ0LC5sYXlvdXQtdGFsbC1maWd1cmUtcmlnaHR7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtcm93czphdXRvIDFmcn0ubGF5b3V0LXRhbGwtZmlndXJlLWxlZnR7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOi41ZnIgMWZyfS5sYXlvdXQtdGFsbC1maWd1cmUtbGVmdCAuc3Bhbi1jb2x1bW5zLC5sYXlvdXQtdGFsbC1maWd1cmUtbGVmdCBoMSwubGF5b3V0LXRhbGwtZmlndXJlLWxlZnQgaDIsLmxheW91dC10YWxsLWZpZ3VyZS1sZWZ0IGgzLC5sYXlvdXQtdGFsbC1maWd1cmUtbGVmdCBoNCwubGF5b3V0LXRhbGwtZmlndXJlLWxlZnQgaDUsLmxheW91dC10YWxsLWZpZ3VyZS1sZWZ0IGg2LC5sYXlvdXQtdGFsbC1maWd1cmUtcmlnaHQgLnNwYW4tY29sdW1ucywubGF5b3V0LXRhbGwtZmlndXJlLXJpZ2h0IGgxLC5sYXlvdXQtdGFsbC1maWd1cmUtcmlnaHQgaDIsLmxheW91dC10YWxsLWZpZ3VyZS1yaWdodCBoMywubGF5b3V0LXRhbGwtZmlndXJlLXJpZ2h0IGg0LC5sYXlvdXQtdGFsbC1maWd1cmUtcmlnaHQgaDUsLmxheW91dC10YWxsLWZpZ3VyZS1yaWdodCBoNntncmlkLWNvbHVtbjoxLzN9LmxheW91dC10YWxsLWZpZ3VyZS1yaWdodHtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIC41ZnJ9LmxheW91dC10YWxsLWZpZ3VyZS1yaWdodD46bnRoLWNoaWxkKDIpe2dyaWQtY29sdW1uOjIvM30ubGF5b3V0LXRhbGwtZmlndXJlLXJpZ2h0PjpudGgtY2hpbGQoMyl7Z3JpZC1yb3c6Mi8zfS5sYXlvdXQtbWFpbi1wb2ludCxbZGF0YS1iZXNwb2tlLXN0YXRlPWVtcGhhdGljXXtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn0ubGF5b3V0LW1haW4tcG9pbnQuYmVzcG9rZS1wYXJlbnQsLmxheW91dC1tYWluLXBvaW50LmJlc3Bva2Utc2xpZGUsW2RhdGEtYmVzcG9rZS1zdGF0ZT1lbXBoYXRpY10uYmVzcG9rZS1wYXJlbnQsW2RhdGEtYmVzcG9rZS1zdGF0ZT1lbXBoYXRpY10uYmVzcG9rZS1zbGlkZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWVtcGhhdGljLWNvbG9yKX0uZW1waGF0aWMgaDEsLmVtcGhhdGljIGgyLC5lbXBoYXRpYyBoMywuZW1waGF0aWMgaDQsLmVtcGhhdGljIGg1LC5lbXBoYXRpYyBoNiwubGF5b3V0LW1haW4tcG9pbnQuYmVzcG9rZS1zbGlkZSBoMSwubGF5b3V0LW1haW4tcG9pbnQuYmVzcG9rZS1zbGlkZSBoMiwubGF5b3V0LW1haW4tcG9pbnQuYmVzcG9rZS1zbGlkZSBoMywubGF5b3V0LW1haW4tcG9pbnQuYmVzcG9rZS1zbGlkZSBoNCwubGF5b3V0LW1haW4tcG9pbnQuYmVzcG9rZS1zbGlkZSBoNSwubGF5b3V0LW1haW4tcG9pbnQuYmVzcG9rZS1zbGlkZSBoNixbZGF0YS1iZXNwb2tlLXN0YXRlPWVtcGhhdGljXS5iZXNwb2tlLXNsaWRlIGgxLFtkYXRhLWJlc3Bva2Utc3RhdGU9ZW1waGF0aWNdLmJlc3Bva2Utc2xpZGUgaDIsW2RhdGEtYmVzcG9rZS1zdGF0ZT1lbXBoYXRpY10uYmVzcG9rZS1zbGlkZSBoMyxbZGF0YS1iZXNwb2tlLXN0YXRlPWVtcGhhdGljXS5iZXNwb2tlLXNsaWRlIGg0LFtkYXRhLWJlc3Bva2Utc3RhdGU9ZW1waGF0aWNdLmJlc3Bva2Utc2xpZGUgaDUsW2RhdGEtYmVzcG9rZS1zdGF0ZT1lbXBoYXRpY10uYmVzcG9rZS1zbGlkZSBoNntjb2xvcjojZmZmfS5mdWxsLXBhZ2UtdmlkZW8tY2FwdGlvbntwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MzBweDtmb250LXNpemU6Ljc1ZW07bGVmdDo1MCU7d2lkdGg6MTZlbTt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tbGVmdDotOGVtO3BhZGRpbmc6MDtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSw4LC42NSk7Ym9yZGVyLXJhZGl1czouMjVlbTtib3gtc2hhZG93OjNweCAzcHggM3B4IHZhcigtLXNoYWRvdy1jb2xvcil9QG1lZGlhIHNjcmVlbnsuYmVzcG9rZS1zY2FsZS1wYXJlbnR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7ei1pbmRleDoxO3BlcnNwZWN0aXZlOjkwMHB4O3BvaW50ZXItZXZlbnRzOm5vbmV9LmJlc3Bva2Utc2NhbGUtcGFyZW50IC5iZXNwb2tlLWFjdGl2ZXtwb2ludGVyLWV2ZW50czphdXRvfX0uYmVzcG9rZS1iYWNrZHJvcHtwb2ludGVyLWV2ZW50czpub25lfUBtZWRpYSBwcmludHsuYmVzcG9rZS1iYWNrZHJvcHtkaXNwbGF5Om5vbmV9fS5lbXBoYXRpY3tiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWVtcGhhdGljLWNvbG9yKTtjb2xvcjojZmZmfS5lbXBoYXRpYyBjb2RlLC5lbXBoYXRpYyBzdHJvbmd7Y29sb3I6dmFyKC0tZW1waGF0aWMtYWNjZW50LWNvbG9yKX0uZW1waGF0aWMgY29kZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlubGluZS1lbXBoYXRpYy1jb2RlLWJnLWNvbG9yKX0uc2hvdy1hY3RpdmUtc2xpZGUtYW5kLXByZXZpb3VzIC5iZXNwb2tlLWJlZm9yZS0xe3RyYW5zZm9ybTp0cmFuc2xhdGUzZChjYWxjKC0xKnZhcigtLXNob3ctMi1zbGlkZXMteC1kaXN0YW5jZSkpLDAsdmFyKC0tc2hvdy0yLXNsaWRlcy16LWRpc3RhbmNlKSkgcm90YXRlWSh2YXIoLS1zaG93LTItc2xpZGVzLXJvdGF0aW9uKSk7b3BhY2l0eToxfS5zaG93LWFjdGl2ZS1zbGlkZS1hbmQtcHJldmlvdXMgLmJlc3Bva2UtYWN0aXZle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCh2YXIoLS1zaG93LTItc2xpZGVzLXgtZGlzdGFuY2UpLDAsdmFyKC0tc2hvdy0yLXNsaWRlcy16LWRpc3RhbmNlKSkgcm90YXRlWShjYWxjKC0xKnZhcigtLXNob3ctMi1zbGlkZXMtcm90YXRpb24pKSl9W2RhdGEtYmVzcG9rZS1zdGF0ZT1zaG93LWFjdGl2ZS1zbGlkZS1hbmQtcHJldmlvdXNdLmJlc3Bva2UtYmVmb3JlLTF7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKGNhbGMoLTEqdmFyKC0tc2hvdy0yLXNsaWRlcy14LWRpc3RhbmNlKSksMCx2YXIoLS1zaG93LTItc2xpZGVzLXotZGlzdGFuY2UpKSByb3RhdGVZKHZhcigtLXNob3ctMi1zbGlkZXMtcm90YXRpb24pKTtvcGFjaXR5OjB9QG1lZGlhIHNjcmVlbnsuYmVzcG9rZS1zbGlkZSAuYmVzcG9rZS1idWxsZXR7b3BhY2l0eToxO3RyYW5zZm9ybTpub25lO3RyYW5zaXRpb246YWxsIC40cyBlYXNlfS5iZXNwb2tlLXNsaWRlIC5iZXNwb2tlLWJ1bGxldC1pbmFjdGl2ZXtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZTt0cmFuc2Zvcm06dHJhbnNsYXRlWCg0MHB4KTt0cmFuc2l0aW9uOmFsbCAuMnMgZWFzZX0uYmVzcG9rZS1zbGlkZSAuYmVzcG9rZS1idWxsZXQtb2ZmIC5iZXNwb2tlLWJ1bGxldC1pbmFjdGl2ZXtkaXNwbGF5Omxpc3QtaXRlbTtvcGFjaXR5OmluaXRpYWw7dHJhbnNmb3JtOmluaXRpYWx9LmJlc3Bva2Utc2xpZGUgLmJ1bGxldC1vbGR7Y29sb3I6Z3JheX0uYmVzcG9rZS1zbGlkZSAuYnVsbGV0LW5vLWFuaW17dHJhbnNpdGlvbjpub25lIWltcG9ydGFudH0uYmVzcG9rZS1zbGlkZSAuYnVsbGV0LW5vLWFuaW0uYmVzcG9rZS1idWxsZXQtaW5hY3RpdmV7dHJhbnNmb3JtOm5vbmV9LmJlc3Bva2UtcHJvZ3Jlc3MtcGFyZW50e3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2hlaWdodDozcHg7ei1pbmRleDoyfS5iZXNwb2tlLXByb2dyZXNzLWJhcntwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTt0cmFuc2l0aW9uOndpZHRoIC4zcyBlYXNlfS5iZXNwb2tlLXByb2dyZXNzLWJhcjpiZWZvcmV7Y29udGVudDpcXFwiIFxcXCI7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JhY2tncm91bmQ6I2E2YTZhNn0uYmVzcG9rZS1wcm9ncmVzcy1udW1iZXJ7cG9zaXRpb246YWJzb2x1dGU7Zm9udC1zaXplOjlweDttaW4td2lkdGg6MmVtO2hlaWdodDoyZW07cmlnaHQ6MXJlbTt0b3A6MXJlbTtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2JhY2tncm91bmQtY29sb3I6cmdiYSgyMDQsMjA0LDIwNCwuNik7YmFja2dyb3VuZC1jbGlwOmNvbnRlbnQtYm94O2NvbG9yOiRwcm9ncmVzcy1iYXItY29sb3I7dGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6MmVtO3BhZGRpbmc6MDtib3JkZXI6M3B4IGRvdWJsZSByZ2JhKDIwNCwyMDQsMjA0LC42KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGV7cG9zaXRpb246YWJzb2x1dGU7b3BhY2l0eToxO291dGxpbmU6NHB4IHNvbGlkIHNpbHZlcn0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGU6aG92ZXJ7b3V0bGluZS1jb2xvcjojNDY4MmI0fS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFjdGl2ZXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLC0yMDAwcHgpO291dGxpbmUtY29sb3I6IzQ2ODJiNDt6LWluZGV4OjEwMH0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlcjpub3QoLmJlc3Bva2UtYWZ0ZXItMSk6bm90KC5iZXNwb2tlLWFmdGVyLTIpOm5vdCguYmVzcG9rZS1hZnRlci0zKTpub3QoLmJlc3Bva2UtYWZ0ZXItNCl7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDc2MzQuNjY3MzM4NjY5MzU0cHgsMCwtMjAwMHB4KTtkaXNwbGF5Om5vbmV9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlOm5vdCguYmVzcG9rZS1iZWZvcmUtMSk6bm90KC5iZXNwb2tlLWJlZm9yZS0yKTpub3QoLmJlc3Bva2UtYmVmb3JlLTMpOm5vdCguYmVzcG9rZS1iZWZvcmUtNCl7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC03NjM0LjY2NzMzODY2OTM1NHB4LDAsLTIwMDBweCk7ZGlzcGxheTpub25lfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTF7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwOTAuNjY2NzYyNjY3MDUwNXB4LDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTF7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDkwLjY2Njc2MjY2NzA1MDVweCwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTJ7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIxODEuMzMzNTI1MzM0MTAxcHgsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtMnt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTIxODEuMzMzNTI1MzM0MTAxcHgsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlci0ze3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgzMjcyLjAwMDI4ODAwMTE1MTZweCwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWJlZm9yZS0ze3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMzI3Mi4wMDAyODgwMDExNTE2cHgsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlci00e3RyYW5zZm9ybTp0cmFuc2xhdGUzZCg0MzYyLjY2NzA1MDY2ODIwMnB4LDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTR7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC00MzYyLjY2NzA1MDY2ODIwMnB4LDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3LXRyYW5zaXRpb25pbmcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlci0xLC5iZXNwb2tlLXNpbXBsZS1vdmVydmlldy5iZXNwb2tlLXNpbXBsZS1vdmVydmlldy10cmFuc2l0aW9uaW5nIC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTF7dHJhbnNpdGlvbi1kZWxheTouMXN9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3LXRyYW5zaXRpb25pbmcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlci0yLC5iZXNwb2tlLXNpbXBsZS1vdmVydmlldy5iZXNwb2tlLXNpbXBsZS1vdmVydmlldy10cmFuc2l0aW9uaW5nIC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTJ7dHJhbnNpdGlvbi1kZWxheTouMnN9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3LXRyYW5zaXRpb25pbmcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlci0zLC5iZXNwb2tlLXNpbXBsZS1vdmVydmlldy5iZXNwb2tlLXNpbXBsZS1vdmVydmlldy10cmFuc2l0aW9uaW5nIC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTN7dHJhbnNpdGlvbi1kZWxheTouM3N9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3LXRyYW5zaXRpb25pbmcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlci00LC5iZXNwb2tlLXNpbXBsZS1vdmVydmlldy5iZXNwb2tlLXNpbXBsZS1vdmVydmlldy10cmFuc2l0aW9uaW5nIC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTR7dHJhbnNpdGlvbi1kZWxheTouNHN9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLWJ1bGxldC1pbmFjdGl2ZXtkaXNwbGF5Omxpc3QtaXRlbTtvcGFjaXR5OmluaXRpYWw7dHJhbnNmb3JtOmluaXRpYWx9fTpyb290ey0tc2VhcmNoLXJlc3VsdC1iZzojZmYwOy0tc2VhcmNoLXJlc3VsdC1mb2N1c2VkLWJnOiNmZmE1MDB9I2Jlc3Bva2Utc2VhcmNoLXBhcmVudHstLXNlYXJjaC1wYXJlbnQtYmc6cmdiYSgwLDAsMCwwLjQpOy0tc2VhcmNoLW1hcmdpbjowLjVlbTstLXNlYXJjaC1iZzpyZ2JhKDI1NSwyNTUsMjU1LDAuMik7LS1zZWFyY2gtaW5wdXQtbGVuZ3RoOjEyZW07LS1zZWFyY2gtaW5wdXQtcG9zaXRpb246ZmxleC1lbmQ7LS1zZWFyY2gtaW5wdXQtY29sb3I6IzMzMzstLXNlYXJjaC1pbmZvLWNvbG9yOiMzMzM7LS1zZWFyY2gtaW5mby1rYmQtY29sb3I6IzAwMDstLXNlYXJjaC1pbmZvLWtiZC1iZzojY2NjOy0tc2VhcmNoLW5vLXJlc3VsdC1jb2xvcjojOGIwMDAwO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OnZhcigtLXNlYXJjaC1pbnB1dC1wb3NpdGlvbik7YWxpZ24taXRlbXM6Y2VudGVyO3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTowO3RyYW5zaXRpb246YWxsIC4ycyBlYXNlO2JhY2tncm91bmQtY29sb3I6dmFyKC0tc2VhcmNoLXBhcmVudC1iZyk7Zm9udC1zaXplOjEuMjVyZW07cGVyc3BlY3RpdmU6OTAwcHh9I2Jlc3Bva2Utc2VhcmNoLXBhcmVudC5iZXNwb2tlLXNlYXJjaC1zZWFyY2hpbmd7b3BhY2l0eToxO3BvaW50ZXItZXZlbnRzOmF1dG87ei1pbmRleDoxMDAwfSNiZXNwb2tlLXNlYXJjaHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2ZsZXgtd3JhcDp3cmFwO2FsaWduLWl0ZW1zOmJhc2VsaW5lO21hcmdpbjp2YXIoLS1zZWFyY2gtbWFyZ2luKTtwYWRkaW5nOjEuMjVlbTtib3JkZXItcmFkaXVzOjEwcHg7d2lkdGg6Y2FsYyh2YXIoLS1zZWFyY2gtaW5wdXQtbGVuZ3RoKSArIDhlbSk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1zZWFyY2gtYmcpOy13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOmJsdXIoNnB4KTtiYWNrZHJvcC1maWx0ZXI6Ymx1cig2cHgpO3RyYW5zaXRpb246YWxsIC4zcyBjdWJpYy1iZXppZXIoLjA2LC45OSwuNDYsMS4xNik7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTYwcHgpIHJvdGF0ZVgoOTBkZWcpO29wYWNpdHk6MH0jYmVzcG9rZS1zZWFyY2gtcmVzdWx0cy1jb3VudHtmb250LXNpemU6Ljc1ZW07Zm9udC1mYW1pbHk6bW9ub3NwYWNlfS5iZXNwb2tlLXNlYXJjaC1uby1yZXN1bHQ+I2Jlc3Bva2Utc2VhcmNoLWlucHV0e291dGxpbmU6MXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0tc2VhcmNoLW5vLXJlc3VsdC1jb2xvcil9LmJlc3Bva2Utc2VhcmNoLXJlc3VsdHtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXNlYXJjaC1yZXN1bHQtYmcsI2ZmMCl9LmJlc3Bva2Utc2VhcmNoLXJlc3VsdC1mb2N1c2Vke2JhY2tncm91bmQtY29sb3I6dmFyKC0tc2VhcmNoLXJlc3VsdC1mb2N1c2VkLWJnLG9yYW5nZSl9I2Jlc3Bva2Utc2VhcmNoLWlucHV0e3dpZHRoOnZhcigtLXNlYXJjaC1pbnB1dC1sZW5ndGgpO3BhZGRpbmc6LjE1ZW0gLjI1ZW07Ym9yZGVyOjFweCBzb2xpZCBjdXJyZW50Q29sb3I7Ym9yZGVyLXJhZGl1czo1cHg7Y29sb3I6dmFyKC0tc2VhcmNoLWlucHV0LWNvbG9yKTtmb250LXNpemU6MWVtfS5iZXNwb2tlLXNlYXJjaC1zZWFyY2hpbmcgI2Jlc3Bva2Utc2VhcmNoe3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9I2Jlc3Bva2Utc2VhcmNoLWluZm97d2lkdGg6MTAwJTttYXJnaW4tdG9wOjFlbTtmb250LXNpemU6LjllbTt0ZXh0LWFsaWduOmxlZnQ7Y29sb3I6dmFyKC0tc2VhcmNoLWluZm8tY29sb3IpfSNiZXNwb2tlLXNlYXJjaC1pbmZvIGtiZHttYXJnaW46MCAuMWVtO3BhZGRpbmc6LjFlbSAuNmVtO2JvcmRlci1yYWRpdXM6M3B4O2JvcmRlcjoxcHggc29saWQgI2NjYztjb2xvcjp2YXIoLS1zZWFyY2gtaW5mby1rYmQtY29sb3IpO2xpbmUtaGVpZ2h0OjEuNDtmb250LXNpemU6LjdlbTtkaXNwbGF5OmlubGluZS1ibG9jaztib3gtc2hhZG93OjAgMXB4IDAgcmdiYSgwLDAsMCwuNiksaW5zZXQgMCAwIDAgMnB4ICNjY2M7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1zZWFyY2gtaW5mby1rYmQtYmcpfSNiZXNwb2tlLXNlYXJjaC1pbmZvIGtiZDpsYXN0LW9mLXR5cGV7bWFyZ2luLXJpZ2h0OjFlbX0jYmVzcG9rZS1zZWFyY2gtaW5mbyBzdW1tYXJ5e2Rpc3BsYXk6bGlzdC1pdGVtO2NvdW50ZXItaW5jcmVtZW50Omxpc3QtaXRlbSAwO2xpc3Qtc3R5bGU6aW5zaWRlIGRpc2Nsb3N1cmUtY2xvc2VkO2N1cnNvcjpwb2ludGVyfS5iZXNwb2tlLXNlYXJjaC1pbmZvLXBhaXJ7bWFyZ2luLXJpZ2h0OjFlbTt3aGl0ZS1zcGFjZTpub3dyYXA7ZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luLWJvdHRvbTouMjVlbX0jYmVzcG9rZS1zZWFyY2gtaW5mb1tvcGVuXT5zdW1tYXJ5OmZpcnN0LW9mLXR5cGV7bGlzdC1zdHlsZS10eXBlOmRpc2Nsb3N1cmUtb3Blbn0uYmVzcG9rZS1idWxsZXRzLW9mZiAuYmVzcG9rZS1idWxsZXQuYmVzcG9rZS1idWxsZXQtaW5hY3RpdmV7b3BhY2l0eToxO3RyYW5zZm9ybTpub25lfS5iZXNwb2tlLXNlYXJjaC1zaGFraW5ne2FuaW1hdGlvbjpzaGFraW5nIC41cyBlYXNlLW91dCAwcyAxfUBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6ZGFyayl7I2Jlc3Bva2Utc2VhcmNoLXBhcmVudHstLXNlYXJjaC1wYXJlbnQtYmc6cmdiYSgyNTUsMjU1LDI1NSwwLjQpOy0tc2VhcmNoLWJnOnJnYmEoMCwwLDAsMC4yKTstLXNlYXJjaC1pbmZvLWNvbG9yOiNlZWV9fUBtZWRpYSBwcmludHs6cm9vdHstLXNsaWRlLXNwYWNpbmc6NjRweH0uYmVzcG9rZS1wYXJlbnQsLmJlc3Bva2Utc2NhbGUtcGFyZW50e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmcjtjb2x1bW4tZ2FwOnZhcigtLXNsaWRlLXNwYWNpbmcpO3Jvdy1nYXA6dmFyKC0tc2xpZGUtc3BhY2luZyk7dHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDt3aWR0aDoyMTk3LjMzMzMzMzMzMzMzM3B4O2hlaWdodDoxMDB2aDtvdmVyZmxvdzp2aXNpYmxlO3RyYW5zZm9ybTpzY2FsZSguMzYxMjEwOTE2Nzk2MTE3KX0uYmVzcG9rZS1zbGlkZXtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDY2LjY2NjY2NjY2NjY2NjVweDtoZWlnaHQ6NjAwcHg7b3V0bGluZToycHggc29saWQgIzAwMCFpbXBvcnRhbnQ7cGFnZS1icmVhay1pbnNpZGU6YXZvaWQhaW1wb3J0YW50fS5iZXNwb2tlLXNsaWRlIC5iZXNwb2tlLWJ1bGxldC1pbmFjdGl2ZXtvcGFjaXR5OjEhaW1wb3J0YW50O3RyYW5zZm9ybTpub25lIWltcG9ydGFudDt0cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50fUBwYWdle21hcmdpbjo3NS44NHB4IWltcG9ydGFudH0uYmVzcG9rZS1zY2FsZS1wYXJlbnR7dHJhbnNmb3JtOm5vbmUhaW1wb3J0YW50O3pvb206MSFpbXBvcnRhbnR9fUBtZWRpYSBwcmludCBhbmQgKG9yaWVudGF0aW9uOmxhbmRzY2FwZSl7LmJlc3Bva2UtcGFyZW50LC5iZXNwb2tlLXNjYWxlLXBhcmVudHstLXNsaWRlLXNwYWNpbmc6MTEwcHg7cm93LWdhcDpjYWxjKHZhcigtLXNsaWRlLXNwYWNpbmcpKjEuNSk7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgzLDFmcik7d2lkdGg6MjE5Ny4zMzMzMzMzMzMzMzNweDt0cmFuc2Zvcm06c2NhbGUoLjM2MTIxMDkxNjc5NjExNyl9fVwiOyAocmVxdWlyZShcImJyb3dzZXJpZnktY3NzXCIpLmNyZWF0ZVN0eWxlKGNzcywgeyBcImhyZWZcIjogXCJ0aGVtZVxcXFx0aGVtZS5jc3NcIiB9LCB7IFwiaW5zZXJ0QXRcIjogXCJib3R0b21cIiB9KSk7IG1vZHVsZS5leHBvcnRzID0gY3NzOyIsImNvbnN0IGNsYXNzZXMgPSByZXF1aXJlKCdiZXNwb2tlLWNsYXNzZXMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oeyBpbnNlcnRGb250cyA9IHRydWUgfSkge1xyXG4gIGlmIChpbnNlcnRGb250cykge1xyXG4gICAgcmVxdWlyZShcIi4uL2Rpc3QvdGhlbWUvZm9udHMuY3NzXCIpO1xyXG4gIH1cclxuICByZXF1aXJlKFwiLi4vZGlzdC90aGVtZS90aGVtZS5jc3NcIik7XHJcblxyXG4gIHJldHVybiBmdW5jdGlvbihkZWNrKSB7XHJcbiAgICBjbGFzc2VzKCkoZGVjayk7XHJcbiAgfTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHJldHVybiBmdW5jdGlvbihkZWNrKSB7XG4gICAgdmFyIGFjdGl2ZVNsaWRlSW5kZXgsXG4gICAgICBhY3RpdmVCdWxsZXRJbmRleCxcblxuICAgICAgYnVsbGV0cyA9IGRlY2suc2xpZGVzLm1hcChmdW5jdGlvbihzbGlkZSkge1xuICAgICAgICByZXR1cm4gW10uc2xpY2UuY2FsbChzbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycgPyBvcHRpb25zIDogJ1tkYXRhLWJlc3Bva2UtYnVsbGV0XScpKSwgMCk7XG4gICAgICB9KSxcblxuICAgICAgbmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbmV4dFNsaWRlSW5kZXggPSBhY3RpdmVTbGlkZUluZGV4ICsgMTtcblxuICAgICAgICBpZiAoYWN0aXZlU2xpZGVIYXNCdWxsZXRCeU9mZnNldCgxKSkge1xuICAgICAgICAgIGFjdGl2YXRlQnVsbGV0KGFjdGl2ZVNsaWRlSW5kZXgsIGFjdGl2ZUJ1bGxldEluZGV4ICsgMSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGJ1bGxldHNbbmV4dFNsaWRlSW5kZXhdKSB7XG4gICAgICAgICAgYWN0aXZhdGVCdWxsZXQobmV4dFNsaWRlSW5kZXgsIDApO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBwcmV2ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwcmV2U2xpZGVJbmRleCA9IGFjdGl2ZVNsaWRlSW5kZXggLSAxO1xuXG4gICAgICAgIGlmIChhY3RpdmVTbGlkZUhhc0J1bGxldEJ5T2Zmc2V0KC0xKSkge1xuICAgICAgICAgIGFjdGl2YXRlQnVsbGV0KGFjdGl2ZVNsaWRlSW5kZXgsIGFjdGl2ZUJ1bGxldEluZGV4IC0gMSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGJ1bGxldHNbcHJldlNsaWRlSW5kZXhdKSB7XG4gICAgICAgICAgYWN0aXZhdGVCdWxsZXQocHJldlNsaWRlSW5kZXgsIGJ1bGxldHNbcHJldlNsaWRlSW5kZXhdLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBhY3RpdmF0ZUJ1bGxldCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgsIGJ1bGxldEluZGV4KSB7XG4gICAgICAgIGFjdGl2ZVNsaWRlSW5kZXggPSBzbGlkZUluZGV4O1xuICAgICAgICBhY3RpdmVCdWxsZXRJbmRleCA9IGJ1bGxldEluZGV4O1xuXG4gICAgICAgIGJ1bGxldHMuZm9yRWFjaChmdW5jdGlvbihzbGlkZSwgcykge1xuICAgICAgICAgIHNsaWRlLmZvckVhY2goZnVuY3Rpb24oYnVsbGV0LCBiKSB7XG4gICAgICAgICAgICBidWxsZXQuY2xhc3NMaXN0LmFkZCgnYmVzcG9rZS1idWxsZXQnKTtcblxuICAgICAgICAgICAgaWYgKHMgPCBzbGlkZUluZGV4IHx8IHMgPT09IHNsaWRlSW5kZXggJiYgYiA8PSBidWxsZXRJbmRleCkge1xuICAgICAgICAgICAgICBidWxsZXQuY2xhc3NMaXN0LmFkZCgnYmVzcG9rZS1idWxsZXQtYWN0aXZlJyk7XG4gICAgICAgICAgICAgIGJ1bGxldC5jbGFzc0xpc3QucmVtb3ZlKCdiZXNwb2tlLWJ1bGxldC1pbmFjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYnVsbGV0LmNsYXNzTGlzdC5hZGQoJ2Jlc3Bva2UtYnVsbGV0LWluYWN0aXZlJyk7XG4gICAgICAgICAgICAgIGJ1bGxldC5jbGFzc0xpc3QucmVtb3ZlKCdiZXNwb2tlLWJ1bGxldC1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHMgPT09IHNsaWRlSW5kZXggJiYgYiA9PT0gYnVsbGV0SW5kZXgpIHtcbiAgICAgICAgICAgICAgYnVsbGV0LmNsYXNzTGlzdC5hZGQoJ2Jlc3Bva2UtYnVsbGV0LWN1cnJlbnQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGJ1bGxldC5jbGFzc0xpc3QucmVtb3ZlKCdiZXNwb2tlLWJ1bGxldC1jdXJyZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgYWN0aXZlU2xpZGVIYXNCdWxsZXRCeU9mZnNldCA9IGZ1bmN0aW9uKG9mZnNldCkge1xuICAgICAgICByZXR1cm4gYnVsbGV0c1thY3RpdmVTbGlkZUluZGV4XVthY3RpdmVCdWxsZXRJbmRleCArIG9mZnNldF0gIT09IHVuZGVmaW5lZDtcbiAgICAgIH07XG5cbiAgICBkZWNrLm9uKCduZXh0JywgbmV4dCk7XG4gICAgZGVjay5vbigncHJldicsIHByZXYpO1xuXG4gICAgZGVjay5vbignc2xpZGUnLCBmdW5jdGlvbihlKSB7XG4gICAgICBhY3RpdmF0ZUJ1bGxldChlLmluZGV4LCAwKTtcbiAgICB9KTtcblxuICAgIGFjdGl2YXRlQnVsbGV0KDAsIDApO1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBmdW5jdGlvbihkZWNrKSB7XG4gICAgdmFyIGFkZENsYXNzID0gZnVuY3Rpb24oZWwsIGNscykge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdiZXNwb2tlLScgKyBjbHMpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbihlbCwgY2xzKSB7XG4gICAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZVxuICAgICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoJ2Jlc3Bva2UtJyArIGNscyArJyhcXFxcc3wkKScsICdnJyksICcgJylcbiAgICAgICAgICAudHJpbSgpO1xuICAgICAgfSxcblxuICAgICAgZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uKGVsLCBpbmRleCkge1xuICAgICAgICB2YXIgYWN0aXZlU2xpZGUgPSBkZWNrLnNsaWRlc1tkZWNrLnNsaWRlKCldLFxuICAgICAgICAgIG9mZnNldCA9IGluZGV4IC0gZGVjay5zbGlkZSgpLFxuICAgICAgICAgIG9mZnNldENsYXNzID0gb2Zmc2V0ID4gMCA/ICdhZnRlcicgOiAnYmVmb3JlJztcblxuICAgICAgICBbJ2JlZm9yZSgtXFxcXGQrKT8nLCAnYWZ0ZXIoLVxcXFxkKyk/JywgJ2FjdGl2ZScsICdpbmFjdGl2ZSddLm1hcChyZW1vdmVDbGFzcy5iaW5kKG51bGwsIGVsKSk7XG5cbiAgICAgICAgaWYgKGVsICE9PSBhY3RpdmVTbGlkZSkge1xuICAgICAgICAgIFsnaW5hY3RpdmUnLCBvZmZzZXRDbGFzcywgb2Zmc2V0Q2xhc3MgKyAnLScgKyBNYXRoLmFicyhvZmZzZXQpXS5tYXAoYWRkQ2xhc3MuYmluZChudWxsLCBlbCkpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgYWRkQ2xhc3MoZGVjay5wYXJlbnQsICdwYXJlbnQnKTtcbiAgICBkZWNrLnNsaWRlcy5tYXAoZnVuY3Rpb24oZWwpIHsgYWRkQ2xhc3MoZWwsICdzbGlkZScpOyB9KTtcblxuICAgIGRlY2sub24oJ2FjdGl2YXRlJywgZnVuY3Rpb24oZSkge1xuICAgICAgZGVjay5zbGlkZXMubWFwKGRlYWN0aXZhdGUpO1xuICAgICAgYWRkQ2xhc3MoZS5zbGlkZSwgJ2FjdGl2ZScpO1xuICAgICAgcmVtb3ZlQ2xhc3MoZS5zbGlkZSwgJ2luYWN0aXZlJyk7XG4gICAgfSk7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGRlY2spIHtcbiAgICB2YXIgYWN0aXZhdGVTbGlkZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICB2YXIgaW5kZXhUb0FjdGl2YXRlID0gLTEgPCBpbmRleCAmJiBpbmRleCA8IGRlY2suc2xpZGVzLmxlbmd0aCA/IGluZGV4IDogMDtcbiAgICAgIGlmIChpbmRleFRvQWN0aXZhdGUgIT09IGRlY2suc2xpZGUoKSkge1xuICAgICAgICBkZWNrLnNsaWRlKGluZGV4VG9BY3RpdmF0ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBwYXJzZUhhc2ggPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSksXG4gICAgICAgIHNsaWRlTnVtYmVyT3JOYW1lID0gcGFyc2VJbnQoaGFzaCwgMTApO1xuXG4gICAgICBpZiAoaGFzaCkge1xuICAgICAgICBpZiAoc2xpZGVOdW1iZXJPck5hbWUpIHtcbiAgICAgICAgICBhY3RpdmF0ZVNsaWRlKHNsaWRlTnVtYmVyT3JOYW1lIC0gMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVjay5zbGlkZXMuZm9yRWFjaChmdW5jdGlvbihzbGlkZSwgaSkge1xuICAgICAgICAgICAgaWYgKHNsaWRlLmdldEF0dHJpYnV0ZSgnZGF0YS1iZXNwb2tlLWhhc2gnKSA9PT0gaGFzaCB8fCBzbGlkZS5pZCA9PT0gaGFzaCkge1xuICAgICAgICAgICAgICBhY3RpdmF0ZVNsaWRlKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBwYXJzZUhhc2goKTtcblxuICAgICAgZGVjay5vbignYWN0aXZhdGUnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBzbGlkZU5hbWUgPSBlLnNsaWRlLmdldEF0dHJpYnV0ZSgnZGF0YS1iZXNwb2tlLWhhc2gnKSB8fCBlLnNsaWRlLmlkO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHNsaWRlTmFtZSB8fCBlLmluZGV4ICsgMTtcbiAgICAgIH0pO1xuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHBhcnNlSGFzaCk7XG4gICAgfSwgMCk7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHJldHVybiBmdW5jdGlvbihkZWNrKSB7XG4gICAgdmFyIGlzSG9yaXpvbnRhbCA9IG9wdGlvbnMgIT09ICd2ZXJ0aWNhbCc7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGUud2hpY2ggPT0gMzQgfHwgLy8gUEFHRSBET1dOXG4gICAgICAgIChlLndoaWNoID09IDMyICYmICFlLnNoaWZ0S2V5KSB8fCAvLyBTUEFDRSBXSVRIT1VUIFNISUZUXG4gICAgICAgIChpc0hvcml6b250YWwgJiYgZS53aGljaCA9PSAzOSkgfHwgLy8gUklHSFRcbiAgICAgICAgKCFpc0hvcml6b250YWwgJiYgZS53aGljaCA9PSA0MCkgLy8gRE9XTlxuICAgICAgKSB7IGRlY2submV4dCgpOyB9XG5cbiAgICAgIGlmIChlLndoaWNoID09IDMzIHx8IC8vIFBBR0UgVVBcbiAgICAgICAgKGUud2hpY2ggPT0gMzIgJiYgZS5zaGlmdEtleSkgfHwgLy8gU1BBQ0UgKyBTSElGVFxuICAgICAgICAoaXNIb3Jpem9udGFsICYmIGUud2hpY2ggPT0gMzcpIHx8IC8vIExFRlRcbiAgICAgICAgKCFpc0hvcml6b250YWwgJiYgZS53aGljaCA9PSAzOCkgLy8gVVBcbiAgICAgICkgeyBkZWNrLnByZXYoKTsgfVxuICAgIH0pO1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRlY2spIHtcbiAgICB2YXIgcHJvZ3Jlc3NQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgIHByb2dyZXNzQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICBzbGlkZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyksXG4gICAgICBwcm9wID0gb3B0aW9ucyA9PT0gJ3ZlcnRpY2FsJyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHByb2dyZXNzUGFyZW50LmNsYXNzTmFtZSA9ICdiZXNwb2tlLXByb2dyZXNzLXBhcmVudCc7XG4gICAgcHJvZ3Jlc3NQYXJlbnQuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NCYXIpO1xuICAgIHByb2dyZXNzQmFyLmNsYXNzTmFtZSA9ICdiZXNwb2tlLXByb2dyZXNzLWJhcic7XG4gICAgc2xpZGVOdW1iZXIuY2xhc3NOYW1lID0gJ2Jlc3Bva2UtcHJvZ3Jlc3MtbnVtYmVyJztcbiAgICBkZWNrLnBhcmVudC5hcHBlbmRDaGlsZChwcm9ncmVzc1BhcmVudCk7XG4gICAgZGVjay5wYXJlbnQuYXBwZW5kQ2hpbGQoc2xpZGVOdW1iZXIpO1xuXG4gICAgZGVjay5vbignYWN0aXZhdGUnLCBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgcGVyY2VudGFnZSA9IGUuaW5kZXggKiAxMDAgLyAoZGVjay5zbGlkZXMubGVuZ3RoIC0gMSksXG4gICAgICAgIG51bWJlciA9IChlLmluZGV4ICsgMSkgKyAnJztcbiAgICAgIHByb2dyZXNzQmFyLnN0eWxlW3Byb3BdID0gcGVyY2VudGFnZSArICclJztcbiAgICAgIHNsaWRlTnVtYmVyLmlubmVySFRNTCA9IG51bWJlci5wYWRTdGFydCgyLCAnMCcpO1xuICAgIH0pO1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICByZXR1cm4gZnVuY3Rpb24oZGVjaykge1xuICAgIHZhciBwYXJlbnQgPSBkZWNrLnBhcmVudCxcbiAgICAgIGN1cnJlbnRTbGlkZSA9IGRlY2suc2xpZGVzW2RlY2suc2xpZGUoKV0gfHwgZGVjay5zbGlkZXNbMF0sXG4gICAgICBzbGlkZUhlaWdodCA9IGN1cnJlbnRTbGlkZS5vZmZzZXRIZWlnaHQsXG4gICAgICBzbGlkZVdpZHRoID0gY3VycmVudFNsaWRlLm9mZnNldFdpZHRoLFxuICAgICAgdXNlWm9vbSA9IG9wdGlvbnMgPT09ICd6b29tJyB8fCAoJ3pvb20nIGluIHBhcmVudC5zdHlsZSAmJiBvcHRpb25zICE9PSAndHJhbnNmb3JtJyksXG5cbiAgICAgIGlubmVyV3JhcCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGlubmVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbm5lcldyYXBwZXIuY2xhc3NOYW1lID0gJ2Jlc3Bva2Utc2NhbGUtcGFyZW50JztcbiAgICAgICAgd2hpbGUgKGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlubmVyV3JhcHBlci5hcHBlbmRDaGlsZChlbGVtZW50LmNoaWxkcmVuWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGlubmVyV3JhcHBlcik7XG4gICAgICAgIHJldHVybiBpbm5lcldyYXBwZXI7XG4gICAgICB9LFxuXG4gICAgICBlbGVtZW50ID0gdXNlWm9vbSA/IHBhcmVudCA6IGlubmVyV3JhcChwYXJlbnQpLFxuXG4gICAgICB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IChmdW5jdGlvbihwcm9wZXJ0eSkge1xuICAgICAgICB2YXIgcHJlZml4ZXMgPSAnTW96IFdlYmtpdCBPIG1zJy5zcGxpdCgnICcpO1xuICAgICAgICByZXR1cm4gcHJlZml4ZXMucmVkdWNlKGZ1bmN0aW9uKGN1cnJlbnRQcm9wZXJ0eSwgcHJlZml4KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4ICsgcHJvcGVydHkgaW4gcGFyZW50LnN0eWxlID8gcHJlZml4ICsgcHJvcGVydHkgOiBjdXJyZW50UHJvcGVydHk7XG4gICAgICAgICAgfSwgcHJvcGVydHkudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9KCdUcmFuc2Zvcm0nKSksXG5cbiAgICAgIHNjYWxlID0gdXNlWm9vbSA/XG4gICAgICAgIGZ1bmN0aW9uKHJhdGlvLCBlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS56b29tID0gcmF0aW87XG4gICAgICAgIH0gOlxuICAgICAgICBmdW5jdGlvbihyYXRpbywgZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gJ3NjYWxlKCcgKyByYXRpbyArICcpJztcbiAgICAgICAgfSxcblxuICAgICAgc2NhbGVBbGwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHhTY2FsZSA9IHBhcmVudC5vZmZzZXRXaWR0aCAvIHNsaWRlV2lkdGgsXG4gICAgICAgICAgeVNjYWxlID0gKHBhcmVudC5vZmZzZXRIZWlnaHQgLyBzbGlkZUhlaWdodCkgfHwgMDtcblxuICAgICAgICBzY2FsZShNYXRoLm1pbih4U2NhbGUsIHlTY2FsZSksIGVsZW1lbnQpO1xuICAgICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzY2FsZUFsbCk7XG4gICAgc2NhbGVBbGwoKTtcbiAgfTtcblxufTtcbiIsIi8qIVxuICogYmVzcG9rZS1zZWFyY2ggdjEuMC4wXG4gKlxuICogQ29weXJpZ2h0IDIwMjEsIEZsw6F2aW9cbiAqIFRoaXMgY29udGVudCBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuXG4oZnVuY3Rpb24oZil7aWYodHlwZW9mIGV4cG9ydHM9PT1cIm9iamVjdFwiJiZ0eXBlb2YgbW9kdWxlIT09XCJ1bmRlZmluZWRcIil7bW9kdWxlLmV4cG9ydHM9ZigpfWVsc2UgaWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtdLGYpfWVsc2V7dmFyIGc7aWYodHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCIpe2c9d2luZG93fWVsc2UgaWYodHlwZW9mIGdsb2JhbCE9PVwidW5kZWZpbmVkXCIpe2c9Z2xvYmFsfWVsc2UgaWYodHlwZW9mIHNlbGYhPT1cInVuZGVmaW5lZFwiKXtnPXNlbGZ9ZWxzZXtnPXRoaXN9Zz0oZy5iZXNwb2tlfHwoZy5iZXNwb2tlID0ge30pKTtnPShnLnBsdWdpbnN8fChnLnBsdWdpbnMgPSB7fSkpO2cuc2VhcmNoID0gZigpfX0pKGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSh7MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgY3NzID0gXCI6cm9vdHstLXNlYXJjaC1yZXN1bHQtYmc6eWVsbG93Oy0tc2VhcmNoLXJlc3VsdC1mb2N1c2VkLWJnOm9yYW5nZX0jYmVzcG9rZS1zZWFyY2gtcGFyZW50ey0tc2VhcmNoLXBhcmVudC1iZzojMDAwNjstLXNlYXJjaC1tYXJnaW46MC41ZW07LS1zZWFyY2gtYmc6I2ZmZjM7LS1zZWFyY2gtaW5wdXQtbGVuZ3RoOjEyZW07LS1zZWFyY2gtaW5wdXQtcG9zaXRpb246ZmxleC1lbmQ7LS1zZWFyY2gtaW5wdXQtY29sb3I6IzMzMzstLXNlYXJjaC1pbmZvLWNvbG9yOiMzMzM7LS1zZWFyY2gtaW5mby1rYmQtY29sb3I6IzAwMDstLXNlYXJjaC1pbmZvLWtiZC1iZzojY2NjOy0tc2VhcmNoLW5vLXJlc3VsdC1jb2xvcjojOGIwMDAwO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OnZhcigtLXNlYXJjaC1pbnB1dC1wb3NpdGlvbik7YWxpZ24taXRlbXM6Y2VudGVyO3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTowO3RyYW5zaXRpb246YWxsIC4ycyBlYXNlO2JhY2tncm91bmQtY29sb3I6dmFyKC0tc2VhcmNoLXBhcmVudC1iZyk7Zm9udC1zaXplOjEuMjVyZW07cGVyc3BlY3RpdmU6OTAwcHh9I2Jlc3Bva2Utc2VhcmNoLXBhcmVudC5iZXNwb2tlLXNlYXJjaC1zZWFyY2hpbmd7b3BhY2l0eToxO3BvaW50ZXItZXZlbnRzOmF1dG87ei1pbmRleDoxMDAwfSNiZXNwb2tlLXNlYXJjaHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2ZsZXgtd3JhcDp3cmFwO2FsaWduLWl0ZW1zOmJhc2VsaW5lO21hcmdpbjp2YXIoLS1zZWFyY2gtbWFyZ2luKTtwYWRkaW5nOjFlbTtib3JkZXItcmFkaXVzOjEwcHg7Ym94LXNpemluZzpjb250ZW50LWJveDt3aWR0aDpjYWxjKHZhcigtLXNlYXJjaC1pbnB1dC1sZW5ndGgpICsgNWVtKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXNlYXJjaC1iZyk7YmFja2Ryb3AtZmlsdGVyOmJsdXIoNnB4KTt0cmFuc2l0aW9uOmFsbCAuM3MgY3ViaWMtYmV6aWVyKC4wNiwuOTksLjQ2LDEuMTYpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC02MHB4KSByb3RhdGVYKDkwZGVnKTtvcGFjaXR5OjB9I2Jlc3Bva2Utc2VhcmNoLXJlc3VsdHMtY291bnR7Zm9udC1zaXplOi43NWVtO2ZvbnQtZmFtaWx5Om1vbm9zcGFjZX0uYmVzcG9rZS1zZWFyY2gtbm8tcmVzdWx0PiNiZXNwb2tlLXNlYXJjaC1pbnB1dHtvdXRsaW5lOjFweCBzb2xpZCBjdXJyZW50Q29sb3I7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLXNlYXJjaC1uby1yZXN1bHQtY29sb3IpfS5iZXNwb2tlLXNlYXJjaC1yZXN1bHR7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1zZWFyY2gtcmVzdWx0LWJnLCNmZjApfS5iZXNwb2tlLXNlYXJjaC1yZXN1bHQtZm9jdXNlZHtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXNlYXJjaC1yZXN1bHQtZm9jdXNlZC1iZyxvcmFuZ2UpfSNiZXNwb2tlLXNlYXJjaC1pbnB1dHt3aWR0aDp2YXIoLS1zZWFyY2gtaW5wdXQtbGVuZ3RoKTtwYWRkaW5nOi4yNWVtIC40NWVtO2JvcmRlcjoxcHggc29saWQgY3VycmVudENvbG9yO2JvcmRlci1yYWRpdXM6NXB4O2NvbG9yOnZhcigtLXNlYXJjaC1pbnB1dC1jb2xvcik7Zm9udC1zaXplOjFlbX0uYmVzcG9rZS1zZWFyY2gtc2VhcmNoaW5nICNiZXNwb2tlLXNlYXJjaHt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfSNiZXNwb2tlLXNlYXJjaC1pbmZve3dpZHRoOjEwMCU7bWFyZ2luLXRvcDoxZW07Zm9udC1zaXplOi43ZW07dGV4dC1hbGlnbjpsZWZ0O2NvbG9yOnZhcigtLXNlYXJjaC1pbmZvLWNvbG9yKX0uYmVzcG9rZS1zZWFyY2gtaW5mby1wYWlye21hcmdpbi1yaWdodDoxZW07d2hpdGUtc3BhY2U6bm93cmFwO2Rpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbi1ib3R0b206LjI1ZW19I2Jlc3Bva2Utc2VhcmNoLWluZm8ga2Jke21hcmdpbjowIC4xZW07cGFkZGluZzouMWVtIC42ZW07Ym9yZGVyLXJhZGl1czozcHg7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO2NvbG9yOnZhcigtLXNlYXJjaC1pbmZvLWtiZC1jb2xvcik7bGluZS1oZWlnaHQ6MS40O2ZvbnQtc2l6ZTouN2VtO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JveC1zaGFkb3c6MCAxcHggMCAjMDAwOSxpbnNldCAwIDAgMCAycHggI2NjYztiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXNlYXJjaC1pbmZvLWtiZC1iZyl9I2Jlc3Bva2Utc2VhcmNoLWluZm8ga2JkOmxhc3Qtb2YtdHlwZXttYXJnaW4tcmlnaHQ6MWVtfSNiZXNwb2tlLXNlYXJjaC1pbmZvIHN1bW1hcnl7ZGlzcGxheTpsaXN0LWl0ZW07Y291bnRlci1pbmNyZW1lbnQ6bGlzdC1pdGVtIDA7bGlzdC1zdHlsZTppbnNpZGUgZGlzY2xvc3VyZS1jbG9zZWQ7Y3Vyc29yOnBvaW50ZXJ9I2Jlc3Bva2Utc2VhcmNoLWluZm9bb3Blbl0+c3VtbWFyeTpmaXJzdC1vZi10eXBle2xpc3Qtc3R5bGUtdHlwZTpkaXNjbG9zdXJlLW9wZW59LmJlc3Bva2UtYnVsbGV0cy1vZmYgLmJlc3Bva2UtYnVsbGV0LmJlc3Bva2UtYnVsbGV0LWluYWN0aXZle29wYWNpdHk6MTt0cmFuc2Zvcm06bm9uZX0uYmVzcG9rZS1zZWFyY2gtc2hha2luZ3thbmltYXRpb246c2hha2luZyAuNXMgZWFzZS1vdXQgMHMgMX1Aa2V5ZnJhbWVzIHNoYWtpbmd7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDRweCwwLDApfTEwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTdweCwtNXB4LDApfTIwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoOHB4LDVweCwwKX0zMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC03cHgsM3B4LDApfTQwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoOXB4LC0zcHgsMCl9NTAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNHB4LDNweCwwKX02MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDRweCwtNHB4LDApfTcwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTVweCwtNHB4LDApfTgwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoNHB4LDJweCwwKX05MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0zcHgsLTFweCwwKX0xMDAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCl9fUBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6ZGFyayl7I2Jlc3Bva2Utc2VhcmNoLXBhcmVudHstLXNlYXJjaC1wYXJlbnQtYmc6I2ZmZjY7LS1zZWFyY2gtYmc6IzAwMDM7LS1zZWFyY2gtaW5mby1jb2xvcjojZWVlfX1cIjsgKF9kZXJlcV8oXCJicm93c2VyaWZ5LWNzc1wiKS5jcmVhdGVTdHlsZShjc3MsIHsgXCJocmVmXCI6IFwibGliXFxcXGJlc3Bva2Utc2VhcmNoLmNzc1wiIH0sIHsgXCJpbnNlcnRBdFwiOiBcImJvdHRvbVwiIH0pKTsgbW9kdWxlLmV4cG9ydHMgPSBjc3M7XG59LHtcImJyb3dzZXJpZnktY3NzXCI6M31dLDI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuY29uc3Qga2V5bWFnZSA9IF9kZXJlcV8oJ2tleW1hZ2UnKVxyXG5jb25zdCBtYWtlQXJyYXkgPSBvYmogPT4gQXJyYXkuaXNBcnJheShvYmopID8gb2JqIDogW29ial1cclxuY29uc3QgY2hhcmFjdGVyUmVtYXBwZXIgPSB7XHJcbiAgc291cmNlOiAnw6HDoMOjw6LDqcOow6rDrcOsw7PDssO1w7TDusO5w6cnLFxyXG4gIHRhcmdldDogJ2FhYWFlZWVpaW9vb291dWMnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvTmV1dHJhbFJlZ2V4KHRleHQpIHtcclxuICBsZXQgYWNjZW50ZWQgPSBbXVxyXG4gIGxldCBjdXJyZW50TmV1dHJhbCA9IGNoYXJhY3RlclJlbWFwcGVyLnRhcmdldFswXVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IGNoYXJhY3RlclJlbWFwcGVyLnNvdXJjZS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGNoYXJhY3RlclJlbWFwcGVyLnRhcmdldFtpXSAhPT0gY3VycmVudE5ldXRyYWwgfHwgaSA9PT0gY2hhcmFjdGVyUmVtYXBwZXIuc291cmNlLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBjaGFyYWN0ZXJHcm91cCA9IGBbJHthY2NlbnRlZC5jb25jYXQoY3VycmVudE5ldXRyYWwpLmpvaW4oJycpfV1gXHJcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2VBbGwoXHJcbiAgICAgICAgbmV3IFJlZ0V4cChjaGFyYWN0ZXJHcm91cCwgJ2dpJyksXHJcbiAgICAgICAgY2hhcmFjdGVyR3JvdXBcclxuICAgICAgKVxyXG4gICAgICBhY2NlbnRlZCA9IFtdXHJcbiAgICAgIGN1cnJlbnROZXV0cmFsID0gY2hhcmFjdGVyUmVtYXBwZXIudGFyZ2V0W2ldXHJcbiAgICB9XHJcbiAgICBhY2NlbnRlZC5wdXNoKGNoYXJhY3RlclJlbWFwcGVyLnNvdXJjZVtpXSlcclxuICB9XHJcbiAgcmV0dXJuIHRleHRcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih7XHJcbiAgaW5zZXJ0U3R5bGVzID0gdHJ1ZSxcclxuICBrZXlzOiB7XHJcbiAgICBzaG93OiBzaG93S2V5ID0gJ2N0cmwtZicsXHJcbiAgICBkaXNtaXNzOiBkaXNtaXNzS2V5ID0gJ2VzY2FwZScsXHJcbiAgICB0cmlnZ2VyOiB0cmlnZ2VyS2V5ID0gJ2VudGVyJyxcclxuICAgIG5leHQ6IG5leHRLZXkgPSAndGFiJyxcclxuICAgIHByZXZpb3VzOiBwcmV2aW91c0tleSA9ICdzaGlmdC10YWInXHJcbiAgfSA9IHt9LFxyXG4gIHRleHQ6IHtcclxuICAgIHNlYXJjaEhlcmU6IHRleHRTZWFyY2hIZXJlID0gJ1NlYXJjaCBoZXJlLi4uJyxcclxuICAgIGluc3RydWN0aW9uczogdGV4dEluc3RydWN0aW9ucyA9ICdJbnN0cnVjdGlvbnMnLFxyXG4gICAgb3BlblNlYXJjaDogdGV4dE9wZW5TZWFyY2ggPSAnT3BlbiBzZWFyY2gnLFxyXG4gICAgY2xvc2VTZWFyY2g6IHRleHRDbG9zZVNlYXJjaCA9ICdDbG9zZSBzZWFyY2gnLFxyXG4gICAgc2VhcmNoOiB0ZXh0U2VhcmNoID0gJ1NlYXJjaCcsXHJcbiAgICBuZXh0UmVzdWx0OiB0ZXh0TmV4dFJlc3VsdCA9ICdOZXh0IHJlc3VsdCcsXHJcbiAgICBwcmV2aW91c1Jlc3VsdDogdGV4dFByZXZpb3VzUmVzdWx0ID0gJ1ByZXZpb3VzIHJlc3VsdCdcclxuICB9ID0ge31cclxufSA9IHt9KSB7IFxyXG4gIFxyXG4gIHNob3dLZXkgPSBtYWtlQXJyYXkoc2hvd0tleSlcclxuICBkaXNtaXNzS2V5ID0gbWFrZUFycmF5KGRpc21pc3NLZXkpXHJcbiAgdHJpZ2dlcktleSA9IG1ha2VBcnJheSh0cmlnZ2VyS2V5KVxyXG4gIG5leHRLZXkgPSBtYWtlQXJyYXkobmV4dEtleSlcclxuICBwcmV2aW91c0tleSA9IG1ha2VBcnJheShwcmV2aW91c0tleSlcclxuICBcclxuICByZXR1cm4gZnVuY3Rpb24oZGVjaykge1xyXG4gICAgY29uc3QgY2FjaGVkU2xpZGVzVGV4dCA9IGRlY2suc2xpZGVzLm1hcCgoc2xpZGUsIGkpID0+ICh7aTogaSwgdGV4dDogc2xpZGUudGV4dENvbnRlbnR9KSlcclxuICAgIGxldCBzZWFyY2hQYXJlbnRFbFxyXG4gICAgbGV0IHNlYXJjaEVsXHJcbiAgICBsZXQgc2VhcmNoSW5wdXRFbFxyXG4gICAgbGV0IHNlYXJjaFJlc3VsdHNDb3VudEVsXHJcbiAgICBsZXQgc2VhcmNoSW5mb0VsXHJcbiAgICBsZXQgY3VycmVudFJlc3VsdEluZGV4XHJcbiAgICBsZXQgYWN0aXZlU2VhcmNoUGF0dGVybiA9ICcnXHJcbiAgICBsZXQgcmVzdWx0cyA9IFtdXHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXJSZXN1bHRzKCkge1xyXG4gICAgICBsZXQgcGFyZW50c09mUmVzdWx0cyA9IG5ldyBTZXQoKVxyXG5cclxuICAgICAgcmVzdWx0cy5mb3JFYWNoKHIgPT4ge1xyXG4gICAgICAgIGxldCBvcmlnaW5hbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShyLmVsLnRleHRDb250ZW50KVxyXG4gICAgICAgIHBhcmVudHNPZlJlc3VsdHMuYWRkKHIuZWwucGFyZW50Tm9kZSlcclxuICAgICAgICByLmVsLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG9yaWdpbmFsQ29udGVudCwgci5lbClcclxuICAgICAgfSlcclxuICAgICAgcGFyZW50c09mUmVzdWx0cy5mb3JFYWNoKHAgPT4gcC5ub3JtYWxpemUoKSlcclxuICAgICAgc2VhcmNoUmVzdWx0c0NvdW50RWwuaW5uZXJIVE1MID0gJydcclxuICAgICAgYWN0aXZlU2VhcmNoUGF0dGVybiA9ICcnXHJcblxyXG4gICAgICByZXN1bHRzID0gW11cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93KGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIHNlYXJjaFBhcmVudEVsLmNsYXNzTGlzdC5hZGQoJ2Jlc3Bva2Utc2VhcmNoLXNlYXJjaGluZycpXHJcbiAgICAgIHNlYXJjaEVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Jlc3Bva2Utc2VhcmNoLW5vLXJlc3VsdCcpXHJcbiAgICAgIHNlYXJjaElucHV0RWwuZm9jdXMoKVxyXG4gICAgICBrZXltYWdlLnB1c2hTY29wZSgnc2VhcmNoaW5nJylcclxuICAgICAgZGVjay5wYXJlbnQuY2xhc3NMaXN0LmFkZCgnYmVzcG9rZS1idWxsZXRzLW9mZicpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZShlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuXHJcbiAgICAgIHNlYXJjaElucHV0RWwudmFsdWUgPSAnJ1xyXG4gICAgICBzZWFyY2hQYXJlbnRFbC5jbGFzc0xpc3QucmVtb3ZlKCdiZXNwb2tlLXNlYXJjaC1zZWFyY2hpbmcnKVxyXG4gICAgICBzZWFyY2hFbC5jbGFzc0xpc3QucmVtb3ZlKCdiZXNwb2tlLXNlYXJjaC1uby1yZXN1bHQnKVxyXG4gICAgICBrZXltYWdlLnBvcFNjb3BlKClcclxuICAgICAgY2xlYXJSZXN1bHRzKClcclxuICAgICAgZGVjay5wYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnYmVzcG9rZS1idWxsZXRzLW9mZicpXHJcbiAgICAgIHNlYXJjaElucHV0RWwuYmx1cigpXHJcbiAgICAgIGRlY2sucGFyZW50LmZvY3VzKClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXBvcnRSZXN1bHRTdGF0cygpIHtcclxuICAgICAgY29uc3Qgbm9SZXN1bHRzID0gcmVzdWx0cy5sZW5ndGggPT09IDBcclxuICAgICAgc2VhcmNoUmVzdWx0c0NvdW50RWwuaW5uZXJIVE1MID0gbm9SZXN1bHRzID8gJycgOlxyXG4gICAgICAgIGAke2N1cnJlbnRSZXN1bHRJbmRleCArIDF9LyR7cmVzdWx0cy5sZW5ndGh9YFxyXG4gICAgICBzZWFyY2hFbC5jbGFzc0xpc3QudG9nZ2xlKCdiZXNwb2tlLXNlYXJjaC1uby1yZXN1bHQnLCBub1Jlc3VsdHMpXHJcbiAgICAgIHNlYXJjaEVsLmNsYXNzTGlzdC50b2dnbGUoJ2Jlc3Bva2Utc2VhcmNoLXNoYWtpbmcnLCBub1Jlc3VsdHMpXHJcbiAgICAgIHNlYXJjaEVsLm9uYW5pbWF0aW9uZW5kID0gKCkgPT4ge1xyXG4gICAgICAgIHNlYXJjaEVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Jlc3Bva2Utc2VhcmNoLXNoYWtpbmcnKVxyXG4gICAgICAgIHNlYXJjaEVsLm9uYW5pbWF0aW9uZW5kID0gbnVsbFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZm9jdXNBdFJlc3VsdChpbmRleCkge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gcmVzdWx0c1tpbmRleF0gfHwge30sXHJcbiAgICAgICAgcHJldlJlc3VsdCA9IHJlc3VsdHNbY3VycmVudFJlc3VsdEluZGV4XSB8fCB7fSxcclxuICAgICAgICBzbGlkZUluZGV4T2ZSZXN1bHQgPSAocmVzdWx0KS5zbGlkZUluZGV4XHJcbiAgICAgIGRlY2suc2xpZGUoc2xpZGVJbmRleE9mUmVzdWx0KVxyXG5cclxuICAgICAgaWYgKHByZXZSZXN1bHQgJiYgcHJldlJlc3VsdC5lbCkge1xyXG4gICAgICAgIHByZXZSZXN1bHQuZWwuY2xhc3NMaXN0LnJlbW92ZSgnYmVzcG9rZS1zZWFyY2gtcmVzdWx0LWZvY3VzZWQnKVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmVsKSB7XHJcbiAgICAgICAgcmVzdWx0LmVsLmNsYXNzTGlzdC5hZGQoJ2Jlc3Bva2Utc2VhcmNoLXJlc3VsdC1mb2N1c2VkJylcclxuICAgICAgfVxyXG5cclxuICAgICAgY3VycmVudFJlc3VsdEluZGV4ID0gaW5kZXhcclxuICAgICAgcmVwb3J0UmVzdWx0U3RhdHMoKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG5hdmlnYXRlUmVzdWx0KGRpcmVjdGlvbikge1xyXG4gICAgICBsZXQgbmV3SW5kZXggPSAoY3VycmVudFJlc3VsdEluZGV4ICsgZGlyZWN0aW9uICsgcmVzdWx0cy5sZW5ndGgpICUgcmVzdWx0cy5sZW5ndGhcclxuICAgICAgZm9jdXNBdFJlc3VsdChuZXdJbmRleClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWFyY2goKSB7XHJcbiAgICAgIGxldCBzZWFyY2hQYXR0ZXJuID0gdG9OZXV0cmFsUmVnZXgoc2VhcmNoSW5wdXRFbC52YWx1ZS50cmltKCkpXHJcbiAgICAgIGlmIChzZWFyY2hQYXR0ZXJuID09PSAnJykge1xyXG4gICAgICAgIGNsZWFyUmVzdWx0cygpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNlYXJjaFBhdHRlcm4gPT09IGFjdGl2ZVNlYXJjaFBhdHRlcm4pIHtcclxuICAgICAgICBuYXZpZ2F0ZVJlc3VsdCgrMSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBjbGVhclJlc3VsdHMoKVxyXG4gICAgICBhY3RpdmVTZWFyY2hQYXR0ZXJuID0gc2VhcmNoUGF0dGVyblxyXG5cclxuICAgICAgY29uc3Qgc2VhcmNoUmVnZXggPSBuZXcgUmVnRXhwKHNlYXJjaFBhdHRlcm4sICdpJylcclxuICAgICAgY29uc3QgbWF0Y2hlZFNsaWRlcyA9IGNhY2hlZFNsaWRlc1RleHQuZmlsdGVyKHNsaWRlID0+IHNlYXJjaFJlZ2V4LnRlc3Qoc2xpZGUudGV4dCkpXHJcblxyXG5cclxuICAgICAgZnVuY3Rpb24gc2VhcmNoRWxlbWVudChlbCwgdmlzaXRGdW5jdGlvbikge1xyXG4gICAgICAgIGxldCBwYXJ0aWFsUmVzdWx0cyA9IFtdXHJcblxyXG4gICAgICAgIHN3aXRjaCAoZWwubm9kZVR5cGUpIHtcclxuICAgICAgICBjYXNlIE5vZGUuVEVYVF9OT0RFOlxyXG4gICAgICAgICAgaWYgKHNlYXJjaFJlZ2V4LnRlc3QoZWwuZGF0YSkpIHtcclxuICAgICAgICAgICAgcGFydGlhbFJlc3VsdHMgPSB2aXNpdEZ1bmN0aW9uKGVsKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlIE5vZGUuRUxFTUVOVF9OT0RFOlxyXG4gICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgQXJyYXkuZnJvbShlbC5jaGlsZE5vZGVzKSkge1xyXG4gICAgICAgICAgICBwYXJ0aWFsUmVzdWx0cy5wdXNoKC4uLnNlYXJjaEVsZW1lbnQoY2hpbGQsIHZpc2l0RnVuY3Rpb24pKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJ0aWFsUmVzdWx0c1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBtYXJrUmVzdWx0KHRleHROb2RlKSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGV4dE5vZGUucGFyZW50Tm9kZVxyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBjb25zdCB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgIGNvbnN0IGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcclxuICAgICAgICAgIHdyYXAuaW5uZXJIVE1MID0gdGV4dE5vZGUuZGF0YVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvPC9nLCAnJiM2MDsnKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvPi9nLCAnJiM2MjsnKVxyXG4gICAgICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKGAoJHtzZWFyY2hQYXR0ZXJufSlgLCAnZ2knKSwgJzxzcGFuIGNsYXNzPVwiYmVzcG9rZS1zZWFyY2gtcmVzdWx0XCI+JDE8L3NwYW4+JylcclxuICAgICAgICAgIHdoaWxlICh3cmFwLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgZnJhZy5hcHBlbmRDaGlsZCh3cmFwLmZpcnN0Q2hpbGQpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gZnJhZ1xyXG4gICAgICAgIH0pKClcclxuXHJcbiAgICAgICAgY29uc3QgaW5zZXJ0ZWQgPSBmcmFnbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmVzcG9rZS1zZWFyY2gtcmVzdWx0JylcclxuICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGZyYWdtZW50LCB0ZXh0Tm9kZSlcclxuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQodGV4dE5vZGUpXHJcblxyXG4gICAgICAgIC8vIHJldHVybnMgYW4gYXJyYXkgd2l0aCB0aGUgbmV3bHkgY3JlYXRlZCBlbGVtZW50c1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGluc2VydGVkKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBmaW5kIG9jY3VycmVuY2VzXHJcbiAgICAgIHJlc3VsdHMgPSBtYXRjaGVkU2xpZGVzLnJlZHVjZSgocHJldmlvdXMsIGN1cnIpID0+IHtcclxuICAgICAgICBjb25zdCBzbGlkZUVsID0gZGVjay5zbGlkZXNbY3Vyci5pXVxyXG4gICAgICAgIGNvbnN0IG9jY3VycmVuY2VzID0gc2VhcmNoRWxlbWVudChzbGlkZUVsLCBtYXJrUmVzdWx0KS5tYXAocmVzdWx0ID0+ICh7IHNsaWRlSW5kZXg6IGN1cnIuaSwgZWw6IHJlc3VsdCB9KSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHByZXZpb3VzLmNvbmNhdChvY2N1cnJlbmNlcylcclxuICAgICAgfSwgW10pXHJcblxyXG4gICAgICAvLyByZXBvcnQgdGhlIG51bWJlciBvZiBvY2N1cnJlbmNlc1xyXG4gICAgICBzZWFyY2hSZXN1bHRzQ291bnRFbC5pbm5lckhUTUwgPSBgMS8ke3Jlc3VsdHMubGVuZ3RofWBcclxuXHJcbiAgICAgIC8vIG1vdmVzIHRvIHRoZSBzbGlkZSBvZiB0aGUgZmlyc3Qgb2NjdXJyZW5jZVxyXG4gICAgICBmb2N1c0F0UmVzdWx0KDApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlU2VhcmNoQm94KCkge1xyXG4gICAgICBzZWFyY2hQYXJlbnRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgIHNlYXJjaEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgc2VhcmNoSW5wdXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgc2VhcmNoUmVzdWx0c0NvdW50RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAgICAgc2VhcmNoSW5mb0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGV0YWlscycpXHJcblxyXG4gICAgICBzZWFyY2hQYXJlbnRFbC5pZCA9ICdiZXNwb2tlLXNlYXJjaC1wYXJlbnQnXHJcbiAgICAgIHNlYXJjaEVsLmlkID0gJ2Jlc3Bva2Utc2VhcmNoJ1xyXG4gICAgICBzZWFyY2hJbnB1dEVsLmlkID0gJ2Jlc3Bva2Utc2VhcmNoLWlucHV0J1xyXG4gICAgICBzZWFyY2hJbnB1dEVsLnR5cGUgPSAnc2VhcmNoJ1xyXG4gICAgICBzZWFyY2hJbnB1dEVsLnBsYWNlaG9sZGVyID0gdGV4dFNlYXJjaEhlcmVcclxuICAgICAgc2VhcmNoUmVzdWx0c0NvdW50RWwuaWQgPSAnYmVzcG9rZS1zZWFyY2gtcmVzdWx0cy1jb3VudCdcclxuICAgICAgc2VhcmNoUmVzdWx0c0NvdW50RWwuaW5uZXJIVE1MID0gJydcclxuICAgICAgc2VhcmNoSW5mb0VsLmlkID0gJ2Jlc3Bva2Utc2VhcmNoLWluZm8nXHJcbiAgICAgIHNlYXJjaEluZm9FbC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICA8c3VtbWFyeT4ke3RleHRJbnN0cnVjdGlvbnN9PC9zdW1tYXJ5PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJiZXNwb2tlLXNlYXJjaC1pbmZvLXBhaXJcIj4ke3Nob3dLZXkubWFwKGsgPT4gYDxrYmQ+JHtrfTwva2JkPmApLmpvaW4oJycpfSAke3RleHRPcGVuU2VhcmNofTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmVzcG9rZS1zZWFyY2gtaW5mby1wYWlyXCI+JHtkaXNtaXNzS2V5Lm1hcChrID0+IGA8a2JkPiR7a308L2tiZD5gKS5qb2luKCcnKX0gJHt0ZXh0Q2xvc2VTZWFyY2h9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJiZXNwb2tlLXNlYXJjaC1pbmZvLXBhaXJcIj4ke3RyaWdnZXJLZXkubWFwKGsgPT4gYDxrYmQ+JHtrfTwva2JkPmApLmpvaW4oJycpfSAke3RleHRTZWFyY2h9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJiZXNwb2tlLXNlYXJjaC1pbmZvLXBhaXJcIj4ke25leHRLZXkubWFwKGsgPT4gYDxrYmQ+JHtrfTwva2JkPmApLmpvaW4oJycpfSAke3RleHROZXh0UmVzdWx0fTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmVzcG9rZS1zZWFyY2gtaW5mby1wYWlyXCI+JHtwcmV2aW91c0tleS5tYXAoayA9PiBgPGtiZD4ke2t9PC9rYmQ+YCkuam9pbignJyl9ICR7dGV4dFByZXZpb3VzUmVzdWx0fTwvc3Bhbj5cclxuICAgICAgICBgXHJcbiAgICAgIHNlYXJjaEVsLmFwcGVuZENoaWxkKHNlYXJjaElucHV0RWwpXHJcbiAgICAgIHNlYXJjaEVsLmFwcGVuZENoaWxkKHNlYXJjaFJlc3VsdHNDb3VudEVsKVxyXG4gICAgICBzZWFyY2hFbC5hcHBlbmRDaGlsZChzZWFyY2hJbmZvRWwpXHJcbiAgICAgIHNlYXJjaFBhcmVudEVsLmFwcGVuZENoaWxkKHNlYXJjaEVsKVxyXG5cclxuICAgICAgZGVjay5wYXJlbnQuYXBwZW5kQ2hpbGQoc2VhcmNoUGFyZW50RWwpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNob3dLZXkuZm9yRWFjaChrZXkgPT4ga2V5bWFnZShrZXksIHNob3cpKVxyXG4gICAgZGlzbWlzc0tleS5mb3JFYWNoKGtleSA9PiBrZXltYWdlKCdzZWFyY2hpbmcnLCBrZXksIGhpZGUpKVxyXG4gICAgdHJpZ2dlcktleS5mb3JFYWNoKGtleSA9PiBrZXltYWdlKCdzZWFyY2hpbmcnLCBrZXksIHNlYXJjaCkpXHJcbiAgICBuZXh0S2V5LmZvckVhY2goa2V5ID0+IGtleW1hZ2UoJ3NlYXJjaGluZycsIGtleSwgbmF2aWdhdGVSZXN1bHQuYmluZChrZXksICsxKSwge3ByZXZlbnREZWZhdWx0OiB0cnVlfSkpXHJcbiAgICBwcmV2aW91c0tleS5mb3JFYWNoKGtleSA9PiBrZXltYWdlKCdzZWFyY2hpbmcnLCBrZXksIG5hdmlnYXRlUmVzdWx0LmJpbmQoa2V5LCAtMSksIHtwcmV2ZW50RGVmYXVsdDogdHJ1ZX0pKVxyXG5cclxuICAgIGNyZWF0ZVNlYXJjaEJveCgpXHJcblxyXG4gICAgaWYgKGluc2VydFN0eWxlcykge1xyXG4gICAgICBfZGVyZXFfKCcuLi9saWIvYmVzcG9rZS1zZWFyY2guY3NzJylcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG59LHtcIi4uL2xpYi9iZXNwb2tlLXNlYXJjaC5jc3NcIjoxLFwia2V5bWFnZVwiOjR9XSwzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0Jztcbi8vIEZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGJyb3dzZXIgZmllbGQsIGNoZWNrIG91dCB0aGUgYnJvd3NlciBmaWVsZCBhdCBodHRwczovL2dpdGh1Yi5jb20vc3Vic3RhY2svYnJvd3NlcmlmeS1oYW5kYm9vayNicm93c2VyLWZpZWxkLlxuXG52YXIgc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyIGluc2VydFN0eWxlRWxlbWVudCA9IGZ1bmN0aW9uKHN0eWxlRWxlbWVudCwgb3B0aW9ucykge1xuICAgIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5pbnNlcnRBdCA9IG9wdGlvbnMuaW5zZXJ0QXQgfHwgJ2JvdHRvbSc7XG5cbiAgICBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgaWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuICAgICAgICAgICAgaGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICBoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSAnYm90dG9tJykge1xuICAgICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgXFwnaW5zZXJ0QXRcXCcuIE11c3QgYmUgXFwndG9wXFwnIG9yIFxcJ2JvdHRvbVxcJy4nKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvLyBDcmVhdGUgYSA8bGluaz4gdGFnIHdpdGggb3B0aW9uYWwgZGF0YSBhdHRyaWJ1dGVzXG4gICAgY3JlYXRlTGluazogZnVuY3Rpb24oaHJlZiwgYXR0cmlidXRlcykge1xuICAgICAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICAgICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG5cbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGlmICggISBhdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLScgKyBrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfSxcbiAgICAvLyBDcmVhdGUgYSA8c3R5bGU+IHRhZyB3aXRoIG9wdGlvbmFsIGRhdGEgYXR0cmlidXRlc1xuICAgIGNyZWF0ZVN0eWxlOiBmdW5jdGlvbihjc3NUZXh0LCBhdHRyaWJ1dGVzLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgZXh0cmFPcHRpb25zID0gZXh0cmFPcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBpZiAoICEgYXR0cmlidXRlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIGtleSwgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0eWxlLnNoZWV0KSB7IC8vIGZvciBqc2RvbSBhbmQgSUU5K1xuICAgICAgICAgICAgc3R5bGUuaW5uZXJIVE1MID0gY3NzVGV4dDtcbiAgICAgICAgICAgIHN0eWxlLnNoZWV0LmNzc1RleHQgPSBjc3NUZXh0O1xuICAgICAgICAgICAgaW5zZXJ0U3R5bGVFbGVtZW50KHN0eWxlLCB7IGluc2VydEF0OiBleHRyYU9wdGlvbnMuaW5zZXJ0QXQgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3R5bGUuc3R5bGVTaGVldCkgeyAvLyBmb3IgSUU4IGFuZCBiZWxvd1xuICAgICAgICAgICAgaW5zZXJ0U3R5bGVFbGVtZW50KHN0eWxlLCB7IGluc2VydEF0OiBleHRyYU9wdGlvbnMuaW5zZXJ0QXQgfSk7XG4gICAgICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NUZXh0O1xuICAgICAgICB9IGVsc2UgeyAvLyBmb3IgQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpXG4gICAgICAgICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3NUZXh0KSk7XG4gICAgICAgICAgICBpbnNlcnRTdHlsZUVsZW1lbnQoc3R5bGUsIHsgaW5zZXJ0QXQ6IGV4dHJhT3B0aW9ucy5pbnNlcnRBdCB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbn0se31dLDQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuLy8vIGtleW1hZ2UuanMgLSBKYXZhc2NyaXB0IGtleWJvYXJkIGJpbmRpbmdzIGhhbmRsaW5nXG4vLy8gaHR0cDovL2dpdGh1Yi5jb20vcGlyYW5oYS9rZXltYWdlXG4vLy9cbi8vLyAoYykgMjAxMi0yMDE2IEFsZXhhbmRlciBTb2xvdnlvdiB1bmRlciB0ZXJtcyBvZiBJU0MgTGljZW5zZVxuXG4oZnVuY3Rpb24oZGVmaW5lLCB1bmRlZmluZWQpIHtcbmRlZmluZShmdW5jdGlvbigpIHtcbiAgICB2YXIgVkVSU0lPTiA9ICcxLjEuMyc7XG4gICAgdmFyIGlzT3N4ID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgfm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignTWFjIE9TIFgnKTtcblxuICAgIC8vIERlZmluaW5nIGFsbCBrZXlzXG4gICAgdmFyIE1PRFBST1BTID0gWydzaGlmdEtleScsICdjdHJsS2V5JywgJ2FsdEtleScsICdtZXRhS2V5J107XG4gICAgdmFyIE1PRFMgPSB7XG4gICAgICAgICdzaGlmdCc6ICdzaGlmdCcsXG4gICAgICAgICdjdHJsJzogJ2N0cmwnLCAnY29udHJvbCc6ICdjdHJsJyxcbiAgICAgICAgJ2FsdCc6ICdhbHQnLCAnb3B0aW9uJzogJ2FsdCcsXG4gICAgICAgICd3aW4nOiAnbWV0YScsICdjbWQnOiAnbWV0YScsICdzdXBlcic6ICdtZXRhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ21ldGEnOiAnbWV0YScsXG4gICAgICAgIC8vIGRlZmF1bHQgbW9kaWZpZXIgZm9yIG9zIHggaXMgY21kIGFuZCBmb3Igb3RoZXJzIGlzIGN0cmxcbiAgICAgICAgJ2RlZm1vZCc6ICBpc09zeCA/ICdtZXRhJyA6ICdjdHJsJ1xuICAgICAgICB9O1xuICAgIHZhciBNT0RPUkRFUiA9IFsnc2hpZnQnLCAnY3RybCcsICdhbHQnLCAnbWV0YSddO1xuICAgIHZhciBNT0ROVU1TID0gWzE2LCAxNywgMTgsIDkxXTtcblxuICAgIHZhciBLRVlTID0ge1xuICAgICAgICAnYmFja3NwYWNlJzogOCxcbiAgICAgICAgJ3RhYic6IDksXG4gICAgICAgICdlbnRlcic6IDEzLCAncmV0dXJuJzogMTMsXG4gICAgICAgICdwYXVzZSc6IDE5LFxuICAgICAgICAnY2Fwcyc6IDIwLCAnY2Fwc2xvY2snOiAyMCxcbiAgICAgICAgJ2VzY2FwZSc6IDI3LCAnZXNjJzogMjcsXG4gICAgICAgICdzcGFjZSc6IDMyLFxuICAgICAgICAncGd1cCc6IDMzLCAncGFnZXVwJzogMzMsXG4gICAgICAgICdwZ2Rvd24nOiAzNCwgJ3BhZ2Vkb3duJzogMzQsXG4gICAgICAgICdlbmQnOiAzNSxcbiAgICAgICAgJ2hvbWUnOiAzNixcbiAgICAgICAgJ2lucyc6IDQ1LCAnaW5zZXJ0JzogNDUsXG4gICAgICAgICdkZWwnOiA0NiwgJ2RlbGV0ZSc6IDQ2LFxuXG4gICAgICAgICdsZWZ0JzogMzcsXG4gICAgICAgICd1cCc6IDM4LFxuICAgICAgICAncmlnaHQnOiAzOSxcbiAgICAgICAgJ2Rvd24nOiA0MCxcblxuICAgICAgICAnKic6IDEwNixcbiAgICAgICAgJysnOiAxMDcsICdwbHVzJzogMTA3LFxuICAgICAgICAnbWludXMnOiAxMDksXG4gICAgICAgICc7JzogMTg2LFxuICAgICAgICAnPSc6IDE4NyxcbiAgICAgICAgJywnOiAxODgsXG4gICAgICAgICctJzogMTg5LFxuICAgICAgICAnLic6IDE5MCxcbiAgICAgICAgJy8nOiAxOTEsXG4gICAgICAgICdgJzogMTkyLFxuICAgICAgICAnWyc6IDIxOSxcbiAgICAgICAgJ1xcXFwnOiAyMjAsXG4gICAgICAgICddJzogMjIxLFxuICAgICAgICBcIidcIjogMjIyXG4gICAgfTtcblxuICAgIHZhciBpO1xuICAgIC8vIG51bXBhZFxuICAgIGZvciAoaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIEtFWVNbJ251bS0nICsgaV0gPSBpICsgOTU7XG4gICAgfVxuICAgIC8vIHRvcCByb3cgMC05XG4gICAgZm9yIChpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgS0VZU1tpLnRvU3RyaW5nKCldID0gaSArIDQ4O1xuICAgIH1cbiAgICAvLyBmMS1mMjRcbiAgICBmb3IgKGkgPSAxOyBpIDwgMjU7IGkrKykge1xuICAgICAgICBLRVlTWydmJyArIGldID0gaSArIDExMTtcbiAgICB9XG4gICAgLy8gYWxwaGFiZXRcbiAgICBmb3IgKGkgPSA2NTsgaSA8IDkxOyBpKyspIHtcbiAgICAgICAgS0VZU1tTdHJpbmcuZnJvbUNoYXJDb2RlKGkpLnRvTG93ZXJDYXNlKCldID0gaTtcbiAgICB9XG5cbiAgICAvLyBSZXZlcnNlIGtleSBjb2Rlc1xuICAgIHZhciBLRVlSRVYgPSB7fTtcbiAgICBmb3IgKHZhciBrIGluIEtFWVMpIHtcbiAgICAgICAgdmFyIHZhbCA9IEtFWVNba107XG4gICAgICAgIGlmICghS0VZUkVWW3ZhbF0gfHwgS0VZUkVWW3ZhbF0ubGVuZ3RoIDwgay5sZW5ndGgpIHtcbiAgICAgICAgICAgIEtFWVJFVlt2YWxdID0gaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQWN0dWFsIHdvcmsgaXMgZG9uZSBoZXJlXG5cbiAgICB2YXIgY3VycmVudFNjb3BlID0gJyc7XG4gICAgdmFyIGFsbENoYWlucyA9IHt9O1xuXG4gICAgZnVuY3Rpb24gcGFyc2VLZXlTdHJpbmcoa2V5c3RyaW5nKSB7XG4gICAgICAgIHZhciBiaXRzID0ga2V5c3RyaW5nLnNwbGl0KC8tKD8hJCkvKTtcbiAgICAgICAgdmFyIGJ1dHRvbiA9IGJpdHNbYml0cy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGtleSA9IHtjb2RlOiBLRVlTW2J1dHRvbl19O1xuXG4gICAgICAgIGlmICgha2V5LmNvZGUpIHtcbiAgICAgICAgICAgIHRocm93ICdVbmtub3duIGtleSBcIicgKyBidXR0b24gKyAnXCIgaW4ga2V5c3RyaW5nIFwiJyArXG4gICAgICAgICAgICAgICAga2V5c3RyaW5nICsgJ1wiJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtb2Q7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYml0cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGJ1dHRvbiA9IGJpdHNbaV07XG4gICAgICAgICAgICBtb2QgPSBNT0RTW2J1dHRvbl07XG4gICAgICAgICAgICBpZiAoIW1vZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAnVW5rbm93biBtb2RpZmllciBcIicgKyBidXR0b24gKyAnXCIgaW4ga2V5c3RyaW5nIFwiJyArXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzdHJpbmcgKyAnXCInO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5W21vZF0gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdHJpbmdpZnlLZXkoa2V5KSB7XG4gICAgICAgIHZhciBzID0gJyc7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgTU9ET1JERVIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChrZXlbTU9ET1JERVJbaV1dKSB7XG4gICAgICAgICAgICAgICAgcyArPSBNT0RPUkRFUltpXSArICctJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzICs9IEtFWVJFVltrZXkuY29kZV07XG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZUtleUNoYWluKGtleWNoYWluU3RyaW5nKSB7XG4gICAgICAgIHZhciBrZXljaGFpbiA9IFtdO1xuICAgICAgICB2YXIga2V5cyA9IGtleWNoYWluU3RyaW5nLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gcGFyc2VLZXlTdHJpbmcoa2V5c1tpXSk7XG4gICAgICAgICAgICBrZXkgPSBzdHJpbmdpZnlLZXkoa2V5KTtcbiAgICAgICAgICAgIGtleWNoYWluLnB1c2goa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGtleWNoYWluLm9yaWdpbmFsID0ga2V5Y2hhaW5TdHJpbmc7XG4gICAgICAgIHJldHVybiBrZXljaGFpbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBldmVudEtleVN0cmluZyhlKSB7XG4gICAgICAgIHZhciBrZXkgPSB7Y29kZTogZS5rZXlDb2RlfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBNT0RQUk9QUy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG1vZCA9IE1PRFBST1BTW2ldO1xuICAgICAgICAgICAgaWYgKGVbbW9kXSkge1xuICAgICAgICAgICAgICAgIGtleVttb2Quc2xpY2UoMCwgbW9kLmxlbmd0aCAtIDMpXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cmluZ2lmeUtleShrZXkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE5lc3RlZENoYWlucyhjaGFpbnMsIHNjb3BlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2NvcGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBiaXQgPSBzY29wZVtpXTtcblxuICAgICAgICAgICAgaWYgKGJpdCkge1xuICAgICAgICAgICAgICAgIGNoYWlucyA9IGNoYWluc1tiaXRdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWNoYWlucykge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFpbnM7XG4gICAgfVxuXG4gICAgdmFyIHNlcXVlbmNlID0gW107XG4gICAgZnVuY3Rpb24gZGlzcGF0Y2goZSkge1xuICAgICAgICAvLyBTa2lwIGFsbCBtb2RpZmllcnNcbiAgICAgICAgaWYgKH5NT0ROVU1TLmluZGV4T2YoZS5rZXlDb2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlcSA9IHNlcXVlbmNlLnNsaWNlKCk7XG4gICAgICAgIHNlcS5wdXNoKGV2ZW50S2V5U3RyaW5nKGUpKTtcbiAgICAgICAgdmFyIHNjb3BlID0gY3VycmVudFNjb3BlLnNwbGl0KCcuJyk7XG4gICAgICAgIHZhciBtYXRjaGVkLCBjaGFpbnMsIGtleTtcblxuICAgICAgICBmb3IgKHZhciBpID0gc2NvcGUubGVuZ3RoOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgY2hhaW5zID0gZ2V0TmVzdGVkQ2hhaW5zKGFsbENoYWlucywgc2NvcGUuc2xpY2UoMCwgaSkpO1xuICAgICAgICAgICAgaWYgKCFjaGFpbnMpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hdGNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzZXEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBrZXkgPSBzZXFbal07XG4gICAgICAgICAgICAgICAgaWYgKCFjaGFpbnNba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjaGFpbnMgPSBjaGFpbnNba2V5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkZWZpbml0aW9uU2NvcGUgPSBzY29wZS5zbGljZSgwLCBpKS5qb2luKCcuJyk7XG4gICAgICAgIHZhciBwcmV2ZW50RGVmYXVsdCA9IGNoYWlucy5wcmV2ZW50RGVmYXVsdDtcblxuICAgICAgICAvLyBwYXJ0aWFsIG1hdGNoLCBzYXZlIHRoZSBzZXF1ZW5jZVxuICAgICAgICBpZiAobWF0Y2hlZCAmJiAhY2hhaW5zLmhhbmRsZXJzKSB7XG4gICAgICAgICAgICBzZXF1ZW5jZSA9IHNlcTtcbiAgICAgICAgICAgIGlmIChwcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2hhaW5zLmhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZXIgPSBjaGFpbnMuaGFuZGxlcnNbaV07XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBoYW5kbGVyLl9rZXltYWdlO1xuXG4gICAgICAgICAgICAgICAgdmFyIHJlcyA9IGhhbmRsZXIuY2FsbChvcHRpb25zLmNvbnRleHQsIGUsIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvcnRjdXQ6IG9wdGlvbnMub3JpZ2luYWwsXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlOiBjdXJyZW50U2NvcGUsXG4gICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25TY29wZTogZGVmaW5pdGlvblNjb3BlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzID09PSBmYWxzZSB8fCBwcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZWl0aGVyIG1hdGNoZWQgb3Igbm90LCBkcm9wIHRoZSBzZXF1ZW5jZVxuICAgICAgICBzZXF1ZW5jZSA9IFtdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEhhbmRsZXJzKHNjb3BlLCBrZXljaGFpbiwgZm4pIHtcbiAgICAgICAgdmFyIGJpdHMgPSBzY29wZS5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgY2hhaW5zID0gYWxsQ2hhaW5zO1xuICAgICAgICBiaXRzID0gYml0cy5jb25jYXQoa2V5Y2hhaW4pO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gYml0cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBiaXQgPSBiaXRzW2ldO1xuICAgICAgICAgICAgaWYgKCFiaXQpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjaGFpbnMgPSBjaGFpbnNbYml0XSB8fCAoY2hhaW5zW2JpdF0gPSB7fSk7XG4gICAgICAgICAgICBpZiAoZm4gJiYgZm4uX2tleW1hZ2UucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICBjaGFpbnMucHJldmVudERlZmF1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaSA9PT0gbCAtIDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlcnMgPSBjaGFpbnMuaGFuZGxlcnMgfHwgKGNoYWlucy5oYW5kbGVycyA9IFtdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlcnM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhc3NpZ25LZXkoc2NvcGUsIGtleWNoYWluLCBmbikge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSBnZXRIYW5kbGVycyhzY29wZSwga2V5Y2hhaW4sIGZuKTtcbiAgICAgICAgaGFuZGxlcnMucHVzaChmbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdW5hc3NpZ25LZXkoc2NvcGUsIGtleWNoYWluLCBmbikge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSBnZXRIYW5kbGVycyhzY29wZSwga2V5Y2hhaW4pO1xuICAgICAgICB2YXIgaWR4ID0gaGFuZGxlcnMuaW5kZXhPZihmbik7XG4gICAgICAgIGlmICh+aWR4KSB7XG4gICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlZChzY29wZSwga2V5Y2hhaW4sIGZuLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChrZXljaGFpbiA9PT0gdW5kZWZpbmVkICYmIGZuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihrZXljaGFpbiwgZm4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5bWFnZShzY29wZSwga2V5Y2hhaW4sIGZuKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGtleWNoYWluID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gZm47XG4gICAgICAgICAgICBmbiA9IGtleWNoYWluO1xuICAgICAgICAgICAga2V5Y2hhaW4gPSBzY29wZTtcbiAgICAgICAgICAgIHNjb3BlID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZUtleUNoYWluKGtleWNoYWluKTtcblxuICAgICAgICByZXR1cm4gW3Njb3BlLCBub3JtYWxpemVkLCBmbiwgb3B0aW9uc107XG4gICAgfVxuXG4gICAgLy8gb3B0aW9uYWwgYXJndW1lbnRzOiBzY29wZSwgb3B0aW9ucy5cbiAgICBmdW5jdGlvbiBrZXltYWdlKHNjb3BlLCBrZXljaGFpbiwgZm4sIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBwYXJzZWQoc2NvcGUsIGtleWNoYWluLCBmbiwgb3B0aW9ucyk7XG4gICAgICAgIGZuID0gYXJnc1syXTtcbiAgICAgICAgb3B0aW9ucyA9IGFyZ3NbM107XG4gICAgICAgIGZuLl9rZXltYWdlID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgZm4uX2tleW1hZ2Uub3JpZ2luYWwgPSBrZXljaGFpbjtcbiAgICAgICAgYXNzaWduS2V5LmFwcGx5KG51bGwsIGFyZ3MpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB1bmFzc2lnbktleS5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBrZXltYWdlLnVuYmluZCA9IGZ1bmN0aW9uKHNjb3BlLCBrZXljaGFpbiwgZm4pIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBwYXJzZWQoc2NvcGUsIGtleWNoYWluLCBmbik7XG4gICAgICAgIHVuYXNzaWduS2V5LmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBrZXltYWdlLnBhcnNlID0gcGFyc2VLZXlTdHJpbmc7XG4gICAga2V5bWFnZS5zdHJpbmdpZnkgPSBzdHJpbmdpZnlLZXk7XG5cbiAgICBrZXltYWdlLmJpbmRpbmdzID0gYWxsQ2hhaW5zO1xuXG4gICAga2V5bWFnZS5zZXRTY29wZSA9IGZ1bmN0aW9uKHNjb3BlKSB7XG4gICAgICAgIGN1cnJlbnRTY29wZSA9IHNjb3BlID8gc2NvcGUgOiAnJztcbiAgICB9O1xuXG4gICAga2V5bWFnZS5nZXRTY29wZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY3VycmVudFNjb3BlOyB9O1xuXG4gICAga2V5bWFnZS5wdXNoU2NvcGUgPSBmdW5jdGlvbihzY29wZSkge1xuICAgICAgICBjdXJyZW50U2NvcGUgPSAoY3VycmVudFNjb3BlID8gY3VycmVudFNjb3BlICsgJy4nIDogJycpICsgc2NvcGU7XG4gICAgICAgIHJldHVybiBjdXJyZW50U2NvcGU7XG4gICAgfTtcblxuICAgIGtleW1hZ2UucG9wU2NvcGUgPSBmdW5jdGlvbihzY29wZSkge1xuICAgICAgICB2YXIgaTtcblxuICAgICAgICBpZiAoIXNjb3BlKSB7XG4gICAgICAgICAgICBpID0gY3VycmVudFNjb3BlLmxhc3RJbmRleE9mKCcuJyk7XG4gICAgICAgICAgICBzY29wZSA9IGN1cnJlbnRTY29wZS5zbGljZShpICsgMSk7XG4gICAgICAgICAgICBjdXJyZW50U2NvcGUgPSBpID09IC0xID8gJycgOiBjdXJyZW50U2NvcGUuc2xpY2UoMCwgaSk7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGU7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50U2NvcGUgPSBjdXJyZW50U2NvcGUucmVwbGFjZShcbiAgICAgICAgICAgIG5ldyBSZWdFeHAoJyhefFxcXFwuKScgKyBzY29wZSArICcoXFxcXC58JCkuKicpLCAnJyk7XG4gICAgICAgIHJldHVybiBzY29wZTtcbiAgICB9O1xuXG4gICAga2V5bWFnZS52ZXJzaW9uID0gVkVSU0lPTjtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZGlzcGF0Y2gsIGZhbHNlKTtcblxuICAgIHJldHVybiBrZXltYWdlO1xufSk7XG59KSh0eXBlb2YgZGVmaW5lICE9PSAndW5kZWZpbmVkJyA/IGRlZmluZSA6IGZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmtleW1hZ2UgPSBmYWN0b3J5KCk7XG4gICAgfVxufSk7XG5cbn0se31dfSx7fSxbMl0pKDIpXG59KTtcbiIsIi8qIVxuICogYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgdjEuMS4wXG4gKlxuICogQ29weXJpZ2h0IDIwMjEsIEZsw6F2aW8gQ291dGluaG9cbiAqIFRoaXMgY29udGVudCBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuIWZ1bmN0aW9uKGUpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPWUoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sZSk7ZWxzZXt2YXIgczsocz0ocz0ocz1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMpLmJlc3Bva2V8fChzLmJlc3Bva2U9e30pKS5wbHVnaW5zfHwocy5wbHVnaW5zPXt9KSkuc2ltcGxlT3ZlcnZpZXc9ZSgpfX0oKGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uIGUocyxvLHQpe2Z1bmN0aW9uIGkobixwKXtpZighb1tuXSl7aWYoIXNbbl0pe3ZhciBsPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIXAmJmwpcmV0dXJuIGwobiwhMCk7aWYocilyZXR1cm4gcihuLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK24rXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBiPW9bbl09e2V4cG9ydHM6e319O3Nbbl1bMF0uY2FsbChiLmV4cG9ydHMsKGZ1bmN0aW9uKGUpe3JldHVybiBpKHNbbl1bMV1bZV18fGUpfSksYixiLmV4cG9ydHMsZSxzLG8sdCl9cmV0dXJuIG9bbl0uZXhwb3J0c31mb3IodmFyIHI9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxuPTA7bjx0Lmxlbmd0aDtuKyspaSh0W25dKTtyZXR1cm4gaX0oezE6W2Z1bmN0aW9uKGUscyxvKXt2YXIgdD1cIi5iZXNwb2tlLXBhcmVudHtwZXJzcGVjdGl2ZTo5MDBweH0uYmVzcG9rZS1wYXJlbnQgLmJlc3Bva2Utc2xpZGV7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0sb3BhY2l0eX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwtMjAwMHB4KTtvdXRsaW5lOjRweCBzb2xpZCBzaWx2ZXI7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4yKTtvcGFjaXR5OmluaXRpYWx9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWN0aXZlLC5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZTpob3ZlcntvdXRsaW5lLWNvbG9yOiM0NjgyYjR9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3Jle2Rpc3BsYXk6bm9uZTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTYzMCUsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlcntkaXNwbGF5Om5vbmU7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDYzMCUsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlci0xLC5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTIsLmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWZ0ZXItMywuYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlci00LC5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTUsLmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTEsLmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTIsLmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTMsLmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTQsLmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTV7ZGlzcGxheTpmbGV4fS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWJlZm9yZS0xe3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTA1JSwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWJlZm9yZS0ye3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjEwJSwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWJlZm9yZS0ze3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMzE1JSwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWJlZm9yZS00e3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNDIwJSwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWJlZm9yZS01e3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNTI1JSwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTF7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwNSUsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlci0ye3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgyMTAlLDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWZ0ZXItM3t0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMzE1JSwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTR7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDQyMCUsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlci01e3RyYW5zZm9ybTp0cmFuc2xhdGUzZCg1MjUlLDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLWJ1bGxldC1pbmFjdGl2ZXtkaXNwbGF5Omxpc3QtaXRlbTtvcGFjaXR5OmluaXRpYWw7dHJhbnNmb3JtOmluaXRpYWx9XCI7ZShcImJyb3dzZXJpZnktY3NzXCIpLmNyZWF0ZVN0eWxlKHQse2hyZWY6XCJsaWJcXFxcYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcuY3NzXCJ9LHtpbnNlcnRBdDpcImJvdHRvbVwifSkscy5leHBvcnRzPXR9LHtcImJyb3dzZXJpZnktY3NzXCI6M31dLDI6W2Z1bmN0aW9uKGUscyxvKXtzLmV4cG9ydHM9ZnVuY3Rpb24oe2FjdGl2YXRpb25LZXk6cz0yNyxpbnNlcnRTdHlsZXM6bz0hMH09e30pe3ZhciB0O3JldHVybiBzPVwic3RyaW5nXCI9PXR5cGVvZih0PXMpP3QudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApOnQsZnVuY3Rpb24odCl7bGV0IGkscixuLHAsbCxhO2k9ZnVuY3Rpb24oKXt0Lm9uKFwiYWN0aXZhdGVcIixpKSgpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLHIsITEpLG8mJmUoXCIuLi9saWIvYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcuY3NzXCIpLGE9dC5wYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXdcIil9LG49ZnVuY3Rpb24oKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixyLCExKX0scD1mdW5jdGlvbihlKXtsZXQgcztpZihhKXJldHVybiBzPXQuc2xpZGUoKStlLHM+PTAmJnM8dC5zbGlkZXMubGVuZ3RoJiZ0LnNsaWRlKHMpLCExfSxyPWZ1bmN0aW9uKGUpe3N3aXRjaChlLndoaWNoKXtjYXNlIHM6bCgpfX0sbD1mdW5jdGlvbihlKXthPVwiYm9vbGVhblwiPT10eXBlb2YgZT9lOiFhLHQucGFyZW50LmNsYXNzTGlzdC50b2dnbGUoXCJiZXNwb2tlLXNpbXBsZS1vdmVydmlld1wiLGEpfSx0Lm9uKFwiYWN0aXZhdGVcIixpKSx0Lm9uKFwiZGVzdHJveVwiLG4pLHQub24oXCJzaW1wbGUtb3ZlcnZpZXcuZW5hYmxlXCIsbC5iaW5kKG51bGwsITApKSx0Lm9uKFwic2ltcGxlLW92ZXJ2aWV3LmRpc2FibGVcIixsLmJpbmQobnVsbCwhMSkpLHQub24oXCJzaW1wbGUtb3ZlcnZpZXcudG9nZ2xlXCIsbC5iaW5kKG51bGwpKSx0Lm9uKFwicHJldlwiLHAuYmluZChudWxsLC0xKSksdC5vbihcIm5leHRcIixwLmJpbmQobnVsbCwxKSl9fX0se1wiLi4vbGliL2Jlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3LmNzc1wiOjF9XSwzOltmdW5jdGlvbihlLHMsbyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9W10saT1mdW5jdGlvbihlLHMpe3ZhciBvPWRvY3VtZW50LmhlYWR8fGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXSxpPXRbdC5sZW5ndGgtMV07aWYoKHM9c3x8e30pLmluc2VydEF0PXMuaW5zZXJ0QXR8fFwiYm90dG9tXCIsXCJ0b3BcIj09PXMuaW5zZXJ0QXQpaT9pLm5leHRTaWJsaW5nP28uaW5zZXJ0QmVmb3JlKGUsaS5uZXh0U2libGluZyk6by5hcHBlbmRDaGlsZChlKTpvLmluc2VydEJlZm9yZShlLG8uZmlyc3RDaGlsZCksdC5wdXNoKGUpO2Vsc2V7aWYoXCJib3R0b21cIiE9PXMuaW5zZXJ0QXQpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO28uYXBwZW5kQ2hpbGQoZSl9fTtzLmV4cG9ydHM9e2NyZWF0ZUxpbms6ZnVuY3Rpb24oZSxzKXt2YXIgbz1kb2N1bWVudC5oZWFkfHxkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0sdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtmb3IodmFyIGkgaW4gdC5ocmVmPWUsdC5yZWw9XCJzdHlsZXNoZWV0XCIscylpZihzLmhhc093blByb3BlcnR5KGkpKXt2YXIgcj1zW2ldO3Quc2V0QXR0cmlidXRlKFwiZGF0YS1cIitpLHIpfW8uYXBwZW5kQ2hpbGQodCl9LGNyZWF0ZVN0eWxlOmZ1bmN0aW9uKGUscyxvKXtvPW98fHt9O3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtmb3IodmFyIHIgaW4gdC50eXBlPVwidGV4dC9jc3NcIixzKWlmKHMuaGFzT3duUHJvcGVydHkocikpe3ZhciBuPXNbcl07dC5zZXRBdHRyaWJ1dGUoXCJkYXRhLVwiK3Isbil9dC5zaGVldD8odC5pbm5lckhUTUw9ZSx0LnNoZWV0LmNzc1RleHQ9ZSxpKHQse2luc2VydEF0Om8uaW5zZXJ0QXR9KSk6dC5zdHlsZVNoZWV0PyhpKHQse2luc2VydEF0Om8uaW5zZXJ0QXR9KSx0LnN0eWxlU2hlZXQuY3NzVGV4dD1lKToodC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlKSksaSh0LHtpbnNlcnRBdDpvLmluc2VydEF0fSkpfX19LHt9XX0se30sWzJdKSgyKX0pKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZnVuY3Rpb24oZGVjaykge1xuICAgIHZhciBtb2RpZnlTdGF0ZSA9IGZ1bmN0aW9uKG1ldGhvZCwgZXZlbnQpIHtcbiAgICAgIHZhciBhdHRyID0gZXZlbnQuc2xpZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWJlc3Bva2Utc3RhdGUnKTtcblxuICAgICAgaWYgKGF0dHIpIHtcbiAgICAgICAgYXR0ci5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICBkZWNrLnBhcmVudC5jbGFzc0xpc3RbbWV0aG9kXShzdGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBkZWNrLm9uKCdhY3RpdmF0ZScsIG1vZGlmeVN0YXRlLmJpbmQobnVsbCwgJ2FkZCcpKTtcbiAgICBkZWNrLm9uKCdkZWFjdGl2YXRlJywgbW9kaWZ5U3RhdGUuYmluZChudWxsLCAncmVtb3ZlJykpO1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICByZXR1cm4gZnVuY3Rpb24oZGVjaykge1xuICAgIHZhciBheGlzID0gb3B0aW9ucyA9PSAndmVydGljYWwnID8gJ1knIDogJ1gnLFxuICAgICAgc3RhcnRQb3NpdGlvbixcbiAgICAgIGRlbHRhO1xuXG4gICAgZGVjay5wYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChlLnRvdWNoZXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgc3RhcnRQb3NpdGlvbiA9IGUudG91Y2hlc1swXVsncGFnZScgKyBheGlzXTtcbiAgICAgICAgZGVsdGEgPSAwO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGVjay5wYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPT0gMSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRlbHRhID0gZS50b3VjaGVzWzBdWydwYWdlJyArIGF4aXNdIC0gc3RhcnRQb3NpdGlvbjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRlY2sucGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoTWF0aC5hYnMoZGVsdGEpID4gNTApIHtcbiAgICAgICAgZGVja1tkZWx0YSA+IDAgPyAncHJldicgOiAnbmV4dCddKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59O1xuIiwidmFyIGZyb20gPSBmdW5jdGlvbihvcHRzLCBwbHVnaW5zKSB7XG4gIHZhciBwYXJlbnQgPSAob3B0cy5wYXJlbnQgfHwgb3B0cykubm9kZVR5cGUgPT09IDEgPyAob3B0cy5wYXJlbnQgfHwgb3B0cykgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdHMucGFyZW50IHx8IG9wdHMpLFxuICAgIHNsaWRlcyA9IFtdLmZpbHRlci5jYWxsKHR5cGVvZiBvcHRzLnNsaWRlcyA9PT0gJ3N0cmluZycgPyBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChvcHRzLnNsaWRlcykgOiAob3B0cy5zbGlkZXMgfHwgcGFyZW50LmNoaWxkcmVuKSwgZnVuY3Rpb24oZWwpIHsgcmV0dXJuIGVsLm5vZGVOYW1lICE9PSAnU0NSSVBUJzsgfSksXG4gICAgYWN0aXZlU2xpZGUgPSBzbGlkZXNbMF0sXG4gICAgbGlzdGVuZXJzID0ge30sXG5cbiAgICBhY3RpdmF0ZSA9IGZ1bmN0aW9uKGluZGV4LCBjdXN0b21EYXRhKSB7XG4gICAgICBpZiAoIXNsaWRlc1tpbmRleF0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmaXJlKCdkZWFjdGl2YXRlJywgY3JlYXRlRXZlbnREYXRhKGFjdGl2ZVNsaWRlLCBjdXN0b21EYXRhKSk7XG4gICAgICBhY3RpdmVTbGlkZSA9IHNsaWRlc1tpbmRleF07XG4gICAgICBmaXJlKCdhY3RpdmF0ZScsIGNyZWF0ZUV2ZW50RGF0YShhY3RpdmVTbGlkZSwgY3VzdG9tRGF0YSkpO1xuICAgIH0sXG5cbiAgICBzbGlkZSA9IGZ1bmN0aW9uKGluZGV4LCBjdXN0b21EYXRhKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBmaXJlKCdzbGlkZScsIGNyZWF0ZUV2ZW50RGF0YShzbGlkZXNbaW5kZXhdLCBjdXN0b21EYXRhKSkgJiYgYWN0aXZhdGUoaW5kZXgsIGN1c3RvbURhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNsaWRlcy5pbmRleE9mKGFjdGl2ZVNsaWRlKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RlcCA9IGZ1bmN0aW9uKG9mZnNldCwgY3VzdG9tRGF0YSkge1xuICAgICAgdmFyIHNsaWRlSW5kZXggPSBzbGlkZXMuaW5kZXhPZihhY3RpdmVTbGlkZSkgKyBvZmZzZXQ7XG5cbiAgICAgIGZpcmUob2Zmc2V0ID4gMCA/ICduZXh0JyA6ICdwcmV2JywgY3JlYXRlRXZlbnREYXRhKGFjdGl2ZVNsaWRlLCBjdXN0b21EYXRhKSkgJiYgYWN0aXZhdGUoc2xpZGVJbmRleCwgY3VzdG9tRGF0YSk7XG4gICAgfSxcblxuICAgIG9uID0gZnVuY3Rpb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgKGxpc3RlbmVyc1tldmVudE5hbWVdIHx8IChsaXN0ZW5lcnNbZXZlbnROYW1lXSA9IFtdKSkucHVzaChjYWxsYmFjayk7XG4gICAgICByZXR1cm4gb2ZmLmJpbmQobnVsbCwgZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgfSxcblxuICAgIG9mZiA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgIGxpc3RlbmVyc1tldmVudE5hbWVdID0gKGxpc3RlbmVyc1tldmVudE5hbWVdIHx8IFtdKS5maWx0ZXIoZnVuY3Rpb24obGlzdGVuZXIpIHsgcmV0dXJuIGxpc3RlbmVyICE9PSBjYWxsYmFjazsgfSk7XG4gICAgfSxcblxuICAgIGZpcmUgPSBmdW5jdGlvbihldmVudE5hbWUsIGV2ZW50RGF0YSkge1xuICAgICAgcmV0dXJuIChsaXN0ZW5lcnNbZXZlbnROYW1lXSB8fCBbXSlcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbihub3RDYW5jZWxsZWQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgcmV0dXJuIG5vdENhbmNlbGxlZCAmJiBjYWxsYmFjayhldmVudERhdGEpICE9PSBmYWxzZTtcbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgfSxcblxuICAgIGNyZWF0ZUV2ZW50RGF0YSA9IGZ1bmN0aW9uKGVsLCBldmVudERhdGEpIHtcbiAgICAgIGV2ZW50RGF0YSA9IGV2ZW50RGF0YSB8fCB7fTtcbiAgICAgIGV2ZW50RGF0YS5pbmRleCA9IHNsaWRlcy5pbmRleE9mKGVsKTtcbiAgICAgIGV2ZW50RGF0YS5zbGlkZSA9IGVsO1xuICAgICAgcmV0dXJuIGV2ZW50RGF0YTtcbiAgICB9LFxuXG4gICAgZGVjayA9IHtcbiAgICAgIG9uOiBvbixcbiAgICAgIG9mZjogb2ZmLFxuICAgICAgZmlyZTogZmlyZSxcbiAgICAgIHNsaWRlOiBzbGlkZSxcbiAgICAgIG5leHQ6IHN0ZXAuYmluZChudWxsLCAxKSxcbiAgICAgIHByZXY6IHN0ZXAuYmluZChudWxsLCAtMSksXG4gICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgIHNsaWRlczogc2xpZGVzXG4gICAgfTtcblxuICAocGx1Z2lucyB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbihwbHVnaW4pIHtcbiAgICBwbHVnaW4oZGVjayk7XG4gIH0pO1xuXG4gIGFjdGl2YXRlKDApO1xuXG4gIHJldHVybiBkZWNrO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZyb206IGZyb21cbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyBGb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBicm93c2VyIGZpZWxkLCBjaGVjayBvdXQgdGhlIGJyb3dzZXIgZmllbGQgYXQgaHR0cHM6Ly9naXRodWIuY29tL3N1YnN0YWNrL2Jyb3dzZXJpZnktaGFuZGJvb2sjYnJvd3Nlci1maWVsZC5cblxudmFyIHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhciBpbnNlcnRTdHlsZUVsZW1lbnQgPSBmdW5jdGlvbihzdHlsZUVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICB2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuaW5zZXJ0QXQgPSBvcHRpb25zLmluc2VydEF0IHx8ICdib3R0b20nO1xuXG4gICAgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09ICd0b3AnKSB7XG4gICAgICAgIGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcbiAgICAgICAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuICAgICAgICAgICAgaGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyIFxcJ2luc2VydEF0XFwnLiBNdXN0IGJlIFxcJ3RvcFxcJyBvciBcXCdib3R0b21cXCcuJyk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLy8gQ3JlYXRlIGEgPGxpbms+IHRhZyB3aXRoIG9wdGlvbmFsIGRhdGEgYXR0cmlidXRlc1xuICAgIGNyZWF0ZUxpbms6IGZ1bmN0aW9uKGhyZWYsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuXG4gICAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBpZiAoICEgYXR0cmlidXRlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZGF0YS0nICsga2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBoZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH0sXG4gICAgLy8gQ3JlYXRlIGEgPHN0eWxlPiB0YWcgd2l0aCBvcHRpb25hbCBkYXRhIGF0dHJpYnV0ZXNcbiAgICBjcmVhdGVTdHlsZTogZnVuY3Rpb24oY3NzVGV4dCwgYXR0cmlidXRlcywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIGV4dHJhT3B0aW9ucyA9IGV4dHJhT3B0aW9ucyB8fCB7fTtcblxuICAgICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICAgICAgaWYgKCAhIGF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdkYXRhLScgKyBrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdHlsZS5zaGVldCkgeyAvLyBmb3IganNkb20gYW5kIElFOStcbiAgICAgICAgICAgIHN0eWxlLmlubmVySFRNTCA9IGNzc1RleHQ7XG4gICAgICAgICAgICBzdHlsZS5zaGVldC5jc3NUZXh0ID0gY3NzVGV4dDtcbiAgICAgICAgICAgIGluc2VydFN0eWxlRWxlbWVudChzdHlsZSwgeyBpbnNlcnRBdDogZXh0cmFPcHRpb25zLmluc2VydEF0IH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHsgLy8gZm9yIElFOCBhbmQgYmVsb3dcbiAgICAgICAgICAgIGluc2VydFN0eWxlRWxlbWVudChzdHlsZSwgeyBpbnNlcnRBdDogZXh0cmFPcHRpb25zLmluc2VydEF0IH0pO1xuICAgICAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzVGV4dDtcbiAgICAgICAgfSBlbHNlIHsgLy8gZm9yIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaVxuICAgICAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzVGV4dCkpO1xuICAgICAgICAgICAgaW5zZXJ0U3R5bGVFbGVtZW50KHN0eWxlLCB7IGluc2VydEF0OiBleHRyYU9wdGlvbnMuaW5zZXJ0QXQgfSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuIl19
