import pkg from 'gulp';

import path from '../config/path.js';
import app from '../config/app.js';

import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import babel from 'gulp-babel';
import webpack from 'webpack-stream';
import gulpIf from 'gulp-if';

const { src, dest } = pkg;

export default () => {
  return src(path.js.src, { sourcemaps: app.isDev })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'JS',
          message: error.message,
        })),
      })
    )
    .pipe(gulpIf(app.isProd, babel()))
    .pipe(webpack(app.webpack))
    .pipe(dest(path.js.dest, { sourcemaps: app.isDev }));
};
