import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";

let initialState = {
  postData: [
    { id: 1, post: "How are you?", likesCount: 12 },
    { id: 2, post: "What is new?", likesCount: 5 },
  ],
  profile: null,
  status: ''
}

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postData: [...state.postData, {id: 3, post: action.postBody, likesCount: 0}],
        postText: ""
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_USER_STATUS: 
      return {
        ...state,
        status: action.status
      }
    default: 
      return state
  }
}

export const addPost = (postBody) => ({type: ADD_POST, postBody})
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfile = (userId) =>  {
  return (dispatch) => {
    return profileAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    })
  }
}

export const getUserStatus = (userId) =>  {
  return (dispatch) => {
    return profileAPI.getStatus(userId).then((response) => {
      dispatch(setUserStatus(response.data));
    })
  }
}

export const updateUserStatus = (status) => {
  return (dispatch) => {
    return profileAPI.updateStatus(status).then((response) => {
      if(response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
      }
    })
  }
}

export default profileReduser
