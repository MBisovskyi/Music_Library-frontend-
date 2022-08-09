import "./NavBar.css";
import disk from "./assets/disk2.png";

const NavBar = (props) => {
  return (
    <div className="navbar-wrap">
      <div className="navbar-container">
        <div>
          <img src={disk} alt="Disk" />
        </div>
        <div className="middle-container">MusiColl</div>
        <div>
          <img src={disk} alt="Disk" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
