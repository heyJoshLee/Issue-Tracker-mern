import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Trash } from 'react-bootstrap-icons';
import { deletePost } from '../../../../actions/posts';


const PostsListItem = ({post}) => {

  const auth = useSelector((state) => state.auth)


  const dispatch = useDispatch();

  const renderTrashCan = () => {
    if (auth && post.userUsername === auth.user.username) {
      return <Trash onClick={() => dispatch(deletePost(post._id))} className="hover float-right" />
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
          { renderTrashCan() }
        </div>
      </div>
    </li>
  )
}

export default PostsListItem;