import React, { useState, useEffect } from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom';
import './imageCard.css';
import ImageDetails from '../ImageDetails/imageDetails';



const ImageCard = ({ image, id }) => {

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
    
    const  displaySingleImageHandler = () => {
       console.log(id)
        return (
            <Router>
                <Switch>
                    <Route
                    path = '/results/:id'
                    render={() => <ImageDetails imageId={id} photographer={image.photographer}/>}
                    />
                </Switch>
            </Router>
        )
}
    return (
        <div 
            style={{'gridRowEnd': `span ${span}`}} 
            onClick={displaySingleImageHandler} 
            data-id={id}
        >
            <Link to={`/results/${id}`}>
                <img ref={imageRef} src={image.src.medium}/>
            </Link>
        </div>
    )
}

export default ImageCard