import React from 'react';
import { Link } from "react-router-dom";
import './header.scss';


class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <h1>RESTy</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <a href="/">Home</a>
              </Link>
            </li>

            <li>
              <Link to="/history">
                <a href="/history">History</a>
              </Link>
            </li>

            <li>
              <Link to="/help">
                <a href="/help">Help Me!</a>
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    )
  }
}

export default Header;