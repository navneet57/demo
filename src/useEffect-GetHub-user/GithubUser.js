import React, { useEffect, useState } from 'react'

import './GithubUser.css';

const url = 'https://api.github.com/users';

const GithubUser = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async() =>{
        const response = await fetch(url);
        const users = await response.json();
 
        console.log(users);
        setUsers(users);
    } 
    useEffect(() => {
        getUsers() ; 
    },[]) 
    return (
    <> 
        <h1>Github Users</h1> 
        <ul>
            {
            users.map(user =>{
                const {id, login, html_url, avatar_url} = user;

                return(
                    <li key={id} className='item'>
                        <img src={avatar_url} alt={login} />
                        <p>{login} <a href={html_url}>profile </a></p>
                    </li>
                );
            })
            }
        </ul>
    </>
    )
}
 
export default GithubUser
