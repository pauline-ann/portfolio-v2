import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Home from "./components/Home/Home";
import Error404 from "./components/Error404";

// CSS
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
