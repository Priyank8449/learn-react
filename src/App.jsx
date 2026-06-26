

// cutsoft 
// weekday


// import Header from './Header'

import { Fragment, use, useActionState, useEffect, useReducer, useState, useTransition } from "react";
import { College, Student, Nuser, Wrapper, User2 } from "./user";
import User from "./user";
import Clock from "./clock";
import College2 from "./college";
import Counter, { User3 } from "./counter";
import './css/style.css'
import UserProfile from "./uprofile";

import { useRef } from "react";
import { InputField } from "./Header";
import { useFormStatus } from "react-dom";
import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";
import useToggle from "./useToggle";
import Navbar2 from "./navbar";
import { BrowserRouter } from "react-router";
import Detail from "./detail";
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

// function App() {
//     return (
//         <div style={{display:'flex',flexWrap:'wrap',gap:'20px' ,margin:'20px'}}>
//             <div style={{ border: '1px solid gray', display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', width: '200px', borderRadius: '10px' }}>
//                 <img style={{ width: '150px', height: '150px', borderRadius: '60%' }} src="https://s.yimg.com/fz/api/res/1.2/IUm8K93y2jWz27YWaeXoDQ--~C/YXBwaWQ9c3JjaGRkO2ZpPXN0cmltO2g9MjI4O3E9ODA7dz00MDA-/https://s.yimg.com/am/60d/eebcb09ccb0d5d9d79b6dc82b69440bd" alt="" />
//                 <h4>Name:Trump</h4>
//                 <p>Us president</p>
//             </div>
//             <div style={{ border: '1px solid gray', display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', width: '200px', borderRadius: '10px' }}>
//                 <img style={{ width: '150px', height: '150px', borderRadius: '60%' }} src="https://s.yimg.com/fz/api/res/1.2/IUm8K93y2jWz27YWaeXoDQ--~C/YXBwaWQ9c3JjaGRkO2ZpPXN0cmltO2g9MjI4O3E9ODA7dz00MDA-/https://s.yimg.com/am/60d/eebcb09ccb0d5d9d79b6dc82b69440bd" alt="" />
//                 <h4>Name:Trump</h4>
//                 <p>Us president</p>
//             </div>

//         </div>
//     )
// }






// dynamic and consditional style


// function App() {



//     const [card, setCard] = useState(
//         {
//             border: '1px solid gray',
//             display: 'flex',
//             flexDirection: "column",
//             justifyContent: 'center',
//             alignItems: 'center',
//             width: '200px',
//             borderRadius: '10px'
//         }
//     )

//     const [textColor, setTextColor] = useState('black')
//     const [grid, setGrid] = useState(true)

//     const updateTheme = (bgColor, textColor) => {
//         setCard({ ...card, backgroundColor: bgColor })
//         setTextColor(textColor)

//     }
//     return (

//         <>
//             <h1>Dynamic and consditional  styling</h1>
//             <button onClick={() => updateTheme('gray', 'green')}>gray theme</button>
//             <button onClick={() => updateTheme('white', 'black')}>default theme</button>
//             <button onClick={() => setGrid(!grid)}>grid</button>
//             <div style={{ display: grid ? 'flex' : 'block' }}>
//                 <div style={card}>
//                     <img style={{ width: '150px', height: '150px', borderRadius: '60%' }} src="https://s.yimg.com/fz/api/res/1.2/IUm8K93y2jWz27YWaeXoDQ--~C/YXBwaWQ9c3JjaGRkO2ZpPXN0cmltO2g9MjI4O3E9ODA7dz00MDA-/https://s.yimg.com/am/60d/eebcb09ccb0d5d9d79b6dc82b69440bd" alt="" />
//                     <h4>Name:Trump</h4>
//                     <p>Us president</p>
//                 </div>
//                 <div style={card}>
//                     <img style={{ width: '150px', height: '150px', borderRadius: '60%' }} src="https://s.yimg.com/fz/api/res/1.2/IUm8K93y2jWz27YWaeXoDQ--~C/YXBwaWQ9c3JjaGRkO2ZpPXN0cmltO2g9MjI4O3E9ODA7dz00MDA-/https://s.yimg.com/am/60d/eebcb09ccb0d5d9d79b6dc82b69440bd" alt="" />
//                     <h4>Name:Trump</h4>
//                     <p>Us president</p>
//                 </div>
//                 <div style={card}>
//                     <img style={{ width: '150px', height: '150px', borderRadius: '60%' }} src="https://s.yimg.com/fz/api/res/1.2/IUm8K93y2jWz27YWaeXoDQ--~C/YXBwaWQ9c3JjaGRkO2ZpPXN0cmltO2g9MjI4O3E9ODA7dz00MDA-/https://s.yimg.com/am/60d/eebcb09ccb0d5d9d79b6dc82b69440bd" alt="" />
//                     <h4>Name:Trump</h4>
//                     <p>Us president</p>
//                 </div>
//             </div>
//         </>
//     )
// }



// function App() {
//     return (
//         <>
//             <h1 className="heading">external  styling </h1>
//             <div className="container">

