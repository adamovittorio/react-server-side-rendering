import { combineReducers } from 'redux';

import users from './usersReducer';
import admins from './adminsReducer';
import auth from './authReducer';

export default combineReducers({
  auth,
  users,
  admins,
});
