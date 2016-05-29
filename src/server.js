import express from 'express';
import path from 'path';
import renderOnServer from './renderOnServer'

const APP_PORT = 8000;

var app = express();

app.set('view engine', 'ejs');
// Serve CSS
app.use('/css/', express.static(path.resolve(__dirname, '..', 'css')));
app.use('/img/', express.static(path.resolve(__dirname, '..', 'img')));

// Serve JavaScript
app.get('/app.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    res.sendFile('app.js', {root: __dirname});
});

// Serve HTML
app.get('/*', (req, res, next) => {
    console.log(111)
    renderOnServer(req, res, next);
});

app.listen(APP_PORT, () => {
    console.log(`App is now running on http://localhost:${APP_PORT}`);
});