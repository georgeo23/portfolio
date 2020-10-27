import "./App.css";
import React from "react";
import ParticlesBg from "particles-bg";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Home from "./components/Home";
import About from './components/About'
import Contact from './components/Contact'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="https://georgeolney.netlify.app/projects" component={Home} />
          <Route exact path="https://georgeolney.netlify.app/projects" component={Projects} />
          <Route exact path="https://georgeolney.netlify.app/about" component={About} />
          <Route exact path="https://georgeolney.netlify.app/contact" component={Contact} />
        </Switch>
        <ParticlesBg type="lines" bg={true} />
      </div>
    );
  }
}

export default App;
