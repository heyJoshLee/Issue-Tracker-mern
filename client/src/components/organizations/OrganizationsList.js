import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getOrganizations } from '../../actions/organizations';
import OrganizationItem from './OrganizationItem';

function OrganizationsList() {

const dispatch = useDispatch();
const orgs = useSelector(state => state.organizations)

useEffect(() => {
  dispatch(getOrganizations());
}, []);



const renderOrgs = () => {
  if (orgs) {
    return orgs.map(org => {
      return <OrganizationItem org={org} />
    })
  }
}


  return (
    <div>
      <ul>
      {renderOrgs()}
      </ul>
    </div>
  )
}

export default OrganizationsList
