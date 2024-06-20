import styles from "../styles/Track.module.css"

function Track({ name, artist, album, handleClick, add }) {
    return (
        <div className={styles.track_container}>
            <h3 className={styles.track_name}>{name}</h3>
                <div className={styles.track_info_container}>
                    <p className={styles.track_artist}>{artist}</p>
                    <p className={styles.track_spacer}>|</p>
                    <p className={styles.track_album}>{album}</p>
                    <button 
                        className={styles.add_track}
                        onClick={() => {
                            handleClick();
                        }}
                    >
                        {add === true ? "+" : "-"}
                    </button>
                </div>
                <hr />
        </div>
    )    
};

export default Track;