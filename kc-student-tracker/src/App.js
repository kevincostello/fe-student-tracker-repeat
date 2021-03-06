import React from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Router } from "@reach/router";
import Students from "./components/Students";
import Home from "./components/Home";
import StudentById from "./components/StudentById";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />

      <Router>
        <Home path="/" />
        <Students path="/students" />
        <StudentById path="/students/:id" />
      </Router>
    </div>
  );
}

export default App;
