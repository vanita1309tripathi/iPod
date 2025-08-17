import './css/controls.css';
import leftArrow from './images/left-arrow.png';
import rightArrow from './images/right-arrow.png';
import bottomArrow from './images/arrow-pointing-downwards.png';

// introduce your own eventhandler for eac button Here.
function Controls(props) {

    return (
      <section id="controls" 
      // onClick={}
      >
        <div id="wheel">
          {/* Menu Button */}
          <span 
            id="menu-button"
            className="buttons" 
            style={ {top: 20} }
            onClick={props.onMenu}
          >
            Menu     
          </span>
           {/* Left arrow -> go to previous item */}
          <img className="buttons" draggable="false"
            src={leftArrow} alt="left" 
            style={ {left: 13, width: 40} }
            onClick={() => props.onRotate('prev')} >
          </img>
              {/* Right arrow -> go to next item */}
          <img className="buttons" draggable="false"
            src={rightArrow} alt="right" 
            style={ {right: 13, width: 40} }
            onClick={() => props.onRotate('next')}>
          </img>
            {/* Bottom arrow -> placeholder (e.g., play/pause later) */}
          <img className="buttons" draggable="false"
            src={bottomArrow} alt="bottom" 
            style={ {bottom: 13, width: 30, height: 37} }>
          </img>
          <div id="ok-button" onClick={props.onOk}>
            <b>OK</b>
          </div>
        </div>
      </section>
    );
  }
  
  export default Controls;
  
  