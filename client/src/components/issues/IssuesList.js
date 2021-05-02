import React, { useState } from 'react';
import IssueListItem from './IssueListItem';
import ReactPaginate from 'react-paginate';
import { set } from 'mongoose';

const IssuesList = ({ issues, parentDiv }) => {
  const issuesPerPage = 5;
  let [itemsToRender, setItemsToRender] = useState(issues.slice(0, issuesPerPage));
  let currentPage = 0; 
  const pageCount = Math.ceil(issues.length / issuesPerPage);
  

  const renderItems = () => {
    return itemsToRender.map(issue => {
      return <IssueListItem parentDiv={parentDiv} key={issue._id} issue={issue} />
    })
  }

  const handlePageChange = ({selected}) => {
    currentPage = selected;
    setItemsToRender(issues.slice(selected * issuesPerPage, (selected * issuesPerPage) + issuesPerPage));
  }

  const sortIssuesOnPriority = (event, direction) => {
    event.preventDefault();
    issues.sort((a, b) => {
      if (direction === "low") {
        return a.priority - b.priority;
      } else {
        return b.priority - a.priority;
      }
    });
    setItemsToRender(issues.slice(currentPage * issuesPerPage, (currentPage * issuesPerPage) + issuesPerPage));
  }

  const sortIssuesOnDate = (event, direction) => {
    event.preventDefault();
    issues.sort((a, b) => {
      const dateA = new Date(a.timestamp);
      const dateB = new Date(b.timestamp);
      if (direction === "old") {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
    setItemsToRender(issues.slice(currentPage * issuesPerPage, (currentPage * issuesPerPage) + issuesPerPage));
    console.log(issues)
  }
  

  return (
    <div>
      <div className="btn-group mt-3">
        <button type="button" className="btn btn-primary btn-sm">Sort</button>
        <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="sr-only">Toggle Dropdown</span>
        </button>
        <div className="dropdown-menu">
          <a onClick={(e) => sortIssuesOnDate(e, "new")} className="dropdown-item" href="#">Newest First</a>
          <a onClick={(e) => sortIssuesOnDate(e, "old")} className="dropdown-item" href="#">Oldest First</a>
          <a onClick={(e) => sortIssuesOnPriority(e, "high")} className="dropdown-item" href="#">Most Urgent</a>
          <a onClick={(e) => sortIssuesOnPriority(e, "low")} className="dropdown-item" href="#">Least Urgent</a>
        </div>
      </div>
          {renderItems()}
          <br />
          <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={pageCount}
          marginPagesDisplayed={1}
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
          onPageChange={handlePageChange}
          />
    </div>
  )
}

export default IssuesList
