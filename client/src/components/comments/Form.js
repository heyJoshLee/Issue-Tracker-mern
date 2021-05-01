import React, { useState } from 'react';
import { createComment } from '../../actions/comments';
import { useDispatch } from 'react-redux';

const Form = ({ parent, addLocalComment, type }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState("");

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const response = await dispatch(createComment(formData, type, parent._id ));
    setFormData("");
    addLocalComment(response);
  }
  return (
    <div className="comment-form">
      <form onSubmit={handleSubmit}>
      <textarea value={formData} onChange={(e) => setFormData(e.target.value) } placeholder="Write a new comment..." className="mt-3 form-control"></textarea>
      <input className="btn btn-success btn-block mt-2" type="submit" value="Post" />
      </form>
    </div>
  )
}

export default Form;
