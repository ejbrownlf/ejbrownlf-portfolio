import React from "react";
import styled from "styled-components";
import themeOne from "./colorsThemes";
import projects from '../info/githubPrj';
import Small from './small'

const { pink, lightBlue, white } = themeOne

const AboutContainer = styled.section`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  min-height: 150vh;
  justify-content: center;
  color: ${white};
  max-width: 1000px;

  div {
    display: block;
    margin: 0px;
    margin-right: auto;
    padding: 0px;
  }

  .aboutGrid {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    height: 140vh;
    width: 100%;
    margin: 0;
    margin-top: 20px;
    gap: 20px;
  }

  h3 {
    margin: 0 0 5px 0;
    font-size: 30px;
  }

  p {
    display: grid;
    font-size: 18px;
  }
`;

const Solo = () => (
  <AboutContainer id="about">
    <div>
      <h3 style={{ paddingLeft: "20px", color: pink, marginBottom: '10px;' }}>Small Projects: </h3>
    </div>
    <div className="aboutGrid">
      {projects.map(p => (
        <Small project = {p} />
      ))}
    </div>
  </AboutContainer>
)

export default Solo;
