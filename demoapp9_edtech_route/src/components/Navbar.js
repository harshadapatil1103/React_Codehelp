import React from 'react'
import logo from "../assets/Logo.svg";
import { Link } from 'react-router-dom';
import {toast} from 'react-hot-toast';
function Navbar(props) {

let isLoggedIn=props.isLoggedIn;
let setIsLoggedIn=props.setIsLoggedIn;
  return (
    <div className="flex justify-evenly">
        <Link to="/">
           <img scr={logo} alt='logo' width={160} height={32} loading="lazy"/>
        </Link>

        <nav>
           <ul className='flex gap-4'>
             <li>
             <Link to="/">Home</Link>
             </li>
             <li>
             <Link to="/">about</Link>
             </li>
             <li>
             <Link to="/">contact</Link>
             </li>
           </ul>
        </nav>

        <div className='flex gap-3 ml-5 mr-3'>
            {
               !isLoggedIn && 
              <Link to="/login">
                <button>Login</button>
              </Link>  
            }
              {
                !isLoggedIn && 
              <Link to="/signup">
                <button>Signup</button>
              </Link>  
            }
              {
                isLoggedIn && 
              <Link to="/logout">
                <button onClick={()=>{
                    setIsLoggedIn(false);
                    toast.success("logged out!!");
                }}>Logout</button>
              </Link>  
            }
              {
                isLoggedIn && 
              <Link to="/dashboard">
                <button>Dashboard</button>
              </Link>  
            }
        </div>
    </div>
  )
}

export default Navbar