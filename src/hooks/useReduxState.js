import { useSelector } from 'react-redux';
import authSelector from '../redux/selectors/authSelector';
import userIDSelector from '../redux/selectors/userIDSelector';


const useReduxState = () => {
  // AUTH //
  const isUserAuth = useSelector(authSelector.isAuthenticated);

  // USER_ID
  const userID = useSelector(userIDSelector.getUserID);

  return {
    isUserAuth,
    userID,
  };
};

export default useReduxState;