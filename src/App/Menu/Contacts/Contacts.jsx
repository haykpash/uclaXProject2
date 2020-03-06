import React from 'react';
import '../Menu.scss';
import './Contacts.scss';

//import Address from './Address/Address.jsx';
import EmailForm from './EmailForm/EmailForm.jsx';
import GoogleMap from './GoogleMap/GoogleMap.jsx';


const Contacts = () => {
    return (
        <div className = { 'Pages Contact' }>
            <div className="row row1">
                <div className="column column2">
                    <EmailForm />
                </div>
                <div className="row row2">
                    <GoogleMap />
                </div>
            </div>
                
        </div>  
    );
}
export default Contacts;