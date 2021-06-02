import styled from "styled-components"
import React from "react"
import themeOne from "./colorsThemes"

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
  font-family: 'Inconsolata', monospace;
  padding-left: 0px;
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

const Navbar = () => (
  <Nav>
    <NavItemLeft>
      EJB
    </NavItemLeft>
    <Navitem>Const PageLinks = {"{"} </Navitem>
    <Navitem style={{ paddingLeft: "0px"}}>
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
      <a style={{ color: lightBlue }} href="/#resume">
        'Resume'
      </a>{" "}
      {"}"}
    </Navitem>
  </Nav>
)

export default Navbar
