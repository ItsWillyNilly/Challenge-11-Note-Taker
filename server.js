// imports express
const express = require('express');
// imports the file system module
const fs = require('fs');
// imports path module
const path = require('path');
// imports a unique id generator module
const uniqid = require('uniqid');

// sets PORT to whatever is in the environment variable or sets PORT to 3001 if theres nothing in there
const PORT = process.env.PORT || 3001;

// creates an instance of our server
const app = express();

// global express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('Develop/public'));

// get routes for index.html and notes.html 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
});

// return all saved notes as a json
app.get('/api/notes', (req, res) => {
        fs.readFile('./Develop/db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.json(JSON.parse(data));
            }
        });
});

// create a note
app.post('/api/notes', (req, res) => {
    const {title, text} = req.body;

    // checks to see if the req.body content is valid and creates a new note object if it is
    if (title && text){
        let newNote = {
            title,
            text,
            id: uniqid()
        };

        // reads the database, parses the data, and then pushes the new note object to the parsed data
        fs.readFile('./Develop/db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                let savedNotes = JSON.parse(data);

                savedNotes.push(newNote);

                // stringifies the data and updates the database
                fs.writeFile('./Develop/db/db.json', JSON.stringify(savedNotes), (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.status(201).send('Note added succesfully!');
                    }
                })
            }
        })
    } else {
        res.status(400).json({ error: 'Not was not added because you dont have a title and/or text.'});
    }  
});

// delete a note
app.delete('/api/notes/:id', (req, res) => {

});


app.listen(PORT, () => {
    console.log(`You are now listening on (${PORT}) http://localhost:${PORT}.`);
});
