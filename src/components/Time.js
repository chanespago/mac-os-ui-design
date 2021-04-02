import React, { useState, useEffect } from 'react'

export const Time = (props) => {

  var [time,setTime] = useState(new Date());

  useEffect(()=>{
    var timer = setInterval(()=> setTime(new Date()), 1000);

    return function cleanup(){
      clearInterval(timer);
    }
  });

  return (
    <>
      {time.toLocaleTimeString([], props.option)}
    </>
  )
}
