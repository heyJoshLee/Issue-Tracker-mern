import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../actions/auth';

const LogIn = ({ history}) => {

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [formData, setFormData] = useState ({
    email: "",
    password: ""
  });

  // When auth changes, check to see if the user is logged in,
  // if so redirect to the home page
  useEffect(() => {
    if (auth) { history.push("/"); }
  }, [auth]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(logIn(formData)) 
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label htmlFor="email">Email address</label>
          <input onChange={(e) => setFormData({ ...formData, email: e.target.value})} value={formData.email} type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label htmlFor="password">Password</label>
          <input onChange={(e) => setFormData({ ...formData, password: e.target.value})} value={formData.password} type="password" class="form-control" id="password" placeholder="Password" />
        </div>
        <button type="submit" class="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
}

export default LogIn; 