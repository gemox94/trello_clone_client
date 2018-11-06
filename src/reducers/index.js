import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authorizationActions from '../actions/authorization';
import projectsActions from '../actions/projects';

import auth from './authorization'
import projects from './projects';

const { CREATED_USER_ACCOUNT } = authorizationActions.types;

export default combineReducers({
    auth,
    projects,
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
