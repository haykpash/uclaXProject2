const express = require('express');
const router = express.Router();

const colors = require('./colorsData.js');
router.get('/', (req,res) => { 
    res.json(colors);
    console.log('Retreived Colors'); 
});

module.exports = router;