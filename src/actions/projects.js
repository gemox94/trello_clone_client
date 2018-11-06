
const FECTH_PROJECTS = 'FECTH_PROJECTS';
const SAVE_FETCHED_PROJECTS = 'SAVE_FETCHED_PROJECTS';
const ADD_NEW_PROJECT = 'ADD_NEW_PROJECT';

const fetchProjects = (payload = {}) => ({ type: FECTH_PROJECTS, payload });
const saveFetchedProjects = (payload = {}) => ({ type: SAVE_FETCHED_PROJECTS, payload });
const addNewProject = (payload = {}) => ({ type: ADD_NEW_PROJECT, payload });

export default {
    types: {
        FECTH_PROJECTS,
        SAVE_FETCHED_PROJECTS,
        ADD_NEW_PROJECT,
    },
    creators: {
        fetchProjects,
        saveFetchedProjects,
        addNewProject
    },
};
