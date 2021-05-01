import * as api from '../api';
import { FETCH_PROJECTS, FETCH_PROJECT, CREATE_PROJECT, DELETE_PROJECT, UPDATE_PROJECT} from '../types/index';
import { errorFlashMessage, addFlashMessage } from './helpers.js'; 

export const getProjects = (orgId) => async (dispatch) => {
  try {
    const { data } = await api.fetchProjects(orgId);
    dispatch({
      type: FETCH_PROJECTS,
      payload: data
    });
  } catch (error) {
    console.log(error.message);
    errorFlashMessage(error, dispatch, "danger");
  }
}

export const getProject = (orgId, projectId) => async (dispatch) => {
  try {
    const { data } = await api.fetchProject(orgId, projectId);
    dispatch({
      type: FETCH_PROJECT,
      payload: data
    })
  } catch (error) {
    console.log(error)
    errorFlashMessage(error, dispatch, "danger");
  }
}

export const createProject = (project, orgId) => async (dispatch, getState) => {
  try {
    const { data } = await api.createProject(project, orgId, getState().auth.token);
    dispatch({
      type: CREATE_PROJECT,
      payload: data
    });
    addFlashMessage("Project successfully created.", dispatch)
  } catch (error) {
    console.log(error)
    errorFlashMessage(error, dispatch, "danger");
  }
}

export const updateProject = (projectId, postParams) => async (dispatch, getState) => {
  try {
    const { data } = await api.updateProject(projectId, postParams, getState().auth.token);
    dispatch({
      type: UPDATE_PROJECT,
      payload: data
    });
    addFlashMessage("Project successfully updated.", dispatch)
  } catch (error) {
    console.log(error);
    errorFlashMessage(error, dispatch, "danger");
  }
}

export const deleteProject = (projectId) => async (dispatch, getState) => {
  try {
    await api.deleteProject(projectId, getState().auth.token);
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId
    });
    addFlashMessage("Project successfully deleted.", dispatch)
  } catch (error) {
    console.log(error);
    errorFlashMessage(error, dispatch, "danger");
  }
}