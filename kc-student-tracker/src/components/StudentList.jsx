import React from "react";
import StudentCard from "./StudentCard";

function StudentList(props) {
  const { students } = props;
  return students.map(student => {
    return <StudentCard student={student} key={student._id} />;
  });
}

export default StudentList;