//                 <div className="div1">
//                     <div >
//                         <img className="img" src="https://tse4.mm.bing.net/th/id/OIP.h4ezlP6uFbMK36xksoCleQHaE8?pid=Api&h=220&P=0" alt="" />
//                     </div>
//                     <div className="text-wrap">
//                         <h4>
//                             Narendra Modi
//                         </h4>
//                         <p>Prime Minister Of India</p>
//                     </div>
//                 </div>
//                 <div className="div1">
//                     <div >
//                         <img className="img" src="https://tse4.mm.bing.net/th/id/OIP.h4ezlP6uFbMK36xksoCleQHaE8?pid=Api&h=220&P=0" alt="" />
//                     </div>
//                     <div className="text-wrap">
//                         <h4>
//                             Narendra Modi
//                         </h4>
//                         <p>Prime Minister Of India</p>
//                     </div>
//                 </div>
//                 <div className="div1">
//                     <div >
//                         <img className="img" src="https://tse4.mm.bing.net/th/id/OIP.h4ezlP6uFbMK36xksoCleQHaE8?pid=Api&h=220&P=0" alt="" />
//                     </div>
//                     <div className="text-wrap">
//                         <h4>
//                             Narendra Modi
//                         </h4>
//                         <p>Prime Minister Of India</p>
//                     </div>
//                 </div>
//                 <div className="div1">
//                     <div >
//                         <img className="img" src="https://tse4.mm.bing.net/th/id/OIP.h4ezlP6uFbMK36xksoCleQHaE8?pid=Api&h=220&P=0" alt="" />
//                     </div>
//                     <div className="text-wrap">
//                         <h4>
//                             Narendra Modi
//                         </h4>
//                         <p>Prime Minister Of India</p>
//                     </div>
//                 </div>
//                 <div className="div1">
//                     <div >
//                         <img className="img" src="https://tse4.mm.bing.net/th/id/OIP.h4ezlP6uFbMK36xksoCleQHaE8?pid=Api&h=220&P=0" alt="" />
//                     </div>
//                     <div className="text-wrap">
//                         <h4>
//                             Narendra Modi
//                         </h4>
//                         <p>Prime Minister Of India</p>
//                     </div>
//                 </div>
//                 <div className="div1">
//                     <div >
//                         <img className="img" src="https://tse4.mm.bing.net/th/id/OIP.h4ezlP6uFbMK36xksoCleQHaE8?pid=Api&h=220&P=0" alt="" />
//                     </div>
//                     <div className="text-wrap">
//                         <h4>
//                             Narendra Modi
//                         </h4>
//                         <p>Prime Minister Of India</p>
//                     </div>
//                 </div>
//                 <div className="div1">
//                     <div >
//                         <img className="img" src="https://tse4.mm.bing.net/th/id/OIP.h4ezlP6uFbMK36xksoCleQHaE8?pid=Api&h=220&P=0" alt="" />
//                     </div>
//                     <div className="text-wrap">
//                         <h4>
//                             Narendra Modi
//                         </h4>
//                         <p>Prime Minister Of India</p>
//                     </div>
//                 </div>
//                 <div className="div1">
//                     <div >
//                         <img className="img" src="https://tse4.mm.bing.net/th/id/OIP.h4ezlP6uFbMK36xksoCleQHaE8?pid=Api&h=220&P=0" alt="" />
//                     </div>
//                     <div className="text-wrap">
//                         <h4>
//                             Narendra Modi
//                         </h4>
//                         <p>Prime Minister Of India</p>
//                     </div>
//                 </div>
//                 <div className="div1">
//                     <div >
//                         <img className="img" src="https://tse4.mm.bing.net/th/id/OIP.h4ezlP6uFbMK36xksoCleQHaE8?pid=Api&h=220&P=0" alt="" />
//                     </div>
//                     <div className="text-wrap">
//                         <h4>
//                             Narendra Modi
//                         </h4>
//                         <p>Prime Minister Of India</p>
//                     </div>
//                 </div>
//                 <div className="div1">
//                     <div >
//                         <img className="img" src="https://tse4.mm.bing.net/th/id/OIP.h4ezlP6uFbMK36xksoCleQHaE8?pid=Api&h=220&P=0" alt="" />
//                     </div>
//                     <div className="text-wrap">
//                         <h4>
//                             Narendra Modi
//                         </h4>
//                         <p>Prime Minister Of India</p>
//                     </div>
//                 </div>
//                 <div className="div1">
//                     <div >
//                         <img className="img" src="https://tse4.mm.bing.net/th/id/OIP.h4ezlP6uFbMK36xksoCleQHaE8?pid=Api&h=220&P=0" alt="" />
//                     </div>
//                     <div className="text-wrap">
//                         <h4>
//                             Narendra Modi
//                         </h4>
//                         <p>Prime Minister Of India</p>
//                     </div>
//                 </div>
//                 <div className="div1">
//                     <div >
//                         <img className="img" src="https://tse4.mm.bing.net/th/id/OIP.h4ezlP6uFbMK36xksoCleQHaE8?pid=Api&h=220&P=0" alt="" />
//                     </div>
//                     <div className="text-wrap">
//                         <h4>
//                             Narendra Modi
//                         </h4>
//                         <p>Prime Minister Of India</p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }





// styling with  css  modules


// function App(){
//     return(
//         <>
//         <h1 className="heading">style with css module</h1>
//         <UserProfile />
//         </>
//     )
// }


