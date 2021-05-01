import React, { useEffect } from 'react'
import IssueListItem from './IssueListItem';
import { useDispatch, useSelector } from 'react-redux';
import { getIssues } from '../../actions/issues';

const IssuesContainer = () => {

  const dispatch = useDispatch();
  const issues = useSelector(state => state.issues);
  const org = useSelector(state => state.organization);
  const project = useSelector(state => state.project)

  useEffect(() => {
    dispatch(getIssues(org._id, project._id));
  }, [project])

  const renderItems = () => {
    return issues.map(issue => {
      return <IssueListItem key={issue._id} issue={issue} />
    })
  }

  if (!issues) {return <div>Loading...</div>}
  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="active-tab" data-toggle="tab" href="#active" role="tab" aria-controls="active" aria-selected="true">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="completed-tab" data-toggle="tab" href="#completed" role="tab" aria-controls="completed" aria-selected="false">Completed</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="archived-tab" data-toggle="tab" href="#archived" role="tab" aria-controls="archived" aria-selected="false">Archived</a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="active" role="tabpanel" aria-labelledby="active-tab">
        <div id="accordion-issues">
          {renderItems()}
        </div>

        </div>
        <div className="tab-pane fade" id="completed" role="tabpanel" aria-labelledby="completed-tab">


        </div>
        <div className="tab-pane fade" id="archived" role="tabpanel" aria-labelledby="archived-tab">



        </div>
      </div>
    </>
  )
}

export default IssuesContainer
