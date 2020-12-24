import { useEffect, useState } from 'react';
import useReduxState from '../../../hooks/useReduxState';
import { useDispatch } from 'react-redux';
import action from '../../../redux/action/userInfoAction';


export const useProfileForm = ( state, setState) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const { userInfo } = useReduxState();

  const onHandleChange = e => {
    console.log(e.target.value);
    console.log(state);
    console.log(setState);
    setState({ ...state, [e.target.name]: e.target.value });
  };

   const handleSubmit = e => {
     e.preventDefault();
     console.log(e.target.value);
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
