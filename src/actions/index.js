import { 
    SET_TYPING_VALUE, 
    SET_NEXT_PAGE, 
    SET_IMAGES, 
    SET_PREV_PAGE, 
    SET_IMAGE_ID,
    SET_IMAGE_PHOTOGRAPHER} from "../constants/action-type";

export const setTypingValue = (value) => ({
    type: SET_TYPING_VALUE,
    payload: value
});

export const setNextPage = (num) => ({
    type: SET_NEXT_PAGE,
    payload: num
});

export const setPrevPage = (num) => ({
    type: SET_PREV_PAGE,
    payload: num
});

export const setImages = term => ({
    type: SET_IMAGES,
    payload: term
});

export const setSelectedImage = id => ({
    type: SET_IMAGE_ID,
    payload: id
})

export const setPhotographer = photographer => ({
    type: SET_IMAGE_PHOTOGRAPHER,
    payload: photographer

})

