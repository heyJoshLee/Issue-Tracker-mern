import Post from '../models/post.js';



export const createPost = async (req, res) => {
  const postParams = req.body;
  try {
    const newPost = new Post(postParams);
    newPost.userId = "1";

    await newPost.save();
    return res.status(200).json({
      message: "Post successfully created",
      post: newPost
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error. The Post was not created."
    })
  }
}


export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    console.log('Got all posts.');
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message
    });
  }
}

export const getPost = async (req, res) => {
  const id = req.params.id;
  console.log("Looking for post with id")
  console.log(id)
  try {
    const post = await Post.findById(id)
    console.log("GOT Post")
    console.log(post)
    res.status(200).json(post);
  } catch (error) {
    console.log(error)
  }
}

export const deletePost = async (req, res) => {
  const id = req.params.id;

  try {
    await Post.findByIdAndRemove(id);
    res.status(200).json({ message: "Successfully deleted",  id: id});
  } catch (error) {
    console.log(error)
  }
}