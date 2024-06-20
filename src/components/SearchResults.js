import Tracklist from "./Tracklist";
import styles from "../styles/SearchResults.module.css"

function SearchResults({ searchResults, handleAddSongs }) {

    return (
        <div className={styles.searchResults}>
            <h2>Results</h2>
            <Tracklist
                tracks={searchResults}
                handlePlaylist={handleAddSongs}
                add={true}
            />
        </div>
    )
};

export default SearchResults;