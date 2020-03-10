import React from 'react';
import '../Menu.scss';
import Tabbed from './Tabbed/Tabbed.jsx';
import Slides from './Slides/Slides.jsx';
import Video from './Video/Video.jsx';

const About = () => {
    return (
        <div className = { 'Menu About' }>
            <Slides/>
            <Tabbed/>
            <Video/>
        </div>
    );
}
export default About;