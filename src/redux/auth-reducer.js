import { authApi } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";
const SET_AUTH_USER = "SET-AUTH-USER";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuthorized: false,
  authUserProfile: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuthorized: action.data.isAuthorized
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

const setUserData = (userId, login, email, isAuthorized) => ({type: SET_USER_DATA, data: {userId, login, email, isAuthorized}})
const setAuthUser = (authUserProfile) => ({type: SET_AUTH_USER, authUserProfile})

export const authUser = () => { 
  return (dispatch) => {
    authApi.me().then((responce) => {
      if (responce.data.resultCode === 0) {
        let { id, login, email } = responce.data.data;
        dispatch(setUserData(id, login, email, true))
        authApi.getAuthUserProfile(id).then((data) => {
          if (data.resultCode === 0) {
            dispatch(setAuthUser(data))
          }
        });
      }
    });
}}

export const loginUser = (email, password, rememberMe) => {
  return (dispatch) => {
    authApi.login(email, password, rememberMe).then((response) => {
      if(response.data.resultCode === 0) {
        dispatch(authUser())
      }
    })
  }
}

export const logout = () => {
  return (dispatch) => {
    authApi.logout().then((response) => {
      if(response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
      }
    })
  }
}

export default authReducer
