import userInfoConstants from '../constants/userInfoConstants';

const updateUserInfoRequest = () => ({
  type: userInfoConstants.UPDATE_USER_INFO_REQUEST,
});

const updateUserInfoSuccess = user => ({
  type: userInfoConstants.UPDATE_USER_INFO_SUCCESS,
  payload: user,
});

const updateUserInfoError = error => ({
  type: userInfoConstants.UPDATE_USER_INFO_ERROR,
  payload: error,
});

const getCurrentUserRequest = () => ({
  type: userInfoConstants.GET_CURRENT_USER_REQUEST,
});

const getCurrentUserSuccess = user => ({
  type: userInfoConstants.GET_CURRENT_USER_SUCCESS,
  payload: user,
});

const getCurrentUserError = error => ({
  type: userInfoConstants.GET_CURRENT_USER_ERROR,
  payload: error,
});


export default {
  updateUserInfoRequest,
  updateUserInfoSuccess,
  updateUserInfoError,
   getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError
};
