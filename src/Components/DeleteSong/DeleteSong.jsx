import axios from "axios";
import "./DeleteSong.css";

const DeleteSong = (props) => {
  async function deleteClickHandle() {
    await axios.delete(`http://127.0.0.1:8000/songs/${props.songId}/`);
    props.newSongs();
  }
  return (
    <div className="delete-container">
      <button onClick={deleteClickHandle}>Delete</button>
    </div>
  );
};

export default DeleteSong;
