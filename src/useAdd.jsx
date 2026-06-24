import React, { useState } from 'react'

const UserAdd = () => {

    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[age,setAge]=useState('')

     const createUser=async ()=>{
        console.log(name,email,age)
        
        const url="http://localhost:3000/user"
        let response=await fetch(url,{
            method:"Post",
            body:JSON.stringify({name,email,age})
        });
        response=await response.json;

        if(response){
            alert("new user added")
        }
     }
  return (
    <div className='text-center mt-12'><h1>
        add new user
        </h1>

        <input className='m-2 p-2 border-2 text-black font-black font-bold' onChange={(event)=>setName(event.target.value)} type="text" placeholder='enter name ' /><br />
        <input className='m-2 p-2 border-2  text-black font-black font-bold'  onChange={(event)=>setEmail(event.target.value)} type="email" placeholder='enter email' /><br />
        <input className='m-2 p-2 border-2  text-black font-black font-bold'  onChange={(event)=>setAge(event.target.value)} type="number" placeholder='enter age' /><br />

        <button onClick={ createUser} className='border-2 bg-green-400 rounded-5 m-2 p-2'>add user </button>
        </div>
  )
}

export default UserAdd