import React, { useState, useEffect } from 'react';
import './imageCard.css';



const ImageCard = ({ image }) => {

    const [span, setSpan] =useState(0);
    const imageRef = React.createRef();

    useEffect(() => {
        imageRef.current.addEventListener('load', setSpans)
    }, [])

    const setSpans = () => {
        const height = imageRef.current.clientHeight;

        const span = Math.ceil(height / 10);

        setSpan(span)
    }
    // console.log(image)
    return (
        <div style={{'gridRowEnd': `span ${span}`}}>
            <img ref={imageRef} src={image.src.medium}/>
        </div>
    )
}

export default ImageCard