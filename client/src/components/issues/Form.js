import React, {useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createIssue } from '../../actions/issues';
import { Plus } from 'react-bootstrap-icons';
import jQuery from 'jquery';

const Form = ({type}) => {
  const dispatch = useDispatch();
  // @ts-ignore
  const project = useSelector(state => state.project);
  // @ts-ignore
  const org = useSelector(state => state.organization);
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    priority: "1",
    status: "active"
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createIssue(org._id, project._id, formData));
    setFormData({
      title: "",
      body: "",
      priority: "1",
      status: "active"
    });
    jQuery("#newIssueFormCloseButton").click();
  }

  return (
    <div>
      <button type="button" className="mt-4 btn btn-primary btn-block" data-toggle="modal" data-target="#newIssue">
       <Plus size={32} />New Issue
      </button>
      <div className="modal fade" id="newIssue" tabIndex={-1} role="dialog" aria-labelledby="newIssueLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="newIssueLabel">New Issue</h5>
              <button id="newIssueFormCloseButton" type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input onChange={(e) => setFormData({ ...formData, title: e.target.value})} value={formData.title} className="form-control" id="email" aria-describedby="title"/>
                </div>
                <div className="form-group">
                  <label htmlFor="title">Body</label>
                  <textarea onChange={(e) => setFormData({ ...formData, body: e.target.value})} value={formData.body} className="form-control" id="email" aria-describedby="title"></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="statusSelect">Priority</label>
                  <select 
                  className="form-control" 
                  id="prioritySelect"
                  onChange={(e) => setFormData({ ...formData, priority: e.target.value})}>
                    <option value="1">Low</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                    <option value="4">Urgent</option>
                  </select>
                 </div>
                <div className="form-group">
                  <label htmlFor="statusSelect">Status</label>
                  <select onChange={(e) => setFormData({ ...formData, status: e.target.value})} className="form-control" id="statusSelect">
                    <option value="active">Active</option>
                    <option value="complete">Complete</option>
                    <option value="archived">Archived</option>
                  </select>
                 </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Create Issue</button>
                </div>
               </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Form;