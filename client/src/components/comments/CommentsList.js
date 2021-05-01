import React, { useEffect, useState } from 'react'
import CommentListItem from './CommentListItem';
import Loading from '../shared/Loading';
import Form from './Form';
import { useDispatch } from 'react-redux';
import { getComments } from '../../actions/comments';

const CommentsList = ({parent, type}) => {
  const [comments, setComments] = useState([]);
  const dispatch = useDispatch();
  
  // @ts-ignore
  useEffect(async () => {
    let response = await dispatch(getComments(type, parent._id));
    // @ts-ignore
    setComments(response); 
  }, [])

  const deleteLocalComment = (id) => {
    let updatedComments = comments.filter(com => {
      if (com._id !== id) { return com;}
    })
    setComments(updatedComments);
  }

  const addLocalComment = (comment) => {
    let newComments = [...comments, comment]
    setComments(newComments);
  }

  const renderComments = () => {
    return comments.map(comment => {
      return <CommentListItem key={comment._id} comment={comment} deleteLocalComment={deleteLocalComment} />
    })
  }
  if (!comments) { return <Loading />}
  return (
    <div className="comments-list">
      {renderComments()}
      <hr />
      <Form parent={parent} type={type} addLocalComment={addLocalComment}/>
    </div>
  )
}

export default CommentsList
