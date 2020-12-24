import axios from 'axios';
import userInfoAction from '../actions/userInfoAction';
import { authSelector } from '../selectors';
import { token } from './authOperations';

const updateUserInfo = userInfo => async (dispatch, getState) => {
  const persistedToken = authSelector.isAuthenticated(getState());
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(userInfoAction.updateUserInfoRequest());
  try {
    const result = await axios.put('/api/v1/users/savings-info', userInfo);
    dispatch(userInfoAction.updateUserInfoSuccess(result.data));
  } catch (err) {
    console.log(err.message);
    dispatch(userInfoAction.updateUserInfoError(err));
  }
};


const getCurrentUser = () => async (dispatch, getState) => {
  const persistedToken = authSelector.isAuthenticated(getState());
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(userInfoAction.getCurrentUserRequest());
  try {
    const res = await axios.get('/api/v1/users/current');
    dispatch(userInfoAction.getCurrentUserSuccess(res.data));
  } catch (error) {
    console.log(error.message);
    dispatch(userInfoAction.getCurrentUserError(error));
  }
};

export default {
  getCurrentUser,
  updateUserInfo,
};
