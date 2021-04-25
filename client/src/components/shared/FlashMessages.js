import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearMessages } from '../../actions/messages';

const FlashMessages = () => {
  const flashMessages = useSelector((state) => state.flashMessages);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearMessages());
  }

  const renderMessages = () => {
    
    return flashMessages.map(msg => {
      return  (
        <div className={`alert alert-${msg.type} alert-dismissible fade show`} role="alert">
        {msg.message}
        <button onClick={handleClick} type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      )
    })
  }



  return (
    <div>
      {renderMessages()}
    </div>
  )
}

export default FlashMessages;