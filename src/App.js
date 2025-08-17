import React from 'react';
import './App.css';
import Screen from './components/Screen.js';
import Controls from './components/Controls.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: true,       
      activeItem: 'coverflow', 
      screen: 'coverflow',     
      menuItems: ['coverflow', 'music', 'games', 'settings'],
      
      // New: music menu state
      activeItemInMusicMenu: 'allSongs',
      musicMenuItems: ['allSongs', 'artists', 'albums'],

      display: {
        musicMenu: true, 
        allSongs: false,   
        artists: false,   
        albums: false     
      }
    };
  }

  // Main menu rotation
  handleRotate = (direction) => {
    const { menuItems, activeItem, screen, musicMenuItems, activeItemInMusicMenu, display } = this.state;
    
    // If we're in music menu, rotate through that instead
    if (!this.state.menuVisible && screen === 'music' && display.musicMenu) {
      let index = musicMenuItems.indexOf(activeItemInMusicMenu);
      if (direction === 'next') {
        index = (index + 1) % musicMenuItems.length;
      } else {
        index = (index - 1 + musicMenuItems.length) % musicMenuItems.length;
      }
      this.setState({ activeItemInMusicMenu: musicMenuItems[index] });
      return;
    }

    // Otherwise rotate in main menu
    let index = menuItems.indexOf(activeItem);
    if (direction === 'next') {
      index = (index + 1) % menuItems.length;
    } else {
      index = (index - 1 + menuItems.length) % menuItems.length;
    }
    this.setState({ activeItem: menuItems[index] });
  };

  handleOk = () => {
    const { screen, activeItem, activeItemInMusicMenu } = this.state;

    // From main menu to selected screen
    if (this.state.menuVisible) {
      this.setState({
        menuVisible: false,
        screen: activeItem
      });
      return;
    }

    // If in Music screen & in musicMenu
    if (screen === 'music' && this.state.display.musicMenu) {
      this.setState({
        display: {
          musicMenu: false,
          allSongs: activeItemInMusicMenu === 'allSongs',
          artists: activeItemInMusicMenu === 'artists',
          albums: activeItemInMusicMenu === 'albums'
        }
      });
    }
  };

  handleMenu = () => {
    // If we're inside AllSongs/Artists/Albums, go back to music menu
    if (!this.state.display.musicMenu && this.state.screen === 'music') {
      this.setState({
        display: { musicMenu: true, allSongs: false, artists: false, albums: false }
      });
      return;
    }

    // Otherwise go back to main menu
    this.setState({
      menuVisible: true
    });
  };

  render() {
    return (
      <div id="iPod-app">
        <Screen
          menuVisible={this.state.menuVisible}
          activeItem={this.state.activeItem}
          screen={this.state.screen}
          display={this.state.display}
          activeItemInMenu={this.state.activeItemInMusicMenu}
        />
        <Controls
          onRotate={this.handleRotate}
          onOk={this.handleOk}
          onMenu={this.handleMenu}
        />
      </div>
    );
  }
}

export default App;

// class App extends React.Component{

//   constructor(props) {
//     super(props);
//     this.state = {
//       menuVisible: true,       // whether we're showing a menu
//       activeItem: 'coverflow', // currently highlighted in the main menu
//       screen: 'coverflow',     // what screen is displayed
//       menuItems: ['coverflow', 'music', 'games', 'settings'],
//       display: {
//         musicMenu: true, // whether the music menu is displayed
//         allSongs: false,   // whether all songs are displayed
//         artists: false,   // whether artists are displayed
//         albums: false     // whether albums are displayed
//       }
//     };
//   }
//   // Handle the rotate event fired from the control component
//    handleRotate = (direction) => {
//     const { menuItems, activeItem } = this.state;
//     let index = menuItems.indexOf(activeItem);

//     if (direction === 'next') {
//       index = (index + 1) % menuItems.length;
//     } else if (direction === 'prev') {
//       index = (index - 1 + menuItems.length) % menuItems.length;
//     }

//     this.setState({ activeItem: menuItems[index] });
//   };

//   // If ok button is clicked,  open the selected component
//    // When OK is pressed
//   handleOk = () => {
//     this.setState({
//       menuVisible: false,
//       screen: this.state.activeItem
//     });
//   };

//   // When MENU is pressed
//   handleMenu = () => {
//     this.setState({
//       menuVisible: true
//     });
//   };

//   handleMusicSelection = (option) => {
//   this.setState({
//     display: {
//       musicMenu: false,
//       allSongs: option === 'allSongs',
//       artists: option === 'artists',
//       albums: option === 'albums'
//     }
//   });
// };
//   // If menu button is clicked, go back to the menu screen

//   render(){
//      return (
//       <div id="iPod-app">
//         <Screen
//           menuVisible={this.state.menuVisible}
//           activeItem={this.state.activeItem}
//           screen={this.state.screen}
//           display={this.state.display}
//           handleMusicSelection={this.handleMusicSelection}
//         />
//         <Controls
//           onRotate={this.handleRotate}
//           onOk={this.handleOk}
//           onMenu={this.handleMenu}
//         />
//       </div>
//     );
   
//   }

// }

// export default App;




