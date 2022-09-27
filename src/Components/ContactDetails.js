import React,{useEffect,useState} from 'react';
import axios from 'axios';


const ContactDetails = () => {
    const [Details,setDetails]=useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${Details.id}`)
        .then((res)=>{setDetails(res.data)})
        .catch()
    }, [Details]);


    return (
        <div>
            <h1>Contact Details</h1>
            <div className='card'>
                <div className='card-header'>
                <img src={Details.image} />
                </div>
                <div className='card-body'>
                  <ul className='list-group'>
                    <li className='list-group-item'>{Details.id}</li>
                    <li className='list-group-item'>{Details.name}</li>
                    <li className='list-group-item'>{Details.email}</li>
                    <li className='list-group-item'>{Details.phone}</li>
                  </ul>
                </div>
            </div>
        </div>
    );
    
}

export default ContactDetails;
