function Login(){
    return(
        <div>
            <h3>login user </h3>
        </div>
    )
}


// export default Login;



// named component  - to import a named component write name inside culry bracket
export function Signin(){
    return(
        <div>
            <h1>signin user</h1>
        </div>
    )
}

export const Username="priyank"


function User({user}){
    return(
    <div>
        <hr />
        <h1>Name:{user.name}</h1>
        <h1>Age:{user.age}</h1>
        <h1>Email:{user.email}</h1>
    </div>
    )
}

export default User;


 export function College({names}){
    return(
        <div>
            <h1>college</h1>
            <h1>{names[0]}</h1>
            <h1>{names[1]}</h1>
            <h1>{names[2]}</h1>
        </div>
    )
}
 ;


 export function Student({name}){
    return(
        <div>
            <hr />
<h2>name:{name}</h2>

<hr />
        </div>
    )
 }



  export function Nuser({name="new user "}){
    return(
    <div>
        <h1>hi {name}</h1>
    </div>
    )
 }   


 export function Wrapper({children,color}){
    return(
        <div style={{color:color , border:"5px solid green ",width:"300px",margin:"3px"}}>
            {children}
        </div>
    )
 }


 export function User2({userinfo}){
    return(
        <div style={{border:"1px solid green ",
            margin:"10px",
            width:"400px",
            padding:"10px",
            borderRadius:"10px"
        }}>
            <h1>name:{userinfo.name}</h1>
             <h1>email:{userinfo.email}</h1>
            <h1>age:{userinfo.age}</h1>
        </div>
    )
 }