import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SearchBar from '../SearchBar/searchBar';
import ImageList from '../../Container/ImageList/imageList';
import pexels from '../../api/pexels';



const App = () => {
  
  const [images, setImages] = useState([])
  

  const searchHandler = async (searchTerm) => {
    const response = await pexels.get('/v1/search?', {
      params: {
        query: searchTerm,
        per_page: 20,
        page: 1
      }
    });
    // setPageNumber(response.data.page)
    console.log(response.data.next_page)
    setImages(response.data.photos);
  }
 
  
    return (
      <Router>
        
        <Switch>
          <Route 
            exact path='/' 
            render={() => <SearchBar onSubmit={searchHandler} />} />
          <Route 
            path='/results' 
            render={() => <ImageList images={images} />} />
        </Switch>
      </Router>
    );
 
}

export default App;
