import React, { useState } from 'react';
import './imageCard.css';



const ImageCard = ({ image }) => {
    console.log(image)
    return (
        <div>
            <img src={image.src.medium}/>
        </div>
    )
}

export default ImageCard