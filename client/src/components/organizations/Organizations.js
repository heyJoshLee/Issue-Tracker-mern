import React, { useEffect } from 'react';
import OrganizationsList from './OrganizationsList';
import { useDispatch, useSelector } from 'react-redux';
import { getOrganizations } from '../../actions/organizations';

const Organizations = () => {
  const dispatch = useDispatch();
  const organizations = useSelector(state => state.organizations)

  useEffect(() => {
    dispatch(getOrganizations());
  }, [])
  
  return (
    <div>
      <OrganizationsList />
    </div>
  )
}

export default Organizations
