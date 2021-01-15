import React from 'react';
import { Link } from "react-router-dom";
import './header.scss';


class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <h3>RESTy</h3>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <a href="/">Home Page</a>
              </Link>
            </li>

            <li>
              <Link to="/history">
                <a href="/history">History list</a>
              </Link>
            </li>

            <li>
              <Link to="/help">
                <a href="/help">Help Static Content</a>
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    )
  }
}

export default Header;