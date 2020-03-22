import React from 'react';
import ReactPlayer from 'react-player'
import './Video.scss';

const Video = () => {
    return (
        <div className='tape'>
            <ReactPlayer
            
            url="https://youtu.be/_2LLXnUdUIc"
            //url='https://www.youtube.com/watch?v=_2LLXnUdUIc'
            />
            </div>
        
    )
}

export default Video;