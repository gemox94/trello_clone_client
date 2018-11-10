
const FECTH_PROJECTS = 'FECTH_PROJECTS';
const SAVE_FETCHED_PROJECTS = 'SAVE_FETCHED_PROJECTS';
const ADD_NEW_PROJECT = 'ADD_NEW_PROJECT';
const NEW_PROJECT_CREATED = 'NEW_PROJECT_CREATED';
const NEW_PROJECT_FAILED = 'NEW_PROJECT_FAILED';

const fetchProjects = (payload = {}) => ({ type: FECTH_PROJECTS, payload });
const saveFetchedProjects = (payload = {}) => ({ type: SAVE_FETCHED_PROJECTS, payload });
const addNewProject = (payload = {}) => ({ type: ADD_NEW_PROJECT, payload });
const newProjectCreated = (payload = {}) => ({ type: NEW_PROJECT_CREATED, payload });
const newProjectFailed = (payload = {}) => ({ type: NEW_PROJECT_FAILED, payload });

export default {
    types: {
        FECTH_PROJECTS,
        SAVE_FETCHED_PROJECTS,
        ADD_NEW_PROJECT,
        NEW_PROJECT_CREATED,
        NEW_PROJECT_FAILED,
    },
    creators: {
        fetchProjects,
        saveFetchedProjects,
        addNewProject,
        newProjectCreated,
        newProjectFailed,
    },
};
