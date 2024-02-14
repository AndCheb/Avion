import pkg from 'gulp';

import path from '../config/path.js';

import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

const { src, dest } = pkg;

export default () => {
  return (
    src(path.fonts.src)
      .pipe(
        plumber({
          errorHandler: notify.onError((error) => ({
            title: 'Font',
            message: error.message,
          })),
        })
      )
      .pipe(dest(path.fonts.dest))
  );
};
