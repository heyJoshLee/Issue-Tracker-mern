import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateIssue } from '../../actions/issues';

const UpdateForm = ({issue, toggleEditMode}) => {
  const dispatch = useDispatch();
  const project = useSelector(state => state.project);
  const org = useSelector(state => state.organization);

  const [formData, setFormData] = useState({
    title: issue.title,
    body: issue.body,
    priority: issue.priority,
    status: issue.status
  });

  const handleSubmit = (e) =>  {
    e.preventDefault();
    toggleEditMode();
    dispatch(updateIssue(org._id, project._id, issue._id, formData));
  }

  return (
    <div className="card">
      <form>
        <div className="card-header" id={`heading-${issue._id}`}>
          <div className="row">
            {/* Slect box for status */}
            <div className="col-3" >
            <div className="form-group">
              <select 
              className="form-control" 
              id="prioritySelect"
              value={formData.priority}
              onChange={(e) => setFormData({ ...formData, priority: e.target.value})}>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
                <option value="4">Urgent</option>
              </select>
              </div>
            </div>
            {/* Slect box for status */}
            <div className="col-3" >
            <div className="form-group">
              <select 
              className="form-control" 
              id="statusSelect"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value})}>
              <option value="active">Active</option>
              <option value="complete">Complete</option>
              <option value="archived">Archived</option>
              </select>
              </div>
            </div>


               {/* Title */}
              <div className="col-4">
                <input name="title" className="form-control" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value})} />
              </div>
              <div className="col-2">
                <input onClick={(e) => handleSubmit(e)} type="submit" className="btn btn-success" value="Save" />
              </div>
          </div> {/*row */}
        </div>

        <div id={`collapse-${issue._id}`} className="collapse show" aria-labelledby={`heading-${issue._id}`} data-parent="#accordion-issues">
          <div className="form-group">
            <textarea className="form-control" value={formData.body} onChange={(e) => setFormData({ ...formData, body: e.target.value})} ></textarea>
          </div>
        </div>
      </form>
  </div>

  )
}

export default UpdateForm
