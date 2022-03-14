import React, {useEffect, useState} from 'react';

const url = 'https://api.github.com/users/jyotip101';

const MultipleReturn = () => {

    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);
    const [users, setUsers] = useState("defalt user");

    useEffect(() =>{
        fetch(url).then(res => {
            if(res.status >=200 && res.status <= 299){
                return res.json();
            }else{
                setLoading(false);
                setError(true);
                console.log(res.statusText);
                throw new Error(res.statusText); 
            }
        }) 
        .then(user => {
            const { login} = user;
            setUsers(login)
            setLoading(false)
        })
        .catch(error => console.log(error));

    },[])

    if(isLoading){ 
        return  <h1>Loading...</h1>
    }  
    if(isError){ 
        return  <h1>Error...</h1>
    }

    return (
        <h1 
            style={{justifyContent: 'center', fontSize: '150%' }} 
            className="item"
        > 
            GitHub User: {users}  
        </h1>
     
    )
}

export default MultipleReturn
