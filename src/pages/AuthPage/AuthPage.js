import React from 'react';
import Login from '../../components/Auth/Login/Login';
import Registration from '../../components/Auth/Registration/Registration';
import useReduxState from '../../hooks/useReduxState';

const AuthPage = () => {
  const { userID } = useReduxState();
  return <>{userID ? <Login /> : <Registration />}</>;
};

export default AuthPage;
