import constants from '../constants/infoConstants';

const info = (state = [], { type, payload }) => {
  switch (type) {
    case constants.INFO_ADD_SUCCESS:
      return { ...state, ...payload };

    case constants.INFO_REMOVE_SUCCESS:
      const newState = state.filter(info => info.id !== payload.id);
      return { ...newState };

    case constants.INFO_UPDATE_SUCCESS:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default info;
