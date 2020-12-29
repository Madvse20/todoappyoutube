const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');
const editController = require('../controllers/edit');

router.get('/', indexController.getIndex);

router.post('/hinzufuegen', indexController.postIndex);

router.delete('/loeschen/:id', indexController.deleteIndex);

router.get('/bearbeiten/:id', editController.getEdit);

router.put('/bearbeiten/:id', editController.putEdit);

module.exports = router;