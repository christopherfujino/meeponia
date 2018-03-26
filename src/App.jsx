import {BrowserRouter, Route} from "react-router-dom";
import React, {PureComponent} from "react";
import Game from "./components/Game";
import Nav from "./components/Nav";
import Trees from "./components/Trees";
import navMap from "./lib/navigationMaps/root.js";

class App extends PureComponent {
  static renderNav () {
    return (
      <Nav map={navMap} />
    );
  }

  static renderPlay () {
    return (
      <Game />
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
            path="/play"
            render={App.renderPlay}
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
