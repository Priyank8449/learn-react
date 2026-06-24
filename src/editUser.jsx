import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const UserEdit = () => {
    const[name,setName]=useState('')
        const[email,setEmail]=useState('')
        const[age,setAge]=useState('')

        const Navigate=useNavigate()
        
        
        const {id}=useParams()
        const url="http://localhost:3000/user/"+id;

    useEffect(()=>{
        getUserData()
    },[])

    const getUserData= async ()=>{
        console.log(url)

        let  response =await fetch(url)
        response=await response.json();

        setName(response.name)
        setEmail(response.email)
        setAge(response.age)

    }

    const updateUserData= async ()=>{

        let response=await fetch(url,{
            method:"Put",
            body:JSON.stringify({name,email,age})
        });
        response=await response.json()

        console.log(response)
        if(response){
            alert("user updated")
        }
        Navigate("/")

        

    }
  return (
    <div className='text-center mt-12'>
        <h1>edit user detail</h1>

        <input className='m-2 p-2 border-2 text-black font-black font-bold' value={name}  onChange={(event)=>setName(event.target.value)}  type="text" placeholder='enter name' /><br />
        <input className='m-2 p-2 border-2 text-black font-black font-bold' value={email} onChange={(event)=>setEmail(event.target.value)} type="text" placeholder='enter email' /><br />
        <input className='m-2 p-2 border-2 text-black font-black font-bold' value={age}  onChange={(event)=>setAge(event.target.value)}  type="number" placeholder='enter age' /><br />

        <button onClick={updateUserData} className='border-2 bg-sky-400 rounded-5 m-2 p-2'>update user</button>
    </div>
  )
}

export default UserEdit