// styled component 

// npm i styled-components use this command to install 

// import styled from "styled-components";


// function App(){
//     const Heading =styled.h1`
//     color:blue;

//     `
//     return(
//         <div>
//             <Heading> hi  i am a styled component </Heading>
//         </div>
//     )
// }



// Adding bootstarp  in react

// import  {Alert } from "react-bootstrap";
// import  {Button } from "react-bootstrap";


// function App(){
//     return(
//         <div>
//             <Button>click me </Button>
//             <Alert variant="warning">i  am alert</Alert>
//         </div>
//     )
// }



// // useRef hook  in  react js 
// import { useRef } from "react";


// function App(){

//      const inputRef=useRef(null);
//      const h1Ref=useRef(null);
//      const inputHandler=()=>{
//         inputRef.current.focus()
//         inputRef.current.placeholder="enter name"
//         inputRef.current.value='priyank'
//         inputRef.current.style.color='red'
//      }


//      const h1handler=()=>{
//         if(h1Ref.current.style.color!="green"){
//             h1Ref.current.style.color="green"

//         }
//         else{
//              h1Ref.current.style.color="blue"


//         }

//      }

//     return(
//         <div>
//             <h1> useRef hooks in react </h1>
//             <input  ref ={inputRef} type="text" placeholder="enter user name" />
//             <button onClick={inputHandler}>focus on  inout field</button>


//             <h1 ref={h1Ref}>hello i ama baba tillu   </h1>
//             <button onClick={h1handler}> click mmeeee</button>
//         </div>
//     )
// }






// function App() {
//   return (
//     <>
//       <style>
//         {`
//           @keyframes shine {
//             from {
//               transform: translateX(-400px) rotate(30deg);
//             }
//             to {
//               transform: translateX(500px) rotate(30deg);
//             }
//           }

//           @keyframes float {
//             0%,100% {
//               transform: translateY(0px);
//             }
//             50% {
//               transform: translateY(-10px);
//             }
//           }

//           .glass-card {
//             animation: float 4s ease-in-out infinite;
//           }

//           .shine {
//             animation: shine 4s linear infinite;
//           }
//         `}
//       </style>

//       <div
//         style={{
//           width: "100vw",
//           height: "100vh",
//           backgroundImage:
//             "url('https://png.pngtree.com/background/20230520/original/pngtree-3d-planets-in-space-wallpapers-for-mobile-picture-image_2670749.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           overflow: "hidden",
//         }}
//       >
//         <div
//           className="glass-card"
//           style={{
//             width: "360px",
//             height: "220px",
//             position: "relative",
//             overflow: "hidden",

//             /* Liquid Glass */
//             background:
//               "linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255,255,255,0.05))",

//             backdropFilter: "blur(10px) saturate(180%)",
//             WebkitBackdropFilter: "blur(10px) saturate(180%)",

//             border: "1px solid rgba(255,255,255,0.25)",
//             borderRadius: "32px",

//             boxShadow: `
//               0 20px 50px rgba(0,0,0,0.25),
//               inset 0 1px 1px rgba(255,255,255,0.8),
//               inset 0 -1px 1px rgba(255,255,255,0.15)
//             `,

//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           {/* Top Glow */}
//           <div
//             style={{
//               position: "absolute",
//               top: "-80px",
//               left: "-40px",
//               width: "250px",
//               height: "250px",
//               borderRadius: "50%",
//               background:
//                 "radial-gradient(circle, rgba(255,255,255,0.45), transparent 70%)",
//               pointerEvents: "none",
//             }}
//           />

//           {/* Bottom Glow */}
//           <div
//             style={{
//               position: "absolute",
//               bottom: "-100px",
//               right: "-60px",
//               width: "250px",
//               height: "250px",
//               borderRadius: "50%",
//               background:
//                 "radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%)",
//               pointerEvents: "none",
//             }}
//           />

//           {/* Moving Shine */}
//           <div
//             className="shine"
//             style={{
//               position: "absolute",
//               top: "-50%",
//               left: "-100%",
//               width: "80px",
//               height: "300%",
//               background:
//                 "linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent)",
//               pointerEvents: "none",
//             }}
//           />

//           <h1
//             style={{
//               color: "white",
//               fontSize: "2.5rem",
//               fontWeight: "700",
//               letterSpacing: "2px",
//               textShadow: "0 2px 20px rgba(255,255,255,0.4)",
//               zIndex: 2,
//             }}
//           >
//             PRIYANK
//           </h1>
//         </div>
//       </div>
//     </>
//   );
// }







// uncontrolled component

// function  App(){

//      const userRef=useRef(null);

//     const  handleForm=()=>{
//         event.preventDefault()
//         const user=document.querySelector('#user').value

//         console.log(user)
//     }


//     const handleFormRef=()=>{
//         event.preventDefault()

//         const user=userRef.current.value


//         console.log(user)

//     }
//     return(

//         <div>

//         <form action="" onSubmit={handleForm}>
//             <input  id='user'type="text" placeholder="enter user name" />
//             <br />
//             <input id='password' type="text" placeholder="enter user password" />

//             <button>submit</button>
//         </form>

//         <hr />
//   <form action="" onSubmit={handleFormRef}>
//             <input ref={userRef} type="text" placeholder="enter user name" />
//             <br />
//             <input id='password' type="text" placeholder="enter user password" />

