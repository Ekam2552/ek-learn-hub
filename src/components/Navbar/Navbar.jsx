import React, { useState } from "react";
import "./Navbar.css";

import { authentication } from "../../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

import { Image } from "@mantine/core";

export const Navbar = () => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  // function for Signing In using Google
  const signInWithFirebase = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //function for Signing out from Google
  const signOutWithFirebase = () => {
    signOut(authentication)
      .then(() => {
        console.log("Signed Out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // check onStateChange using firebase
  authentication.onAuthStateChanged((user) => {
    if (user) {
      setIsUserSignedIn(true);
    } else {
      setIsUserSignedIn(false);
    }
  });

  return (
    <div class="navbar">
      <div class="logo">
        <Image
          src={require("../../assets/icon.png")}
          alt="logo"
          height="4rem"
          width="4rem"
        />
      </div>
      <div class="buttons">
        <a className="button" href="/">
          Home
        </a>
        <a className="button" href="/">
          Pricing
        </a>
        <a className="button" href="/">
          About Us
        </a>
        <a className="button" href="/">
          Contact Us
        </a>
        <a
          className="button"
          onClick={isUserSignedIn ? signOutWithFirebase : signInWithFirebase}
        >
          {isUserSignedIn
            ? `Sign Out ${authentication.currentUser.displayName}`
            : "Sign In"}
        </a>
      </div>
    </div>
  );
};
