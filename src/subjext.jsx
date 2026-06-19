import { SubjectContext } from "./context";
import { useContext } from "react";

export default function Subject10(){

        const subject=useContext(SubjectContext)

    return(
        <>
        <div style={{backgroundColor:'pink',padding:'10px'}}>
        <h1>subject is: {subject} </h1>
        
</div>
        </>
    )
}