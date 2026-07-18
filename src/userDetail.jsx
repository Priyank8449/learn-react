import React from 'react'
import { Link } from 'react-router';
import { useParams } from 'react-router'

export const UserDetail = () => {

    const paramsData=useParams();
  return (
    <div>

        <h1>user-detail</h1>
        <h2>user id is :{paramsData.id}</h2>
        <h3><Link to="/users">Back</Link></h3>

        <hr />

        <h1>user-detail</h1>
        <h2>user name is :{paramsData.name}</h2>
        <h3><Link to="/users">Back</Link></h3>

        
    
    </div>
  )
}


