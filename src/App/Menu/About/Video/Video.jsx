import React from 'react';
import ReactPlayer from 'react-player'
import './Video.scss';

const Video = () => {
    return (
        <div className='tape'>
            <ReactPlayer width='100%'
            url="https://youtu.be/_2LLXnUdUIc"
            />
            </div>
        
    )
}

export default Video;