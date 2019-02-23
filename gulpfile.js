const { watch, src, dest, parallel, series } = require("gulp");
const stylus = require("gulp-stylus");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const sourcemaps = require("gulp-sourcemaps");
const del = require("delete");
const pkg = require("./package.json");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const pug = require("gulp-pug");
const buffer = require("vinyl-buffer");
const header = require("gulp-header");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const st = require("st");
const http = require("http");
const webserver = require("gulp-webserver");
const ghpages = require("gh-pages");

function cleanTask(cb) {
  del(["demo/dist", "dist", "lib/tmp"], cb);
}

function stylusTask() {
  return src(["lib/theme.styl", "lib/fonts.styl"], { sourcemaps: true })
    .pipe(sourcemaps.init())
    .pipe(
      stylus({
        "include css": true,
        paths: ["./node_modules"]
      })
    )
    .pipe(autoprefixer({ browsers: ["last 2 versions"] }))
    .pipe(csso())
    .pipe(sourcemaps.write("."))
    .pipe(dest("lib/tmp", { sourcemaps: "." }));
}

function browserifyTask() {
  return browserify({
    standalone: "bespoke.theme.beachday"
  })
    .add("./lib/bespoke-theme-beachday.js")
    .transform("brfs")
    .bundle()
    .pipe(source("bespoke-theme-beachday.js"))
    .pipe(buffer())
    .pipe(
      header(
        [
          "/*!",
          " * <%= name %> v<%= version %>",
          " *",
          " * Copyright <%= new Date().getFullYear() %>, <%= author.name %>",
          " * This content is released under the <%= license %> license",
          " */\n\n"
        ].join("\n"),
        pkg
      )
    )
    .pipe(dest("dist"))
    .pipe(rename("bespoke-theme-beachday.min.js"))
    .pipe(uglify())
    .pipe(
      header(
        [
          "/*! <%= name %> v<%= version %> ",
          "© <%= new Date().getFullYear() %> <%= author.name %>, ",
          "<%= license %> License */\n"
        ].join(""),
        pkg
      )
    )
    .pipe(dest("dist"));
}

function browserifyDemoTask() {
  return browserify({ debug: true })
    .add("./demo/src/main.js")
    .transform("brfs")
    .bundle()
    .pipe(source("build.js"))
    .pipe(buffer())
    .pipe(dest("demo/dist/build"));
}

function pugDemoTask() {
  return src("demo/src/index.pug")
    .pipe(pug())
    .pipe(dest("demo/dist"));
}

function devTask() {
  const port = 8082;

  watch("lib/*.styl", series(stylusTask, browserifyTask, browserifyDemoTask));
  watch("lib/*.js", series(browserifyTask, browserifyDemoTask));
  watch("demo/src/*.js", browserifyDemoTask);
  watch("demo/src/*.pug", pugDemoTask);

  return src("demo/dist").pipe(
    webserver({
      livereload: true,
      open: true,
      port
    })
  );
}

function deployTask(cb) {
  ghpages.publish(path.join(__dirname, "demo/dist"), cb);
}

exports.clean = cleanTask;
exports.compile = series(cleanTask, stylusTask, browserifyTask);
exports.demo = series(parallel(browserifyDemoTask, pugDemoTask), devTask);
exports.deploy = deployTask;
