import React from 'react';
import ProjectListItem from './ProjectListItem';
import { useSelector } from 'react-redux';

const ProjectsList = (props) => {
  const projects = useSelector(state => state.projects);
  if (!projects) { return <div>Loading...</div> }
  return (
    <div>
      <ul>
        {projects.map(project => {
          return <ProjectListItem key={project._id} project={project} />
        })}
      </ul>
    </div>
  )
}

export default ProjectsList;