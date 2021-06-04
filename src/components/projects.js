import React from "react"
import styled from "styled-components"
import themeOne from "./colorsThemes"
import laughs from "../assets/Laughs-Eats-Screenshot.png"
import posts from "../assets/postsnstuff.png"
import mentorme from "../assets/landingpage.png"
import useWindowDimensions from "../hooks/windowSize"
import { FaGithub } from "react-icons/fa"

const { pink, white, darkBlue, lightBlue } = themeOne

const ProjectContainer = styled.section`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  min-height: 130vh;
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
    height: 39vh;
    width: 100%;
    margin: 0 0 20px 0;

    @media screen and (max-width: 800px) {
      display: block;
      height: 75vh;
    }
  }

  h3 {
    margin: 0 0 5px 0;
    font-size: 30px;
  }

  p {
    font-size: 16px;
    padding: 20px 30px 20px 30px;
    border-radius: 6px;
  }

  a {
    margin: auto;
    margin-left: 10px;
    color: ${lightBlue};
  }
`

const StyledImg = styled.img`
  margin: auto;
  width: 90%;
  border-radius: 6px;
`

const ProjectDesc = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    background-color: ${darkBlue};
  }
`

const Projects = () => {
  const { width } = useWindowDimensions()

  return (
    <ProjectContainer id="projects">
      <div>
        <h3 style={{ paddingLeft: "20px", color: pink }}>
          Group-Oriented Projects :
        </h3>
      </div>
      <div className="groupPGrid">
        <ProjectDesc>
          <p>
            Mentor.me allows users to sign up and choose some topics in the
            world of web development they would like help on and then they get
            matched with mentors who best represent their needs as a mentee. The
            application allows users to make friends, join chat rooms, and make
            posts to help out others.
            <p style={{ padding: "0", color: "#919191", fontSize: "0.9rem" }}>
              {"["} Node.js, React, Sass, MongoDB, Algorithms, MaterialUI,
              Styled Compnonents, Multer, Passport, Socket.io {"]"}
            </p>
            <a
                  href="https://github.com/freejonm/mentor.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    size={28}
                    style={{ marginRight: "10px", marginLeft: "10px" }}
                  />
                </a>
          </p>
        </ProjectDesc>
        <a
          href="https://mentorme3000.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledImg src={mentorme} />
        </a>
      </div>
      <div className="groupPGrid">
        {width > 800 ? (
          <>
            <a
              href='https://postnstuff.herokuapp.com/'
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledImg src={posts} />
            </a>

            <ProjectDesc>
              <p>
                Posts N' Stuff is a simple social media platform where users can
                share recipes for their favorite adult drinks or their favorite
                at home meal recipes. Users can also post about their at home
                DIY projects with the steps it took to complete them.
                <p
                  style={{ padding: "0", color: "#919191", fontSize: "0.9rem" }}
                >
                  {"["} Node.js, React, HandleBars, Passport, Socket.io, MySQL{" "}
                  {"]"}
                </p>
                <a
                  href="https://github.com/JFunck1990/Posts-n-Stuff"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    size={28}
                    style={{ marginRight: "10px", marginLeft: "10px" }}
                  />
                </a>
              </p>
            </ProjectDesc>
          </>
        ) : (
          <>
            <ProjectDesc>
              <p>
                Posts N' Stuff is a simple social media platform where users can
                share recipes for their favorite adult drinks or their favorite
                at home meal recipes. Users can also post about their at home
                DIY projects with the steps it took to complete them.
                <p
                  style={{ padding: "0", color: "#919191", fontSize: "0.9rem" }}
                >
                  {"["} Node.js, React, Sass, MongoDB, Algorithms, MaterialUI,
                  Styled Compnonents, Multer, Passport, Socket.io {"]"}
                </p>
                <a
                  href="https://github.com/JFunck1990/Posts-n-Stuff"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    size={28}
                    style={{ marginRight: "10px", marginLeft: "10px" }}
                  />
                </a>
              </p>
            </ProjectDesc>

            <a
              href='https://postnstuff.herokuapp.com/'
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledImg src={posts} />
            </a>
          </>
        )}
      </div>
      <div className="groupPGrid">
        <ProjectDesc>
          <p>
            Laughs and Eats aims to solve the problem of social occasions like a
            date or a business meeting where you don't know where to go to eat
            and don't know what to say. With laughs eats you can enter your
            criteria for the kind of jokes you would like to tell and some
            criteria for food in your area. The app will then give you a list of
            jokes you can tell your date/meeting and suggests several
            restaurants in your area.
            <p style={{ padding: "0" }}>
              {"["} HTML, CSS, JavaScript, ZomatoApi, LocalStorage {"]"}
            </p>
            <a
                  href="https://github.com/kcrammer/Laughs-and-Eats"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    size={28}
                    style={{ marginRight: "10px", marginLeft: "10px" }}
                  />
                </a>
          </p>
        </ProjectDesc>

        <a
          href="https://kcrammer.github.io/Laughs-and-Eats/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledImg src={laughs} />
        </a>
      </div>
    </ProjectContainer>
  )
}

export default Projects
