const express = require('express');

// app use express
const app = express();

// creating environment variable port
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ADD in ROUTES

app.listen(PORT, () => {
    console.log(`Server available at localhost${PORT}`);
  });