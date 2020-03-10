import React, { useState, useEffect } from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

    const [shearchInput, updateSearchImput] = useState(false);
    const [menuBar, updateMenuBar] = useState (false);
    const [closeMenu, updateCloseMenu] =useState(false);
    const [bars, updateBars] = useState(true);
    const [menu768, updateMenu768] = useState(false)

    const handleSearchInputClick = () => {
        console.log('Search click');

        if (shearchInput === false) {
            updateSearchImput(true);
            updateMenuBar(false);
            updateCloseMenu(false)
        } else {
            updateSearchImput(false);
            updateMenuBar(false);
        }
    }
    const handleMenuBarClick = () => {
        console.log('handleMenuBarClick click');
        
        if (menuBar === false) {
            updateMenuBar(true);
            updateSearchImput(false);
            updateCloseMenu(true);
            updateBars(true);
        } 
    }
    const handleCloseMenuClick = () => {
        console.log('handleCloseMenuClick click');
        
        if (closeMenu === true) {
            updateMenuBar(false);
            updateBars(true);
            updateCloseMenu(false);
        }
    }
    const handleWindoSize = () => {
        if (window.innerWidth > 768) {
            updateBars(false);
            updateMenu768(true);
            updateMenuBar(false);
            updateCloseMenu(false);
        } else {
            updateBars(true);
            updateMenu768(false);
            updateBars(true);
        }
    }
    // const [bbbb] = useState ();
    // const handleBbbbClick = () => {
    //     if (bbbb === true ) {
    //         updateCloseMenu(true);
    //     }
    // }
    useEffect (()=>{
        window.addEventListener('resize', handleWindoSize);
        handleWindoSize();
    },[]);


    const handleNavLinkClick = () => {
        console.log('handleNavLinkClick clicked');
        updateMenuBar(false);
        updateBars(true);
        updateCloseMenu(false);
    }

    return (
    <nav className='Nav'>
        {  bars &&
            <div className='menubar icon' onClick ={handleMenuBarClick}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        }
        { menuBar &&
            <div className='menu1'  onClick={handleNavLinkClick}>
                <div className='inmenu'>
                <div className='about b'>
                        <NavLink  to='/'exact className="inactive">About</NavLink>
                    </div>
                    <div className='rooms'>
                        <NavLink to='/rooms' className="inactive">Rooms</NavLink>
                    </div>
                    <div className='contact b' >
                        <NavLink to='/contacts' className="inactive">Contacts</NavLink>
                    </div>
                    <div className='login b'>
                        <NavLink to='/login'className="inactive">Login</NavLink>
                    </div>
                </div>
            </div>
        }
        { menu768 &&
            <div className='menu768'>
                <div className='a'>
                    <NavLink to='/'exact className="inactive">About</NavLink>
                </div>
                <div className='a'>
                    <NavLink to='/rooms' className="inactive">Rooms</NavLink>
                </div>
            <div className='a'>
                    <NavLink to='/contacts' className="inactive">Contacts</NavLink>
                </div>
                <div className='a'>
                    <NavLink to='/login' className="inactive">Login</NavLink>
                </div>
            </div>
        }
        { closeMenu &&
            <div className='xmenu' onClick = {handleCloseMenuClick} >
                <FontAwesomeIcon icon={faTimes} />
            </div>
        }
        <div className='search icon' onClick ={handleSearchInputClick}>
            <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className='user icon'>
            <FontAwesomeIcon icon={faUserCircle} />
        </div>
    
        { shearchInput &&
            <input className='input' 
                type='search'
                name="search" 
                id="search" 
                placeholder="   Search" 
            />
        }
    </nav>
    )
};

export default Nav;