import React, { Component } from "react";
import StudentList from "./StudentList";

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
            <ul>
              <StudentList students={students} showMoreInfo={showMoreInfo} />
            </ul>
          </>
        )}
      </>
    );
  }

  componentDidMount = () => {
    this.setState({
      students: [
        {
          _id: "5e5e2ac1ca5ef400176fb0b1",
          name: "bnm,,.",
          startingCohort: -1,
          currentBlock: "grad"
        },
        {
          _id: "5e5e2ac3ca5ef400176fb0b2",
          name: "bnm,,.",
          startingCohort: -1,
          currentBlock: "fun"
        },
        {
          _id: "5e5e2ac4ca5ef400176fb0b3",
          name: "bnm,,.",
          startingCohort: -1,
          currentBlock: "fun"
        }
      ],
      isLoading: false
    });
  };

  toggleInfo = () => {
    this.setState(currentState => {
      return { showMoreInfo: !currentState.showMoreInfo };
    });
  };
}
