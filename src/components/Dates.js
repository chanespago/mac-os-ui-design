import React, { useState, useEffect } from 'react'

export const Dates = (props) => {

  var [date,setDate] = useState(new Date());

  useEffect(()=>{
    var timer = setInterval(()=> setDate(new Date()), 1000);
    
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return function cleanup(){
      clearInterval(timer);
    }
  });

  return (
    <>
      {date.toLocaleDateString('en-US', props.option)}
    </>
  )
}
