import "./DisplayMusic.css";
import DeleteSong from "../DeleteSong/DeleteSong";

const DisplayMusic = (props) => {
  return (
    <div className="content-wrap">
      {props.displaySongs.map((song, index) => {
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
              <div className="delete-button-wrap">
                <DeleteSong songId={song.id} newSongs={props.newSongs} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayMusic;
