import React, { useState, useEffect } from 'react';
import './imageDetails.css';
import pexels from '../../api/pexels';

const ImageDetails = (photographer, imageId) => {
    const [image, setImage] = useState()
    
    useEffect(() => { 
        const fetchImage = async () => {
        const response = await pexels.get(`v1/photos/${imageId}`);
            setImage(response)
        }
        fetchImage();
    }, []);

    console.log(image)
    return (
        <div className="card" >
            <div className="card__image">
                <img src={image} alt={photographer}/>
            </div>
            <div className="card__details">
                <p>photographer: `${photographer}</p>
            </div>
        </div>
    )
}

export default ImageDetails;