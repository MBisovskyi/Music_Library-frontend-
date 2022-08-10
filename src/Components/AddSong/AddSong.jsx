import "./AddSong.css";
import { useState } from "react";
import axios from "axios";

const AddSong = (props) => {
  const [newTitle, setTitle] = useState("");
  const [newArtist, setArtist] = useState("");
  const [newAlbum, setAlbum] = useState("");
  const [newGenre, setGenre] = useState("");
  const [newReleasedDate, setReleasedDate] = useState("");

  async function handleSubmit(event) {
    let newSong = {
      title: newTitle,
      artist: newArtist,
      album: newAlbum,
      genre: newGenre,
      release_date: newReleasedDate,
    };
    await axios.post("http://127.0.0.1:8000/songs/", newSong);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="add-song">
        <button>Add Song</button>
      </div>
      <div className="add-song-wrap">
        <label className="add-song-item">
          Title
          <input
            required
            className="input-container"
            type="text"
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label className="add-song-item">
          Artist
          <input
            required
            className="input-container"
            type="text"
            value={newArtist}
            onChange={(event) => setArtist(event.target.value)}
          />
        </label>
        <label className="add-song-item">
          Album
          <input
            required
            className="input-container"
            type="text"
            value={newAlbum}
            onChange={(event) => setAlbum(event.target.value)}
          />
        </label>
        <label className="add-song-item">
          Genre
          <input
            required
            className="input-container"
            type="text"
            value={newGenre}
            onChange={(event) => setGenre(event.target.value)}
          />
        </label>
        <label className="add-song-item">
          Released Date
          <input
            required
            className="input-container"
            type="date"
            value={newReleasedDate}
            onChange={(event) => setReleasedDate(event.target.value)}
          />
        </label>
      </div>
    </form>
  );
};

export default AddSong;
