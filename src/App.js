import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import { useState } from "react";
import './App.css';



function App() {
  const [result, setResults] = useState("");

  return (
    <div className="App">
      <SearchBar />
      <SearchResults />
      <button>Save To Spotify</button>
    </div>
  );
}

export default App;
