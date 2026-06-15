

// cutsoft 
// weekday


// import Header from './Header'

import { use, useEffect, useState } from "react";
import { College, Student, Nuser, Wrapper, User2 } from "./user";
import User from "./user";
import Clock from "./clock";
import College2 from "./college";
import Counter from "./counter";

// import Login, { Username } from './user'

// import {Signin} from './user'

// import ToDo from './ToDo'



// const age = undefined;

// function App() {



//   function sum(a,b){
//     return a+b;
//   }



//   return (
//     <>
//     <div>

//     <Header />
//      <h1>Hello react </h1>
//      <h1>{sum(10,10)} </h1>
//      <h1>{age?age:"user not found"}</h1>
//      <Fruit />
//      <Login />
//      <Signin />
//      <ToDo />

//      <h1>{Username}</h1>
//     </div>
//     </>
//   )
// }

// const name="priyank  chaudhary";


// function Fruit(){


//   return(
//     <div>

//     <h2>{name}</h2>
//     <h4>Apple</h4>
//     </div>
//   )
// }

// export default App





// function in react .


// function App(){

//   function callFun(){
//     alert("hiiiii")
//   }

//   const ronadhona = ()=>{
//     alert("i  am crying")

//   }
//   return(
//     <div>

//     <button onClick={callFun}>click  me </button>
//     <button onClick={ronadhona}>Make me cry </button>
//     </div>

//   )
// }

// export default App;

// passing parameter 

// function App(){

//   function callFun(name){
//     alert(name + " hiiiii")
//   }

//   const ronadhona = (name)=>{
//     alert(name+" is crying")

//   }
//   return(
//     <div>

//     <button onClick={()=>callFun("priyank")}>click  me </button>
//     <button onClick={()=>ronadhona("priyank")}>Make me cry </button>
//     </div>

//   )
// }

// export default App;


// state in  react 


// import { useState} from "react";

// function App(){

//   const[fruit,setFruit]=useState("Apple");

//   const handleFruit=()=>{
//     setFruit("banana")
//   }
//   return(
//     <div>
//       <h1> State in  react</h1>
//       <h2>{fruit}</h2>
//       <button onClick={handleFruit}>change fruit name</button>
//     </div>
//   )
// }




// import { useState} from "react";

// function App(){

//   const[Count,counter]=useState(1);

//   const incCounter=()=>{
//     counter(Count+1);
//   }
// return(

//   <div>
//     <h1>counter {Count} </h1>
//     <button onClick={incCounter}>inc counter</button>
//   </div>

// )
// }



// // toggle in  react 
// import { useState } from "react";
// import Login from "./user";

// function App(){

//   const [display,setDisplay]= useState(true);

//   const toggle=()=>{
// setDisplay(!display);
//   }

//   return(
//     <div>
//       <h1> toggle in  react </h1>
//       {/* {
//         display? <h1>visible</h1>:null
//       } */}

//        {
//         display?< Login />:null
//       }
//       <button onClick={toggle}>Toggle</button>
//     </div>
//   )

// }



// multiple condition  in  react 

// import { useState } from "react";

// function App(){
//   const[count,setCount]= useState(0);

//   return(
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count+1)}> counter</button>

//     {
//       count==0? <h1>condition 0</h1>
//       :count==1? <h1>condition 1</h1>
//       :count==2? <h1>condition 2</h1>
//       :count==3? <h1>condition 3</h1>
//       :null
//     }

//     </div>
//   )
// }




// props in react



// function App(){

//   // let email ="@gmail.com"

//   let  userObject={
//     name:"priyank",
//     age:21,
//     email:"@gmail.com"
//   }
//   let  userObject2={
//     name:"Sachin",
//     age:20,
//     email:"Sachin@gmail.com"
//   }

//   let collegeName=['iet','du','upes','iit']

//   const [student,setStudent]=useState()
//   return(
//     <div>

//     <h1>props in react </h1>
//     {student && <Student name={student} />}
//     <button onClick={()=>setStudent("rahul")}>update student name</button>

