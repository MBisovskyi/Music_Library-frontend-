import "./SearchField.css";
import axios from "axios";

const SearchField = (props) => {
  async function filterByArtist() {
    let response = await axios.get("http://127.0.0.1:8000/songs/");
    let artistInput = prompt("Please, enter Artist/Band name: ");
    let songsArray = response.data.filter(function (song) {
      if (song.artist === artistInput) {
        return true;
      }
    });
    if (!songsArray[0]) {
      alert("Song is not found!");
      props.newSongs(response.data);
    } else {
      props.newSongs(songsArray);
    }
  }

  async function filterByAlbum() {
    let response = await axios.get("http://127.0.0.1:8000/songs/");
    let albumInput = prompt("Please, enter Album name: ");
    let songsArray = response.data.filter(function (song) {
      if (song.album === albumInput) {
        return true;
      }
    });
    if (!songsArray[0]) {
      alert("Song is not found!");
      props.newSongs(response.data);
    } else {
      props.newSongs(songsArray);
    }
  }

  async function filterByGenre() {
    let response = await axios.get("http://127.0.0.1:8000/songs/");
    let genreInput = prompt("Please, enter song genre: ");
    let songsArray = response.data.filter(function (song) {
      if (song.genre === genreInput) {
        return true;
      }
    });
    if (!songsArray[0]) {
      alert("Song is not found!");
      props.newSongs(response.data);
    } else {
      props.newSongs(songsArray);
    }
  }

  return (
    <div className="search-field-wrap">
      <div className="search-field-item">
        <button onClick={filterByArtist}>artist/band</button>
      </div>
      <div className="search-field-item">
        <button onClick={filterByAlbum}>album</button>
      </div>
      <div className="search-field-item">
        <button>release date</button>
      </div>
      <div className="search-field-item">
        <button onClick={filterByGenre}>genre</button>
      </div>
    </div>
  );
};

export default SearchField;
