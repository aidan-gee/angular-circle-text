var path = require('path');

var appRoot = 'app/';

module.exports = {
  root: appRoot,
  source: appRoot + 'components/**/*.js',
  html: [appRoot + 'components/**/*.html', '*.html'],
  style: 'styles/**/*.css'
};