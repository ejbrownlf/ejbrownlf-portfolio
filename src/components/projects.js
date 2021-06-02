import React from "react"
import styled from "styled-components"
import themeOne from "./colorsThemes"


const { pink, lightBlue, white } = themeOne

const ProjectContainer = styled.section`
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

  .groupPGrid {
    display: grid;
    grid-template-columns: 3fr 3fr;
    height: 50vh;
    width: 100%;
    margin: 0 0 20px 0;
    gap: 50px;
  }

  h3 {
    margin: 0 0 5px 0;
    font-size: 30px;
  }

  p {
    font-size: 16px;
  }
`

const StyledImg = styled.img`
  width: 90%;
  /* border-radius: 50%; */
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
const ProjectDesc = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Projects = () => (
  <ProjectContainer id="projects">
    <div>
      <h3 style={{ paddingLeft: "20px", color: pink }}>
        Group-Oriented Projects :{" "}
      </h3>
    </div>
    <div className="groupPGrid">
      <ProjectDesc>
        Mentor.me was my final project of my Coding Bootcamp. It's goal was to
        help answer the question of what now after a student graduates a
        bootcamp like the one I attended. The application allows users to sign
        up and choose some topics in the world of web development they would
        like help on and then they get matched with mentors who best represent
        their needs as a mentee. The matching uses a basic algorithm that I
        designed. The application allows users to make friends, join chat rooms,
        and make posts to help out other newly grads.
      </ProjectDesc>

      <StyledImg src="assets/landingpage.png" />
    </div>
    <div className="groupPGrid">
        <StyledImg src='assets/postsnstuff.png' />

        <ProjectDesc>
          Posts N' Stuff is a simple social media platform where users can share
          recipes for their favorite adult drinks or their favorite at home meal
          recipes. Users can also post about their at home DIY projects with the
          steps it took to complete them.
        </ProjectDesc>

    </div>
    <div className="groupPGrid">

        <ProjectDesc>
          Laughs and Eats aims to solve the problem of social occasions like a
          date or a business meeting where you don't know where to go to eat and
          don't know what to say. With laughs eats you can enter your criteria
          for the kind of jokes you would like to tell and some criteria for
          food in your area. The app will then give you a list of jokes you can
          tell your date/meeting and suggests several restaurants in your area.
        </ProjectDesc>

        <StyledImg src='assets/Laughs-Eats-Screenshot.png' />
    </div>
  </ProjectContainer>
)

export default Projects
