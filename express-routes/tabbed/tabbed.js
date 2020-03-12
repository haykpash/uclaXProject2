const express = require('express');
const router = express.Router();

const tabbed = require('./tabbedData');

router.get('/', (req,res) => { 
    res.json(tabbed);
    console.log('Retreived Tabbed');
});

module.exports = router;