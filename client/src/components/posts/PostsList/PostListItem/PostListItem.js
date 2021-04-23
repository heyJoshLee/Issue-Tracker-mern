import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Trash, PencilSquare } from 'react-bootstrap-icons';
import { deletePost } from '../../../../actions/posts';


const PostsListItem = ({post}) => {

  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch();

  const handleDelete = () => {
    const confirm = window.confirm("Are you sure you want to delete this post?")
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
    <li>
      <div className="card">
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <Link to={`posts/${post._id}`}>{post.title}</Link> 
          </blockquote>
          <small>{post.userUsername}</small>
          { renderAuthorButtons() }
        </div>
      </div>
    </li>
  )
}

export default PostsListItem;