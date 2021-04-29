import React from 'react';
import { Link } from 'react-router-dom'
const OrganizationItem = ({ org }) => {
  return (
    <div className="card text-center">
      <div className="card-body">
      <h5 className="card-title">{org.name}</h5>
      <Link to={`/organizations/${org._id}`} className="btn btn-primary">Enter</Link>
      </div>
    </div>
  );
}

export default OrganizationItem;