import express from 'express';
import path from 'path';
import renderOnServer from './renderOnServer'
import cookieParser from 'cookie-parser'

const APP_PORT = 8000;

var app = express();

app.set('view engine', 'ejs');
{/* eslint-disable */}
// Serve CSS
app.use('/css/', express.static(path.resolve(__dirname, '..', 'css')));
app.use('/js/', express.static(path.resolve(__dirname, '..', 'js')));
app.use('/fonts/', express.static(path.resolve(__dirname, '..', 'fonts')));
app.use('/img/', express.static(path.resolve(__dirname, '..', 'img')));
app.use(cookieParser())
// Serve JavaScript
app.get('/bundle.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    res.sendFile('bundle.js', {root: path.resolve(__dirname, '..', 'lib')});
});

// Serve HTML
app.get('/*', (req, res, next) => {
    renderOnServer(req, res, next);
});

app.listen(APP_PORT, () => {
    console.log(`App is now running on http://localhost:${APP_PORT}`);
});