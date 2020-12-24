
import React from 'react';
import { HeaderContainer, UserInfoWrapper } from './headerStyle';
import useReduxState from '../../hooks/useReduxState';




export const Header = () => {
  const { isUserAuth } = useReduxState();


  return (
    <HeaderContainer>
      {isUserAuth && <h2>Create your CV</h2>}
      <UserInfoWrapper>
        {!isUserAuth && <h2>We ask you to authorize!</h2>}
      </UserInfoWrapper>
    </HeaderContainer>
  );
};


