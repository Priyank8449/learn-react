
import React from 'react'
 import { useState ,useEffect  } from 'react'

const UserListforapi = () => {


    const [userData,setUsersData]=useState([])

    const[loading,setloading]=useState(false)
    useEffect(()=>{
        setloading(true)
        getUserData()
    },[])

    const getUserData= async ()=>{
        const  url="http://localhost:3000/user"
let  response=await fetch(url)
        response=await response.json()

        console.log(response)
        setUsersData(response)
        setloading(false)
    }
  return (
    <div>

         <div  className ="   border-2  m-4 p-2 flex justify-around ">

            <h3 className="font-extraboldbold underline" >name</h3>
            <h3 className="font-extraboldbold underline">email</h3>
            <h3 className="font-extraboldbold underline">age</h3>
                </div>

        {

            !loading?
            userData.map((user)=>(
                <div  className =" border-2 m-4 p-2 flex justify-around rounded-2xl"key={user.id}>

            <h3 >{user.name}</h3>
            <h3 >{user.email}</h3>
            <h3 >{user.age}</h3>
                </div>
            ))
            :<h1>Data loading</h1>
        }
        
    </div>
  )
}



export default UserListforapi


