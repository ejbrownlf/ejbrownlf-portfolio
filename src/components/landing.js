import React from 'react'
import styled from 'styled-components';
import themeOne from "./colorsThemes"

const { pink, white } = themeOne

const LandingContainer = styled.section`
display: flex;
box-sizing: border-box;
align-items: center;
flex-direction: column;
margin: 0 auto;
min-height: 100vh;
justify-content: center;
color: ${white};
max-width: 800px;

div {
    display: block;
    margin: 0px;
    margin-right: auto;
    padding: 0px;
}

h1 {
    font-size: 60px;
    padding: 0;
    margin: 10px 0 0 0 ;
}

h3 {
    font-size: 20px;
    margin: 0;
}
    
`;

const Landing = () => (
    <LandingContainer>
        
        <div><h3 style={{color: pink}}>Hello, I am;</h3></div>
        <div><h1 style={{fontWeight: 'bold'}}>Erik Brown;</h1></div>
        <div><h1 style={{color: '#919191', textShadow: ''}}>Developer and Engineer;</h1></div>
        <div><p> I am a developer from Huntsville, Al. I specialize in designing and building websites from the ground up. I particular enjoy creating the backend functionality for sites i.e. building things like algorithms, data structures, complex database queries, and building safeguards against cyber threats. Currently looking for a new oppurtunity in the world of web development and/or cybersecurity;</p></div>

    </LandingContainer>
)

export default Landing;