import "./DisplayMusic.css";

const DisplayMusic = ({ NewMusic }) => {
  return (
    <div className="display-music-wrap">
      <div className="music-title">Title</div>
      <div className="music-content-container">
        <div className="display-music-left-container">
          <div className="display-music-item">Artist/Band:</div>
          <div className="display-music-item">Release Date:</div>
        </div>
        <div className="display-music-right-container">
          <div className="display-music-item">Album</div>
          <div className="display-music-item">Genre</div>
        </div>
      </div>
      <div className="likes-container">
        17
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29.803"
            height="27.326"
            viewBox="0 0 29.803 27.326"
          >
            <g
              id="Group_14"
              data-name="Group 14"
              transform="translate(0 -4.634)"
            >
              <path
                id="iconmonstr-favorite-5"
                d="M14.981,83.908C11.471,76.836.08,78.862.08,87.969c0,9.028,12.3,13.583,14.9,19.014,2.6-5.431,14.9-9.986,14.9-19.014C29.883,78.87,18.5,76.827,14.981,83.908Z"
                transform="translate(-0.08 -75.023)"
                fill="#ffffff"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DisplayMusic;
