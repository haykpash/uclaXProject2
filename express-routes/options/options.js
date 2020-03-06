const express = require('express');
const router = express.Router();

const services = require('./optionsData');

router.get('/gallery', (req,res) => { 
    res.json(services.gallery);
    console.log('Retreived Options'); 
});
router.get('/categories', (req,res) => { 
    res.json(services.categories);
    console.log('Retreived OptionType'); 
});

module.exports = router;