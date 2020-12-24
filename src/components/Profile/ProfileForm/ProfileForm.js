import React, { useState } from 'react';
import styled from 'styled-components';
import { useProfileForm } from '../hooks/useProfileForm';

const initialState = {
  name: '',
  info: '',
};

export const ProfileForm = () => {
  const [state, setState] = useState(initialState);

  const {
    onHandleChange,
    handleSubmit,
  } = useProfileForm(state, setState);

  return (
    <InfoForm onSubmit={handleSubmit}>
      <label>
        <p>Name</p>
        <input
          type="text"
          name="name"
          onChange={onHandleChange}
          value={state.name}
        />
      </label>
      <label>
        <p>Info</p>
        <input
          type="text"
          name="info"
          onChange={onHandleChange}
          value={state.info}
        />
      </label>
      <button type="submit">Add</button>
    </InfoForm>
  );
}

const InfoForm = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: row;
  & button {
    outline: none;
    margin: 10px 0px;
    padding: 5px;
    border-radius: 6px;
    width: 8%;
    background-image: linear-gradient(
      45deg,
      #6ab1d7 0%,
      #33d9de 50%,
      #002878 100%
    );
    background-position: 100% 0;
    background-size: 200% 200%;
    color: #fff;
    box-shadow: 0 16px 32px 0 rgba(0, 40, 120, 0.35);
    transition: 0.5s;
  }
  & button:hover {
    box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
    background-position: 0 0;
  }

  & p {
    margin: 10px 0px;
  }
`;

