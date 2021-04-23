import React from 'react';
import { useSelector } from 'react-redux';

import PostListItem from './PostListItem/PostListItem';
const PostsList = (props) => {
  const posts = useSelector((state) => state.posts);
  return (
    <ul>
      {!posts.length ? <div>Loading...</div> : (
        posts.map((post) => {
          return <PostListItem post={post} />
        })
      ) }
    </ul>
  )
}

export default PostsList;