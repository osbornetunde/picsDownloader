import React, { Suspense } from 'react';
import { connect } from 'react-redux'
import './imageList.css';
import { Link } from 'react-router-dom';
import { setPrevPage, setNextPage } from "../../actions";

const ImageCard = React.lazy(() => import('../../Component/ImageCard/imageCard') )

const ImageList = ({ images, click, currentPage, typing, setNextPage, setPrevPage }) => {

      
    const nextPageHandler =  () => {
      setNextPage(currentPage)
      click(typing, currentPage)
  }
 
  const previousPageHandler =  () => {
    setPrevPage(currentPage)
    click(typing, currentPage)
}
    
    
    
    const imageList = images.map( (image) => {
        return (
            <Suspense key={image.id} fallback={<div>Loading...</div>}>
                <ImageCard   image={image}  id={image.id} photographer={image.photographer}/>
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

const mapStateToProps = state => ({
    typing: state.typing,
    currentPage: state.currentPage
})


export default connect(mapStateToProps, { setNextPage, setPrevPage})(ImageList);