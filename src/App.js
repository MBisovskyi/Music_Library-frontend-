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
    getAllSongs();
  }, []);

  async function getAllSongs() {
    let response = await axios.get("http://127.0.0.1:8000/songs/");
    setSongs(response.data);
    console.log(response.data);
  }

  return (
    <div className="app">
      <NavBar />
      <SearchField />
      <div className="all-songs">
        <button onClick={getAllSongs}>All Songs</button>
      </div>
      <AddSong />
      <DisplayMusic allSongs={songs} />
    </div>
  );
}

export default App;
