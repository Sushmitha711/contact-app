import React,{useState,useEffect} from 'react';
import {json, useParams} from 'react-router-dom'
import axios from 'axios';


const ContactDetails = () => {
    const [users ,setUsers]=useState([])


      useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
       .then((res)=>{setUsers(res.data)}) 
       .catch((err)=>{console.log(err)});
    },[])

    const {id}=useParams()
    console.log(id)



  
    return (
        <div>
            <pre>{JSON.stringify(users)}</pre>
             <table className='table table-hover'>
                <thead>
                    <tr>
                        <th><h1>Contact Details</h1></th>  
                    </tr>
                </thead>
                <tbody>
                   {
                   users && (
                     <>
                     <tr><td><h5>Name:{users.id}</h5></td></tr>
                     <tr><td><h5>Name:{users.name}</h5></td></tr>
                     <tr><td><h5>UserName:{users.username}</h5></td></tr>
                     <tr><td><h5>Email:{users.email}</h5></td></tr>
                     <tr><td><h5>phone:{users.phone}</h5></td></tr>
                     <tr><td><h5>Website:${users.website}</h5></td></tr>
                     </>
                   )}
                </tbody>
             </table>
            
          
        </div>
    );
    
}

export default ContactDetails;