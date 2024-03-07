import pkg from 'gulp';

import path from '../config/path.js';
import app from '../config/app.js';

import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import shortHand from 'gulp-shorthand';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import * as dartSass from 'sass';
import sass from 'gulp-sass';
import gulpIf from 'gulp-if';
import webpCss from 'gulp-webp-css';

const scss = sass(dartSass);

const { src, dest } = pkg;

export default () => {
  return (
    src(path.scss.src, { sourcemaps: app.isDev })
      .pipe(
        plumber({
          errorHandler: notify.onError((error) => ({
            title: 'SCSS',
            message: error.message,
          })),
        })
      )
      .pipe(scss())
      .pipe(gulpIf(app.isProd, autoprefixer()))
      .pipe(groupCssMediaQueries())
      .pipe(gulpIf(app.isProd, dest(path.scss.dest)))
      .pipe(gulpIf(app.isProd, shortHand()))
      .pipe(gulpIf(app.isProd, csso()))
      .pipe(rename(app.cssRename))
      .pipe(dest(path.scss.dest, { sourcemaps: app.isDev }))
  );
};
