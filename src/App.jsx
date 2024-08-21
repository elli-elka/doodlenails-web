import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import NailCovers from "./pages/NailCovers";
import './App.css'
import Header from "./components/Header";
import Bookings from "./pages/Bookings";

function App() {
  return (
    <>     
    <Header/>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/NailCovers" element={<NailCovers/>} />
        <Route path="/bookings" element={<Bookings />}/>
      </Routes>
      
    </>
  );
}

export default App;


// import React from "react";
// import Home from "./pages/Home";

// const App = () => {
//   return <>
//   <Home />
//   </>;
// };

// export default App;