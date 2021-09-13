const express= require('express');
const fs = require('fs');
const path = require('path');

const createNewNotes = (note, noteArray) => {
    notesArray.push(note)

    fs.writeFilesSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
};
const findById = (id, noteArray) => {
    const result = noteArray.filter(note => note.id ===editedNote.id);
     return result;
}
const editNote = (editedNote, noteArray) => {

    notesArray.splice(index, 1);
    noteArray.splice(index, 0, editedNote);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: noteArray }, null, 2)
    )
};

const removeNotes = (note, noteArray) => {
    const index = noteArray.indexOf(note);
    noteArray.splice(index, 1);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ note: noteArray}, null, 2)
    );
};

module.exports = { createNewNote, findById, editNote, removeNote};