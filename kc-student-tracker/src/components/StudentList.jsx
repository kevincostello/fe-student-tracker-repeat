import React from "react";
import StudentCard from "./StudentCard";

function StudentList(props) {
  const { students, showMoreInfo } = props;
  return students.map(student => {
    return (
      <StudentCard
        student={student}
        key={student._id}
        showMoreInfo={showMoreInfo}
      />
    );
  });
}

export default StudentList;
