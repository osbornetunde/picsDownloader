import React, {useState, useEffect } from 'react';
import './imageList.css';
import ImageCard from '../../Component/ImageCard/imageCard';



const ImageList = ({ images }) => {
    
    
    const imageList = images.map( image => {
        return <ImageCard  key={image.id} image={image} />
    })
    return <div className="image-list">{imageList}</div>
};

export default ImageList;