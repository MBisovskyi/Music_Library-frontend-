import "./SearchField.css";
import axios from "axios";

const SearchField = (props) => {
  async function filterByArtist() {
    let response = await axios.get("http://127.0.0.1:8000/songs/");
    console.log(response);
    let artistInput = prompt("Please, enter Artist/Band name: ");
    let songsArray = response.data.filter(function (song) {
      if (song.artist === artistInput) {
        return true;
      }
    });
    props.newSongs(songsArray);
  }

  return (
    <div className="search-field-wrap">
      <div className="search-field-item">
        <button onClick={filterByArtist}>artist/band</button>
      </div>
      <div className="search-field-item">
        <button>album</button>
      </div>
      <div className="search-field-item">
        <button>release date</button>
      </div>
      <div className="search-field-item">
        <button>genre</button>
      </div>
    </div>
  );
};

export default SearchField;
