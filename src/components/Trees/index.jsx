// import PropTypes from "prop-types";
import Nav from "../Nav";
import React from "react";
import {Route} from "react-router-dom";
import Story from "../../lib/trees/techTree.json";
import Tech from "../../lib/trees/techTree.json";
import Tree from "../Tree";

class Trees extends React.PureComponent {
  static jsonMap = {
    "story": Story,
    "tech": Tech
  };

  static routeMap = Object.keys(Trees.jsonMap).map(treeName => ({
    "path": `/trees/${treeName}`,
    "render": (name => <Tree tree={Trees.jsonMap[name]} />).bind(null, treeName)
  }));

  static navMap = Object.keys(Trees.jsonMap).map(treeName => ({
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
