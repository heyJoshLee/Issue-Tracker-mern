import React, { useState, useEffect } from 'react'
import UpdateForm from './UpdateForm';
import CommentsList from '../comments/CommentsList';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../actions/comments';
import { deleteIssue } from '../../actions/issues';
import { Trash, PencilSquare } from 'react-bootstrap-icons';

const IssueListItem = ({issue}) => {
  const dispatch = useDispatch();
  const org = useSelector(state => state.organization);
  const project = useSelector(state => state.project);
  const [editMode, setEditMode] = useState(false);

  const renderButton = () => {
    let buttonClass;
    let priorityText;
    switch(issue.priority) {
      case 1: 
        buttonClass = "primary";
        priorityText = "Low";
        break;
      case 2:
        buttonClass = "success";
        priorityText = "Medium";
        break;
      case 3:
        buttonClass = "warning";
        priorityText = "High";
        break;
      case 4: 
        buttonClass =  "danger";
        priorityText = "Urgent";
        break;
    }
    return (
      <button className={`btn btn-${buttonClass} mr-4`}>{priorityText}</button>
    )
  }

  const handleDelete = () => {
    const confirm = window.confirm("Are you sure you want to delete this issue?")
    if (confirm) { dispatch(deleteIssue(org._id, project._id, issue._id))}
  }

  const renderAuthorButtons = () => {
    return <div className="float-right">
              <PencilSquare className="hover mr-3" onClick={toggleEditMode} />
              <Trash onClick={handleDelete} className="hover mr-3" />
            </div>
  }

  const toggleEditMode = () => {setEditMode(!editMode);}

  if (editMode){
    return <UpdateForm 
            issue={issue} 
            editMode={editMode}
            toggleEditMode={toggleEditMode}
             />
  }
  return (
    <div classsName="issue-list-item">
      <div className="card">
        <div className="card-header" id={`heading-${issue._id}`}>
          <h5 className="mb-0">
            <button className="btn btn-link" data-toggle="collapse" data-target={`#collapse-${issue._id}`} aria-expanded="true" aria-controls={`collapse-${issue._id}`}>
            {renderButton()} {issue.title} 
            </button>
            <div className="float-right">
              {renderAuthorButtons()}
            </div>
          </h5>
        </div>
        <div id={`collapse-${issue._id}`} className="collapse" aria-labelledby={`heading-${issue._id}`} data-parent="#accordion-issues">
          <div className="card-body">
            {issue.body}
          </div>
          <CommentsList parent={issue} type="issue"/>
        </div>
      </div>
    </div>
  )
}

export default IssueListItem;
