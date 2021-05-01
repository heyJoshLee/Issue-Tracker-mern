import React from 'react';
import { Link } from 'react-router-dom';

const ReturnLink = ({destination, anchorText}) => {
  return (
    <Link to={destination}>
      {anchorText}
    </Link>
  )
}

export default ReturnLink
