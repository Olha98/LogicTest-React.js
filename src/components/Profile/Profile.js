import React from 'react';
import { MainFormStyled } from './ProfileStyle';
import { ProfileForm } from './ProfileForm/ProfileForm';

export const Profile = () => {
 
  return (
    <>
      <MainFormStyled>
        <ProfileForm />
      </MainFormStyled>
    </>
  );
};

