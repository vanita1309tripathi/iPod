import React from 'react';
import './css/screen.css';
import SideMenu from './SideMenu.js'; 
import Music from './Music.js'; // Import the Music component
import Games from './Games.js'; // Import the Games component
import Coverflow from './Coverflow.js'; // Import the Coverflow component
import Settings from './Settings.js'; // Import the Settings component


class Screen extends React.Component{

// Display the sidemenu, coverflow, games,Music etc here

  render(){
    const { menuVisible, screen, activeItem,activeItemInMenu,display } = this.props;
    return (
      <>
        <div id="screen" className="screen-container">
          {menuVisible ? (
            <SideMenu activeItem={activeItem} />
          ) : (
            // content div must have id equal to screen name (coverflow/music/games/settings)
            <div id={screen} className="content">
              {screen === 'music' && (
                // Import the Music component here
                <Music display={display} activeItem={activeItem} activeItemInMenu={activeItemInMenu} />
              )}
              {screen === 'games' && <Games />}
               {screen === 'coverflow' && <Coverflow />}
               {screen === 'settings' && <Settings/>}

              {/* <div className="content-left">
                
                {/* <h2>{screen.charAt(0).toUpperCase() + screen.slice(1)}</h2>
                <p>Content area for {screen}.</p> */}
              {/* </div>
              <div className="content-right"> */}
                {/* show artwork or image here; for now you can use a background-image via CSS */}
              {/* </div> */} 
            </div>
          )}
        </div>
      </>
    );
  }

}

export default Screen;

          


