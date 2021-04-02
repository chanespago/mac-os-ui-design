import React from 'react'

// CSS Import
import '../assets/css/MP3.css';

// Image import
import ts_red_album from '../assets/img/taylor-swift-red-album-cover.jfif';

export const MP3 = () => {
  return (
    <div className="mp3-tool">
      <div>
        <img src={ts_red_album}  className="album"/>
      </div>
      <div className="controls">
        <marquee behavior="scroll"><span>We Are Never Ever Getting Back Together</span></marquee>
        <input type="range" min="1" max="100" value="23"/>
        <div>
          <i class="fas fa-step-backward"></i>
          {/* <i class="fas fa-stop"></i> */}
          <i class="fas fa-play"></i>
          <i class="fas fa-step-forward"></i>
        </div>
      </div>
    </div>
  )
}
