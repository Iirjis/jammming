import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import { useState } from "react";
import styles from "./App.module.css";


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState("")

  function handleSearch() {
    setSearchResults([
      { name: "Faster", artist: "Within Temptation", album: "The Unforgiving", id: 0 },
      { name: "Paint The Town Red", artist: "Doja Cat", album: "Scarlet", id: 1 },
      { name: "Mennyt mies", artist: "J. Karjalainen", album: "Et ole yksin", id: 2 },
      { name: "Can't Get Enough", artist: "Jennifer Lopez", album: "This Is Me...Now", id: 3 }
    ]);
    setSearchValue("");
}

  return (
    <div className={styles.App}>
      <h1 className={styles.header}>Ja<span>mmm</span>ing</h1>
      <SearchBar 
          setSearchValue={setSearchValue}
          handleSearch={handleSearch}
          searchValue={searchValue} 
      />
      <SearchResults searchResults={searchResults} />
      <button>Save To Spotify</button>
    </div>
  );
}

export default App;
