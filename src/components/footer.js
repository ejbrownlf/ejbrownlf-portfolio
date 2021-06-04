import React from "react"
import styled from "styled-components"
import Resume from "../assets/Erik J Brown's Resume.pdf";
import { FaGithub, FaEnvelope, FaLinkedinIn, FaFileAlt } from "react-icons/fa";

const SepContainer = styled.section`
  display: flex;
  justify-content: center;
  align-self: center;
  color: #919191;
  font-size: 0.8rem;
  margin: 10px;

  a{
      color: #919191;
  }
`

const Footer = () => (
  <div>
    <SepContainer>Built By Erik Brown</SepContainer>
    <SepContainer>
      <a href="https://github.com/ejbrownlf"
        target="_blank"
        rel="noopener noreferrer">
        <FaGithub
          size={28}
          style={{ marginRight: "10px", marginLeft: "10px" }}
        />
      </a>
      <a href="https://www.linkedin.com/in/erik-brown-560308200/"
        target="_blank"
        rel="noopener noreferrer">
        <FaLinkedinIn
          size={28}
          style={{ marginRight: "10px", marginLeft: "10px" }}
        />
      </a>
      <a href="mailto:ejbrownlf@gmail.com"
        target="_blank"
        rel="noopener noreferrer">
        <FaEnvelope
          size={28}
          style={{ marginRight: "10px", marginLeft: "10px" }}
        />
      </a>
      <a href={Resume}
        target="_blank"
        rel="noopener noreferrer">
        <FaFileAlt
          size={28}
          style={{ marginRight: "10px", marginLeft: "10px" }}
        />
      </a>
    </SepContainer>
  </div>
)

export default Footer
