import styled from "styled-components"
import React from "react"
import themeOne from "./colorsThemes"
import Resume from "../assets/Erik J Brown's Resume.pdf"
import useWindowDimensions from "../hooks/windowSize"

const { pink, lightBlue, purple, greenGrey, white, darkBlue } = themeOne

console.log(pink, lightBlue, purple, greenGrey, white, darkBlue)

const Nav = styled.ul`
  display: -webkit-flex;
  display: flex;
  font-size: 1rem;
  list-style: none;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid;
  border-color: ${pink};
  font-family: "Inconsolata", monospace;
  padding-left: 0px;

  @media screen and (max-width: 800px) {
    font-size: 0.9rem;
  }
`

const Navitem = styled.li`
  color: ${white};
  text-decoration: none;
  padding: 10px;
`

const NavItemLeft = styled.li`
  font-family: "MuseoModerno";
  font-size: 24px;
  color: ${lightBlue};
  text-decoration: none;
  padding: 10px;
  margin-right: auto;
`

const Navbar = () => {
  const { width } = useWindowDimensions()

  return (
    <Nav>
      <NavItemLeft>EJB</NavItemLeft>
      {width > 800 ? (
        <>
          <Navitem>Const PageLinks = {"{"} </Navitem>
          <Navitem style={{ paddingLeft: "0px" }}>
            0:{" "}
            <a style={{ color: lightBlue }} href="/#about">
              {" "}
              'About'
            </a>
            ,{" "}
          </Navitem>
          <Navitem>
            1:{" "}
            <a style={{ color: lightBlue }} href="/#projects">
              'Projects'
            </a>
            ,{" "}
          </Navitem>
          <Navitem>
            2:{" "}
            <a style={{ color: lightBlue }} href="/#contact">
              {" "}
              'Contact'
            </a>
            ,{" "}
          </Navitem>
          <Navitem>
            3:{" "}
            <a
              style={{ color: lightBlue }}
              href={Resume}
              target="_blank"
              rel="noreferrer"
            >
              'Resume'
            </a>{" "}
            {"}"}
          </Navitem>
        </>
      ) : (
        <>
          <Navitem style={{ paddingLeft: "0px" }}>
            <a style={{ color: lightBlue }} href="/#about">
              {" "}
              'About'
            </a>
          </Navitem>
          <Navitem>
            <a style={{ color: lightBlue }} href="/#projects">
              'Projects'
            </a>
          </Navitem>
          <Navitem>
            <a style={{ color: lightBlue }} href="/#contact">
              {" "}
              'Contact'
            </a>
          </Navitem>
          <Navitem>
            <a
              style={{ color: lightBlue }}
              href={Resume}
              target="_blank"
              rel="noreferrer"
            >
              'Resume'
            </a>
          </Navitem>
        </>
      )}
    </Nav>
  )
}

export default Navbar
