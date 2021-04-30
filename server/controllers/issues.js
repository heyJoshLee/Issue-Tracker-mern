import Organization from '../models/organization.js';
import Project from '../models/project.js';
import Issue from '../models/issue.js';
import User from '../models/user.js';



export const createIssue = async (req, res) => {
  const issueParams = req.body.issueParams;
  console.log(req.body);
  console.log(req.params)
  try {
    const currentUser = await User.findById(req.user.id)
    const newIssue = await new Issue(issueParams);
    const project = await Project.findById(req.params.projectId);
    console.log(project)
    newIssue.projectProjectTitle = project.title;
    newIssue.userUsername = currentUser.username;
    await newIssue.save();
    return res.status(200).json(newIssue)
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error. The issue was not created."
    })
  }
}

export const updateIssue = async (req, res) => {
  const id = req.params.id;
  const issueParams = req.body.issueParams;
  try {
    const issue = await Issue.findByIdAndUpdate(id, issueParams, { new: true})
    console.log("UPDATED issue")
    console.log(issue)
    res.status(200).json(issue);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "issue was not updated."});
  }
}


export const getIssues = async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId);
    const projectName = project.name;
    const issues = await Issue.where({ projectProjectName: projectName});
    res.status(200).json(issues);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message
    });
  }
}

// export const getissue = async (req, res) => {
//   const id = req.params.id;
//   console.log("Looking for issue with id")
//   console.log(id)
//   try {
//     const issue = await issue.findById(id)
//     console.log("GOT issue")
//     console.log(issue)
//     res.status(200).json(issue);
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ message: "issue was not created."});
//   }
// }

export const deleteIssue = async (req, res) => {
  const id = req.params.id;
  console.log(req.params)
  try {
    await Issue.findByIdAndRemove(id);
    console.log("DELETED ITEM")
    res.status(200).json({ message: "Successfully deleted",  id: id});
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "issue was not delete."});
  }
}