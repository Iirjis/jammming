import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";

import { useEffect, useState } from "react";

import Spotify from "./utils/Spotify";

import styles from "./App.module.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [playlistName, setPlaylistName] = useState("");
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    Spotify.getToken();
  }, []);

  async function handleSearch() {
    try {
      const results = await Spotify.search(searchValue);
      setSearchResults(results);
      setSearchValue("");
    } catch (error) {
      console.log(`Error in App.js handleSearch: ${error}`)
    }
  };

  function handleAddSongs(track) {
    if (!playlist.includes(track)) {
      setPlaylist((prev) => [track, ...prev]);
    }
  }

  function handleRemoveSongs(track) {
      setPlaylist(playlist.filter((item) => item !== track));
  }

  async function handleSavePlaylist() {
    try {
      if (playlist.length > 0) {
        await Spotify.handleCreateNewPlaylist(playlist, playlistName);
        setPlaylist([]);
      }
    } catch (error) {
      console.log(`Error handling save playlist: ${error}`)
    }
  }

  return (
    <div className={styles.App}>
      <h1 className={styles.header}>Ja<span>mmm</span>ing</h1>
      <SearchBar 
          setSearchValue={setSearchValue}
          handleSearch={handleSearch}
          searchValue={searchValue} 
      />
      <div className={styles.results_container}>
          <SearchResults 
              searchResults={searchResults} 
              handleAddSongs={handleAddSongs}    
          />
          <Playlist 
              playlist={playlist}
              playlistName={playlistName}
              setPlaylistName={setPlaylistName}
              handleRemoveSongs={handleRemoveSongs}
              handleSavePlaylist={handleSavePlaylist}   
          />
      </div>
      <footer>
        <h3 className={styles.footer}>HELLO!</h3>
      </footer>
    </div>
  );
}

export default App;
