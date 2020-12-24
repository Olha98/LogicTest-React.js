import { useSelector } from 'react-redux';
import authSelector from '../redux/selectors/authSelector';


const useReduxState = () => {
  // AUTH //
  const isUserAuth = useSelector(authSelector.isAuthenticated);


  return {
    isUserAuth
  };
};

export default useReduxState;