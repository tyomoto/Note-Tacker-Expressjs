const html = require('express').Router();
const path = require('path');

// When endpoint /notes is visited send the user to the notes html page
html.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})
// When any other notepoint is visited send the user to the index html page
html.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

module.exports = html;