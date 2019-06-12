import { combineReducers } from "redux";
import typing from "./typing";
import currentPage from "./currentPage";
import images from "./images";
import selectedImage from "./selectedImage";
import photographer from "./setPhotographer";

export default combineReducers({
  typing,
  currentPage,
  images,
  selectedImage,
  photographer
});
