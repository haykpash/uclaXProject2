
const tabbed = require('./tabbed/tabbed.js');
const rooms = require('./rooms/rooms.js');
const slides = require('./slides/slides.js');
const email = require('./email/email.js');
const login = require('./login/login.js');

const routes = {
    //colors: colors,
    tabbed: tabbed,
    rooms: rooms,
    slides: slides,
    email: email,
    login: login,
    
}

module.exports = routes;