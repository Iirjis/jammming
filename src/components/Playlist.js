import Tracklist from "./Tracklist";
import styles from "../styles/Playlist.module.css"
import { useState } from "react";

function Playlist({ playlistName, setPlaylistName, playlist, handleRemoveSongs, handleSavePlaylist }) {

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
            <button
                onClick={() => {
                    if (playlist.length > 0) {
                        handleSavePlaylist();
                    }
                }}
                className={styles.save}
            >
                Save To Spotify
            </button>
        </div>
    )
};

export default Playlist;