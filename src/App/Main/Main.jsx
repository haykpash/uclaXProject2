import React from 'react';
import './Main.scss';
import { Switch, Route } from 'react-router-dom';

import Login from '../Menu/Login/Login.jsx';
import Contacts from '../Menu/Contacts/Contacts.jsx';

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
            </Switch>
        </main>
    )
};

export default Main;