'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _renderOnServer = require('./renderOnServer');

var _renderOnServer2 = _interopRequireDefault(_renderOnServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var APP_PORT = 8000;

var app = (0, _express2.default)();

app.set('view engine', 'ejs');
// Serve CSS
app.use('/css/', _express2.default.static(_path2.default.resolve(__dirname, '..', 'css')));
app.use('/img/', _express2.default.static(_path2.default.resolve(__dirname, '..', 'img')));

// Serve JavaScript
app.get('/app.js', function (req, res) {
    res.setHeader('Content-Type', 'application/javascript');
    res.sendFile('app.js', { root: __dirname });
});

// Serve HTML
app.get('/*', function (req, res, next) {
    console.log(111);
    (0, _renderOnServer2.default)(req, res, next);
});

app.listen(APP_PORT, function () {
    console.log('App is now running on http://localhost:' + APP_PORT);
});