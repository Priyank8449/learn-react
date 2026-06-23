import { Link, Outlet } from "react-router";

import './header.css'
export default function Navbar2(){
    return(
        <div>

        <div className="header">
        <div>
            <Link to={"/"} className="link"><h2>Logo</h2></Link>
        </div>

        <div>
            <ul>
                <li>
                 <Link to="/" className="link">Home</Link>

                </li>
                <li>
                 <Link to="/in/user/login" className="link">login</Link>

                </li>
                <li>
                 <Link to="/in/user/about" className="link">about</Link>

                </li>
                <li>
                 <Link to="/college" className="link">college</Link>

                </li>
                <li>
                 <Link to="/users" className="link">users</Link>

                </li>
            </ul>
        </div>
        </div>
        <Outlet />
        </div>
    )
}

// Link to="/"> home</Link>
//         <Link to="/about"> about</Link>
//         <Link to="contact"> contact</Link>