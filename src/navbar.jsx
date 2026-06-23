import {  Outlet } from "react-router";
import { NavLink } from "react-router";

import './header.css'
export default function Navbar2(){
    return(
        <div>

        <div className="header">
        <div>
            <NavLink to={"/"} className="link"><h2>Logo</h2></NavLink>
        </div>

        <div>
            <ul>
                <li>
                 <NavLink to="/" className="link">Home</NavLink>

                </li>
                <li>
                 <NavLink to="/in/user/login" className="link">login</NavLink>

                </li>
                <li>
                 <NavLink to="/in/user/about" className="link">about</NavLink>

                </li>
                <li>
                 <NavLink to="/college" className="link">college</NavLink>

                </li>
                <li>
                 <NavLink to="/users" className="link">users</NavLink>

                </li>
                <li>
                 <NavLink to="/users/list" className="link">list</NavLink>

                </li>
            </ul>
        </div>
        </div>
        <Outlet />
        </div>
    )
}

// NavLink to="/"> home</NavLink>
//         <NavLink to="/about"> about</NavLink>
//         <NavLink to="contact"> contact</NavLink>