import { LOGIN_USER, LOGOUT_USER, SIGNUP_USER } from "./actions"

const initialState = {
    user: null
}

export const userReducer = (state = initialState, action)=> {
    switch(action.type){
        case(LOGIN_USER): {
            return {
                user:action.payload
            }
        }

        case(LOGOUT_USER): {
            return {
                user: null
            }
        }

        case(SIGNUP_USER): {
            return {
                user: action.payload
            }
        }

        default : {
            return state
        }
    }
}