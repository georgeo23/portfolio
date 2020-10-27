import React from "react";
import { Random } from "react-animated-text";
import studiofy from "../styles/studiofy/studiofy.png";
import fika from "../styles/fika/fika.png";
import "../styles/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="mainDiv">
          <br />
        <a style={{ fontSize: "3rem" }}>
          <Random
            text={"welcome to my personal portfolio"}
            iterations={1}
            effect="verticalFadeIn"
            effectDirection="stretch"
          />
        </a>
        <br />
        <div className="infoDiv">
          <a href="/projects" style={{ fontSize: "2rem" }}>
            <Random
              text={"check out my most recent projects"}
              iterations={2}
              effect="verticalFadeIn"
              effectDirection="stretch"
            />
            <img src={studiofy} alt={"studiofy - the music cover app"} />
            <img src={fika} alt={"fika - the social coffee break app"} />
          </a>
        </div>
        <br />
        <div className="infoDiv">
          <a href="/about" style={{ textDecoration: 'underline' }}>
            <Random
              text={"a brief overview of myself"}
              iterations={3}
              effect="verticalFadeIn"
              effectDirection="stretch"
            />
          <br />
            <Random
              text={
                "I am a junior full stack developer who is fluent in Spanish, Italian and Catalan. I am competent in HTML/CSS, JavaScript, React Redux, Python and SQL - with great desire to get more hands on and involved in much more."
              }
              iterations={3}
              effect="verticalFadeIn"
              effectDirection="stretch"
            />
          </a>
        </div>
        <br />
        <div className="infoDiv">
          <a href="/contact">
            <Random
              text={"contact me"}
              iterations={4}
              effect="verticalFadeIn"
              effectDirection="stretch"
            />
            <br />
            <Random
              text={
                "I would be happy to help with anything you require, from developer roles to translation."
              }
              iterations={4}
              effect="verticalFadeIn"
              effectDirection="stretch"
            />
          </a>
        </div>
      </div>
    );
  }
}
export default Home;
