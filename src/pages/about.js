import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";

export default function About() {
  return (
    <div style={{ color: `teal` }}>
        <Link to="/contact/">Contactß</Link>
        <Header />
      <h1>About Gatsby</h1>
      <p>Such wow. Very React.</p>
    </div>
  )
}