import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import nailCovers from "./pages/nailCovers";
import './App.css'
import Header from "./components/Header";

function App() {
  return (

    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nailCovers" element={<nailCovers />} />
      </Routes>
      
    </>
  );
}

export default App;

