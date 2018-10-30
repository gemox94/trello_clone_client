import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authorizationActions from '../actions/authorization';

import auth from './authorization'
// import transactions from './transactions';
// import transactionModal from './transactionModal';

const { CREATED_USER_ACCOUNT } = authorizationActions.types;

export default combineReducers({
    auth,
    form: formReducer.plugin({
        signup: (state, action) => {
            switch(action.type) {
                case CREATED_USER_ACCOUNT:
                    return undefined;
                default:
                    return state;
            }
        },
        login: (state, action) => {
            switch (action.type) {
                case CREATED_USER_ACCOUNT:
                    return undefined;
                default: 
                    return state;
            }
        }
    }),
});
