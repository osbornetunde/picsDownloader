import { SET_NEXT_PAGE, SET_PREV_PAGE } from "../constants/action-type";

export default function setCurrentPage (state = 1, action){
    switch (action.type) {
        case SET_NEXT_PAGE:
            return action.payload + 1
        case SET_PREV_PAGE:
            return action.payload - 1
        
        default:
            return state;
    }
}