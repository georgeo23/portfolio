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
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <ParticlesBg type="lines" bg={true} />
      </div>
    );
  }
}

export default App;
