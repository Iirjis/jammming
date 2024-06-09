import { useState } from "react";

function SearchBar() {
    const [search, setSearch] = useState("");

    function handleChange(e) {
        setSearch(e.target.value);
    }

    return (
        <div id="search">
            <input value={search} onChange={handleChange}/>
            <button onClick={() => setSearch("")}>Search</button>
        </div>
    )
};

export default SearchBar;