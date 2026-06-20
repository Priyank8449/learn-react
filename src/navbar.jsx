import { Link } from "react-router";

import './header.css'
export default function Navbar2(){
    return(
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
                 <Link to="/login" className="link">login</Link>

                </li>
                <li>
                 <Link to="/about" className="link">about</Link>

                </li>
                <li>
                 <Link to="/college" className="link">college</Link>

                </li>
            </ul>
        </div>
        </div>
    )
}

// Link to="/"> home</Link>
//         <Link to="/about"> about</Link>
//         <Link to="contact"> contact</Link>