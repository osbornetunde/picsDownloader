import React, { Suspense,lazy } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import pexels from '../../api/pexels';
import './App.css';
import { setImages } from "../../actions"


const SearchBar = lazy(() => import('../SearchBar/searchBar'));
const ImageList = lazy(() => import('../../Container/ImageList/imageList'));
const ImageDetails = lazy(() => import('../ImageDetails/imageDetails'));


const App = ({ setImages, images, selectedImage}) => {
  
  
//   const { images, selectedImage } = store.getState();
  
  
  

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
    setImages(response.data.photos)
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
              exact path = '/results/:page/:id' 
              render = { () => <ImageDetails selectedImage={selectedImage}/>}
               />
            
            />
        </Switch>
        </Suspense>
      </Router>
    );
 
}

const mapStateToProps = (state) => ({
    images: state.images,
    selectedImage: state.selectedImage
})

export default withRouter(connect(mapStateToProps, { setImages })(App));
