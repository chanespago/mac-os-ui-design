import React from 'react'
import { Time } from './Time'
import { MP3 } from './MP3'
import { Slider } from './Slider'
import { Dates } from './Dates'

export const Widget_Container = (props) => {
  return (
    <div className={`widget-item-container ${ props.displayClass }`}>
      
        { props.targetDisplay === "_clock" && 
        <>
        <div className="widget-item-content">
          <p id="widget-time">
            <span><Time /></span>
          </p>
          <p id="widget-date">
            <span>
              <Dates 
                option={{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }}
              />
            </span>
          </p>
        </div>
        </>  }
        { props.targetDisplay === "_wifi" && 
        <>
        <div className="widget-item-content">
          <div className="widget-item-wrapper">
            <div className="widget-item-icon">
              <i className="fas fa-wifi"></i>
            </div>
            <div className="widget-item-title">
              <span>Wi-Fi</span>
            </div>
            <div className="widget-item-status">
              <span>DN8245W_6ED1D</span>
            </div>
          </div>
        </div>
        </>}
        { props.targetDisplay === "_bat" && 
        <>
        <div className="widget-item-content">
          <div className="widget-item-wrapper">
            <div className="widget-item-icon">
              <i className="fas fa-battery-full"></i>
            </div>
            <div className="widget-item-title">
              <span>Battery</span>
            </div>
            <div className="widget-item-status">
              <span>49% remaining</span>
            </div>
          </div>
        </div>
        </>}
        { props.targetDisplay === "_tools" && 
        <>
          <div className="widget-item-grid">
          <div className="widget-item-content control-connection">
              <div className="control-wrapper">
                <i className="fas fa-wifi active-icon"></i>
                <div className="control-text">
                  <span>Wifi</span>
                  <p>DN8245W_6ED1D</p>
                </div>
              </div>
              <div className="control-wrapper">
                <i className="fab fa-bluetooth-b active-icon"></i>
                <div className="control-text">
                  <span>Bluetooth</span>
                  <p>On</p>
                </div>
              </div>  
              <div className="control-wrapper">
                <i className="fas fa-broadcast-tower active-icon"></i>
                <div className="control-text">
                  <span>Airdrop</span>
                  <p>Everyone</p>
                </div>
              </div>
            </div>
            <div className="widget-item-content control-profile">
              <div className="control-wrapper">
                <i className="fas fa-moon inactive-icon"></i>
                <div className="control-text">
                  <span>Do Not Disturb</span>
                  <p>Off</p>
                </div>
              </div>
            </div>
            <div className="widget-item-content control-camera">
              <div className="control-wrapper">
                <i className="fas fa-camera inactive-icon"></i>
              </div>
            </div>
            <div className="widget-item-content control-calculator">
              <div className="control-wrapper">
                <i className="fas fa-calculator inactive-icon"></i>
              </div>
            </div>
            <div className="widget-item-content control-display">
              <div className="control-wrapper">
                <span><i className="fas fa-adjust"></i></span>
                <Slider 
                  value="10"
                />
              </div>
            </div>
            <div className="widget-item-content control-volume">
              <div className="control-wrapper">
                <span><i className="fas fa-volume-up"></i></span>
                <Slider 
                  value="80"
                />
              </div>
            </div>
            <div className="widget-item-content control-mp3">
              <div className="control-wrapper">
                <MP3 />
              </div>
            </div>
          </div>
        </>}
      </div>
  )
}
