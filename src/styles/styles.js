import { createGlobalStyle } from "styled-components"
import themeOne from '../components/colorsThemes'

const {purple} = themeOne

export const Styles = createGlobalStyle`
  body {
    height:100%;
    background: ${purple};
    margin: 0;
    padding: 0px 20px;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
  }
  `
