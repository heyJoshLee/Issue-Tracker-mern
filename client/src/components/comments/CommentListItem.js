import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/comments';
import { Trash } from 'react-bootstrap-icons';

const CommentListItem = ({comment, deleteLocalComment}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const confirm = window.confirm("Are you sure you want to delete this issue?")
    if (confirm) { dispatch(deleteComment(comment._id))}
    deleteLocalComment(comment._id);
  }
  const renderAuthorButtons = () => {
    return <div className="float-right">
              <Trash onClick={handleDelete} className="hover mr-3" />
            </div>
  }
  return (
    <div className="card comment">
      <div className="card-body">
        <div className="row">
          <div className="col-10">
            <small><strong>{comment.userUsername}</strong> @ {comment.timestamp}</small>
          </div>
          <div className="col-2">
            {renderAuthorButtons()}
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <img className="rounded-circle comment__user-image" src="/temp-image.jpeg" alt=""/>
          </div>
          <div className="col-10">
            {comment.body}
          </div> 
        </div>
      </div>
    </div>
  )
}

export default CommentListItem;