//     {/* <User name="priyank" age={21} email={email} /> */}
//     <User user={userObject} />
//     <User user={userObject2} />
//     <College names={collegeName} />




//     </div>
//   )
// }


// default props 
// function App(){
//   return(
//     <div>
//       <h1>Props 2</h1>
//       <Nuser name="priyank" />
//       <Nuser  />
//     </div>
//   )
// }

// passing jsx to  props 


// function App(){
//   return(
//     <div >
//       <Wrapper color="orange">
//         <h1>hello priyank</h1>
//       </Wrapper>
//       <Wrapper>
//         <h1>hello admin</h1>
//       </Wrapper>
//     </div>
//   )
// }


// get  input field value

// function App() {
//     const [val, setVal] = useState("priyank")
//     return (
//         <div>
//             <h1>get input field value </h1>
//             <input type="text" value={val} onChange={(event) =>setVal(event.target.value)} placeholder="enter user name  " />
//             <h1>{val}</h1>
//             <button onClick={()=>setVal("")}>clear </button>
//         </div>
//     )
// }



// function App(){
//     const [age,setAge]=useState(0);

//     return(
//         <div>
//             <h2>input filed</h2>
//             <input type="number"  value={age} onChange={(event)=>setAge(event.target.value)} placeholder="enter age" />
//             <h1>{age}</h1>
//             <button onClick={()=>setAge("")}>clear</button>
//         </div>
//     )
// }


// controlled component 

// function App(){
//     const[name,setName]=useState("")
//     const[pass,setPass]=useState("")
//     const[email,setEmail]=useState("")
//     return(
//         <div>
//             <h1>controlled componenet</h1>
//             <form action="" method="get">
//                 <input type="text" value={name}  onChange={(event)=>setName(event.target.value)} placeholder="enter name " /> <br /><br />
//                 <input type="password" value={pass} onChange={(event)=>setPass(event.target.value)} placeholder="enter password " /> <br /><br />
//                 <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="enter email " /> <br /><br />
//                 <button>submit</button>
//                 <button onClick={()=>{setName('');setPass('');setEmail('')}}>Clear</button>
//                 <h3>{name}</h3>
//                 <h3>{pass}</h3>
//                 <h3>{email}</h3>
//             </form>

//         </div>
//     )
// }



// handle checkbox 

// function  App(){
//     const [skills,setSkills]=useState([]);

//     const handleSkills=(event)=>{

//         console.log(event.target.value,event.target.checked)


//         if(event.target.checked){
//             setSkills([...skills,event.target.value])
//         }
//         else{
//             setSkills([...skills.filter((item)=>item!=event.target.value)])
//         }
//     }
//     return(

//         <div>
//             <h3>select  skills</h3>
//             <input type="checkbox" onChange={handleSkills} id="php" value="php"/> 
//             <label htmlFor="php" >PHP</label>
//             <br />
//             <input type="checkbox"  onChange={handleSkills} id="php" value="java"/> 
//             <label htmlFor="java">java</label>
//             <br />
//             <input type="checkbox"  onChange={handleSkills} id="php" value="pyhton"/> 
//             <label htmlFor="pyhton">pyhton</label>
//             <br />
//             <input type="checkbox"  onChange={handleSkills} id="php" value="react"/> 
//             <label htmlFor="react">react</label>
//             <br />

//             <h1>{skills.toString()}</h1>

//         </div>
//     )
// }


// handle radio and dropdown

// function App(){
//     const [gender,setGender]=useState("male")

//     const[city,setCity]=useState("dehradun")

//     return(
//         <div>
//             <h1>radio button </h1>
//             <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" value={"male"} checked={gender=="male"} id="male"/>
//             <label htmlFor="male" >male</label>
//             <br />
//             <input type="radio"  onChange={(event)=>setGender(event.target.value)} name="gender" value={"female"} checked={gender=="female"} id="female"/>
//             <label htmlFor="female" >female</label>

//             <h2>Selected gender :{gender}</h2>
//             <br /><br />

//             <h4>select city </h4>
//             <select name="" id="" onChange={(event)=>setCity(event.target.value)} defaultValue={"dehradun"}>
//                 <option value="noida">noida</option>
//                 <option value="delhi">delhi</option>
//                 <option value="dehradun">dehradun</option>
//             </select>

