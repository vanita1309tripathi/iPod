import MusicMenu from './MusicMenu.js';
import AllSongs from './AllSongs.js';
import Artists from './Artists.js';
import Albums from './Albums.js';


function Music(props) {
  const {musicMenu, allSongs, artists, albums} = props.display;
  const activeItemInMenu = props.activeItemInMenu;
    return (
      <div className="display">
        {
          !musicMenu
            ?allSongs
              ?<AllSongs />
              :artists
                ?<Artists />
                :<Albums />
            :<MusicMenu activeItemInMenu={activeItemInMenu}/>
        }
      </div>
    );
  }
  
  export default Music;
  