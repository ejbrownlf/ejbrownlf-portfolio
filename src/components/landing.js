import React from "react"
import styled from "styled-components"
import themeOne from "./colorsThemes"
import Resume from "../assets/Erik J Brown's Resume.pdf"
import { FaGithub, FaEnvelope, FaLinkedinIn, FaFileAlt } from "react-icons/fa"

const { pink, white } = themeOne

const LandingContainer = styled.section`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  min-height: 110vh;
  justify-content: center;
  color: ${white};
  max-width: 800px;

  div {
    display: block;
    margin: 0px;
    margin-right: auto;
    padding: 0px;
  }

  h1 {
    font-size: 60px;
    padding: 0;
    margin: 10px 0 0 0;
  }

  h3 {
    font-size: 20px;
    margin: 0;
  }

  a {
      color: ${white}
  }

  @media screen and (max-width: 800px) {
    min-height: 800px;
    }
`

const Landing = () => (
  <LandingContainer>
    <div>
      <h3 style={{ color: pink }}>Hello, I am;</h3>
    </div>
    <div>
      <h1 style={{ fontWeight: "bold" }}>Erik Brown;</h1>
    </div>
    <div>
      <h1 style={{ color: "#919191", textShadow: "" }}>
        Developer and Engineer;
      </h1>
    </div>
    <div>
      <p>
        {" "}
        I am a developer from Huntsville, Al. I specialize in designing and
        building websites from the ground up. I excel in creating the
        backend functionality for sites i.e. building things like algorithms,
        data structures, complex database queries, and building safeguards
        against cyber threats. Currently looking for a new oppurtunity in the
        world of web development and/or cybersecurity;
      </p>
    </div>
    <div style={{marginTop: '10px'}}>
      <a
        href="https://github.com/ejbrownlf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub
          size={42}
          style={{ marginRight: "10px", marginLeft: "10px" }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/erik-brown-560308200/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn
          size={42}
          style={{ marginRight: "10px", marginLeft: "10px" }}
        />
      </a>
      <a
        href="mailto:ejbrownlf@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope
          size={42}
          style={{ marginRight: "10px", marginLeft: "10px" }}
        />
      </a>
      <a href={Resume} target="_blank" rel="noopener noreferrer">
        <FaFileAlt
          size={42}
          style={{ marginRight: "10px", marginLeft: "10px" }}
        />
      </a>
    </div>
  </LandingContainer>
)

export default Landing
