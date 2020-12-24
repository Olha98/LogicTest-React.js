import userInfoConstants from '../constants/userInfoConstants';

const initialState = {
  info: {
    aboutMySelf: '',
    skills: '',
    projectsExperience: '',
    workExperience: '',
    contactsPhone: '',
  },
};

const user = (state = initialState.info, { type, payload }) => {
  switch (type) {
    case userInfoConstants.GET_CURRENT_USER_SUCCESS:
      return { ...state, ...payload };

    case userInfoConstants.UPDATE_USER_INFO_SUCCESS:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default user;
