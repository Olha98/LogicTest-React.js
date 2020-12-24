import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';
import userInfoReducer from './userInfoReducer';
import infoReducer from './infoReducer';


export const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'username', 'id'],
};

const root = combineReducers({
  auth: persistReducer(persistAuthConfig, authReducer),
  user: userInfoReducer,
  info: infoReducer,
});

export default root;