import { usersAPI } from "./../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FECHING = "TOGGLE_IS_FECHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROOGRESS";

let initialState = {
  users: [],
  pageSize: 3,
  currentPage: 1,
  totalUsersCount: 0,
  isFeching: true,
  followingInProgress: [],
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((userData) => {
          if (userData.id === action.userId) {
            return { ...userData, followed: true };
          }
          return userData;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((userData) => {
          if (userData.id === action.userId) {
            return { ...userData, followed: false };
          }
          return userData;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };
    case TOGGLE_IS_FECHING:
      return { ...state, isFeching: action.isFeching };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFeching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(
              (userId) => userId !== action.userId
            ),
      };
    default:
      return state;
  }
};

const followSuccess = (userId) => ({ type: FOLLOW, userId });
const unFollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
const setUsers = (users) => ({ type: SET_USERS, users });
const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
const toggleIsFeching = (isFeching) => ({ type: TOGGLE_IS_FECHING, isFeching });
const toggleFollowingProgress = (isFeching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFeching, userId });

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFeching(true));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setCurrentPage(currentPage));
      dispatch(toggleIsFeching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.setFollow(userId).then((resultCode) => {
      if (resultCode === 0) {
        dispatch(followSuccess(userId))
      }
      dispatch(toggleFollowingProgress(false, userId))
    });
  };
};

export const unFollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.setUnFollow(userId).then((resultCode) => {
      if (resultCode === 0) {
        dispatch(unFollowSuccess(userId))
      }
      dispatch(toggleFollowingProgress(false, userId))
    });
  };
};

export default usersReduser;
