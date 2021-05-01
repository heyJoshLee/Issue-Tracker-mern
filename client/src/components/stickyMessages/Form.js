import React, {useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStickyMessage } from '../../actions/stickyMessages';
import { Plus } from 'react-bootstrap-icons';
import jQuery from 'jquery';

const Form = ({type}) => {
  const dispatch = useDispatch();
  const organization = useSelector(state => state.organization)
  const project = useSelector(state => state.project)

  const [formData, setFormData] = useState({
    title: "",
    body: ""
  });


  let objectType = type === "organization" ? organization : project;

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createStickyMessage(formData, type, objectType._id))
    setFormData({
      title: "",
      body: ""
    });
    jQuery("#newStickyMessageFormCloseButton").click();
  }

  return (
    <div>
      <button type="button" className="mt-4 btn btn-primary btn-block btn-secondary" data-toggle="modal" data-target="#newStickyMessage">
       <Plus size={32} />New Sticky Message
      </button>
      <div className="modal fade" id="newStickyMessage" tabIndex={-1} role="dialog" aria-labelledby="newStickyMessageLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="newStickyMessageLabel">New Sticky Message</h5>
              <button id="newStickyMessageFormCloseButton" type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                  <div id="textarea"></div>                
                  <textarea onChange={(e) => setFormData({ ...formData, body: e.target.value})} value={formData.body} className="form-control" id="email" aria-describedby="title"></textarea>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Create Sticky Message</button>
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