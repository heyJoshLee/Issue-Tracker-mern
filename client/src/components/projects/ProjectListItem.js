import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Trash, PencilSquare } from 'react-bootstrap-icons';


const ProjectListItem = ({project}) => {

  const auth = useSelector((state) => state.auth);
  const org = useSelector(state => state.organization);
  const dispatch = useDispatch();

  const handleDelete = () => {
    const confirm = window.confirm("Are you sure you want to delete this project?")
    if (confirm) {
    }
  }

  const renderAuthorButtons = () => {
    if (auth && project.userUsername === auth.user.username) {
      return <div className="float-right">
                <Trash onClick={handleDelete} className="hover mr-3" />
              </div>
    }
  }

  return (
    <div className="card mr-2">
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
          <Link to={`/organizations/${org._id}/projects/${project._id}`} className="btn btn-primary">Enter</Link> 
        { renderAuthorButtons() }
      </div>
    </div>
  )
}

export default ProjectListItem;