import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Axios = () => {
    // const [users,setUsers]=useState([])
    // useEffect(()=>{
    // const url="https://randomuser.me/api/?results=10"
    // fetch(url)
    // .then(res=>res.json())
    // .then(data=>{
    // setUsers(data.results)
    //             })
    //               })

    const [users,setUsers]=useState([])
    useEffect(()=>{
        const url="https://randomuser.me/api/?results=10"
        axios(url)
        .then(data=>{
            setUsers(data.results)
                    })
                  })
    return (
        <div>
            {/* <h1>Total Users:{users.length}</h1> */}
            <h1>Total Users:{users.length}</h1>
        </div>
    );
};

export default Axios;