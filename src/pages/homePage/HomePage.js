import React from "react";
import image from "../../images/phonebook.png";
import { Hero } from "./HomePageStyled";

const HomePage = () => (
  <Hero>
    <h1> Hey! Welcome to your personal phonebook. Enjoy it!!! </h1>
    <img src={image} alt="phonebook" width="320" />
  </Hero>
);

export default HomePage;