//             <button>submit ref</button>
//         </form>



//         </div>
//     )
// }




//  passing function  in  component as props 
// function App(){

//     const displayName=(name)=>{
//         alert(name)
//     }
//     return(
//         <div>
//             <h1>passing function in  component as props </h1>
//             <User3 displayName={displayName} name="priyank"/>
//             <User3 displayName={displayName} name="aditi"/>
//             <User3 displayName={displayName} name="sam"/>
//         </div>
//     )
// }




// ForwardRef in react 

// function App(){

//     const inputRef=useRef(null);

//     const updateInput=()=>{
//         inputRef.current.value=1000;
//         inputRef.current.focus();
//         inputRef.current.style.color='blue';
//     }


//     return(
//         <>
//         <h1>forward ref</h1>
//         <InputField ref={inputRef} />
//         <button onClick={updateInput}>update input field</button>
//         </>
//     )
// }



// use Formstatus Hook in react js 

// function App() {


//     const handleSubmit = async () => {
//         await new Promise(res => setTimeout(res, 2000))
//         console.log("submit")
//     }

//     function CustomerForm() {
//         const { pending } = useFormStatus()
//         return (
//             <>
//                 <input type="text" placeholder="enter name" />

//                 <br />
//                 <br />
//                 <input type="text" placeholder="entee password" />
//                 <br />
//                 <br />
//                 <button disabled={pending}>{pending?'submitting..':'submit'}</button>
//             </>
//         )
//     }
//     return (
//         <>  
//             <h1>use Formstatus Hook in react js </h1>

//             <form action={handleSubmit}>
//                 <CustomerForm />
//             </form>
//         </>
//     )
// }



//useTransition hook in react js 

// function App(){
//     const[pending ,setPending]=useState(false);

//     const handleButton= async()=>{


//         setPending(true);
//         await new Promise(res=>setTimeout(res,2000));

//         setPending(false)

//     }
//     return(
//         <>
//         <h1>useTransition hook </h1>
//         <button disabled={pending} onClick={handleButton}>click</button>
//         </>
//     )
// }

// import "./App.css";

// function App(){
//   const [pending,startTransition]=useTransition()



//     const handleButton= async()=>{

//         startTransition(async()=>{
//             await new Promise(res=>setTimeout(res,2000));

//         })
//     }
//     return(
//         <>
//         <h1>useTransition hook </h1>
//         {
//             pending?
//             <img   className="spinner"
// src="https://static.vecteezy.com/system/resources/previews/014/475/046/original/download-icon-website-buffer-loader-a-spinning-circle-to-download-information-on-the-website-png.png" alt="" />
//             :null
//         }
//         <button disabled={pending} onClick={handleButton}>click</button>
//         </>
//     )
// }



// derived state in  react js 


// function App(){

//     const[users,setUsers]=useState([]);
//     const[user,setUser]=useState()

//     const  handleAddUser=()=>{
//         setUsers([...users,user])
//     }


//     const total=users.length
//     const  last=users[users.length-1]

//     const unique=[...new Set(users)].length

//     return(
//         <>
//         <h1>deriverd state in  react js</h1>

//         <h1>total  users:{total}</h1>
//         <h1>last  user:{last}</h1>
//         <h1>unique  total user:{unique}</h1>
//         <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="add new user"/>
//         <button onClick={handleAddUser}>add user</button>

//         {
//             users.map((item,index)=>(
//                 <h4 key={index}>{item}</h4>
//             ))
//         }
//         </>
//     )
// }




// lifting state up in react  js 


// function App(){
//         const[user,setUser]=useState()

//     return (
//         <>
//         <AddUser  setUser={setUser}/>
//         <DisplayUser user={user}/>
//         </>
//     )
// }



// updating object in  state 

// function App(){

//     const[data,setData]=useState(
//         {
//             name:"priyank",
//             address:{
//                 city:"hathras",
//                 country:"india"
//             }
//         }
//     )


//     const handleName=(val)=>{
// data.name=val

// setData({...data})
//     }
//     const handlecity=(city)=>{
// data.address.city=city

// setData({...data,address:{...data.address,city}})
//     }
//     return(
// <>
// <h1>updating object  in state</h1>
// <input type="text" onChange={(event)=>handleName(event.target.value)} placeholder="update name" />


// <br />
// <input type="text" onChange={(event)=>handlecity(event.target.value)} placeholder="update city" />

// <h2>name:{data.name}</h2>
// <h2>name:{data.address.city}</h2>
// <h2>name:{data.address.country}</h2>
// </>
//     )
// }



// updating Array in react js 

// function App(){
// const [data,setData]=useState([
//     'priyank','aditi','sam'
// ])


// const [dataDetails,setDataDetails]=useState(
// [
//     {
//         name:'priyank',
//         age:'21'
//     },
//     {
//         name:'aditi',
//         age:'20'
//     },
//     {
//         name:'sam',
//         age:'20'
//     }
// ]
// )




// const handleName=(name)=>{
//     data[data.length-1]=name
//     setData([...data])
// }


// const handleAge=(age)=>{
// dataDetails[dataDetails.length-1].age=age
// setDataDetails( [...data])
// }
//     return(
//         <>
//         <h1>updating array  in  react js</h1>

