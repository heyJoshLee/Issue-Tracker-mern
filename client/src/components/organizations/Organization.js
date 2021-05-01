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
        <div className="row">
          <h2 className="mt-4 col-8">Sticky Messages</h2>        
            <div className="col-4">
              <StickyMessageForm type="organization"/>
            </div>
        </div>

        <StickyMessagesList type="organization" />
        <hr />
        <div className="row">
        <h2 className="mt-4 col-8">Projects</h2>        
          <div className="col-4">
            <ProjectForm/>
          </div>
        </div>
        <div className="text-center">
          <ProjectsList/>
        </div>
    </div>
  )
}

export default Organization;