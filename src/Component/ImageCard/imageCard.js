import React, { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import FileSaver from "file-saver";
import axios from "axios";
import "./imageCard.css";
import history from "../../history";
// import { currentPage } from '../../actions'
// import store from "../../store";

const ImageDetails = lazy(() => import("../ImageDetails/imageDetails"));

const ImageCard = ({ image, id, photographer, currentPage }) => {
  const [showModal, setShowModal] = useState(false);

  const [span, setSpan] = useState(0);
  const imageRef = React.createRef();

  const fetchImage = async imageUrl => {
    const response = await axios({
      method: "GET",
      url: imageUrl,
      responseType: "blob"
    });

    FileSaver.saveAs(new Blob([response.data]));
  };

  useEffect(() => {
    imageRef.current.addEventListener("load", setSpans);
  }, []);

  const setSpans = () => {
    const height = imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    setSpan(spans);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    history.push(`/result/${currentPage}`);
  };

  const displaySingleImageHandler = () => {
    setShowModal(true);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Link
        to={`/results/${currentPage}/${id}`}
        style={{ gridRowEnd: `span ${span}`, position: "relative" }}
        onClick={() => displaySingleImageHandler()}
      >
        <img ref={imageRef} src={image.src.small} alt={image.id} />
      </Link>
      {showModal ? (
        <ImageDetails onClose={handleCloseModal}>
          <div className="Card">
            <div className="Card__image">
              <img
                src={image.src.original}
                alt={photographer}
                style={{ width: "fit-content", height: "10rem" }}
              />
            </div>
            <div className="Card__details">
              <p>
                Photographer:{" "}
                <em>
                  <strong>{`${photographer}`}</strong>
                </em>
              </p>
            </div>
            <span style={{ display: "flex", justifyContent: "space-between" }}>
              <button onClick={() => fetchImage(image.src.original)}>
                Download
              </button>
              <button
                onClick={handleCloseModal}
                style={{ backgroundColor: "red" }}
              >
                Close
              </button>
            </span>
            <hr />
          </div>
        </ImageDetails>
      ) : null}
    </Suspense>
  );
};

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage
  };
};

export default connect(mapStateToProps)(ImageCard);