//         <input type="text" onChange={(event)=>handleName(event.target.value)} placeholder="enter last user name"/>

//         <h2>{name}</h2>
//         {
//             data.map((item,index)=>(
//                 <h3 key={index}>{item}</h3>
//             ))
//         }
// <hr />

// <input type="text" onChange={(event)=>handleAge(event.target.value)} placeholder="enter last user age"/>

// {
//     dataDetails.map((items,index)=>{
//         <h3 key={index}>{items.name},{items.age}</h3>
//     })
// }



//         </>
//     )
// }



// useActionState hooks in  react  js 


// function App(){

//     const  handleSubmit=async(previousData,formData)=>{

//         let name=formData.get('name')
//         let password=formData.get('password')

//             await new Promise(res=>setTimeout(res,2000))

//             if(name && password){
//                 return{message:'data submitted',name,password}
//             }else{
//                 return{error:'falied to  sunbmit '}
//             }


//     }

//     const[data,action,pending]=useActionState(handleSubmit,undefined)

//     return(
//         <>
//          <h1>useAction state hooks in  react js</h1>
// <form action={action}>

//          <input defaultValue={data?.name} type="text" placeholder="enter name" name= "name"/>
//          <br /><br />
//          <input defaultValue={data?.password} type="password" placeholder="enter password "name="password" />

// <button disabled={pending}>submit data</button>
// {
//     data?.error && < span style={{color:'red'}}>{data?.error}</span>
// }
// {
//     data?.message && <span style={{color:'green'}}>
//     {data?.message}
//     </span> 

// }
// </form>


// <h3> name:{data?.name}</h3>

// <h3>{data?.password}</h3>
//         </>
//     )
// }



// // useId hook in react js .
// import { useId } from "react"; 
// function  App (){


//     return(

//         <>
//         <User5 />
//         <User5 />
//         </>
//     )

// }

// // function  User5 (){
// //     const  name = useId()
// //     const  pass = useId()
// //     const  skills = useId()

// //     return(
// //         <>
// // <form action="">

// //     <label htmlFor={name}>name</label>
// //     <input id={name} type="text" placeholder="enter name " />

// //     <br />
// //     <br />
// //     <label htmlFor={pass}>password</label>
// //     <input id={pass} type="text" placeholder="enter passs " />
// // </form>

// // <br />
// //         </>
// //     )

// // }


// // by this method we have to  write different id for every  item 
// // so we will use it as prefix



// function  User5 (){
//     const  user = useId()

//     return(
//         <>
// <form action="">

//     <label htmlFor={user+"name"}>name</label>
//     <input id={user+"name"} type="text" placeholder="enter name " />

//     <br />
//     <br />
//     <label htmlFor={user+"pass"}>password</label>
//     <input id={user+"pass"} type="text" placeholder="enter passs " />
// </form>

// <br />
//         </>
//     )

// }




//  Fragment  in  react  js 

// <></> this is the short form of the fragment  


// function App(){
//     return (

//         <Fragment>
//             <h1>i  am inside fragment  help to
//                   reduce div that we use to contain multiple element together</h1>
//         </Fragment>

//     )
// }


// rules for react js hooks
// start with use 
//use hooks at top  level  of component

// do not call hooks inside conditions or loop
// dnch after a consditional  return statement
//dnch in event handlers
// dnch in  class component
// dnch inside try  catch finally 




// make custom  hooks


// function App(){

//     const[value,ToggleValue]=useToggle(true)
//     return(

//         <>
//         <button onClick={ToggleValue}>toggle heading</button>
//         <button  onClick={()=>ToggleValue(false)}>hide heading</button>
//         <button  onClick={()=>ToggleValue(true)}>show heading</button>


// {
//     value?         <h1> custom hoooks in react</h1> :null

// }
//         </>
//     )
// }


//context  API

// import College10 from "./College2"
// import Subject10 from "./subjext";
// import { SubjectContext } from "./context";
// function App() {
//     const[subject,setSubject]=useState("english")
//     return (
//         <>
//             <div style={{ backgroundColor: 'yellow', padding: '10px' }}>

//                 <SubjectContext.Provider value={subject}>

//                     <select value={subject} defaultValue={subject}  onChange={(event)=>setSubject(event.target.value)} name="" id="">
//                         <option value="">Select subject</option>
//                         <option value="math">math</option>
//                         <option value="english">eng</option>
//                         <option value="hindi">hindi</option>
//                     </select>
//                     <h1>context api</h1>

//                     <button onClick={()=>setSubject('')}>clear sub</button>
//                     <College10 />


//                 </SubjectContext.Provider>
//             </div>
//         </>
//     )
// }

import { Routes, Route, Link } from "react-router";

// // // react router 7 setup 


// function App(){
//     return(
//         <>
//         <BrowserRouter>
// <Navbar2 />

//         <Routes>
//             <Route path="/" element={<h1>home</h1>} />
//             <Route path="/about" element={<h1>about</h1>} />
//             <Route path="/contact" element={<h1>contact</h1>} />

//         </Routes>
//         </BrowserRouter>
//         </>
//     )
// }




// header with  react  router

// function App(){
//     return(
//         <>

