import { useState } from 'react';
import useReduxState from '../../../hooks/useReduxState';
import { useDispatch } from 'react-redux';
import action from '../../../redux/action/userInfoAction';

export const useProfileForm = (state, setState) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const { userInfo } = useReduxState();

  const onHandleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(action.updateUserInfoSuccess(state));
  };

  return {
    userInfo,
    onHandleChange,
    setValue,
    value,
    handleSubmit,
  };
};
