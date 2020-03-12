import React from "react";
import { Link } from "@reach/router";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/students">Students</Link>
        </li>
        <li>
          <Link to="/blocks">Blocks</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
