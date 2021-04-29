import React from 'react';
import Form from './Form/Form';
import { useSelector } from 'react-redux';

import ProjectList from './ProjectList/ProjectList';

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