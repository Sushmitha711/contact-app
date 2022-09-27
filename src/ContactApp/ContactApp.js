import React from 'react';
import ContactDetails from '../Components/ContactDetails';
import ContactList from '../Components/contactList';

const ContactApp = () => {
    return (
    <div>
         <div className='navbar navbar-dark bg-dark navbar-expand-lg'>
           <h1 className='navbar-brand ml-10'>Contact App Example</h1>  
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                   <ContactList/>
                </div>
                <div className='col-md-4'>
                </div>
            </div>
        </div>
     </div>
    );
}

export default ContactApp;
