import React from "react";
import { Link } from "@reach/router";

function StudentCard(props) {
  const { name, _id, startingCohort, currentBlock } = props.student;
  const { showMoreInfo } = props;
  return (
    <li className="flex-item">
      <Link to={`/students/${_id}`}>
        <h3>Student name: {name}</h3>
      </Link>
      {showMoreInfo ? (
        <>
          <h3>Student id: {_id}</h3>
          <h3>Starting Cohort: {startingCohort}</h3>
          <h3>Current Block: {currentBlock}</h3>
        </>
      ) : null}
    </li>
  );
}

export default StudentCard;
