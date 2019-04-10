import React, {useState, useEffect } from 'react';
import './imageList.css';
import ImageCard from '../../Component/ImageCard/imageCard';
import { Link } from 'react-router-dom'


const ImageList = ({ images, pageNext, match}) => {
        
    const nextPageHandler = async () => {
        console.log(match)
    }
    
    
    const imageList = images.map( image => {
        return <ImageCard  key={image.id} image={image} />
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