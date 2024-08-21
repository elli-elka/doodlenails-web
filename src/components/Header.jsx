import MobileNav from "./MobileNav";
import Navigation from "./Navigation";

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

