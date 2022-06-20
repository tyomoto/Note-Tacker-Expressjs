const app = require('express').Router();
const fs = require('fs');
const path = require('path');
let database = require('../db/db.json');

app.get('/notes', (req, res) => {
    // .get is run to /notes, db.json file will be read at same time
    database = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))
  
    res.json(database);
  
  });
  
app.post('/notes', (req, res) => {
    // seting up the structure for created note
    const {title, text} = req.body;
    const newNote = { 
    // Math.floor function to give the note a random ID
      id: Math.floor(Math.random() * 1000),
      title,
      text
    }
  
    // Push note into database
    database.push(newNote);
    // writes new note to db.json file
    fs.writeFileSync('./db/db.json', JSON.stringify(database), (err, res) => {
      if(err) throw err;
    });
    res.json(database);
  })
  
// Working delete function for selected notes
app.delete('/notes/:id', (req, res) => {
    const notesArrayKept = [];

    // Loop to check each id of the database
    for (let i = 0; i < database.length; i++ ) {
        // if the note that was seleceted to delete has its id match the requested id, it will be removed from the array
        if (parseInt(database[i].id) === req.params.id){
            console.log(`This note has been deleted: ${noteId}`);
        }else{
            // if it wasn't deleted, push it to the array
            notesArrayKept.push(database[i]);
        };
        database = notesArrayKept;
        // write the json file with the new array MINUS the note selected to delete
        fs.writeFile('./db/db.json', JSON.stringify(database), (err, res) => {
                if (err) throw err;
            });
        res.sendFile(path.join(__dirname, 'public/notes.html'));
            
        };

});

module.exports = app;