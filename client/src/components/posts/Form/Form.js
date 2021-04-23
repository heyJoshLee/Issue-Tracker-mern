import React, {useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../../actions/posts';
import jQuery from 'jquery';

const Form = () => {

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    body: ""
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      title: "",
      body: ""
    });
    dispatch(createPost(formData))
    jQuery("#newPostFormCloseButton").click();
  }

  return (
    <div>
      <button type="button" className="mt-4 btn btn-primary btn-block" data-toggle="modal" data-target="#newPost">
        New Post
      </button>

      <div className="modal fade" id="newPost" tabIndex="-1" role="dialog" aria-labelledby="newPostLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="newPostLabel">New Post</h5>
              <button id="newPostFormCloseButton" type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input onChange={(e) => setFormData({ ...formData, title: e.target.value})} value={formData.title}className="form-control" id="email" aria-describedby="title"/>
                </div>
                <div className="form-group">
                  <label htmlFor="body">Body</label>
                  <textarea 
                  onChange={(e) => setFormData({ ...formData, body: e.target.value})}
                  value={formData.body} className="form-control" id="body" rows="3"></textarea>
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Create Post</button>
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