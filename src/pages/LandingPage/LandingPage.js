import React from "react";
import "./LandingPage.css";

import { Image } from "@mantine/core";

import { Navbar } from "../../components/Navbar/Navbar.jsx";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <div className="who-am-I-div">
        <div class="landing-page-image">
          <Image
            src={require("../../assets/landing-page-image.jpg")}
            alt="landing-page-image"
            height="100%"
            width="100%"
          />
        </div>
        <div class="who-am-I-text">
          <h1>Who are we?</h1>
          <p>
            I am a student at Chitkara University of Engineering and Technology,
            Punjab. I am a full stack developer. I created this website to learn
            more about me and my work and to share my knowledge with others.
          </p>
        </div>
      </div>
    </div>
  );
};
