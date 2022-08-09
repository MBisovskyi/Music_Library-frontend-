import "./DisplayMusic.css";

const DisplayMusic = (props) => {
  return (
    <div className="content-wrap">
      {props.allSongs.map((song, index) => {
        return (
          <div className="display-music-wrap" key={index}>
            <p className="music-title">{song.title}</p>
            <div className="music-content-conteiner">
              <div className="display-music-item">
                <p>Artist/Band: {song.artist}</p>
                <p>Album: {song.album}</p>
              </div>
              <div className="display-music-item">
                <p>Date Released: {song.release_date}</p>
                <p>Genre: {song.genre}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayMusic;
