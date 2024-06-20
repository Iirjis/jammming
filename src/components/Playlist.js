import Tracklist from "./Tracklist";
import styles from "../styles/Playlist.module.css"

function Playlist({ playlistName, setPlaylistName, playlist, handleRemoveSongs }) {

    return (
        <div className={styles.playlist_container}>
            <input 
                placeholder="My Playlist"
                className={styles.input_container}
                type="text"
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
            />
            <Tracklist 
                tracks={playlist}
                handlePlaylist={handleRemoveSongs}
                add={false}
            />
            <button className={styles.save}>Save To Spotify</button>
        </div>
    )
};

export default Playlist;