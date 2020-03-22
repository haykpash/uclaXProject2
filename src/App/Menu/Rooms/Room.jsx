import React, { useState } from 'react';

import Lightbox from '../../Lightbox/Lightbox.jsx';

const Room = (props) => {
    
    const [showLightbox, setShowLightbox] = useState('false');
    
    const turnLightOn = () => {
        setShowLightbox('true');
    }
    const turnLightOff = () => {
        setShowLightbox('false');
    }
    
    return (
        <div className='Room'>       
            <img className='img'
                onClick={ turnLightOn }
                src={ props.singleRoom.img } 
                alt={ props.singleRoom.name } />
                
                

                
                
        <h3>{ props.singleRoom.name }: Category: {props.singleRoom.category}</h3>
        <Lightbox  
            show={ showLightbox }  
            turnLightOff={turnLightOff}
            imageURL={ props.singleRoom.img}
            imageAlt={ props.singleRoom.name}
        />
        </div>
    );
}

export default Room;