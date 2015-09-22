var path = require('path');

var appRoot = 'wwwroot/src/';
var outputRoot = 'wwwroot/dist/';

module.exports = {
    root: appRoot,
    source: appRoot + '*.js',
    html: appRoot + '*.html',
    css: appRoot + '*.css',
    style: 'styles/*.css',
    output: outputRoot,
    doc: './doc',
    e2eSpecsSrc: '../wwwroot/test/e2e/src/*.js',
    e2eSpecsDist: '../wwwroot/test/e2e/dist/'
};