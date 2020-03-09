import React, {useState, useEffect} from 'react';
import '../Menu.scss';
import './Rooms.scss';
import API from '../../common/API.js';
import Categories from './Categories.jsx';
import RoomType from './Roomlist.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

    const Rooms = () => {
        const [roomArrey, setroomArrey] = useState([]);
        const [categories, setCategories] = useState([]);
        const [currCat, setCurrCat] = useState('All');
    
    useEffect(() => {
        // 2. RETRIEVE THE DATA FROM THE SERVER
        API.get('rooms/categories').then((result) => {
            // 2. UPDATE OPTIONtYPE with data form server
            console.log('Categories Response', result);
            setCategories(result.data);
        });
        API.get('rooms/gallery').then((result) => {
            // 2. UPDATE OPTIONtYPE with data form server
            console.log('Room Response', result);
            setroomArrey(result.data);
        });
    },[])

    return (
        <div className = 'Menu Rooms'>
            <h2><FontAwesomeIcon icon={faHome} /></h2>
            <Categories 
                categories={categories} 
                currCat={currCat}
                setCurrCat={setCurrCat}
                />
            <div className='container'>
                <RoomType 
                roomArrey={roomArrey} 
                currCat={currCat}
                />
            </div>
        </div>
    );
}
export default Rooms;