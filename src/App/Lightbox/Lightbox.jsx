import React from 'react';
import './Lightbox.scss';

const Lightbox = (props) => {
    return (
        (props.show === "true") && 
        <div
            className={'Lightbox'}
            onClick={props.turnLightOff}
        >
            <div className={'Light'}>
                <img className='img'
                src={props.imageURL}
                alt={props.imageAlt}
                />
                <h3>Boom</h3>
            </div>
        </div>
    );
}

export default Lightbox;