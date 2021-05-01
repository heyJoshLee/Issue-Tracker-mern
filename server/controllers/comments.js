import StickyMessage from '../models/stickyMessage.js';
import Issue from '../models/issue.js';
import User from '../models/user.js';
import Comment from '../models/comment.js';

export const createComment = async (req, res) => {
  const commentParams = req.body.commentParams;
  const { objectType, objectId } = req.params;
  try {
  const currentUser = await User.findById(req.user.id)
  const newComment = await new Comment({body: commentParams});
  newComment.userUsername = currentUser.username;
  newComment.objectType = objectType;
  newComment.objectId = objectId;
  await newComment.save();
  return res.status(200).json(newComment)

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error. The comment was not created."
    })
  }
}

// export const updatecomment = async (req, res) => {
//   const id = req.params.id;
//   const commentParams = req.body;
//   console.log(commentParams);
//   console.log("Looking for comment with id")
//   console.log(id)
//   try {
//     const comment = await comment.findByIdAndUpdate(id, commentParams, { new: true})
//     console.log("UPDATED comment")
//     console.log(comment)
//     res.status(200).json(comment);
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ message: "comment was not updated."});
//   }
// }


export const getComments = async (req, res) => {
  try {
    const { objectType, objectId } = req.params;
    let parentObject;
    if (objectType === "stickyMessage") {
      parentObject = await StickyMessage.findById(objectId);
    } else {
      parentObject = await Issue.findById(objectId);
    }
    const comments = await Comment.where({objectId: parentObject.id})
    res.status(200).json(comments);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message
    });
  }
}


export const deleteComment = async (req, res) => {
  const id = req.params.id;
  try {
    await Comment.findByIdAndRemove(id);
    res.status(200).json({ message: "Successfully deleted",  id: id});
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "comment was not delete."});
  }
}