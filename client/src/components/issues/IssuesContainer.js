import React, { useEffect, useState } from 'react'
import IssuesList from './IssuesList';
import Loading from '../shared/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getIssues } from '../../actions/issues';


const IssuesContainer = () => {
  const dispatch = useDispatch();
  const issues = useSelector(state => state.issues);
  const org = useSelector(state => state.organization);
  const project = useSelector(state => state.project);
  const [issueTypes, setIssueTypes] = useState({
    completeIssues: [],
    activeIssues: [],
    archivedIssues: []    
  })
  useEffect( () => {
    dispatch(getIssues(org._id, project._id));
    setIssueTypes({completeIssues: issues})
  }, [project])

  const filteredIssues = (filter) => {
    return issues.filter(issue => {
      if (issue.status === filter ){
        return issue;
      }
    });
  }


  if (!issues) {return <Loading />}

  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="active-tab" data-toggle="tab" href="#active" role="tab" aria-controls="active" aria-selected="true">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="complete-tab" data-toggle="tab" href="#complete" role="tab" aria-controls="complete" aria-selected="false">Complete</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="archived-tab" data-toggle="tab" href="#archived" role="tab" aria-controls="archived" aria-selected="false">Archived</a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="active" role="tabpanel" aria-labelledby="active-tab">
          <div id="active-issues">
            <IssuesList parentDiv={"#active-issues"} issues={filteredIssues("active")} />
          </div>
        </div>
        <div className="tab-pane fade" id="complete" role="tabpanel" aria-labelledby="complete-tab">
          <div id="complete-issues">
            <IssuesList parentDiv={"#complete-issues"} issues={filteredIssues("complete")} />
          </div>
        </div>
        <div className="tab-pane fade" id="archived" role="tabpanel" aria-labelledby="archived-tab">
        <div id="archived-issues">
            <IssuesList parentDiv={"#archived-issues"} issues={filteredIssues("archived")} />
          </div>
        </div>
      </div>
    </>
  )
}

export default IssuesContainer
