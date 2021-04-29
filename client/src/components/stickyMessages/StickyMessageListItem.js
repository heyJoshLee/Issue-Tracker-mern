import React from 'react';

const StickyMessageListItem = ({stickyMessage}) => {
  return (
    <div className="card">
    <div className="card-header" id="headingOne">
      <h5 className="mb-0">
        <button className="btn btn-link" data-toggle="collapse" data-target={`#collapse-${stickyMessage._id}`} aria-expanded="true" aria-controls={`collapse-${stickyMessage._id}`}>
          {stickyMessage.title}
        </button>
      </h5>
    </div>

    <div id={`collapse-${stickyMessage._id}`} className="collapse" aria-labelledby="headingOne" data-parent="#sticky-message-accordion">
      <div className="card-body">
        {stickyMessage.body}
      </div>
    </div>
  </div>
  )
}

export default StickyMessageListItem;