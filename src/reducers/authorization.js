import authActions from '../actions/authorization';

const initialState = {};

const authReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {

        case authActions.types.GET_AUTHENTICATED: {
            return { ...state }
        }

        case authActions.types.SET_AUTHENTICATED: {
            const newState = { ...state };
            const { user } = payload;
            newState['isAuthenticated'] = true;
            newState['user'] = user;
            return newState;
        }

        case authActions.types.REMOVE_AUTHENTICATED: {
            const newState = { ...state };
            delete newState['isAuthenticated'];
            delete newState['user'];
            return newState;
        }

        default:
            return state;
    }

};

export default authReducer;