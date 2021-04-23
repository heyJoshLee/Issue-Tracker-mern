import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, deletePost } from '../../../actions/posts';
import { Trash, PencilSquare } from 'react-bootstrap-icons';

const Post = ({ match }) => {

  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getPost(match.params.id));
  }, [])


  const handleDelete = () => {
    const confirm = window.confirm("Are you sure you want to delete this post?");
    if (confirm) {
      dispatch(deletePost(post._id))
    }
  }

  const renderAuthorButtons = () => {
    if (auth && post.userUsername === auth.user.username) {
      return <div className="float-right">
                <Trash onClick={handleDelete} className="hover mr-3" />
                <Link to={`/posts/${post._id}/edit`}><PencilSquare className="hover"/></Link> 
              </div>
    }
  }

  return (
    <div className="post-page"> 
    {post && (
      <div>
        {renderAuthorButtons()}
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
      )}
      </div>

  )
}

export default Post;