//         <BrowserRouter>

//         <Navbar2 />

//          <Routes>
//              <Route path="/" element={<h1>home</h1>} />
//             <Route path="/about" element={<h1>about</h1>} />
//             <Route path="/login" element={<h1>login</h1>} />

//          </Routes>

//         </BrowserRouter>
//         </>
//     )
// }

// 404 page and redirection

import PageNotFound from './pagenotfound'
import CollegeForNav from "./collegeforNav";
import Department from "./department";
import UserList from "./userList";

// function App(){
//     return(
//         <>

//         <BrowserRouter>

//         <Navbar2 />

//          <Routes>
//              <Route path="/" element={<h1>home</h1>} />
//             <Route path="/about" element={<h1>about</h1>} />
//             <Route path="/login" element={<h1>login</h1>} /> 


//             <Route path="/*" element={<PageNotFound />} />
//             <Route path="/*" element={<Navigate to="/" />} />

//          </Routes>

//         </BrowserRouter>
//         </>
//     )
// }


// nested navigation 

// import CollegeForNav from "./collegeforNav";
// function App(){
//     return(
//         <>

//         <BrowserRouter>

//         <Navbar2 />

//          <Routes>
//              <Route path="/" element={<h1>home</h1>} />
//             <Route path="/about" element={<h1>about</h1>} />
//             <Route path="/login" element={<h1>login</h1>} />
//             <Route path="/college" element={<CollegeForNav />} >
//             <Route path="department" element={<Department />}/>
//             <Route path="detail" element={<Detail />}/>
//             </Route>


//             <Route path="/*" element={<PageNotFound />} />

//          </Routes>

//         </BrowserRouter>
//         </>
//     )
// }



// layout routes and index routes

// function App() {
//     return (
//         <>

//             <BrowserRouter>

//                 {/* <Navbar2 /> */}

//                 <Routes>

//                     <Route element={<Navbar2 />}>
//                         <Route path="/" element={<h1>home</h1>} />
//                         <Route path="/about" element={<h1>about</h1>} />
//                         <Route path="/login" element={<h1>login</h1>} />

//                     </Route>

//                     <Route path="/" element={<h1>home</h1>} />
//                     <Route path="/about" element={<h1>about</h1>} />
//                     <Route path="/login" element={<h1>login</h1>} />
//                     <Route path="/college" element={<CollegeForNav />} >
//                         <Route index element={<Department />} />
//                         <Route path="detail" element={<Detail />} />
//                     </Route>


//                     <Route path="/*" element={<PageNotFound />} />

//                 </Routes>

//             </BrowserRouter>
//         </>
//     )
// }





// route  prefix 

// function App() {
//     return (
//         <>

//             <BrowserRouter>

//                 {/* <Navbar2 /> */}

//                 <Routes>

//                     <Route element={<Navbar2 />}>
//                         <Route path="/" element={<h1>home</h1>} />

//                         <Route path="in">
//                             <Route path="/in/user">

//                                 <Route path="/in/user/about" element={<h1>about</h1>} />
//                                 <Route path="/in/user/login" element={<h1>login</h1>} />

//                             </Route>
//                         </Route>
//                     </Route>


//                     <Route path="/college" element={<CollegeForNav />} >
//                         <Route index element={<Department />} />
//                         <Route path="detail" element={<Detail />} />
//                     </Route>


//                     <Route path="/*" element={<PageNotFound />} />

//                 </Routes>

//             </BrowserRouter>
//         </>
//     )
// }




import { UserDetail } from "./userDetail";
import js from "@eslint/js";
// // dynamic route 
// function App() {
//     return (
//         <>

//             <BrowserRouter>

//                 {/* <Navbar2 /> */}

//                 <Routes>

//                     <Route element={<Navbar2 />}>
//                         <Route path="/" element={<h1>home</h1>} />
//                         <Route path="/users" element={<UserList /> } />
//                         <Route path="/users/:id" element={<UserDetail /> } />

//                         <Route path="in">
//                             <Route path="/in/user">

//                                 <Route path="/in/user/about" element={<h1>about</h1>} />
//                                 <Route path="/in/user/login" element={<h1>login</h1>} />

//                             </Route>
//                         </Route>
//                     </Route>


//                     <Route path="/college" element={<CollegeForNav />} >
//                         <Route index element={<Department />} />
//                         <Route path="detail" element={<Detail />} />
//                     </Route>


//                     <Route path="/*" element={<PageNotFound />} />

//                 </Routes>

//             </BrowserRouter>
//         </>
//     )
// }


// react  router optional  segment 

// function App() {
//     return (
//         <>

//             <BrowserRouter>

//                 {/* <Navbar2 /> */}

//                 <Routes>

//                     <Route element={<Navbar2 />}>
//                         <Route path="/" element={<h1>home</h1>} />
//                         <Route path="/users/list?" element={<UserList /> } />


//                         <Route path="/users/:id/:name?" element={<UserDetail /> } />

//                         <Route path="in">
//                             <Route path="/in/user">

//                                 <Route path="/in/user/about" element={<h1>about</h1>} />
//                                 <Route path="/in/user/login" element={<h1>login</h1>} />

//                             </Route>
//                         </Route>
//                     </Route>


