import React from 'react';
import Form from './Form/Form';
import { useSelector } from 'react-redux';

import PostsList from './PostsList/PostsList';

const Posts = () => {

  const auth = useSelector((state) => state.auth);

  return (
    <div>
      {auth ? <Form /> : ""}
      <PostsList />
    </div> 
  )
}

export default Posts;