import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, updateUser } from '../../actions/users';

const Account = ({ history, match }) => {

  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState ({
    email: "",
    username: ""
  });

  useEffect(() => {
    if (auth) {
      dispatch(getUser(auth.user._id));
    } else {
      history.push('/login')
    }
  }, []);

  if (user && formData.username === "" && formData.email === "") {
    setFormData({
      email: user.email,
      username: user.username
    });
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser(auth.user._id, formData));
    history.push("/");
  }

  return (
    <div className="user-page">
      {user && (
        <div>
          <h1>Edit Profile</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input onChange={(e) => setFormData({ ...formData, email: e.target.value})} value={formData.email} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input onChange={(e) => setFormData({ ...formData, username: e.target.value})} value={formData.username} type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter email"/>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
          </form>
        </div> 
      )}
    </div>
  );
}


export default Account;