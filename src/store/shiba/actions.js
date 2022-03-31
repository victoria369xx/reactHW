import { shibaApi } from "../../api/endpoints/shibaApi";

export const SET_LOADING_SHIBA = "SET_LOADING_SHIBA";
export const SET_ERROR_SHIBA = "SET_ERROR_SHIBA";
export const SET_SHIBA_PIC = "SET_SHIBA_PIC";

export const setLoadingShiba = (isLoading)=> ({
    type: SET_LOADING_SHIBA,
    payload: isLoading
})

export const setErrorShiba = (error) => ({
    type: SET_ERROR_SHIBA,
    payload: error
})

export const setShibaPic = (picture) => ({
    type: SET_SHIBA_PIC,
    payload: picture
})

export const getShibaThunk = async (dispatch) => {
   dispatch(setLoadingShiba(true))

   try {
    const data =  await shibaApi.get()
    dispatch(setShibaPic(data))
   }
   catch(e) {
       dispatch(setErrorShiba(e))
   }

   dispatch(setLoadingShiba(false))
}