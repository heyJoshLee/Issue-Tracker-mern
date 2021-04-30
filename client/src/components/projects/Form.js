import React, {useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProject } from '../../actions/projects';
import jQuery from 'jquery';
import { Plus } from 'react-bootstrap-icons';

const Form = () => {

  const dispatch = useDispatch();
  const org = useSelector(state => state.organization)
  const [formData, setFormData] = useState({
    title: ""
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      title: ""
    });
    dispatch(createProject(formData, org._id))
    jQuery("#newProjectFormCloseButton").click();
  }

  return (
    <div>
      <button type="button" className="mt-4 btn btn-primary btn-block" data-toggle="modal" data-target="#newProject">
        <Plus size={32} /> New Project
      </button>

      <div className="modal fade" id="newProject" tabIndex="-1" role="dialog" aria-labelledby="newProjectLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="newProjectLabel">New Project</h5>
              <button id="newProjectFormCloseButton" type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input onChange={(e) => setFormData({ ...formData, title: e.target.value})} value={formData.title}className="form-control" id="email" aria-describedby="title"/>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Create Project</button>
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