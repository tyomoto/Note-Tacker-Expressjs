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
  
//

// app.delete('/notes/:id', (req, res) => {
//     const notesArrayKept = [];

//     fs.readFile('./db.db.json', 'utf8', (err, data) => {
//         if (err) {
//             console.error(err); 
//         } else {
//             notesData = JSON.parse(data);
//             for (let i = 0; i < notesData.length; i++ ) {
//                 let noteId = notesData[i].id;
//                 if (noteId === req.parms.id){
//                     console.log(`This note has been deleted: ${noteId}`);
//                 }else{
//                     notesArrayKept.push(notesData[i])
//                 };
//             fs.writeFile('./db/db.json', JSON.stringify(notesArrayKept), (err, res) => {
//                 if (err) throw err;
//             });
//             res.sendFile(path.join(__dirname, 'public/notes.html'));
//             };
//         };

        
//     });

// });

module.exports = app;