import path from './path.js';

const isProd = process.argv.includes('--production');
const isDev = !isProd;

export default {
  isProd: isProd,
  isDev: isDev,

  htmlmin: {
    collapseWhitespace: isProd,
  },

  pug: {
    pretty: isDev,
  },

  typograf: {
    locale: ['ru', 'en-US'],
  },

  cssRename: {
    suffix: '.min',
    extname: '.css',
  },

  jsMinify: {
    ext: {
      src: '.js',
      min: '.min.js',
    },
    noSource: true,
  },

  webpack: {
    mode: isProd ? 'production' : 'development',
  },

  imagemin: {
    verbose: true,
  },

  server: {
    server: {
      baseDir: path.root,
    },
    browser: 'chrome',
    notify: false,
  },
};
