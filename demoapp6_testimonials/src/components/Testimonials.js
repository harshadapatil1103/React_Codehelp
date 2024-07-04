import React, { useState } from 'react'
import Card from './Card'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
function Testimonials(props) {

    
let [reviewid,setReviewid]=useState(1);
let reviews=props.reviews;
let review=reviews[reviewid-1];

function leftShiftHandler(){
if(reviewid===1){
    setReviewid(reviews.length);
}
else{
    setReviewid(reviewid-1);
}


}
function rightShiftHandler(){
    if(reviewid===reviews.length){
        setReviewid(1);
    }
    else{
        setReviewid(reviewid+1);
    }
    
    
}
function surpriseHandler(){
  let randomIndex=Math.floor(Math.random()*reviews.length);
  setReviewid(randomIndex);
}
  return (
    <div>
        <Card review={review}></Card>
        <div>
            <button onClick={leftShiftHandler}><FiChevronLeft/></button>
            <button onClick={rightShiftHandler}><FiChevronRight/></button>
        </div>
        <div>
            <button onClick={surpriseHandler}>Surprise me</button>
        </div>
      
    </div>
  )
}

export default Testimonials