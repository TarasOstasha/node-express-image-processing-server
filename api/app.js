const express = require('express');
const path = require('path');
const app = express()

const pathToIndex = path.resolve(__dirname, '../client/index.html');

app.use('/*', ((req, res) => {
    res.sendFile(pathToIndex)
}));


app.use(express.static(path.resolve(__dirname, 'uploads')));

module.exports = app;