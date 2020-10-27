import React, { Component } from "react";
import "../styles/Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <div>
        <h1>George Olney</h1>
        <h3>Junior Full Stack Developer</h3>
        <nav>
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    );
  }
}
export default Navbar;