//             <h4>selected city:{city}</h4>

//         </div>
//     )
// }



// looping in react


// function App(){
//     const user=[
//         {
//             name:"priyank",
//             age:21,
//             email:"priyank@test.com",
//             id:1
//         },
//         {
//             name:"sachin",
//             age:20,
//             email:"sachin@test.com",
//             id:2
//         },
//         {
//             name:"satvik",
//             age:22,
//             email:"satvik@test.com",
//             id:3
//         },
//         {
//             name:"Aadi",
//             age:21,
//             email:"aadi@test.com",
//             id:4
//         },
//     ]
//     return(
//         <div>
//             <h1>loop in jsx with map function</h1>

//             <table border='1'>
//                 <thead>
//                     <tr>
//                     <td>id</td>
//                     <td>name</td>
//                     <td>email</td>
//                     <td>age</td>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {
//                     user.map((userinfo)=>(
//                     <tr key={userinfo.id} >
//                     <td>{userinfo.id}</td>
//                     <td>{userinfo.name}</td>
//                     <td>{userinfo.email}</td>
//                     <td>{userinfo.age}</td>
//                     </tr>
//                         ))
//                     }
//                 </tbody>
//             </table>




// <h2>dummy data</h2>
//             <table border="1">
//                 <thead>
//                     <tr>

//                     <td>id</td>
//                     <td>name</td>
//                     <td>email</td>
//                     <td>age</td>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     <tr>
//                         <td>1</td>
//                         <td>priyank</td>
//                         <td>priyak@test.com</td>
//                         <td>21</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     )
// }


// reuse component in  loop


// function App(){
//     const user=[
//         {
//             name:"priyank",
//             age:21,
//             email:"priyank@test.com",
//             id:1
//         },
//         {
//             name:"sachin",
//             age:20,
//             email:"sachin@test.com",
//             id:2
//         },
//         {
//             name:"satvik",
//             age:22,
//             email:"satvik@test.com",
//             id:3
//         },
//         {
//             name:"Aadi",
//             age:21,
//             email:"aadi@test.com",
//             id:4
//         },
//     ]
//     return(
//         <div>
//             <h1>reuse component in  loop </h1>

//             {
//                 user.map((user)=>(
//                     <div  key={user.id}>
//                     <User2 userinfo={user} />
//                     </div>
//                 ))
//             }




//         </div>
//     )
// }


// digital clock in react  js 

// function App(){

//     const [color,setColor]=useState("red")
//     return(
//         <div>
//             <h1>digital clock using react</h1>

//             <select onChange={(event)=>setColor(event.target.value)} >
//                 <option value={"red"}>red</option>
//                 <option value={"blue"}>blue</option>
//                 <option value={"green"}>green </option>
//                 <option value={"orange"}>orange</option>
//             </select>
//             <Clock color={color}/>
//         </div>
//     )
// }

// nested looping


// function App() {
//     const collegeData = [
//         {
//             name: "upes",
//             city: 'dehradun',
//             website: 'www.upes.com',
//             student: [
//                 {
//                     name: 'priyank',
//                     age: 21,
//                     email: 'priyank@test.com'
//                 },
//                 {
//                     name: 'sachin',
//                     age: 20,
//                     email: 'sachin@test.com'
//                 },
//                 {
//                     name: 'satvik',
//                     age: 21,
//                     email: 'satvik@test.com'
//                 }
//             ]
//         },
//         {
//             name: "gla",
//             city: 'mathura',
//             website: 'www.gla.com',
//             student: [
//                 {
//                     name: 'manya',
//                     age: 20,
//                     email: 'manya@test.com'
//                 },
//                 {
//                     name: 'manjari',
//                     age: 21,
//                     email: 'manjari@test.com'
//                 },
//                 {
//                     name: 'sam',
//                     age: 21,
//                     email: 'sam@test.com'
//                 }
//             ]
//         },
//         {
//             name: "glbajaj",
//             city: 'noida',
//             website: 'www.glbajaj.com',
//             student: [
//                 {
//                     name: 'bhavna',
//                     age: 21,
//                     email: 'bhavna@test.com'
//                 },
//                 {
//                     name: 'palak',
//                     age: 21,
//                     email: 'palak@test.com'
//                 },
//                 {
//                     name: 'kanika',
//                     age: 21,
//                     email: 'kanika@test.com'
//                 }
//             ]
//         }
//     ]

