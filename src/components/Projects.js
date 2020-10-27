import React from "react";
import fika from "../styles/fika/fika.png";
import fikachat from "../styles/fika/fikachat.png";
import fikagame from "../styles/fika/fikagame.png";
import fikalogin from "../styles/fika/fikalogin.png";
import fikawin from "../styles/fika/fikawin.png";
import studiofyhome from "../styles/studiofy/studiofyhome.png";
import studiofy from "../styles/studiofy/studiofy.png";

import "../styles/Projects.css";
class Projects extends React.Component {
  componentDidMount() {
    console.log("here");
  }
  render() {
    return (
      <>
        <h1>my projects</h1>
        <div className="gridContainer">
          <a href="https://studiofyit.herokuapp.com/">
            <div className="gridCard">
              <h3 style={{ color: "black", opacity: "1" }}>
                Studiofy - Music Cover app
              </h3>
              <img
                style={{ width: "300px", height: "auto" }}
                src={studiofy}
                alt=""
              />
              <br />
              <img
                style={{ width: "600px", height: "auto" }}
                src={studiofyhome}
              />
              <br />
              <a
                style={{ color: "black" }}
                href="https://studiofyit.herokuapp.com/"
              >
                https://studiofyit.herokuapp.com/
              </a>
            </div>
          </a>
          <a href="https://app-fika.herokuapp.com/">
            <div className="gridCard">
              <h3 style={{ color: "black", opacity: "1" }}>
                Fika - Coffee Break Social app
              </h3>
              <img
                style={{ width: "200px", height: "auto" }}
                src={fika}
                alt="fika logo"
              />
              <br />
              <img style={{ width: "600px", height: "auto" }} src={fikalogin} />
              <br />
              <a
                style={{ color: "black" }}
                href="https://app-fika.herokuapp.com/"
              >
                https://app-fika.herokuapp.com/
              </a>
            </div>
          </a>
        </div>

        <h4>more coming soon...</h4>
      </>
    );
  }
}
export default Projects;
