
const SET_AUTHENTICATED = 'SET_AUTHENTICATED';
const GET_AUTHENTICATED = 'GET_AUTHENTICATED';
const REMOVE_AUTHENTICATED = 'REMOVE_AUTHENTICATED';
const CREATED_USER_ACCOUNT = 'CREATED_USER_ACCOUNT';

const setAuthenticated = (payload = {}) => ({ type: SET_AUTHENTICATED, payload });
const getAuthenticated = (payload = {}) => ({ type: GET_AUTHENTICATED, payload });
const removeAuthenticated = (payload = {}) => ({ type: REMOVE_AUTHENTICATED, payload });
const createdUserAccount = (payload = {}) => ({ type: CREATED_USER_ACCOUNT, payload });

export default {
    types: {
        SET_AUTHENTICATED,
        GET_AUTHENTICATED,
        REMOVE_AUTHENTICATED,
        CREATED_USER_ACCOUNT,
    },
    creators: {
        setAuthenticated,
        getAuthenticated,
        removeAuthenticated,
        createdUserAccount,
    },
};
