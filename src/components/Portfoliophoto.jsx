import { Parallax } from "react-parallax";
import ImageOne from "../assets/pap010contrast.jpg";
import "./Portfoliophoto.css";

const Portfoliophoto = () => (
  <Parallax className="photo" bgImage={ImageOne} strength={200}>
    <div className="content">
      <span className="img-txt">Portfolio</span>
    </div>
  </Parallax>
);

export default Portfoliophoto;
