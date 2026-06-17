import { useEffect } from "react"

function Counter({count,data}){

    const   handleCounter=()=>{
        console.log("handle counter called ")
    }

    useEffect(()=>{
        handleCounter()
    },[])
    useEffect(()=>{
        handleData()
    },[data])

    const handleData=()=>{
        console.log("handle data called " ,{data});
        
    }


    // handleCounter()
    return(
        <div>
            <h1> counter value {count}</h1>
            <h1> data value {data}</h1>
        </div>
    )
}


export function User3({displayName,name}){
    return(
        <div>
            <button onClick={()=>displayName(name)}>display  name</button>
        </div>
    )
}

export default Counter