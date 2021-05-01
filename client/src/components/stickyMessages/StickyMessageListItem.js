import React, { useState } from 'react';
import UpdateForm from './UpdateForm';
import CommentsList from '../comments/CommentsList';
import { useDispatch } from 'react-redux';
import { deleteStickyMessage } from '../../actions/stickyMessages';
import { Trash, PencilSquare } from 'react-bootstrap-icons';



const StickyMessageListItem = ({stickyMessage}) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const toggleEditMode = () => {setEditMode(!editMode);}
  
  const handleDelete = () => {
    const confirm = window.confirm("Are you sure you want to delete this sticky message?")
    if (confirm) { dispatch(deleteStickyMessage(stickyMessage._id))}
  }

  const renderAuthorButtons = () => {
  return <div className="float-right">
            <PencilSquare className="hover mr-3" onClick={toggleEditMode} />
            <Trash onClick={handleDelete} className="hover mr-3" />
          </div>
  }

  if (editMode){
    return <UpdateForm 
            stickyMessage={stickyMessage} 
            editMode={editMode}
            toggleEditMode={toggleEditMode}
             />
  }

  return (
    <div className="card">
    <div className="card-header" id="headingOne">
      <h5 className="mb-0">
        <button className="btn btn-link" data-toggle="collapse" data-target={`#collapse-${stickyMessage._id}`} aria-expanded="true" aria-controls={`collapse-${stickyMessage._id}`}>
              {stickyMessage.title} 
        </button>
        {renderAuthorButtons()}

      </h5>
    </div>

    <div id={`collapse-${stickyMessage._id}`} className="collapse" aria-labelledby="headingOne" data-parent="#sticky-message-accordion">
      <div className="card-body">
        {stickyMessage.body}
      </div>
      <CommentsList parent={stickyMessage} type="stickyMessage"/>
    </div>
  </div>
  )
}

export default StickyMessageListItem;