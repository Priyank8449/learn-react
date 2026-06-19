import { useState } from "react"

function AddUser({setUser}){


    return(
        <>   
        <h1>add user</h1>
        <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="enter user na,e" />

        <hr />
        </>
    )
}

export default AddUser

