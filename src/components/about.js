import React from "react"
import styled from "styled-components"
import themeOne from "./colorsThemes";
import me from '../assets/unnamed.jpg'

const { pink, lightBlue, white } = themeOne

const AboutContainer = styled.section`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  /* min-height: 1300px; */
  height: 120vh;
  max-height: 1000px;
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
    grid-template-columns: 3fr 1fr;
    height: 90vh;
    width: 100%;
    margin: 0;
    gap: 50px;

    @media screen and (max-width: 800px) {
      display: block;
      height: 150vh;
    }
  }

  h3 {
    margin: 0 0 5px 0;
    font-size: 30px;
  }

  p {
    font-size: 18px;
  }

  .container {
    @media screen and (max-width: 800px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media screen and (max-width: 800px) {
      min-height: 1300px;
      justify-content: flex-start;
    }
`

const StyledImg = styled.img`
  width: 100%;
  border-radius: 50%;
  @media screen and (max-width: 800px) {
      width: 80%;
    }

`

const ListGrid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0px;
  margin: 0px;
  /* margin-top: 50px; */
  /* border: 1px solid;
  border-color: ${pink}; */
`

const ListGroup = styled.ul`
  margin-right: auto;
  list-style: none;
  font-size: 15px;
  color: ${lightBlue};
`

const About = () => (
  <AboutContainer id="about">
    <div>
      <h3 style={{ paddingLeft: "20px", color: pink }}>About-Me : </h3>
    </div>
    <div className="aboutGrid">
      <div>
        <p>
          Hello whoever may be reading this, I'm Erik! I started my interest in
          learning more about engineering when I was in high school when decided
          to build a trebuchet with a floating arm design for my school science
          fair. I did very well with it and impressed my physics teacher. The
          next year my city started a pumpkin launching competition and my
          teacher suggested I put a team together and scale up my trebuchet
          design for the competition. This competition allowed me to meet
          several people in the engineering industry and solidified my interest
          in engineering going into college.
        </p>
        <p>
          I went got accepted into Auburn University with a scholarship where I
          spent the next five years learning more about engineering. This is
          where I was introduced to programming through MATLAB and Excel VBA. I
          used these languages to solve complex engineering problems including
          differential equations and gaussian elimination to solve huge systems
          of equations. Unfortunately due Covid-19 and life circumstances I had
          to step away from college.
        </p>
        <p>
          During my break I was trying to figure out what to do next and I
          really wanted to do more with programming and I became very interested
          in Web Development. This led me the the Coding Bootcamp at UNC for
          Fullstack Web Development. I enrolled and earned my certificate on May
          19th, 2021. Here is a list of some of the skills I've learned through
          this bootcamp and on my own:
        </p>
      </div>
      <div className="container">
        <StyledImg src={me}></StyledImg>
        <div>
        Tools:
        <ListGrid>
          <ListGroup>
            <li>React</li>
            <li>Node.js</li>
            <li>MongoDB</li>
          </ListGroup>
          <ListGroup>
            <li>MySQL</li>
            <li>Django</li>
            <li>Firebase</li>
          </ListGroup>
        </ListGrid>
        Languages:
        <ListGrid>
          <ListGroup>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
          </ListGroup>
          <ListGroup>
            <li>Python3</li>
            <li>Java</li>
            <li>SQL</li>
          </ListGroup>
        </ListGrid>

        </div>
      </div>
    </div>
  </AboutContainer>
)

export default About
