import { SET_IMAGE_ID } from "../constants/action-type";

export default function SetSelectedImage(state = null, action){
    switch (action.type) {
        case SET_IMAGE_ID:
            return action.payload
        default:
            return state;
    }
}