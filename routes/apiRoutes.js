const api = require('express').Router();
const fs = require('fs');
const database = require('../db/db.json');

api.get('./notes', (req, res) => {
    database = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))

    res.json(database);
})

api.post('/notes', (req, res) => {
    const {title, text} = req.body;
    const newNote = {
        title,
        text,
        id: Math.floor(Math.random() * 1000)
    };
    database.push(newNote);
    fs.writeFileSync('./db/db.json', 
        JSON.stringify(database)(database), (err, res) => {
            if(err) throw err;
    });
 res.json(database);
})