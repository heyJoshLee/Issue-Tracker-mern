import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost, updatePost } from '../../actions/posts';

const EditPost = ({ match, history}) => {

  const [formData, setFormData] = useState({
    title: "",
    body: ""
  })

  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPost(match.params.id));
  }, [])


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updatePost(match.params.id, formData));
    history.push(`posts/${post._id}`)
  }

  if (post && formData.title === "" && formData.body === "") {
    setFormData({
      title: post.title,
      body: post.body
    });
  }

  return (
      <div>
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
           <input type="submit" value="Save" className="btn btn-primary" />
        </form>

      </div>
  )
}

export default EditPost;