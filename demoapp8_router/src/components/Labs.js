import React from 'react'
import { useNavigate } from 'react-router-dom'
function Labs() {
    const navigate=useNavigate();
    function clickHandler(){
navigate('/about');
    } 
    function backHandler(){
        navigate(-1);
            }
  return (
    <>
    <div>Labs page</div>
    <button onClick={clickHandler}>move to about</button>
    <button onClick={backHandler}>Go back</button>
    </>
  )
}

export default Labs