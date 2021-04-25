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

const postsURL =`${BASEURL}/posts`;

const logInURL = `${BASEURL}/auth/login`;

const usersURL = `${BASEURL}/users`



// Posts

export const fetchPosts = () => axios.get(postsURL);

export const fetchPost = (postId) => axios.get(`${postsURL}/${postId}`);

export const createPost = (newPost, userToken = token) =>  {
  return axios.post(postsURL, newPost, {
    headers: { 
      "x-auth-token": userToken
    }
  });
}

export const updatePost = (postId, postParams, userToken = token) => {
  return axios.patch(`${postsURL}/${postId}`, postParams, {
    headers: { 
      "x-auth-token": userToken
    }
  })
}


export const deletePost = (postId, userToken = token) =>  {
  console.log(userToken)
  return axios.delete(`${postsURL}/${postId}`, {
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

