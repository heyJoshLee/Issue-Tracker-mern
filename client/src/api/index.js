import axios from 'axios';

// set token if it's in localStorage
let token = JSON.parse(localStorage.getItem('auth'))?.token;
let configFromLocalStorage = null;
if (token) {
  configFromLocalStorage = { 
    headers: { 
      "x-auth-token": token
    }
  }
} 

const BASEURL = 'http://localhost:5000';

const projectsURL =`${BASEURL}/projects`;
const organizationsURL =`${BASEURL}/organizations`;
const logInURL = `${BASEURL}/auth/login`;
const usersURL = `${BASEURL}/users`;
const stickyMessagesURL = `${BASEURL}/stickyMessages`;
const commentsURL = `${BASEURL}/comments`;



// Projects

export const fetchProjects = (orgId) => {
  return axios.get(`${organizationsURL}/${orgId}/projects`);
}

export const createProject = (newProject, orgId, userToken = token) =>  {
  console.log("URL")
  console.log(`${organizationsURL}/${orgId}/projects`)
  return axios.post(`${organizationsURL}/${orgId}/projects`, newProject, {
    headers: { 
      "x-auth-token": userToken
    }
  });
}


export const fetchProject = (orgId, projectId) =>  { 
  return axios.get(`${organizationsURL}/${orgId}/projects/${projectId}`);
}


export const updateProject = (projectId, postParams, userToken = token) => {
  return axios.patch(`${projectsURL}/${projectId}`, postParams, {
    headers: { 
      "x-auth-token": userToken
    }
  })
}

export const deleteProject = (projectId, userToken = token) =>  {
  return axios.delete(`${projectsURL}/${projectId}`, {
    headers: { 
      "x-auth-token": userToken
    }
  });
}


// Organizations
export const fetchOrganizations = (userToken = token) => {
  return axios.get(organizationsURL, {
    headers: { 
      "x-auth-token": userToken
    }
  });
} 

export const createOrganization = (newOrganization, userToken = token) =>  {
  return axios.post(organizationsURL, newOrganization, {
    headers: { 
      "x-auth-token": userToken
    }
  });
}


export const fetchOrganization = (organizationId, userToken = token) => {
  return axios.get(`${organizationsURL}/${organizationId}`, {
    headers: { 
      "x-auth-token": userToken
    }
  });
}


export const updateOrganization = (organizationId, organizationParams, userToken = token) => {
  return axios.patch(`${organizationsURL}/${organizationId}`, organizationParams, {
    headers: { 
      "x-auth-token": userToken
    }
  })
}

export const deleteOrganization = (organizationId, userToken = token) =>  {
  return axios.delete(`${organizationsURL}/${organizationId}`, {
    headers: { 
      "x-auth-token": userToken
    }
  });
}



// Users

export const logIn = (logInData) => axios.post(logInURL, logInData);

export const fetchLoggedInUser = (userId) => axios.get(`${usersURL}/${userId}`);

export const updateUser = (userId, userParams, config = configFromLocalStorage) => axios.patch(`${usersURL}/${userId}`, userParams, config)

export const createUser = (userParams) => axios.post(usersURL, userParams);


// StickyMessages

export const fetchStickyMessages = (objectType, objectId, userToken = token) => {
  return axios.get(`${stickyMessagesURL}/${objectType}/${objectId}`, {
    headers: { 
      "x-auth-token": userToken
    }
  });
}

export const createStickyMessage = (newStickyMessage, objectType, objectId, userToken = token) =>  {
  return axios.post(`${stickyMessagesURL}/${objectType}/${objectId}`, {
    stickyMessageParams: newStickyMessage,
    objectType, 
    objectId
  }, {
    headers: { 
      "x-auth-token": userToken
    }
  });
}

export const updateStickyMessage = (stickyMessageId, stickyMessageParams, userToken = token) => {
  return axios.patch(`${stickyMessagesURL}/${stickyMessageId}`, stickyMessageParams, {
    headers: { 
      "x-auth-token": userToken
    }
  })
}

export const deleteStickyMessage = (stickyMessageId, userToken = token) =>  {
  return axios.delete(`${stickyMessagesURL}/${stickyMessageId}`, {
    headers: { 
      "x-auth-token": userToken
    }
  });
}



// Issues

export const fetchIssues = (organizationId, projectId, userToken = token) => {
  return axios.get(`${BASEURL}/organizations/${organizationId}/projects/${projectId}/issues`, {
    headers: { 
      "x-auth-token": userToken
    }
  });
}
export const createIssue = (organizationId, projectId, newIssue, userToken = token) =>  {
  return axios.post(`${BASEURL}/organizations/${organizationId}/projects/${projectId}/issues`, {
    issueParams: newIssue
  }, {
    headers: { 
      "x-auth-token": userToken
    }
  });
}

export const deleteIssue = (organizationId, projectId, issueId, userToken = token) =>  {
  return axios.delete(`${BASEURL}/organizations/${organizationId}/projects/${projectId}/issues/${issueId}`, {
    headers: { 
      "x-auth-token": userToken
    }
  });
}

export const updateIssue = (organizationId, projectId, issueId, issueParams, userToken = token) =>  {
  return axios.patch(`${BASEURL}/organizations/${organizationId}/projects/${projectId}/issues/${issueId}`, {
    issueParams: issueParams
  }, {
    headers: { 
      "x-auth-token": userToken
    }
  });
}


// Comments

export const fetchComments = (objectType, objectId, userToken = token) => {
  return axios.get(`${commentsURL}/${objectType}/${objectId}`, {
    headers: { 
      "x-auth-token": userToken
    }
  });
}

export const createComment = (newComment, objectType, objectId, userToken = token) =>  {
  return axios.post(`${commentsURL}/${objectType}/${objectId}`, {
    commentParams: newComment,
    objectType, 
    objectId
  }, {
    headers: { 
      "x-auth-token": userToken
    }
  });
}

export const deleteComment = (commentId, userToken = token) =>  {
  return axios.delete(`${commentsURL}/${commentId}`, {
    headers: { 
      "x-auth-token": userToken
    }
  });
}