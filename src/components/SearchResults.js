import Tracklist from "./Tracklist";

function SearchResults({ searchResults }) {

    return (
        <div className="searchResults">
            <h2>Results</h2>
            <Tracklist
                tracks={searchResults}
            />
        </div>
    )
};

export default SearchResults;