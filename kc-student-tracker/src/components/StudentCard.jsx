import React from "react";

function StudentCard(props) {
  const { name, _id, startingCohort, currentBlock } = props.student;
  return (
    <li>
      <h3>Student name: {name}</h3>
      <h3>Student id: {_id}</h3>
      <h3>Starting Cohort: {startingCohort}</h3>
      <h3>Current Block: {currentBlock}</h3>
    </li>
  );
}

export default StudentCard;
