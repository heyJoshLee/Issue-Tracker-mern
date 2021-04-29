import React from 'react';
import { useSelector } from 'react-redux';
import ProjectListItem from './ProjectListItem';

const ProjectsList = (props) => {
  const projects = useSelector(state => state.projects);
  if (!projects) { return <div>Loading...</div> }
  return (
    <div className="projects-list">
      {projects.map(project => {
        return <ProjectListItem project={project} />
      })}
    </div>
  )
}

export default ProjectsList;