import React from 'react';
import { Link } from 'react-router-dom';
import './searchBar.css';
import store from "../../store";
import { setTypingValue } from "../../actions";



const SearchBar = ({ onSubmit }) => {
  
  const { typing, currentPage }  = store.getState();

  const searchValueHandler = (e) => {
    e.preventDefault();
    
    store.dispatch(setTypingValue(e.target.value))
    
  }

  const searchSubmitHandler = () => {
    onSubmit(typing, currentPage)
  }
  
    return (
      <div className="App">
          <main className="App__content">
          <label>Picture Search</label>
            <input type="text" className="App" placeholder="Enter Search Term" onChange={searchValueHandler} value={typing}/>
            <button onClick={searchSubmitHandler}>
              <Link to={`/results/${currentPage}`} className="text">Search</Link>
            </button>
          </main>
      </div>
    );
  }

export default SearchBar;
