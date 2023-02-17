import React from "react";
import Header from "./Components/Header";
import Discover from "./Components/Hompage/Discover";
import Hero from "./Components/Hompage/Hero";
import Special from "./Components/Hompage/Special";
import StartExplore from "./Components/Hompage/StartExplore";
import NewArrival from "./Components/NewArrival";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Discover />
      <NewArrival />
      <StartExplore />
      <Special />
    </div>
  );
};

export default App;
