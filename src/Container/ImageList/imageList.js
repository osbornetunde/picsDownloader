import React, { Suspense} from 'react';
import './imageList.css';
import { Link } from 'react-router-dom'

const ImageCard = React.lazy(() => import('../../Component/ImageCard/imageCard') )

const ImageList = ({ images, pageNext, match}) => {
        
    const nextPageHandler = async () => {
        console.log(match)
    }
    
    
    const imageList = images.map( (image, index) => {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <ImageCard  key={image.id} image={image}  id={image.id}/>
            </Suspense>
        )
    })
    return(
        <div className="image__content">
            <div className="image-list">
                {imageList}
            </div>
            <Link to={`/results/${pageNext}`}>
                <button 
                className="image-list__next"
                onClick={nextPageHandler}>Next</button>
            </Link>
        </div>
    )
};

export default ImageList;