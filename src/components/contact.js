import React from "react"
import styled from "styled-components"
import themeOne from "./colorsThemes"

const { pink, lightBlue, white, purple } = themeOne

const AboutContainer = styled.section`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  min-height: 75vh;
  justify-content: center;
  color: ${white};
  max-width: 1000px;

  h3 {
    margin: 0 0 5px 0;
    font-size: 30px;
  }

  p {
    display: grid;
    font-size: 18px;
  }

  button {
    width: 30%;
    height: 50px;
    color: ${lightBlue};
    background-color: ${purple};
    border: 1px solid;
    border-radius: 6px;
    border-color: ${purple};
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
  }
  a {
    color: ${lightBlue};
  }
`

const Contact = () => (
  <AboutContainer id="contact">
    <h3 style={{ paddingLeft: "20px", color: pink, marginRight: "auto" }}>
      Talk To Me! :{" "}
    </h3>

    <p>
      I am actively seeking oppurtunities as a Web Developer and/or Cyber
      Security Specialist. Feel free to reach out if you are interested even if
      its just a random web question!
    </p>
    <button>
      <a
        href="mailto:ejbrownlf@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Reach Out!
      </a>
    </button>
    <div>
      
    </div>
  </AboutContainer>
)

export default Contact
