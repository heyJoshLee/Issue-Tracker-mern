import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../actions/auth';
const LogOut = ({ history }) => {

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(logOut());
    history.push("/login");
  }, [auth]);

  return (
    <div>Log out</div>
  )
}

export default LogOut;