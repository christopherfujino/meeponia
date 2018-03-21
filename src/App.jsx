import {BrowserRouter, Route} from "react-router-dom";
import React, {Component} from "react";
import Nav from "./components/Nav";
import Trees from "./components/Trees";
import navMap from "./lib/navigationMaps/root.js";

class App extends Component {
  static renderNav () {
    return (
      <Nav map={navMap} />
    );
  }

  render () {
    return (
      <BrowserRouter>
        <div className="container">
          <Route
            path="/"
            render={App.renderNav}
          />
          <Route
            component={Trees}
            path="/trees"
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
