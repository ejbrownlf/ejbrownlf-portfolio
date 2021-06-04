import React from "react"
import styled from "styled-components"
import themeOne from "./colorsThemes"
import { FaGithub } from "react-icons/fa"

const { white, darkBlue, lightBlue } = themeOne

const Card = styled.section`
  background-color: ${darkBlue};
  border-radius: 6px;
  padding: 30px;

  h1 {
    font-size: 1.5rem;
  }
  h2 {
    font-size: 1rem;
    color: ${white};
  }
  d {
    font-size: 0.8rem;
    color: #919191;
  }
`

const ImageContainer = styled.ul`
  display: -webkit-flex;
  display: flex;
  font-size: 1rem;
  list-style: none;
  align-items: center;
  justify-content: flex-start;
  font-family: "Inconsolata", monospace;
  padding-left: 0px;
  padding-bottom: 10px;
`

const Small = ({ project }) => (
  <Card>
    <ImageContainer>
      <a href={project.github} target="_blank" rel="noopener noreferrer">
        <FaGithub
          size={28}
          style={{ color: lightBlue, paddingRight: "10px" }}
        />
      </a>
    </ImageContainer>
    <h1>{project.name}</h1>
    <h2>{project.desc}</h2>
    <d>
      {"[ "} {project.tools} {" ]"}
    </d>
  </Card>
)

export default Small
