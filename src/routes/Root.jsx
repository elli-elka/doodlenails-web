import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import App from "../App";

export default function Root() {
  return (
    <div>
      <App />
      <div className="content">
     
      </div>
    </div>
  );
}

// <Outlet /> sat in the content div -- if it shows up any errors later