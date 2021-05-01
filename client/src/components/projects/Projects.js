import React from 'react';
import Form from './Form/Form';
import ProjectsList from './ProjectList/ProjectsList';
import { useSelector } from 'react-redux';

const Projects = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <div>
      {auth ? <Form /> : ""}
      <ProjectsList />
    </div> 
  )
}

export default Projects;