import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import SearchField from "./Components/SearchField/SearchField";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic";

function App() {
  return (
    <div className="app">
      <NavBar />
      <SearchField />
      <DisplayMusic />
    </div>
  );
}

export default App;
