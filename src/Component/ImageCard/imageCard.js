import React, { useState, useEffect } from 'react';
import { Link, Redirect, withRouter} from 'react-router-dom';
import './imageCard.css';
import store from "../../store";
import { setSelectedImage, setPhotographer } from '../../actions';
import ImageDetails from "../ImageDetails/imageDetails"
// import pexels from "../../api/pexels";



const ImageCard = ({ image, id, photographer }) => {

    
    const { currentPage } = store.getState();

    const [span, setSpan] =useState(0);
    const imageRef = React.createRef();


    useEffect(() => {
        imageRef.current.addEventListener('load', setSpans)
    }, [])

    const setSpans = () => {
        const height = imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        setSpan(spans)
    }
    
    const  displaySingleImageHandler =  () => {
       store.dispatch(setSelectedImage(id))
       store.dispatch(setPhotographer(photographer))
    //    return <Redirect to='/results/:page/:id' />
    //    history.push(`/results/${currentPage}/${id}`)
}


    return (
        <div 
            style={{'gridRowEnd': `span ${span}`}} 
            onClick={displaySingleImageHandler} 
        >
            <Link to={`/results/${currentPage}/${id}`}>
                <img ref={imageRef} src={image.src.small} alt={image.id} />
            </Link>
        </div>
    )
}

export default withRouter(ImageCard)