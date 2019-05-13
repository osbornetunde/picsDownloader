import React, { Suspense } from 'react';
import './imageList.css';
import { Link } from 'react-router-dom';
import store from "../../store";
import { setPrevPage, setNextPage } from "../../actions";

const ImageCard = React.lazy(() => import('../../Component/ImageCard/imageCard') )

const ImageList = ({ images, click }) => {

    const { typing, currentPage } = store.getState();
      
    const nextPageHandler =  () => {
      store.dispatch(setNextPage(currentPage))
      click(typing, currentPage)
  }

  const previousPageHandler =  () => {
    store.dispatch(setPrevPage(currentPage))
    click(typing, currentPage)
}
    
    
    
    const imageList = images.map( (image) => {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <ImageCard  key={image.id} image={image}  id={image.id} photographer={image.photographer}/>
            </Suspense>
        )
    })
    return(
        <div className="image__content">
            <div className="image-list">
                {imageList}
            </div>
            <div className="direction__buttons">
                {(currentPage !== 1 ?
                    <Link to={`/results/${currentPage}`}>
                        <button 
                            className="image-list__prev"
                            onClick={previousPageHandler}
                        >
                            Previous
                        </button>
                    </Link>
                    : ""
                    )}
                <Link to={`/results/${currentPage}`}>
                    <button 
                        className="image-list__next"
                        onClick={nextPageHandler}
                    >
                        Next
                    </button>
                </Link>
                    
            </div>
        </div>
    )
};

export default ImageList;