import React, { Component } from "react";
import StudentBlockInfo from "./StudentBlockInfo";
import axios from "axios";

export default class StudentById extends Component {
  state = {
    student: "",
    isLoading: true
  };
  render() {
    const { student, isLoading } = this.state;
    console.log("student is:", student);
    return (
      <main>
        {isLoading ? (
          <h3>Student is loading:</h3>
        ) : (
          <>
            <h3>Student name is {student.name}</h3>
            <StudentBlockInfo student={student} />
          </>
        )}
      </main>
    );
  }
  componentDidMount = () => {
    console.log("mounting");
    this.getStudentById();
  };

  getStudentById = () => {
    console.log("props", this.props);

    const { id } = this.props;
    console.log(this.state);
    const url = `https://nc-student-tracker.herokuapp.com/api/students/${id}`;
    axios.get(url).then(({ data }) => {
      console.log(data);
      this.setState({ student: data.student, isLoading: false });
    });
  };
}
