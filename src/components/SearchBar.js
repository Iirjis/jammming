import { useState } from "react";
import "../styles/SearchBar.css"

function SearchBar() {
    const [search, setSearch] = useState("")

    function handleChange(e) {
        setSearch(e.target.value);
    }

    return (
        <div className="SearchBar">
            <input className="input"
                type="text"
                placeholder="What do you want to listen?"
                value={search} 
                onChange={handleChange}/>
            <button className="search" type="submit">Search</button>
        </div>
    )
};

export default SearchBar;