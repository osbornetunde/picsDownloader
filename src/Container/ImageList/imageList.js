import React, { Suspense } from "react";
import { connect } from "react-redux";
import "./imageList.css";
import { Link } from "react-router-dom";
import {
  setPrevPage,
  setNextPage,
  setImages,
  makeRequest
} from "../../actions";
import Spinner from "../../Component/Spinner/Spinner";

const ImageCard = React.lazy(() =>
  import("../../Component/ImageCard/imageCard")
);

const ImageList = ({
  images,
  makeRequest,
  currentPage,
  typing,
  setNextPage,
  setPrevPage,
  setImages
}) => {
  const nextPageHandler = () => {
    setNextPage(currentPage);
    makeRequest(typing, currentPage);
    setImages([]);
  };

  const previousPageHandler = () => {
    setPrevPage(currentPage);
    makeRequest(typing, currentPage);
    setImages([]);
  };

  const imageList = images.map(image => {
    return (
      <Suspense key={image.id} fallback={<div>Loading...</div>}>
        <ImageCard
          image={image}
          id={image.id}
          photographer={image.photographer}
        />
      </Suspense>
    );
  });
  return (
    <div className="image__content">
      {images.length === 0 ? (
        <Spinner />
      ) : (
        <>
          <p
            style={{
              padding: "0",
              margin: "2rem auto",
              justifySelf: "center",
              fontWeight: "900"
            }}
          >
            Select An Image to Download
          </p>
          <div className="image-list">{imageList}</div>
          <div className="direction__buttons">
            {currentPage !== 1 ? (
              <Link to={`/results/${currentPage}`}>
                <button
                  className="image-list__prev"
                  onClick={() => previousPageHandler()}
                >
                  Previous
                </button>
              </Link>
            ) : (
              ""
            )}
            <Link to={`/results/${currentPage}`}>
              <button
                className="image-list__next"
                onClick={() => nextPageHandler()}
              >
                Next
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  typing: state.typing,
  currentPage: state.currentPage,
  images: state.images
});

export default connect(
  mapStateToProps,
  { setNextPage, setPrevPage, setImages, makeRequest }
)(ImageList);
