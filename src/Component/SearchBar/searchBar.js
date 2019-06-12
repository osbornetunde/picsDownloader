import React from "react";
import { Link } from "react-router-dom";
import "./searchBar.css";
import { setTypingValue, makeRequest } from "../../actions";
import { connect } from "react-redux";

const SearchBar = ({ typing, currentPage, setTypingValue, makeRequest }) => {
  // const { typing, currentPage }  = store.getState();

  const searchValueHandler = e => {
    e.preventDefault();
    setTypingValue(e.target.value);
  };

  const searchSubmitHandler = () => {
    makeRequest(typing, currentPage);
  };

  return (
    <div className="App">
      <main className="App__content">
        <label>Picture Search</label>
        <input
          type="text"
          className="App"
          placeholder="Enter Search Term"
          onChange={searchValueHandler}
          value={typing}
        />
        <button onClick={searchSubmitHandler}>
          <Link to={`/results/${currentPage}`} className="text">
            Search
          </Link>
        </button>
      </main>
    </div>
  );
};

const mapStateToProps = state => ({
  typing: state.typing,
  currentPage: state.currentPage
});

export default connect(
  mapStateToProps,
  { setTypingValue, makeRequest }
)(SearchBar);
