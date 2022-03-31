const { extractCSS } = require('./extractCSS');
const { loadImages } = require('./loadImages');
const { loadJavascript } = require('./loadJavascript');
const { page } = require('./page');

module.exports = { loadImages, loadJavascript, extractCSS, page };
