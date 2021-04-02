import React from 'react'

// CSS Import
import '../assets/css/Slider.css'

export const Slider = (props) => {

  var rangeVal = props.value

  return (
    <>
      <input type="range" min="1" max="100" value={rangeVal} class="slider"/>
    </>
  )
}
