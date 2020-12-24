import React, { useState } from 'react';
import { MainFormStyled } from './ProfileStyle';
import { useProfileForm } from './hooks/useProfileForm';
import { useDispatch } from 'react-redux';
import action from '../../redux/action/userInfoAction'
import { ProfileForm } from './ProfileForm/ProfileForm';

 const fields = {
   aboutMySelf: '',
   skills: '',
   projectsExperience: '',
   workExperience: '',
   contactsPhone: '',
 };

const placeHolder = 'Enter the data';

export const Profile = () => {
  const [state, setState] = useState(fields);
  const dispatch = useDispatch();

  const {
    userInfo,
    onHandleChange,
    setValue,
    value,
    handleSubmit,
  } = useProfileForm(state, setState);



  return (
    <>
      <MainFormStyled>
        <ProfileForm />
        {/* <form onSubmit={handleSubmit}>
          <div>
            <label>
              <span>About myself</span>
              <input
                type="string"
                name="aboutMySelf"
                value={state.aboutMySelf}
                placeholder={placeHolder}
                onChange={onHandleChange}
              />
            </label>

            <label>
              <span>Contacts phone</span>
              <input
                type="number"
                name="contactsPhone"
                value={state.contactsPhone}
                placeholder={placeHolder}
                onChange={onHandleChange}
              />
            </label>
            <label>
              <span>Skills</span>
              <input
                type="string"
                name="skills"
                value={state.skills}
                placeholder={placeHolder}
                onChange={onHandleChange}
              />
            </label>

            <label>
              <span>Projects Experience</span>
              <input
                type="string"
                name="projectsExperience"
                value={state.projectsExperience}
                placeholder={placeHolder}
                onChange={onHandleChange}
              />
            </label>

            <label>
              <span>Work Experience</span>
              <input
                type="string"
                name="workExperience"
                value={state.workExperience}
                placeholder={placeHolder}
                onChange={onHandleChange}
              />
            </label>
          </div>
          <button>Save</button>
        </form> */}
      </MainFormStyled>
    </>
  );
};

