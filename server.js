// imports express
const express = require('express');
// imports the file system module
const fs = require('fs');
// imports path module
const path = require('path');
// imports the notes database
const notesDb = require('.Develop/db/db.json');

// creates an instance of our server
const app = express();

// sets PORT to whatever is in the environment variable or sets PORT to 3001 if theres nothing in there
const PORT = process.env.PORT || 3001;

// global express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('Develop/public'));



app.listen(PORT, () => {
    console.log(`You are now listening on PORT ${PORT}.`);
})
