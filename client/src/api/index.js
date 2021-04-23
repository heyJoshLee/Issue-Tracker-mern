import axios from 'axios';


// set token
let token = JSON.parse(localStorage.getItem('auth'))?.token;
let config = null;
if (token) {
  config = { 
    headers: { 
      "x-auth-token": token
    }
  }
} 

const BASEURL = 'http://localhost:5000';

const postsURL =`${BASEURL}/posts`;

const logInURL = `${BASEURL}/auth/login`;

const usersURL = `${BASEURL}/users`

export const fetchPosts = () => axios.get(postsURL);

export const fetchPost = (postId) => axios.get(`${postsURL}/${postId}`);

export const createPost = (newPost) => axios.post(postsURL, newPost, config);

export const deletePost = (postId) => axios.delete(`${postsURL}/${postId}`, config);

export const logIn = (logInData) => axios.post(logInURL, logInData);

export const fetchLoggedInUser = (userId) => axios.get(`${usersURL}/${userId}`);

export const updateUser = (userId, userParams) => axios.patch(`${usersURL}/${userId}`, userParams, config)

export const createUser = (userParams) => axios.post(usersURL, userParams);
