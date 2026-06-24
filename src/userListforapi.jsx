
import React from 'react'
 import { useState ,useEffect  } from 'react'
 import {  useNavigate } from 'react-router'

const UserListforapi = () => {

    const navigate=useNavigate()

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

    const  deleteUser= async (id)=>{
        const  url="http://localhost:3000/user"

        let response=await fetch((url+"/"+id),{
            method:"Delete"
        })
        response=await response.json();
        if(response){
            alert("user deleted")
            getUserData()
        }

    }
const editUser=(id)=>{
navigate("/edit/"+id)
}

  return (
    <div className='h-[500px] text-center relative border-2 m-2 overflow-scroll' >

         <div  className =" fixed w-[1340px] rounded-2xl backdrop-blur t-0 absolute  bg-black/2 border-2  m-4 p-2 flex justify-around ">

            <h3 className="font-extraboldbold underline" >name</h3>
            <h3 className="font-extraboldbold underline">email</h3>
            <h3 className="font-extraboldbold underline">age</h3>
            <h3 className="font-extraboldbold underline">action</h3>
                </div>

        {

            !loading?
            userData.map((user)=>(
                <div  className =" border-2 bg-gray-400 m-14  mt-25 p-2 flex justify-evenly rounded-2xl"key={user.id}>

        <ul className=' flex justify-evenly  items-center font-bold w-full space-x-7'>
            <li> <div className='w-[100px]'>{user.name}</div></li>
            <li><div className='w-[400px] text-center 
            '>{user.email}</div></li>
            <li><div></div>{user.age}</li>
            <li><div>
               <button onClick={()=>deleteUser(user.id)}className='border-2 p-1 bg-red-200'>Delete</button>
               <button onClick={()=>editUser(user.id)}className='border-2 p-1 bg-yellow-200'>Edit</button>
               
               </div></li> 
           </ul>
                </div>
            ))
            :<h1>Data loading</h1>
        }
        
    </div>
  )
}






export default UserListforapi


