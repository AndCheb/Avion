import pkg from 'gulp';

import path from '../config/path.js';
import app from '../config/app.js';

import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import cssImport from 'gulp-cssimport';
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import shortHand from 'gulp-shorthand';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import gulpIf from 'gulp-if';
import webpCss from 'gulp-webp-css';

const { src, dest } = pkg;

export default () => {
  return src(path.css.src, { sourcemaps: app.isDev })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'CSS',
          message: error.message,
        })),
      })
    )
    .pipe(cssImport())
    .pipe(autoprefixer())
    .pipe(gulpIf(app.isProd, webpCss()))
    .pipe(groupCssMediaQueries())
    .pipe(dest(path.css.dest, { sourcemaps: app.isDev }))
    .pipe(shortHand())
    .pipe(csso())
    .pipe(rename(app.cssRename))
    .pipe(dest(path.css.dest, { sourcemaps: app.isDev }));
};
