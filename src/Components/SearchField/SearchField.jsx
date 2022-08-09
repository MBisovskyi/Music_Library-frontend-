import "./SearchField.css";

const SearchField = (props) => {
  return (
    <div className="search-field-wrap">
      <div className="search-field-item">
        <button>artist/band</button>
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
