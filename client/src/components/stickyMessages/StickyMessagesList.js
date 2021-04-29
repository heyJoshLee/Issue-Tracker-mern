import React, { useEffect } from 'react'
import StickyMessageListItem from './StickyMessageListItem';
import { useDispatch, useSelector } from 'react-redux';
import { getStickyMessages } from '../../actions/stickyMessages';

const StickyMessagesList = ({ type }) => {
  const dispatch = useDispatch();
  const stickyMessages = useSelector(state => state.stickyMessages);
  const organization = useSelector(state => state.organization);
  const project = useSelector(state => state.project)
  let objectType = type === "organization" ? organization : project;

  useEffect(() => {
    dispatch(getStickyMessages(type, objectType._id));
  }, [organization, project])

  const renderStickyMessages = () => {
    return stickyMessages.map((msg) => {
      return <StickyMessageListItem stickyMessage={msg} />
    })
  }

  if (!stickyMessages) { return <div>Loading...</div>}
  return (
    <div id="sticky-message-accordion">
      {renderStickyMessages()}
    </div>
  )
}

export default StickyMessagesList
