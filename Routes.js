//const path = require("path");
//const router = require('express').router;
//const { v4: uuidv4 } = require('uuid');
const { notes } = require('./db/db.json');
//const { createNewNote, findById, editNote, removeNote } = require('../../lib/notes');
router.get('/notes', (req, res) => {
res.json(notes);
});

router.post('/notes', (req, res) => {
    if(!req.body.id) {
        req.body.id = uuidv4();
        createNewNote(req.body, notes);
    } else {
        editNote(req.body, notes);
    }
    res.json(req.body);
    
});
router.delete('/notes/:id', (req, res) => {
    const note = findByid(req.params.id, notes);

    removeNotes(note, notes);
    res.json();
});
module.export = router;

    