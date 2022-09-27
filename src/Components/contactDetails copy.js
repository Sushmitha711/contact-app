// import React,{useState,useEffect} from 'react';
// import {useParams} from 'react-router-dom'
// import axios from 'axios';


// const ContactDetails = () => {
//     const [users ,setUsers]=useState([""])

//     useEffect(()=>{
//         axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
//         .then((res)=>{setUsers(res.data)})
//         .catch()
//     },[users])

//     const {id}=useParams()
  
//     return (
        // <div>
        //      <table className='table table-hover'>
        //         <thead>
        //             <tr>
        //                 <th><h1>Contact Details</h1></th>  
        //             </tr>
        //         </thead>
        //         <tbody>
        //            {users && <>
        //            <tr>
        //            {/* <th><img src={users.image}/></th> */}
        //             <td><h4>name:{users.name}</h4></td>
        //             </tr></>}
        //         </tbody>
        //      </table>
            
          
//         </div>
//     );
    
// }

// export default ContactDetails;

<>
                    <tr><td><h4>name:{users.id}</h4></td></tr>
                    <tr><td><h4>Email:{users.email}</h4></td></tr>
                    <tr><td><h4>phone:{users.phone}</h4></td></tr>
                    <tr><td><h4>name:{users.phone}</h4></td></tr>
                    <tr><td><h4>name:{users.name}</h4></td></tr>
                     </>