//                     <Route path="/college" element={<CollegeForNav />} >
//                         <Route index element={<Department />} />
//                         <Route path="detail" element={<Detail />} />
//                     </Route>


//                     <Route path="/*" element={<PageNotFound />} />

//                 </Routes>

//             </BrowserRouter>
//         </>
//     )
// }





// react router navlink and active class  



// function App() {
//     return (
//         <>

//             <BrowserRouter>

//                 {/* <Navbar2 /> */}

//                 <Routes>

//                     <Route element={<Navbar2 />}>
//                         <Route path="/" element={<h1>home</h1>} />
//                         <Route path="/users/list?" element={<UserList /> } />


//                         <Route path="/users/:id/:name?" element={<UserDetail /> } />

//                         <Route path="in">
//                             <Route path="/in/user">

//                                 <Route path="/in/user/about" element={<h1>about</h1>} />
//                                 <Route path="/in/user/login" element={<h1>login</h1>} />

//                             </Route>
//                         </Route>
//                     </Route>


//                     <Route path="/college" element={<CollegeForNav />} >
//                         <Route index element={<Department />} />
//                         <Route path="detail" element={<Detail />} />
//                     </Route>


//                     <Route path="/*" element={<PageNotFound />} />

//                 </Routes>

//             </BrowserRouter>
//         </>
//     )
// }



// installing tailwind css in react

// import React from 'react'

// const App = () => {
//   return (
//     <div>
//         <h1 class="text-3xl border-4 m-4 rounded-4xl p-4 underline bg-amber-600 font-bold ">
//     Hello world!
//   </h1>
//     </div>
//   )
// }






// Api   

// fetch  data from api with get method 

// import React from 'react'

// const App = () => {



//     const [usersData,setUsersData]=useState([

//     ])
//     useEffect(() => {
//         getUsersData()
//     }, [])

//     async function getUsersData() {
//         const url = "https://dummyjson.com/users"
//         let response = await fetch(url)
//         response = await response.json()

//         setUsersData(response.users)
//     }


//     return (
//         <div>

//             <h2>fetch data from api </h2>


// <ul className="flex justify-evenly text-3xl border-2 font-extrabold p-2 m-4">
//     <li>FirstName </li>
//     <li>LastName </li>
//     <li>Age</li>
// </ul>
//             {
//                 usersData && usersData.map((user)=>(

// <ul className="flex justify-evenly border-2 m-4 p-2">
//     <li >{user.firstName}</li>
//     <li>{user.lastName}</li>
//     <li>{user.age}</li>
// </ul>
//                 ))
//             }
//         </div>
//     )
// }



// install  json server and make api 

// integrate json  server api  and loader



// import React from 'react'

// const App = () => {


//     const [userData,setUsersData]=useState([])

//     const[loading,setloading]=useState(false)
//     useEffect(()=>{
//         setloading(true)
//         getUserData()
//     },[])

//     const getUserData= async ()=>{
//         const  url="http://localhost:3000/user"
// let  response=await fetch(url)
//         response=await response.json()

//         console.log(response)
//         setUsersData(response)
//         setloading(false)
//     }
//   return (
//     <div>
//         <h1>integrate json server api and loader</h1>

//         {

//             !loading?
//             userData.map((user)=>(
//                 <div key={user.id}>

//             <h3 >{user.name}</h3>
//                 </div>
//             ))
//             :<h1>Data loading</h1>
//         }

//     </div>
//   )
// }










// route foruser list  and add  user ui 



// import React from 'react'
// import { NavLink } from "react-router";
// import UserAdd from "./useAdd";
// import UserListforapi from "./userListforapi";

// const App = () => {

//   return (
//     <div>

//         <ul className="flex justify-center space-x-5">
//             <li className="">
//                 <NavLink to="/">User list </NavLink>
//             </li>
//             <li className="">
//                 <NavLink to="/add">Add user</NavLink>
//             </li>
//         </ul>

//            <h1>make route and pages for add user list ui </h1>


//            <Routes>

//             <Route  path="/" element={<UserListforapi />}/>
//             <Route  path="/add" element={<UserAdd />}/>
//            </Routes>
//     </div>

//   )
// }




// integrate post method api 

// import React from 'react'
// import { NavLink } from "react-router";
// import UserAdd from "./useAdd";
// import UserListforapi from "./userListforapi";

// const App = () => {

//   return (
//     <div>

//         <ul className="flex justify-center space-x-5">
//             <li className="">
//                 <NavLink to="/">User list </NavLink>
//             </li>
//             <li className="">
//                 <NavLink to="/add">Add user</NavLink>
//             </li>
//         </ul>

//            <h1>make route and pages for add user list ui </h1>


//            <Routes>

//             <Route  path="/" element={<UserListforapi />}/>
//             <Route  path="/add" element={<UserAdd />}/>
//            </Routes>
//     </div>

//   )
// }




// integrate api  for delete metod 


// import React from 'react'
// import { NavLink } from "react-router";
// import UserAdd from "./useAdd";
// import UserListforapi from "./userListforapi";

// const App = () => {

//   return (
//     <div>

//         <ul className="flex justify-center space-x-5">
//             <li className="">
//                 <NavLink to="/">User list </NavLink>
//             </li>
//             <li className="">
//                 <NavLink to="/add">Add user</NavLink>
//             </li>
//         </ul>

