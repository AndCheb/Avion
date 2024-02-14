import pkg from 'gulp';
import browserSync from 'browser-sync';

import path from './config/path.js';
import app from './config/app.js';

import clear from './task/clear.js';
import pug from './task/pug.js';
import scss from './task/scss.js';
import js from './task/js.js';
import img from './task/img.js';
import font from './task/fonts.js';

const { watch, series, parallel } = pkg;

const server = () => {
  browserSync.init(app.server);
};

const watcher = () => {
  watch(path.pug.watch, pug).on('all', browserSync.reload);
  watch(path.scss.watch, scss).on('all', browserSync.reload);
  watch(path.js.watch, js).on('all', browserSync.reload);
  watch(path.img.watch, img).on('all', browserSync.reload);
  watch(path.fonts.watch, img).on('all', browserSync.reload);
};

const build = series(
  clear,
  parallel(pug, scss, js, img, font)
);

const dev = series(
  build,
  parallel(watcher, server)
);

export { pug };
export { scss };
export { js };
export { img };
export { font };

export default app.isProd ? build : dev;


