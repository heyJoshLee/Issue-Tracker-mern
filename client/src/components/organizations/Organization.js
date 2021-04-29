import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getOrganization } from '../../actions/organizations';
import { getProjects } from '../../actions/projects';
import ProjectForm  from '../projects/Form';
import ProjectsList from '../projects/ProjectsList';
import StickyMessagesList from '../stickyMessages/StickyMessagesList';
import StickyMessageForm from '../stickyMessages/Form';
import ReturnLink from '../shared/ReturnLink';
import { getStickyMessages } from '../../actions/stickyMessages';

const Organization = (props) => {

  const dispatch = useDispatch();
  const orgId = props.match.params.id;
  const org = useSelector(state => state.organization);
  useEffect(() => {
    dispatch(getOrganization(orgId));
    dispatch(getProjects(orgId));
  }, [])
  
  if (!org) { return <div>Loading...</div>}
  
  return (
    <div className="organization-page">
        <ReturnLink destination={`/organizations/`} anchorText={"< Back to My Organizations"} />
        <h1 className="text-center">{org.name}</h1>
        <ProjectForm />
        <h2 className="text-center mb-4 mt-4">Sticky Messages</h2>
        <StickyMessageForm type="organization" />
        <StickyMessagesList type="organization" />
        <h2 className="text-center mt-4">Projects</h2>        
        <div className="row">
          <ProjectsList />
        </div>
    </div>
  )
}

export default Organization;