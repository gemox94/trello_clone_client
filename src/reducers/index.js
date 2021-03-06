import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authorizationActions from '../actions/authorization';
import projectActions from '../actions/projects';

import auth from './authorization'
import projects from './projects';

const { CREATED_USER_ACCOUNT } = authorizationActions.types;
const { NEW_PROJECT_CREATED, NEW_PROJECT_FAILED } = projectActions.types;

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
        },
        createProject: (state, action) => {
            switch (action.type) {
                case NEW_PROJECT_CREATED:
                    return undefined;

                case NEW_PROJECT_FAILED:
                    return undefined;

                default:
                    return state;
            }
        }
    }),
});
