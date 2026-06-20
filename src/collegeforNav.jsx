import { NavLink, Outlet } from "react-router";

export default function  CollegeForNav(){
    return (

        <div className="college" style={{textAlign:'center'}}>


        <h1>college page</h1>

        <NavLink className='link' to="/">Student</NavLink>
        <NavLink  className='link' to="department">Department</NavLink>
        <NavLink  className='link' to="detail">college detail</NavLink>

        <Outlet />
        </div>
    )
}