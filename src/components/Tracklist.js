import Track from "./Track";

function Tracklist({ tracks, handlePlaylist, add }) {

      return (
        <div>
            {tracks?.map((track) =>
              <Track 
                  key={track.id}
                  name={track.name}
                  artist={track.artist}
                  album={track.album}
                  handleClick={() => handlePlaylist(track)}
                  add={add}
              />
            )}
        </div>
      )
};

export default Tracklist;