import { SET_IMAGE_PHOTOGRAPHER } from "../constants/action-type";

export default function SetSelectedImage(state = null, action) {
  switch (action.type) {
    case SET_IMAGE_PHOTOGRAPHER:
      return action.payload;
    default:
      return state;
  }
}
