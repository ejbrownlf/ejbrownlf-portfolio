import React from "react"
import styled from "styled-components"
import themeOne from "./colorsThemes"
import { FaRegClone, FaGithub } from "react-icons/fa"
import { Link, Router } from "react-router-dom"

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
  p {
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
  justify-content: flex-end;
  font-family: "Inconsolata", monospace;
  padding-left: 0px;
  padding-bottom: 10px;
`

const Small = ({ project }) => (
  <Card>
    <ImageContainer>
      <FaRegClone size={42} style={{ color: lightBlue, marginRight: "auto",  }} />
      <a href={project.github}>
        <FaGithub size={28} style={{color: lightBlue, paddingRight: '10px' }} />
      </a>
    </ImageContainer>
    <h1>{project.name}</h1>
    <h2>{project.desc}</h2>
    <p>
      {"[ "} {project.tools} {" ]"}{" "}
    </p>
  </Card>
)

export default Small
