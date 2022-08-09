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
      <div className="likes-container">Likes:</div>
    </div>
  );
};

export default DisplayMusic;
