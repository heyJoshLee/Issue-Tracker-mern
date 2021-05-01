import Project from '../models/project.js';
import Organization from '../models/organization.js';
import User from '../models/user.js';
import StickyMessage from '../models/stickyMessage.js';



export const createStickyMessage = async (req, res) => {
  const stickyMessageParams = req.body.stickyMessageParams;
  console.log(req.body)
  console.log(req.params)
  const { objectType, objectId } = req.params;
  try {
    console.log(req.params)
    const currentUser = await User.findById(req.user.id)
    const newStickyMessage = await new StickyMessage(stickyMessageParams);
    newStickyMessage.userUsername = currentUser.username;
    newStickyMessage.objectType = objectType;
    newStickyMessage.objectId = objectId;

    await newStickyMessage.save();
    console.log(newStickyMessage)
    return res.status(200).json(newStickyMessage)

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error. The stickyMessage was not created."
    })
  }
}

export const updateStickyMessage = async (req, res) => {
  const id = req.params.id;
  const stickyMessageParams = req.body;
  console.log(stickyMessageParams);
  console.log("Looking for stickyMessage with id")
  console.log(id)
  try {
    const stickyMessage = await StickyMessage.findByIdAndUpdate(id, stickyMessageParams, { new: true})
    console.log("UPDATED stickyMessage")
    console.log(stickyMessage)
    res.status(200).json(stickyMessage);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "stickyMessage was not updated."});
  }
}


export const getstickyMessages = async (req, res) => {
  try {
    const { objectType, objectId } = req.params;
    let parentObject;
    if (objectType === "organization") {
      console.log("GET ORG")
      parentObject = await Organization.findById(objectId);
    } else {
      parentObject = await Project.findById(objectId);
    }
    console.log(parentObject.id)
    const stickyMessages = await StickyMessage.where({objectId: parentObject.id})
    console.log(stickyMessages);
    res.status(200).json(stickyMessages);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message
    });
  }
}

// export const getstickyMessage = async (req, res) => {
//   const id = req.params.id;
//   console.log("Looking for stickyMessage with id")
//   console.log(id)
//   try {
//     const stickyMessage = await stickyMessage.findById(id)
//     console.log("GOT stickyMessage")
//     console.log(stickyMessage)
//     res.status(200).json(stickyMessage);
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ message: "stickyMessage was not created."});
//   }
// }

export const deleteStickyMessage = async (req, res) => {
  const id = req.params.id;
  try {
    await StickyMessage.findByIdAndRemove(id);
    res.status(200).json({ message: "Successfully deleted",  id: id});
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "stickyMessage was not delete."});
  }
}