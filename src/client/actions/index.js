export const FETCH_USERS = 'fetch_users';

// api come from redux-thunk withExtraArgument
export const fetchUsers = () => async (dispatch, getState, api) => {
  dispatch({ type: FETCH_USERS, payload: await api.get('/users') });
};

export const FETCH_CURRENT_USER = 'fetch_current_user';

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  dispatch({ type: FETCH_CURRENT_USER, payload: await api.get('/current_user') });
};

export const FETCH_ADMINS = 'fetch_admins';

export const fetchAdmins = () => async (dispatch, getState, api) => {
  dispatch({ type: FETCH_ADMINS, payload: await api.get('/admins') });
};
