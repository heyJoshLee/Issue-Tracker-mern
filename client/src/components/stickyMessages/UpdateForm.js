import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateStickyMessage } from '../../actions/stickyMessages';

const UpdateForm = ({ stickyMessage, toggleEditMode }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: stickyMessage.title,
    body: stickyMessage.body
  });

  const handleSubmit = (e) =>  {
    e.preventDefault();
    toggleEditMode();
    dispatch(updateStickyMessage(stickyMessage._id, formData));
  }

  return (
    <div className="card card--active">
      <form onSubmit={handleSubmit} >
        <div className="row card-header">
          <div className="col-10">
              <input className="form-control" onChange={(e) => setFormData({ ...formData, title: e.target.value})} value={formData.title} />
          </div>
          <div className="col-2">
            <input type="submit" className="btn btn-primary" value="Save" />
          </div>
        </div>
          <div className="card-body">
            <textarea className="form-control" onChange={(e) => setFormData({ ...formData, body: e.target.value})} value={formData.body}></textarea>
          </div>
      </form>
    </div>
  )
}

export default UpdateForm
