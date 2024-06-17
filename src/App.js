import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Tracklist from "./components/Tracklist";
import { useState } from "react";
import './App.css';



function App() {
  const [tracks, setTracks] = useState([
    { name: "Faster", artist: "Within Temptation", album: "The Unforgiving", id: 0 },
    { name: "Paint The Town Red", artist: "Doja Cat", album: "Scarlet", id: 1 },
    { name: "Mennyt mies", artist: "J. Karjalainen", album: "Et ole yksin", id: 2 },
    { name: "Can't Get Enough", artist: "Jennifer Lopez", album: "This Is Me...Now", id: 3 }
  ]);

  return (
    <div className="App">
      <h1 className="header">Ja<span>mmm</span>ing</h1>
      <SearchBar />
      <SearchResults />
      <Tracklist tracks={tracks}/>
      <button>Save To Spotify</button>
    </div>
  );
}

export default App;
