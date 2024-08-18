import MobileNav from "./MobileNav";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Navigation/>

        <MobileNav />
      </div>
    </header>
  );
};

export default Header;

