import React from "react";
import "./Home.css";
import Portfoliophoto from "../components/homeComponents/Portfoliophoto";
import EditorialsPhoto from "../components/homeComponents/EditorialsPhoto";
import OtherWorkPhoto from "../components/homeComponents/OtherWorkPhoto";

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
