import pkg from 'gulp';

import path from '../config/path.js';
import app from '../config/app.js';

import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import imagemin from 'gulp-imagemin';
import newer from 'gulp-newer';
import webp from 'gulp-webp';
import gulpIf from 'gulp-if';

const { src, dest } = pkg;

export default () => {
  return src(path.img.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'Image',
          message: error.message,
        })),
      })
    )
    .pipe(newer(path.img.dest))
    .pipe(gulpIf(app.isProd, webp()))
    .pipe(gulpIf(app.isProd, dest(path.img.dest)))
    .pipe(gulpIf(app.isProd, src(path.img.src)))
    .pipe(gulpIf(app.isProd, newer(path.img.dest)))
    .pipe(gulpIf(app.isProd, imagemin(app.imagemin)))
    .pipe(dest(path.img.dest));
};



// .pipe(newer(path.img.dest))
// .pipe(gulpIf(app.isProd, imagemin(app.imagemin)))
// .pipe(dest(path.img.dest));
