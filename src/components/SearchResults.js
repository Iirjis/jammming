import { useState } from "react";

function SearchResults() {
    const [tracks, setTracks] = useState([
        { name: "Within Temptation", artist: "Within Temptation", album: "The Unforgiving", id: 0 },
        { name: "Doja Cat", artist: "Doja Cat", album: "Scarlet", id: 1 },
        { name: "J. Karjalainen", artist: "J. Karjalainen", album: "Et ole yksin", id: 2 },
        { name: "Jennifer Lopez", artist: "Jennifer Lopez", album: "This Is Me...Now", id: 3 }
      ]);
    

    // function handleNewSearch(e) {
    //     setNewSearchWriting(e.target.value);
    //     tracks.filter((t) => {
    //         if (newSearchWriting == "") {
    //             return t;
    //         } else if (t.name.toLowerCase().includes(newSearchWriting.toLowerCase())) {
    //             return t;
    //         }
    //     })
    // }

    return (
        <div>
        </div>
    );
};

export default SearchResults;