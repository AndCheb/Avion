import pkg from 'gulp';

import path from '../config/path.js';
import app from '../config/app.js';

import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import htmlmin from 'gulp-htmlmin';
import typograf from 'gulp-typograf';
import webpHtml from 'gulp-webp-html';

const { src, dest } = pkg;

export default () => {
  return src(path.html.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'HTML',
          message: error.message,
        })),
      })
    )
    .pipe(webpHtml())
    .pipe(typograf(app.typograf))
    .pipe(htmlmin(app.htmlmin))
    .pipe(dest(path.html.dest));
};
