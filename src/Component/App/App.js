import React, { Suspense,lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import pexels from '../../api/pexels';
import './App.css';
import store from "../../store";
import { setImages } from "../../actions"


const SearchBar = lazy(() => import('../SearchBar/searchBar'));
const ImageList = lazy(() => import('../../Container/ImageList/imageList'));
const ImageDetails = lazy(() => import('../ImageDetails/imageDetails'));


const App = () => {
  
  
  const { images, selectedImage } = store.getState();
  
  
  

  const searchHandler = async (searchTerm, currentPage) => {
    const response = await pexels.get('/v1/search?', {
      params: {
        query: searchTerm,
        per_page: 20,
        page: currentPage
      }
    });
    // console.log(response.data.photos[0].photographer)
   
    // setNextPage(response.data.next_page)
    // console.log(response.data.photos[0].src.medium);
    store.dispatch(setImages(response.data.photos))
  }

  
  
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route 
            exact path='/' 
            render={() => <SearchBar onSubmit={searchHandler} />} />

        <Route 
            path='/results/:page' 
            render={() => 
               <ImageList images={images}  click={searchHandler}/>}
            />

        <Route
              path = '/results/:id' 
              render = { () => <ImageDetails selectedImage={selectedImage}/>}
               />
            
            />
        </Switch>
        </Suspense>
      </Router>
    );
 
}

export default App;
