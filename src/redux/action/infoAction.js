import constants from '../../redux/constants/infoConstants';

const addInfoRequest = () => ({
  type: constants.INFO_ADD_REQUEST,
});

const addInfoSuccess = info => ({
  type: constants.INFO_ADD_SUCCESS,
  payload: info,
});

const addInfoError = error => ({
  type: constants.INFO_ADD_ERROR,
  payload: error,
});

const removeInfosRequest = () => ({
  type: constants.INFO_REMOVE_REQUEST,
});

const removeInfosSuccess = id => ({
  type: constants.INFO_REMOVE_SUCCESS,
  payload: id,
});

const removeInfosError = error => ({
  type: constants.INFO_UPDATE_ERROR,
  payload: error,
});

const updateInfoRequest = () => ({
  type: constants.INFO_UPDATE_REQUEST,
});

const updateInfoSuccess = id => ({
  type: constants.INFO_UPDATE_SUCCESS,
  payload: id,
});

const updateInfoError = error => ({
  type: constants.INFO_UPDATE_ERROR,
  payload: error,
});

export default {
  addInfoRequest,
  addInfoSuccess,
  removeInfosSuccess,
  addInfoError,

  removeInfosRequest,
  removeInfosSuccess,
  removeInfosError,

  updateInfoRequest,
  updateInfoSuccess,
  updateInfoError,
};
