const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// app use express
const app = express();

// creating environment variable port
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ADD in ROUTES

app.use('/api', apiRoutes);

app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Example app listening at at http://localhost:${PORT}`);
  });