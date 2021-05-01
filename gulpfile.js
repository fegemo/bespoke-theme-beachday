const { watch, src, dest, parallel, series, task } = require('gulp');
const stylus = require('gulp-stylus');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const del = require('delete');
const pkg = require('./package.json');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const pug = require('gulp-pug');
const buffer = require('vinyl-buffer');
const header = require('gulp-header');
const rename = require('gulp-rename');
const terser = require('gulp-terser');
const connect = require('gulp-connect');
const ghpages = require('gh-pages');
const path = require('path')

function cleanTask(cb) {
  del(['demo/dist', 'dist', 'lib/tmp'], cb);
}

function stylusTask() {
  return src(['lib/theme.styl', 'lib/fonts.styl'])
    .pipe(
      stylus({
        'include css': true,
        paths: ['./node_modules'],
      })
    )
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(dest('dist/theme'))
    .pipe(connect.reload());
}

function browserifyTask() {
  return browserify({
    standalone: 'bespoke.theme.beachday',
  })
    .add('./lib/bespoke-theme-beachday.js')
    .transform('browserify-css', {
      global: true,
      minify: true,
      rootDir: 'dist',
      autoInject: true,
      autoInjectOptions: {
        verbose: true,
        insertAt: 'bottom'
      },
    })
    .bundle()
    .pipe(source('bespoke-theme-beachday.js'))
    .pipe(buffer())
    .pipe(
      header(
        [
          '/*!',
          ' * <%= name %> v<%= version %>',
          ' *',
          ' * Copyright <%= new Date().getFullYear() %>, <%= author.name %>',
          ' * This content is released under the <%= license %> license',
          ' */\n\n',
        ].join('\n'),
        pkg
      )
    )
    .pipe(dest('dist'))
    .pipe(rename('bespoke-theme-beachday.min.js'))
    .pipe(
      terser({
        ecma: 2020
      })
    )
    .pipe(dest('dist'))
    .pipe(connect.reload());
}

function browserifyDemoTask() {
  return browserify({ debug: true })
    .add('./demo/src/main.js')
    .transform('browserify-css', {
      global: true,
      minify: true,
      autoInject: true,
      autoInjectOptions: {
        verbose: true,
        insertAt: 'bottom',
      },
    })
    .bundle()
    .pipe(source('build.js'))
    .pipe(buffer())
    .pipe(dest('demo/dist/build'))
    .pipe(connect.reload());
}

function pugDemoTask() {
  return src('demo/src/index.pug')
    .pipe(pug())
    .pipe(dest('demo/dist'))
    .pipe(connect.reload());
}

function devTask() {
  const port = 8081;

  watch('lib/*.styl', series(stylusTask, browserifyTask, browserifyDemoTask));
  watch('lib/*.js', series(browserifyTask, browserifyDemoTask));
  watch('demo/src/*.js', browserifyDemoTask);
  watch('demo/src/*.pug', pugDemoTask);

  connect.server({
    root: 'demo/dist',
    livereload: true,
    port
  })
}

function deployTask(cb) {
  ghpages.publish(path.join(__dirname, 'demo/dist'), cb);
}

exports.clean = cleanTask;
task('compile', series(cleanTask, stylusTask, browserifyTask));
task('demo', series(parallel(browserifyDemoTask, pugDemoTask), devTask));
exports.deploy = deployTask;
