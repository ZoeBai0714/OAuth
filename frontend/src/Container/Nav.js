import React from 'react';
import {Link} from 'react-router-dom';
import "../assets/homepage.css";
const NavBar = () =>{
        return(
           <div>
               <nav>
                    <ul>
                        <li><Link to = "/home">Homepage</Link></li>
                        <li><Link to = "/auth/login">Login</Link></li>
                        <li><Link to = "/auth/logout">Logout</Link></li>
                    </ul>
               </nav>
           </div>
        )
    
    
}

export default NavBar;