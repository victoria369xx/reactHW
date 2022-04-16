import {auth} from '../../firebase/index';

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const SIGNUP_USER = "SIGNUP_USER";

export const signUpUser = (user) => ({
    type: "SIGNUP_USER",
    payload: user
})

export const signUpUserThunk = (email, password) => async (dispatch) => {
    try {

     const user = await auth.signInWithEmailAndPassword(email, password); 
     dispatch(signUpUser(user))

    } catch (e) {
        console.log(e)
    }
}

export const logInUser = (user) => ({
    type: LOGIN_USER,
    payload: user
});

export const logOutUser = () => ({
    type: LOGOUT_USER,
});


export const initAuthAction = (dispatch) => {
    auth.onAuthStateChanged((user)=> {
        if (user){
            dispatch(logInUser(user))
        } else {
            dispatch(logOutUser())
        }
    })
};

