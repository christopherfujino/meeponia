import {NavLink, withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

/*
 * navigationMap = [
 *  {
 *    "text": "Click me",
 *    "to": "/path/to/destination"
 *  }
 * ]
 */

class Nav extends React.PureComponent {
  static propTypes = {"map": PropTypes.array.isRequired}

  render () {
    const {map} = this.props;
    return (
      <nav>
        <ul className="nav justify-content-center">
          {
            map.map(destination => (
              <li
                className="nav-item"
                key={`navLinks${destination.text}`}
              >
                <NavLink
                  className="nav-link"
                  to={destination.to}
                >
                  {destination.text}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    );
  }
}

export default withRouter(Nav);
