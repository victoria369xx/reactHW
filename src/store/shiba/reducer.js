import { SET_ERROR_SHIBA, SET_LOADING_SHIBA, SET_SHIBA_PIC } from "./actions";

const initialState = {
    pictureUrl: '',
    isLoading: false,
    error: null
}

export const shibaReducer = (state = initialState, action) => {
    switch(action.type) {

        case(SET_LOADING_SHIBA): {
            return {
                ...state,
                isLoading: action.payload
            }
        }

        case(SET_ERROR_SHIBA): {
            return {
                ...state,
                error: action.payload
            }
        }

        case(SET_SHIBA_PIC): {
            return {
                ...state,
                pictureUrl: action.payload
            }
        }
        

        default: 
        return state;
    }
}