// import React from 'react';
// import Nav from 'react-bootstrap/Nav';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export const Header = () => {
//   return (
//     <Nav fill variant="tabs" defaultActiveKey="/home">
//       <Nav.Item>
//         <Nav.Link href="/home">Active</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="link-2">Link</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="disabled" disabled>
//           Disabled
//         </Nav.Link>
//       </Nav.Item>
//     </Nav>
//   );
// };

  
import React from 'react';
import { HeaderContainer, UserInfoWrapper } from './headerStyle';
import useReduxState from '../../hooks/useReduxState';
import { NavLink } from 'react-router-dom';
import { mainRoute } from '../../assets/routes/routes';
// import { mainRoute } from '../../../assets/routes/routes';


export const Header = ({ showNavigation, isNavigationOn }) => {
  const { isUserAuth } = useReduxState();


  return (
    <HeaderContainer>
      {isUserAuth && <NavLink to={mainRoute.path}>Profile</NavLink>}
      <UserInfoWrapper>
        {!isUserAuth && 
        <button>Регистрация</button>}
      </UserInfoWrapper>
    </HeaderContainer>
  );
};


