import React, { useState } from 'react';
import SearchBar from '../SearchBar/searchBar';
import pexels from '../../api/pexels';



const App = () => {
  
  const [images, setImages] = useState([]);

  const searchHandler = async (searchTerm) => {
    const response = await pexels.get('/v1/search?', {
      params: {
        query: searchTerm,
        per_page: 20,
        page: 1
      }
    });

    console.log(response.data.photos);
  }

  
    return (
      <SearchBar onSubmit={searchHandler}/>
    );
 
}

export default App;
