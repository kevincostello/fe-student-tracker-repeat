import React from "react";

function StudentBlockInfo(props) {
  console.log("student:", props.student);
  const { blockHistory } = props.student;
  return (
    <ol>
      {blockHistory.map(block => {
        const { number, name, _id } = block;
        return (
          <li key={_id + Math.random()}>
            <h4>Block number: {number}</h4>
            <h4>Block name: {name}</h4>
          </li>
        );
      })}
    </ol>
  );
}

export default StudentBlockInfo;
