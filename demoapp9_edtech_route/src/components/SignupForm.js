import React from 'react'
import { AiTwotoneEye } from "react-icons/ai";
import { AiTwotoneEyeInvisible } from "react-icons/ai";
import { useState } from 'react';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
function SignupForm({setIsLoggedIn}) {

    const [formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    const navigate=useNavigate();
    const [showPassword,setShowPassword]=useState(false);
    function changeHandler(event){
          setFormData((prevData)=>({
           ...prevData,
           [event.target.name]:event.target.value
          }))
}
   function submitHandler(event){
        event.preventDefault();
        if(formData.password!==formData.confirmPassword){
            toast.error("wrongg password");
            return;

        }
        setIsLoggedIn(true);
        const accountData={...formData};
        toast.success("account created successfully");
        console.log(accountData);
        navigate('/dashboard');

   }

  return (
    <div>
        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>
    
    <form onSubmit={submitHandler}>
        <div>
        <label>
            <p>First name <sup>*</sup></p>
            <input
            required 
            type='text'
            name='firstName'
            onChange={changeHandler}
            placeholder='enter first name'
            value={FormData.firstName}
            />
            
        </label>
        <label>
            <p>last name <sup>*</sup></p>
            <input
            required 
            type='text'
            name='lastName'
            onChange={changeHandler}
            placeholder='enter last name'
            value={FormData.lastName}
            />
            
        </label>
        </div>

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

        <div>
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

               
           
            </label>
            <label>
                <p>Confirm Password<sup>*</sup></p>

                <input 
                required
                type={showPassword ? ("text") : ("password")}
                value={FormData.confirmPassword}
                onChange={changeHandler}
                placeholder='enter your password'
                name='confirmPassword'
                />

                <span onClick={()=>setShowPassword((prev)=> !prev)}>
                    {
                        showPassword ? (<AiTwotoneEyeInvisible/>):(<AiTwotoneEye/>)
                    }

                </span>

               
           
            </label>
        </div>
            <button>Create Account</button>
       

    </form>
    </div>
  )
}

export default SignupForm;