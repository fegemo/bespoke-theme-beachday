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
var css = "@import url(https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Source+Code+Pro&display=swap);"; (require("browserify-css").createStyle(css, { "href": "dist\\theme\\fonts.css" }, { "insertAt": "bottom" })); module.exports = css;
},{"browserify-css":16}],3:[function(require,module,exports){
var css = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */@keyframes floating{0%{transform:translateY(0)}to{transform:translateY(-25%)}}@keyframes floated-element-shadow{0%{transform:scaleX(1)}to{transform:scaleX(.5)}}@keyframes bouncing-left{to{transform:translateX(5%) scaleX(.96)}}@keyframes cool-rotation-x{0%{transform:rotateX(-10deg)}to{transform:rotateX(10deg)}}@keyframes circling{0%{transform:rotate(0turn) translate(180px) rotate(0turn)}to{transform:rotate(1turn) translate(180px) rotate(-1turn)}}@keyframes shaking{0%{transform:translate3d(4px,0,0)}10%{transform:translate3d(-7px,-5px,0)}20%{transform:translate3d(8px,5px,0)}30%{transform:translate3d(-7px,3px,0)}40%{transform:translate3d(9px,-3px,0)}50%{transform:translate3d(-4px,3px,0)}60%{transform:translate3d(4px,-4px,0)}70%{transform:translate3d(-5px,-4px,0)}80%{transform:translate3d(4px,2px,0)}90%{transform:translate3d(-3px,-1px,0)}to{transform:translate3d(0,0,0)}}html{line-height:1.15;-webkit-text-size-adjust:100%}body,figure,figure.embedded-caption p,figure>p{margin:0}details,main,ol,ul{display:block}h1{color:var(--regular-title-color);font-family:'Amatic SC',cursive;font-size:3.5em}hr{box-sizing:content-box;height:0;overflow:visible}code,pre,samp{font-family:monospace,monospace}pre,samp{font-size:1em}a{background-color:transparent}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted;border-bottom:initial}b{font-weight:bolder}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{color:inherit;display:table;max-width:100%;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio],legend{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}*{box-sizing:border-box}:root{--slide-width:1066.6666666666665px;--slide-height:600px;--presentation-color:#fff;--accent-color:#00fdc8;--alternate-color:#7b9c02;--emphatic-color:#7c7ce0;--link-color:#db4437;--text-color:#252525;--big-title-color:#6e8ae4;--regular-title-color:#000;--inline-code-bg-color:#ddd;--inline-emphatic-code-bg-color:#ddd;--block-code-bg-color:#fafafa;--block-code-text-color:#383a42;--shadow-color:rgba(0,0,0,0.2);--accent-more-color:#00604c;--circling-balloons-bg:#ffd700;--note-icon-bg:#fff;--note-info-bg-color-start:#ffffe0;--note-info-bg-color-end:#a9dbe0;--note-info-accent-color:$note-info-bg-accent-color;--note-warning-bg-color-start:#ffffe0;--note-warning-bg-color-end:#fff176;--note-warning-accent-color:#b8860b;--result-bg-color-start:#f6fbff;--result-bg-color-end:#e3ebf1;--result-accent-color:#3063a9;--did-you-know-accent-color:#800080;--table-border-color:#000;--table-head-bg:#333;--table-foot-bg:#ddd;--table-row-border-color:#ccc;--table-row-bg-even:rgba(234,234,234,0.702);--table-head-color:#fff;--table-foot-color:#000;--quote-bg:#f5f5f5;--quote-color:#383838;--quote-border-color:#c0c0c0;--quote-quotes-color:#7a7a7a;--quote-cite-color:#999;--figcaption-bg:#f5f5f5;--emphatic-accent-color:#38088e;--button-color:currentColor;--transition-duration:400ms;--transition-easing:ease;--definition-list-width:10em;--definition-list-spacing:0.5em;--show-2-slides-rotation:25deg;--show-2-slides-z-distance:-750px;--show-2-slides-x-distance:380px;--layout-column-gap:1em}@media screen and (prefers-color-scheme:dark){:root{--presentation-color:#0c0c0c;--accent-color:#006d56;--alternate-color:#c8ff00;--emphatic-color:#00004c;--link-color:#ff4d3e;--text-color:#fff;--big-title-color:#6283ec;--regular-title-color:#fff;--inline-code-bg-color:#444;--inline-emphatic-code-bg-color:#c1bfbf;--block-code-bg-color:#23241f;--block-code-text-color:#f8f8f2;--shadow-color:rgba(255,255,255,0.2);--accent-more-color:#9dffeb;--circling-balloons-bg:#d29e25;--note-icon-bg:#fff;--note-info-bg-color-start:#61bdca;--note-info-bg-color-end:#015861;--note-info-accent-color:#003135;--note-warning-bg-color-start:#cccc06;--note-warning-bg-color-end:#7b6e00;--note-warning-accent-color:#544a00;--result-bg-color-start:#243848;--result-bg-color-end:#0f121f;--result-accent-color:#f9ffee;--did-you-know-accent-color:#ff2cff;--table-border-color:#fff;--table-head-bg:#bfbfbf;--table-foot-bg:#2b2b2b;--table-row-border-color:#313131;--table-row-bg-even:rgba(41,41,41,0.702);--table-head-color:#000;--table-foot-color:#fff;--quote-bg:#232227;--quote-color:#d8d8d8;--quote-border-color:#918cb5;--quote-quotes-color:#4d46c7;--quote-cite-color:#6084ff;--figcaption-bg:#232323;--emphatic-accent-color:#6734c3;--button-color:#333}}@media screen{.bespoke-parent{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;perspective:900px;overflow:hidden;background-color:var(--presentation-color);color:var(--text-color);font-size:24px}.bespoke-parent:not(.emphatic){transition:background-color var(--transition-duration) var(--transition-easing)}.bespoke-slide{position:absolute;width:1066.6666666666665px;height:600px;top:50%;left:50%;margin-left:-533.3333333333333px;margin-top:-300px;overflow:hidden;contain:size layout style;content-visibility:auto}.bespoke-inactive{opacity:0;pointer-events:none}.bespoke-inactive .bespoke-bullet-inactive{transition:opacity .4s ease}.bespoke-inactive:not(.bespoke-after-1):not(.bespoke-before-1):not(.bespoke-after-2):not(.bespoke-before-2):not(.bespoke-after-3):not(.bespoke-before-3){display:none}}h2{font-size:1.5em}h3,ol.columns-3>li>h1,ol.columns-3>li>h2,ol.columns-3>li>h3,ol.columns-3>li>h4,ol.columns-3>li>h5,ol.columns-3>li>h6,ul.columns-3>li>h1,ul.columns-3>li>h2,ul.columns-3>li>h3,ul.columns-3>li>h4,ul.columns-3>li>h5,ul.columns-3>li>h6{font-size:1.25em}h4,h5,h6{font-size:1em}h2,h3,h4,h5,h6{font-family:'Source Code Pro',monospace;color:var(--regular-title-color)}h1,h2,h3,h4,h5,h6{font-weight:400;margin:0 0 .25em;line-height:1em}li,p{font-size:24px;line-height:1.5em}strong{font-weight:700;color:#00b18c}article{font-family:'Source Code Pro',monospace}a:link,a:visited{color:var(--link-color);text-decoration:none}a:hover{text-decoration:underline}code{font-size:.75em;background-color:var(--inline-code-bg-color);color:inherit;border-radius:3px}pre>code{font-size:.83333em;color:inherit}pre{color:var(--block-code-text-color);background:var(--block-code-bg-color);border-radius:.15em;padding:.5em;overflow-x:auto;outline:1px solid silver;box-shadow:3px 3px 10px var(--shadow-color);max-width:1026.6666666666665px}pre code span{word-wrap:break-word;word-break:break-all}p{text-align:justify}h1>code,h2>code,h3>code,h4>code,h5>code,h6>code,pre>code{background-color:inherit;border-radius:inherit}ol.no-list-icon,ul.no-list-icon{list-style-type:none}ol.columns-3,ul.columns-3{display:flex;flex-direction:row}ol.columns-3>li,ul.columns-3>li{flex:1}ol.columns-3>li:not(:last-of-type),ul.columns-3>li:not(:last-of-type){margin-right:1em}dd,dt{margin-bottom:.5em}dt{float:left;clear:left;width:var(--definition-list-width);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:right;font-weight:700;padding-right:1em;position:relative}dd{margin-left:calc(var(--definition-list-width) + var(--definition-list-spacing))}dl.width-10{--definition-list-width:10%}dl.width-20{--definition-list-width:20%}dl.width-30{--definition-list-width:30%}dl.width-40{--definition-list-width:40%}dl.width-50{--definition-list-width:50%}del{color:gray}button{color:var(--button-color)}table,thead{border-bottom:3px solid var(--table-border-color)}table{border-collapse:collapse;border-spacing:0;border-top:3px solid var(--table-border-color);border-left:none;border-right:none;box-shadow:10px 10px 10px var(--shadow-color)}thead{background:var(--table-head-bg)}thead code{background:var(--text-color);color:var(--presentation-color)}tfoot{background:var(--table-foot-bg);color:var(--table-foot-color)}tr{border-top:1px solid var(--table-row-border-color);background-color:initial}tr:nth-of-type(even){background-color:var(--table-row-bg-even)}th{color:var(--table-head-color);font-weight:400;text-align:inherit}td,th{padding:.3em .5em}table.aero-rows td{padding-top:.8em;padding-bottom:.8em}table.aero-columns td{padding-left:1em;padding-right:1em}blockquote{margin:.25em 0;padding:.25em 40px;background:var(--quote-bg);box-shadow:4px 4px 4px var(--shadow-color);line-height:1.45;font-size:18px;font-family:Georgia,serif;font-style:italic;color:var(--quote-color);border:1px solid var(--quote-border-color)}blockquote.centered{margin-left:auto;margin-right:auto}blockquote>p{margin:.5em auto}blockquote::before{content:\"\\201C\";display:block;position:absolute;left:-.25em;top:-.25em;font-size:80px;color:var(--quote-quotes-color)}blockquote cite{display:block;margin-top:5px;font-size:75%;color:var(--quote-cite-color)}blockquote cite::before{content:\"\\2014 \\2009\"}kbd{padding:.1em .6em;font-size:.8em;border:1px solid #ccc;font-family:Consolas,Menlo,Monaco,monospace;background-color:#f7f7f7;color:#333;box-shadow:0 4px 0 var(--shadow-color),0 0 0 2px #fff inset;border-radius:3px;display:inline-block;margin:0 .1em;text-shadow:0 1px 0 #fff;line-height:1.3;white-space:nowrap;top:0;transition:top 40ms ease-out,box-shadow 40ms ease-out}kbd:hover{top:4px;box-shadow:0 0 0 var(--shadow-color),0 0 0 2px #fff inset}figcaption{background-color:var(--figcaption-bg);padding:5px;margin-bottom:3px}blockquote,figure.embedded-caption,kbd{position:relative}figure.embedded-caption figcaption{position:absolute;background-color:rgba(0,0,0,.25)}figure.embedded-caption figcaption.caption-bottom{bottom:1em}figure.embedded-caption figcaption.caption-top{top:1em;left:0;right:0}figure.embedded-caption figcaption.caption-bottom{left:0;right:0}.push-right{float:right;margin-left:1.25em}.push-left{float:left;margin-right:1.25em}.push-code-right pre{float:right;clear:right}.push-code-left pre,.push-code-left>code{float:left;clear:left}.push-code-right-without-clearing pre{clear:none;float:right}.push-code-right-without-clearing>code{float:right}.flex-align-center{align-self:center}.flex-align-start{align-self:flex-start}.flex-align-end{align-self:flex-end}.alternate-color{color:var(--alternate-color)}.compact-code pre,.compact-code~pre,pre.compact-code{line-height:1em}.compact-code-mid pre,.compact-code-mid~pre,pre.compact-code-mid{line-height:1em;font-size:90%}.compact-code-more pre,.compact-code-more~pre,pre.compact-code-more{line-height:1em;font-size:75%}.figure-slides{position:relative}.figure-slides.clean .bespoke-bullet:not(.bespoke-bullet-current):not(:last-child){visibility:hidden;opacity:0}.figure-step:not(:first-child){position:absolute;top:0;left:0}a.bookmarklet{border-radius:5px;border:2px solid silver;padding:4px 7px;background-color:rgba(255,255,255,.1);transition:all .2s ease-out}a.bookmarklet:hover{text-decoration:none;background-color:#b66c7e;color:#ddd;border-color:#333;cursor:move}.badge{display:inline-block;background-color:var(--presentation-color);border-radius:4px;border:1px solid var(--text-color);color:#a9a9a9;font-size:75%;line-height:1em;padding:.1em .2em}.badge.type1{color:teal;border-color:teal}.badge.type2{color:#6495ed;border-color:#6495ed}input.switch{-webkit-appearance:none;appearance:none}input.switch~label{position:relative;cursor:pointer;-webkit-user-select:none;user-select:none}input.switch~label::after,input.switch~label::before{content:' ';display:inline-block;position:relative;top:calc((100% - .75em)/ 2 + .5em);margin-right:.25em;height:.75em;width:1.5em;background-color:#f77;border-radius:5px;box-shadow:inset 0 .1em 0 var(--shadow-color);transition:all .1s ease-in}input.switch~label::after{position:absolute;left:0;width:.75em;height:.55em;top:calc((100% - .75em)/ 2 + .1em);bottom:calc((100% - .75em)/ 2 + .1em);margin-left:.1em;background-color:#fff;border-radius:.15em;box-shadow:inset 0 -.2em 0 var(--shadow-color)}input.switch:checked~label::before{background-color:#2ae82a}input.switch:checked~label::after{margin-left:.65em}.bespoke-active .underline.upon-activation::after,.full-width{width:100%}.large-width{width:80%}.medium-width{width:60%}.small-width{width:40%}.full-height{height:100%}.huge-height{height:80%}.large-height{height:60%}.medium-height{height:40%}.small-height{height:20%}.block{display:block}.floating-portrait-container *,.portrait,.portrait img{display:inline-block;width:150px;height:150px;border-radius:50%}.floating-portrait-container * figcaption,.portrait figcaption,.portrait img figcaption{background-color:transparent}.floating-portrait-container{position:relative}.floating-portrait-container *{margin:0;animation:floating 2s ease-in-out 0s infinite alternate}.floating-portrait-container::after{content:\" \";position:absolute;width:100%;height:20%;left:0;right:0;bottom:-20%;background:radial-gradient(ellipse closest-side,rgba(21,21,21,.25) 0,rgba(255,255,255,0) 100%);z-index:-1;animation:floated-element-shadow 2s ease-in-out 0s infinite alternate}.flips{transition:transform .6s ease-out}.flips *{margin:0}.flips:hover{transform:rotateY(720deg)}.portrait{shape-outside:circle(50%)}.contain{max-width:100%;max-height:100%}.slide-contain{max-width:var(--slide-width);max-height:var(--slide-height)}.half-width{width:50%}.three-quarter-width{width:75%}.full-width-slides,.full-width-slides img{max-width:100%}.centered{margin-left:auto;margin-right:auto}.centered.img{display:block}.center-aligned{text-align:center}.emoji{height:1em;width:1em;vertical-align:middle}.on-line{height:1em;line-height:1em}.markdown-it-container>p,.no-margin,div.did-you-know>p,div.result>p{margin:0}.no-padding{padding:0}@media (prefers-color-scheme:dark){.invert-colors-dark-mode{filter:invert(1)}}.no-bullets,.no-list-icon{list-style-type:none}.horizontal-list{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:space-between}.multi-column-list-2,.multi-column-list-3{padding-left:0;column-count:2;list-style-position:inside}.multi-column-list-3{column-count:3}.multi-column-list-4,.multi-column-list-5{padding-left:0;column-count:4;list-style-position:inside}.multi-column-list-5{column-count:5}.note{border:1px solid transparent;list-style-type:none;border-radius:5px;box-shadow:3px 3px 3px var(--shadow-color);padding:.3em .5em}.note>p:first-of-type{margin-top:0}.note::before{margin-right:1rem;width:1.5em;height:1.5em;display:inline-block;float:left;shape-outside:circle(50%);text-align:center;line-height:1.5em;font-size:1em;box-sizing:border-box;background:var(--note-icon-bg);border-radius:50%;color:#000}.note.info{border-color:var(--note-info-accent-color);background:linear-gradient(to right bottom,var(--note-info-bg-color-start),var(--note-info-bg-color-end))}.note.info strong{color:var(--note-info-accent-color)}.note.info::before{content:\"ℹ️\"}.note,.note.warning{border-color:var(--note-warning-accent-color);background:linear-gradient(to right bottom,var(--note-warning-bg-color-start),var(--note-warning-bg-color-end))}.note strong,.note.warning strong{color:var(--note-warning-accent-color)}.note.warning::before,.note::before{content:\"⚠️\"}.markdown-it-container,div.did-you-know,div.result{position:relative}.markdown-it-container::before,div.did-you-know::before,div.result::before{content:attr(data-before)}div.result{margin-left:0;padding:.75em .5em .5em;background-image:linear-gradient(135deg,var(--result-bg-color-start),var(--result-bg-color-end));border:1px dashed var(--result-accent-color)}div.result::before{background-color:var(--result-accent-color);color:var(--presentation-color);display:inline-block;transform:rotate(-3deg);font-weight:700;position:absolute;top:-3px;left:-3px;font-size:.6em;line-height:1.5em;padding:0 .5em}div.did-you-know{background-image:url(https://fegemo.github.io/cefet-front-end/images/question-mark-bg.png);border-left:4px solid var(--did-you-know-accent-color);box-shadow:5px 5px 5px var(--shadow-color);padding-right:1em}div.did-you-know::before{display:block;margin:4px;background-color:#fff;font-family:Purisa,\"Comic Sans MS\",cursive;font-weight:700;color:var(--did-you-know-accent-color)}div.did-you-know,div.did-you-know>p{padding-left:.5em}.layout-split-2,.layout-split-3,.layout-split-4,.layout-split-5{flex-direction:row;display:flex;justify-content:center;align-items:stretch;height:100%;width:100%}.layout-split-2>section,.layout-split-3>section{width:50%;flex-grow:1;text-align:center}.layout-split-3>section{width:33.33333333333333%}.layout-split-4>section,.layout-split-5>section{width:25%;flex-grow:1;text-align:center}.layout-split-5>section{width:20%}.code-split-2,.code-split-3{display:flex;align-items:flex-start}.code-split-2>*,.code-split-3>*{flex:1}.code-split-2>:not(:first-child),.code-split-3>:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.code-split-2>:not(:last-child),.code-split-3>:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.code-split-2 pre.hljs,.code-split-3 pre.hljs{margin-top:0;margin-bottom:0}.code-split-2 pre.hljs:not(:last-of-type),.code-split-3 pre.hljs:not(:last-of-type){border-right:3px double #fff}.code-split-2 pre.hljs+pre.hljs,.code-split-3 pre.hljs+pre.hljs{margin-top:0}.four-column-code code,.four-column-code pre,.three-column-code code,.three-column-code pre,.two-column-code code,.two-column-code pre{column-rule:3px double var(--shadow-color);column-gap:2em}.two-column-code code,.two-column-code pre{column-count:2}.three-column-code code,.three-column-code pre{column-count:3}.four-column-code code,.four-column-code pre{column-count:4}.floating-right-code pre{float:right;width:auto;margin-left:1em}.card-list{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around;list-style-type:none;padding:0}.card-list li{flex:1;display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:flex-start;margin-right:.25em}.card-list li figcaption,.card-list li h1,.card-list li h2,.card-list li h3,.card-list li h4,.card-list li h5,.card-list li h6{font-size:1em;text-align:center;order:1;margin-top:.5em!important}.card-list li img{max-width:100%;margin:auto;object-fit:contain;object-position:center;order:0}.card-list.polaroid li{background:var(--presentation-color);box-shadow:0 8px 16px var(--shadow-color),0 4px 16px var(--shadow-color)}.card-list.polaroid li img{background-color:#f0f8ff;border:11px solid var(--presentation-color);image-rendering:pixelated}.card-list.cover li img{object-fit:cover}.card-list.contain li img{object-fit:contain}.card-list.title-top figcaption,.card-list.title-top h1,.card-list.title-top h2,.card-list.title-top h3,.card-list.title-top h4,.card-list.title-top h5,.card-list.title-top h6{order:0}.card-list.title-top img{order:1}.inverted-text-colors{background:var(--text-color);color:var(--presentation-color)}.smaller-text-90{font-size:90%}.smaller-text-80{font-size:80%}.smaller-text-70{font-size:70%}.smaller-text-60{font-size:60%}.bring-forward{position:relative;z-index:1}.item-code-with-image,.item-code-with-result{padding-left:0;list-style-type:none}.item-code-with-image li,.item-code-with-result li{clear:right;margin-bottom:1em}.item-code-with-image li>.result,.item-code-with-image li>img,.item-code-with-result li>.result,.item-code-with-result li>img{float:right;margin-left:1em}.bespoke-slide p,.bespoke-slide pre,.item-code-with-image li>.result,.item-code-with-result li>.result{margin-top:0}.bouncing-left{animation:bouncing-left .8s cubic-bezier(.22,.61,.36,1) 0s infinite alternate}.delay-1{animation-delay:.2s;transition-delay:.2s}.delay-2{animation-delay:.4s;transition-delay:.4s}.delay-3{animation-delay:.6s;transition-delay:.6s}.delay-4{animation-delay:.8s;transition-delay:.8s}.delay-5{animation-delay:1s;transition-delay:1s}.delay-6{animation-delay:1.2s;transition-delay:1.2s}.underline{position:relative}.underline::after{content:\" \";position:absolute;bottom:5%;left:0;width:100%;border:2px solid currentColor}.underline.upon-activation::after{transition:width .4s ease-out .4s;width:0}.jump.upon-activation{display:inline-block;transition:all .2s cubic-bezier(0,0,.27,1.58) .7s;opacity:0;transform:scale(.2) translateY(50%)}.bespoke-active .jump.upon-activation{opacity:1;transform:scale(.6) translateY(0)}.delay-200,.delay-200::after,.delay-200::before{animation-delay:.2s!important;transition-delay:.2s!important}.delay-400,.delay-400::after,.delay-400::before{animation-delay:.4s!important;transition-delay:.4s!important}.delay-600,.delay-600::after,.delay-600::before{animation-delay:.6s!important;transition-delay:.6s!important}.delay-800,.delay-800::after,.delay-800::before{animation-delay:.8s!important;transition-delay:.8s!important}.delay-1000,.delay-1000::after,.delay-1000::before{animation-delay:1s!important;transition-delay:1s!important}.delay-1200,.delay-1200::after,.delay-1200::before{animation-delay:1.2s!important;transition-delay:1.2s!important}.delay-1400,.delay-1400::after,.delay-1400::before{animation-delay:1.4s!important;transition-delay:1.4s!important}.delay-1600,.delay-1600::after,.delay-1600::before{animation-delay:1.6s!important;transition-delay:1.6s!important}.delay-1800,.delay-1800::after,.delay-1800::before{animation-delay:1.8s!important;transition-delay:1.8s!important}.delay-2000,.delay-2000::after,.delay-2000::before{animation-delay:2s!important;transition-delay:2s!important}.delay-2200,.delay-2200::after,.delay-2200::before{animation-delay:2.2s!important;transition-delay:2.2s!important}.delay-2400,.delay-2400::after,.delay-2400::before{animation-delay:2.4s!important;transition-delay:2.4s!important}.delay-2600,.delay-2600::after,.delay-2600::before{animation-delay:2.6s!important;transition-delay:2.6s!important}.delay-2800,.delay-2800::after,.delay-2800::before{animation-delay:2.8s!important;transition-delay:2.8s!important}.delay-3000,.delay-3000::after,.delay-3000::before{animation-delay:3s!important;transition-delay:3s!important}.shaking{animation:shaking .5s ease-out 0s 1}.shaking:nth-child(2n){animation-delay:.1s}.cool-rotation-x{animation:cool-rotation-x 1.2s ease-in-out 0s infinite alternate}@media screen{.transition-giant-wheel .bespoke-active,.transition-grow .bespoke-active,.transition-sliding .bespoke-active,.transition-subtle .bespoke-active{transform:none;opacity:1}.transition-sliding .bespoke-slide{transition-property:transform,opacity;transition-duration:var(--transition-duration);transition-timing-function:var(--transition-easing)}.transition-sliding .bespoke-before{transform:translate3d(-101%,0,0)}.transition-sliding .bespoke-after{transform:translate3d(101%,0,0)}.transition-subtle .bespoke-slide{transition-property:transform,opacity;transition-duration:calc(.75*var(--transition-duration));transition-timing-function:var(--transition-easing)}.transition-subtle .bespoke-before{transform:translateX(-1000px)}.transition-subtle .bespoke-after{transform:translateX(1000px)}.transition-subtle .bespoke-before-1{transform:translateX(-100px)}.transition-subtle .bespoke-after-1{transform:translateX(100px)}.transition-subtle .bespoke-before-2{transform:translateX(-300px)}.transition-subtle .bespoke-after-2{transform:translateX(300px)}.transition-giant-wheel .bespoke-slide{transition-property:transform,opacity;transition-duration:var(--transition-duration);transition-timing-function:var(--transition-easing);transform-origin:50% 100%}.transition-giant-wheel .bespoke-before{transform:rotateX(90deg) scale(.5)}.transition-giant-wheel .bespoke-after{transform:rotateX(-90deg) scale(.5)}.transition-grow .bespoke-slide{transition-property:transform,opacity;transition-duration:calc(.5*var(--transition-duration));transition-timing-function:var(--transition-easing)}.transition-grow .bespoke-before{transform:scale(1.1)}.transition-grow .bespoke-after{transform:scale(.9)}}@media screen and (prefers-reduced-motion){.transition-giant-wheel .bespoke-slide,.transition-grow .bespoke-slide,.transition-sliding .bespoke-slide,.transition-subtle .bespoke-slide{transition-property:none}}.bespoke-slide{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;padding:1.5rem}.bespoke-slide h1,.bespoke-slide h2,.bespoke-slide h3,.bespoke-slide h4,.bespoke-slide h5,.bespoke-slide h6{margin:0 0 .5em;padding:0}.layout-title{justify-content:space-around;align-items:center;text-align:center;padding:0}.layout-title h1{color:var(--big-title-color)}.layout-title h2{background-color:var(--accent-color);width:100%;padding:2em 0;margin:1em 0 0}.layout-title h2 strong{color:var(--accent-more-color)}.layout-section-header{flex-wrap:wrap;justify-content:center;padding:0}.layout-section-header::after{display:block;content:\" \";position:absolute;top:0;right:0;width:50%;height:100%;z-index:-1;background-color:var(--accent-color)}.layout-section-header .content{display:block;box-sizing:border-box}.layout-section-header .content dd,.layout-section-header .content dt,.layout-section-header .content li,.layout-section-header .content p{background-color:var(--presentation-color)}.layout-section-header .content li,.layout-section-header .content p{display:inline}.layout-section-header .content p::after{content:\" \";display:block;margin-bottom:.5em}.layout-section-header .content::after{content:\" \";display:block;width:3em;height:1px;border-bottom:3px solid var(--presentation-color)}.layout-section-header .content li::before{content:\" \";display:list-item;float:left}.layout-section-header .content li::after{content:\" \";display:block}.layout-section-header>*{width:50%;padding:0 1em}.layout-section-header>ol,.layout-section-header>ul{padding-left:2em}.layout-section-header h1{margin:0;text-align:center;height:70%;box-sizing:border-box;padding:2em .15em .5em}.layout-section-header h2{margin:0;padding:0;text-align:center;height:30%}.layout-centered,.layout-centered-vertical{justify-content:center}.layout-centered,.layout-centered-horizontal{align-items:center}.layout-2-column-content,.layout-3-column-content,.layout-4-column-content{display:grid;grid-template-rows:auto 1fr;column-gap:var(--layout-column-gap)}.layout-2-column-content{grid-template-columns:1fr 1fr}.layout-2-column-content .span-columns,.layout-2-column-content h1,.layout-2-column-content h2,.layout-2-column-content h3,.layout-2-column-content h4,.layout-2-column-content h5,.layout-2-column-content h6{grid-column:1/3}.layout-3-column-content{grid-template-columns:1fr 1fr 1fr}.layout-3-column-content .span-columns,.layout-3-column-content h1,.layout-3-column-content h2,.layout-3-column-content h3,.layout-3-column-content h4,.layout-3-column-content h5,.layout-3-column-content h6{grid-column:1/4}.layout-4-column-content{grid-template-columns:1fr 1fr 1fr 1fr}.layout-4-column-content .span-columns,.layout-4-column-content h1,.layout-4-column-content h2,.layout-4-column-content h3,.layout-4-column-content h4,.layout-4-column-content h5,.layout-4-column-content h6{grid-column:1/5}.layout-2-column-highlight-and-content{display:grid;grid-template-rows:auto 1fr;grid-template-columns:minmax(auto,1fr) 3fr;column-gap:1em;perspective:inherit}.layout-2-column-highlight-and-content h1,.layout-2-column-highlight-and-content h2,.layout-2-column-highlight-and-content h3,.layout-2-column-highlight-and-content h4,.layout-2-column-highlight-and-content h5,.layout-2-column-highlight-and-content h6{grid-column:1/3}.layout-2-column-highlight-and-content>:nth-child(2){width:90%;margin:0 0 0 auto;box-shadow:0 0 20px transparent;transition:all .5s ease .4s;opacity:.5;transform:scale(.75);transform-origin:right}.layout-2-column-highlight-and-content>:nth-child(2)>iframe,.layout-2-column-highlight-and-content>:nth-child(2)>img,.layout-tall-figure-left>:nth-child(2)>img,.layout-tall-figure-left>img:nth-child(2),.layout-tall-figure-right>:nth-child(2)>img,.layout-tall-figure-right>img:nth-child(2){max-width:100%;max-height:100%}.layout-2-column-highlight-and-content>:nth-child(2)>iframe{height:100%}.layout-2-column-highlight-and-content.bespoke-active>:nth-child(2){transform:rotateY(30deg) scale(.9);-moz-transform:rotateY(8deg) scale(.9);opacity:1;box-shadow:-20px 20px 20px var(--shadow-color)}.layout-2-column-highlight-and-content .span-columns{grid-column:1/3}.layout-3-column-element-with-titles-expansible{display:flex;flex-direction:column;flex-wrap:wrap;align-items:flex-start}.layout-3-column-element-with-titles-expansible>*{width:calc(33% - 1rem)}.layout-3-column-element-with-titles-expansible h1,.layout-3-column-element-with-titles-expansible h2,.layout-3-column-element-with-titles-expansible h3,.layout-3-column-element-with-titles-expansible h4,.layout-3-column-element-with-titles-expansible h5,.layout-3-column-element-with-titles-expansible h6{margin:auto 0}.layout-3-column-element-with-titles-expansible h1:not(:last-of-type),.layout-3-column-element-with-titles-expansible h2:not(:last-of-type),.layout-3-column-element-with-titles-expansible h3:not(:last-of-type),.layout-3-column-element-with-titles-expansible h4:not(:last-of-type),.layout-3-column-element-with-titles-expansible h5:not(:last-of-type),.layout-3-column-element-with-titles-expansible h6:not(:last-of-type){margin-right:1rem}.layout-3-column-element-with-titles-expansible>:nth-child(2n){height:calc(100% - 2.5em);margin:0;position:relative}.layout-3-column-element-with-titles-expansible>:nth-child(2n):not(:last-of-type){margin-right:1rem}.layout-3-column-element-with-titles-expansible>:nth-child(2n):hover{left:0;width:100%;z-index:1}.layout-3-column-element-with-titles-expansible>:nth-child(2n):nth-of-type(2){transition-duration:50ms}.layout-3-column-element-with-titles-expansible>:nth-child(2n):nth-of-type(2):hover{left:-33%}.layout-3-column-element-with-titles-expansible>:nth-child(2n):nth-of-type(3){transition:none}.layout-3-column-element-with-titles-expansible>:nth-child(2n):nth-of-type(3):hover{left:-67%}.layout-2-column-content-zigzag{flex-direction:row;flex-wrap:wrap;align-items:flex-start}.layout-2-column-content-zigzag h1,.layout-2-column-content-zigzag h2{width:100%}.layout-2-column-content-zigzag>:not(:first-child){width:48%}.layout-2-column-content-zigzag .span-columns{grid-column:1/3}.layout-circling-balloons h1,.layout-circling-balloons h2,.layout-circling-balloons h3,.layout-circling-balloons h4,.layout-circling-balloons h5,.layout-circling-balloons h6{z-index:1}.layout-circling-balloons>ul{position:absolute;left:0;top:0;width:100%;height:100%;margin:0}.layout-circling-balloons>ul>li{position:absolute;width:200px;height:200px;line-height:1em;left:calc(50% - 100px);top:calc(50% - 100px);padding:0;margin:0;border-radius:50%;background:var(--circling-balloons-bg);color:var(--text-color);overflow:hidden;list-style-type:none;transition:all 250ms ease;animation:circling 36s linear 0s infinite}.layout-circling-balloons>ul>li:nth-of-type(1){animation-delay:0s}.layout-circling-balloons>ul>li:nth-of-type(2){animation-delay:-12s}.layout-circling-balloons>ul>li:nth-of-type(3){animation-delay:-24s}.layout-circling-balloons>ul>li>:first-child{position:absolute;top:0;right:0;bottom:0;left:0;margin:0;padding-left:1.5em;padding-right:1.5em;transition:all 250ms ease}.layout-circling-balloons>ul>li>:first-child img{display:block;width:125px;height:125px;margin:37.5px auto}.layout-circling-balloons>ul>li>:nth-child(2){margin-top:200px;padding:1em}.layout-circling-balloons>ul>li:hover{width:26em;height:10em;top:calc(50% - 5em);left:calc(50% - 13em);border-radius:2em;overflow:visible;z-index:2}.layout-circling-balloons>ul>li:hover>:first-child{transform:translateY(-50%)}.layout-circling-balloons>ul>li:hover>:nth-child(2){margin-top:1em}.layout-circling-balloons>ul:hover>li{animation-play-state:paused}.layout-tall-figure-left,.layout-tall-figure-right{display:grid;grid-template-rows:auto 1fr}.layout-tall-figure-left{grid-template-columns:.5fr 1fr}.layout-tall-figure-left .span-columns,.layout-tall-figure-left h1,.layout-tall-figure-left h2,.layout-tall-figure-left h3,.layout-tall-figure-left h4,.layout-tall-figure-left h5,.layout-tall-figure-left h6,.layout-tall-figure-right .span-columns,.layout-tall-figure-right h1,.layout-tall-figure-right h2,.layout-tall-figure-right h3,.layout-tall-figure-right h4,.layout-tall-figure-right h5,.layout-tall-figure-right h6{grid-column:1/3}.layout-tall-figure-right{grid-template-columns:1fr .5fr}.layout-tall-figure-right>:nth-child(2){grid-column:2/3}.layout-tall-figure-right>:nth-child(3){grid-row:2/3}.layout-main-point,[data-bespoke-state=emphatic]{justify-content:center;align-items:center}.layout-main-point.bespoke-parent,.layout-main-point.bespoke-slide,[data-bespoke-state=emphatic].bespoke-parent,[data-bespoke-state=emphatic].bespoke-slide{background-color:var(--emphatic-color)}.emphatic h1,.emphatic h2,.emphatic h3,.emphatic h4,.emphatic h5,.emphatic h6,.layout-main-point.bespoke-slide h1,.layout-main-point.bespoke-slide h2,.layout-main-point.bespoke-slide h3,.layout-main-point.bespoke-slide h4,.layout-main-point.bespoke-slide h5,.layout-main-point.bespoke-slide h6,[data-bespoke-state=emphatic].bespoke-slide h1,[data-bespoke-state=emphatic].bespoke-slide h2,[data-bespoke-state=emphatic].bespoke-slide h3,[data-bespoke-state=emphatic].bespoke-slide h4,[data-bespoke-state=emphatic].bespoke-slide h5,[data-bespoke-state=emphatic].bespoke-slide h6{color:#fff}.full-page-video-caption{position:absolute;bottom:30px;font-size:.75em;left:50%;width:16em;text-align:center;margin-left:-8em;padding:0;background-color:rgba(255,255,8,.65);border-radius:.25em;box-shadow:3px 3px 3px var(--shadow-color)}@media screen{.bespoke-scale-parent{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;perspective:900px;pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}}.bespoke-backdrop{pointer-events:none}@media print{.bespoke-backdrop{display:none}}.emphatic{background-color:var(--emphatic-color);color:#fff}.emphatic code,.emphatic strong{color:var(--emphatic-accent-color)}.emphatic code{background-color:var(--inline-emphatic-code-bg-color)}.show-active-slide-and-previous .bespoke-before-1{transform:translate3d(calc(-1*var(--show-2-slides-x-distance)),0,var(--show-2-slides-z-distance)) rotateY(var(--show-2-slides-rotation));opacity:1}.show-active-slide-and-previous .bespoke-active{transform:translate3d(var(--show-2-slides-x-distance),0,var(--show-2-slides-z-distance)) rotateY(calc(-1*var(--show-2-slides-rotation)))}[data-bespoke-state=show-active-slide-and-previous].bespoke-before-1{transform:translate3d(calc(-1*var(--show-2-slides-x-distance)),0,var(--show-2-slides-z-distance)) rotateY(var(--show-2-slides-rotation));opacity:0}@media screen{.bespoke-slide .bespoke-bullet{opacity:1;transform:none;transition:all .4s ease}.bespoke-slide .bespoke-bullet-inactive{opacity:0;pointer-events:none;transform:translateX(40px);transition:all .2s ease}.bespoke-slide .bespoke-bullet-off .bespoke-bullet-inactive{display:list-item;opacity:initial;transform:initial}.bespoke-slide .bullet-old{color:gray}.bespoke-slide .bullet-no-anim{transition:none!important}.bespoke-slide .bullet-no-anim.bespoke-bullet-inactive{transform:none}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:3px;z-index:2}.bespoke-progress-bar{position:absolute;height:100%;transition:width .3s ease}.bespoke-progress-bar:before{content:\" \";position:absolute;display:block;width:100%;height:100%;background:#a6a6a6}.bespoke-progress-number{position:absolute;font-size:9px;min-width:2em;height:2em;right:1rem;top:1rem;box-sizing:content-box;background-color:rgba(204,204,204,.6);background-clip:content-box;color:$progress-bar-color;text-align:center;line-height:2em;padding:0;border:3px double rgba(204,204,204,.6)}.bespoke-simple-overview .bespoke-slide{position:absolute;opacity:1;outline:4px solid silver}.bespoke-simple-overview .bespoke-slide:hover{outline-color:#4682b4}.bespoke-simple-overview .bespoke-slide.bespoke-active{transform:translate3d(0,0,-2000px);outline-color:#4682b4;z-index:100}.bespoke-simple-overview .bespoke-slide.bespoke-after:not(.bespoke-after-1):not(.bespoke-after-2):not(.bespoke-after-3):not(.bespoke-after-4){transform:translate3d(7634.667338669354px,0,-2000px);display:none}.bespoke-simple-overview .bespoke-slide.bespoke-before:not(.bespoke-before-1):not(.bespoke-before-2):not(.bespoke-before-3):not(.bespoke-before-4){transform:translate3d(-7634.667338669354px,0,-2000px);display:none}.bespoke-simple-overview .bespoke-slide.bespoke-after-1{transform:translate3d(1090.6667626670505px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-1{transform:translate3d(-1090.6667626670505px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-2{transform:translate3d(2181.333525334101px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-2{transform:translate3d(-2181.333525334101px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-3{transform:translate3d(3272.0002880011516px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-3{transform:translate3d(-3272.0002880011516px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-4{transform:translate3d(4362.667050668202px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-4{transform:translate3d(-4362.667050668202px,0,-2000px)}.bespoke-simple-overview.bespoke-simple-overview-transitioning .bespoke-slide.bespoke-after-1,.bespoke-simple-overview.bespoke-simple-overview-transitioning .bespoke-slide.bespoke-before-1{transition-delay:.1s}.bespoke-simple-overview.bespoke-simple-overview-transitioning .bespoke-slide.bespoke-after-2,.bespoke-simple-overview.bespoke-simple-overview-transitioning .bespoke-slide.bespoke-before-2{transition-delay:.2s}.bespoke-simple-overview.bespoke-simple-overview-transitioning .bespoke-slide.bespoke-after-3,.bespoke-simple-overview.bespoke-simple-overview-transitioning .bespoke-slide.bespoke-before-3{transition-delay:.3s}.bespoke-simple-overview.bespoke-simple-overview-transitioning .bespoke-slide.bespoke-after-4,.bespoke-simple-overview.bespoke-simple-overview-transitioning .bespoke-slide.bespoke-before-4{transition-delay:.4s}.bespoke-simple-overview .bespoke-bullet-inactive{display:list-item;opacity:initial;transform:initial}}:root{--search-result-bg:#ff0;--search-result-focused-bg:#ffa500}#bespoke-search-parent{--search-parent-bg:rgba(0,0,0,0.4);--search-margin:0.5em;--search-bg:rgba(255,255,255,0.2);--search-input-length:12em;--search-input-position:flex-end;--search-input-color:#333;--search-info-color:#333;--search-info-kbd-color:#000;--search-info-kbd-bg:#ccc;--search-no-result-color:#8b0000;position:absolute;left:0;top:0;right:0;bottom:0;display:flex;flex-direction:column;justify-content:var(--search-input-position);align-items:center;pointer-events:none;opacity:0;transition:all .2s ease;background-color:var(--search-parent-bg);font-size:1.25rem;perspective:900px}#bespoke-search-parent.bespoke-search-searching{opacity:1;pointer-events:auto;z-index:1000}#bespoke-search{display:flex;flex-direction:row;justify-content:space-between;flex-wrap:wrap;align-items:baseline;margin:var(--search-margin);padding:1.25em;border-radius:10px;width:calc(var(--search-input-length) + 8em);background-color:var(--search-bg);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);transition:all .3s cubic-bezier(.06,.99,.46,1.16);transform:translateY(-60px) rotateX(90deg);opacity:0}#bespoke-search-results-count{font-size:.75em;font-family:monospace}.bespoke-search-no-result>#bespoke-search-input{outline:1px solid currentColor;border-color:transparent;color:var(--search-no-result-color)}.bespoke-search-result{background-color:var(--search-result-bg,#ff0)}.bespoke-search-result-focused{background-color:var(--search-result-focused-bg,orange)}#bespoke-search-input{width:var(--search-input-length);padding:.15em .25em;border:1px solid currentColor;border-radius:5px;color:var(--search-input-color);font-size:1em}.bespoke-search-searching #bespoke-search{transform:scale(1);opacity:1}#bespoke-search-info{width:100%;margin-top:1em;font-size:.9em;text-align:left;color:var(--search-info-color)}#bespoke-search-info kbd{margin:0 .1em;padding:.1em .6em;border-radius:3px;border:1px solid #ccc;color:var(--search-info-kbd-color);line-height:1.4;font-size:.7em;display:inline-block;box-shadow:0 1px 0 rgba(0,0,0,.6),inset 0 0 0 2px #ccc;background-color:var(--search-info-kbd-bg)}#bespoke-search-info kbd:last-of-type{margin-right:1em}#bespoke-search-info summary{display:list-item;counter-increment:list-item 0;list-style:inside disclosure-closed;cursor:pointer}.bespoke-search-info-pair{margin-right:1em;white-space:nowrap;display:inline-flex;align-items:center;margin-bottom:.25em}#bespoke-search-info[open]>summary:first-of-type{list-style-type:disclosure-open}.bespoke-bullets-off .bespoke-bullet.bespoke-bullet-inactive{opacity:1;transform:none}.bespoke-search-shaking{animation:shaking .5s ease-out 0s 1}@media (prefers-color-scheme:dark){#bespoke-search-parent{--search-parent-bg:rgba(255,255,255,0.4);--search-bg:rgba(0,0,0,0.2);--search-info-color:#eee}}@media print{:root{--slide-spacing:64px}.bespoke-parent,.bespoke-scale-parent{position:relative;display:grid;grid-template-columns:1fr 1fr;column-gap:var(--slide-spacing);row-gap:var(--slide-spacing);transform-origin:left top;width:2197.333333333333px;height:100vh;overflow:visible;transform:scale(.361210916796117)}.bespoke-slide{position:relative;width:1066.6666666666665px;height:600px;outline:2px solid #000!important;page-break-inside:avoid!important}.bespoke-slide .bespoke-bullet-inactive{opacity:1!important;transform:none!important;transition:none!important}@page{margin:75.84px!important}.bespoke-scale-parent{transform:none!important;zoom:1!important}}@media print and (orientation:landscape){.bespoke-parent,.bespoke-scale-parent{--slide-spacing:110px;row-gap:calc(var(--slide-spacing)*1.5);grid-template-columns:repeat(3,1fr);width:2197.333333333333px;transform:scale(.361210916796117)}}"; (require("browserify-css").createStyle(css, { "href": "dist\\theme\\theme.css" }, { "insertAt": "bottom" })); module.exports = css;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZW1vL3NyYy9tYWluLmpzIiwiZGlzdC90aGVtZS9mb250cy5jc3MiLCJkaXN0L3RoZW1lL3RoZW1lLmNzcyIsImxpYi9iZXNwb2tlLXRoZW1lLWJlYWNoZGF5LmpzIiwibm9kZV9tb2R1bGVzL2Jlc3Bva2UtYnVsbGV0cy9saWIvYmVzcG9rZS1idWxsZXRzLmpzIiwibm9kZV9tb2R1bGVzL2Jlc3Bva2UtY2xhc3Nlcy9saWIvYmVzcG9rZS1jbGFzc2VzLmpzIiwibm9kZV9tb2R1bGVzL2Jlc3Bva2UtaGFzaC9saWIvYmVzcG9rZS1oYXNoLmpzIiwibm9kZV9tb2R1bGVzL2Jlc3Bva2Uta2V5cy9saWIvYmVzcG9rZS1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2Jlc3Bva2UtcHJvZ3Jlc3MvbGliL2Jlc3Bva2UtcHJvZ3Jlc3MuanMiLCJub2RlX21vZHVsZXMvYmVzcG9rZS1zY2FsZS9saWIvYmVzcG9rZS1zY2FsZS5qcyIsIm5vZGVfbW9kdWxlcy9iZXNwb2tlLXNlYXJjaC9kaXN0L2Jlc3Bva2Utc2VhcmNoLmpzIiwibm9kZV9tb2R1bGVzL2Jlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3L2Rpc3QvYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcubWluLmpzIiwibm9kZV9tb2R1bGVzL2Jlc3Bva2Utc3RhdGUvbGliL2Jlc3Bva2Utc3RhdGUuanMiLCJub2RlX21vZHVsZXMvYmVzcG9rZS10b3VjaC9saWIvYmVzcG9rZS10b3VjaC5qcyIsIm5vZGVfbW9kdWxlcy9iZXNwb2tlL2xpYi9iZXNwb2tlLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnktY3NzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDeHJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGJlc3Bva2UgPSByZXF1aXJlKCdiZXNwb2tlJyksXHJcbiAgYmVhY2hkYXkgPSByZXF1aXJlKCcuLi8uLi9saWIvYmVzcG9rZS10aGVtZS1iZWFjaGRheS5qcycpLFxyXG4gIGtleXMgPSByZXF1aXJlKCdiZXNwb2tlLWtleXMnKSxcclxuICB0b3VjaCA9IHJlcXVpcmUoJ2Jlc3Bva2UtdG91Y2gnKSxcclxuICBidWxsZXRzID0gcmVxdWlyZSgnYmVzcG9rZS1idWxsZXRzJyksXHJcbiAgc2NhbGUgPSByZXF1aXJlKCdiZXNwb2tlLXNjYWxlJyksXHJcbiAgcHJvZ3Jlc3MgPSByZXF1aXJlKCdiZXNwb2tlLXByb2dyZXNzJyksXHJcbiAgb3ZlcnZpZXcgPSByZXF1aXJlKCdiZXNwb2tlLXNpbXBsZS1vdmVydmlldycpLFxyXG4gIHNlYXJjaCA9IHJlcXVpcmUoJ2Jlc3Bva2Utc2VhcmNoJyksXHJcbiAgaGFzaCA9IHJlcXVpcmUoJ2Jlc3Bva2UtaGFzaCcpLFxyXG4gIHN0YXRlID0gcmVxdWlyZSgnYmVzcG9rZS1zdGF0ZScpO1xyXG5cclxuYmVzcG9rZS5mcm9tKCdhcnRpY2xlJywgW1xyXG4gIGJlYWNoZGF5KHsgaW5zZXJ0Rm9udHM6IHRydWUgfSksXHJcbiAga2V5cygpLFxyXG4gIHRvdWNoKCksXHJcbiAgc3RhdGUoKSxcclxuICBzY2FsZSgndHJhbnNmb3JtJyksXHJcbiAgcHJvZ3Jlc3MoKSxcclxuICBoYXNoKCksXHJcbiAgb3ZlcnZpZXcoeyBpbnNlcnRTdHlsZXM6IGZhbHNlIH0pLFxyXG4gIGJ1bGxldHMoJy5idWxsZXQsIC5maWd1cmUtc3RlcCcpLFxyXG4gIHNlYXJjaCh7IGluc2VydFN0eWxlczogZmFsc2UgfSksXHJcbiAgZGVjayA9PiB7XHJcbiAgICAvLyBhcyB3ZSdyZSB1c2luZyBiZXNwb2tlLXNjYWxlIHdpdGggJ3RyYW5zZm9ybScsIGl0IGNyZWF0ZXMgYVxyXG4gICAgLy8gLmJlc3Bva2UtcGFyZW50IGFuZCB3cmFwcyBldmVyeXRoaW5nIGluc2lkZSBpdCwgaW5jbHVkaW5nIHRoZVxyXG4gICAgLy8gYmVzcG9rZS1wcm9ncmVzcyBiYXJcclxuICAgIC8vIHRvIHByZXZlbnQgaXQgZnJvbSBiZWluZyBzY2FsZWQgdXAvZG93biwgd2UgbmVlZCB0byB1bndyYXAgaXRcclxuICAgIC8vIHZhciBiYXIgPSBkZWNrLnF1ZXJ5U2VsZWN0b3IoJ2Jlc3Bva2UtcHJvZ3Jlc3MtcGFyZW50Jyk7XHJcbiAgICAvLyBkZWNrLnBhcmVudC5hcHBlbmRDaGlsZChiYXIpO1xyXG4gIH0sXHJcbiAgZGVjayA9PiB7XHJcbiAgICAvLyBtYWtlcyB0aGUgY29udGVudCB2aXNpYmxlIHRvIGF2b2lkIEZvVUNcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBkZWNrLnBhcmVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgfSwgMzAwKVxyXG4gIH1cclxuXSk7XHJcbiIsInZhciBjc3MgPSBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANzAwJmZhbWlseT1Tb3VyY2UrQ29kZStQcm8mZGlzcGxheT1zd2FwKTtcIjsgKHJlcXVpcmUoXCJicm93c2VyaWZ5LWNzc1wiKS5jcmVhdGVTdHlsZShjc3MsIHsgXCJocmVmXCI6IFwiZGlzdFxcXFx0aGVtZVxcXFxmb250cy5jc3NcIiB9LCB7IFwiaW5zZXJ0QXRcIjogXCJib3R0b21cIiB9KSk7IG1vZHVsZS5leHBvcnRzID0gY3NzOyIsInZhciBjc3MgPSBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9Aa2V5ZnJhbWVzIGZsb2F0aW5nezAle3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApfXRve3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0yNSUpfX1Aa2V5ZnJhbWVzIGZsb2F0ZWQtZWxlbWVudC1zaGFkb3d7MCV7dHJhbnNmb3JtOnNjYWxlWCgxKX10b3t0cmFuc2Zvcm06c2NhbGVYKC41KX19QGtleWZyYW1lcyBib3VuY2luZy1sZWZ0e3Rve3RyYW5zZm9ybTp0cmFuc2xhdGVYKDUlKSBzY2FsZVgoLjk2KX19QGtleWZyYW1lcyBjb29sLXJvdGF0aW9uLXh7MCV7dHJhbnNmb3JtOnJvdGF0ZVgoLTEwZGVnKX10b3t0cmFuc2Zvcm06cm90YXRlWCgxMGRlZyl9fUBrZXlmcmFtZXMgY2lyY2xpbmd7MCV7dHJhbnNmb3JtOnJvdGF0ZSgwdHVybikgdHJhbnNsYXRlKDE4MHB4KSByb3RhdGUoMHR1cm4pfXRve3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pIHRyYW5zbGF0ZSgxODBweCkgcm90YXRlKC0xdHVybil9fUBrZXlmcmFtZXMgc2hha2luZ3swJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoNHB4LDAsMCl9MTAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtN3B4LC01cHgsMCl9MjAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCg4cHgsNXB4LDApfTMwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTdweCwzcHgsMCl9NDAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCg5cHgsLTNweCwwKX01MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC00cHgsM3B4LDApfTYwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoNHB4LC00cHgsMCl9NzAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNXB4LC00cHgsMCl9ODAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCg0cHgsMnB4LDApfTkwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTNweCwtMXB4LDApfXRve3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCl9fWh0bWx7bGluZS1oZWlnaHQ6MS4xNTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6MTAwJX1ib2R5LGZpZ3VyZSxmaWd1cmUuZW1iZWRkZWQtY2FwdGlvbiBwLGZpZ3VyZT5we21hcmdpbjowfWRldGFpbHMsbWFpbixvbCx1bHtkaXNwbGF5OmJsb2NrfWgxe2NvbG9yOnZhcigtLXJlZ3VsYXItdGl0bGUtY29sb3IpO2ZvbnQtZmFtaWx5OidBbWF0aWMgU0MnLGN1cnNpdmU7Zm9udC1zaXplOjMuNWVtfWhye2JveC1zaXppbmc6Y29udGVudC1ib3g7aGVpZ2h0OjA7b3ZlcmZsb3c6dmlzaWJsZX1jb2RlLHByZSxzYW1we2ZvbnQtZmFtaWx5Om1vbm9zcGFjZSxtb25vc3BhY2V9cHJlLHNhbXB7Zm9udC1zaXplOjFlbX1he2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9YWJiclt0aXRsZV17LXdlYmtpdC10ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lIGRvdHRlZDt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lIGRvdHRlZDtib3JkZXItYm90dG9tOmluaXRpYWx9Yntmb250LXdlaWdodDpib2xkZXJ9c21hbGx7Zm9udC1zaXplOjgwJX1zdWIsc3Vwe2ZvbnQtc2l6ZTo3NSU7bGluZS1oZWlnaHQ6MDtwb3NpdGlvbjpyZWxhdGl2ZTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1zdWJ7Ym90dG9tOi0uMjVlbX1zdXB7dG9wOi0uNWVtfWltZ3tib3JkZXItc3R5bGU6bm9uZX1idXR0b24saW5wdXQsb3B0Z3JvdXAsc2VsZWN0LHRleHRhcmVhe2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjEwMCU7bGluZS1oZWlnaHQ6MS4xNTttYXJnaW46MH1idXR0b24saW5wdXR7b3ZlcmZsb3c6dmlzaWJsZX1idXR0b24sc2VsZWN0e3RleHQtdHJhbnNmb3JtOm5vbmV9W3R5cGU9YnV0dG9uXSxbdHlwZT1yZXNldF0sW3R5cGU9c3VibWl0XSxidXR0b257LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbn1bdHlwZT1idXR0b25dOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXJlc2V0XTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1zdWJtaXRdOjotbW96LWZvY3VzLWlubmVyLGJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcntib3JkZXItc3R5bGU6bm9uZTtwYWRkaW5nOjB9W3R5cGU9YnV0dG9uXTotbW96LWZvY3VzcmluZyxbdHlwZT1yZXNldF06LW1vei1mb2N1c3JpbmcsW3R5cGU9c3VibWl0XTotbW96LWZvY3VzcmluZyxidXR0b246LW1vei1mb2N1c3Jpbmd7b3V0bGluZToxcHggZG90dGVkIEJ1dHRvblRleHR9ZmllbGRzZXR7cGFkZGluZzouMzVlbSAuNzVlbSAuNjI1ZW19bGVnZW5ke2NvbG9yOmluaGVyaXQ7ZGlzcGxheTp0YWJsZTttYXgtd2lkdGg6MTAwJTt3aGl0ZS1zcGFjZTpub3JtYWx9cHJvZ3Jlc3N7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9dGV4dGFyZWF7b3ZlcmZsb3c6YXV0b31bdHlwZT1jaGVja2JveF0sW3R5cGU9cmFkaW9dLGxlZ2VuZHtib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzowfVt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbntoZWlnaHQ6YXV0b31bdHlwZT1zZWFyY2hdey13ZWJraXQtYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7b3V0bGluZS1vZmZzZXQ6LTJweH1bdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lfTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b257LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbjtmb250OmluaGVyaXR9c3VtbWFyeXtkaXNwbGF5Omxpc3QtaXRlbX1baGlkZGVuXSx0ZW1wbGF0ZXtkaXNwbGF5Om5vbmV9Kntib3gtc2l6aW5nOmJvcmRlci1ib3h9OnJvb3R7LS1zbGlkZS13aWR0aDoxMDY2LjY2NjY2NjY2NjY2NjVweDstLXNsaWRlLWhlaWdodDo2MDBweDstLXByZXNlbnRhdGlvbi1jb2xvcjojZmZmOy0tYWNjZW50LWNvbG9yOiMwMGZkYzg7LS1hbHRlcm5hdGUtY29sb3I6IzdiOWMwMjstLWVtcGhhdGljLWNvbG9yOiM3YzdjZTA7LS1saW5rLWNvbG9yOiNkYjQ0Mzc7LS10ZXh0LWNvbG9yOiMyNTI1MjU7LS1iaWctdGl0bGUtY29sb3I6IzZlOGFlNDstLXJlZ3VsYXItdGl0bGUtY29sb3I6IzAwMDstLWlubGluZS1jb2RlLWJnLWNvbG9yOiNkZGQ7LS1pbmxpbmUtZW1waGF0aWMtY29kZS1iZy1jb2xvcjojZGRkOy0tYmxvY2stY29kZS1iZy1jb2xvcjojZmFmYWZhOy0tYmxvY2stY29kZS10ZXh0LWNvbG9yOiMzODNhNDI7LS1zaGFkb3ctY29sb3I6cmdiYSgwLDAsMCwwLjIpOy0tYWNjZW50LW1vcmUtY29sb3I6IzAwNjA0YzstLWNpcmNsaW5nLWJhbGxvb25zLWJnOiNmZmQ3MDA7LS1ub3RlLWljb24tYmc6I2ZmZjstLW5vdGUtaW5mby1iZy1jb2xvci1zdGFydDojZmZmZmUwOy0tbm90ZS1pbmZvLWJnLWNvbG9yLWVuZDojYTlkYmUwOy0tbm90ZS1pbmZvLWFjY2VudC1jb2xvcjokbm90ZS1pbmZvLWJnLWFjY2VudC1jb2xvcjstLW5vdGUtd2FybmluZy1iZy1jb2xvci1zdGFydDojZmZmZmUwOy0tbm90ZS13YXJuaW5nLWJnLWNvbG9yLWVuZDojZmZmMTc2Oy0tbm90ZS13YXJuaW5nLWFjY2VudC1jb2xvcjojYjg4NjBiOy0tcmVzdWx0LWJnLWNvbG9yLXN0YXJ0OiNmNmZiZmY7LS1yZXN1bHQtYmctY29sb3ItZW5kOiNlM2ViZjE7LS1yZXN1bHQtYWNjZW50LWNvbG9yOiMzMDYzYTk7LS1kaWQteW91LWtub3ctYWNjZW50LWNvbG9yOiM4MDAwODA7LS10YWJsZS1ib3JkZXItY29sb3I6IzAwMDstLXRhYmxlLWhlYWQtYmc6IzMzMzstLXRhYmxlLWZvb3QtYmc6I2RkZDstLXRhYmxlLXJvdy1ib3JkZXItY29sb3I6I2NjYzstLXRhYmxlLXJvdy1iZy1ldmVuOnJnYmEoMjM0LDIzNCwyMzQsMC43MDIpOy0tdGFibGUtaGVhZC1jb2xvcjojZmZmOy0tdGFibGUtZm9vdC1jb2xvcjojMDAwOy0tcXVvdGUtYmc6I2Y1ZjVmNTstLXF1b3RlLWNvbG9yOiMzODM4Mzg7LS1xdW90ZS1ib3JkZXItY29sb3I6I2MwYzBjMDstLXF1b3RlLXF1b3Rlcy1jb2xvcjojN2E3YTdhOy0tcXVvdGUtY2l0ZS1jb2xvcjojOTk5Oy0tZmlnY2FwdGlvbi1iZzojZjVmNWY1Oy0tZW1waGF0aWMtYWNjZW50LWNvbG9yOiMzODA4OGU7LS1idXR0b24tY29sb3I6Y3VycmVudENvbG9yOy0tdHJhbnNpdGlvbi1kdXJhdGlvbjo0MDBtczstLXRyYW5zaXRpb24tZWFzaW5nOmVhc2U7LS1kZWZpbml0aW9uLWxpc3Qtd2lkdGg6MTBlbTstLWRlZmluaXRpb24tbGlzdC1zcGFjaW5nOjAuNWVtOy0tc2hvdy0yLXNsaWRlcy1yb3RhdGlvbjoyNWRlZzstLXNob3ctMi1zbGlkZXMtei1kaXN0YW5jZTotNzUwcHg7LS1zaG93LTItc2xpZGVzLXgtZGlzdGFuY2U6MzgwcHg7LS1sYXlvdXQtY29sdW1uLWdhcDoxZW19QG1lZGlhIHNjcmVlbiBhbmQgKHByZWZlcnMtY29sb3Itc2NoZW1lOmRhcmspezpyb290ey0tcHJlc2VudGF0aW9uLWNvbG9yOiMwYzBjMGM7LS1hY2NlbnQtY29sb3I6IzAwNmQ1NjstLWFsdGVybmF0ZS1jb2xvcjojYzhmZjAwOy0tZW1waGF0aWMtY29sb3I6IzAwMDA0YzstLWxpbmstY29sb3I6I2ZmNGQzZTstLXRleHQtY29sb3I6I2ZmZjstLWJpZy10aXRsZS1jb2xvcjojNjI4M2VjOy0tcmVndWxhci10aXRsZS1jb2xvcjojZmZmOy0taW5saW5lLWNvZGUtYmctY29sb3I6IzQ0NDstLWlubGluZS1lbXBoYXRpYy1jb2RlLWJnLWNvbG9yOiNjMWJmYmY7LS1ibG9jay1jb2RlLWJnLWNvbG9yOiMyMzI0MWY7LS1ibG9jay1jb2RlLXRleHQtY29sb3I6I2Y4ZjhmMjstLXNoYWRvdy1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDAuMik7LS1hY2NlbnQtbW9yZS1jb2xvcjojOWRmZmViOy0tY2lyY2xpbmctYmFsbG9vbnMtYmc6I2QyOWUyNTstLW5vdGUtaWNvbi1iZzojZmZmOy0tbm90ZS1pbmZvLWJnLWNvbG9yLXN0YXJ0OiM2MWJkY2E7LS1ub3RlLWluZm8tYmctY29sb3ItZW5kOiMwMTU4NjE7LS1ub3RlLWluZm8tYWNjZW50LWNvbG9yOiMwMDMxMzU7LS1ub3RlLXdhcm5pbmctYmctY29sb3Itc3RhcnQ6I2NjY2MwNjstLW5vdGUtd2FybmluZy1iZy1jb2xvci1lbmQ6IzdiNmUwMDstLW5vdGUtd2FybmluZy1hY2NlbnQtY29sb3I6IzU0NGEwMDstLXJlc3VsdC1iZy1jb2xvci1zdGFydDojMjQzODQ4Oy0tcmVzdWx0LWJnLWNvbG9yLWVuZDojMGYxMjFmOy0tcmVzdWx0LWFjY2VudC1jb2xvcjojZjlmZmVlOy0tZGlkLXlvdS1rbm93LWFjY2VudC1jb2xvcjojZmYyY2ZmOy0tdGFibGUtYm9yZGVyLWNvbG9yOiNmZmY7LS10YWJsZS1oZWFkLWJnOiNiZmJmYmY7LS10YWJsZS1mb290LWJnOiMyYjJiMmI7LS10YWJsZS1yb3ctYm9yZGVyLWNvbG9yOiMzMTMxMzE7LS10YWJsZS1yb3ctYmctZXZlbjpyZ2JhKDQxLDQxLDQxLDAuNzAyKTstLXRhYmxlLWhlYWQtY29sb3I6IzAwMDstLXRhYmxlLWZvb3QtY29sb3I6I2ZmZjstLXF1b3RlLWJnOiMyMzIyMjc7LS1xdW90ZS1jb2xvcjojZDhkOGQ4Oy0tcXVvdGUtYm9yZGVyLWNvbG9yOiM5MThjYjU7LS1xdW90ZS1xdW90ZXMtY29sb3I6IzRkNDZjNzstLXF1b3RlLWNpdGUtY29sb3I6IzYwODRmZjstLWZpZ2NhcHRpb24tYmc6IzIzMjMyMzstLWVtcGhhdGljLWFjY2VudC1jb2xvcjojNjczNGMzOy0tYnV0dG9uLWNvbG9yOiMzMzN9fUBtZWRpYSBzY3JlZW57LmJlc3Bva2UtcGFyZW50e3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO3otaW5kZXg6MTtwZXJzcGVjdGl2ZTo5MDBweDtvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1wcmVzZW50YXRpb24tY29sb3IpO2NvbG9yOnZhcigtLXRleHQtY29sb3IpO2ZvbnQtc2l6ZToyNHB4fS5iZXNwb2tlLXBhcmVudDpub3QoLmVtcGhhdGljKXt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgdmFyKC0tdHJhbnNpdGlvbi1kdXJhdGlvbikgdmFyKC0tdHJhbnNpdGlvbi1lYXNpbmcpfS5iZXNwb2tlLXNsaWRle3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwNjYuNjY2NjY2NjY2NjY2NXB4O2hlaWdodDo2MDBweDt0b3A6NTAlO2xlZnQ6NTAlO21hcmdpbi1sZWZ0Oi01MzMuMzMzMzMzMzMzMzMzM3B4O21hcmdpbi10b3A6LTMwMHB4O292ZXJmbG93OmhpZGRlbjtjb250YWluOnNpemUgbGF5b3V0IHN0eWxlO2NvbnRlbnQtdmlzaWJpbGl0eTphdXRvfS5iZXNwb2tlLWluYWN0aXZle29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lfS5iZXNwb2tlLWluYWN0aXZlIC5iZXNwb2tlLWJ1bGxldC1pbmFjdGl2ZXt0cmFuc2l0aW9uOm9wYWNpdHkgLjRzIGVhc2V9LmJlc3Bva2UtaW5hY3RpdmU6bm90KC5iZXNwb2tlLWFmdGVyLTEpOm5vdCguYmVzcG9rZS1iZWZvcmUtMSk6bm90KC5iZXNwb2tlLWFmdGVyLTIpOm5vdCguYmVzcG9rZS1iZWZvcmUtMik6bm90KC5iZXNwb2tlLWFmdGVyLTMpOm5vdCguYmVzcG9rZS1iZWZvcmUtMyl7ZGlzcGxheTpub25lfX1oMntmb250LXNpemU6MS41ZW19aDMsb2wuY29sdW1ucy0zPmxpPmgxLG9sLmNvbHVtbnMtMz5saT5oMixvbC5jb2x1bW5zLTM+bGk+aDMsb2wuY29sdW1ucy0zPmxpPmg0LG9sLmNvbHVtbnMtMz5saT5oNSxvbC5jb2x1bW5zLTM+bGk+aDYsdWwuY29sdW1ucy0zPmxpPmgxLHVsLmNvbHVtbnMtMz5saT5oMix1bC5jb2x1bW5zLTM+bGk+aDMsdWwuY29sdW1ucy0zPmxpPmg0LHVsLmNvbHVtbnMtMz5saT5oNSx1bC5jb2x1bW5zLTM+bGk+aDZ7Zm9udC1zaXplOjEuMjVlbX1oNCxoNSxoNntmb250LXNpemU6MWVtfWgyLGgzLGg0LGg1LGg2e2ZvbnQtZmFtaWx5OidTb3VyY2UgQ29kZSBQcm8nLG1vbm9zcGFjZTtjb2xvcjp2YXIoLS1yZWd1bGFyLXRpdGxlLWNvbG9yKX1oMSxoMixoMyxoNCxoNSxoNntmb250LXdlaWdodDo0MDA7bWFyZ2luOjAgMCAuMjVlbTtsaW5lLWhlaWdodDoxZW19bGkscHtmb250LXNpemU6MjRweDtsaW5lLWhlaWdodDoxLjVlbX1zdHJvbmd7Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOiMwMGIxOGN9YXJ0aWNsZXtmb250LWZhbWlseTonU291cmNlIENvZGUgUHJvJyxtb25vc3BhY2V9YTpsaW5rLGE6dmlzaXRlZHtjb2xvcjp2YXIoLS1saW5rLWNvbG9yKTt0ZXh0LWRlY29yYXRpb246bm9uZX1hOmhvdmVye3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9Y29kZXtmb250LXNpemU6Ljc1ZW07YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pbmxpbmUtY29kZS1iZy1jb2xvcik7Y29sb3I6aW5oZXJpdDtib3JkZXItcmFkaXVzOjNweH1wcmU+Y29kZXtmb250LXNpemU6LjgzMzMzZW07Y29sb3I6aW5oZXJpdH1wcmV7Y29sb3I6dmFyKC0tYmxvY2stY29kZS10ZXh0LWNvbG9yKTtiYWNrZ3JvdW5kOnZhcigtLWJsb2NrLWNvZGUtYmctY29sb3IpO2JvcmRlci1yYWRpdXM6LjE1ZW07cGFkZGluZzouNWVtO292ZXJmbG93LXg6YXV0bztvdXRsaW5lOjFweCBzb2xpZCBzaWx2ZXI7Ym94LXNoYWRvdzozcHggM3B4IDEwcHggdmFyKC0tc2hhZG93LWNvbG9yKTttYXgtd2lkdGg6MTAyNi42NjY2NjY2NjY2NjY1cHh9cHJlIGNvZGUgc3Bhbnt3b3JkLXdyYXA6YnJlYWstd29yZDt3b3JkLWJyZWFrOmJyZWFrLWFsbH1we3RleHQtYWxpZ246anVzdGlmeX1oMT5jb2RlLGgyPmNvZGUsaDM+Y29kZSxoND5jb2RlLGg1PmNvZGUsaDY+Y29kZSxwcmU+Y29kZXtiYWNrZ3JvdW5kLWNvbG9yOmluaGVyaXQ7Ym9yZGVyLXJhZGl1czppbmhlcml0fW9sLm5vLWxpc3QtaWNvbix1bC5uby1saXN0LWljb257bGlzdC1zdHlsZS10eXBlOm5vbmV9b2wuY29sdW1ucy0zLHVsLmNvbHVtbnMtM3tkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93fW9sLmNvbHVtbnMtMz5saSx1bC5jb2x1bW5zLTM+bGl7ZmxleDoxfW9sLmNvbHVtbnMtMz5saTpub3QoOmxhc3Qtb2YtdHlwZSksdWwuY29sdW1ucy0zPmxpOm5vdCg6bGFzdC1vZi10eXBlKXttYXJnaW4tcmlnaHQ6MWVtfWRkLGR0e21hcmdpbi1ib3R0b206LjVlbX1kdHtmbG9hdDpsZWZ0O2NsZWFyOmxlZnQ7d2lkdGg6dmFyKC0tZGVmaW5pdGlvbi1saXN0LXdpZHRoKTtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7dGV4dC1hbGlnbjpyaWdodDtmb250LXdlaWdodDo3MDA7cGFkZGluZy1yaWdodDoxZW07cG9zaXRpb246cmVsYXRpdmV9ZGR7bWFyZ2luLWxlZnQ6Y2FsYyh2YXIoLS1kZWZpbml0aW9uLWxpc3Qtd2lkdGgpICsgdmFyKC0tZGVmaW5pdGlvbi1saXN0LXNwYWNpbmcpKX1kbC53aWR0aC0xMHstLWRlZmluaXRpb24tbGlzdC13aWR0aDoxMCV9ZGwud2lkdGgtMjB7LS1kZWZpbml0aW9uLWxpc3Qtd2lkdGg6MjAlfWRsLndpZHRoLTMwey0tZGVmaW5pdGlvbi1saXN0LXdpZHRoOjMwJX1kbC53aWR0aC00MHstLWRlZmluaXRpb24tbGlzdC13aWR0aDo0MCV9ZGwud2lkdGgtNTB7LS1kZWZpbml0aW9uLWxpc3Qtd2lkdGg6NTAlfWRlbHtjb2xvcjpncmF5fWJ1dHRvbntjb2xvcjp2YXIoLS1idXR0b24tY29sb3IpfXRhYmxlLHRoZWFke2JvcmRlci1ib3R0b206M3B4IHNvbGlkIHZhcigtLXRhYmxlLWJvcmRlci1jb2xvcil9dGFibGV7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2JvcmRlci1zcGFjaW5nOjA7Ym9yZGVyLXRvcDozcHggc29saWQgdmFyKC0tdGFibGUtYm9yZGVyLWNvbG9yKTtib3JkZXItbGVmdDpub25lO2JvcmRlci1yaWdodDpub25lO2JveC1zaGFkb3c6MTBweCAxMHB4IDEwcHggdmFyKC0tc2hhZG93LWNvbG9yKX10aGVhZHtiYWNrZ3JvdW5kOnZhcigtLXRhYmxlLWhlYWQtYmcpfXRoZWFkIGNvZGV7YmFja2dyb3VuZDp2YXIoLS10ZXh0LWNvbG9yKTtjb2xvcjp2YXIoLS1wcmVzZW50YXRpb24tY29sb3IpfXRmb290e2JhY2tncm91bmQ6dmFyKC0tdGFibGUtZm9vdC1iZyk7Y29sb3I6dmFyKC0tdGFibGUtZm9vdC1jb2xvcil9dHJ7Ym9yZGVyLXRvcDoxcHggc29saWQgdmFyKC0tdGFibGUtcm93LWJvcmRlci1jb2xvcik7YmFja2dyb3VuZC1jb2xvcjppbml0aWFsfXRyOm50aC1vZi10eXBlKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6dmFyKC0tdGFibGUtcm93LWJnLWV2ZW4pfXRoe2NvbG9yOnZhcigtLXRhYmxlLWhlYWQtY29sb3IpO2ZvbnQtd2VpZ2h0OjQwMDt0ZXh0LWFsaWduOmluaGVyaXR9dGQsdGh7cGFkZGluZzouM2VtIC41ZW19dGFibGUuYWVyby1yb3dzIHRke3BhZGRpbmctdG9wOi44ZW07cGFkZGluZy1ib3R0b206LjhlbX10YWJsZS5hZXJvLWNvbHVtbnMgdGR7cGFkZGluZy1sZWZ0OjFlbTtwYWRkaW5nLXJpZ2h0OjFlbX1ibG9ja3F1b3Rle21hcmdpbjouMjVlbSAwO3BhZGRpbmc6LjI1ZW0gNDBweDtiYWNrZ3JvdW5kOnZhcigtLXF1b3RlLWJnKTtib3gtc2hhZG93OjRweCA0cHggNHB4IHZhcigtLXNoYWRvdy1jb2xvcik7bGluZS1oZWlnaHQ6MS40NTtmb250LXNpemU6MThweDtmb250LWZhbWlseTpHZW9yZ2lhLHNlcmlmO2ZvbnQtc3R5bGU6aXRhbGljO2NvbG9yOnZhcigtLXF1b3RlLWNvbG9yKTtib3JkZXI6MXB4IHNvbGlkIHZhcigtLXF1b3RlLWJvcmRlci1jb2xvcil9YmxvY2txdW90ZS5jZW50ZXJlZHttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvfWJsb2NrcXVvdGU+cHttYXJnaW46LjVlbSBhdXRvfWJsb2NrcXVvdGU6OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcMjAxQ1xcXCI7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0uMjVlbTt0b3A6LS4yNWVtO2ZvbnQtc2l6ZTo4MHB4O2NvbG9yOnZhcigtLXF1b3RlLXF1b3Rlcy1jb2xvcil9YmxvY2txdW90ZSBjaXRle2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDo1cHg7Zm9udC1zaXplOjc1JTtjb2xvcjp2YXIoLS1xdW90ZS1jaXRlLWNvbG9yKX1ibG9ja3F1b3RlIGNpdGU6OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcMjAxNCBcXFxcMjAwOVxcXCJ9a2Jke3BhZGRpbmc6LjFlbSAuNmVtO2ZvbnQtc2l6ZTouOGVtO2JvcmRlcjoxcHggc29saWQgI2NjYztmb250LWZhbWlseTpDb25zb2xhcyxNZW5sbyxNb25hY28sbW9ub3NwYWNlO2JhY2tncm91bmQtY29sb3I6I2Y3ZjdmNztjb2xvcjojMzMzO2JveC1zaGFkb3c6MCA0cHggMCB2YXIoLS1zaGFkb3ctY29sb3IpLDAgMCAwIDJweCAjZmZmIGluc2V0O2JvcmRlci1yYWRpdXM6M3B4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbjowIC4xZW07dGV4dC1zaGFkb3c6MCAxcHggMCAjZmZmO2xpbmUtaGVpZ2h0OjEuMzt3aGl0ZS1zcGFjZTpub3dyYXA7dG9wOjA7dHJhbnNpdGlvbjp0b3AgNDBtcyBlYXNlLW91dCxib3gtc2hhZG93IDQwbXMgZWFzZS1vdXR9a2JkOmhvdmVye3RvcDo0cHg7Ym94LXNoYWRvdzowIDAgMCB2YXIoLS1zaGFkb3ctY29sb3IpLDAgMCAwIDJweCAjZmZmIGluc2V0fWZpZ2NhcHRpb257YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1maWdjYXB0aW9uLWJnKTtwYWRkaW5nOjVweDttYXJnaW4tYm90dG9tOjNweH1ibG9ja3F1b3RlLGZpZ3VyZS5lbWJlZGRlZC1jYXB0aW9uLGtiZHtwb3NpdGlvbjpyZWxhdGl2ZX1maWd1cmUuZW1iZWRkZWQtY2FwdGlvbiBmaWdjYXB0aW9ue3Bvc2l0aW9uOmFic29sdXRlO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjUpfWZpZ3VyZS5lbWJlZGRlZC1jYXB0aW9uIGZpZ2NhcHRpb24uY2FwdGlvbi1ib3R0b217Ym90dG9tOjFlbX1maWd1cmUuZW1iZWRkZWQtY2FwdGlvbiBmaWdjYXB0aW9uLmNhcHRpb24tdG9we3RvcDoxZW07bGVmdDowO3JpZ2h0OjB9ZmlndXJlLmVtYmVkZGVkLWNhcHRpb24gZmlnY2FwdGlvbi5jYXB0aW9uLWJvdHRvbXtsZWZ0OjA7cmlnaHQ6MH0ucHVzaC1yaWdodHtmbG9hdDpyaWdodDttYXJnaW4tbGVmdDoxLjI1ZW19LnB1c2gtbGVmdHtmbG9hdDpsZWZ0O21hcmdpbi1yaWdodDoxLjI1ZW19LnB1c2gtY29kZS1yaWdodCBwcmV7ZmxvYXQ6cmlnaHQ7Y2xlYXI6cmlnaHR9LnB1c2gtY29kZS1sZWZ0IHByZSwucHVzaC1jb2RlLWxlZnQ+Y29kZXtmbG9hdDpsZWZ0O2NsZWFyOmxlZnR9LnB1c2gtY29kZS1yaWdodC13aXRob3V0LWNsZWFyaW5nIHByZXtjbGVhcjpub25lO2Zsb2F0OnJpZ2h0fS5wdXNoLWNvZGUtcmlnaHQtd2l0aG91dC1jbGVhcmluZz5jb2Rle2Zsb2F0OnJpZ2h0fS5mbGV4LWFsaWduLWNlbnRlcnthbGlnbi1zZWxmOmNlbnRlcn0uZmxleC1hbGlnbi1zdGFydHthbGlnbi1zZWxmOmZsZXgtc3RhcnR9LmZsZXgtYWxpZ24tZW5ke2FsaWduLXNlbGY6ZmxleC1lbmR9LmFsdGVybmF0ZS1jb2xvcntjb2xvcjp2YXIoLS1hbHRlcm5hdGUtY29sb3IpfS5jb21wYWN0LWNvZGUgcHJlLC5jb21wYWN0LWNvZGV+cHJlLHByZS5jb21wYWN0LWNvZGV7bGluZS1oZWlnaHQ6MWVtfS5jb21wYWN0LWNvZGUtbWlkIHByZSwuY29tcGFjdC1jb2RlLW1pZH5wcmUscHJlLmNvbXBhY3QtY29kZS1taWR7bGluZS1oZWlnaHQ6MWVtO2ZvbnQtc2l6ZTo5MCV9LmNvbXBhY3QtY29kZS1tb3JlIHByZSwuY29tcGFjdC1jb2RlLW1vcmV+cHJlLHByZS5jb21wYWN0LWNvZGUtbW9yZXtsaW5lLWhlaWdodDoxZW07Zm9udC1zaXplOjc1JX0uZmlndXJlLXNsaWRlc3twb3NpdGlvbjpyZWxhdGl2ZX0uZmlndXJlLXNsaWRlcy5jbGVhbiAuYmVzcG9rZS1idWxsZXQ6bm90KC5iZXNwb2tlLWJ1bGxldC1jdXJyZW50KTpub3QoOmxhc3QtY2hpbGQpe3Zpc2liaWxpdHk6aGlkZGVuO29wYWNpdHk6MH0uZmlndXJlLXN0ZXA6bm90KDpmaXJzdC1jaGlsZCl7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowfWEuYm9va21hcmtsZXR7Ym9yZGVyLXJhZGl1czo1cHg7Ym9yZGVyOjJweCBzb2xpZCBzaWx2ZXI7cGFkZGluZzo0cHggN3B4O2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSk7dHJhbnNpdGlvbjphbGwgLjJzIGVhc2Utb3V0fWEuYm9va21hcmtsZXQ6aG92ZXJ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7YmFja2dyb3VuZC1jb2xvcjojYjY2YzdlO2NvbG9yOiNkZGQ7Ym9yZGVyLWNvbG9yOiMzMzM7Y3Vyc29yOm1vdmV9LmJhZGdle2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JhY2tncm91bmQtY29sb3I6dmFyKC0tcHJlc2VudGF0aW9uLWNvbG9yKTtib3JkZXItcmFkaXVzOjRweDtib3JkZXI6MXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO2NvbG9yOiNhOWE5YTk7Zm9udC1zaXplOjc1JTtsaW5lLWhlaWdodDoxZW07cGFkZGluZzouMWVtIC4yZW19LmJhZGdlLnR5cGUxe2NvbG9yOnRlYWw7Ym9yZGVyLWNvbG9yOnRlYWx9LmJhZGdlLnR5cGUye2NvbG9yOiM2NDk1ZWQ7Ym9yZGVyLWNvbG9yOiM2NDk1ZWR9aW5wdXQuc3dpdGNoey13ZWJraXQtYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZX1pbnB1dC5zd2l0Y2h+bGFiZWx7cG9zaXRpb246cmVsYXRpdmU7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9aW5wdXQuc3dpdGNofmxhYmVsOjphZnRlcixpbnB1dC5zd2l0Y2h+bGFiZWw6OmJlZm9yZXtjb250ZW50OicgJztkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6Y2FsYygoMTAwJSAtIC43NWVtKS8gMiArIC41ZW0pO21hcmdpbi1yaWdodDouMjVlbTtoZWlnaHQ6Ljc1ZW07d2lkdGg6MS41ZW07YmFja2dyb3VuZC1jb2xvcjojZjc3O2JvcmRlci1yYWRpdXM6NXB4O2JveC1zaGFkb3c6aW5zZXQgMCAuMWVtIDAgdmFyKC0tc2hhZG93LWNvbG9yKTt0cmFuc2l0aW9uOmFsbCAuMXMgZWFzZS1pbn1pbnB1dC5zd2l0Y2h+bGFiZWw6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt3aWR0aDouNzVlbTtoZWlnaHQ6LjU1ZW07dG9wOmNhbGMoKDEwMCUgLSAuNzVlbSkvIDIgKyAuMWVtKTtib3R0b206Y2FsYygoMTAwJSAtIC43NWVtKS8gMiArIC4xZW0pO21hcmdpbi1sZWZ0Oi4xZW07YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6LjE1ZW07Ym94LXNoYWRvdzppbnNldCAwIC0uMmVtIDAgdmFyKC0tc2hhZG93LWNvbG9yKX1pbnB1dC5zd2l0Y2g6Y2hlY2tlZH5sYWJlbDo6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6IzJhZTgyYX1pbnB1dC5zd2l0Y2g6Y2hlY2tlZH5sYWJlbDo6YWZ0ZXJ7bWFyZ2luLWxlZnQ6LjY1ZW19LmJlc3Bva2UtYWN0aXZlIC51bmRlcmxpbmUudXBvbi1hY3RpdmF0aW9uOjphZnRlciwuZnVsbC13aWR0aHt3aWR0aDoxMDAlfS5sYXJnZS13aWR0aHt3aWR0aDo4MCV9Lm1lZGl1bS13aWR0aHt3aWR0aDo2MCV9LnNtYWxsLXdpZHRoe3dpZHRoOjQwJX0uZnVsbC1oZWlnaHR7aGVpZ2h0OjEwMCV9Lmh1Z2UtaGVpZ2h0e2hlaWdodDo4MCV9LmxhcmdlLWhlaWdodHtoZWlnaHQ6NjAlfS5tZWRpdW0taGVpZ2h0e2hlaWdodDo0MCV9LnNtYWxsLWhlaWdodHtoZWlnaHQ6MjAlfS5ibG9ja3tkaXNwbGF5OmJsb2NrfS5mbG9hdGluZy1wb3J0cmFpdC1jb250YWluZXIgKiwucG9ydHJhaXQsLnBvcnRyYWl0IGltZ3tkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoxNTBweDtoZWlnaHQ6MTUwcHg7Ym9yZGVyLXJhZGl1czo1MCV9LmZsb2F0aW5nLXBvcnRyYWl0LWNvbnRhaW5lciAqIGZpZ2NhcHRpb24sLnBvcnRyYWl0IGZpZ2NhcHRpb24sLnBvcnRyYWl0IGltZyBmaWdjYXB0aW9ue2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9LmZsb2F0aW5nLXBvcnRyYWl0LWNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZX0uZmxvYXRpbmctcG9ydHJhaXQtY29udGFpbmVyICp7bWFyZ2luOjA7YW5pbWF0aW9uOmZsb2F0aW5nIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGFsdGVybmF0ZX0uZmxvYXRpbmctcG9ydHJhaXQtY29udGFpbmVyOjphZnRlcntjb250ZW50OlxcXCIgXFxcIjtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoyMCU7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOi0yMCU7YmFja2dyb3VuZDpyYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBjbG9zZXN0LXNpZGUscmdiYSgyMSwyMSwyMSwuMjUpIDAscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTt6LWluZGV4Oi0xO2FuaW1hdGlvbjpmbG9hdGVkLWVsZW1lbnQtc2hhZG93IDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGFsdGVybmF0ZX0uZmxpcHN7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjZzIGVhc2Utb3V0fS5mbGlwcyAqe21hcmdpbjowfS5mbGlwczpob3Zlcnt0cmFuc2Zvcm06cm90YXRlWSg3MjBkZWcpfS5wb3J0cmFpdHtzaGFwZS1vdXRzaWRlOmNpcmNsZSg1MCUpfS5jb250YWlue21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJX0uc2xpZGUtY29udGFpbnttYXgtd2lkdGg6dmFyKC0tc2xpZGUtd2lkdGgpO21heC1oZWlnaHQ6dmFyKC0tc2xpZGUtaGVpZ2h0KX0uaGFsZi13aWR0aHt3aWR0aDo1MCV9LnRocmVlLXF1YXJ0ZXItd2lkdGh7d2lkdGg6NzUlfS5mdWxsLXdpZHRoLXNsaWRlcywuZnVsbC13aWR0aC1zbGlkZXMgaW1ne21heC13aWR0aDoxMDAlfS5jZW50ZXJlZHttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvfS5jZW50ZXJlZC5pbWd7ZGlzcGxheTpibG9ja30uY2VudGVyLWFsaWduZWR7dGV4dC1hbGlnbjpjZW50ZXJ9LmVtb2ppe2hlaWdodDoxZW07d2lkdGg6MWVtO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0ub24tbGluZXtoZWlnaHQ6MWVtO2xpbmUtaGVpZ2h0OjFlbX0ubWFya2Rvd24taXQtY29udGFpbmVyPnAsLm5vLW1hcmdpbixkaXYuZGlkLXlvdS1rbm93PnAsZGl2LnJlc3VsdD5we21hcmdpbjowfS5uby1wYWRkaW5ne3BhZGRpbmc6MH1AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOmRhcmspey5pbnZlcnQtY29sb3JzLWRhcmstbW9kZXtmaWx0ZXI6aW52ZXJ0KDEpfX0ubm8tYnVsbGV0cywubm8tbGlzdC1pY29ue2xpc3Qtc3R5bGUtdHlwZTpub25lfS5ob3Jpem9udGFsLWxpc3R7ZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO2ZsZXgtZGlyZWN0aW9uOnJvdztqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn0ubXVsdGktY29sdW1uLWxpc3QtMiwubXVsdGktY29sdW1uLWxpc3QtM3twYWRkaW5nLWxlZnQ6MDtjb2x1bW4tY291bnQ6MjtsaXN0LXN0eWxlLXBvc2l0aW9uOmluc2lkZX0ubXVsdGktY29sdW1uLWxpc3QtM3tjb2x1bW4tY291bnQ6M30ubXVsdGktY29sdW1uLWxpc3QtNCwubXVsdGktY29sdW1uLWxpc3QtNXtwYWRkaW5nLWxlZnQ6MDtjb2x1bW4tY291bnQ6NDtsaXN0LXN0eWxlLXBvc2l0aW9uOmluc2lkZX0ubXVsdGktY29sdW1uLWxpc3QtNXtjb2x1bW4tY291bnQ6NX0ubm90ZXtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O2xpc3Qtc3R5bGUtdHlwZTpub25lO2JvcmRlci1yYWRpdXM6NXB4O2JveC1zaGFkb3c6M3B4IDNweCAzcHggdmFyKC0tc2hhZG93LWNvbG9yKTtwYWRkaW5nOi4zZW0gLjVlbX0ubm90ZT5wOmZpcnN0LW9mLXR5cGV7bWFyZ2luLXRvcDowfS5ub3RlOjpiZWZvcmV7bWFyZ2luLXJpZ2h0OjFyZW07d2lkdGg6MS41ZW07aGVpZ2h0OjEuNWVtO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0OmxlZnQ7c2hhcGUtb3V0c2lkZTpjaXJjbGUoNTAlKTt0ZXh0LWFsaWduOmNlbnRlcjtsaW5lLWhlaWdodDoxLjVlbTtmb250LXNpemU6MWVtO2JveC1zaXppbmc6Ym9yZGVyLWJveDtiYWNrZ3JvdW5kOnZhcigtLW5vdGUtaWNvbi1iZyk7Ym9yZGVyLXJhZGl1czo1MCU7Y29sb3I6IzAwMH0ubm90ZS5pbmZve2JvcmRlci1jb2xvcjp2YXIoLS1ub3RlLWluZm8tYWNjZW50LWNvbG9yKTtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sdmFyKC0tbm90ZS1pbmZvLWJnLWNvbG9yLXN0YXJ0KSx2YXIoLS1ub3RlLWluZm8tYmctY29sb3ItZW5kKSl9Lm5vdGUuaW5mbyBzdHJvbmd7Y29sb3I6dmFyKC0tbm90ZS1pbmZvLWFjY2VudC1jb2xvcil9Lm5vdGUuaW5mbzo6YmVmb3Jle2NvbnRlbnQ6XFxcIuKEue+4j1xcXCJ9Lm5vdGUsLm5vdGUud2FybmluZ3tib3JkZXItY29sb3I6dmFyKC0tbm90ZS13YXJuaW5nLWFjY2VudC1jb2xvcik7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLHZhcigtLW5vdGUtd2FybmluZy1iZy1jb2xvci1zdGFydCksdmFyKC0tbm90ZS13YXJuaW5nLWJnLWNvbG9yLWVuZCkpfS5ub3RlIHN0cm9uZywubm90ZS53YXJuaW5nIHN0cm9uZ3tjb2xvcjp2YXIoLS1ub3RlLXdhcm5pbmctYWNjZW50LWNvbG9yKX0ubm90ZS53YXJuaW5nOjpiZWZvcmUsLm5vdGU6OmJlZm9yZXtjb250ZW50OlxcXCLimqDvuI9cXFwifS5tYXJrZG93bi1pdC1jb250YWluZXIsZGl2LmRpZC15b3Uta25vdyxkaXYucmVzdWx0e3Bvc2l0aW9uOnJlbGF0aXZlfS5tYXJrZG93bi1pdC1jb250YWluZXI6OmJlZm9yZSxkaXYuZGlkLXlvdS1rbm93OjpiZWZvcmUsZGl2LnJlc3VsdDo6YmVmb3Jle2NvbnRlbnQ6YXR0cihkYXRhLWJlZm9yZSl9ZGl2LnJlc3VsdHttYXJnaW4tbGVmdDowO3BhZGRpbmc6Ljc1ZW0gLjVlbSAuNWVtO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDEzNWRlZyx2YXIoLS1yZXN1bHQtYmctY29sb3Itc3RhcnQpLHZhcigtLXJlc3VsdC1iZy1jb2xvci1lbmQpKTtib3JkZXI6MXB4IGRhc2hlZCB2YXIoLS1yZXN1bHQtYWNjZW50LWNvbG9yKX1kaXYucmVzdWx0OjpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1yZXN1bHQtYWNjZW50LWNvbG9yKTtjb2xvcjp2YXIoLS1wcmVzZW50YXRpb24tY29sb3IpO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RyYW5zZm9ybTpyb3RhdGUoLTNkZWcpO2ZvbnQtd2VpZ2h0OjcwMDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTNweDtsZWZ0Oi0zcHg7Zm9udC1zaXplOi42ZW07bGluZS1oZWlnaHQ6MS41ZW07cGFkZGluZzowIC41ZW19ZGl2LmRpZC15b3Uta25vd3tiYWNrZ3JvdW5kLWltYWdlOnVybChodHRwczovL2ZlZ2Vtby5naXRodWIuaW8vY2VmZXQtZnJvbnQtZW5kL2ltYWdlcy9xdWVzdGlvbi1tYXJrLWJnLnBuZyk7Ym9yZGVyLWxlZnQ6NHB4IHNvbGlkIHZhcigtLWRpZC15b3Uta25vdy1hY2NlbnQtY29sb3IpO2JveC1zaGFkb3c6NXB4IDVweCA1cHggdmFyKC0tc2hhZG93LWNvbG9yKTtwYWRkaW5nLXJpZ2h0OjFlbX1kaXYuZGlkLXlvdS1rbm93OjpiZWZvcmV7ZGlzcGxheTpibG9jazttYXJnaW46NHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtmb250LWZhbWlseTpQdXJpc2EsXFxcIkNvbWljIFNhbnMgTVNcXFwiLGN1cnNpdmU7Zm9udC13ZWlnaHQ6NzAwO2NvbG9yOnZhcigtLWRpZC15b3Uta25vdy1hY2NlbnQtY29sb3IpfWRpdi5kaWQteW91LWtub3csZGl2LmRpZC15b3Uta25vdz5we3BhZGRpbmctbGVmdDouNWVtfS5sYXlvdXQtc3BsaXQtMiwubGF5b3V0LXNwbGl0LTMsLmxheW91dC1zcGxpdC00LC5sYXlvdXQtc3BsaXQtNXtmbGV4LWRpcmVjdGlvbjpyb3c7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6c3RyZXRjaDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfS5sYXlvdXQtc3BsaXQtMj5zZWN0aW9uLC5sYXlvdXQtc3BsaXQtMz5zZWN0aW9ue3dpZHRoOjUwJTtmbGV4LWdyb3c6MTt0ZXh0LWFsaWduOmNlbnRlcn0ubGF5b3V0LXNwbGl0LTM+c2VjdGlvbnt3aWR0aDozMy4zMzMzMzMzMzMzMzMzMyV9LmxheW91dC1zcGxpdC00PnNlY3Rpb24sLmxheW91dC1zcGxpdC01PnNlY3Rpb257d2lkdGg6MjUlO2ZsZXgtZ3JvdzoxO3RleHQtYWxpZ246Y2VudGVyfS5sYXlvdXQtc3BsaXQtNT5zZWN0aW9ue3dpZHRoOjIwJX0uY29kZS1zcGxpdC0yLC5jb2RlLXNwbGl0LTN7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnR9LmNvZGUtc3BsaXQtMj4qLC5jb2RlLXNwbGl0LTM+KntmbGV4OjF9LmNvZGUtc3BsaXQtMj46bm90KDpmaXJzdC1jaGlsZCksLmNvZGUtc3BsaXQtMz46bm90KDpmaXJzdC1jaGlsZCl7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MH0uY29kZS1zcGxpdC0yPjpub3QoOmxhc3QtY2hpbGQpLC5jb2RlLXNwbGl0LTM+Om5vdCg6bGFzdC1jaGlsZCl7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfS5jb2RlLXNwbGl0LTIgcHJlLmhsanMsLmNvZGUtc3BsaXQtMyBwcmUuaGxqc3ttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfS5jb2RlLXNwbGl0LTIgcHJlLmhsanM6bm90KDpsYXN0LW9mLXR5cGUpLC5jb2RlLXNwbGl0LTMgcHJlLmhsanM6bm90KDpsYXN0LW9mLXR5cGUpe2JvcmRlci1yaWdodDozcHggZG91YmxlICNmZmZ9LmNvZGUtc3BsaXQtMiBwcmUuaGxqcytwcmUuaGxqcywuY29kZS1zcGxpdC0zIHByZS5obGpzK3ByZS5obGpze21hcmdpbi10b3A6MH0uZm91ci1jb2x1bW4tY29kZSBjb2RlLC5mb3VyLWNvbHVtbi1jb2RlIHByZSwudGhyZWUtY29sdW1uLWNvZGUgY29kZSwudGhyZWUtY29sdW1uLWNvZGUgcHJlLC50d28tY29sdW1uLWNvZGUgY29kZSwudHdvLWNvbHVtbi1jb2RlIHByZXtjb2x1bW4tcnVsZTozcHggZG91YmxlIHZhcigtLXNoYWRvdy1jb2xvcik7Y29sdW1uLWdhcDoyZW19LnR3by1jb2x1bW4tY29kZSBjb2RlLC50d28tY29sdW1uLWNvZGUgcHJle2NvbHVtbi1jb3VudDoyfS50aHJlZS1jb2x1bW4tY29kZSBjb2RlLC50aHJlZS1jb2x1bW4tY29kZSBwcmV7Y29sdW1uLWNvdW50OjN9LmZvdXItY29sdW1uLWNvZGUgY29kZSwuZm91ci1jb2x1bW4tY29kZSBwcmV7Y29sdW1uLWNvdW50OjR9LmZsb2F0aW5nLXJpZ2h0LWNvZGUgcHJle2Zsb2F0OnJpZ2h0O3dpZHRoOmF1dG87bWFyZ2luLWxlZnQ6MWVtfS5jYXJkLWxpc3R7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LXdyYXA6d3JhcDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO2xpc3Qtc3R5bGUtdHlwZTpub25lO3BhZGRpbmc6MH0uY2FyZC1saXN0IGxpe2ZsZXg6MTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtd3JhcDpub3dyYXA7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7bWFyZ2luLXJpZ2h0Oi4yNWVtfS5jYXJkLWxpc3QgbGkgZmlnY2FwdGlvbiwuY2FyZC1saXN0IGxpIGgxLC5jYXJkLWxpc3QgbGkgaDIsLmNhcmQtbGlzdCBsaSBoMywuY2FyZC1saXN0IGxpIGg0LC5jYXJkLWxpc3QgbGkgaDUsLmNhcmQtbGlzdCBsaSBoNntmb250LXNpemU6MWVtO3RleHQtYWxpZ246Y2VudGVyO29yZGVyOjE7bWFyZ2luLXRvcDouNWVtIWltcG9ydGFudH0uY2FyZC1saXN0IGxpIGltZ3ttYXgtd2lkdGg6MTAwJTttYXJnaW46YXV0bztvYmplY3QtZml0OmNvbnRhaW47b2JqZWN0LXBvc2l0aW9uOmNlbnRlcjtvcmRlcjowfS5jYXJkLWxpc3QucG9sYXJvaWQgbGl7YmFja2dyb3VuZDp2YXIoLS1wcmVzZW50YXRpb24tY29sb3IpO2JveC1zaGFkb3c6MCA4cHggMTZweCB2YXIoLS1zaGFkb3ctY29sb3IpLDAgNHB4IDE2cHggdmFyKC0tc2hhZG93LWNvbG9yKX0uY2FyZC1saXN0LnBvbGFyb2lkIGxpIGltZ3tiYWNrZ3JvdW5kLWNvbG9yOiNmMGY4ZmY7Ym9yZGVyOjExcHggc29saWQgdmFyKC0tcHJlc2VudGF0aW9uLWNvbG9yKTtpbWFnZS1yZW5kZXJpbmc6cGl4ZWxhdGVkfS5jYXJkLWxpc3QuY292ZXIgbGkgaW1ne29iamVjdC1maXQ6Y292ZXJ9LmNhcmQtbGlzdC5jb250YWluIGxpIGltZ3tvYmplY3QtZml0OmNvbnRhaW59LmNhcmQtbGlzdC50aXRsZS10b3AgZmlnY2FwdGlvbiwuY2FyZC1saXN0LnRpdGxlLXRvcCBoMSwuY2FyZC1saXN0LnRpdGxlLXRvcCBoMiwuY2FyZC1saXN0LnRpdGxlLXRvcCBoMywuY2FyZC1saXN0LnRpdGxlLXRvcCBoNCwuY2FyZC1saXN0LnRpdGxlLXRvcCBoNSwuY2FyZC1saXN0LnRpdGxlLXRvcCBoNntvcmRlcjowfS5jYXJkLWxpc3QudGl0bGUtdG9wIGltZ3tvcmRlcjoxfS5pbnZlcnRlZC10ZXh0LWNvbG9yc3tiYWNrZ3JvdW5kOnZhcigtLXRleHQtY29sb3IpO2NvbG9yOnZhcigtLXByZXNlbnRhdGlvbi1jb2xvcil9LnNtYWxsZXItdGV4dC05MHtmb250LXNpemU6OTAlfS5zbWFsbGVyLXRleHQtODB7Zm9udC1zaXplOjgwJX0uc21hbGxlci10ZXh0LTcwe2ZvbnQtc2l6ZTo3MCV9LnNtYWxsZXItdGV4dC02MHtmb250LXNpemU6NjAlfS5icmluZy1mb3J3YXJke3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MX0uaXRlbS1jb2RlLXdpdGgtaW1hZ2UsLml0ZW0tY29kZS13aXRoLXJlc3VsdHtwYWRkaW5nLWxlZnQ6MDtsaXN0LXN0eWxlLXR5cGU6bm9uZX0uaXRlbS1jb2RlLXdpdGgtaW1hZ2UgbGksLml0ZW0tY29kZS13aXRoLXJlc3VsdCBsaXtjbGVhcjpyaWdodDttYXJnaW4tYm90dG9tOjFlbX0uaXRlbS1jb2RlLXdpdGgtaW1hZ2UgbGk+LnJlc3VsdCwuaXRlbS1jb2RlLXdpdGgtaW1hZ2UgbGk+aW1nLC5pdGVtLWNvZGUtd2l0aC1yZXN1bHQgbGk+LnJlc3VsdCwuaXRlbS1jb2RlLXdpdGgtcmVzdWx0IGxpPmltZ3tmbG9hdDpyaWdodDttYXJnaW4tbGVmdDoxZW19LmJlc3Bva2Utc2xpZGUgcCwuYmVzcG9rZS1zbGlkZSBwcmUsLml0ZW0tY29kZS13aXRoLWltYWdlIGxpPi5yZXN1bHQsLml0ZW0tY29kZS13aXRoLXJlc3VsdCBsaT4ucmVzdWx0e21hcmdpbi10b3A6MH0uYm91bmNpbmctbGVmdHthbmltYXRpb246Ym91bmNpbmctbGVmdCAuOHMgY3ViaWMtYmV6aWVyKC4yMiwuNjEsLjM2LDEpIDBzIGluZmluaXRlIGFsdGVybmF0ZX0uZGVsYXktMXthbmltYXRpb24tZGVsYXk6LjJzO3RyYW5zaXRpb24tZGVsYXk6LjJzfS5kZWxheS0ye2FuaW1hdGlvbi1kZWxheTouNHM7dHJhbnNpdGlvbi1kZWxheTouNHN9LmRlbGF5LTN7YW5pbWF0aW9uLWRlbGF5Oi42czt0cmFuc2l0aW9uLWRlbGF5Oi42c30uZGVsYXktNHthbmltYXRpb24tZGVsYXk6LjhzO3RyYW5zaXRpb24tZGVsYXk6LjhzfS5kZWxheS01e2FuaW1hdGlvbi1kZWxheToxczt0cmFuc2l0aW9uLWRlbGF5OjFzfS5kZWxheS02e2FuaW1hdGlvbi1kZWxheToxLjJzO3RyYW5zaXRpb24tZGVsYXk6MS4yc30udW5kZXJsaW5le3Bvc2l0aW9uOnJlbGF0aXZlfS51bmRlcmxpbmU6OmFmdGVye2NvbnRlbnQ6XFxcIiBcXFwiO3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTo1JTtsZWZ0OjA7d2lkdGg6MTAwJTtib3JkZXI6MnB4IHNvbGlkIGN1cnJlbnRDb2xvcn0udW5kZXJsaW5lLnVwb24tYWN0aXZhdGlvbjo6YWZ0ZXJ7dHJhbnNpdGlvbjp3aWR0aCAuNHMgZWFzZS1vdXQgLjRzO3dpZHRoOjB9Lmp1bXAudXBvbi1hY3RpdmF0aW9ue2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RyYW5zaXRpb246YWxsIC4ycyBjdWJpYy1iZXppZXIoMCwwLC4yNywxLjU4KSAuN3M7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZSguMikgdHJhbnNsYXRlWSg1MCUpfS5iZXNwb2tlLWFjdGl2ZSAuanVtcC51cG9uLWFjdGl2YXRpb257b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZSguNikgdHJhbnNsYXRlWSgwKX0uZGVsYXktMjAwLC5kZWxheS0yMDA6OmFmdGVyLC5kZWxheS0yMDA6OmJlZm9yZXthbmltYXRpb24tZGVsYXk6LjJzIWltcG9ydGFudDt0cmFuc2l0aW9uLWRlbGF5Oi4ycyFpbXBvcnRhbnR9LmRlbGF5LTQwMCwuZGVsYXktNDAwOjphZnRlciwuZGVsYXktNDAwOjpiZWZvcmV7YW5pbWF0aW9uLWRlbGF5Oi40cyFpbXBvcnRhbnQ7dHJhbnNpdGlvbi1kZWxheTouNHMhaW1wb3J0YW50fS5kZWxheS02MDAsLmRlbGF5LTYwMDo6YWZ0ZXIsLmRlbGF5LTYwMDo6YmVmb3Jle2FuaW1hdGlvbi1kZWxheTouNnMhaW1wb3J0YW50O3RyYW5zaXRpb24tZGVsYXk6LjZzIWltcG9ydGFudH0uZGVsYXktODAwLC5kZWxheS04MDA6OmFmdGVyLC5kZWxheS04MDA6OmJlZm9yZXthbmltYXRpb24tZGVsYXk6LjhzIWltcG9ydGFudDt0cmFuc2l0aW9uLWRlbGF5Oi44cyFpbXBvcnRhbnR9LmRlbGF5LTEwMDAsLmRlbGF5LTEwMDA6OmFmdGVyLC5kZWxheS0xMDAwOjpiZWZvcmV7YW5pbWF0aW9uLWRlbGF5OjFzIWltcG9ydGFudDt0cmFuc2l0aW9uLWRlbGF5OjFzIWltcG9ydGFudH0uZGVsYXktMTIwMCwuZGVsYXktMTIwMDo6YWZ0ZXIsLmRlbGF5LTEyMDA6OmJlZm9yZXthbmltYXRpb24tZGVsYXk6MS4ycyFpbXBvcnRhbnQ7dHJhbnNpdGlvbi1kZWxheToxLjJzIWltcG9ydGFudH0uZGVsYXktMTQwMCwuZGVsYXktMTQwMDo6YWZ0ZXIsLmRlbGF5LTE0MDA6OmJlZm9yZXthbmltYXRpb24tZGVsYXk6MS40cyFpbXBvcnRhbnQ7dHJhbnNpdGlvbi1kZWxheToxLjRzIWltcG9ydGFudH0uZGVsYXktMTYwMCwuZGVsYXktMTYwMDo6YWZ0ZXIsLmRlbGF5LTE2MDA6OmJlZm9yZXthbmltYXRpb24tZGVsYXk6MS42cyFpbXBvcnRhbnQ7dHJhbnNpdGlvbi1kZWxheToxLjZzIWltcG9ydGFudH0uZGVsYXktMTgwMCwuZGVsYXktMTgwMDo6YWZ0ZXIsLmRlbGF5LTE4MDA6OmJlZm9yZXthbmltYXRpb24tZGVsYXk6MS44cyFpbXBvcnRhbnQ7dHJhbnNpdGlvbi1kZWxheToxLjhzIWltcG9ydGFudH0uZGVsYXktMjAwMCwuZGVsYXktMjAwMDo6YWZ0ZXIsLmRlbGF5LTIwMDA6OmJlZm9yZXthbmltYXRpb24tZGVsYXk6MnMhaW1wb3J0YW50O3RyYW5zaXRpb24tZGVsYXk6MnMhaW1wb3J0YW50fS5kZWxheS0yMjAwLC5kZWxheS0yMjAwOjphZnRlciwuZGVsYXktMjIwMDo6YmVmb3Jle2FuaW1hdGlvbi1kZWxheToyLjJzIWltcG9ydGFudDt0cmFuc2l0aW9uLWRlbGF5OjIuMnMhaW1wb3J0YW50fS5kZWxheS0yNDAwLC5kZWxheS0yNDAwOjphZnRlciwuZGVsYXktMjQwMDo6YmVmb3Jle2FuaW1hdGlvbi1kZWxheToyLjRzIWltcG9ydGFudDt0cmFuc2l0aW9uLWRlbGF5OjIuNHMhaW1wb3J0YW50fS5kZWxheS0yNjAwLC5kZWxheS0yNjAwOjphZnRlciwuZGVsYXktMjYwMDo6YmVmb3Jle2FuaW1hdGlvbi1kZWxheToyLjZzIWltcG9ydGFudDt0cmFuc2l0aW9uLWRlbGF5OjIuNnMhaW1wb3J0YW50fS5kZWxheS0yODAwLC5kZWxheS0yODAwOjphZnRlciwuZGVsYXktMjgwMDo6YmVmb3Jle2FuaW1hdGlvbi1kZWxheToyLjhzIWltcG9ydGFudDt0cmFuc2l0aW9uLWRlbGF5OjIuOHMhaW1wb3J0YW50fS5kZWxheS0zMDAwLC5kZWxheS0zMDAwOjphZnRlciwuZGVsYXktMzAwMDo6YmVmb3Jle2FuaW1hdGlvbi1kZWxheTozcyFpbXBvcnRhbnQ7dHJhbnNpdGlvbi1kZWxheTozcyFpbXBvcnRhbnR9LnNoYWtpbmd7YW5pbWF0aW9uOnNoYWtpbmcgLjVzIGVhc2Utb3V0IDBzIDF9LnNoYWtpbmc6bnRoLWNoaWxkKDJuKXthbmltYXRpb24tZGVsYXk6LjFzfS5jb29sLXJvdGF0aW9uLXh7YW5pbWF0aW9uOmNvb2wtcm90YXRpb24teCAxLjJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGFsdGVybmF0ZX1AbWVkaWEgc2NyZWVuey50cmFuc2l0aW9uLWdpYW50LXdoZWVsIC5iZXNwb2tlLWFjdGl2ZSwudHJhbnNpdGlvbi1ncm93IC5iZXNwb2tlLWFjdGl2ZSwudHJhbnNpdGlvbi1zbGlkaW5nIC5iZXNwb2tlLWFjdGl2ZSwudHJhbnNpdGlvbi1zdWJ0bGUgLmJlc3Bva2UtYWN0aXZle3RyYW5zZm9ybTpub25lO29wYWNpdHk6MX0udHJhbnNpdGlvbi1zbGlkaW5nIC5iZXNwb2tlLXNsaWRle3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLG9wYWNpdHk7dHJhbnNpdGlvbi1kdXJhdGlvbjp2YXIoLS10cmFuc2l0aW9uLWR1cmF0aW9uKTt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjp2YXIoLS10cmFuc2l0aW9uLWVhc2luZyl9LnRyYW5zaXRpb24tc2xpZGluZyAuYmVzcG9rZS1iZWZvcmV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDElLDAsMCl9LnRyYW5zaXRpb24tc2xpZGluZyAuYmVzcG9rZS1hZnRlcnt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAxJSwwLDApfS50cmFuc2l0aW9uLXN1YnRsZSAuYmVzcG9rZS1zbGlkZXt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSxvcGFjaXR5O3RyYW5zaXRpb24tZHVyYXRpb246Y2FsYyguNzUqdmFyKC0tdHJhbnNpdGlvbi1kdXJhdGlvbikpO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOnZhcigtLXRyYW5zaXRpb24tZWFzaW5nKX0udHJhbnNpdGlvbi1zdWJ0bGUgLmJlc3Bva2UtYmVmb3Jle3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMDAwcHgpfS50cmFuc2l0aW9uLXN1YnRsZSAuYmVzcG9rZS1hZnRlcnt0cmFuc2Zvcm06dHJhbnNsYXRlWCgxMDAwcHgpfS50cmFuc2l0aW9uLXN1YnRsZSAuYmVzcG9rZS1iZWZvcmUtMXt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTAwcHgpfS50cmFuc2l0aW9uLXN1YnRsZSAuYmVzcG9rZS1hZnRlci0xe3RyYW5zZm9ybTp0cmFuc2xhdGVYKDEwMHB4KX0udHJhbnNpdGlvbi1zdWJ0bGUgLmJlc3Bva2UtYmVmb3JlLTJ7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTMwMHB4KX0udHJhbnNpdGlvbi1zdWJ0bGUgLmJlc3Bva2UtYWZ0ZXItMnt0cmFuc2Zvcm06dHJhbnNsYXRlWCgzMDBweCl9LnRyYW5zaXRpb24tZ2lhbnQtd2hlZWwgLmJlc3Bva2Utc2xpZGV7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0sb3BhY2l0eTt0cmFuc2l0aW9uLWR1cmF0aW9uOnZhcigtLXRyYW5zaXRpb24tZHVyYXRpb24pO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOnZhcigtLXRyYW5zaXRpb24tZWFzaW5nKTt0cmFuc2Zvcm0tb3JpZ2luOjUwJSAxMDAlfS50cmFuc2l0aW9uLWdpYW50LXdoZWVsIC5iZXNwb2tlLWJlZm9yZXt0cmFuc2Zvcm06cm90YXRlWCg5MGRlZykgc2NhbGUoLjUpfS50cmFuc2l0aW9uLWdpYW50LXdoZWVsIC5iZXNwb2tlLWFmdGVye3RyYW5zZm9ybTpyb3RhdGVYKC05MGRlZykgc2NhbGUoLjUpfS50cmFuc2l0aW9uLWdyb3cgLmJlc3Bva2Utc2xpZGV7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0sb3BhY2l0eTt0cmFuc2l0aW9uLWR1cmF0aW9uOmNhbGMoLjUqdmFyKC0tdHJhbnNpdGlvbi1kdXJhdGlvbikpO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOnZhcigtLXRyYW5zaXRpb24tZWFzaW5nKX0udHJhbnNpdGlvbi1ncm93IC5iZXNwb2tlLWJlZm9yZXt0cmFuc2Zvcm06c2NhbGUoMS4xKX0udHJhbnNpdGlvbi1ncm93IC5iZXNwb2tlLWFmdGVye3RyYW5zZm9ybTpzY2FsZSguOSl9fUBtZWRpYSBzY3JlZW4gYW5kIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uKXsudHJhbnNpdGlvbi1naWFudC13aGVlbCAuYmVzcG9rZS1zbGlkZSwudHJhbnNpdGlvbi1ncm93IC5iZXNwb2tlLXNsaWRlLC50cmFuc2l0aW9uLXNsaWRpbmcgLmJlc3Bva2Utc2xpZGUsLnRyYW5zaXRpb24tc3VidGxlIC5iZXNwb2tlLXNsaWRle3RyYW5zaXRpb24tcHJvcGVydHk6bm9uZX19LmJlc3Bva2Utc2xpZGV7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O3BhZGRpbmc6MS41cmVtfS5iZXNwb2tlLXNsaWRlIGgxLC5iZXNwb2tlLXNsaWRlIGgyLC5iZXNwb2tlLXNsaWRlIGgzLC5iZXNwb2tlLXNsaWRlIGg0LC5iZXNwb2tlLXNsaWRlIGg1LC5iZXNwb2tlLXNsaWRlIGg2e21hcmdpbjowIDAgLjVlbTtwYWRkaW5nOjB9LmxheW91dC10aXRsZXtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO2FsaWduLWl0ZW1zOmNlbnRlcjt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjB9LmxheW91dC10aXRsZSBoMXtjb2xvcjp2YXIoLS1iaWctdGl0bGUtY29sb3IpfS5sYXlvdXQtdGl0bGUgaDJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1hY2NlbnQtY29sb3IpO3dpZHRoOjEwMCU7cGFkZGluZzoyZW0gMDttYXJnaW46MWVtIDAgMH0ubGF5b3V0LXRpdGxlIGgyIHN0cm9uZ3tjb2xvcjp2YXIoLS1hY2NlbnQtbW9yZS1jb2xvcil9LmxheW91dC1zZWN0aW9uLWhlYWRlcntmbGV4LXdyYXA6d3JhcDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3BhZGRpbmc6MH0ubGF5b3V0LXNlY3Rpb24taGVhZGVyOjphZnRlcntkaXNwbGF5OmJsb2NrO2NvbnRlbnQ6XFxcIiBcXFwiO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7d2lkdGg6NTAlO2hlaWdodDoxMDAlO3otaW5kZXg6LTE7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1hY2NlbnQtY29sb3IpfS5sYXlvdXQtc2VjdGlvbi1oZWFkZXIgLmNvbnRlbnR7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxheW91dC1zZWN0aW9uLWhlYWRlciAuY29udGVudCBkZCwubGF5b3V0LXNlY3Rpb24taGVhZGVyIC5jb250ZW50IGR0LC5sYXlvdXQtc2VjdGlvbi1oZWFkZXIgLmNvbnRlbnQgbGksLmxheW91dC1zZWN0aW9uLWhlYWRlciAuY29udGVudCBwe2JhY2tncm91bmQtY29sb3I6dmFyKC0tcHJlc2VudGF0aW9uLWNvbG9yKX0ubGF5b3V0LXNlY3Rpb24taGVhZGVyIC5jb250ZW50IGxpLC5sYXlvdXQtc2VjdGlvbi1oZWFkZXIgLmNvbnRlbnQgcHtkaXNwbGF5OmlubGluZX0ubGF5b3V0LXNlY3Rpb24taGVhZGVyIC5jb250ZW50IHA6OmFmdGVye2NvbnRlbnQ6XFxcIiBcXFwiO2Rpc3BsYXk6YmxvY2s7bWFyZ2luLWJvdHRvbTouNWVtfS5sYXlvdXQtc2VjdGlvbi1oZWFkZXIgLmNvbnRlbnQ6OmFmdGVye2NvbnRlbnQ6XFxcIiBcXFwiO2Rpc3BsYXk6YmxvY2s7d2lkdGg6M2VtO2hlaWdodDoxcHg7Ym9yZGVyLWJvdHRvbTozcHggc29saWQgdmFyKC0tcHJlc2VudGF0aW9uLWNvbG9yKX0ubGF5b3V0LXNlY3Rpb24taGVhZGVyIC5jb250ZW50IGxpOjpiZWZvcmV7Y29udGVudDpcXFwiIFxcXCI7ZGlzcGxheTpsaXN0LWl0ZW07ZmxvYXQ6bGVmdH0ubGF5b3V0LXNlY3Rpb24taGVhZGVyIC5jb250ZW50IGxpOjphZnRlcntjb250ZW50OlxcXCIgXFxcIjtkaXNwbGF5OmJsb2NrfS5sYXlvdXQtc2VjdGlvbi1oZWFkZXI+Knt3aWR0aDo1MCU7cGFkZGluZzowIDFlbX0ubGF5b3V0LXNlY3Rpb24taGVhZGVyPm9sLC5sYXlvdXQtc2VjdGlvbi1oZWFkZXI+dWx7cGFkZGluZy1sZWZ0OjJlbX0ubGF5b3V0LXNlY3Rpb24taGVhZGVyIGgxe21hcmdpbjowO3RleHQtYWxpZ246Y2VudGVyO2hlaWdodDo3MCU7Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MmVtIC4xNWVtIC41ZW19LmxheW91dC1zZWN0aW9uLWhlYWRlciBoMnttYXJnaW46MDtwYWRkaW5nOjA7dGV4dC1hbGlnbjpjZW50ZXI7aGVpZ2h0OjMwJX0ubGF5b3V0LWNlbnRlcmVkLC5sYXlvdXQtY2VudGVyZWQtdmVydGljYWx7anVzdGlmeS1jb250ZW50OmNlbnRlcn0ubGF5b3V0LWNlbnRlcmVkLC5sYXlvdXQtY2VudGVyZWQtaG9yaXpvbnRhbHthbGlnbi1pdGVtczpjZW50ZXJ9LmxheW91dC0yLWNvbHVtbi1jb250ZW50LC5sYXlvdXQtMy1jb2x1bW4tY29udGVudCwubGF5b3V0LTQtY29sdW1uLWNvbnRlbnR7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtcm93czphdXRvIDFmcjtjb2x1bW4tZ2FwOnZhcigtLWxheW91dC1jb2x1bW4tZ2FwKX0ubGF5b3V0LTItY29sdW1uLWNvbnRlbnR7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnJ9LmxheW91dC0yLWNvbHVtbi1jb250ZW50IC5zcGFuLWNvbHVtbnMsLmxheW91dC0yLWNvbHVtbi1jb250ZW50IGgxLC5sYXlvdXQtMi1jb2x1bW4tY29udGVudCBoMiwubGF5b3V0LTItY29sdW1uLWNvbnRlbnQgaDMsLmxheW91dC0yLWNvbHVtbi1jb250ZW50IGg0LC5sYXlvdXQtMi1jb2x1bW4tY29udGVudCBoNSwubGF5b3V0LTItY29sdW1uLWNvbnRlbnQgaDZ7Z3JpZC1jb2x1bW46MS8zfS5sYXlvdXQtMy1jb2x1bW4tY29udGVudHtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmciAxZnJ9LmxheW91dC0zLWNvbHVtbi1jb250ZW50IC5zcGFuLWNvbHVtbnMsLmxheW91dC0zLWNvbHVtbi1jb250ZW50IGgxLC5sYXlvdXQtMy1jb2x1bW4tY29udGVudCBoMiwubGF5b3V0LTMtY29sdW1uLWNvbnRlbnQgaDMsLmxheW91dC0zLWNvbHVtbi1jb250ZW50IGg0LC5sYXlvdXQtMy1jb2x1bW4tY29udGVudCBoNSwubGF5b3V0LTMtY29sdW1uLWNvbnRlbnQgaDZ7Z3JpZC1jb2x1bW46MS80fS5sYXlvdXQtNC1jb2x1bW4tY29udGVudHtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmciAxZnIgMWZyfS5sYXlvdXQtNC1jb2x1bW4tY29udGVudCAuc3Bhbi1jb2x1bW5zLC5sYXlvdXQtNC1jb2x1bW4tY29udGVudCBoMSwubGF5b3V0LTQtY29sdW1uLWNvbnRlbnQgaDIsLmxheW91dC00LWNvbHVtbi1jb250ZW50IGgzLC5sYXlvdXQtNC1jb2x1bW4tY29udGVudCBoNCwubGF5b3V0LTQtY29sdW1uLWNvbnRlbnQgaDUsLmxheW91dC00LWNvbHVtbi1jb250ZW50IGg2e2dyaWQtY29sdW1uOjEvNX0ubGF5b3V0LTItY29sdW1uLWhpZ2hsaWdodC1hbmQtY29udGVudHtkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1yb3dzOmF1dG8gMWZyO2dyaWQtdGVtcGxhdGUtY29sdW1uczptaW5tYXgoYXV0bywxZnIpIDNmcjtjb2x1bW4tZ2FwOjFlbTtwZXJzcGVjdGl2ZTppbmhlcml0fS5sYXlvdXQtMi1jb2x1bW4taGlnaGxpZ2h0LWFuZC1jb250ZW50IGgxLC5sYXlvdXQtMi1jb2x1bW4taGlnaGxpZ2h0LWFuZC1jb250ZW50IGgyLC5sYXlvdXQtMi1jb2x1bW4taGlnaGxpZ2h0LWFuZC1jb250ZW50IGgzLC5sYXlvdXQtMi1jb2x1bW4taGlnaGxpZ2h0LWFuZC1jb250ZW50IGg0LC5sYXlvdXQtMi1jb2x1bW4taGlnaGxpZ2h0LWFuZC1jb250ZW50IGg1LC5sYXlvdXQtMi1jb2x1bW4taGlnaGxpZ2h0LWFuZC1jb250ZW50IGg2e2dyaWQtY29sdW1uOjEvM30ubGF5b3V0LTItY29sdW1uLWhpZ2hsaWdodC1hbmQtY29udGVudD46bnRoLWNoaWxkKDIpe3dpZHRoOjkwJTttYXJnaW46MCAwIDAgYXV0bztib3gtc2hhZG93OjAgMCAyMHB4IHRyYW5zcGFyZW50O3RyYW5zaXRpb246YWxsIC41cyBlYXNlIC40cztvcGFjaXR5Oi41O3RyYW5zZm9ybTpzY2FsZSguNzUpO3RyYW5zZm9ybS1vcmlnaW46cmlnaHR9LmxheW91dC0yLWNvbHVtbi1oaWdobGlnaHQtYW5kLWNvbnRlbnQ+Om50aC1jaGlsZCgyKT5pZnJhbWUsLmxheW91dC0yLWNvbHVtbi1oaWdobGlnaHQtYW5kLWNvbnRlbnQ+Om50aC1jaGlsZCgyKT5pbWcsLmxheW91dC10YWxsLWZpZ3VyZS1sZWZ0PjpudGgtY2hpbGQoMik+aW1nLC5sYXlvdXQtdGFsbC1maWd1cmUtbGVmdD5pbWc6bnRoLWNoaWxkKDIpLC5sYXlvdXQtdGFsbC1maWd1cmUtcmlnaHQ+Om50aC1jaGlsZCgyKT5pbWcsLmxheW91dC10YWxsLWZpZ3VyZS1yaWdodD5pbWc6bnRoLWNoaWxkKDIpe21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJX0ubGF5b3V0LTItY29sdW1uLWhpZ2hsaWdodC1hbmQtY29udGVudD46bnRoLWNoaWxkKDIpPmlmcmFtZXtoZWlnaHQ6MTAwJX0ubGF5b3V0LTItY29sdW1uLWhpZ2hsaWdodC1hbmQtY29udGVudC5iZXNwb2tlLWFjdGl2ZT46bnRoLWNoaWxkKDIpe3RyYW5zZm9ybTpyb3RhdGVZKDMwZGVnKSBzY2FsZSguOSk7LW1vei10cmFuc2Zvcm06cm90YXRlWSg4ZGVnKSBzY2FsZSguOSk7b3BhY2l0eToxO2JveC1zaGFkb3c6LTIwcHggMjBweCAyMHB4IHZhcigtLXNoYWRvdy1jb2xvcil9LmxheW91dC0yLWNvbHVtbi1oaWdobGlnaHQtYW5kLWNvbnRlbnQgLnNwYW4tY29sdW1uc3tncmlkLWNvbHVtbjoxLzN9LmxheW91dC0zLWNvbHVtbi1lbGVtZW50LXdpdGgtdGl0bGVzLWV4cGFuc2libGV7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LXdyYXA6d3JhcDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0fS5sYXlvdXQtMy1jb2x1bW4tZWxlbWVudC13aXRoLXRpdGxlcy1leHBhbnNpYmxlPip7d2lkdGg6Y2FsYygzMyUgLSAxcmVtKX0ubGF5b3V0LTMtY29sdW1uLWVsZW1lbnQtd2l0aC10aXRsZXMtZXhwYW5zaWJsZSBoMSwubGF5b3V0LTMtY29sdW1uLWVsZW1lbnQtd2l0aC10aXRsZXMtZXhwYW5zaWJsZSBoMiwubGF5b3V0LTMtY29sdW1uLWVsZW1lbnQtd2l0aC10aXRsZXMtZXhwYW5zaWJsZSBoMywubGF5b3V0LTMtY29sdW1uLWVsZW1lbnQtd2l0aC10aXRsZXMtZXhwYW5zaWJsZSBoNCwubGF5b3V0LTMtY29sdW1uLWVsZW1lbnQtd2l0aC10aXRsZXMtZXhwYW5zaWJsZSBoNSwubGF5b3V0LTMtY29sdW1uLWVsZW1lbnQtd2l0aC10aXRsZXMtZXhwYW5zaWJsZSBoNnttYXJnaW46YXV0byAwfS5sYXlvdXQtMy1jb2x1bW4tZWxlbWVudC13aXRoLXRpdGxlcy1leHBhbnNpYmxlIGgxOm5vdCg6bGFzdC1vZi10eXBlKSwubGF5b3V0LTMtY29sdW1uLWVsZW1lbnQtd2l0aC10aXRsZXMtZXhwYW5zaWJsZSBoMjpub3QoOmxhc3Qtb2YtdHlwZSksLmxheW91dC0zLWNvbHVtbi1lbGVtZW50LXdpdGgtdGl0bGVzLWV4cGFuc2libGUgaDM6bm90KDpsYXN0LW9mLXR5cGUpLC5sYXlvdXQtMy1jb2x1bW4tZWxlbWVudC13aXRoLXRpdGxlcy1leHBhbnNpYmxlIGg0Om5vdCg6bGFzdC1vZi10eXBlKSwubGF5b3V0LTMtY29sdW1uLWVsZW1lbnQtd2l0aC10aXRsZXMtZXhwYW5zaWJsZSBoNTpub3QoOmxhc3Qtb2YtdHlwZSksLmxheW91dC0zLWNvbHVtbi1lbGVtZW50LXdpdGgtdGl0bGVzLWV4cGFuc2libGUgaDY6bm90KDpsYXN0LW9mLXR5cGUpe21hcmdpbi1yaWdodDoxcmVtfS5sYXlvdXQtMy1jb2x1bW4tZWxlbWVudC13aXRoLXRpdGxlcy1leHBhbnNpYmxlPjpudGgtY2hpbGQoMm4pe2hlaWdodDpjYWxjKDEwMCUgLSAyLjVlbSk7bWFyZ2luOjA7cG9zaXRpb246cmVsYXRpdmV9LmxheW91dC0zLWNvbHVtbi1lbGVtZW50LXdpdGgtdGl0bGVzLWV4cGFuc2libGU+Om50aC1jaGlsZCgybik6bm90KDpsYXN0LW9mLXR5cGUpe21hcmdpbi1yaWdodDoxcmVtfS5sYXlvdXQtMy1jb2x1bW4tZWxlbWVudC13aXRoLXRpdGxlcy1leHBhbnNpYmxlPjpudGgtY2hpbGQoMm4pOmhvdmVye2xlZnQ6MDt3aWR0aDoxMDAlO3otaW5kZXg6MX0ubGF5b3V0LTMtY29sdW1uLWVsZW1lbnQtd2l0aC10aXRsZXMtZXhwYW5zaWJsZT46bnRoLWNoaWxkKDJuKTpudGgtb2YtdHlwZSgyKXt0cmFuc2l0aW9uLWR1cmF0aW9uOjUwbXN9LmxheW91dC0zLWNvbHVtbi1lbGVtZW50LXdpdGgtdGl0bGVzLWV4cGFuc2libGU+Om50aC1jaGlsZCgybik6bnRoLW9mLXR5cGUoMik6aG92ZXJ7bGVmdDotMzMlfS5sYXlvdXQtMy1jb2x1bW4tZWxlbWVudC13aXRoLXRpdGxlcy1leHBhbnNpYmxlPjpudGgtY2hpbGQoMm4pOm50aC1vZi10eXBlKDMpe3RyYW5zaXRpb246bm9uZX0ubGF5b3V0LTMtY29sdW1uLWVsZW1lbnQtd2l0aC10aXRsZXMtZXhwYW5zaWJsZT46bnRoLWNoaWxkKDJuKTpudGgtb2YtdHlwZSgzKTpob3ZlcntsZWZ0Oi02NyV9LmxheW91dC0yLWNvbHVtbi1jb250ZW50LXppZ3phZ3tmbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC13cmFwOndyYXA7YWxpZ24taXRlbXM6ZmxleC1zdGFydH0ubGF5b3V0LTItY29sdW1uLWNvbnRlbnQtemlnemFnIGgxLC5sYXlvdXQtMi1jb2x1bW4tY29udGVudC16aWd6YWcgaDJ7d2lkdGg6MTAwJX0ubGF5b3V0LTItY29sdW1uLWNvbnRlbnQtemlnemFnPjpub3QoOmZpcnN0LWNoaWxkKXt3aWR0aDo0OCV9LmxheW91dC0yLWNvbHVtbi1jb250ZW50LXppZ3phZyAuc3Bhbi1jb2x1bW5ze2dyaWQtY29sdW1uOjEvM30ubGF5b3V0LWNpcmNsaW5nLWJhbGxvb25zIGgxLC5sYXlvdXQtY2lyY2xpbmctYmFsbG9vbnMgaDIsLmxheW91dC1jaXJjbGluZy1iYWxsb29ucyBoMywubGF5b3V0LWNpcmNsaW5nLWJhbGxvb25zIGg0LC5sYXlvdXQtY2lyY2xpbmctYmFsbG9vbnMgaDUsLmxheW91dC1jaXJjbGluZy1iYWxsb29ucyBoNnt6LWluZGV4OjF9LmxheW91dC1jaXJjbGluZy1iYWxsb29ucz51bHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttYXJnaW46MH0ubGF5b3V0LWNpcmNsaW5nLWJhbGxvb25zPnVsPmxpe3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjIwMHB4O2hlaWdodDoyMDBweDtsaW5lLWhlaWdodDoxZW07bGVmdDpjYWxjKDUwJSAtIDEwMHB4KTt0b3A6Y2FsYyg1MCUgLSAxMDBweCk7cGFkZGluZzowO21hcmdpbjowO2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQ6dmFyKC0tY2lyY2xpbmctYmFsbG9vbnMtYmcpO2NvbG9yOnZhcigtLXRleHQtY29sb3IpO292ZXJmbG93OmhpZGRlbjtsaXN0LXN0eWxlLXR5cGU6bm9uZTt0cmFuc2l0aW9uOmFsbCAyNTBtcyBlYXNlO2FuaW1hdGlvbjpjaXJjbGluZyAzNnMgbGluZWFyIDBzIGluZmluaXRlfS5sYXlvdXQtY2lyY2xpbmctYmFsbG9vbnM+dWw+bGk6bnRoLW9mLXR5cGUoMSl7YW5pbWF0aW9uLWRlbGF5OjBzfS5sYXlvdXQtY2lyY2xpbmctYmFsbG9vbnM+dWw+bGk6bnRoLW9mLXR5cGUoMil7YW5pbWF0aW9uLWRlbGF5Oi0xMnN9LmxheW91dC1jaXJjbGluZy1iYWxsb29ucz51bD5saTpudGgtb2YtdHlwZSgzKXthbmltYXRpb24tZGVsYXk6LTI0c30ubGF5b3V0LWNpcmNsaW5nLWJhbGxvb25zPnVsPmxpPjpmaXJzdC1jaGlsZHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDttYXJnaW46MDtwYWRkaW5nLWxlZnQ6MS41ZW07cGFkZGluZy1yaWdodDoxLjVlbTt0cmFuc2l0aW9uOmFsbCAyNTBtcyBlYXNlfS5sYXlvdXQtY2lyY2xpbmctYmFsbG9vbnM+dWw+bGk+OmZpcnN0LWNoaWxkIGltZ3tkaXNwbGF5OmJsb2NrO3dpZHRoOjEyNXB4O2hlaWdodDoxMjVweDttYXJnaW46MzcuNXB4IGF1dG99LmxheW91dC1jaXJjbGluZy1iYWxsb29ucz51bD5saT46bnRoLWNoaWxkKDIpe21hcmdpbi10b3A6MjAwcHg7cGFkZGluZzoxZW19LmxheW91dC1jaXJjbGluZy1iYWxsb29ucz51bD5saTpob3Zlcnt3aWR0aDoyNmVtO2hlaWdodDoxMGVtO3RvcDpjYWxjKDUwJSAtIDVlbSk7bGVmdDpjYWxjKDUwJSAtIDEzZW0pO2JvcmRlci1yYWRpdXM6MmVtO292ZXJmbG93OnZpc2libGU7ei1pbmRleDoyfS5sYXlvdXQtY2lyY2xpbmctYmFsbG9vbnM+dWw+bGk6aG92ZXI+OmZpcnN0LWNoaWxke3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpfS5sYXlvdXQtY2lyY2xpbmctYmFsbG9vbnM+dWw+bGk6aG92ZXI+Om50aC1jaGlsZCgyKXttYXJnaW4tdG9wOjFlbX0ubGF5b3V0LWNpcmNsaW5nLWJhbGxvb25zPnVsOmhvdmVyPmxpe2FuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZH0ubGF5b3V0LXRhbGwtZmlndXJlLWxlZnQsLmxheW91dC10YWxsLWZpZ3VyZS1yaWdodHtkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1yb3dzOmF1dG8gMWZyfS5sYXlvdXQtdGFsbC1maWd1cmUtbGVmdHtncmlkLXRlbXBsYXRlLWNvbHVtbnM6LjVmciAxZnJ9LmxheW91dC10YWxsLWZpZ3VyZS1sZWZ0IC5zcGFuLWNvbHVtbnMsLmxheW91dC10YWxsLWZpZ3VyZS1sZWZ0IGgxLC5sYXlvdXQtdGFsbC1maWd1cmUtbGVmdCBoMiwubGF5b3V0LXRhbGwtZmlndXJlLWxlZnQgaDMsLmxheW91dC10YWxsLWZpZ3VyZS1sZWZ0IGg0LC5sYXlvdXQtdGFsbC1maWd1cmUtbGVmdCBoNSwubGF5b3V0LXRhbGwtZmlndXJlLWxlZnQgaDYsLmxheW91dC10YWxsLWZpZ3VyZS1yaWdodCAuc3Bhbi1jb2x1bW5zLC5sYXlvdXQtdGFsbC1maWd1cmUtcmlnaHQgaDEsLmxheW91dC10YWxsLWZpZ3VyZS1yaWdodCBoMiwubGF5b3V0LXRhbGwtZmlndXJlLXJpZ2h0IGgzLC5sYXlvdXQtdGFsbC1maWd1cmUtcmlnaHQgaDQsLmxheW91dC10YWxsLWZpZ3VyZS1yaWdodCBoNSwubGF5b3V0LXRhbGwtZmlndXJlLXJpZ2h0IGg2e2dyaWQtY29sdW1uOjEvM30ubGF5b3V0LXRhbGwtZmlndXJlLXJpZ2h0e2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgLjVmcn0ubGF5b3V0LXRhbGwtZmlndXJlLXJpZ2h0PjpudGgtY2hpbGQoMil7Z3JpZC1jb2x1bW46Mi8zfS5sYXlvdXQtdGFsbC1maWd1cmUtcmlnaHQ+Om50aC1jaGlsZCgzKXtncmlkLXJvdzoyLzN9LmxheW91dC1tYWluLXBvaW50LFtkYXRhLWJlc3Bva2Utc3RhdGU9ZW1waGF0aWNde2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfS5sYXlvdXQtbWFpbi1wb2ludC5iZXNwb2tlLXBhcmVudCwubGF5b3V0LW1haW4tcG9pbnQuYmVzcG9rZS1zbGlkZSxbZGF0YS1iZXNwb2tlLXN0YXRlPWVtcGhhdGljXS5iZXNwb2tlLXBhcmVudCxbZGF0YS1iZXNwb2tlLXN0YXRlPWVtcGhhdGljXS5iZXNwb2tlLXNsaWRle2JhY2tncm91bmQtY29sb3I6dmFyKC0tZW1waGF0aWMtY29sb3IpfS5lbXBoYXRpYyBoMSwuZW1waGF0aWMgaDIsLmVtcGhhdGljIGgzLC5lbXBoYXRpYyBoNCwuZW1waGF0aWMgaDUsLmVtcGhhdGljIGg2LC5sYXlvdXQtbWFpbi1wb2ludC5iZXNwb2tlLXNsaWRlIGgxLC5sYXlvdXQtbWFpbi1wb2ludC5iZXNwb2tlLXNsaWRlIGgyLC5sYXlvdXQtbWFpbi1wb2ludC5iZXNwb2tlLXNsaWRlIGgzLC5sYXlvdXQtbWFpbi1wb2ludC5iZXNwb2tlLXNsaWRlIGg0LC5sYXlvdXQtbWFpbi1wb2ludC5iZXNwb2tlLXNsaWRlIGg1LC5sYXlvdXQtbWFpbi1wb2ludC5iZXNwb2tlLXNsaWRlIGg2LFtkYXRhLWJlc3Bva2Utc3RhdGU9ZW1waGF0aWNdLmJlc3Bva2Utc2xpZGUgaDEsW2RhdGEtYmVzcG9rZS1zdGF0ZT1lbXBoYXRpY10uYmVzcG9rZS1zbGlkZSBoMixbZGF0YS1iZXNwb2tlLXN0YXRlPWVtcGhhdGljXS5iZXNwb2tlLXNsaWRlIGgzLFtkYXRhLWJlc3Bva2Utc3RhdGU9ZW1waGF0aWNdLmJlc3Bva2Utc2xpZGUgaDQsW2RhdGEtYmVzcG9rZS1zdGF0ZT1lbXBoYXRpY10uYmVzcG9rZS1zbGlkZSBoNSxbZGF0YS1iZXNwb2tlLXN0YXRlPWVtcGhhdGljXS5iZXNwb2tlLXNsaWRlIGg2e2NvbG9yOiNmZmZ9LmZ1bGwtcGFnZS12aWRlby1jYXB0aW9ue3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTozMHB4O2ZvbnQtc2l6ZTouNzVlbTtsZWZ0OjUwJTt3aWR0aDoxNmVtO3RleHQtYWxpZ246Y2VudGVyO21hcmdpbi1sZWZ0Oi04ZW07cGFkZGluZzowO2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDgsLjY1KTtib3JkZXItcmFkaXVzOi4yNWVtO2JveC1zaGFkb3c6M3B4IDNweCAzcHggdmFyKC0tc2hhZG93LWNvbG9yKX1AbWVkaWEgc2NyZWVuey5iZXNwb2tlLXNjYWxlLXBhcmVudHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt6LWluZGV4OjE7cGVyc3BlY3RpdmU6OTAwcHg7cG9pbnRlci1ldmVudHM6bm9uZX0uYmVzcG9rZS1zY2FsZS1wYXJlbnQgLmJlc3Bva2UtYWN0aXZle3BvaW50ZXItZXZlbnRzOmF1dG99fS5iZXNwb2tlLWJhY2tkcm9we3BvaW50ZXItZXZlbnRzOm5vbmV9QG1lZGlhIHByaW50ey5iZXNwb2tlLWJhY2tkcm9we2Rpc3BsYXk6bm9uZX19LmVtcGhhdGlje2JhY2tncm91bmQtY29sb3I6dmFyKC0tZW1waGF0aWMtY29sb3IpO2NvbG9yOiNmZmZ9LmVtcGhhdGljIGNvZGUsLmVtcGhhdGljIHN0cm9uZ3tjb2xvcjp2YXIoLS1lbXBoYXRpYy1hY2NlbnQtY29sb3IpfS5lbXBoYXRpYyBjb2Rle2JhY2tncm91bmQtY29sb3I6dmFyKC0taW5saW5lLWVtcGhhdGljLWNvZGUtYmctY29sb3IpfS5zaG93LWFjdGl2ZS1zbGlkZS1hbmQtcHJldmlvdXMgLmJlc3Bva2UtYmVmb3JlLTF7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKGNhbGMoLTEqdmFyKC0tc2hvdy0yLXNsaWRlcy14LWRpc3RhbmNlKSksMCx2YXIoLS1zaG93LTItc2xpZGVzLXotZGlzdGFuY2UpKSByb3RhdGVZKHZhcigtLXNob3ctMi1zbGlkZXMtcm90YXRpb24pKTtvcGFjaXR5OjF9LnNob3ctYWN0aXZlLXNsaWRlLWFuZC1wcmV2aW91cyAuYmVzcG9rZS1hY3RpdmV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKHZhcigtLXNob3ctMi1zbGlkZXMteC1kaXN0YW5jZSksMCx2YXIoLS1zaG93LTItc2xpZGVzLXotZGlzdGFuY2UpKSByb3RhdGVZKGNhbGMoLTEqdmFyKC0tc2hvdy0yLXNsaWRlcy1yb3RhdGlvbikpKX1bZGF0YS1iZXNwb2tlLXN0YXRlPXNob3ctYWN0aXZlLXNsaWRlLWFuZC1wcmV2aW91c10uYmVzcG9rZS1iZWZvcmUtMXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoY2FsYygtMSp2YXIoLS1zaG93LTItc2xpZGVzLXgtZGlzdGFuY2UpKSwwLHZhcigtLXNob3ctMi1zbGlkZXMtei1kaXN0YW5jZSkpIHJvdGF0ZVkodmFyKC0tc2hvdy0yLXNsaWRlcy1yb3RhdGlvbikpO29wYWNpdHk6MH1AbWVkaWEgc2NyZWVuey5iZXNwb2tlLXNsaWRlIC5iZXNwb2tlLWJ1bGxldHtvcGFjaXR5OjE7dHJhbnNmb3JtOm5vbmU7dHJhbnNpdGlvbjphbGwgLjRzIGVhc2V9LmJlc3Bva2Utc2xpZGUgLmJlc3Bva2UtYnVsbGV0LWluYWN0aXZle29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDQwcHgpO3RyYW5zaXRpb246YWxsIC4ycyBlYXNlfS5iZXNwb2tlLXNsaWRlIC5iZXNwb2tlLWJ1bGxldC1vZmYgLmJlc3Bva2UtYnVsbGV0LWluYWN0aXZle2Rpc3BsYXk6bGlzdC1pdGVtO29wYWNpdHk6aW5pdGlhbDt0cmFuc2Zvcm06aW5pdGlhbH0uYmVzcG9rZS1zbGlkZSAuYnVsbGV0LW9sZHtjb2xvcjpncmF5fS5iZXNwb2tlLXNsaWRlIC5idWxsZXQtbm8tYW5pbXt0cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50fS5iZXNwb2tlLXNsaWRlIC5idWxsZXQtbm8tYW5pbS5iZXNwb2tlLWJ1bGxldC1pbmFjdGl2ZXt0cmFuc2Zvcm06bm9uZX0uYmVzcG9rZS1wcm9ncmVzcy1wYXJlbnR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjNweDt6LWluZGV4OjJ9LmJlc3Bva2UtcHJvZ3Jlc3MtYmFye3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlO3RyYW5zaXRpb246d2lkdGggLjNzIGVhc2V9LmJlc3Bva2UtcHJvZ3Jlc3MtYmFyOmJlZm9yZXtjb250ZW50OlxcXCIgXFxcIjtwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7YmFja2dyb3VuZDojYTZhNmE2fS5iZXNwb2tlLXByb2dyZXNzLW51bWJlcntwb3NpdGlvbjphYnNvbHV0ZTtmb250LXNpemU6OXB4O21pbi13aWR0aDoyZW07aGVpZ2h0OjJlbTtyaWdodDoxcmVtO3RvcDoxcmVtO2JveC1zaXppbmc6Y29udGVudC1ib3g7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIwNCwyMDQsMjA0LC42KTtiYWNrZ3JvdW5kLWNsaXA6Y29udGVudC1ib3g7Y29sb3I6JHByb2dyZXNzLWJhci1jb2xvcjt0ZXh0LWFsaWduOmNlbnRlcjtsaW5lLWhlaWdodDoyZW07cGFkZGluZzowO2JvcmRlcjozcHggZG91YmxlIHJnYmEoMjA0LDIwNCwyMDQsLjYpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZXtwb3NpdGlvbjphYnNvbHV0ZTtvcGFjaXR5OjE7b3V0bGluZTo0cHggc29saWQgc2lsdmVyfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZTpob3ZlcntvdXRsaW5lLWNvbG9yOiM0NjgyYjR9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWN0aXZle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsLTIwMDBweCk7b3V0bGluZS1jb2xvcjojNDY4MmI0O3otaW5kZXg6MTAwfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyOm5vdCguYmVzcG9rZS1hZnRlci0xKTpub3QoLmJlc3Bva2UtYWZ0ZXItMik6bm90KC5iZXNwb2tlLWFmdGVyLTMpOm5vdCguYmVzcG9rZS1hZnRlci00KXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoNzYzNC42NjczMzg2NjkzNTRweCwwLC0yMDAwcHgpO2Rpc3BsYXk6bm9uZX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmU6bm90KC5iZXNwb2tlLWJlZm9yZS0xKTpub3QoLmJlc3Bva2UtYmVmb3JlLTIpOm5vdCguYmVzcG9rZS1iZWZvcmUtMyk6bm90KC5iZXNwb2tlLWJlZm9yZS00KXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTc2MzQuNjY3MzM4NjY5MzU0cHgsMCwtMjAwMHB4KTtkaXNwbGF5Om5vbmV9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWZ0ZXItMXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTA5MC42NjY3NjI2NjcwNTA1cHgsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtMXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwOTAuNjY2NzYyNjY3MDUwNXB4LDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWZ0ZXItMnt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjE4MS4zMzM1MjUzMzQxMDFweCwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWJlZm9yZS0ye3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjE4MS4zMzM1MjUzMzQxMDFweCwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTN7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDMyNzIuMDAwMjg4MDAxMTUxNnB4LDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTN7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0zMjcyLjAwMDI4ODAwMTE1MTZweCwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTR7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDQzNjIuNjY3MDUwNjY4MjAycHgsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtNHt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTQzNjIuNjY3MDUwNjY4MjAycHgsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcuYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXctdHJhbnNpdGlvbmluZyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTEsLmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3LXRyYW5zaXRpb25pbmcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtMXt0cmFuc2l0aW9uLWRlbGF5Oi4xc30uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcuYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXctdHJhbnNpdGlvbmluZyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTIsLmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3LXRyYW5zaXRpb25pbmcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtMnt0cmFuc2l0aW9uLWRlbGF5Oi4yc30uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcuYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXctdHJhbnNpdGlvbmluZyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTMsLmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3LXRyYW5zaXRpb25pbmcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtM3t0cmFuc2l0aW9uLWRlbGF5Oi4zc30uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcuYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXctdHJhbnNpdGlvbmluZyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTQsLmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3LXRyYW5zaXRpb25pbmcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtNHt0cmFuc2l0aW9uLWRlbGF5Oi40c30uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2UtYnVsbGV0LWluYWN0aXZle2Rpc3BsYXk6bGlzdC1pdGVtO29wYWNpdHk6aW5pdGlhbDt0cmFuc2Zvcm06aW5pdGlhbH19OnJvb3R7LS1zZWFyY2gtcmVzdWx0LWJnOiNmZjA7LS1zZWFyY2gtcmVzdWx0LWZvY3VzZWQtYmc6I2ZmYTUwMH0jYmVzcG9rZS1zZWFyY2gtcGFyZW50ey0tc2VhcmNoLXBhcmVudC1iZzpyZ2JhKDAsMCwwLDAuNCk7LS1zZWFyY2gtbWFyZ2luOjAuNWVtOy0tc2VhcmNoLWJnOnJnYmEoMjU1LDI1NSwyNTUsMC4yKTstLXNlYXJjaC1pbnB1dC1sZW5ndGg6MTJlbTstLXNlYXJjaC1pbnB1dC1wb3NpdGlvbjpmbGV4LWVuZDstLXNlYXJjaC1pbnB1dC1jb2xvcjojMzMzOy0tc2VhcmNoLWluZm8tY29sb3I6IzMzMzstLXNlYXJjaC1pbmZvLWtiZC1jb2xvcjojMDAwOy0tc2VhcmNoLWluZm8ta2JkLWJnOiNjY2M7LS1zZWFyY2gtbm8tcmVzdWx0LWNvbG9yOiM4YjAwMDA7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6dmFyKC0tc2VhcmNoLWlucHV0LXBvc2l0aW9uKTthbGlnbi1pdGVtczpjZW50ZXI7cG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5OjA7dHJhbnNpdGlvbjphbGwgLjJzIGVhc2U7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1zZWFyY2gtcGFyZW50LWJnKTtmb250LXNpemU6MS4yNXJlbTtwZXJzcGVjdGl2ZTo5MDBweH0jYmVzcG9rZS1zZWFyY2gtcGFyZW50LmJlc3Bva2Utc2VhcmNoLXNlYXJjaGluZ3tvcGFjaXR5OjE7cG9pbnRlci1ldmVudHM6YXV0bzt6LWluZGV4OjEwMDB9I2Jlc3Bva2Utc2VhcmNoe2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47ZmxleC13cmFwOndyYXA7YWxpZ24taXRlbXM6YmFzZWxpbmU7bWFyZ2luOnZhcigtLXNlYXJjaC1tYXJnaW4pO3BhZGRpbmc6MS4yNWVtO2JvcmRlci1yYWRpdXM6MTBweDt3aWR0aDpjYWxjKHZhcigtLXNlYXJjaC1pbnB1dC1sZW5ndGgpICsgOGVtKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXNlYXJjaC1iZyk7LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6Ymx1cig2cHgpO2JhY2tkcm9wLWZpbHRlcjpibHVyKDZweCk7dHJhbnNpdGlvbjphbGwgLjNzIGN1YmljLWJlemllciguMDYsLjk5LC40NiwxLjE2KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNjBweCkgcm90YXRlWCg5MGRlZyk7b3BhY2l0eTowfSNiZXNwb2tlLXNlYXJjaC1yZXN1bHRzLWNvdW50e2ZvbnQtc2l6ZTouNzVlbTtmb250LWZhbWlseTptb25vc3BhY2V9LmJlc3Bva2Utc2VhcmNoLW5vLXJlc3VsdD4jYmVzcG9rZS1zZWFyY2gtaW5wdXR7b3V0bGluZToxcHggc29saWQgY3VycmVudENvbG9yO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjp2YXIoLS1zZWFyY2gtbm8tcmVzdWx0LWNvbG9yKX0uYmVzcG9rZS1zZWFyY2gtcmVzdWx0e2JhY2tncm91bmQtY29sb3I6dmFyKC0tc2VhcmNoLXJlc3VsdC1iZywjZmYwKX0uYmVzcG9rZS1zZWFyY2gtcmVzdWx0LWZvY3VzZWR7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1zZWFyY2gtcmVzdWx0LWZvY3VzZWQtYmcsb3JhbmdlKX0jYmVzcG9rZS1zZWFyY2gtaW5wdXR7d2lkdGg6dmFyKC0tc2VhcmNoLWlucHV0LWxlbmd0aCk7cGFkZGluZzouMTVlbSAuMjVlbTtib3JkZXI6MXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtib3JkZXItcmFkaXVzOjVweDtjb2xvcjp2YXIoLS1zZWFyY2gtaW5wdXQtY29sb3IpO2ZvbnQtc2l6ZToxZW19LmJlc3Bva2Utc2VhcmNoLXNlYXJjaGluZyAjYmVzcG9rZS1zZWFyY2h7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0jYmVzcG9rZS1zZWFyY2gtaW5mb3t3aWR0aDoxMDAlO21hcmdpbi10b3A6MWVtO2ZvbnQtc2l6ZTouOWVtO3RleHQtYWxpZ246bGVmdDtjb2xvcjp2YXIoLS1zZWFyY2gtaW5mby1jb2xvcil9I2Jlc3Bva2Utc2VhcmNoLWluZm8ga2Jke21hcmdpbjowIC4xZW07cGFkZGluZzouMWVtIC42ZW07Ym9yZGVyLXJhZGl1czozcHg7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO2NvbG9yOnZhcigtLXNlYXJjaC1pbmZvLWtiZC1jb2xvcik7bGluZS1oZWlnaHQ6MS40O2ZvbnQtc2l6ZTouN2VtO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JveC1zaGFkb3c6MCAxcHggMCByZ2JhKDAsMCwwLC42KSxpbnNldCAwIDAgMCAycHggI2NjYztiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXNlYXJjaC1pbmZvLWtiZC1iZyl9I2Jlc3Bva2Utc2VhcmNoLWluZm8ga2JkOmxhc3Qtb2YtdHlwZXttYXJnaW4tcmlnaHQ6MWVtfSNiZXNwb2tlLXNlYXJjaC1pbmZvIHN1bW1hcnl7ZGlzcGxheTpsaXN0LWl0ZW07Y291bnRlci1pbmNyZW1lbnQ6bGlzdC1pdGVtIDA7bGlzdC1zdHlsZTppbnNpZGUgZGlzY2xvc3VyZS1jbG9zZWQ7Y3Vyc29yOnBvaW50ZXJ9LmJlc3Bva2Utc2VhcmNoLWluZm8tcGFpcnttYXJnaW4tcmlnaHQ6MWVtO3doaXRlLXNwYWNlOm5vd3JhcDtkaXNwbGF5OmlubGluZS1mbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW4tYm90dG9tOi4yNWVtfSNiZXNwb2tlLXNlYXJjaC1pbmZvW29wZW5dPnN1bW1hcnk6Zmlyc3Qtb2YtdHlwZXtsaXN0LXN0eWxlLXR5cGU6ZGlzY2xvc3VyZS1vcGVufS5iZXNwb2tlLWJ1bGxldHMtb2ZmIC5iZXNwb2tlLWJ1bGxldC5iZXNwb2tlLWJ1bGxldC1pbmFjdGl2ZXtvcGFjaXR5OjE7dHJhbnNmb3JtOm5vbmV9LmJlc3Bva2Utc2VhcmNoLXNoYWtpbmd7YW5pbWF0aW9uOnNoYWtpbmcgLjVzIGVhc2Utb3V0IDBzIDF9QG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTpkYXJrKXsjYmVzcG9rZS1zZWFyY2gtcGFyZW50ey0tc2VhcmNoLXBhcmVudC1iZzpyZ2JhKDI1NSwyNTUsMjU1LDAuNCk7LS1zZWFyY2gtYmc6cmdiYSgwLDAsMCwwLjIpOy0tc2VhcmNoLWluZm8tY29sb3I6I2VlZX19QG1lZGlhIHByaW50ezpyb290ey0tc2xpZGUtc3BhY2luZzo2NHB4fS5iZXNwb2tlLXBhcmVudCwuYmVzcG9rZS1zY2FsZS1wYXJlbnR7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyO2NvbHVtbi1nYXA6dmFyKC0tc2xpZGUtc3BhY2luZyk7cm93LWdhcDp2YXIoLS1zbGlkZS1zcGFjaW5nKTt0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3dpZHRoOjIxOTcuMzMzMzMzMzMzMzMzcHg7aGVpZ2h0OjEwMHZoO292ZXJmbG93OnZpc2libGU7dHJhbnNmb3JtOnNjYWxlKC4zNjEyMTA5MTY3OTYxMTcpfS5iZXNwb2tlLXNsaWRle3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwNjYuNjY2NjY2NjY2NjY2NXB4O2hlaWdodDo2MDBweDtvdXRsaW5lOjJweCBzb2xpZCAjMDAwIWltcG9ydGFudDtwYWdlLWJyZWFrLWluc2lkZTphdm9pZCFpbXBvcnRhbnR9LmJlc3Bva2Utc2xpZGUgLmJlc3Bva2UtYnVsbGV0LWluYWN0aXZle29wYWNpdHk6MSFpbXBvcnRhbnQ7dHJhbnNmb3JtOm5vbmUhaW1wb3J0YW50O3RyYW5zaXRpb246bm9uZSFpbXBvcnRhbnR9QHBhZ2V7bWFyZ2luOjc1Ljg0cHghaW1wb3J0YW50fS5iZXNwb2tlLXNjYWxlLXBhcmVudHt0cmFuc2Zvcm06bm9uZSFpbXBvcnRhbnQ7em9vbToxIWltcG9ydGFudH19QG1lZGlhIHByaW50IGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKXsuYmVzcG9rZS1wYXJlbnQsLmJlc3Bva2Utc2NhbGUtcGFyZW50ey0tc2xpZGUtc3BhY2luZzoxMTBweDtyb3ctZ2FwOmNhbGModmFyKC0tc2xpZGUtc3BhY2luZykqMS41KTtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDMsMWZyKTt3aWR0aDoyMTk3LjMzMzMzMzMzMzMzM3B4O3RyYW5zZm9ybTpzY2FsZSguMzYxMjEwOTE2Nzk2MTE3KX19XCI7IChyZXF1aXJlKFwiYnJvd3NlcmlmeS1jc3NcIikuY3JlYXRlU3R5bGUoY3NzLCB7IFwiaHJlZlwiOiBcImRpc3RcXFxcdGhlbWVcXFxcdGhlbWUuY3NzXCIgfSwgeyBcImluc2VydEF0XCI6IFwiYm90dG9tXCIgfSkpOyBtb2R1bGUuZXhwb3J0cyA9IGNzczsiLCJjb25zdCBjbGFzc2VzID0gcmVxdWlyZSgnYmVzcG9rZS1jbGFzc2VzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHsgaW5zZXJ0Rm9udHMgPSB0cnVlIH0pIHtcclxuICBpZiAoaW5zZXJ0Rm9udHMpIHtcclxuICAgIHJlcXVpcmUoXCIuLi9kaXN0L3RoZW1lL2ZvbnRzLmNzc1wiKTtcclxuICB9XHJcbiAgcmVxdWlyZShcIi4uL2Rpc3QvdGhlbWUvdGhlbWUuY3NzXCIpO1xyXG5cclxuICByZXR1cm4gZnVuY3Rpb24oZGVjaykge1xyXG4gICAgY2xhc3NlcygpKGRlY2spO1xyXG4gIH07XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICByZXR1cm4gZnVuY3Rpb24oZGVjaykge1xuICAgIHZhciBhY3RpdmVTbGlkZUluZGV4LFxuICAgICAgYWN0aXZlQnVsbGV0SW5kZXgsXG5cbiAgICAgIGJ1bGxldHMgPSBkZWNrLnNsaWRlcy5tYXAoZnVuY3Rpb24oc2xpZGUpIHtcbiAgICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwoc2xpZGUucXVlcnlTZWxlY3RvckFsbCgodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnID8gb3B0aW9ucyA6ICdbZGF0YS1iZXNwb2tlLWJ1bGxldF0nKSksIDApO1xuICAgICAgfSksXG5cbiAgICAgIG5leHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG5leHRTbGlkZUluZGV4ID0gYWN0aXZlU2xpZGVJbmRleCArIDE7XG5cbiAgICAgICAgaWYgKGFjdGl2ZVNsaWRlSGFzQnVsbGV0QnlPZmZzZXQoMSkpIHtcbiAgICAgICAgICBhY3RpdmF0ZUJ1bGxldChhY3RpdmVTbGlkZUluZGV4LCBhY3RpdmVCdWxsZXRJbmRleCArIDEpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChidWxsZXRzW25leHRTbGlkZUluZGV4XSkge1xuICAgICAgICAgIGFjdGl2YXRlQnVsbGV0KG5leHRTbGlkZUluZGV4LCAwKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgcHJldiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcHJldlNsaWRlSW5kZXggPSBhY3RpdmVTbGlkZUluZGV4IC0gMTtcblxuICAgICAgICBpZiAoYWN0aXZlU2xpZGVIYXNCdWxsZXRCeU9mZnNldCgtMSkpIHtcbiAgICAgICAgICBhY3RpdmF0ZUJ1bGxldChhY3RpdmVTbGlkZUluZGV4LCBhY3RpdmVCdWxsZXRJbmRleCAtIDEpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChidWxsZXRzW3ByZXZTbGlkZUluZGV4XSkge1xuICAgICAgICAgIGFjdGl2YXRlQnVsbGV0KHByZXZTbGlkZUluZGV4LCBidWxsZXRzW3ByZXZTbGlkZUluZGV4XS5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgYWN0aXZhdGVCdWxsZXQgPSBmdW5jdGlvbihzbGlkZUluZGV4LCBidWxsZXRJbmRleCkge1xuICAgICAgICBhY3RpdmVTbGlkZUluZGV4ID0gc2xpZGVJbmRleDtcbiAgICAgICAgYWN0aXZlQnVsbGV0SW5kZXggPSBidWxsZXRJbmRleDtcblxuICAgICAgICBidWxsZXRzLmZvckVhY2goZnVuY3Rpb24oc2xpZGUsIHMpIHtcbiAgICAgICAgICBzbGlkZS5mb3JFYWNoKGZ1bmN0aW9uKGJ1bGxldCwgYikge1xuICAgICAgICAgICAgYnVsbGV0LmNsYXNzTGlzdC5hZGQoJ2Jlc3Bva2UtYnVsbGV0Jyk7XG5cbiAgICAgICAgICAgIGlmIChzIDwgc2xpZGVJbmRleCB8fCBzID09PSBzbGlkZUluZGV4ICYmIGIgPD0gYnVsbGV0SW5kZXgpIHtcbiAgICAgICAgICAgICAgYnVsbGV0LmNsYXNzTGlzdC5hZGQoJ2Jlc3Bva2UtYnVsbGV0LWFjdGl2ZScpO1xuICAgICAgICAgICAgICBidWxsZXQuY2xhc3NMaXN0LnJlbW92ZSgnYmVzcG9rZS1idWxsZXQtaW5hY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGJ1bGxldC5jbGFzc0xpc3QuYWRkKCdiZXNwb2tlLWJ1bGxldC1pbmFjdGl2ZScpO1xuICAgICAgICAgICAgICBidWxsZXQuY2xhc3NMaXN0LnJlbW92ZSgnYmVzcG9rZS1idWxsZXQtYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzID09PSBzbGlkZUluZGV4ICYmIGIgPT09IGJ1bGxldEluZGV4KSB7XG4gICAgICAgICAgICAgIGJ1bGxldC5jbGFzc0xpc3QuYWRkKCdiZXNwb2tlLWJ1bGxldC1jdXJyZW50Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBidWxsZXQuY2xhc3NMaXN0LnJlbW92ZSgnYmVzcG9rZS1idWxsZXQtY3VycmVudCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIGFjdGl2ZVNsaWRlSGFzQnVsbGV0QnlPZmZzZXQgPSBmdW5jdGlvbihvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIGJ1bGxldHNbYWN0aXZlU2xpZGVJbmRleF1bYWN0aXZlQnVsbGV0SW5kZXggKyBvZmZzZXRdICE9PSB1bmRlZmluZWQ7XG4gICAgICB9O1xuXG4gICAgZGVjay5vbignbmV4dCcsIG5leHQpO1xuICAgIGRlY2sub24oJ3ByZXYnLCBwcmV2KTtcblxuICAgIGRlY2sub24oJ3NsaWRlJywgZnVuY3Rpb24oZSkge1xuICAgICAgYWN0aXZhdGVCdWxsZXQoZS5pbmRleCwgMCk7XG4gICAgfSk7XG5cbiAgICBhY3RpdmF0ZUJ1bGxldCgwLCAwKTtcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZnVuY3Rpb24oZGVjaykge1xuICAgIHZhciBhZGRDbGFzcyA9IGZ1bmN0aW9uKGVsLCBjbHMpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnYmVzcG9rZS0nICsgY2xzKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZUNsYXNzID0gZnVuY3Rpb24oZWwsIGNscykge1xuICAgICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWVcbiAgICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKCdiZXNwb2tlLScgKyBjbHMgKycoXFxcXHN8JCknLCAnZycpLCAnICcpXG4gICAgICAgICAgLnRyaW0oKTtcbiAgICAgIH0sXG5cbiAgICAgIGRlYWN0aXZhdGUgPSBmdW5jdGlvbihlbCwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGFjdGl2ZVNsaWRlID0gZGVjay5zbGlkZXNbZGVjay5zbGlkZSgpXSxcbiAgICAgICAgICBvZmZzZXQgPSBpbmRleCAtIGRlY2suc2xpZGUoKSxcbiAgICAgICAgICBvZmZzZXRDbGFzcyA9IG9mZnNldCA+IDAgPyAnYWZ0ZXInIDogJ2JlZm9yZSc7XG5cbiAgICAgICAgWydiZWZvcmUoLVxcXFxkKyk/JywgJ2FmdGVyKC1cXFxcZCspPycsICdhY3RpdmUnLCAnaW5hY3RpdmUnXS5tYXAocmVtb3ZlQ2xhc3MuYmluZChudWxsLCBlbCkpO1xuXG4gICAgICAgIGlmIChlbCAhPT0gYWN0aXZlU2xpZGUpIHtcbiAgICAgICAgICBbJ2luYWN0aXZlJywgb2Zmc2V0Q2xhc3MsIG9mZnNldENsYXNzICsgJy0nICsgTWF0aC5hYnMob2Zmc2V0KV0ubWFwKGFkZENsYXNzLmJpbmQobnVsbCwgZWwpKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgIGFkZENsYXNzKGRlY2sucGFyZW50LCAncGFyZW50Jyk7XG4gICAgZGVjay5zbGlkZXMubWFwKGZ1bmN0aW9uKGVsKSB7IGFkZENsYXNzKGVsLCAnc2xpZGUnKTsgfSk7XG5cbiAgICBkZWNrLm9uKCdhY3RpdmF0ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGRlY2suc2xpZGVzLm1hcChkZWFjdGl2YXRlKTtcbiAgICAgIGFkZENsYXNzKGUuc2xpZGUsICdhY3RpdmUnKTtcbiAgICAgIHJlbW92ZUNsYXNzKGUuc2xpZGUsICdpbmFjdGl2ZScpO1xuICAgIH0pO1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBmdW5jdGlvbihkZWNrKSB7XG4gICAgdmFyIGFjdGl2YXRlU2xpZGUgPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgdmFyIGluZGV4VG9BY3RpdmF0ZSA9IC0xIDwgaW5kZXggJiYgaW5kZXggPCBkZWNrLnNsaWRlcy5sZW5ndGggPyBpbmRleCA6IDA7XG4gICAgICBpZiAoaW5kZXhUb0FjdGl2YXRlICE9PSBkZWNrLnNsaWRlKCkpIHtcbiAgICAgICAgZGVjay5zbGlkZShpbmRleFRvQWN0aXZhdGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcGFyc2VIYXNoID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpLFxuICAgICAgICBzbGlkZU51bWJlck9yTmFtZSA9IHBhcnNlSW50KGhhc2gsIDEwKTtcblxuICAgICAgaWYgKGhhc2gpIHtcbiAgICAgICAgaWYgKHNsaWRlTnVtYmVyT3JOYW1lKSB7XG4gICAgICAgICAgYWN0aXZhdGVTbGlkZShzbGlkZU51bWJlck9yTmFtZSAtIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlY2suc2xpZGVzLmZvckVhY2goZnVuY3Rpb24oc2xpZGUsIGkpIHtcbiAgICAgICAgICAgIGlmIChzbGlkZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmVzcG9rZS1oYXNoJykgPT09IGhhc2ggfHwgc2xpZGUuaWQgPT09IGhhc2gpIHtcbiAgICAgICAgICAgICAgYWN0aXZhdGVTbGlkZShpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgcGFyc2VIYXNoKCk7XG5cbiAgICAgIGRlY2sub24oJ2FjdGl2YXRlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgc2xpZGVOYW1lID0gZS5zbGlkZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmVzcG9rZS1oYXNoJykgfHwgZS5zbGlkZS5pZDtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBzbGlkZU5hbWUgfHwgZS5pbmRleCArIDE7XG4gICAgICB9KTtcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBwYXJzZUhhc2gpO1xuICAgIH0sIDApO1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICByZXR1cm4gZnVuY3Rpb24oZGVjaykge1xuICAgIHZhciBpc0hvcml6b250YWwgPSBvcHRpb25zICE9PSAndmVydGljYWwnO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChlLndoaWNoID09IDM0IHx8IC8vIFBBR0UgRE9XTlxuICAgICAgICAoZS53aGljaCA9PSAzMiAmJiAhZS5zaGlmdEtleSkgfHwgLy8gU1BBQ0UgV0lUSE9VVCBTSElGVFxuICAgICAgICAoaXNIb3Jpem9udGFsICYmIGUud2hpY2ggPT0gMzkpIHx8IC8vIFJJR0hUXG4gICAgICAgICghaXNIb3Jpem9udGFsICYmIGUud2hpY2ggPT0gNDApIC8vIERPV05cbiAgICAgICkgeyBkZWNrLm5leHQoKTsgfVxuXG4gICAgICBpZiAoZS53aGljaCA9PSAzMyB8fCAvLyBQQUdFIFVQXG4gICAgICAgIChlLndoaWNoID09IDMyICYmIGUuc2hpZnRLZXkpIHx8IC8vIFNQQUNFICsgU0hJRlRcbiAgICAgICAgKGlzSG9yaXpvbnRhbCAmJiBlLndoaWNoID09IDM3KSB8fCAvLyBMRUZUXG4gICAgICAgICghaXNIb3Jpem9udGFsICYmIGUud2hpY2ggPT0gMzgpIC8vIFVQXG4gICAgICApIHsgZGVjay5wcmV2KCk7IH1cbiAgICB9KTtcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkZWNrKSB7XG4gICAgdmFyIHByb2dyZXNzUGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICBwcm9ncmVzc0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgc2xpZGVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpLFxuICAgICAgcHJvcCA9IG9wdGlvbnMgPT09ICd2ZXJ0aWNhbCcgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgICBwcm9ncmVzc1BhcmVudC5jbGFzc05hbWUgPSAnYmVzcG9rZS1wcm9ncmVzcy1wYXJlbnQnO1xuICAgIHByb2dyZXNzUGFyZW50LmFwcGVuZENoaWxkKHByb2dyZXNzQmFyKTtcbiAgICBwcm9ncmVzc0Jhci5jbGFzc05hbWUgPSAnYmVzcG9rZS1wcm9ncmVzcy1iYXInO1xuICAgIHNsaWRlTnVtYmVyLmNsYXNzTmFtZSA9ICdiZXNwb2tlLXByb2dyZXNzLW51bWJlcic7XG4gICAgZGVjay5wYXJlbnQuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NQYXJlbnQpO1xuICAgIGRlY2sucGFyZW50LmFwcGVuZENoaWxkKHNsaWRlTnVtYmVyKTtcblxuICAgIGRlY2sub24oJ2FjdGl2YXRlJywgZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIHBlcmNlbnRhZ2UgPSBlLmluZGV4ICogMTAwIC8gKGRlY2suc2xpZGVzLmxlbmd0aCAtIDEpLFxuICAgICAgICBudW1iZXIgPSAoZS5pbmRleCArIDEpICsgJyc7XG4gICAgICBwcm9ncmVzc0Jhci5zdHlsZVtwcm9wXSA9IHBlcmNlbnRhZ2UgKyAnJSc7XG4gICAgICBzbGlkZU51bWJlci5pbm5lckhUTUwgPSBudW1iZXIucGFkU3RhcnQoMiwgJzAnKTtcbiAgICB9KTtcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICByZXR1cm4gZnVuY3Rpb24oZGVjaykge1xyXG4gICAgdmFyIHBhcmVudCA9IGRlY2sucGFyZW50LFxyXG4gICAgICBjdXJyZW50U2xpZGUgPSBkZWNrLnNsaWRlc1tkZWNrLnNsaWRlKCldIHx8IGRlY2suc2xpZGVzWzBdLFxyXG4gICAgICBzbGlkZUhlaWdodCA9IGN1cnJlbnRTbGlkZS5vZmZzZXRIZWlnaHQsXHJcbiAgICAgIHNsaWRlV2lkdGggPSBjdXJyZW50U2xpZGUub2Zmc2V0V2lkdGgsXHJcbiAgICAgIHVzZVpvb20gPSBvcHRpb25zID09PSAnem9vbScgfHwgKCd6b29tJyBpbiBwYXJlbnQuc3R5bGUgJiYgb3B0aW9ucyAhPT0gJ3RyYW5zZm9ybScpLFxyXG5cclxuICAgICAgaW5uZXJXcmFwID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgIHZhciBpbm5lcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBpbm5lcldyYXBwZXIuY2xhc3NOYW1lID0gJ2Jlc3Bva2Utc2NhbGUtcGFyZW50JztcclxuICAgICAgICB3aGlsZSAoZWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBpbm5lcldyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5uZXJXcmFwcGVyKTtcclxuICAgICAgICByZXR1cm4gaW5uZXJXcmFwcGVyO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgZWxlbWVudCA9IHVzZVpvb20gPyBwYXJlbnQgOiBpbm5lcldyYXAocGFyZW50KSxcclxuXHJcbiAgICAgIHRyYW5zZm9ybVByb3BlcnR5ID0gKGZ1bmN0aW9uKHByb3BlcnR5KSB7XHJcbiAgICAgICAgdmFyIHByZWZpeGVzID0gJ01veiBXZWJraXQgTyBtcycuc3BsaXQoJyAnKTtcclxuICAgICAgICByZXR1cm4gcHJlZml4ZXMucmVkdWNlKGZ1bmN0aW9uKGN1cnJlbnRQcm9wZXJ0eSwgcHJlZml4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcmVmaXggKyBwcm9wZXJ0eSBpbiBwYXJlbnQuc3R5bGUgPyBwcmVmaXggKyBwcm9wZXJ0eSA6IGN1cnJlbnRQcm9wZXJ0eTtcclxuICAgICAgICAgIH0sIHByb3BlcnR5LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICB9KCdUcmFuc2Zvcm0nKSksXHJcblxyXG4gICAgICBzY2FsZSA9IHVzZVpvb20gP1xyXG4gICAgICAgIGZ1bmN0aW9uKHJhdGlvLCBlbGVtZW50KSB7XHJcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLnpvb20gPSByYXRpbztcclxuICAgICAgICB9IDpcclxuICAgICAgICBmdW5jdGlvbihyYXRpbywgZWxlbWVudCkge1xyXG4gICAgICAgICAgZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSAnc2NhbGUoJyArIHJhdGlvICsgJyknO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICBzY2FsZUFsbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciB4U2NhbGUgPSBwYXJlbnQub2Zmc2V0V2lkdGggLyBzbGlkZVdpZHRoLFxyXG4gICAgICAgICAgeVNjYWxlID0gKHBhcmVudC5vZmZzZXRIZWlnaHQgLyBzbGlkZUhlaWdodCkgfHwgMDtcclxuXHJcbiAgICAgICAgc2NhbGUoTWF0aC5taW4oeFNjYWxlLCB5U2NhbGUpLCBlbGVtZW50KTtcclxuICAgICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2NhbGVBbGwpO1xyXG4gICAgc2NhbGVBbGwoKTtcclxuICB9O1xyXG5cclxufTtcclxuIiwiLyohXG4gKiBiZXNwb2tlLXNlYXJjaCB2MS4wLjBcbiAqXG4gKiBDb3B5cmlnaHQgMjAyMSwgRmzDoXZpb1xuICogVGhpcyBjb250ZW50IGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG5cbihmdW5jdGlvbihmKXtpZih0eXBlb2YgZXhwb3J0cz09PVwib2JqZWN0XCImJnR5cGVvZiBtb2R1bGUhPT1cInVuZGVmaW5lZFwiKXttb2R1bGUuZXhwb3J0cz1mKCl9ZWxzZSBpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUoW10sZil9ZWxzZXt2YXIgZztpZih0eXBlb2Ygd2luZG93IT09XCJ1bmRlZmluZWRcIil7Zz13aW5kb3d9ZWxzZSBpZih0eXBlb2YgZ2xvYmFsIT09XCJ1bmRlZmluZWRcIil7Zz1nbG9iYWx9ZWxzZSBpZih0eXBlb2Ygc2VsZiE9PVwidW5kZWZpbmVkXCIpe2c9c2VsZn1lbHNle2c9dGhpc31nPShnLmJlc3Bva2V8fChnLmJlc3Bva2UgPSB7fSkpO2c9KGcucGx1Z2luc3x8KGcucGx1Z2lucyA9IHt9KSk7Zy5zZWFyY2ggPSBmKCl9fSkoZnVuY3Rpb24oKXt2YXIgZGVmaW5lLG1vZHVsZSxleHBvcnRzO3JldHVybiAoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpKHsxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBjc3MgPSBcIjpyb290ey0tc2VhcmNoLXJlc3VsdC1iZzp5ZWxsb3c7LS1zZWFyY2gtcmVzdWx0LWZvY3VzZWQtYmc6b3JhbmdlfSNiZXNwb2tlLXNlYXJjaC1wYXJlbnR7LS1zZWFyY2gtcGFyZW50LWJnOiMwMDA2Oy0tc2VhcmNoLW1hcmdpbjowLjVlbTstLXNlYXJjaC1iZzojZmZmMzstLXNlYXJjaC1pbnB1dC1sZW5ndGg6MTJlbTstLXNlYXJjaC1pbnB1dC1wb3NpdGlvbjpmbGV4LWVuZDstLXNlYXJjaC1pbnB1dC1jb2xvcjojMzMzOy0tc2VhcmNoLWluZm8tY29sb3I6IzMzMzstLXNlYXJjaC1pbmZvLWtiZC1jb2xvcjojMDAwOy0tc2VhcmNoLWluZm8ta2JkLWJnOiNjY2M7LS1zZWFyY2gtbm8tcmVzdWx0LWNvbG9yOiM4YjAwMDA7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6dmFyKC0tc2VhcmNoLWlucHV0LXBvc2l0aW9uKTthbGlnbi1pdGVtczpjZW50ZXI7cG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5OjA7dHJhbnNpdGlvbjphbGwgLjJzIGVhc2U7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1zZWFyY2gtcGFyZW50LWJnKTtmb250LXNpemU6MS4yNXJlbTtwZXJzcGVjdGl2ZTo5MDBweH0jYmVzcG9rZS1zZWFyY2gtcGFyZW50LmJlc3Bva2Utc2VhcmNoLXNlYXJjaGluZ3tvcGFjaXR5OjE7cG9pbnRlci1ldmVudHM6YXV0bzt6LWluZGV4OjEwMDB9I2Jlc3Bva2Utc2VhcmNoe2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47ZmxleC13cmFwOndyYXA7YWxpZ24taXRlbXM6YmFzZWxpbmU7bWFyZ2luOnZhcigtLXNlYXJjaC1tYXJnaW4pO3BhZGRpbmc6MWVtO2JvcmRlci1yYWRpdXM6MTBweDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O3dpZHRoOmNhbGModmFyKC0tc2VhcmNoLWlucHV0LWxlbmd0aCkgKyA1ZW0pO2JhY2tncm91bmQtY29sb3I6dmFyKC0tc2VhcmNoLWJnKTtiYWNrZHJvcC1maWx0ZXI6Ymx1cig2cHgpO3RyYW5zaXRpb246YWxsIC4zcyBjdWJpYy1iZXppZXIoLjA2LC45OSwuNDYsMS4xNik7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTYwcHgpIHJvdGF0ZVgoOTBkZWcpO29wYWNpdHk6MH0jYmVzcG9rZS1zZWFyY2gtcmVzdWx0cy1jb3VudHtmb250LXNpemU6Ljc1ZW07Zm9udC1mYW1pbHk6bW9ub3NwYWNlfS5iZXNwb2tlLXNlYXJjaC1uby1yZXN1bHQ+I2Jlc3Bva2Utc2VhcmNoLWlucHV0e291dGxpbmU6MXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0tc2VhcmNoLW5vLXJlc3VsdC1jb2xvcil9LmJlc3Bva2Utc2VhcmNoLXJlc3VsdHtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXNlYXJjaC1yZXN1bHQtYmcsI2ZmMCl9LmJlc3Bva2Utc2VhcmNoLXJlc3VsdC1mb2N1c2Vke2JhY2tncm91bmQtY29sb3I6dmFyKC0tc2VhcmNoLXJlc3VsdC1mb2N1c2VkLWJnLG9yYW5nZSl9I2Jlc3Bva2Utc2VhcmNoLWlucHV0e3dpZHRoOnZhcigtLXNlYXJjaC1pbnB1dC1sZW5ndGgpO3BhZGRpbmc6LjI1ZW0gLjQ1ZW07Ym9yZGVyOjFweCBzb2xpZCBjdXJyZW50Q29sb3I7Ym9yZGVyLXJhZGl1czo1cHg7Y29sb3I6dmFyKC0tc2VhcmNoLWlucHV0LWNvbG9yKTtmb250LXNpemU6MWVtfS5iZXNwb2tlLXNlYXJjaC1zZWFyY2hpbmcgI2Jlc3Bva2Utc2VhcmNoe3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9I2Jlc3Bva2Utc2VhcmNoLWluZm97d2lkdGg6MTAwJTttYXJnaW4tdG9wOjFlbTtmb250LXNpemU6LjdlbTt0ZXh0LWFsaWduOmxlZnQ7Y29sb3I6dmFyKC0tc2VhcmNoLWluZm8tY29sb3IpfS5iZXNwb2tlLXNlYXJjaC1pbmZvLXBhaXJ7bWFyZ2luLXJpZ2h0OjFlbTt3aGl0ZS1zcGFjZTpub3dyYXA7ZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luLWJvdHRvbTouMjVlbX0jYmVzcG9rZS1zZWFyY2gtaW5mbyBrYmR7bWFyZ2luOjAgLjFlbTtwYWRkaW5nOi4xZW0gLjZlbTtib3JkZXItcmFkaXVzOjNweDtib3JkZXI6MXB4IHNvbGlkICNjY2M7Y29sb3I6dmFyKC0tc2VhcmNoLWluZm8ta2JkLWNvbG9yKTtsaW5lLWhlaWdodDoxLjQ7Zm9udC1zaXplOi43ZW07ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym94LXNoYWRvdzowIDFweCAwICMwMDA5LGluc2V0IDAgMCAwIDJweCAjY2NjO2JhY2tncm91bmQtY29sb3I6dmFyKC0tc2VhcmNoLWluZm8ta2JkLWJnKX0jYmVzcG9rZS1zZWFyY2gtaW5mbyBrYmQ6bGFzdC1vZi10eXBle21hcmdpbi1yaWdodDoxZW19I2Jlc3Bva2Utc2VhcmNoLWluZm8gc3VtbWFyeXtkaXNwbGF5Omxpc3QtaXRlbTtjb3VudGVyLWluY3JlbWVudDpsaXN0LWl0ZW0gMDtsaXN0LXN0eWxlOmluc2lkZSBkaXNjbG9zdXJlLWNsb3NlZDtjdXJzb3I6cG9pbnRlcn0jYmVzcG9rZS1zZWFyY2gtaW5mb1tvcGVuXT5zdW1tYXJ5OmZpcnN0LW9mLXR5cGV7bGlzdC1zdHlsZS10eXBlOmRpc2Nsb3N1cmUtb3Blbn0uYmVzcG9rZS1idWxsZXRzLW9mZiAuYmVzcG9rZS1idWxsZXQuYmVzcG9rZS1idWxsZXQtaW5hY3RpdmV7b3BhY2l0eToxO3RyYW5zZm9ybTpub25lfS5iZXNwb2tlLXNlYXJjaC1zaGFraW5ne2FuaW1hdGlvbjpzaGFraW5nIC41cyBlYXNlLW91dCAwcyAxfUBrZXlmcmFtZXMgc2hha2luZ3swJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoNHB4LDAsMCl9MTAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtN3B4LC01cHgsMCl9MjAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCg4cHgsNXB4LDApfTMwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTdweCwzcHgsMCl9NDAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCg5cHgsLTNweCwwKX01MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC00cHgsM3B4LDApfTYwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoNHB4LC00cHgsMCl9NzAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNXB4LC00cHgsMCl9ODAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCg0cHgsMnB4LDApfTkwJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTNweCwtMXB4LDApfTEwMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKX19QG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTpkYXJrKXsjYmVzcG9rZS1zZWFyY2gtcGFyZW50ey0tc2VhcmNoLXBhcmVudC1iZzojZmZmNjstLXNlYXJjaC1iZzojMDAwMzstLXNlYXJjaC1pbmZvLWNvbG9yOiNlZWV9fVwiOyAoX2RlcmVxXyhcImJyb3dzZXJpZnktY3NzXCIpLmNyZWF0ZVN0eWxlKGNzcywgeyBcImhyZWZcIjogXCJsaWJcXFxcYmVzcG9rZS1zZWFyY2guY3NzXCIgfSwgeyBcImluc2VydEF0XCI6IFwiYm90dG9tXCIgfSkpOyBtb2R1bGUuZXhwb3J0cyA9IGNzcztcbn0se1wiYnJvd3NlcmlmeS1jc3NcIjozfV0sMjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5jb25zdCBrZXltYWdlID0gX2RlcmVxXygna2V5bWFnZScpXHJcbmNvbnN0IG1ha2VBcnJheSA9IG9iaiA9PiBBcnJheS5pc0FycmF5KG9iaikgPyBvYmogOiBbb2JqXVxyXG5jb25zdCBjaGFyYWN0ZXJSZW1hcHBlciA9IHtcclxuICBzb3VyY2U6ICfDocOgw6PDosOpw6jDqsOtw6zDs8Oyw7XDtMO6w7nDpycsXHJcbiAgdGFyZ2V0OiAnYWFhYWVlZWlpb29vb3V1YydcclxufVxyXG5cclxuZnVuY3Rpb24gdG9OZXV0cmFsUmVnZXgodGV4dCkge1xyXG4gIGxldCBhY2NlbnRlZCA9IFtdXHJcbiAgbGV0IGN1cnJlbnROZXV0cmFsID0gY2hhcmFjdGVyUmVtYXBwZXIudGFyZ2V0WzBdXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gY2hhcmFjdGVyUmVtYXBwZXIuc291cmNlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoY2hhcmFjdGVyUmVtYXBwZXIudGFyZ2V0W2ldICE9PSBjdXJyZW50TmV1dHJhbCB8fCBpID09PSBjaGFyYWN0ZXJSZW1hcHBlci5zb3VyY2UubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IGNoYXJhY3Rlckdyb3VwID0gYFske2FjY2VudGVkLmNvbmNhdChjdXJyZW50TmV1dHJhbCkuam9pbignJyl9XWBcclxuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZUFsbChcclxuICAgICAgICBuZXcgUmVnRXhwKGNoYXJhY3Rlckdyb3VwLCAnZ2knKSxcclxuICAgICAgICBjaGFyYWN0ZXJHcm91cFxyXG4gICAgICApXHJcbiAgICAgIGFjY2VudGVkID0gW11cclxuICAgICAgY3VycmVudE5ldXRyYWwgPSBjaGFyYWN0ZXJSZW1hcHBlci50YXJnZXRbaV1cclxuICAgIH1cclxuICAgIGFjY2VudGVkLnB1c2goY2hhcmFjdGVyUmVtYXBwZXIuc291cmNlW2ldKVxyXG4gIH1cclxuICByZXR1cm4gdGV4dFxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHtcclxuICBpbnNlcnRTdHlsZXMgPSB0cnVlLFxyXG4gIGtleXM6IHtcclxuICAgIHNob3c6IHNob3dLZXkgPSAnY3RybC1mJyxcclxuICAgIGRpc21pc3M6IGRpc21pc3NLZXkgPSAnZXNjYXBlJyxcclxuICAgIHRyaWdnZXI6IHRyaWdnZXJLZXkgPSAnZW50ZXInLFxyXG4gICAgbmV4dDogbmV4dEtleSA9ICd0YWInLFxyXG4gICAgcHJldmlvdXM6IHByZXZpb3VzS2V5ID0gJ3NoaWZ0LXRhYidcclxuICB9ID0ge30sXHJcbiAgdGV4dDoge1xyXG4gICAgc2VhcmNoSGVyZTogdGV4dFNlYXJjaEhlcmUgPSAnU2VhcmNoIGhlcmUuLi4nLFxyXG4gICAgaW5zdHJ1Y3Rpb25zOiB0ZXh0SW5zdHJ1Y3Rpb25zID0gJ0luc3RydWN0aW9ucycsXHJcbiAgICBvcGVuU2VhcmNoOiB0ZXh0T3BlblNlYXJjaCA9ICdPcGVuIHNlYXJjaCcsXHJcbiAgICBjbG9zZVNlYXJjaDogdGV4dENsb3NlU2VhcmNoID0gJ0Nsb3NlIHNlYXJjaCcsXHJcbiAgICBzZWFyY2g6IHRleHRTZWFyY2ggPSAnU2VhcmNoJyxcclxuICAgIG5leHRSZXN1bHQ6IHRleHROZXh0UmVzdWx0ID0gJ05leHQgcmVzdWx0JyxcclxuICAgIHByZXZpb3VzUmVzdWx0OiB0ZXh0UHJldmlvdXNSZXN1bHQgPSAnUHJldmlvdXMgcmVzdWx0J1xyXG4gIH0gPSB7fVxyXG59ID0ge30pIHsgXHJcbiAgXHJcbiAgc2hvd0tleSA9IG1ha2VBcnJheShzaG93S2V5KVxyXG4gIGRpc21pc3NLZXkgPSBtYWtlQXJyYXkoZGlzbWlzc0tleSlcclxuICB0cmlnZ2VyS2V5ID0gbWFrZUFycmF5KHRyaWdnZXJLZXkpXHJcbiAgbmV4dEtleSA9IG1ha2VBcnJheShuZXh0S2V5KVxyXG4gIHByZXZpb3VzS2V5ID0gbWFrZUFycmF5KHByZXZpb3VzS2V5KVxyXG4gIFxyXG4gIHJldHVybiBmdW5jdGlvbihkZWNrKSB7XHJcbiAgICBjb25zdCBjYWNoZWRTbGlkZXNUZXh0ID0gZGVjay5zbGlkZXMubWFwKChzbGlkZSwgaSkgPT4gKHtpOiBpLCB0ZXh0OiBzbGlkZS50ZXh0Q29udGVudH0pKVxyXG4gICAgbGV0IHNlYXJjaFBhcmVudEVsXHJcbiAgICBsZXQgc2VhcmNoRWxcclxuICAgIGxldCBzZWFyY2hJbnB1dEVsXHJcbiAgICBsZXQgc2VhcmNoUmVzdWx0c0NvdW50RWxcclxuICAgIGxldCBzZWFyY2hJbmZvRWxcclxuICAgIGxldCBjdXJyZW50UmVzdWx0SW5kZXhcclxuICAgIGxldCBhY3RpdmVTZWFyY2hQYXR0ZXJuID0gJydcclxuICAgIGxldCByZXN1bHRzID0gW11cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhclJlc3VsdHMoKSB7XHJcbiAgICAgIGxldCBwYXJlbnRzT2ZSZXN1bHRzID0gbmV3IFNldCgpXHJcblxyXG4gICAgICByZXN1bHRzLmZvckVhY2gociA9PiB7XHJcbiAgICAgICAgbGV0IG9yaWdpbmFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHIuZWwudGV4dENvbnRlbnQpXHJcbiAgICAgICAgcGFyZW50c09mUmVzdWx0cy5hZGQoci5lbC5wYXJlbnROb2RlKVxyXG4gICAgICAgIHIuZWwucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQob3JpZ2luYWxDb250ZW50LCByLmVsKVxyXG4gICAgICB9KVxyXG4gICAgICBwYXJlbnRzT2ZSZXN1bHRzLmZvckVhY2gocCA9PiBwLm5vcm1hbGl6ZSgpKVxyXG4gICAgICBzZWFyY2hSZXN1bHRzQ291bnRFbC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICBhY3RpdmVTZWFyY2hQYXR0ZXJuID0gJydcclxuXHJcbiAgICAgIHJlc3VsdHMgPSBbXVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3coZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgc2VhcmNoUGFyZW50RWwuY2xhc3NMaXN0LmFkZCgnYmVzcG9rZS1zZWFyY2gtc2VhcmNoaW5nJylcclxuICAgICAgc2VhcmNoRWwuY2xhc3NMaXN0LnJlbW92ZSgnYmVzcG9rZS1zZWFyY2gtbm8tcmVzdWx0JylcclxuICAgICAgc2VhcmNoSW5wdXRFbC5mb2N1cygpXHJcbiAgICAgIGtleW1hZ2UucHVzaFNjb3BlKCdzZWFyY2hpbmcnKVxyXG4gICAgICBkZWNrLnBhcmVudC5jbGFzc0xpc3QuYWRkKCdiZXNwb2tlLWJ1bGxldHMtb2ZmJylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG5cclxuICAgICAgc2VhcmNoSW5wdXRFbC52YWx1ZSA9ICcnXHJcbiAgICAgIHNlYXJjaFBhcmVudEVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Jlc3Bva2Utc2VhcmNoLXNlYXJjaGluZycpXHJcbiAgICAgIHNlYXJjaEVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Jlc3Bva2Utc2VhcmNoLW5vLXJlc3VsdCcpXHJcbiAgICAgIGtleW1hZ2UucG9wU2NvcGUoKVxyXG4gICAgICBjbGVhclJlc3VsdHMoKVxyXG4gICAgICBkZWNrLnBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdiZXNwb2tlLWJ1bGxldHMtb2ZmJylcclxuICAgICAgc2VhcmNoSW5wdXRFbC5ibHVyKClcclxuICAgICAgZGVjay5wYXJlbnQuZm9jdXMoKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlcG9ydFJlc3VsdFN0YXRzKCkge1xyXG4gICAgICBjb25zdCBub1Jlc3VsdHMgPSByZXN1bHRzLmxlbmd0aCA9PT0gMFxyXG4gICAgICBzZWFyY2hSZXN1bHRzQ291bnRFbC5pbm5lckhUTUwgPSBub1Jlc3VsdHMgPyAnJyA6XHJcbiAgICAgICAgYCR7Y3VycmVudFJlc3VsdEluZGV4ICsgMX0vJHtyZXN1bHRzLmxlbmd0aH1gXHJcbiAgICAgIHNlYXJjaEVsLmNsYXNzTGlzdC50b2dnbGUoJ2Jlc3Bva2Utc2VhcmNoLW5vLXJlc3VsdCcsIG5vUmVzdWx0cylcclxuICAgICAgc2VhcmNoRWwuY2xhc3NMaXN0LnRvZ2dsZSgnYmVzcG9rZS1zZWFyY2gtc2hha2luZycsIG5vUmVzdWx0cylcclxuICAgICAgc2VhcmNoRWwub25hbmltYXRpb25lbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2VhcmNoRWwuY2xhc3NMaXN0LnJlbW92ZSgnYmVzcG9rZS1zZWFyY2gtc2hha2luZycpXHJcbiAgICAgICAgc2VhcmNoRWwub25hbmltYXRpb25lbmQgPSBudWxsXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmb2N1c0F0UmVzdWx0KGluZGV4KSB7XHJcbiAgICAgIGxldCByZXN1bHQgPSByZXN1bHRzW2luZGV4XSB8fCB7fSxcclxuICAgICAgICBwcmV2UmVzdWx0ID0gcmVzdWx0c1tjdXJyZW50UmVzdWx0SW5kZXhdIHx8IHt9LFxyXG4gICAgICAgIHNsaWRlSW5kZXhPZlJlc3VsdCA9IChyZXN1bHQpLnNsaWRlSW5kZXhcclxuICAgICAgZGVjay5zbGlkZShzbGlkZUluZGV4T2ZSZXN1bHQpXHJcblxyXG4gICAgICBpZiAocHJldlJlc3VsdCAmJiBwcmV2UmVzdWx0LmVsKSB7XHJcbiAgICAgICAgcHJldlJlc3VsdC5lbC5jbGFzc0xpc3QucmVtb3ZlKCdiZXNwb2tlLXNlYXJjaC1yZXN1bHQtZm9jdXNlZCcpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuZWwpIHtcclxuICAgICAgICByZXN1bHQuZWwuY2xhc3NMaXN0LmFkZCgnYmVzcG9rZS1zZWFyY2gtcmVzdWx0LWZvY3VzZWQnKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjdXJyZW50UmVzdWx0SW5kZXggPSBpbmRleFxyXG4gICAgICByZXBvcnRSZXN1bHRTdGF0cygpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbmF2aWdhdGVSZXN1bHQoZGlyZWN0aW9uKSB7XHJcbiAgICAgIGxldCBuZXdJbmRleCA9IChjdXJyZW50UmVzdWx0SW5kZXggKyBkaXJlY3Rpb24gKyByZXN1bHRzLmxlbmd0aCkgJSByZXN1bHRzLmxlbmd0aFxyXG4gICAgICBmb2N1c0F0UmVzdWx0KG5ld0luZGV4KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlYXJjaCgpIHtcclxuICAgICAgbGV0IHNlYXJjaFBhdHRlcm4gPSB0b05ldXRyYWxSZWdleChzZWFyY2hJbnB1dEVsLnZhbHVlLnRyaW0oKSlcclxuICAgICAgaWYgKHNlYXJjaFBhdHRlcm4gPT09ICcnKSB7XHJcbiAgICAgICAgY2xlYXJSZXN1bHRzKClcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBpZiAoc2VhcmNoUGF0dGVybiA9PT0gYWN0aXZlU2VhcmNoUGF0dGVybikge1xyXG4gICAgICAgIG5hdmlnYXRlUmVzdWx0KCsxKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGNsZWFyUmVzdWx0cygpXHJcbiAgICAgIGFjdGl2ZVNlYXJjaFBhdHRlcm4gPSBzZWFyY2hQYXR0ZXJuXHJcblxyXG4gICAgICBjb25zdCBzZWFyY2hSZWdleCA9IG5ldyBSZWdFeHAoc2VhcmNoUGF0dGVybiwgJ2knKVxyXG4gICAgICBjb25zdCBtYXRjaGVkU2xpZGVzID0gY2FjaGVkU2xpZGVzVGV4dC5maWx0ZXIoc2xpZGUgPT4gc2VhcmNoUmVnZXgudGVzdChzbGlkZS50ZXh0KSlcclxuXHJcblxyXG4gICAgICBmdW5jdGlvbiBzZWFyY2hFbGVtZW50KGVsLCB2aXNpdEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgbGV0IHBhcnRpYWxSZXN1bHRzID0gW11cclxuXHJcbiAgICAgICAgc3dpdGNoIChlbC5ub2RlVHlwZSkge1xyXG4gICAgICAgIGNhc2UgTm9kZS5URVhUX05PREU6XHJcbiAgICAgICAgICBpZiAoc2VhcmNoUmVnZXgudGVzdChlbC5kYXRhKSkge1xyXG4gICAgICAgICAgICBwYXJ0aWFsUmVzdWx0cyA9IHZpc2l0RnVuY3Rpb24oZWwpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgTm9kZS5FTEVNRU5UX05PREU6XHJcbiAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBBcnJheS5mcm9tKGVsLmNoaWxkTm9kZXMpKSB7XHJcbiAgICAgICAgICAgIHBhcnRpYWxSZXN1bHRzLnB1c2goLi4uc2VhcmNoRWxlbWVudChjaGlsZCwgdmlzaXRGdW5jdGlvbikpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcnRpYWxSZXN1bHRzXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIG1hcmtSZXN1bHQodGV4dE5vZGUpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnQgPSB0ZXh0Tm9kZS5wYXJlbnROb2RlXHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSAoZnVuY3Rpb24oKXtcclxuICAgICAgICAgIGNvbnN0IHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxyXG4gICAgICAgICAgd3JhcC5pbm5lckhUTUwgPSB0ZXh0Tm9kZS5kYXRhXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC88L2csICcmIzYwOycpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC8+L2csICcmIzYyOycpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoYCgke3NlYXJjaFBhdHRlcm59KWAsICdnaScpLCAnPHNwYW4gY2xhc3M9XCJiZXNwb2tlLXNlYXJjaC1yZXN1bHRcIj4kMTwvc3Bhbj4nKVxyXG4gICAgICAgICAgd2hpbGUgKHdyYXAuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICBmcmFnLmFwcGVuZENoaWxkKHdyYXAuZmlyc3RDaGlsZClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBmcmFnXHJcbiAgICAgICAgfSkoKVxyXG5cclxuICAgICAgICBjb25zdCBpbnNlcnRlZCA9IGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iZXNwb2tlLXNlYXJjaC1yZXN1bHQnKVxyXG4gICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoZnJhZ21lbnQsIHRleHROb2RlKVxyXG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZCh0ZXh0Tm9kZSlcclxuXHJcbiAgICAgICAgLy8gcmV0dXJucyBhbiBhcnJheSB3aXRoIHRoZSBuZXdseSBjcmVhdGVkIGVsZW1lbnRzXHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oaW5zZXJ0ZWQpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGZpbmQgb2NjdXJyZW5jZXNcclxuICAgICAgcmVzdWx0cyA9IG1hdGNoZWRTbGlkZXMucmVkdWNlKChwcmV2aW91cywgY3VycikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNsaWRlRWwgPSBkZWNrLnNsaWRlc1tjdXJyLmldXHJcbiAgICAgICAgY29uc3Qgb2NjdXJyZW5jZXMgPSBzZWFyY2hFbGVtZW50KHNsaWRlRWwsIG1hcmtSZXN1bHQpLm1hcChyZXN1bHQgPT4gKHsgc2xpZGVJbmRleDogY3Vyci5pLCBlbDogcmVzdWx0IH0pKVxyXG5cclxuICAgICAgICByZXR1cm4gcHJldmlvdXMuY29uY2F0KG9jY3VycmVuY2VzKVxyXG4gICAgICB9LCBbXSlcclxuXHJcbiAgICAgIC8vIHJlcG9ydCB0aGUgbnVtYmVyIG9mIG9jY3VycmVuY2VzXHJcbiAgICAgIHNlYXJjaFJlc3VsdHNDb3VudEVsLmlubmVySFRNTCA9IGAxLyR7cmVzdWx0cy5sZW5ndGh9YFxyXG5cclxuICAgICAgLy8gbW92ZXMgdG8gdGhlIHNsaWRlIG9mIHRoZSBmaXJzdCBvY2N1cnJlbmNlXHJcbiAgICAgIGZvY3VzQXRSZXN1bHQoMClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVTZWFyY2hCb3goKSB7XHJcbiAgICAgIHNlYXJjaFBhcmVudEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgc2VhcmNoRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICBzZWFyY2hJbnB1dEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICBzZWFyY2hSZXN1bHRzQ291bnRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgICBzZWFyY2hJbmZvRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkZXRhaWxzJylcclxuXHJcbiAgICAgIHNlYXJjaFBhcmVudEVsLmlkID0gJ2Jlc3Bva2Utc2VhcmNoLXBhcmVudCdcclxuICAgICAgc2VhcmNoRWwuaWQgPSAnYmVzcG9rZS1zZWFyY2gnXHJcbiAgICAgIHNlYXJjaElucHV0RWwuaWQgPSAnYmVzcG9rZS1zZWFyY2gtaW5wdXQnXHJcbiAgICAgIHNlYXJjaElucHV0RWwudHlwZSA9ICdzZWFyY2gnXHJcbiAgICAgIHNlYXJjaElucHV0RWwucGxhY2Vob2xkZXIgPSB0ZXh0U2VhcmNoSGVyZVxyXG4gICAgICBzZWFyY2hSZXN1bHRzQ291bnRFbC5pZCA9ICdiZXNwb2tlLXNlYXJjaC1yZXN1bHRzLWNvdW50J1xyXG4gICAgICBzZWFyY2hSZXN1bHRzQ291bnRFbC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICBzZWFyY2hJbmZvRWwuaWQgPSAnYmVzcG9rZS1zZWFyY2gtaW5mbydcclxuICAgICAgc2VhcmNoSW5mb0VsLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgIDxzdW1tYXJ5PiR7dGV4dEluc3RydWN0aW9uc308L3N1bW1hcnk+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJlc3Bva2Utc2VhcmNoLWluZm8tcGFpclwiPiR7c2hvd0tleS5tYXAoayA9PiBgPGtiZD4ke2t9PC9rYmQ+YCkuam9pbignJyl9ICR7dGV4dE9wZW5TZWFyY2h9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJiZXNwb2tlLXNlYXJjaC1pbmZvLXBhaXJcIj4ke2Rpc21pc3NLZXkubWFwKGsgPT4gYDxrYmQ+JHtrfTwva2JkPmApLmpvaW4oJycpfSAke3RleHRDbG9zZVNlYXJjaH08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJlc3Bva2Utc2VhcmNoLWluZm8tcGFpclwiPiR7dHJpZ2dlcktleS5tYXAoayA9PiBgPGtiZD4ke2t9PC9rYmQ+YCkuam9pbignJyl9ICR7dGV4dFNlYXJjaH08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJlc3Bva2Utc2VhcmNoLWluZm8tcGFpclwiPiR7bmV4dEtleS5tYXAoayA9PiBgPGtiZD4ke2t9PC9rYmQ+YCkuam9pbignJyl9ICR7dGV4dE5leHRSZXN1bHR9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJiZXNwb2tlLXNlYXJjaC1pbmZvLXBhaXJcIj4ke3ByZXZpb3VzS2V5Lm1hcChrID0+IGA8a2JkPiR7a308L2tiZD5gKS5qb2luKCcnKX0gJHt0ZXh0UHJldmlvdXNSZXN1bHR9PC9zcGFuPlxyXG4gICAgICAgIGBcclxuICAgICAgc2VhcmNoRWwuYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXRFbClcclxuICAgICAgc2VhcmNoRWwuYXBwZW5kQ2hpbGQoc2VhcmNoUmVzdWx0c0NvdW50RWwpXHJcbiAgICAgIHNlYXJjaEVsLmFwcGVuZENoaWxkKHNlYXJjaEluZm9FbClcclxuICAgICAgc2VhcmNoUGFyZW50RWwuYXBwZW5kQ2hpbGQoc2VhcmNoRWwpXHJcblxyXG4gICAgICBkZWNrLnBhcmVudC5hcHBlbmRDaGlsZChzZWFyY2hQYXJlbnRFbClcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2hvd0tleS5mb3JFYWNoKGtleSA9PiBrZXltYWdlKGtleSwgc2hvdykpXHJcbiAgICBkaXNtaXNzS2V5LmZvckVhY2goa2V5ID0+IGtleW1hZ2UoJ3NlYXJjaGluZycsIGtleSwgaGlkZSkpXHJcbiAgICB0cmlnZ2VyS2V5LmZvckVhY2goa2V5ID0+IGtleW1hZ2UoJ3NlYXJjaGluZycsIGtleSwgc2VhcmNoKSlcclxuICAgIG5leHRLZXkuZm9yRWFjaChrZXkgPT4ga2V5bWFnZSgnc2VhcmNoaW5nJywga2V5LCBuYXZpZ2F0ZVJlc3VsdC5iaW5kKGtleSwgKzEpLCB7cHJldmVudERlZmF1bHQ6IHRydWV9KSlcclxuICAgIHByZXZpb3VzS2V5LmZvckVhY2goa2V5ID0+IGtleW1hZ2UoJ3NlYXJjaGluZycsIGtleSwgbmF2aWdhdGVSZXN1bHQuYmluZChrZXksIC0xKSwge3ByZXZlbnREZWZhdWx0OiB0cnVlfSkpXHJcblxyXG4gICAgY3JlYXRlU2VhcmNoQm94KClcclxuXHJcbiAgICBpZiAoaW5zZXJ0U3R5bGVzKSB7XHJcbiAgICAgIF9kZXJlcV8oJy4uL2xpYi9iZXNwb2tlLXNlYXJjaC5jc3MnKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cbn0se1wiLi4vbGliL2Jlc3Bva2Utc2VhcmNoLmNzc1wiOjEsXCJrZXltYWdlXCI6NH1dLDM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuLy8gRm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgYnJvd3NlciBmaWVsZCwgY2hlY2sgb3V0IHRoZSBicm93c2VyIGZpZWxkIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9zdWJzdGFjay9icm93c2VyaWZ5LWhhbmRib29rI2Jyb3dzZXItZmllbGQuXG5cbnZhciBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXIgaW5zZXJ0U3R5bGVFbGVtZW50ID0gZnVuY3Rpb24oc3R5bGVFbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgdmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLmluc2VydEF0ID0gb3B0aW9ucy5pbnNlcnRBdCB8fCAnYm90dG9tJztcblxuICAgIGlmIChvcHRpb25zLmluc2VydEF0ID09PSAndG9wJykge1xuICAgICAgICBpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG4gICAgICAgICAgICBoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09ICdib3R0b20nKSB7XG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciBcXCdpbnNlcnRBdFxcJy4gTXVzdCBiZSBcXCd0b3BcXCcgb3IgXFwnYm90dG9tXFwnLicpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8vIENyZWF0ZSBhIDxsaW5rPiB0YWcgd2l0aCBvcHRpb25hbCBkYXRhIGF0dHJpYnV0ZXNcbiAgICBjcmVhdGVMaW5rOiBmdW5jdGlvbihocmVmLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgICAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcblxuICAgICAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgICAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICAgICAgaWYgKCAhIGF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIGtleSwgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9LFxuICAgIC8vIENyZWF0ZSBhIDxzdHlsZT4gdGFnIHdpdGggb3B0aW9uYWwgZGF0YSBhdHRyaWJ1dGVzXG4gICAgY3JlYXRlU3R5bGU6IGZ1bmN0aW9uKGNzc1RleHQsIGF0dHJpYnV0ZXMsIGV4dHJhT3B0aW9ucykge1xuICAgICAgICBleHRyYU9wdGlvbnMgPSBleHRyYU9wdGlvbnMgfHwge307XG5cbiAgICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGlmICggISBhdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnZGF0YS0nICsga2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3R5bGUuc2hlZXQpIHsgLy8gZm9yIGpzZG9tIGFuZCBJRTkrXG4gICAgICAgICAgICBzdHlsZS5pbm5lckhUTUwgPSBjc3NUZXh0O1xuICAgICAgICAgICAgc3R5bGUuc2hlZXQuY3NzVGV4dCA9IGNzc1RleHQ7XG4gICAgICAgICAgICBpbnNlcnRTdHlsZUVsZW1lbnQoc3R5bGUsIHsgaW5zZXJ0QXQ6IGV4dHJhT3B0aW9ucy5pbnNlcnRBdCB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7IC8vIGZvciBJRTggYW5kIGJlbG93XG4gICAgICAgICAgICBpbnNlcnRTdHlsZUVsZW1lbnQoc3R5bGUsIHsgaW5zZXJ0QXQ6IGV4dHJhT3B0aW9ucy5pbnNlcnRBdCB9KTtcbiAgICAgICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1RleHQ7XG4gICAgICAgIH0gZWxzZSB7IC8vIGZvciBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmlcbiAgICAgICAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzc1RleHQpKTtcbiAgICAgICAgICAgIGluc2VydFN0eWxlRWxlbWVudChzdHlsZSwgeyBpbnNlcnRBdDogZXh0cmFPcHRpb25zLmluc2VydEF0IH0pO1xuICAgICAgICB9XG4gICAgfVxufTtcblxufSx7fV0sNDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4vLy8ga2V5bWFnZS5qcyAtIEphdmFzY3JpcHQga2V5Ym9hcmQgYmluZGluZ3MgaGFuZGxpbmdcbi8vLyBodHRwOi8vZ2l0aHViLmNvbS9waXJhbmhhL2tleW1hZ2Vcbi8vL1xuLy8vIChjKSAyMDEyLTIwMTYgQWxleGFuZGVyIFNvbG92eW92IHVuZGVyIHRlcm1zIG9mIElTQyBMaWNlbnNlXG5cbihmdW5jdGlvbihkZWZpbmUsIHVuZGVmaW5lZCkge1xuZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgIHZhciBWRVJTSU9OID0gJzEuMS4zJztcbiAgICB2YXIgaXNPc3ggPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB+bmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdNYWMgT1MgWCcpO1xuXG4gICAgLy8gRGVmaW5pbmcgYWxsIGtleXNcbiAgICB2YXIgTU9EUFJPUFMgPSBbJ3NoaWZ0S2V5JywgJ2N0cmxLZXknLCAnYWx0S2V5JywgJ21ldGFLZXknXTtcbiAgICB2YXIgTU9EUyA9IHtcbiAgICAgICAgJ3NoaWZ0JzogJ3NoaWZ0JyxcbiAgICAgICAgJ2N0cmwnOiAnY3RybCcsICdjb250cm9sJzogJ2N0cmwnLFxuICAgICAgICAnYWx0JzogJ2FsdCcsICdvcHRpb24nOiAnYWx0JyxcbiAgICAgICAgJ3dpbic6ICdtZXRhJywgJ2NtZCc6ICdtZXRhJywgJ3N1cGVyJzogJ21ldGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnbWV0YSc6ICdtZXRhJyxcbiAgICAgICAgLy8gZGVmYXVsdCBtb2RpZmllciBmb3Igb3MgeCBpcyBjbWQgYW5kIGZvciBvdGhlcnMgaXMgY3RybFxuICAgICAgICAnZGVmbW9kJzogIGlzT3N4ID8gJ21ldGEnIDogJ2N0cmwnXG4gICAgICAgIH07XG4gICAgdmFyIE1PRE9SREVSID0gWydzaGlmdCcsICdjdHJsJywgJ2FsdCcsICdtZXRhJ107XG4gICAgdmFyIE1PRE5VTVMgPSBbMTYsIDE3LCAxOCwgOTFdO1xuXG4gICAgdmFyIEtFWVMgPSB7XG4gICAgICAgICdiYWNrc3BhY2UnOiA4LFxuICAgICAgICAndGFiJzogOSxcbiAgICAgICAgJ2VudGVyJzogMTMsICdyZXR1cm4nOiAxMyxcbiAgICAgICAgJ3BhdXNlJzogMTksXG4gICAgICAgICdjYXBzJzogMjAsICdjYXBzbG9jayc6IDIwLFxuICAgICAgICAnZXNjYXBlJzogMjcsICdlc2MnOiAyNyxcbiAgICAgICAgJ3NwYWNlJzogMzIsXG4gICAgICAgICdwZ3VwJzogMzMsICdwYWdldXAnOiAzMyxcbiAgICAgICAgJ3BnZG93bic6IDM0LCAncGFnZWRvd24nOiAzNCxcbiAgICAgICAgJ2VuZCc6IDM1LFxuICAgICAgICAnaG9tZSc6IDM2LFxuICAgICAgICAnaW5zJzogNDUsICdpbnNlcnQnOiA0NSxcbiAgICAgICAgJ2RlbCc6IDQ2LCAnZGVsZXRlJzogNDYsXG5cbiAgICAgICAgJ2xlZnQnOiAzNyxcbiAgICAgICAgJ3VwJzogMzgsXG4gICAgICAgICdyaWdodCc6IDM5LFxuICAgICAgICAnZG93bic6IDQwLFxuXG4gICAgICAgICcqJzogMTA2LFxuICAgICAgICAnKyc6IDEwNywgJ3BsdXMnOiAxMDcsXG4gICAgICAgICdtaW51cyc6IDEwOSxcbiAgICAgICAgJzsnOiAxODYsXG4gICAgICAgICc9JzogMTg3LFxuICAgICAgICAnLCc6IDE4OCxcbiAgICAgICAgJy0nOiAxODksXG4gICAgICAgICcuJzogMTkwLFxuICAgICAgICAnLyc6IDE5MSxcbiAgICAgICAgJ2AnOiAxOTIsXG4gICAgICAgICdbJzogMjE5LFxuICAgICAgICAnXFxcXCc6IDIyMCxcbiAgICAgICAgJ10nOiAyMjEsXG4gICAgICAgIFwiJ1wiOiAyMjJcbiAgICB9O1xuXG4gICAgdmFyIGk7XG4gICAgLy8gbnVtcGFkXG4gICAgZm9yIChpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgS0VZU1snbnVtLScgKyBpXSA9IGkgKyA5NTtcbiAgICB9XG4gICAgLy8gdG9wIHJvdyAwLTlcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBLRVlTW2kudG9TdHJpbmcoKV0gPSBpICsgNDg7XG4gICAgfVxuICAgIC8vIGYxLWYyNFxuICAgIGZvciAoaSA9IDE7IGkgPCAyNTsgaSsrKSB7XG4gICAgICAgIEtFWVNbJ2YnICsgaV0gPSBpICsgMTExO1xuICAgIH1cbiAgICAvLyBhbHBoYWJldFxuICAgIGZvciAoaSA9IDY1OyBpIDwgOTE7IGkrKykge1xuICAgICAgICBLRVlTW1N0cmluZy5mcm9tQ2hhckNvZGUoaSkudG9Mb3dlckNhc2UoKV0gPSBpO1xuICAgIH1cblxuICAgIC8vIFJldmVyc2Uga2V5IGNvZGVzXG4gICAgdmFyIEtFWVJFViA9IHt9O1xuICAgIGZvciAodmFyIGsgaW4gS0VZUykge1xuICAgICAgICB2YXIgdmFsID0gS0VZU1trXTtcbiAgICAgICAgaWYgKCFLRVlSRVZbdmFsXSB8fCBLRVlSRVZbdmFsXS5sZW5ndGggPCBrLmxlbmd0aCkge1xuICAgICAgICAgICAgS0VZUkVWW3ZhbF0gPSBrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBBY3R1YWwgd29yayBpcyBkb25lIGhlcmVcblxuICAgIHZhciBjdXJyZW50U2NvcGUgPSAnJztcbiAgICB2YXIgYWxsQ2hhaW5zID0ge307XG5cbiAgICBmdW5jdGlvbiBwYXJzZUtleVN0cmluZyhrZXlzdHJpbmcpIHtcbiAgICAgICAgdmFyIGJpdHMgPSBrZXlzdHJpbmcuc3BsaXQoLy0oPyEkKS8pO1xuICAgICAgICB2YXIgYnV0dG9uID0gYml0c1tiaXRzLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIga2V5ID0ge2NvZGU6IEtFWVNbYnV0dG9uXX07XG5cbiAgICAgICAgaWYgKCFrZXkuY29kZSkge1xuICAgICAgICAgICAgdGhyb3cgJ1Vua25vd24ga2V5IFwiJyArIGJ1dHRvbiArICdcIiBpbiBrZXlzdHJpbmcgXCInICtcbiAgICAgICAgICAgICAgICBrZXlzdHJpbmcgKyAnXCInO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1vZDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiaXRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgYnV0dG9uID0gYml0c1tpXTtcbiAgICAgICAgICAgIG1vZCA9IE1PRFNbYnV0dG9uXTtcbiAgICAgICAgICAgIGlmICghbW9kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93ICdVbmtub3duIG1vZGlmaWVyIFwiJyArIGJ1dHRvbiArICdcIiBpbiBrZXlzdHJpbmcgXCInICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXN0cmluZyArICdcIic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXlbbW9kXSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ga2V5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0cmluZ2lmeUtleShrZXkpIHtcbiAgICAgICAgdmFyIHMgPSAnJztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBNT0RPUkRFUi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGtleVtNT0RPUkRFUltpXV0pIHtcbiAgICAgICAgICAgICAgICBzICs9IE1PRE9SREVSW2ldICsgJy0nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHMgKz0gS0VZUkVWW2tleS5jb2RlXTtcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplS2V5Q2hhaW4oa2V5Y2hhaW5TdHJpbmcpIHtcbiAgICAgICAgdmFyIGtleWNoYWluID0gW107XG4gICAgICAgIHZhciBrZXlzID0ga2V5Y2hhaW5TdHJpbmcuc3BsaXQoJyAnKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBwYXJzZUtleVN0cmluZyhrZXlzW2ldKTtcbiAgICAgICAgICAgIGtleSA9IHN0cmluZ2lmeUtleShrZXkpO1xuICAgICAgICAgICAga2V5Y2hhaW4ucHVzaChrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAga2V5Y2hhaW4ub3JpZ2luYWwgPSBrZXljaGFpblN0cmluZztcbiAgICAgICAgcmV0dXJuIGtleWNoYWluO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV2ZW50S2V5U3RyaW5nKGUpIHtcbiAgICAgICAgdmFyIGtleSA9IHtjb2RlOiBlLmtleUNvZGV9O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IE1PRFBST1BTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbW9kID0gTU9EUFJPUFNbaV07XG4gICAgICAgICAgICBpZiAoZVttb2RdKSB7XG4gICAgICAgICAgICAgICAga2V5W21vZC5zbGljZSgwLCBtb2QubGVuZ3RoIC0gMyldID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyaW5naWZ5S2V5KGtleSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TmVzdGVkQ2hhaW5zKGNoYWlucywgc2NvcGUpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzY29wZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJpdCA9IHNjb3BlW2ldO1xuXG4gICAgICAgICAgICBpZiAoYml0KSB7XG4gICAgICAgICAgICAgICAgY2hhaW5zID0gY2hhaW5zW2JpdF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghY2hhaW5zKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoYWlucztcbiAgICB9XG5cbiAgICB2YXIgc2VxdWVuY2UgPSBbXTtcbiAgICBmdW5jdGlvbiBkaXNwYXRjaChlKSB7XG4gICAgICAgIC8vIFNraXAgYWxsIG1vZGlmaWVyc1xuICAgICAgICBpZiAofk1PRE5VTVMuaW5kZXhPZihlLmtleUNvZGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VxID0gc2VxdWVuY2Uuc2xpY2UoKTtcbiAgICAgICAgc2VxLnB1c2goZXZlbnRLZXlTdHJpbmcoZSkpO1xuICAgICAgICB2YXIgc2NvcGUgPSBjdXJyZW50U2NvcGUuc3BsaXQoJy4nKTtcbiAgICAgICAgdmFyIG1hdGNoZWQsIGNoYWlucywga2V5O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSBzY29wZS5sZW5ndGg7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBjaGFpbnMgPSBnZXROZXN0ZWRDaGFpbnMoYWxsQ2hhaW5zLCBzY29wZS5zbGljZSgwLCBpKSk7XG4gICAgICAgICAgICBpZiAoIWNoYWlucykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0Y2hlZCA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNlcS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGtleSA9IHNlcVtqXTtcbiAgICAgICAgICAgICAgICBpZiAoIWNoYWluc1trZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNoYWlucyA9IGNoYWluc1trZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRlZmluaXRpb25TY29wZSA9IHNjb3BlLnNsaWNlKDAsIGkpLmpvaW4oJy4nKTtcbiAgICAgICAgdmFyIHByZXZlbnREZWZhdWx0ID0gY2hhaW5zLnByZXZlbnREZWZhdWx0O1xuXG4gICAgICAgIC8vIHBhcnRpYWwgbWF0Y2gsIHNhdmUgdGhlIHNlcXVlbmNlXG4gICAgICAgIGlmIChtYXRjaGVkICYmICFjaGFpbnMuaGFuZGxlcnMpIHtcbiAgICAgICAgICAgIHNlcXVlbmNlID0gc2VxO1xuICAgICAgICAgICAgaWYgKHByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjaGFpbnMuaGFuZGxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlciA9IGNoYWlucy5oYW5kbGVyc1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGhhbmRsZXIuX2tleW1hZ2U7XG5cbiAgICAgICAgICAgICAgICB2YXIgcmVzID0gaGFuZGxlci5jYWxsKG9wdGlvbnMuY29udGV4dCwgZSwge1xuICAgICAgICAgICAgICAgICAgICBzaG9ydGN1dDogb3B0aW9ucy5vcmlnaW5hbCxcbiAgICAgICAgICAgICAgICAgICAgc2NvcGU6IGN1cnJlbnRTY29wZSxcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvblNjb3BlOiBkZWZpbml0aW9uU2NvcGVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXMgPT09IGZhbHNlIHx8IHByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlaXRoZXIgbWF0Y2hlZCBvciBub3QsIGRyb3AgdGhlIHNlcXVlbmNlXG4gICAgICAgIHNlcXVlbmNlID0gW107XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SGFuZGxlcnMoc2NvcGUsIGtleWNoYWluLCBmbikge1xuICAgICAgICB2YXIgYml0cyA9IHNjb3BlLnNwbGl0KCcuJyk7XG4gICAgICAgIHZhciBjaGFpbnMgPSBhbGxDaGFpbnM7XG4gICAgICAgIGJpdHMgPSBiaXRzLmNvbmNhdChrZXljaGFpbik7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBiaXRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJpdCA9IGJpdHNbaV07XG4gICAgICAgICAgICBpZiAoIWJpdCkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNoYWlucyA9IGNoYWluc1tiaXRdIHx8IChjaGFpbnNbYml0XSA9IHt9KTtcbiAgICAgICAgICAgIGlmIChmbiAmJiBmbi5fa2V5bWFnZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgICAgIGNoYWlucy5wcmV2ZW50RGVmYXVsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpID09PSBsIC0gMSkge1xuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVycyA9IGNoYWlucy5oYW5kbGVycyB8fCAoY2hhaW5zLmhhbmRsZXJzID0gW10pO1xuICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGVycztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFzc2lnbktleShzY29wZSwga2V5Y2hhaW4sIGZuKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IGdldEhhbmRsZXJzKHNjb3BlLCBrZXljaGFpbiwgZm4pO1xuICAgICAgICBoYW5kbGVycy5wdXNoKGZuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bmFzc2lnbktleShzY29wZSwga2V5Y2hhaW4sIGZuKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IGdldEhhbmRsZXJzKHNjb3BlLCBrZXljaGFpbik7XG4gICAgICAgIHZhciBpZHggPSBoYW5kbGVycy5pbmRleE9mKGZuKTtcbiAgICAgICAgaWYgKH5pZHgpIHtcbiAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VkKHNjb3BlLCBrZXljaGFpbiwgZm4sIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGtleWNoYWluID09PSB1bmRlZmluZWQgJiYgZm4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGtleWNoYWluLCBmbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXltYWdlKHNjb3BlLCBrZXljaGFpbiwgZm4pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2Yga2V5Y2hhaW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBmbjtcbiAgICAgICAgICAgIGZuID0ga2V5Y2hhaW47XG4gICAgICAgICAgICBrZXljaGFpbiA9IHNjb3BlO1xuICAgICAgICAgICAgc2NvcGUgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBub3JtYWxpemVkID0gbm9ybWFsaXplS2V5Q2hhaW4oa2V5Y2hhaW4pO1xuXG4gICAgICAgIHJldHVybiBbc2NvcGUsIG5vcm1hbGl6ZWQsIGZuLCBvcHRpb25zXTtcbiAgICB9XG5cbiAgICAvLyBvcHRpb25hbCBhcmd1bWVudHM6IHNjb3BlLCBvcHRpb25zLlxuICAgIGZ1bmN0aW9uIGtleW1hZ2Uoc2NvcGUsIGtleWNoYWluLCBmbiwgb3B0aW9ucykge1xuICAgICAgICB2YXIgYXJncyA9IHBhcnNlZChzY29wZSwga2V5Y2hhaW4sIGZuLCBvcHRpb25zKTtcbiAgICAgICAgZm4gPSBhcmdzWzJdO1xuICAgICAgICBvcHRpb25zID0gYXJnc1szXTtcbiAgICAgICAgZm4uX2tleW1hZ2UgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICBmbi5fa2V5bWFnZS5vcmlnaW5hbCA9IGtleWNoYWluO1xuICAgICAgICBhc3NpZ25LZXkuYXBwbHkobnVsbCwgYXJncyk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHVuYXNzaWduS2V5LmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGtleW1hZ2UudW5iaW5kID0gZnVuY3Rpb24oc2NvcGUsIGtleWNoYWluLCBmbikge1xuICAgICAgICB2YXIgYXJncyA9IHBhcnNlZChzY29wZSwga2V5Y2hhaW4sIGZuKTtcbiAgICAgICAgdW5hc3NpZ25LZXkuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfTtcblxuICAgIGtleW1hZ2UucGFyc2UgPSBwYXJzZUtleVN0cmluZztcbiAgICBrZXltYWdlLnN0cmluZ2lmeSA9IHN0cmluZ2lmeUtleTtcblxuICAgIGtleW1hZ2UuYmluZGluZ3MgPSBhbGxDaGFpbnM7XG5cbiAgICBrZXltYWdlLnNldFNjb3BlID0gZnVuY3Rpb24oc2NvcGUpIHtcbiAgICAgICAgY3VycmVudFNjb3BlID0gc2NvcGUgPyBzY29wZSA6ICcnO1xuICAgIH07XG5cbiAgICBrZXltYWdlLmdldFNjb3BlID0gZnVuY3Rpb24oKSB7IHJldHVybiBjdXJyZW50U2NvcGU7IH07XG5cbiAgICBrZXltYWdlLnB1c2hTY29wZSA9IGZ1bmN0aW9uKHNjb3BlKSB7XG4gICAgICAgIGN1cnJlbnRTY29wZSA9IChjdXJyZW50U2NvcGUgPyBjdXJyZW50U2NvcGUgKyAnLicgOiAnJykgKyBzY29wZTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRTY29wZTtcbiAgICB9O1xuXG4gICAga2V5bWFnZS5wb3BTY29wZSA9IGZ1bmN0aW9uKHNjb3BlKSB7XG4gICAgICAgIHZhciBpO1xuXG4gICAgICAgIGlmICghc2NvcGUpIHtcbiAgICAgICAgICAgIGkgPSBjdXJyZW50U2NvcGUubGFzdEluZGV4T2YoJy4nKTtcbiAgICAgICAgICAgIHNjb3BlID0gY3VycmVudFNjb3BlLnNsaWNlKGkgKyAxKTtcbiAgICAgICAgICAgIGN1cnJlbnRTY29wZSA9IGkgPT0gLTEgPyAnJyA6IGN1cnJlbnRTY29wZS5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgIHJldHVybiBzY29wZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRTY29wZSA9IGN1cnJlbnRTY29wZS5yZXBsYWNlKFxuICAgICAgICAgICAgbmV3IFJlZ0V4cCgnKF58XFxcXC4pJyArIHNjb3BlICsgJyhcXFxcLnwkKS4qJyksICcnKTtcbiAgICAgICAgcmV0dXJuIHNjb3BlO1xuICAgIH07XG5cbiAgICBrZXltYWdlLnZlcnNpb24gPSBWRVJTSU9OO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkaXNwYXRjaCwgZmFsc2UpO1xuXG4gICAgcmV0dXJuIGtleW1hZ2U7XG59KTtcbn0pKHR5cGVvZiBkZWZpbmUgIT09ICd1bmRlZmluZWQnID8gZGVmaW5lIDogZnVuY3Rpb24oZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cua2V5bWFnZSA9IGZhY3RvcnkoKTtcbiAgICB9XG59KTtcblxufSx7fV19LHt9LFsyXSkoMilcbn0pO1xuIiwiLyohXG4gKiBiZXNwb2tlLXNpbXBsZS1vdmVydmlldyB2MS4xLjBcbiAqXG4gKiBDb3B5cmlnaHQgMjAyMSwgRmzDoXZpbyBDb3V0aW5ob1xuICogVGhpcyBjb250ZW50IGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG4hZnVuY3Rpb24oZSl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9ZSgpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSxlKTtlbHNle3ZhciBzOyhzPShzPShzPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6dGhpcykuYmVzcG9rZXx8KHMuYmVzcG9rZT17fSkpLnBsdWdpbnN8fChzLnBsdWdpbnM9e30pKS5zaW1wbGVPdmVydmlldz1lKCl9fSgoZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24gZShzLG8sdCl7ZnVuY3Rpb24gaShuLHApe2lmKCFvW25dKXtpZighc1tuXSl7dmFyIGw9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighcCYmbClyZXR1cm4gbChuLCEwKTtpZihyKXJldHVybiByKG4sITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbitcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIGI9b1tuXT17ZXhwb3J0czp7fX07c1tuXVswXS5jYWxsKGIuZXhwb3J0cywoZnVuY3Rpb24oZSl7cmV0dXJuIGkoc1tuXVsxXVtlXXx8ZSl9KSxiLGIuZXhwb3J0cyxlLHMsbyx0KX1yZXR1cm4gb1tuXS5leHBvcnRzfWZvcih2YXIgcj1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLG49MDtuPHQubGVuZ3RoO24rKylpKHRbbl0pO3JldHVybiBpfSh7MTpbZnVuY3Rpb24oZSxzLG8pe3ZhciB0PVwiLmJlc3Bva2UtcGFyZW50e3BlcnNwZWN0aXZlOjkwMHB4fS5iZXNwb2tlLXBhcmVudCAuYmVzcG9rZS1zbGlkZXt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSxvcGFjaXR5fS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLC0yMDAwcHgpO291dGxpbmU6NHB4IHNvbGlkIHNpbHZlcjtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjIpO29wYWNpdHk6aW5pdGlhbH0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hY3RpdmUsLmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlOmhvdmVye291dGxpbmUtY29sb3I6IzQ2ODJiNH0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmV7ZGlzcGxheTpub25lO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNjMwJSwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVye2Rpc3BsYXk6bm9uZTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoNjMwJSwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTEsLmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWZ0ZXItMiwuYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlci0zLC5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTQsLmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWZ0ZXItNSwuYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtMSwuYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtMiwuYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtMywuYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtNCwuYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1iZWZvcmUtNXtkaXNwbGF5OmZsZXh9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTF7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDUlLDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTJ7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yMTAlLDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTN7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0zMTUlLDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTR7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC00MjAlLDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYmVmb3JlLTV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC01MjUlLDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWZ0ZXItMXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTA1JSwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTJ7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIxMCUsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2Utc2xpZGUuYmVzcG9rZS1hZnRlci0ze3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgzMTUlLDAsLTIwMDBweCl9LmJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3IC5iZXNwb2tlLXNsaWRlLmJlc3Bva2UtYWZ0ZXItNHt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoNDIwJSwwLC0yMDAwcHgpfS5iZXNwb2tlLXNpbXBsZS1vdmVydmlldyAuYmVzcG9rZS1zbGlkZS5iZXNwb2tlLWFmdGVyLTV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDUyNSUsMCwtMjAwMHB4KX0uYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcgLmJlc3Bva2UtYnVsbGV0LWluYWN0aXZle2Rpc3BsYXk6bGlzdC1pdGVtO29wYWNpdHk6aW5pdGlhbDt0cmFuc2Zvcm06aW5pdGlhbH1cIjtlKFwiYnJvd3NlcmlmeS1jc3NcIikuY3JlYXRlU3R5bGUodCx7aHJlZjpcImxpYlxcXFxiZXNwb2tlLXNpbXBsZS1vdmVydmlldy5jc3NcIn0se2luc2VydEF0OlwiYm90dG9tXCJ9KSxzLmV4cG9ydHM9dH0se1wiYnJvd3NlcmlmeS1jc3NcIjozfV0sMjpbZnVuY3Rpb24oZSxzLG8pe3MuZXhwb3J0cz1mdW5jdGlvbih7YWN0aXZhdGlvbktleTpzPTI3LGluc2VydFN0eWxlczpvPSEwfT17fSl7dmFyIHQ7cmV0dXJuIHM9XCJzdHJpbmdcIj09dHlwZW9mKHQ9cyk/dC50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCk6dCxmdW5jdGlvbih0KXtsZXQgaSxyLG4scCxsLGE7aT1mdW5jdGlvbigpe3Qub24oXCJhY3RpdmF0ZVwiLGkpKCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsciwhMSksbyYmZShcIi4uL2xpYi9iZXNwb2tlLXNpbXBsZS1vdmVydmlldy5jc3NcIiksYT10LnBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJiZXNwb2tlLXNpbXBsZS1vdmVydmlld1wiKX0sbj1mdW5jdGlvbigpe3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLHIsITEpfSxwPWZ1bmN0aW9uKGUpe2xldCBzO2lmKGEpcmV0dXJuIHM9dC5zbGlkZSgpK2Uscz49MCYmczx0LnNsaWRlcy5sZW5ndGgmJnQuc2xpZGUocyksITF9LHI9ZnVuY3Rpb24oZSl7c3dpdGNoKGUud2hpY2gpe2Nhc2UgczpsKCl9fSxsPWZ1bmN0aW9uKGUpe2E9XCJib29sZWFuXCI9PXR5cGVvZiBlP2U6IWEsdC5wYXJlbnQuY2xhc3NMaXN0LnRvZ2dsZShcImJlc3Bva2Utc2ltcGxlLW92ZXJ2aWV3XCIsYSl9LHQub24oXCJhY3RpdmF0ZVwiLGkpLHQub24oXCJkZXN0cm95XCIsbiksdC5vbihcInNpbXBsZS1vdmVydmlldy5lbmFibGVcIixsLmJpbmQobnVsbCwhMCkpLHQub24oXCJzaW1wbGUtb3ZlcnZpZXcuZGlzYWJsZVwiLGwuYmluZChudWxsLCExKSksdC5vbihcInNpbXBsZS1vdmVydmlldy50b2dnbGVcIixsLmJpbmQobnVsbCkpLHQub24oXCJwcmV2XCIscC5iaW5kKG51bGwsLTEpKSx0Lm9uKFwibmV4dFwiLHAuYmluZChudWxsLDEpKX19fSx7XCIuLi9saWIvYmVzcG9rZS1zaW1wbGUtb3ZlcnZpZXcuY3NzXCI6MX1dLDM6W2Z1bmN0aW9uKGUscyxvKXtcInVzZSBzdHJpY3RcIjt2YXIgdD1bXSxpPWZ1bmN0aW9uKGUscyl7dmFyIG89ZG9jdW1lbnQuaGVhZHx8ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLGk9dFt0Lmxlbmd0aC0xXTtpZigocz1zfHx7fSkuaW5zZXJ0QXQ9cy5pbnNlcnRBdHx8XCJib3R0b21cIixcInRvcFwiPT09cy5pbnNlcnRBdClpP2kubmV4dFNpYmxpbmc/by5pbnNlcnRCZWZvcmUoZSxpLm5leHRTaWJsaW5nKTpvLmFwcGVuZENoaWxkKGUpOm8uaW5zZXJ0QmVmb3JlKGUsby5maXJzdENoaWxkKSx0LnB1c2goZSk7ZWxzZXtpZihcImJvdHRvbVwiIT09cy5pbnNlcnRBdCl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7by5hcHBlbmRDaGlsZChlKX19O3MuZXhwb3J0cz17Y3JlYXRlTGluazpmdW5jdGlvbihlLHMpe3ZhciBvPWRvY3VtZW50LmhlYWR8fGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXSx0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO2Zvcih2YXIgaSBpbiB0LmhyZWY9ZSx0LnJlbD1cInN0eWxlc2hlZXRcIixzKWlmKHMuaGFzT3duUHJvcGVydHkoaSkpe3ZhciByPXNbaV07dC5zZXRBdHRyaWJ1dGUoXCJkYXRhLVwiK2kscil9by5hcHBlbmRDaGlsZCh0KX0sY3JlYXRlU3R5bGU6ZnVuY3Rpb24oZSxzLG8pe289b3x8e307dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO2Zvcih2YXIgciBpbiB0LnR5cGU9XCJ0ZXh0L2Nzc1wiLHMpaWYocy5oYXNPd25Qcm9wZXJ0eShyKSl7dmFyIG49c1tyXTt0LnNldEF0dHJpYnV0ZShcImRhdGEtXCIrcixuKX10LnNoZWV0Pyh0LmlubmVySFRNTD1lLHQuc2hlZXQuY3NzVGV4dD1lLGkodCx7aW5zZXJ0QXQ6by5pbnNlcnRBdH0pKTp0LnN0eWxlU2hlZXQ/KGkodCx7aW5zZXJ0QXQ6by5pbnNlcnRBdH0pLHQuc3R5bGVTaGVldC5jc3NUZXh0PWUpOih0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGUpKSxpKHQse2luc2VydEF0Om8uaW5zZXJ0QXR9KSl9fX0se31dfSx7fSxbMl0pKDIpfSkpOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBmdW5jdGlvbihkZWNrKSB7XG4gICAgdmFyIG1vZGlmeVN0YXRlID0gZnVuY3Rpb24obWV0aG9kLCBldmVudCkge1xuICAgICAgdmFyIGF0dHIgPSBldmVudC5zbGlkZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmVzcG9rZS1zdGF0ZScpO1xuXG4gICAgICBpZiAoYXR0cikge1xuICAgICAgICBhdHRyLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgIGRlY2sucGFyZW50LmNsYXNzTGlzdFttZXRob2RdKHN0YXRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRlY2sub24oJ2FjdGl2YXRlJywgbW9kaWZ5U3RhdGUuYmluZChudWxsLCAnYWRkJykpO1xuICAgIGRlY2sub24oJ2RlYWN0aXZhdGUnLCBtb2RpZnlTdGF0ZS5iaW5kKG51bGwsICdyZW1vdmUnKSk7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHJldHVybiBmdW5jdGlvbihkZWNrKSB7XG4gICAgdmFyIGF4aXMgPSBvcHRpb25zID09ICd2ZXJ0aWNhbCcgPyAnWScgOiAnWCcsXG4gICAgICBzdGFydFBvc2l0aW9uLFxuICAgICAgZGVsdGE7XG5cbiAgICBkZWNrLnBhcmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPT0gMSkge1xuICAgICAgICBzdGFydFBvc2l0aW9uID0gZS50b3VjaGVzWzBdWydwYWdlJyArIGF4aXNdO1xuICAgICAgICBkZWx0YSA9IDA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkZWNrLnBhcmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoZS50b3VjaGVzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGVsdGEgPSBlLnRvdWNoZXNbMF1bJ3BhZ2UnICsgYXhpc10gLSBzdGFydFBvc2l0aW9uO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGVjay5wYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChNYXRoLmFicyhkZWx0YSkgPiA1MCkge1xuICAgICAgICBkZWNrW2RlbHRhID4gMCA/ICdwcmV2JyA6ICduZXh0J10oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn07XG4iLCJ2YXIgZnJvbSA9IGZ1bmN0aW9uKG9wdHMsIHBsdWdpbnMpIHtcbiAgdmFyIHBhcmVudCA9IChvcHRzLnBhcmVudCB8fCBvcHRzKS5ub2RlVHlwZSA9PT0gMSA/IChvcHRzLnBhcmVudCB8fCBvcHRzKSA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0cy5wYXJlbnQgfHwgb3B0cyksXG4gICAgc2xpZGVzID0gW10uZmlsdGVyLmNhbGwodHlwZW9mIG9wdHMuc2xpZGVzID09PSAnc3RyaW5nJyA/IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKG9wdHMuc2xpZGVzKSA6IChvcHRzLnNsaWRlcyB8fCBwYXJlbnQuY2hpbGRyZW4pLCBmdW5jdGlvbihlbCkgeyByZXR1cm4gZWwubm9kZU5hbWUgIT09ICdTQ1JJUFQnOyB9KSxcbiAgICBhY3RpdmVTbGlkZSA9IHNsaWRlc1swXSxcbiAgICBsaXN0ZW5lcnMgPSB7fSxcblxuICAgIGFjdGl2YXRlID0gZnVuY3Rpb24oaW5kZXgsIGN1c3RvbURhdGEpIHtcbiAgICAgIGlmICghc2xpZGVzW2luZGV4XSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGZpcmUoJ2RlYWN0aXZhdGUnLCBjcmVhdGVFdmVudERhdGEoYWN0aXZlU2xpZGUsIGN1c3RvbURhdGEpKTtcbiAgICAgIGFjdGl2ZVNsaWRlID0gc2xpZGVzW2luZGV4XTtcbiAgICAgIGZpcmUoJ2FjdGl2YXRlJywgY3JlYXRlRXZlbnREYXRhKGFjdGl2ZVNsaWRlLCBjdXN0b21EYXRhKSk7XG4gICAgfSxcblxuICAgIHNsaWRlID0gZnVuY3Rpb24oaW5kZXgsIGN1c3RvbURhdGEpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIGZpcmUoJ3NsaWRlJywgY3JlYXRlRXZlbnREYXRhKHNsaWRlc1tpbmRleF0sIGN1c3RvbURhdGEpKSAmJiBhY3RpdmF0ZShpbmRleCwgY3VzdG9tRGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc2xpZGVzLmluZGV4T2YoYWN0aXZlU2xpZGUpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdGVwID0gZnVuY3Rpb24ob2Zmc2V0LCBjdXN0b21EYXRhKSB7XG4gICAgICB2YXIgc2xpZGVJbmRleCA9IHNsaWRlcy5pbmRleE9mKGFjdGl2ZVNsaWRlKSArIG9mZnNldDtcblxuICAgICAgZmlyZShvZmZzZXQgPiAwID8gJ25leHQnIDogJ3ByZXYnLCBjcmVhdGVFdmVudERhdGEoYWN0aXZlU2xpZGUsIGN1c3RvbURhdGEpKSAmJiBhY3RpdmF0ZShzbGlkZUluZGV4LCBjdXN0b21EYXRhKTtcbiAgICB9LFxuXG4gICAgb24gPSBmdW5jdGlvbihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAobGlzdGVuZXJzW2V2ZW50TmFtZV0gfHwgKGxpc3RlbmVyc1tldmVudE5hbWVdID0gW10pKS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgIHJldHVybiBvZmYuYmluZChudWxsLCBldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9LFxuXG4gICAgb2ZmID0gZnVuY3Rpb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgbGlzdGVuZXJzW2V2ZW50TmFtZV0gPSAobGlzdGVuZXJzW2V2ZW50TmFtZV0gfHwgW10pLmZpbHRlcihmdW5jdGlvbihsaXN0ZW5lcikgeyByZXR1cm4gbGlzdGVuZXIgIT09IGNhbGxiYWNrOyB9KTtcbiAgICB9LFxuXG4gICAgZmlyZSA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgZXZlbnREYXRhKSB7XG4gICAgICByZXR1cm4gKGxpc3RlbmVyc1tldmVudE5hbWVdIHx8IFtdKVxuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uKG5vdENhbmNlbGxlZCwgY2FsbGJhY2spIHtcbiAgICAgICAgICByZXR1cm4gbm90Q2FuY2VsbGVkICYmIGNhbGxiYWNrKGV2ZW50RGF0YSkgIT09IGZhbHNlO1xuICAgICAgICB9LCB0cnVlKTtcbiAgICB9LFxuXG4gICAgY3JlYXRlRXZlbnREYXRhID0gZnVuY3Rpb24oZWwsIGV2ZW50RGF0YSkge1xuICAgICAgZXZlbnREYXRhID0gZXZlbnREYXRhIHx8IHt9O1xuICAgICAgZXZlbnREYXRhLmluZGV4ID0gc2xpZGVzLmluZGV4T2YoZWwpO1xuICAgICAgZXZlbnREYXRhLnNsaWRlID0gZWw7XG4gICAgICByZXR1cm4gZXZlbnREYXRhO1xuICAgIH0sXG5cbiAgICBkZWNrID0ge1xuICAgICAgb246IG9uLFxuICAgICAgb2ZmOiBvZmYsXG4gICAgICBmaXJlOiBmaXJlLFxuICAgICAgc2xpZGU6IHNsaWRlLFxuICAgICAgbmV4dDogc3RlcC5iaW5kKG51bGwsIDEpLFxuICAgICAgcHJldjogc3RlcC5iaW5kKG51bGwsIC0xKSxcbiAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgc2xpZGVzOiBzbGlkZXNcbiAgICB9O1xuXG4gIChwbHVnaW5zIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uKHBsdWdpbikge1xuICAgIHBsdWdpbihkZWNrKTtcbiAgfSk7XG5cbiAgYWN0aXZhdGUoMCk7XG5cbiAgcmV0dXJuIGRlY2s7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZnJvbTogZnJvbVxufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIEZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGJyb3dzZXIgZmllbGQsIGNoZWNrIG91dCB0aGUgYnJvd3NlciBmaWVsZCBhdCBodHRwczovL2dpdGh1Yi5jb20vc3Vic3RhY2svYnJvd3NlcmlmeS1oYW5kYm9vayNicm93c2VyLWZpZWxkLlxuXG52YXIgc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyIGluc2VydFN0eWxlRWxlbWVudCA9IGZ1bmN0aW9uKHN0eWxlRWxlbWVudCwgb3B0aW9ucykge1xuICAgIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5pbnNlcnRBdCA9IG9wdGlvbnMuaW5zZXJ0QXQgfHwgJ2JvdHRvbSc7XG5cbiAgICBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgaWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuICAgICAgICAgICAgaGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICBoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSAnYm90dG9tJykge1xuICAgICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgXFwnaW5zZXJ0QXRcXCcuIE11c3QgYmUgXFwndG9wXFwnIG9yIFxcJ2JvdHRvbVxcJy4nKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvLyBDcmVhdGUgYSA8bGluaz4gdGFnIHdpdGggb3B0aW9uYWwgZGF0YSBhdHRyaWJ1dGVzXG4gICAgY3JlYXRlTGluazogZnVuY3Rpb24oaHJlZiwgYXR0cmlidXRlcykge1xuICAgICAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICAgICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG5cbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGlmICggISBhdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLScgKyBrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfSxcbiAgICAvLyBDcmVhdGUgYSA8c3R5bGU+IHRhZyB3aXRoIG9wdGlvbmFsIGRhdGEgYXR0cmlidXRlc1xuICAgIGNyZWF0ZVN0eWxlOiBmdW5jdGlvbihjc3NUZXh0LCBhdHRyaWJ1dGVzLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgZXh0cmFPcHRpb25zID0gZXh0cmFPcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBpZiAoICEgYXR0cmlidXRlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIGtleSwgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0eWxlLnNoZWV0KSB7IC8vIGZvciBqc2RvbSBhbmQgSUU5K1xuICAgICAgICAgICAgc3R5bGUuaW5uZXJIVE1MID0gY3NzVGV4dDtcbiAgICAgICAgICAgIHN0eWxlLnNoZWV0LmNzc1RleHQgPSBjc3NUZXh0O1xuICAgICAgICAgICAgaW5zZXJ0U3R5bGVFbGVtZW50KHN0eWxlLCB7IGluc2VydEF0OiBleHRyYU9wdGlvbnMuaW5zZXJ0QXQgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3R5bGUuc3R5bGVTaGVldCkgeyAvLyBmb3IgSUU4IGFuZCBiZWxvd1xuICAgICAgICAgICAgaW5zZXJ0U3R5bGVFbGVtZW50KHN0eWxlLCB7IGluc2VydEF0OiBleHRyYU9wdGlvbnMuaW5zZXJ0QXQgfSk7XG4gICAgICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NUZXh0O1xuICAgICAgICB9IGVsc2UgeyAvLyBmb3IgQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpXG4gICAgICAgICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3NUZXh0KSk7XG4gICAgICAgICAgICBpbnNlcnRTdHlsZUVsZW1lbnQoc3R5bGUsIHsgaW5zZXJ0QXQ6IGV4dHJhT3B0aW9ucy5pbnNlcnRBdCB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4iXX0=
