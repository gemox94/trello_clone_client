import authActions from '../actions/authorization';

const initialState = {};

const authReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {

        case authActions.types.SET_AUTHENTICATED: {
            console.log(type);
            console.log(payload);
            const newState = { ...state };
            const { user } = payload;
            newState['isAuthenticated'] = true;
            newState['user'] = user;
            localStorage.setItem('user', JSON.stringify(newState));
            console.log(newState);
            return newState;
        }

        case authActions.types.REMOVE_AUTHENTICATED: {
            const newState = { ...state };
            delete newState['isAuthenticated'];
            delete newState['user'];
            localStorage.removeItem('user');
            return newState;
        }

        case authActions.types.CREATED_USER_ACCOUNT: {
            console.log(type);
            console.log(state);
            return state;
        }

        default:
            return state;
    }

};

export default authReducer;