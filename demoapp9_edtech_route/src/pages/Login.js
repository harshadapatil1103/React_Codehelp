import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/login.png'
function Login({setIsLoggedIn}) {
  return (
    <div>
        <Template
        title="welcome back"
        desc1="build skills for today"
        desc2="education to future proof your career"
        image={loginImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
        />
    </div>
  )
}

export default Login;