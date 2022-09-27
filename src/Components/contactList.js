import React,{useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom"


const ContactList = () => {
    const [users ,setUsers]=useState([""])

    let loadUser=()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{setUsers(res.data)})
        .catch()
    }
    useEffect(()=>{
        loadUser();
    },[])

    const submitHandler=(e)=>{
        e.preventDefault();
    }
  
    return (
        <div>
            <h1>ContactList</h1>
            <pre>{JSON.stringify(users)}</pre>
            <table className='table table-hover'>
                <thead className='bg-dark text-white'>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>Contact</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((data,index)=>(
                         <tr key={index}>
                         <td>{index+1}</td>
                         <td>{data.name}</td>
                         <td>{data.email}</td>
                         <td>{data.phone}</td>
                         <td><Link to={`ContactDetails/${data.id}`} className='btn btn-success' onSubmit={submitHandler}>View</Link> </td>
                         </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ContactList;

