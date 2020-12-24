import React from 'react';
import Login from '../../components/Auth/Login/Login';
import Registration from '../../components/Auth/Registration/Registration';
import useReduxState from '../../hooks/useReduxState';
import { AuthContainer } from './AuthPageStyle';

const AuthPage = () => {
  const { userID } = useReduxState();
  return <AuthContainer>{userID ? <Login /> : <Registration />}</AuthContainer>;
};

export default AuthPage;
