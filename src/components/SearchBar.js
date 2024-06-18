import styles from "../styles/SearchBar.module.css"

function SearchBar({ setSearchValue, handleSearch, searchValue }) {
    function handleSubmit(e) {
        e.preventDefault();
        handleSearch();
    }

    return (
        <div className={styles.SearchBar}>
            <label>
                <input className={styles.input}
                    type="text"
                    name="song-input"
                    placeholder="What do you want to listen?"
                    value={searchValue} 
                    onChange={e => setSearchValue(e.target.value)}/>
            </label>
            <button className={styles.search} type="submit" onClick={handleSubmit}>Search</button>
        </div>
    )
};

export default SearchBar;