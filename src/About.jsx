import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/kkk.gif";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common 
      name="Welcome to About page" 
      imgsrc={web} 
      visit="/contact"
      btname="Contact Now"
      />
    </>
  );
};

export default About;