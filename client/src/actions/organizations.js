import * as api from '../api';
import { FETCH_ORGANIZATIONS, FETCH_ORGANIZATION, CREATE_ORGANIZATION, DELETE_ORGANIZATION, UPDATE_ORGANIZATION} from '../types/index';
import { errorFlashMessage, addFlashMessage } from './helpers.js'; 


export const getOrganizations = () => async (dispatch, getState) => {
  try {
    const { data } = await api.fetchOrganizations(getState().auth.token);
    console.log(data); 
    dispatch({
      type: FETCH_ORGANIZATIONS,
      payload: data
    });
  } catch (error) {
    console.log(error.message);
    errorFlashMessage(error, dispatch, "danger");
  }
}

export const getOrganization= (organizationId) => async (dispatch, getState) => {
  try {
    const { data } = await api.fetchOrganization(organizationId, getState().auth.token);
    dispatch({
      type: FETCH_ORGANIZATION,
      payload: data
    })
  } catch (error) {
    console.log(error)
    errorFlashMessage(error, dispatch, "danger");
  }
}

export const createOrganization= (organization) => async (dispatch, getState) => {
  try {
    const { data } = await api.createOrganization(organization, getState().auth.token);
    console.log(data)

    dispatch({
      type: CREATE_ORGANIZATION,
      payload: data
    });
    addFlashMessage("Organization successfully created.", dispatch)
  } catch (error) {
    console.log(error)
    errorFlashMessage(error, dispatch, "danger");
  }
}

export const updateOrganization = (organizationId, organizationParams) => async (dispatch, getState) => {
  try {
  
    const { data } = await api.updateOrganization(organizationId, organizationParams, getState().auth.token);
    dispatch({
      type: UPDATE_ORGANIZATION,
      payload: data
    });
    addFlashMessage("Organization successfully updated.", dispatch)
  } catch (error) {
    console.log(error);
    errorFlashMessage(error, dispatch, "danger");
  }
}

export const deleteOrganization = (organizationId) => async (dispatch, getState) => {
  try {
    await api.deleteOrganization(organizationId, getState().auth.token);
    dispatch({
      type: DELETE_ORGANIZATION,
      payload: organizationId
    });
    addFlashMessage("Organization successfully deleted.", dispatch)
  } catch (error) {
    console.log(error);
    errorFlashMessage(error, dispatch, "danger");
  }
}