import React from 'react';

import Room from './Room.jsx';

const RoomType = ({roomArrey, currCat}) => {
    return roomArrey.map((singleRoom, iox) => {
    
        if (currCat === 'All' || currCat === singleRoom.category) {
            return (
                <Room key={iox} singleRoom={singleRoom}/>
            );
        } 
        return false;
    });
}

export default RoomType;
