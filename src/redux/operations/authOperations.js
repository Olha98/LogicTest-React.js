import  authAction  from '../action/authAction';
import axios from 'axios';



axios.defaults.baseURL = 'http://localhost:8080';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const userRegistration = credentials => dispatch => {
  console.log('dispatch userRegistration');
  dispatch(authAction.registrationRequest());

  return axios
    .post('/api/v1/auth/sign-up', credentials)
    .then(res => {
      dispatch(authAction.registrationSuccess(res.data));
    })
    .catch(err => {
      dispatch(authAction.registrationError(err));
      return new Error(err);
    });
};

const userLogin = credentials => dispatch => {
  dispatch(authAction.loginRequest());
  return axios
    .post('/api/v1/auth/sign-in', credentials)
    .then(res => {
      token.set(res.data.token);
      dispatch(authAction.loginSuccess(res.data));
    })
    .catch(err => {
      dispatch(authAction.loginError(err));
      return new Error(err);
    });
};


export default {
  token,
  userRegistration,
  userLogin,
};
