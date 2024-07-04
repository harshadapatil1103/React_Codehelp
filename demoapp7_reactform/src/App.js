
import './App.css';
import {useState} from 'react'
function App() {
// const[firstName,setFirstName]=useState("");
// const[lastName,setLastName]=useState("");
// function changeFirstHandler(event){
//     //console.log(event.target);
// //  console.log(event.target.value);

// setFirstName(firstName);
//   }
// function changeLastHandler(event){
//     //console.log(event.target);
// //  console.log(event.target.value);
// setLastName(lastName);
//   }


const [formData,setFormData]=useState({firstName:"",lastName:"",email:"",comments:"",isVisible:true,mode:""});

function changeHandler(event){
const {name,value,checked,type}=event.target
  setFormData(prevFormData=>{
    return{
...prevFormData,
// [event.target.name]: event.target.value
[name]: type==="checkbox" ? checked :value
  }
  });
}
  return (
    <div>
  <form>
    <input
    type="text"
    placeholder='first name'
    onChange={changeHandler}
    name="firstName"
    value={formData.firstName}/>
    
   <br></br>
    <input
    type="text"
    placeholder='last name'
    onChange={changeHandler}
    name='lastName'
    value={formData.lastName}/>

<br></br>
    <input
    type="email"
    placeholder='email'
    onChange={changeHandler}
    name='email'
    value={formData.email}/>

    <br></br>
    <textarea
    placeholder='enter your comments here'
    onChange={changeHandler}
    name='comments'
    value={formData.comments}/>
     
     <br></br>
     <input
     type='checkbox'
     onChange={changeHandler}
     name="isVisible"
     id="isVisible"
     checked={formData.isVisible}/> 
     {/* insted of value checked use in checkbox */}
     <label htmlFor='isVisible'>Am i visible</label>

{/* to group together */}
<fieldset> 
  {/* to give the caption to fieldset */}
  <legend>Mode:  </legend>

  <input
     type='radio'
     onChange={changeHandler}
     name='mode'
     value="Online-mode"
     id="Online-mode"
     checked={formData.mode==='Online-Mode'}
     />
     <label htmlFor="Online-mode">Online Mode</label>

     <input
     type='radio'
     onChange={changeHandler}
     name='mode'
     value="Offline-mode"
     id="Offline-mode"
     checked={formData==='Offline-Mode'}
     />
     <label htmlFor="Offline-mode">Offline Mode</label>

</fieldset>
   
  </form>
    </div>
  );
}

export default App;
