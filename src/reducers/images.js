import { SET_IMAGES } from "../constants/action-type";


export default function setImages(state=[], action){
    switch (action.type){
        case SET_IMAGES:
            return action.payload
        default:
            return state;
    }
}