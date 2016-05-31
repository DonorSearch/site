'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _renderOnServer = require('./renderOnServer');

var _renderOnServer2 = _interopRequireDefault(_renderOnServer);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var APP_PORT = 8000;

var app = (0, _express2.default)();

app.set('view engine', 'ejs');
{} /* eslint-disable */
// Serve CSS
app.use('/css/', _express2.default.static(_path2.default.resolve(__dirname, '..', 'css')));
app.use('/js/', _express2.default.static(_path2.default.resolve(__dirname, '..', 'js')));
app.use('/fonts/', _express2.default.static(_path2.default.resolve(__dirname, '..', 'fonts')));
app.use('/img/', _express2.default.static(_path2.default.resolve(__dirname, '..', 'img')));
app.use((0, _cookieParser2.default)());
// Serve JavaScript
app.get('/bundle.js', function (req, res) {
    res.setHeader('Content-Type', 'application/javascript');
    res.sendFile('bundle.js', { root: _path2.default.resolve(__dirname, '..', 'lib') });
});

// Serve HTML
app.get('/*', function (req, res, next) {
    (0, _renderOnServer2.default)(req, res, next);
});

app.listen(APP_PORT, function () {
    console.log('App is now running on http://localhost:' + APP_PORT);
});