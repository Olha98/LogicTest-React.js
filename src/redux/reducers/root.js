import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';


export const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'username', 'id'],
};

const root = combineReducers({
  auth: persistReducer(persistAuthConfig, authReducer),
  // user: userReducer,
  // error: errorReducer,
});

export default root;