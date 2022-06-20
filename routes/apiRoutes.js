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

api.delete('/notes/:id'. (req, res) => {
    const notesArrayKept = [];

    fs.readFile('./db.db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err); 
        } else {
            notesData = JSON.parse(data);
            for (let i = 0; i < notesData.length; i++ ) {
                let noteId = notesData[i].id;
                if (noteId === req.parms.id){
                    console.log(`This note has been deleted: ${noteId}`);
                }else{
                    notesArrayKept.push(notesData[i])
                };
            fs.writeFile('./db/db.json', JSON.stringify(notesArrayKept), (err, res) => {
                if (err) throw err;
            });
            res.sendFile(path.join(__dirname, 'public/notes.html'));
            };
        };

        
    });

});

module.exports = app;