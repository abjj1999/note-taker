const router = require('express').Router();
const notesData = require('../db/db.json');

const fs = require('fs');

router.get('/api/notes', (req, res) => {
  res.json(notesData);
})

router.post('/api/notes', (req, res) => {
  notesData.push(req.body);
  res.json(true);
  fs.writeFileSync('./db/db.json', JSON.stringify(notesData))
})

module.exports = router;