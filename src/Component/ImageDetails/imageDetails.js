import React, { useState } from 'react';
import './imageDetails.css';
import pexels from '../../api/pexels';
import store from "../../store";

const ImageDetails = ({selectedImage}) => {

    const { photographer } = store.getState();
    const [image, setImage] = useState()
    
    
        const fetchImage = async () => {
        const response = await pexels.get(`v1/photos/${selectedImage}`);
            setImage(response)
        }
   

    
    return (
        <div className="card" >
            <div className="card__image">
                <img src={image} alt={photographer}/>
            </div>
            <div className="card__details">
                <p>photographer: `${photographer}</p>
            </div>
            <button onClick={fetchImage}>Download</button>
        </div>
    )
}

export default ImageDetails;