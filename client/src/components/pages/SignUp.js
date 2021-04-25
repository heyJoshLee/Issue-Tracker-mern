import React, { useState, useEffect } from 'react';
import { createUser } from '../../actions/users';
import { useDispatch, useSelector } from 'react-redux';

const SignUp = ({ history }) => {

  const dispatch = useDispatch();
  // @ts-ignore
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (auth) { history.push("/"); }
  }, [auth]);

  const [formData, setFormData] = useState ({
    email: "",
    username: "",
    password: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createUser(formData));
  }

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input onChange={(e) => setFormData({ ...formData, email: e.target.value.trim()})} value={formData.email} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input onChange={(e) => setFormData({ ...formData, username: e.target.value.trim()})} value={formData.username} type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input onChange={(e) => setFormData({ ...formData, password: e.target.value.trim()})} value={formData.password} type="password" className="form-control" id="password" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp; 