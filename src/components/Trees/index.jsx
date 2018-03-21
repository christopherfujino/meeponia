// import PropTypes from "prop-types";
import Nav from "../Nav";
import React from "react";
import {Route} from "react-router-dom";
import trees from "../../lib/trees";
import Tree from "./Tree";

class Trees extends React.PureComponent {
  static routeMap = Object.keys(trees).map(treeName => ({
    "path": `/trees/${treeName}`,
    "render": (name => <Tree tree={trees[name]} />).bind(null, treeName)
  }));

  static navMap = Object.keys(trees).map(treeName => ({
    "text": treeName,
    "to": `/trees/${treeName}`
  }))

  render () {
    return (
      <div>
        <Nav map={Trees.navMap} />
        {
          Trees.routeMap.map(tree => (
            <Route
              key={`treesIndex${tree.path}`}
              path={tree.path}
              render={tree.render}
            />
          ))
        }
      </div>
    );
  }
}

export default Trees;
