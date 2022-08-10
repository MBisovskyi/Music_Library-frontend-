import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import SearchField from "./Components/SearchField/SearchField";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic";
import AddSong from "./Components/AddSong/AddSong";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSongs();
  }, [setSongs]);

  async function getSongs() {
    let response = await axios.get("http://127.0.0.1:8000/songs/");
    setSongs(response.data);
  }

  return (
    <div className="app">
      <NavBar />
      <SearchField newSongs={setSongs} />
      <div className="all-songs">
        <button onClick={getSongs}>All Songs</button>
      </div>
      <AddSong newSong={setSongs} />
      <DisplayMusic displaySongs={songs} />
    </div>
  );
}

export default App;
