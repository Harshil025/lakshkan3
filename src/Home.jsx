import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/hyy.gif";
import Common from "./Common";

const Home = () => {
  return (
    <>
    <Common 
      name="Grow your Business with" 
      imgsrc={web} 
      visit="/service"
      btname="Get Started"
      />
    </>
  );
};

export default Home;
