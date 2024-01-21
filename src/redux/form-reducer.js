import { authApi } from "../api/api";

const SET_LOGIN_DATA = "SET-LOGIN-DATA";

let initialState = {
  email: null,
  password: null,
  isAuthorized: false,
  authUserProfile: null
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuthorized: true
      }
    case SET_AUTH_USER:
      return {
        ...state,
        authUserProfile: action.authUserProfile
      }
    default: 
      return state
  }
}

const setLoginData = (userData) => ({type: SET_LOGIN_DATA, userData})

export const authUser = () => { 
  return (dispatch) => {
    authApi.me().then((responce) => {
      if (responce.data.resultCode === 0) {
        let { id, login, email } = responce.data.data;
        dispatch(setUserData(id, login, email))
        authApi.getAuthUserProfile(id).then((data) => {
          if (data.resultCode === 0) {
            dispatch(setAuthUser(data))
          }
        });
      }
    });
}}

