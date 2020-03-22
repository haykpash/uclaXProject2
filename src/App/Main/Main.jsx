import React from 'react';
import './Main.scss';
import { Switch, Route } from 'react-router-dom';

import Login from '../Menu/Login/Login.jsx';
import Contacts from '../Menu/Contacts/Contacts.jsx';
import About from '../Menu/About/About.jsx';
import Rooms from '../Menu/Rooms/Rooms.jsx';

const Main = () => {
    return (
        <main className='Main'>
            <Switch> 
                <Route path='/login'>
                    <Login />
                </Route> 
                <Route path='/contacts'>
                    <Contacts />
                </Route>
                <Route path='/rooms'>
                    <Rooms />
                </Route>
                <Route path='/' exact>
                    <About />
                </Route>
            </Switch>
        </main>
    )
};

export default Main;