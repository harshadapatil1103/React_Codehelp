
import {FcLike} from 'react-icons/fc'
import {toast}  from 'react-toastify'
import { FcLikePlaceholder } from "react-icons/fc";
import { useState } from 'react';
 function Card(props) {
  let course=props.course;
  let likedCourses=props.likedCourses;
  let setLikedCourses=props.setLikedCourses;
 
  const [readmore,setReadmore]=useState(false);
  let desc = readmore ? course.description : `${course.description.substring(0,200)}....`
         function readHandler(){
          setReadmore(!readmore);
         }
    function clickHandler(){
       if(likedCourses.includes(course.id)){
        setLikedCourses((prev)=>prev.filter((cid)=>(cid!== course.id)));
        toast.warning("like removed");
       
       }
       else{
        if(likedCourses.length===0){
          setLikedCourses([course.id]);
        }
        else{
          setLikedCourses((prev)=>[...prev,course.id]);
        }
       
        toast.success("liked successfully");
       }
      
       
      
    }
  return (
    <div className="w-[300px] bg-blue-950 rounded-md overflow-hidden">
      <div className='relative'>
        <img alt="" src={course.image.url}></img>
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
            <button onClick={clickHandler}>
              {
                !likedCourses.includes(course.id) ? (<FcLikePlaceholder fontSize="1.75rem" />) : (<FcLike fontSize="1.75rem"/>) 
              }
                
            </button>
        </div>
    </div>  
    <div>
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
        <p className='mt-2 text-white'>{desc}<span onClick={readHandler}>
          {
            readmore ? (`showless`) : ('read more')
          }
          </span></p>
    </div>
    </div>
  )
}
export default Card;