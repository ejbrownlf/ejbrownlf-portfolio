import React from "react"
import { Styles } from '../styles/styles';
import { Navbar ,Landing, About, Projects, Solo, Contact } from '../components/index';

const Home = () => (
  <>
    <Styles />
    <Navbar />
    <Landing />
    <About />
    <Projects />
    <Solo />
    {/* <Contact /> */}
  </>
);

export default Home