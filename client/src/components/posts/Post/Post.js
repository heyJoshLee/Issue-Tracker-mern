import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../../../actions/posts';

const Post = ({ match }) => {

  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(getPost(match.params.id));
  }, [])


  return (
    <div className="post-page"> 
    {post && (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
      )}
      </div>

  )
}

export default Post;