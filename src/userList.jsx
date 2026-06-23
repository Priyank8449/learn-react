import React from 'react'
 import { Link } from 'react-router'
const UserList = () => {

    const  userData=[
        {
            id:1,
            name:"priyank"
        },
        {
            id:2,
            name:"sam"
        },
        {
            id:3,
            name:"peter"
        },
        {
            id:4,
            name:"aditi"
        },
    ]
  return (
    <div><h1>user-list</h1>
    
    {
        userData.map((item)=>{
            return(

                <div>
                <h2><Link to={"/users/"+ item.id}
                 >{item.name}</Link></h2>
            </div>
                )
        }) 
    }
    </div>
  )
}

export default UserList