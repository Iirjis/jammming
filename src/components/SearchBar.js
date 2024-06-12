import { useState } from "react";

function SearchBar() {
    const [search, setSearch] = useState("");

    function handleChange(e) {
        setSearch(e.target.value);
    }

    const addWriting = (e) => {
        e.preventDefault();
    }

    return (
        <div id="search">
            <form onSubmit={addWriting}>
                <input 
                    type="text"
                    placeholder="What do you want to listen?"
                    value={search} 
                    onChange={handleChange}/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
};

export default SearchBar;