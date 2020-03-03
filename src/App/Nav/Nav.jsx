import React, { useState, useEffect } from 'react';
import './Nav.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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
            updateBars(true);
        } else {
            updateSearchImput(false);
            updateMenuBar(false);
        }
    }
    const handleMenuBarClick = () => {
        console.log('MenuBar click');
        
        if (menuBar === false) {
            updateMenuBar(true);
            updateSearchImput(false);
            updateCloseMenu(true)
            updateBars(false);
        } 
    }
    const handleCloseMenuClick = () => {
        console.log('MenuBar click');
        
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
        } else {
            updateBars(true);
            updateMenu768(false);
        }
    }
    useEffect (()=>{
        window.addEventListener('resize', handleWindoSize);
        handleWindoSize();
    },[]);
    return (
        <nav className='Nav'>
            {  bars &&
            <div className='menubar icon' onClick ={handleMenuBarClick}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            }
            { menuBar &&
                <div className='menu'>
                    <div className='rooms'>
                        <div className='living'>
                            Living Room
                        </div>
                        <div className='kitchen'>
                            Kitchen
                        </div>
                        <div className='dining'>
                            Dining room
                        </div>
                    </div>
                </div>
            }
            { menu768 &&
                <div className='menu768'>
                        <div className='living a'>
                            Living Room
                        </div>
                        <div className='kitchen a'>
                            Kitchen
                        </div>
                        <div className='dining a'>
                            Dining room
                        </div>
                </div>
            }
            { closeMenu &&
                <div className='xmenu' onClick={handleCloseMenuClick}>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
            }
            <div className='search icon' onClick ={handleSearchInputClick}>
                <FontAwesomeIcon icon={faSearch} />
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