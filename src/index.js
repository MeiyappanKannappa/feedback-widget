import { useState, useEffect }  from 'react';
import React from 'react'
import './App.css';

export const Feedback = ({ title, bgcolor, callback }) => {
  const [rating, setRating] = useState([{
    clicked: false
  }, {
    clicked: false
  }, {
    clicked: false
  }, {
    clicked: false
  }, {
    clicked: false
  }, {
    clicked: false
  }, {
    clicked: false
  }, {
    clicked: false
  }, {
    clicked: false
  }, {
    clicked: false
  }])
  const [previousRating, SetPreviousRating] = useState(0);
  const [feedbackText, SetFeedBackText] = useState("");
  const [show, setShow] = useState("block");
  const [buttons, setButtons] = useState([])

const ratingclick=(val)=>{
  //console.log(val)
  var data = rating;
  for (var i=previousRating;i< val;i++){
    //console.log(rating[i].clicked)
    if(!rating[i].clicked ){
      data[i].clicked=true;
    }else{
      data[i].clicked=false;
    }
    SetPreviousRating(val);
    setRating(data);
  }
  for (var i=val;i< previousRating;i++){
    //console.log(rating[i].clicked)
    if(!rating[i].clicked ){
      data[i].clicked=true;
    }else{
      data[i].clicked=false;
    }
    SetPreviousRating(val);
    setRating(data);
  }
}

const submitFeedback = () =>{
   // console.log("Rating is ",previousRating, " Feedback ", feedbackText);
}

const reset = () =>{
 // console.log("Rating is ",previousRating, " Feedback ", feedbackText);
  SetFeedBackText("");
  setRating(0);
  ratingclick(0)
}

let buttonitems = [];

// useEffect(() => {
//   for (var i = 0; i < ((starcount && starcount < 10)? starcount:10); i++) {
//     buttonitems.push(<button className={rating[i].clicked ? "clip-star starclicked" : "clip-star "} onClick={()=>ratingclick(i+1)}></button>);
//   }
//   setButtons(buttonitems);
// },'buttonitems', 'rating', 'ratingclick','starcount');

return (
  
  <div className="card" style={{backgroundColor:bgcolor? bgcolor:"rgba(255,255,255,0.8)", display: show}}>
  <div className="container">
    <b>{title?title:"Feedback"}</b>
    <div align="right" style={{justifySelf: "top", justifyContent:"top"}}><button style={{color: "red", fontStyle:"bold"}} onClick={()=> setShow("none")}>X</button></div>
  </div>
  <div className='container'>
    <button className={rating[0].clicked ? "clip-star starclicked" : "clip-star "} onClick={()=>ratingclick(1)}></button>
    <button className={rating[1].clicked ? "clip-star starclicked" : "clip-star "} onClick={()=>ratingclick(2)}></button>
    <button className={rating[2].clicked ? "clip-star starclicked" : "clip-star "} onClick={()=>ratingclick(3)}></button>
    <button className={rating[3].clicked ? "clip-star starclicked" : "clip-star "} onClick={()=>ratingclick(4)}></button>
    <button className={rating[4].clicked ? "clip-star starclicked" : "clip-star "} onClick={()=>ratingclick(5)}></button>
    <button className={rating[5].clicked ? "clip-star starclicked" : "clip-star "} onClick={()=>ratingclick(6)}></button>
    <button className={rating[6].clicked ? "clip-star starclicked" : "clip-star "} onClick={()=>ratingclick(7)}></button>
    <button className={rating[7].clicked ? "clip-star starclicked" : "clip-star "} onClick={()=>ratingclick(8)}></button>
    <button className={rating[8].clicked ? "clip-star starclicked" : "clip-star "} onClick={()=>ratingclick(9)}></button>
    <button className={rating[9].clicked ? "clip-star starclicked" : "clip-star "} onClick={()=>ratingclick(10)}></button>
  </div>
  <div className="container" align="left" style={{"align":"right","padding":"5px"}}>
  <textarea id="feedback" name="feedback" rows="4" cols="50" onChange={e => SetFeedBackText(e.target.value)} value={feedbackText}></textarea>
  </div>
  <div className="container" align="right" >
  
    <button className='button reset-button ' onClick={()=> reset()}>Reset</button> 
    <button className='button ' onClick={()=> callback? callback(previousRating,feedbackText) :submitFeedback()}>Submit</button> 
  </div>
</div>
);
}

export default Feedback;