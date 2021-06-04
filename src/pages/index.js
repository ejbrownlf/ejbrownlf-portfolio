import React from "react"
import { Styles } from '../styles/styles';
import { Navbar ,Landing, About, Projects, Solo, Contact, Footer } from '../components/index';

const Home = () => (
  <>
    <Styles />
    <Navbar />
    <Landing />
    <About />
    <Projects />
    <Solo />
    <Contact />
    <Footer />
  </>
);

export default Home