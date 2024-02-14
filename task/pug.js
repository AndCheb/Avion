import pkg from 'gulp';

import path from'../config/path.js';
import app from'../config/app.js';

import plumber from'gulp-plumber';
import notify from'gulp-notify';
import pugs from'gulp-pug';
import typograf from'gulp-typograf';
import webpHtml from 'gulp-webp-html';
import gulpIf from 'gulp-if';

const { src, dest } = pkg;

export default () => {
  return src(path.pug.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'Pug',
          message: error.message,
        })),
      })
    )
    .pipe(pugs(app.pug))
    .pipe(gulpIf(app.isProd, webpHtml()))
    .pipe(gulpIf(app.isProd, typograf(app.typograf)))
    .pipe(dest(path.pug.dest));
};

