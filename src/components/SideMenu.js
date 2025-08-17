import React, { useEffect } from 'react';
import Screen from './Screen.js';   


function SideMenu(props) {
  // The active menu item is passed from Screen via props
  const { activeItem } = props;

  // Helper function to check if this item is selected
  const isSelected = (item) => activeItem === item ? "selected" : "";

  return (
    <table id="side-menu">
      <tbody>
        {/* Heading */}
        <tr>
          <th className="table-heading">
            iPod <i className="fas fa-home"></i>
          </th>
        </tr>

        {/* Menu items */}
        <tr data-option="coverflow" className={isSelected("coverflow")}>
          <td className="table-item">
            Coverflow <i className="fas fa-chevron-right"></i>
          </td> 
        </tr>

        <tr data-option="music" className={isSelected("music")}>
          <td className="table-item">
            Music <i className="fas fa-chevron-right"></i>
          </td>
        </tr>

        <tr data-option="games" className={isSelected("games")}>
          <td className="table-item">
            Games <i className="fas fa-chevron-right"></i>
          </td>
        </tr>

        <tr data-option="settings" className={isSelected("settings")}>
          <td className="table-item">
            Settings <i className="fas fa-chevron-right"></i>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default SideMenu;

// function SideMenu(props) {
// // write logic for changing the selected item in the side menu
//  // The active menu item is passed from Screen via props
//   const { activeItem } = props;

//   // Helper function to check if this item is selected
//   const isSelected = (item) => activeItem === item ? "selected" : "";

//   return (
//     <table id="side-menu">
//         <tbody>
//         <tr>
//             <th className="table-heading">iPod <i className="fas fa-home"></i></th>
//         </tr>
//         <tr data-option="coverflow">
//             <td className="table-item">Coverflow<i className="fas fa-chevron-right"></i></td> 
//         </tr>
//         <tr data-option="music">
//             <td className="table-item">Music<i className="fas fa-chevron-right"></i></td>
//         </tr>
//         <tr data-option="games">
//             <td className="table-item">Games<i className="fas fa-chevron-right"></i></td>
//         </tr>
//         <tr data-option="settings">
//             <td className="table-item">Settings<i className="fas fa-chevron-right"></i></td>
//         </tr>
//         </tbody>
//     </table>
//   );
// }

// export default SideMenu;
