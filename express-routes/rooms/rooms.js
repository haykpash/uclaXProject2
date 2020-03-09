const express = require('express');
const router = express.Router();

const services = require('./roomsData');

router.get('/gallery', (req,res) => { 
    res.json(services.gallery);
    console.log('Retreived Rooms'); 
});
router.get('/categories', (req,res) => { 
    res.json(services.categories);
    console.log('Retreived RoomType'); 
});

module.exports = router;