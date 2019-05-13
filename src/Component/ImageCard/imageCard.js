import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './imageCard.css';
import store from "../../store";
import { setSelectedImage, setPhotographer } from '../../actions';
// import pexels from "../../api/pexels";



const ImageCard = ({ image, id, photographer }) => {

    // const { currentPage } = store.getState();

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
    
    const  displaySingleImageHandler =  async () => {
       store.dispatch(setSelectedImage(id))
       store.dispatch(setPhotographer(photographer))
        
}
    return (
        <div 
            style={{'gridRowEnd': `span ${span}`}} 
            onClick={displaySingleImageHandler} 
        >
            <Link to={`/results/${id}`}>
                <img ref={imageRef} src={image.src.small} alt={image.id}/>
            </Link>
        </div>
    )
}

export default ImageCard