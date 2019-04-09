import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    onSubmit(searchTerm)
    
  }
  
    return (
      <div className="App">
          <main className="App__content">
          <label>Picture Search</label>
            <input type="text" className="App" placeholder="Enter Search Term" onChange={ e => setSearchTerm(e.target.value)} value={searchTerm}/>
            <button onClick={searchSubmitHandler}>
              <Link to={`/results/`}>Search</Link>
            </button>
          </main>
      </div>
    );
  }

export default SearchBar;
