import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Error404 from "./components/Error404";

// CSS
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/about" component={() => <About />} />
          <Route exact path="/projects" component={() => <Projects />} />
          <Route component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
