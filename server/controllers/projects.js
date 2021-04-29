import Project from '../models/project.js';
import Organization from '../models/organization.js';



export const createProject = async (req, res) => {
  const projectParams = req.body;
  try {
    const newproject = await new Project(projectParams);
    
    // Get use to make 1M relationship
    const organization = await Organization.findById(req.params.id);
    // @ts-ignore
    newproject.organizationName = organization.name;

    await newproject.save();
    return res.status(200).json(newproject)

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error. The project was not created."
    })
  }
}

export const updateProject = async (req, res) => {
  const id = req.params.id;
  const projectParams = req.body;
  console.log(projectParams);
  console.log("Looking for project with id")
  console.log(id)
  try {
    const project = await Project.findByIdAndUpdate(id, projectParams, { new: true})
    console.log("UPDATED project")
    console.log(project)
    res.status(200).json(project);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "project was not updated."});
  }
}


export const getProjects = async (req, res) => {
  try {
    console.log(req.params.id)
    const org = await Organization.findById(req.params.id);
    console.log(org);
    const orgName = org.name;
    const projects = await Project.where({ organizationName: orgName})
    console.log('Got all projects.');
    console.log(projects);
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message
    });
  }
}

export const getProject = async (req, res) => {
  const id = req.params.id;
  console.log("Looking for project with id")
  console.log(id)
  try {
    const project = await Project.findById(id)
    console.log("GOT project")
    console.log(project)
    res.status(200).json(project);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "project was not created."});
  }
}

export const deleteProject = async (req, res) => {
  const id = req.params.id;
  try {
    await Project.findByIdAndRemove(id);
    res.status(200).json({ message: "Successfully deleted",  id: id});
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "project was not delete."});
  }
}