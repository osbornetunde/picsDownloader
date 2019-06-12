import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import pexels from "../../api/pexels";
import "./App.css";
// import { setImages } from "../../actions";

const SearchBar = lazy(() => import("../SearchBar/searchBar"));
const ImageList = lazy(() => import("../../Container/ImageList/imageList"));

const App = () => {
  //ToDo: Make API call with redux-thunk
  // const searchHandler = async (searchTerm, currentPage) => {
  //   const response = await pexels.get("/v1/search?", {
  //     params: {
  //       query: searchTerm,
  //       per_page: 20,
  //       page: currentPage
  //     }
  //   });
  //   setImages(response.data.photos);
  // };

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={SearchBar} />
          <Route path="/results/:page" component={ImageList} />

          <Route exact path="/results/:page/:id" component={ImageList} />
        </Switch>
      </Suspense>
    </Router>
  );
};

// const mapStateToProps = state => ({
//   images: state.images
// });

export default App;
