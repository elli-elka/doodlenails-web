import React from "react";
import "./Home.css";
import Portfoliophoto from "../components/Portfoliophoto";
import EditorialsPhoto from "../components/EditorialsPhoto";
import OtherWorkPhoto from "../components/OtherWorkPhoto";

function Home() {
  return (
    <>
      <EditorialsPhoto />
      <Portfoliophoto />
      <OtherWorkPhoto />
    </>
  );
}

export default Home;
