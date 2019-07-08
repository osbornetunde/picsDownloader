import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import typing from "./typing";
import currentPage from "./currentPage";
import images from "./images";
import selectedImage from "./selectedImage";
import photographer from "./setPhotographer";

const persistConfig = {
  key: "root",
  storage: storage,
  // stateReconciler: autoMergeLevel2
  // whitelist: ["images"]
  blacklist: ["currentPage"]
};

const rootReducer = combineReducers({
  typing,
  currentPage,
  images,
  selectedImage,
  photographer
});

export default persistReducer(persistConfig, rootReducer);
