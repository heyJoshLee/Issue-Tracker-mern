import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrganization } from '../../actions/organizations'
import { useHistory } from 'react-router-dom';

const Form = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const organization = useSelector((state) => state.organization);
  const [formData, setFormData] = useState({
    name: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(history);
    dispatch(createOrganization(formData));
    history.push("/organizations");
  }

  return (
    <div>
     <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input onChange={(e) => setFormData({ ...formData, name: e.target.value})} value={formData.name}className="form-control" id="email" aria-describedby="name"/>
        </div>
          <button type="submit" className="btn btn-primary">Create Organization</button>
      </form>
  </div>
  )
}

export default Form;
