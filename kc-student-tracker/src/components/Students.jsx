import React, { Component } from "react";
import StudentList from "./StudentList";
import axios from "axios";

export default class Students extends Component {
  state = { students: [], isLoading: true, showMoreInfo: false };
  render() {
    const { isLoading, students, showMoreInfo } = this.state;
    return (
      <>
        {isLoading ? (
          <h2>Loading the list of students.......</h2>
        ) : (
          <>
            <h2>List of students:</h2>
            <button onClick={this.toggleInfo}>Show more info</button>
            <ul className="flex-container">
              <StudentList students={students} showMoreInfo={showMoreInfo} />
            </ul>
          </>
        )}
      </>
    );
  }

  componentDidMount = () => {
    this.getStudents();
  };

  toggleInfo = () => {
    this.setState(currentState => {
      return { showMoreInfo: !currentState.showMoreInfo };
    });
  };

  getStudents = () => {
    const url = "https://nc-student-tracker.herokuapp.com/api/students";
    axios.get(url).then(({ data }) => {
      const { students } = data;
      this.setState({ students, isLoading: false });
    });
  };
}
