import "./SearchField.css";

const SearchField = (props) => {
  return (
    <div className="search-field-wrap">
      <div className="search-field-item">
        <span>artist/band</span>
      </div>
      <div className="search-field-item">
        <span>album</span>
      </div>
      <div className="search-field-item">
        <span>release date</span>
      </div>
      <div className="search-field-item">
        <span>genre</span>
      </div>
    </div>
  );
};

export default SearchField;
