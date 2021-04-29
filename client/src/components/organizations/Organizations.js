import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrganizations } from '../../actions/organizations';
import OrganizationsList from './OrganizationsList';

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