//     return (
//         <div>
//             <h1>
//                 nested looping
//             </h1>
//             {
//                 collegeData.map((college, index) => (
//                     <div key={index}>

//                        <College2 college={college} />


//                     </div>
//                 ))
//             }
//         </div>
//     )
// }




// hooks in react .

// what  are hooks 
// popular hooks 
// useState,useEffect,useContext,useRef,useReducer, 





// useEffect  hooks . with useState


// function App() {
//     const [counter, setCounter] = useState(0);
//     const [data, setData] = useState(0);

//     // callOnce();

//     useEffect(()=>{
//         // callOnce()
//         counterFunc()
//     },[])


//     // printing twice because of react strict mode which  renders the component twice 


//     // useEffect(()=>{
//     //     // callOnce()
//     //     counterFunc()
//     // },[counter])
//     // useEffect(()=>{
//     //     // callOnce()
//     //     counterFunc()
//     // },[counter,data])


//     function callOnce() {
//         console.log("callonce called ",{counter})
//     }

//     function counterFunc(){
//         console.log("counter function ")
//     }



//     return (
//         <div>
//             <h1>useEffect hooks</h1>
//             <button onClick={() => setCounter(counter + 1)}>counter{counter}</button>
//             <button onClick={() => setData(data + 1)}>data{data}</button>
//         </div>
//     )
// }





// useEffect  with props 

// function App(){
//     const[count,setCount]=useState(0)
//     const[data,setData]=useState(0)
//     return(
//         <div>
//             <h1> useEffect  with props</h1>
//             <Counter count={count} data={data}/>
//             <button onClick={()=>{setCount(count+1)}}>counter</button>
//             <button onClick={()=>{setData(data+1)}}>counter</button>
//         </div>
//     )
// }




// component life cycle in  react js 

// 1 mounting phase 

// useEffect(()=>{
//     console.log("mounting phase")
// },[])


// // 2 updating phase
// useEffect(()=>{
//     console.log("updating phase")


// },[count])


// // 3 unmounting phase
// useEffect(()=>{
//     return()=>{
//         console.log("unmount phase ")
//     }
// },[])





// styling in  react using css
// inline 
// external
// css modules 
// styled component 
// css libraray  and framework

// inline

function App() {
    return (
        <div style={{display:'flex',flexWrap:'wrap',gap:'20px' ,margin:'20px'}}>
            <div style={{ border: '1px solid gray', display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', width: '200px', borderRadius: '10px' }}>
                <img style={{ width: '150px', height: '150px', borderRadius: '60%' }} src="https://s.yimg.com/fz/api/res/1.2/IUm8K93y2jWz27YWaeXoDQ--~C/YXBwaWQ9c3JjaGRkO2ZpPXN0cmltO2g9MjI4O3E9ODA7dz00MDA-/https://s.yimg.com/am/60d/eebcb09ccb0d5d9d79b6dc82b69440bd" alt="" />
                <h4>Name:Trump</h4>
                <p>Us president</p>
            </div>
            <div style={{ border: '1px solid gray', display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', width: '200px', borderRadius: '10px' }}>
                <img style={{ width: '150px', height: '150px', borderRadius: '60%' }} src="https://s.yimg.com/fz/api/res/1.2/IUm8K93y2jWz27YWaeXoDQ--~C/YXBwaWQ9c3JjaGRkO2ZpPXN0cmltO2g9MjI4O3E9ODA7dz00MDA-/https://s.yimg.com/am/60d/eebcb09ccb0d5d9d79b6dc82b69440bd" alt="" />
                <h4>Name:Trump</h4>
                <p>Us president</p>
            </div>
            
        </div>
    )
}


// inline 

export default App;
