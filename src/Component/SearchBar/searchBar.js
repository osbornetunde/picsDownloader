import React, { useState } from 'react';



const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(searchTerm)
    
  }
  
    return (
      <div className="App">
          <main className="App__content">
          <label>Picture Search</label>
            <input type="text" className="App" placeholder="Enter Search Term" onChange={ e => setSearchTerm(e.target.value)} value={searchTerm}/>
            <button onClick={searchSubmitHandler}>Search</button>
          </main>
      </div>
    );
  }

export default SearchBar;
