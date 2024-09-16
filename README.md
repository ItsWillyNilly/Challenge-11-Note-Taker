# Note Taker Starter Code
This is a Note Taker application that utilizes Express.js, uiniqid node module, File System(fs) node module, path node module, and databases.

## Description
I was tasked with adding code to existing code. Specifically, I needed to create a server.js file that utilizes express.js to bridge together the front and back end of the application. Server.js contains middleware along with get, delete, and post requests for adding and modifying data in the database.

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappearso.
```

## Technologies Used
**Node.js**
**fs**
**uniqid**
**Path**
**Express.js**
**Insomnia**

## Installation Instructions
**Clone the repository**
```bash
git clone git@github.com:ItsWillyNilly/Challenge-11-Note-Taker.git
```

**Navigate to the project directory**
<br>EXAMPLE:
```
cd /Users/williamlee/bootcamp/challenge-11/Challenge-11-Note-Taker
```
**Install the Node package**
```bash
npm init -y
```

**Install dependencies**
```bash
npm i express
```
```bash
npm i uniqid
```

**Run the program**
```bash
node server.js
```

## Program Demonstration
<img src="Develop/assets/videos/Untitled Video September 15, 2024 7_12 PM.gif">
Video Link:<br> https://drive.google.com/file/d/1JnQhpZ1lNftP0PQG82fg9cFrG0a55Qi1/view?usp=sharing


## Website Link
https://challenge-11-note-taker-nq4y.onrender.com/notes

## GitHub Repo Link
https://github.com/ItsWillyNilly/Challenge-11-Note-Taker