//            <h1>make route and pages for add user list ui </h1>


//            <Routes>

//             <Route  path="/" element={<UserListforapi />}/>
//             <Route  path="/add" element={<UserAdd />}/>
//            </Routes>
//     </div>

//   )
// }



// edit user detail  page 
//update data with  put api method

// import React from 'react'
// import { NavLink } from "react-router";
// import UserAdd from "./useAdd";
// import UserEdit from "./editUser";
// import UserListforapi from "./userListforapi";

// const App = () => {

//   return (
//     <div>

//         <ul className="flex justify-center space-x-5">
//             <li className="">
//                 <NavLink to="/">User list </NavLink>
//             </li>
//             <li className="">
//                 <NavLink to="/add">Add user</NavLink>
//             </li>
//         </ul>

//            <h1>make route and pages for add user list ui </h1>


//            <Routes>

//             <Route  path="/" element={<UserListforapi />}/>
//             <Route  path="/add" element={<UserAdd />}/>
//             <Route  path="/edit/:id" element={<UserEdit />}/>
//            </Routes>
//     </div>

//   )
// }



// 


// simple validation in  react js

// import React from 'react'
// import "./App.css"

// const App = () => {

//     const [name,setName]=useState("")
//     const[nameErr,setNameErr]=useState()
//     const [pass,setPass]=useState("")
//     const[passErr,setPassErr]=useState()

//     const handleName=(event)=>{

//         // console.log(event.target.value);
//         if(event.target.value.length>7){
//             setNameErr("enter valid user name 7  char  allowed")
//         }
//         else{
//             setNameErr()
//         }

//     }

//     const  handlePass=()=>{
//  let regex=/^[A-Z0-9]+$/i
//         // console.log(event.target.value);
//         if(regex.test(event.target.value)){
//             setPassErr()
//         }
//         else{
//             setPassErr("pls ENTER valid pass only alphabet  and number allowed")
//         }

//     }
//   return (
//     <div className="  flex flex-col m-2">
//         <input className={nameErr?'error':' m-2 border-2 w-[200px]'
//         } type="text" onChange={handleName} placeholder="enter name" />
//         <span>{nameErr && nameErr}  </span>
//         <input onChange={handlePass} className="border-2 m-2 w-[200px]" type="text" placeholder="enter pass" />
//         <span>{passErr && passErr}  </span>

//         <button  disabled={passErr || nameErr} className="border-2 m-2 w-[200px]"> login </button>
//     </div>
//   )
// }

// export default App




// validation with useAction state in react 

// import React from 'react'

// const App = () => {

//     const handleLogin=(prevData,formData)=>{

//         let name=formData.get('name')
//         let pass=formData.get('pass')

//         let regex=/^[A-Z0-9]+$/i;

//         if(!name || name.length>5){
// return {error:"name sholud not contain  more than 5 char",name,pass}
//         }else if(!regex.test(pass)){
// return {error:"password can  contain numbers and alpha",name,pass}

//         }else{
// return{message:"login done",name,pass}
//         }

//     }

//     const[data,action,pending]=useActionState(handleLogin)

//     return (
//         <div>
//             <h1>validation with useActionState </h1>

// {
//     data?.message && <span className="text-green-400">{data?.message}</span>
// }
// {
// data?.error && <span className="text-red-600">{data?.error}</span>
// }
//             <form className="m-4 outline-2" action={action}>
//                 <input className="outline-1" defaultValue={data?.name} type="text" name="name" placeholder="enter user name" />
//                 <br /> <br />
//                 <input className="outline-1" defaultValue={data?.pass} type="text" name="pass" placeholder="enter password" />
//                 <br /> <br />
//                 <button className=" rounded-2 m-2 border-2 bg-amber-200" >login</button>
//             </form>
//         </div>
//     )
// }



// useReducer hook 




// import React from 'react'



//     const emptyData={
//         name:"",
//         pass:"",
//         email:"",
//         city:"",
//         add:"",

//     }

//     const reducer=(data,action)=>{
//         console.log(data,action)
//         return{...data,[action.type]:action.val}

//     }

// const App = () => {



//     const [state,dispatch]=useReducer(reducer,emptyData)

//     console.log(state)
//   return (
//     <div>
//         <h1>use reducer</h1>
//         <input type="text" onChange={()=>dispatch({val:event.target.value,type:"name"})} placeholder="enter name"/><br /><br />
//         <input type="text" onChange={()=>dispatch({val:event.target.value,type:"pass"})} placeholder="enter pass"/><br /><br />
//         <input type="text" onChange={()=>dispatch({val:event.target.value,type:"email"})} placeholder="enter email"/><br /><br />
//         <input type="text" onChange={()=>dispatch({val:event.target.value,type:"city"})} placeholder="enter city"/><br /><br />
//         <input type="text" onChange={()=>dispatch({val:event.target.value,type:"add"})} placeholder="enter add"/><br /><br />

//         <button> add details</button>



//         <ul>
//             <li>name:{state.name}</li>
//             <li>pass:{state.pass}</li>
//             <li>email:{state.email}</li>
//             <li>city:{state.city}</li>
//             <li>add:{state.add}</li>
//         </ul>
//     </div>
//   )
// }

export default App