import React from 'react'
import signupImg from '../assets/signup.png'
import Template from '../components/Template';
function Signup({setIsLoggedIn}) {
  return (
    <div>
         <div>
        <Template
        title="welcome back"
        desc1="build skills for today"
        desc2="education to future proof your career"
        image={signupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
        />
    </div>
    </div>
  )
}

export default Signup;