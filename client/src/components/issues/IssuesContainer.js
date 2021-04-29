import React from 'react'
import Issue from './Issue';

const IssuesContainer = () => {
  return (
    <>
      <h2 className="text-center mt-4 mb-4">Issues</h2>
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
        <Issue />

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
