import projectsActions from '../actions/projects';

const initialState = {};

const projectsReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {

        /* case projectsActions.types.FECTH_PROJECTS: {
            return { ...state };
        } */

        case projectsActions.types.SAVE_FETCHED_PROJECTS: {
            const newState = {...state};
            return newState;
        }

        case projectsActions.types.ADD_NEW_PROJECT: {
            const { project } = payload;
            const newState = { ...state, [project.id]: project };
            return newState;
        }

        default:
            return state;
    }

};

export default projectsReducer;