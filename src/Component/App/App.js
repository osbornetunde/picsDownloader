import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBar from '../SearchBar/searchBar';
import ImageList from '../../Container/ImageList/imageList';
import pexels from '../../api/pexels';
import './App.css';


const App = () => {
  
  const [images, setImages] = useState([])
  const [nextPage, setNextPage] = useState("")
  const [pageNumber, setPageNumber] = useState(1)
  

  const searchHandler = async (searchTerm) => {
    const response = await pexels.get('/v1/search?', {
      params: {
        query: searchTerm,
        per_page: 20,
        page: 1
      }
    });
    // console.log(response)
    setPageNumber(response.data.page)
    setNextPage(response.data.next_page)
    setImages(response.data.photos);
  }
 
  
    return (
      <Router>
        
        <Switch>
          <Route 
            exact path='/' 
            render={({match}) => <SearchBar onSubmit={searchHandler} pageNumber={pageNumber}/>} />

        <Route 
            path='/results/:page' 
            render={({match}) => 
               <ImageList images={images} pageNext={nextPage} match={match}/>
            }
            />
            

        </Switch>
      </Router>
    );
 
}

export default App;
