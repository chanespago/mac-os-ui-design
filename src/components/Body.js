import React from 'react'
import { Fade } from "react-slideshow-image";

// CSS Import
import '../assets/css/Body.css';
import 'react-slideshow-image/dist/styles.css'

// Images Import
import highsierra from '../assets/img/high-sierra.jpg';
import leopard from '../assets/img/leopard.png';
import lion from '../assets/img/lion.png';
import mojavenight from '../assets/img/mojave-night.jpg';
import yosemite from '../assets/img/yosemite.jpg';

export const Body = () => {
  
  return (
      <div className="slideshow-container">
        <Fade  autoplay={true} duration={5000} arrows={false}>
        <div className="mySlides fade">
          <img src={highsierra}/>
        </div>
        <div className="mySlides fade">
          <img src={leopard}/>
        </div>
        <div className="mySlides fade">
          <img src={lion}/>
        </div>
        <div className="mySlides fade">
          <img src={mojavenight}/>
        </div>
        <div className="mySlides fade">
          <img src={yosemite}/>
        </div>
         </Fade> 
      </div>
  )
}

// export default Body
