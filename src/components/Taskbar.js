import React, {useState} from 'react'
import { Widget_Container } from './Widget_Container'
import { Time } from './Time';
import { Dates } from './Dates';

// CSS Import
import '../assets/css/Taskbar.css';
import '../assets/css/Widgets.css';

// Image Import
import icon from '../assets/img/icon22.png';

export const Taskbar = () => {
  const [showBattery, setisBattery] = useState(false);
  const [showWifi, setisWifi] = useState(false);
  const [showClock, setisClock] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [displayClass, setClassName] = useState("");
  const [targetDisplay, setTargetDisplay] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);


  function toggle(e){
    let varName = e.currentTarget.id;
    setTargetDisplay(varName);
    setShowOverlay(prev=> !prev);

    if (varName === "_bat") {
      setisBattery((prev) => !prev);
      setClassName("battery");
    }else if (varName === "_wifi") {
      setisWifi((prev) => !prev);
      setClassName("wifi");
    }else if (varName === "_clock") {
      setisClock((prev) => !prev);
      setClassName("date-and-time");
    }else if (varName === "_tools") {
      setisClock((prev) => !prev);
      setClassName("control-center");
    }
  }

  return (
    <>
      <div className="task-bar" >
        <div className="taskbar-wrapper">
          <div className="menu">
            <div className="startBtn">
              <img src={icon}/>
            </div>
            <div className="menu-list">
              <ul className="menu-items">
                <li className="menu-link bold">Finder</li>
                <li className="menu-link">File</li>
                <li className="menu-link">Edit</li>
                <li className="menu-link">View</li>
                <li className="menu-link">Go</li>
                <li className="menu-link">Window</li>
                <li className="menu-link">Help</li>
              </ul>
            </div>
          </div>
          <div className="widgets">
            <div className="widgets-item">
              <span id="_bat" onClick={toggle}>
                <i className="fas fa-battery-full"></i>
              </span>
            </div>
            <div className="widgets-item">
              <span id="_wifi" onClick={toggle}>
                <i className="fas fa-wifi"></i>
              </span>
            </div>
            <div className="widgets-item">
              <span id="_tools" onClick={toggle}>
                <i className="fas fa-ellipsis-h"></i>
              </span>
            </div>
            <div className="widgets-item" id="_clock" onClick={toggle}>
              <span>
                <Dates
                  option={{ weekday: 'short' }} 
                />
              </span>
              <span>
                <Dates 
                  option={{ month: 'long', day: 'numeric' }}
                />
              </span>
              <span>
                <Time
                  option={{ hour: '2-digit', minute: '2-digit' }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      {showOverlay ? 
        <div className="task-bar-overlay" onClick={() => setShowOverlay(false)}>
          <Widget_Container 
            displayClass={displayClass}
            targetDisplay={targetDisplay}
          />
        </div> : null }
    </>
  )
}
