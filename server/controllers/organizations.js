import Organization from '../models/organization.js';
import User from '../models/user.js';

export const createOrganization = async (req, res) => {
  const organizationParams = req.body;
  

   try {
    const currentUser = await User.findById(req.user.id)
    const newOrganization = new Organization(organizationParams);
  
    await newOrganization.save();

    currentUser.organizationIds.push(newOrganization.id);
    currentUser.save();

     return res.status(200).json(newOrganization)
   } catch (error) {
     console.log(error);
     return res.status(500).json({
       message: "Error. The Organization was not created."
     })
   }
}

export const updateOrganization = async (req, res) => {
  const id = req.params.id;
  const organizationParams = req.body;
  console.log(organizationParams);
  console.log("Looking for Organization with id")
  console.log(id)
  try {
    const organization = await Organization.findByIdAndUpdate(id, organizationParams, { new: true})
    console.log("UPDATED organization")
    console.log(organization)
    res.status(200).json(organization);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "organization was not updated."});
  }
}


export const getOrganizations = async (req, res) => {
  try {
    const currentUser = await User.findById(req.user.id)
    
    let organizations = [];


    for(let i = 0; i < currentUser.organizationIds.length; i++) {
      let organization = await Organization.findById(currentUser.organizationIds[i]);
      organizations.push(organization);
     }
     console.log(organizations)


    res.status(200).json(organizations);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message
    });
  }
}

export const getOrganization = async (req, res) => {
  const id = req.params.id;
  console.log("Looking for org with id")
  console.log(id)
  try {
    const organization = await Organization.findById(id)
    console.log("GOT organization")
    console.log(organization)
    res.status(200).json(organization);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "organization was not created."});
  }
}

export const deleteOrganization = async (req, res) => {
  const id = req.params.id;
  try {
    await Organization.findByIdAndRemove(id);
    res.status(200).json({ message: "Successfully deleted",  id: id});
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Organization was not delete."});
  }
}