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
            <div className="likes-container">
              {song.likes_quantity}
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25.803"
                  height="23.326"
                  viewBox="0 0 29.803 27.326"
                >
                  <path
                    id="iconmonstr-favorite-5"
                    d="M14.981,83.908C11.471,76.836.08,78.862.08,87.969c0,9.028,12.3,13.583,14.9,19.014,2.6-5.431,14.9-9.986,14.9-19.014C29.883,78.87,18.5,76.827,14.981,83.908Z"
                    transform="translate(-0.08 -79.657)"
                    fill="#846cd7"
                  />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayMusic;
