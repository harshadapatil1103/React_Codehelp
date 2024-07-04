import { useState } from 'react'
import { AiTwotoneEye } from "react-icons/ai";
import { AiTwotoneEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';

function LoginForm({setIsLoggedIn}) {
    const [formData,setFormData]=useState({email:"" ,password:""});
    
    const [showPassword,setShowPassword]=useState(false);
    const navigate=useNavigate();
    function changeHandler(event){
        setFormData((prevData)=>({
            ...prevData,
            [event.target.name]:event.target.value

        }))

    }
    function submitHandler(event){
       event.preventDefault();
       setIsLoggedIn(true);
       toast.success("logged in");
       navigate('/dashboard');
    }
  return (
    <div>
        <form onSubmit={submitHandler}> 
            <label>
                <p>Email Address <sup>*</sup></p>

                <input 
                required
                type='email'
                value={FormData.email}
                onChange={changeHandler}
                placeholder='enter your email'
                name="email"
                />
           
            </label>
            <label>
                <p>Password<sup>*</sup></p>

                <input 
                required
                type={showPassword ? ("text") : ("password")}
                value={FormData.password}
                onChange={changeHandler}
                placeholder='enter your password'
                name='password'
                />

                <span onClick={()=>setShowPassword((prev)=> !prev)}>
                    {
                        showPassword ? (<AiTwotoneEyeInvisible/>):(<AiTwotoneEye/>)
                    }

                </span>

                <Link to="#">
                   <p>
                      forgot password
                   </p>
                </Link>
           
            </label>
            <button>
                Sign In
            </button>
        </form>
    </div>
  )
}

export default LoginForm;